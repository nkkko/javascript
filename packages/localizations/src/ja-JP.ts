/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const jaJP: LocalizationResource = {
  locale: 'ja-JP',
  backButton: '戻る',
  badge__default: 'デフォルト',
  badge__otherImpersonatorDevice: '他の模倣者デバイス',
  badge__primary: 'プライマリ',
  badge__requiresAction: 'アクションが必要',
  badge__thisDevice: 'このデバイス',
  badge__unverified: '未確認',
  badge__userDevice: 'ユーザーデバイス',
  badge__you: 'あなた',
  createOrganization: {
    formButtonSubmit: '組織を作成する',
    invitePage: {
      formButtonReset: 'スキップ',
    },
    title: '組織の作成',
  },
  dates: {
    lastDay: "昨日の{{ date | timeString('ja-JP') }}に",
    next6Days: "{{ date | weekday('ja-JP','long') }}の{{ date | timeString('ja-JP') }}に",
    nextDay: "明日の{{ date | timeString('ja-JP') }}に",
    numeric: "{{ date | numeric('ja-JP') }}に",
    previous6Days: "{{ date | weekday('ja-JP','long') }}の{{ date | timeString('ja-JP') }}に",
    sameDay: "今日の{{ date | timeString('ja-JP') }}に",
  },
  dividerText: 'または',
  footerActionLink__useAnotherMethod: '別の方法を使用する',
  footerPageLink__help: 'ヘルプ',
  footerPageLink__privacy: 'プライバシー',
  footerPageLink__terms: '利用規約',
  formButtonPrimary: '続ける',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'パスワードをお忘れですか？',
  formFieldError__matchingPasswords: 'パスワードが一致します。',
  formFieldError__notMatchingPasswords: 'パスワードが一致しません。',
  formFieldError__verificationLinkExpired: '検証リンクの有効期限が切れています。新しいリンクをリクエストしてください。',
  formFieldHintText__optional: '任意',
  formFieldHintText__slug: 'A slug is a human-readable ID that must be unique. It’s often used in URLs.',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Delete account',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses:
    'スペースまたはカンマで区切って、1つ以上のメールアドレスを入力または貼り付けてください',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations: 'このドメインの自動招待を有効にする',
  formFieldLabel__backupCode: 'バックアップコード',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__confirmPassword: 'パスワードの確認',
  formFieldLabel__currentPassword: '現在のパスワード',
  formFieldLabel__emailAddress: 'メールアドレス',
  formFieldLabel__emailAddress_username: 'メールアドレスまたはユーザー名',
  formFieldLabel__emailAddresses: 'メールアドレス',
  formFieldLabel__firstName: '名',
  formFieldLabel__lastName: '姓',
  formFieldLabel__newPassword: '新しいパスワード',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: '組織名',
  formFieldLabel__organizationSlug: 'スラグURL',
  formFieldLabel__password: 'パスワード',
  formFieldLabel__phoneNumber: '電話番号',
  formFieldLabel__role: '役割',
  formFieldLabel__signOutOfOtherSessions: '他のデバイスからサインアウト',
  formFieldLabel__username: 'ユーザー名',
  impersonationFab: {
    action__signOut: 'サインアウト',
    title: '{{identifier}}としてサインイン中',
  },
  membershipRole__admin: '管理者',
  membershipRole__basicMember: 'メンバー',
  membershipRole__guestMember: 'ゲスト',
  organizationList: {
    action__createOrganization: '組織を作成する',
    action__invitationAccept: '参加する',
    action__suggestionsAccept: '参加をリクエストする',
    createOrganization: 'Create Organization',
    invitationAcceptedLabel: 'Joined',
    subtitle: 'to continue to {{applicationName}}',
    suggestionsAcceptedLabel: 'Pending approval',
    title: 'Choose an account',
    titleWithoutPersonal: 'Choose an organization',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Automatic invitations',
    badge__automaticSuggestion: 'Automatic suggestions',
    badge__manualInvitation: 'No automatic enrollment',
    badge__unverified: 'Unverified',
    createDomainPage: {
      subtitle:
        'Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.',
      title: 'Add domain',
    },
    invitePage: {
      detailsTitle__inviteFailed: '招待状を送信できませんでした。以下を修正してもう一度試してください:',
      formButtonPrimary__continue: '招待状を送信する',
      selectDropdown__role: 'Select role',
      subtitle: 'この組織に新しいメンバーを招待する',
      successMessage: '招待状が正常に送信されました',
      title: 'メンバーを招待',
    },
    membersPage: {
      action__invite: '招待',
      activeMembersTab: {
        menuAction__remove: 'メンバーの削除',
        tableHeader__actions: '',
        tableHeader__joined: '参加日時',
        tableHeader__role: '役割',
        tableHeader__user: 'ユーザー',
      },
      detailsTitle__emptyRow: '表示するメンバーはありません',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.',
          headerTitle: 'Automatic invitations',
          primaryButton: 'Manage verified domains',
        },
        manualInvitations: {
          headerSubtitle: 'Manually invite members and manage existing invitations.',
          headerTitle: 'Individual invitations',
        },
        table__emptyRow: 'No invitations to display',
      },
      invitedMembersTab: {
        menuAction__revoke: '招待を取り消す',
        tableHeader__invited: '招待済み',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.',
          headerTitle: 'Automatic suggestions',
          primaryButton: 'Manage verified domains',
        },
        menuAction__approve: 'Approve',
        menuAction__reject: 'Reject',
        requests: {
          headerSubtitle: 'Browse and manage users who requested to join the organization.',
          headerTitle: 'Requests',
        },
        tableHeader__requested: 'Requested access',
        table__emptyRow: 'No requests to display',
      },
      start: {
        headerTitle__invitations: 'Invitations',
        headerTitle__members: 'Members',
        headerTitle__requests: 'Requests',
      },
    },
    navbar: {
      description: 'Manage your organization.',
      general: 'General',
      members: 'Members',
      title: 'Organization',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: 'Are you sure you want to delete this organization?',
          messageLine2: 'This action is permanent and irreversible.',
          successMessage: 'You have deleted the organization.',
          title: 'Delete organization',
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1:
            'この組織から脱退してもよろしいですか？この組織とそのアプリケーションへのアクセスが失われます。',
          messageLine2: 'この操作は永久的で取り消すことはできません。',
          successMessage: '組織から脱退しました。',
          title: '組織を脱退',
        },
        title: '注意',
      },
      domainSection: {
        menuAction__manage: 'Manage',
        menuAction__remove: 'Delete',
        menuAction__verify: 'Verify',
        primaryButton: 'Add domain',
        subtitle:
          'Allow users to join the organization automatically or request to join based on a verified email domain.',
        title: 'Verified domains',
      },
      successMessage: '組織が更新されました。',
      title: '組織プロフィール',
    },
    removeDomainPage: {
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
      title: 'Remove domain',
    },
    start: {
      headerTitle__general: 'General',
      headerTitle__members: 'メンバー',
      profileSection: {
        primaryButton: 'Edit profile',
        title: 'Organization Profile',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'Removing this domain will affect invited users.',
        removeDomainActionLabel__remove: 'Remove domain',
        removeDomainSubtitle: 'Remove this domain from your verified domains',
        removeDomainTitle: 'Remove domain',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Users are automatically invited to join the organization when they sign-up and can join anytime.',
        automaticInvitationOption__label: 'Automatic invitations',
        automaticSuggestionOption__description:
          'Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.',
        automaticSuggestionOption__label: 'Automatic suggestions',
        calloutInfoLabel: 'Changing the enrollment mode will only affect new users.',
        calloutInvitationCountLabel: 'Pending invitations sent to users: {{count}}',
        calloutSuggestionCountLabel: 'Pending suggestions sent to users: {{count}}',
        formButton__save: 'Save',
        manualInvitationOption__description: 'Users can only be invited manually to the organization.',
        manualInvitationOption__label: 'No automatic enrollment',
        subtitle: 'Choose how users from this domain can join the organization.',
      },
      start: {
        headerTitle__danger: 'Danger',
        headerTitle__enrollment: 'Enrollment options',
      },
      subtitle: 'The domain {{domain}} is now verified. Continue by selecting enrollment mode.',
      title: 'Update {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'Enter the verification code sent to your email address',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
      subtitle: 'The domain {{domainName}} needs to be verified via email.',
      subtitleVerificationCodeScreen: 'A verification code was sent to {{emailAddress}}. Enter the code to continue.',
      title: 'Verify domain',
    },
  },
  organizationSwitcher: {
    action__createOrganization: '組織の作成',
    action__invitationAccept: 'Join',
    action__manageOrganization: '組織の管理',
    action__suggestionsAccept: 'Request to join',
    notSelected: '組織が選択されていません',
    personalWorkspace: '個人ワークスペース',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: '次へ',
  paginationButton__previous: '前へ',
  paginationRowText__displaying: '表示中',
  paginationRowText__of: '全',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Add account',
      action__signOutAll: 'Sign out of all accounts',
      subtitle: 'Select the account with which you wish to continue.',
      title: 'Choose an account',
    },
    alternativeMethods: {
      actionLink: 'ヘルプを取得',
      actionText: 'Don’t have any of these?',
      blockButton__backupCode: 'バックアップコードを使用する',
      blockButton__emailCode: '{{identifier}}にメールコードを送信',
      blockButton__emailLink: '{{identifier}}にメールリンクを送信',
      blockButton__password: 'パスワードでサインインする',
      blockButton__phoneCode: '{{identifier}}にSMSコードを送信',
      blockButton__totp: '認証アプリを使用する',
      getHelp: {
        blockButton__emailSupport: 'メールサポート',
        content:
          'アカウントにサインインできない場合は、メールでお問い合わせいただければ、できるだけ早くアクセスを回復するためにお手伝いいたします。',
        title: 'ヘルプを取得',
      },
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      title: '別の方法を使用',
    },
    backupCodeMfa: {
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'バックアップコードを入力',
    },
    emailCode: {
      formTitle: '検証コード',
      resendButton: 'コードを再送信',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'メールを確認',
    },
    emailLink: {
      expired: {
        subtitle: '元のタブに戻って続行してください。',
        title: 'この検証リンクは期限切れです',
      },
      failed: {
        subtitle: '元のタブに戻って続行してください。',
        title: 'この検証リンクは無効です',
      },
      formSubtitle: 'メールに送信された検証リンクを使用してください',
      formTitle: '検証リンク',
      loading: {
        subtitle: 'まもなくリダイレクトされます',
        title: 'サインイン中...',
      },
      resendButton: 'リンクを再送信',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'メールを確認',
      unusedTab: {
        title: 'このタブを閉じてもかまいません',
      },
      verified: {
        subtitle: 'まもなくリダイレクトされます',
        title: '正常にサインインしました',
      },
      verifiedSwitchTab: {
        subtitle: '続行するには元のタブに戻ってください',
        subtitleNewTab: '新しく開いたタブに戻って続行してください',
        titleNewTab: '他のタブでサインイン済み',
      },
    },
    forgotPassword: {
      formTitle: 'パスワードリセットコード',
      resendButton: 'コードを再送信',
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      title: 'Reset password',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'パスワードをリセット',
      label__alternativeMethods: 'または、別の方法でサインインしてください。',
      title: 'パスワードをお忘れですか？',
    },
    noAvailableMethods: {
      message: 'サインインできません。利用可能な認証方法がありません。',
      subtitle: 'エラーが発生しました',
      title: 'サインインできません',
    },
    password: {
      actionLink: '別の方法を使用',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'パスワードを入力',
    },
    phoneCode: {
      formTitle: '検証コード',
      resendButton: 'コードを再送信',
      subtitle: '{{applicationName}} への続行のため',
      title: '電話を確認してください',
    },
    phoneCodeMfa: {
      formTitle: '検証コード',
      resendButton: 'コードを再送信',
      subtitle: '',
      title: '電話を確認してください',
    },
    resetPassword: {
      formButtonPrimary: 'パスワードをリセット',
      requiredMessage:
        'An account already exists with an unverified email address. Please reset your password for security.',
      successMessage: 'パスワードが正常に変更されました。お待ちください、サインインしています。',
      title: 'パスワードをリセット',
    },
    resetPasswordMfa: {
      detailsLabel: 'パスワードをリセットする前に、身元を確認する必要があります。',
    },
    start: {
      actionLink: 'サインアップ',
      actionLink__use_email: 'メールアドレスを使用',
      actionLink__use_email_username: 'メールアドレスまたはユーザー名を使用',
      actionLink__use_phone: '電話番号を使用',
      actionLink__use_username: 'ユーザー名を使用',
      actionText: 'アカウントをお持ちでないですか？',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'サインイン',
    },
    totpMfa: {
      formTitle: '検証コード',
      subtitle: '',
      title: '二段階認証',
    },
  },
  signInEnterPasswordTitle: 'パスワードを入力してください',
  signUp: {
    continue: {
      actionLink: 'サインイン',
      actionText: 'アカウントをお持ちですか？',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: '未入力のフィールドを入力',
    },
    emailCode: {
      formSubtitle: 'メールアドレスに送信された確認コードを入力してください',
      formTitle: '確認コード',
      resendButton: 'コードを再送信',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'メールアドレスを確認',
    },
    emailLink: {
      formSubtitle: 'メールアドレスに送信された確認リンクを使用してください',
      formTitle: '確認リンク',
      loading: {
        title: '登録中...',
      },
      resendButton: 'リンクを再送信',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'メールアドレスを確認',
      verified: {
        title: '登録が完了しました',
      },
      verifiedSwitchTab: {
        subtitle: '続行するために新しく開いたタブに戻ってください',
        subtitleNewTab: '続行するために前のタブに戻ってください',
        title: 'メールアドレスが正常に確認されました',
      },
    },
    phoneCode: {
      formSubtitle: '電話番号に送信された確認コードを入力してください',
      formTitle: '確認コード',
      resendButton: 'コードを再送信',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: '電話番号を確認',
    },
    start: {
      actionLink: 'サインイン',
      actionText: 'アカウントをお持ちですか？',
      subtitle: '{{applicationName}}へのアクセスを続ける',
      title: 'アカウントを作成',
    },
  },
  socialButtonsBlockButton: '{{provider|titleize}}で続ける',
  unstable__errors: {
    captcha_invalid:
      'Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.',
    captcha_unavailable:
      'Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.',
    form_code_incorrect: '',
    form_identifier_exists: '',
    form_identifier_not_found: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Email address must be a valid email address.',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_max_length_exceeded__first_name: 'First name should not exceed 256 characters.',
    form_param_max_length_exceeded__last_name: 'Last name should not exceed 256 characters.',
    form_param_max_length_exceeded__name: 'Name should not exceed 256 characters.',
    form_param_nil: '',
    form_password_incorrect: '',
    form_password_length_too_short: '',
    form_password_not_strong_enough: 'パスワードの強度が不十分です。',
    form_password_pwned:
      'このパスワードは侵害の一部として見つかったため使用できません。別のパスワードを試してください。',
    form_password_size_in_bytes_exceeded:
      'パスワードのバイト数が上限を超えています。短くするか、一部の特殊文字を削除してください。',
    form_password_validation_failed: 'パスワードが間違っています',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed: 'You cannot delete your last identification.',
    not_allowed_access: '',
    passwordComplexity: {
      maximumLength: '{{length}}文字未満',
      minimumLength: '{{length}}文字以上',
      requireLowercase: '小文字を含む',
      requireNumbers: '数字を含む',
      requireSpecialCharacter: '特殊文字を含む',
      requireUppercase: '大文字を含む',
      sentencePrefix: 'パスワードは次の条件を満たす必要があります：',
    },
    phone_number_exists: 'This phone number is taken. Please try another.',
    zxcvbn: {
      couldBeStronger: 'パスワードは有効ですが、もう少し強化できます。文字を追加してみてください。',
      goodPassword: '素晴らしい仕事です。これは優れたパスワードです。',
      notEnough: 'パスワードの強度が十分ではありません。',
      suggestions: {
        allUppercase: '全ての文字を大文字にするのではなく、一部の文字を大文字にしてください。',
        anotherWord: 'より一般的でない単語を追加してください。',
        associatedYears: '自分に関連する年号は避けてください。',
        capitalization: '最初の文字以外も大文字にしてください。',
        dates: '自分に関連する日付や年号は避けてください。',
        l33t: "予測可能な文字の代替（例：'@' で 'a' を置き換える）を避けてください。",
        longerKeyboardPattern: '長いキーボードパターンを使用し、タイピングの方向を複数回変えてください。',
        noNeed: 'シンボル、数字、大文字の使用なしでも強力なパスワードを作成できます。',
        pwned: '他の場所でこのパスワードを使用している場合は、変更する必要があります。',
        recentYears: '最近の年号は避けてください。',
        repeated: '繰り返される単語や文字を避けてください。',
        reverseWords: '一般的な単語の逆さ読みは避けてください。',
        sequences: '一般的な文字の並びを避けてください。',
        useWords: '複数の単語を使用してくださいが、一般的なフレーズは避けてください。',
      },
      warnings: {
        common: 'これは一般的に使われるパスワードです。',
        commonNames: '一般的な名前や姓は推測しやすいです。',
        dates: '日付は推測しやすいです。',
        extendedRepeat: '「abcabcabc」といった繰り返しパターンは推測しやすいです。',
        keyPattern: '短いキーボードパターンは推測しやすいです。',
        namesByThemselves: '単体の名前や姓は推測しやすいです。',
        pwned: 'このパスワードはインターネット上のデータ侵害によって公開されています。',
        recentYears: '最近の年号は推測しやすいです。',
        sequences: '「abc」といった一般的な文字の並びは推測しやすいです。',
        similarToCommon: 'これは一般的に使われるパスワードに類似しています。',
        simpleRepeat: '「aaa」といった繰り返し文字は推測しやすいです。',
        straightRow: 'キーボード上の連続した行は推測しやすいです。',
        topHundred: 'これは頻繁に使われるパスワードです。',
        topTen: 'これはよく使われるパスワードです。',
        userInputs: '個人情報やページに関連するデータは含まれていないはずです。',
        wordByItself: '単語単体では推測しやすいです。',
      },
    },
  },
  userButton: {
    action__addAccount: 'アカウントの追加',
    action__manageAccount: 'アカウントの管理',
    action__signOut: 'サインアウト',
    action__signOutAll: '全てのアカウントからサインアウト',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'コピー済み！',
      actionLabel__copy: 'すべてコピー',
      actionLabel__download: '.txtでダウンロード',
      actionLabel__print: '印刷',
      infoText1: 'このアカウントではバックアップコードが有効になります。',
      infoText2:
        'バックアップコードは秘密に保管し、安全に保存してください。疑わしい場合はバックアップコードを再生成することができます。',
      subtitle__codelist: 'バックアップコードを安全に保管し、秘密にしてください。',
      successMessage:
        'バックアップコードが有効になりました。認証デバイスにアクセスできない場合、これらのいずれかを使用してアカウントにサインインできます。各コードは一度しか使用できません。',
      successSubtitle: '認証デバイスにアクセスできない場合、これらのいずれかを使用してアカウントにサインインできます。',
      title: 'バックアップコードの追加',
      title__codelist: 'バックアップコード',
    },
    connectedAccountPage: {
      formHint: 'アカウントを連携するプロバイダを選択してください。',
      formHint__noAccounts: '利用可能な外部アカウントプロバイダはありません。',
      removeResource: {
        messageLine1: '{{identifier}}はこのアカウントから削除されます。',
        messageLine2: 'この連携アカウントを使用することはできなくなり、関連する機能も使用できなくなります。',
        successMessage: '{{connectedAccount}}がアカウントから削除されました。',
        title: '連携アカウントの削除',
      },
      socialButtonsBlockButton: '{{provider|titleize}}アカウントを連携する',
      successMessage: 'プロバイダがアカウントに追加されました',
      title: '連携アカウントの追加',
    },
    deletePage: {
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: 'Delete account',
      messageLine1: 'Are you sure you want to delete your account?',
      messageLine2: 'This action is permanent and irreversible.',
      title: 'Delete account',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'このメールアドレスには検証コードが含まれたメールが送信されます。',
        formSubtitle: '{{identifier}}に送信された検証コードを入力してください。',
        formTitle: '検証コード',
        resendButton: 'コードを再送信',
        successMessage: 'メールアドレス{{identifier}}がアカウントに追加されました。',
      },
      emailLink: {
        formHint: 'このメールアドレスには検証リンクが含まれたメールが送信されます。',
        formSubtitle: '{{identifier}}に送信されたメールの検証リンクをクリックしてください。',
        formTitle: '検証リンク',
        resendButton: 'リンクを再送信',
        successMessage: 'メールアドレス{{identifier}}がアカウントに追加されました。',
      },
      removeResource: {
        messageLine1: '{{identifier}}はこのアカウントから削除されます。',
        messageLine2: 'このメールアドレスを使用してのサインインはできなくなります。',
        successMessage: '{{emailAddress}}がアカウントから削除されました。',
        title: 'メールアドレスの削除',
      },
      title: 'メールアドレスの追加',
    },
    formButtonPrimary__continue: '続行',
    formButtonPrimary__finish: '完了',
    formButtonPrimary__save: 'Save',
    formButtonReset: 'キャンセル',
    mfaPage: {
      formHint: '追加する方法を選択してください。',
      title: '二段階認証の追加',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: '電話番号を追加',
      removeResource: {
        messageLine1: '{{identifier}}はサインイン時に認証コードを受け取らなくなります。',
        messageLine2: 'アカウントのセキュリティが低下する可能性があります。本当に削除しますか？',
        successMessage: '{{mfaPhoneCode}}のSMSコード二段階認証が削除されました。',
        title: '二段階認証の削除',
      },
      subtitle__availablePhoneNumbers: 'SMSコード二段階認証のために登録する電話番号を選択してください。',
      subtitle__unavailablePhoneNumbers: 'SMSコード二段階認証のために利用可能な電話番号はありません。',
      successMessage1:
        'When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      successMessage2:
        'Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.',
      successTitle: 'SMS code verification enabled',
      title: 'SMSコード認証の追加',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: '代わりにQRコードをスキャンする',
        buttonUnableToScan__nonPrimary: 'QRコードをスキャンできませんか？',
        infoText__ableToScan:
          '認証アプリで新しいサインイン方法を設定し、以下のQRコードをスキャンしてアカウントとリンクさせます。',
        infoText__unableToScan: '認証アプリで新しいサインイン方法を設定し、以下のキーを入力してください。',
        inputLabel__unableToScan1:
          'タイムベースまたはワンタイムパスワードが有効になっていることを確認し、アカウントのリンクを完了してください。',
        inputLabel__unableToScan2:
          'また、認証アプリがTOTP URIをサポートしている場合は、完全なURIをコピーすることもできます。',
      },
      removeResource: {
        messageLine1: 'この認証アプリからの検証コードは、サインイン時には不要になります。',
        messageLine2: 'アカウントのセキュリティが低下する可能性があります。本当に削除しますか？',
        successMessage: '認証アプリを使用した二段階認証が削除されました。',
        title: '二段階認証の削除',
      },
      successMessage:
        '二段階認証が有効になりました。サインイン時には、この認証アプリからの検証コードを追加のステップとして入力する必要があります。',
      title: '認証アプリの追加',
      verifySubtitle: '認証アプリで生成された検証コードを入力してください。',
      verifyTitle: '検証コード',
    },
    mobileButton__menu: 'メニュー',
    navbar: {
      account: 'Profile',
      description: 'Manage your account info.',
      security: 'Security',
      title: 'Account',
    },
    passwordPage: {
      changePasswordSuccessMessage: 'パスワードが更新されました。',
      changePasswordTitle: 'パスワードの変更',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      sessionsSignedOutSuccessMessage: '他のすべてのデバイスからサインアウトされました。',
      successMessage: 'パスワードが設定されました。',
      title: 'パスワードの設定',
    },
    phoneNumberPage: {
      infoText: 'この電話番号には検証リンクが含まれたテキストメッセージが送信されます。',
      removeResource: {
        messageLine1: '{{identifier}}はこのアカウントから削除されます。',
        messageLine2: 'この電話番号を使用してのサインインはできなくなります。',
        successMessage: '{{phoneNumber}}がアカウントから削除されました。',
        title: '電話番号の削除',
      },
      successMessage: '{{identifier}}がアカウントに追加されました。',
      title: '電話番号の追加',
    },
    profilePage: {
      fileDropAreaHint: '10MB未満のJPG、PNG、GIF、またはWEBP画像をアップロードしてください',
      imageFormDestructiveActionSubtitle: '画像の削除',
      imageFormSubtitle: '画像のアップロード',
      imageFormTitle: 'プロフィール画像',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'プロフィールが更新されました。',
      title: 'プロフィールの更新',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'デバイスからサインアウト',
        title: 'アクティブなデバイス',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: '再試行',
        actionLabel__reauthorize: '今すぐ認証',
        destructiveActionTitle: '削除',
        primaryButton: 'アカウントを連携する',
        subtitle__reauthorize:
          'The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues',
        title: '連携アカウント',
      },
      dangerSection: {
        deleteAccountButton: 'Delete Account',
        title: 'Account termination',
      },
      emailAddressesSection: {
        destructiveAction: 'メールアドレスの削除',
        detailsAction__nonPrimary: 'プライマリに設定する',
        detailsAction__primary: '確認を完了する',
        detailsAction__unverified: '確認を完了する',
        primaryButton: 'メールアドレスの追加',
        title: 'メールアドレス',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      headerTitle__account: 'アカウント',
      headerTitle__security: 'セキュリティ',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'コードを再生成',
          headerTitle: 'バックアップコード',
          subtitle__regenerate:
            '安全な新しいバックアップコードを取得します。以前のバックアップコードは削除され、使用することはできません。',
          title__regenerate: 'バックアップコードの再生成',
        },
        phoneCode: {
          actionLabel__setDefault: 'デフォルトに設定',
          destructiveActionLabel: '電話番号の削除',
        },
        primaryButton: '二段階認証を追加する',
        title: '二段階認証',
        totp: {
          destructiveActionTitle: '削除',
          headerTitle: '認証アプリケーション',
        },
      },
      passwordSection: {
        primaryButton__changePassword: 'パスワードを変更する',
        primaryButton__setPassword: 'パスワードを設定する',
        title: 'パスワード',
      },
      phoneNumbersSection: {
        destructiveAction: '電話番号の削除',
        detailsAction__nonPrimary: 'プライマリに設定する',
        detailsAction__primary: '確認を完了する',
        detailsAction__unverified: '確認を完了する',
        primaryButton: '電話番号の追加',
        title: '電話番号',
      },
      profileSection: {
        primaryButton: 'Edit Profile',
        title: 'プロフィール',
      },
      usernameSection: {
        primaryButton__changeUsername: 'ユーザー名の変更',
        primaryButton__setUsername: 'ユーザー名の設定',
        title: 'ユーザー名',
      },
      web3WalletsSection: {
        destructiveAction: 'ウォレットの削除',
        primaryButton: 'Web3ウォレット',
        title: 'Web3ウォレット',
      },
    },
    usernamePage: {
      successMessage: 'ユーザー名が更新されました。',
      title: 'ユーザー名の更新',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}}はこのアカウントから削除されます。',
        messageLine2: 'このWeb3ウォレットを使用してのサインインはできなくなります。',
        successMessage: '{{web3Wallet}}がアカウントから削除されました。',
        title: 'Web3ウォレットの削除',
      },
      subtitle__availableWallets: 'アカウントに接続するWeb3ウォレットを選択してください。',
      subtitle__unavailableWallets: '利用可能なWeb3ウォレットはありません。',
      successMessage: 'ウォレットがアカウントに追加されました。',
      title: 'Web3ウォレットの追加',
    },
  },
} as const;
