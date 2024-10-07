const webpack = require('webpack');
const packageJSON = require('./package.json');
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const { RsdoctorWebpackPlugin } = require('@rsdoctor/webpack-plugin');

const isProduction = mode => mode === 'production';
const isDevelopment = mode => !isProduction(mode);

const variants = {
  clerk: 'clerk',
  clerkBrowser: 'clerk.browser',
  clerkHeadless: 'clerk.headless',
  clerkHeadlessBrowser: 'clerk.headless.browser',
};

const variantToSourceFile = {
  [variants.clerk]: './src/index.ts',
  [variants.clerkBrowser]: './src/index.browser.ts',
  [variants.clerkHeadless]: './src/index.headless.ts',
  [variants.clerkHeadlessBrowser]: './src/index.headless.browser.ts',
};

/** @returns { import('webpack').Configuration } */
const common = ({ mode }) => {
  /** @type { import('webpack').Configuration } */
  return {
    mode,
    resolve: {
      // Attempt to resolve these extensions in order
      // @see https://webpack.js.org/configuration/resolve/#resolveextensions
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: isDevelopment(mode),
        __PKG_VERSION__: JSON.stringify(packageJSON.version),
        __PKG_NAME__: JSON.stringify(packageJSON.name),
      }),
      new webpack.EnvironmentPlugin({
        CLERK_ENV: mode,
        NODE_ENV: mode,
      }),
      process.env.RSDOCTOR &&
        new RsdoctorWebpackPlugin({
          mode: process.env.RSDOCTOR === 'brief' ? 'brief' : 'normal',
          disableClientServer: process.env.RSDOCTOR === 'brief',
        }),
    ].filter(Boolean),
    output: {
      chunkFilename: `[name]_[fullhash:6]_${packageJSON.version}.js`,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          zxcvbnTSCoreVendor: {
            test: /[\\/]node_modules[\\/](@zxcvbn-ts\/core|fastest-levenshtein)[\\/]/,
            name: 'zxcvbn-ts-core',
            chunks: 'all',
          },
          zxcvbnTSCommonVendor: {
            test: /[\\/]node_modules[\\/](@zxcvbn-ts)[\\/](language-common)[\\/]/,
            name: 'zxcvbn-common',
            chunks: 'all',
          },
          coinbaseWalletSDKVendor: {
            test: /[\\/]node_modules[\\/](@coinbase\/wallet-sdk|ieee754|preact|keccak|buffer|string_decoder|sha\.js|base64-js|safe-buffer|util-deprecate|inherits)[\\/]/,
            name: 'coinbase-wallet-sdk',
            chunks: 'all',
          },
          common: {
            minChunks: 1,
            name: 'ui-common',
            priority: -20,
            test: module =>
              module.resource &&
              !module.resource.includes('/ui/components') &&
              !module.resource.includes('packages/elements') &&
              !module.resource.includes('packages/ui'),
          },
          defaultVendors: {
            minChunks: 1,
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
          },
          commonNew: {
            minChunks: 2,
            name: 'common-new',
            chunks(chunk) {
              return chunk.name?.startsWith('rebuild--');
            },
            priority: 0,
          },
          react: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react-dom|scheduler)[\\/]/,
            name: 'framework',
            priority: 40,
            enforce: true,
          },
        },
      },
    },
  };
};

/** @type { () => (import('webpack').RuleSetRule) }  */
const svgLoader = () => {
  return {
    test: /\.svg$/,
    resolve: {
      fullySpecified: false,
    },
    use: {
      loader: '@svgr/webpack',
      options: {
        svgo: true,
        svgoConfig: {
          floatPrecision: 3,
          transformPrecision: 1,
          plugins: ['preset-default', 'removeDimensions', 'removeStyleElement'],
        },
      },
    },
  };
};

/** @type { () => (import('webpack').RuleSetRule) } */
const typescriptLoaderProd = () => {
  return {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    resolve: {
      fullySpecified: false,
    },
    use: [
      {
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
    ],
  };
};

/** @type { () => (import('webpack').RuleSetRule) } */
const typescriptLoaderDev = () => {
  return {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    resolve: {
      fullySpecified: false,
    },
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.dev.json',
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
        },
      },
    ],
  };
};

/** @type { () => (import('webpack').RuleSetRule) } */
const clerkUICSSLoader = () => {
  // This emits a module exporting the URL to the styles.css file.
  return {
    test: /packages\/ui\/dist\/styles\.css/,
    type: 'asset/resource',
  };
};

