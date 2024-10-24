import { Poller } from '@clerk/shared/poller';
import type {
  AttemptEmailAddressVerificationParams,
  CreateEmailLinkFlowReturn,
  CreateEnterpriseConnectionLinkFlowReturn,
  EmailAddressJSON,
  EmailAddressResource,
  IdentificationLinkResource,
  PrepareEmailAddressVerificationParams,
  StartEmailLinkFlowParams,
  StartEnterpriseConnectionLinkFlowParams,
  VerificationResource,
} from '@clerk/types';

import { clerkVerifyEmailAddressCalledBeforeCreate } from '../errors';
import { BaseResource, IdentificationLink, Verification } from './internal';

export class EmailAddress extends BaseResource implements EmailAddressResource {
  id!: string;
  emailAddress = '';
  matchesEnterpriseConnection = false;
  linkedTo: IdentificationLinkResource[] = [];
  verification!: VerificationResource;

  public constructor(data: Partial<EmailAddressJSON>, pathRoot: string);
  public constructor(data: EmailAddressJSON, pathRoot: string) {
    super();
    this.pathRoot = pathRoot;
    this.fromJSON(data);
  }

  create(): Promise<this> {
    return this._basePost({
      body: { email_address: this.emailAddress },
    });
  }

  prepareVerification = (params: PrepareEmailAddressVerificationParams): Promise<this> => {
    return this._basePost<EmailAddressJSON>({
      action: 'prepare_verification',
      body: { ...params },
    });
  };

  attemptVerification = (params: AttemptEmailAddressVerificationParams): Promise<this> => {
    const { code } = params || {};
    return this._basePost<EmailAddressJSON>({
      action: 'attempt_verification',
      body: { code },
    });
  };

  createEmailLinkFlow = (): CreateEmailLinkFlowReturn<StartEmailLinkFlowParams, EmailAddressResource> => {
    const { run, stop } = Poller();

    const startEmailLinkFlow = async ({ redirectUrl }: StartEmailLinkFlowParams): Promise<EmailAddressResource> => {
      if (!this.id) {
        clerkVerifyEmailAddressCalledBeforeCreate('SignUp');
      }
      await this.prepareVerification({
        strategy: 'email_link',
        redirectUrl: redirectUrl,
      });
      return new Promise((resolve, reject) => {
        void run(() => {
          return this.reload()
            .then(res => {
              if (res.verification.status === 'verified') {
                stop();
                resolve(res);
              }
            })
            .catch(err => {
              stop();
              reject(err);
            });
        });
      });
    };
    return { startEmailLinkFlow, cancelEmailLinkFlow: stop };
  };

  createEnterpriseConnectionLinkFlow = (): CreateEnterpriseConnectionLinkFlowReturn<
    StartEnterpriseConnectionLinkFlowParams,
    EmailAddressResource
  > => {
    const { run, stop } = Poller();

    const startEnterpriseConnectionLinkFlow = async ({
      redirectUrl,
    }: StartEnterpriseConnectionLinkFlowParams): Promise<EmailAddressResource> => {
      if (!this.id) {
        clerkVerifyEmailAddressCalledBeforeCreate('SignUp');
      }
      const response = await this.prepareVerification({
        strategy: 'saml',
        redirectUrl: redirectUrl,
      });
      if (!response.verification.externalVerificationRedirectURL) {
        throw Error('Unexpected: External verification redirect URL is missing');
      }
      window.open(response.verification.externalVerificationRedirectURL, '_blank');
      return new Promise((resolve, reject) => {
        void run(() => {
          return this.reload()
            .then(res => {
              if (res.verification.status === 'verified') {
                stop();
                resolve(res);
              }
            })
            .catch(err => {
              stop();
              reject(err);
            });
        });
      });
    };
    return { startEnterpriseConnectionLinkFlow, cancelEnterpriseConnectionLinkFlow: stop };
  };

  destroy = (): Promise<void> => this._baseDelete();

  toString = (): string => this.emailAddress;

  protected fromJSON(data: EmailAddressJSON | null): this {
    if (!data) {
      return this;
    }

    this.id = data.id;
    this.emailAddress = data.email_address;
    this.verification = new Verification(data.verification);
    this.matchesEnterpriseConnection = data.matches_enterprise_connection;
    this.linkedTo = (data.linked_to || []).map(link => new IdentificationLink(link));
    return this;
  }
}