/** @type { () => (import('webpack').Configuration) } */
const commonForProd = () => {
  return {
    devtool: undefined,
    module: {
      rules: [svgLoader(), typescriptLoaderProd(), clerkUICSSLoader()],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
      globalObject: 'globalThis',
    },
    optimization: {
      minimize: false,
      minimizer: [
        compiler => {
          new TerserPlugin({
            terserOptions: {
              compress: {
                unused: true,
                dead_code: true,
                passes: 2,
              },
              mangle: {
                safari10: true,
              },
            },
          }).apply(compiler);
        },
      ],
    },
    plugins: [
      // new webpack.optimize.LimitChunkCountPlugin({
      //   maxChunks: 5,
      // }),
      // new webpack.optimize.MinChunkSizePlugin({
      //   minChunkSize: 10000,
      // })
    ],
  };
};

// /** @type { () => (import('webpack').Configuration) } */
// const externalsForHeadless = () => {
//   return {
//     externals: {
//       react: 'react',
//       'react-dom': 'react-dom',
//     },
//   };
// };

const entryForVariant = variant => {
  return { entry: { [variant]: variantToSourceFile[variant] } };
};

/** @type { () => (import('webpack').Configuration)[] } */
const prodConfig = ({ mode }) => {
  const clerkBrowser = merge(entryForVariant(variants.clerkBrowser), common({ mode }), commonForProd());

  const clerkHeadless = merge(
    entryForVariant(variants.clerkHeadless),
    common({ mode }),
    commonForProd(),
    // Disable chunking for the headless variant, since it's meant to be used in a non-browser environment and
    // attempting to load chunks causes issues due to usage of a dynamic publicPath. We generally are only concerned with
    // chunking in our browser bundles.
    {
      output: {
        publicPath: '',
      },
      optimization: {
        splitChunks: false,
      },
    },
    // externalsForHeadless(),
  );

  const clerkHeadlessBrowser = merge(
    entryForVariant(variants.clerkHeadlessBrowser),
    common({ mode }),
    commonForProd(),
    // externalsForHeadless(),
  );

  const clerkEsm = merge(entryForVariant(variants.clerk), common({ mode }), commonForProd(), {
    experiments: {
      outputModule: true,
    },
    output: {
      filename: '[name].mjs',
      libraryTarget: 'module',
    },
    plugins: [
      // Include the lazy chunks in the bundle as well
      // so that the final bundle can be imported and bundled again
      // by a different bundler, eg the webpack instance used by react-scripts
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  });

  const clerkCjs = merge(clerkEsm, {
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs',
      chunkFormat: 'commonjs',
      scriptType: 'text/javascript',
    },
  });

  return [clerkBrowser, clerkHeadless, clerkHeadlessBrowser, clerkEsm, clerkCjs];
};

const devConfig = ({ mode, env }) => {
  const variant = env.variant || variants.clerkBrowser;
  // accept an optional devOrigin environment option to change the origin of the dev server.
  // By default we use https://js.lclclerk.com which is what our local dev proxy looks for.
  const devUrl = new URL(env.devOrigin || 'https://js.lclclerk.com');

  const commonForDev = () => {
    return {
      module: {
        rules: [svgLoader(), typescriptLoaderDev(), clerkUICSSLoader()],
      },
      plugins: [
        new ReactRefreshWebpackPlugin({ overlay: { sockHost: devUrl.host } }),
        ...(env.serveAnalyzer ? [new BundleAnalyzerPlugin()] : []),
      ],
      devtool: 'eval-cheap-source-map',
      output: {
        publicPath: `${devUrl.origin}/npm`,
        crossOriginLoading: 'anonymous',
        filename: `${variant}.js`,
        libraryTarget: 'umd',
      },
      optimization: {
        minimize: false,
      },
      devServer: {
        allowedHosts: ['all'],
        headers: { 'Access-Control-Allow-Origin': '*' },
        host: '0.0.0.0',
        port: 4000,
        hot: true,
        liveReload: false,
        client: { webSocketURL: `auto://${devUrl.host}/ws` },
      },
    };
  };

  const entryToConfigMap = {
    // prettier-ignore
    [variants.clerk]: merge(
      entryForVariant(variants.clerk),
      common({ mode }),
      commonForDev(),
    ),
    // prettier-ignore
    [variants.clerkBrowser]: merge(
      entryForVariant(variants.clerkBrowser),
      common({ mode }),
      commonForDev(),
    ),
    [variants.clerkHeadless]: merge(
      entryForVariant(variants.clerkHeadless),
      common({ mode }),
      commonForDev(),
      // externalsForHeadless(),
    ),
    [variants.clerkHeadlessBrowser]: merge(
      entryForVariant(variants.clerkHeadlessBrowser),
      common({ mode }),
      commonForDev(),
      // externalsForHeadless(),
    ),
  };

  if (!entryToConfigMap[variant]) {
    throw new Error('Clerk variant does not exist in config');
  }

  return entryToConfigMap[variant];
};

module.exports = env => {
  const mode = env.production ? 'production' : 'development';
  return isProduction(mode) ? prodConfig({ mode, env }) : devConfig({ mode, env });
};
