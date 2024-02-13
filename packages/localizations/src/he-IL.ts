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

export const heIL: LocalizationResource = {
  locale: 'he-IL',
  backButton: 'חזור',
  badge__default: 'ברירת מחדל',
  badge__otherImpersonatorDevice: 'מכשיר מחקה אחר',
  badge__primary: 'ראשי',
  badge__requiresAction: 'דורש פעולה',
  badge__thisDevice: 'מכשיר זה',
  badge__unverified: 'לא מאומת',
  badge__userDevice: 'מכשיר משתמש',
  badge__you: 'אתה',
  createOrganization: {
    formButtonSubmit: 'צור ארגון',
    invitePage: {
      formButtonReset: 'דלג',
    },
    title: 'צור ארגון',
  },
  dates: {
    lastDay: "אתמול ב-{{ date | timeString('iw') }}",
    next6Days: "{{ date | weekday('iw','long') }} ב-{{ date | timeString('iw') }}",
    nextDay: "מחר ב-{{ date | timeString('iw') }}",
    numeric: "{{ date | numeric('iw') }}",
    previous6Days: "{{ date | weekday('iw','long') }} האחרון ב-{{ date | timeString('iw') }}",
    sameDay: "היום ב-{{ date | timeString('iw') }}",
  },
  dividerText: 'או',
  footerActionLink__useAnotherMethod: 'השתמש בשיטה אחרת',
  footerPageLink__help: 'עזרה',
  footerPageLink__privacy: 'פרטיות',
  footerPageLink__terms: 'תנאים',
  formButtonPrimary: 'המשך',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'שכחת סיסמה?',
  formFieldError__matchingPasswords: 'הסיסמאות תואמות.',
  formFieldError__notMatchingPasswords: 'הסיסמאות אינן תואמות.',
  formFieldError__verificationLinkExpired: 'The verification link expired. Please request a new link.',
  formFieldHintText__optional: 'אופציונלי',
  formFieldHintText__slug: 'A slug is a human-readable ID that must be unique. It’s often used in URLs.',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Delete account',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses: 'הכנס או הדבק כתובת או כתובות דוא"ל, מופרדות ברווחים או פסיקים',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations: 'Enable automatic invitations for this domain',
  formFieldLabel__backupCode: 'קוד גיבוי',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__confirmPassword: 'אמת סיסמה',
  formFieldLabel__currentPassword: 'סיסמה נוכחית',
  formFieldLabel__emailAddress: 'כתובת דוא"ל',
  formFieldLabel__emailAddress_username: 'כתובת דוא"ל או שם משתמש',
  formFieldLabel__emailAddresses: 'כתובות דוא"ל',
  formFieldLabel__firstName: 'שם פרטי',
  formFieldLabel__lastName: 'שם משפחה',
  formFieldLabel__newPassword: 'סיסמה חדשה',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: 'שם הארגון',
  formFieldLabel__organizationSlug: 'כתובת URL של הארגון',
  formFieldLabel__password: 'סיסמה',
  formFieldLabel__phoneNumber: 'מספר טלפון',
  formFieldLabel__role: 'תפקיד',
  formFieldLabel__signOutOfOtherSessions: 'התנתק מכל המכשירים האחרים',
  formFieldLabel__username: 'שם משתמש',
  impersonationFab: {
    action__signOut: 'התנתק',
    title: 'מחובר כ{{identifier}}',
  },
  membershipRole__admin: 'מנהל',
  membershipRole__basicMember: 'חבר',
  membershipRole__guestMember: 'אורח',
  organizationList: {
    action__createOrganization: 'Create organization',
    action__invitationAccept: 'Join',
    action__suggestionsAccept: 'Request to join',
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
      detailsTitle__inviteFailed: 'לא היה ניתן לשלוח את ההזמנות. תקן את הבעיות הבאות ונסה שוב:',
      formButtonPrimary__continue: 'שלח הזמנות',
      selectDropdown__role: 'Select role',
      subtitle: 'הזמן חברים חדשים לארגון זה',
      successMessage: 'ההזמנות נשלחו בהצלחה',
      title: 'הזמן חברים',
    },
    membersPage: {
      action__invite: 'הזמן',
      activeMembersTab: {
        menuAction__remove: 'הסר חבר',
        tableHeader__actions: '',
        tableHeader__joined: 'הצטרף',
        tableHeader__role: 'תפקיד',
        tableHeader__user: 'משתמש',
      },
      detailsTitle__emptyRow: 'אין חברים להצגה',
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
        menuAction__revoke: 'בטל הזמנה',
        tableHeader__invited: 'הוזמן',
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
          messageLine1: 'האם אתה בטוח שאתה רוצה לעזוב את הארגון הזה? תאבד גישה לארגון זה וליישומים שלו.',
          messageLine2: 'פעולה זו היא סופית ובלתי הפיכה.',
          successMessage: 'עזבת את הארגון.',
          title: 'עזוב את הארגון',
        },
        title: 'סיכון',
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
      successMessage: 'הארגון עודכן.',
      title: 'פרופיל ארגון',
    },
    removeDomainPage: {
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
      title: 'Remove domain',
    },
    start: {
      headerTitle__general: 'General',
      headerTitle__members: 'חברים',
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
    action__createOrganization: 'צור ארגון',
    action__invitationAccept: 'Join',
    action__manageOrganization: 'נהל ארגון',
    action__suggestionsAccept: 'Request to join',
    notSelected: 'לא נבחרה ארגון',
    personalWorkspace: 'איזור אישי',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: 'הבא',
  paginationButton__previous: 'הקודם',
  paginationRowText__displaying: 'מציג',
  paginationRowText__of: 'מתוך',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Add account',
      action__signOutAll: 'Sign out of all accounts',
      subtitle: 'Select the account with which you wish to continue.',
      title: 'Choose an account',
    },
    alternativeMethods: {
      actionLink: 'קבל עזרה',
      actionText: 'Don’t have any of these?',
      blockButton__backupCode: 'השתמש בקוד גיבוי',
      blockButton__emailCode: 'שלח קוד באימייל ל-{{identifier}}',
      blockButton__emailLink: 'שלח קישור באימייל ל-{{identifier}}',
      blockButton__password: 'התחבר עם הסיסמה שלך',
      blockButton__phoneCode: 'שלח קוד SMS ל-{{identifier}}',
      blockButton__totp: 'השתמש באפליקציית האימות שלך',
      getHelp: {
        blockButton__emailSupport: 'מייל לתמיכה',
        content: 'אם אתה נתקל בקשיים בהתחברות לחשבונך, שלח לנו מייל ונעבוד איתך כדי לשחזר את הגישה בהקדם האפשרי.',
        title: 'קבל עזרה',
      },
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      title: 'השתמש בשיטה אחרת',
    },
    backupCodeMfa: {
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'הכנס קוד גיבוי',
    },
    emailCode: {
      formTitle: 'קוד אימות',
      resendButton: 'שלח קוד שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'בדוק את הדוא"ל שלך',
    },
    emailLink: {
      expired: {
        subtitle: 'חזור לכרטיסייה המקורית להמשך.',
        title: 'קישור האימות הזה פג תוקף',
      },
      failed: {
        subtitle: 'חזור לכרטיסייה המקורית להמשך.',
        title: 'קישור האימות הזה לא חוקי',
      },
      formSubtitle: 'השתמש בקישור האימות שנשלח לדוא"ל שלך',
      formTitle: 'קישור אימות',
      loading: {
        subtitle: 'תועבר בקרוב',
        title: 'מתחבר...',
      },
      resendButton: 'שלח קישור שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'בדוק את הדוא"ל שלך',
      unusedTab: {
        title: 'אתה יכול לסגור את הכרטיסייה הזו',
      },
      verified: {
        subtitle: 'תועבר בקרוב',
        title: 'נכנסת בהצלחה',
      },
      verifiedSwitchTab: {
        subtitle: 'חזור לכרטיסייה המקורית להמשך',
        subtitleNewTab: 'חזור לכרטיסייה שנפתחה חדשה להמשך',
        titleNewTab: 'נכנס בכרטיסייה אחרת',
      },
    },
    forgotPassword: {
      formTitle: 'אפס קוד הסיסמה',
      resendButton: 'שלח קוד שוב',
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      title: 'Reset password',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'אפס את הסיסמה שלך',
      label__alternativeMethods: 'או, התחבר באמצעות שיטה אחרת.',
      title: 'שכחת סיסמה?',
    },
    noAvailableMethods: {
      message: "Cannot proceed with sign in. There's no available authentication factor.",
      subtitle: 'An error occurred',
      title: 'Cannot sign in',
    },
    password: {
      actionLink: 'השתמש בשיטה אחרת',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'הכנס את סיסמתך',
    },
    phoneCode: {
      formTitle: 'קוד אימות',
      resendButton: 'שלח את הקוד שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'בדוק את הטלפון שלך',
    },
    phoneCodeMfa: {
      formTitle: 'קוד אימות',
      resendButton: 'שלח את הקוד שוב',
      subtitle: '',
      title: 'בדוק את הטלפון שלך',
    },
    resetPassword: {
      formButtonPrimary: 'אפס סיסמה',
      requiredMessage:
        'An account already exists with an unverified email address. Please reset your password for security.',
      successMessage: 'הסיסמה שלך שונתה בהצלחה. מחבר אותך, אנא המתן רגע.',
      title: 'אפס סיסמה',
    },
    resetPasswordMfa: {
      detailsLabel: 'אנחנו צריכים לאמת את זהותך לפני שנאפס את הסיסמה שלך.',
    },
    start: {
      actionLink: 'הרשמה',
      actionLink__use_email: 'השתמש בדוא"ל',
      actionLink__use_email_username: 'השתמש בדוא"ל או שם משתמש',
      actionLink__use_phone: 'השתמש בטלפון',
      actionLink__use_username: 'השתמש בשם משתמש',
      actionText: 'אין לך חשבון?',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'התחבר',
    },
    totpMfa: {
      formTitle: 'קוד אימות',
      subtitle: '',
      title: 'אימות שני שלבים',
    },
  },
  signInEnterPasswordTitle: 'הזן את הסיסמה שלך',
  signUp: {
    continue: {
      actionLink: 'התחבר',
      actionText: 'יש לך חשבון?',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'מלא שדות חסרים',
    },
    emailCode: {
      formSubtitle: 'הכנס את קוד האימות שנשלח לכתובת הדוא"ל שלך',
      formTitle: 'קוד אימות',
      resendButton: 'שלח קוד שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'אמת את כתובת הדוא"ל שלך',
    },
    emailLink: {
      formSubtitle: 'השתמש בקישור האימות שנשלח לכתובת הדוא"ל שלך',
      formTitle: 'קישור לאימות',
      loading: {
        title: 'מתחיל להירשם...',
      },
      resendButton: 'שלח קישור שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'אמת את כתובת הדוא"ל שלך',
      verified: {
        title: 'נרשמת בהצלחה',
      },
      verifiedSwitchTab: {
        subtitle: 'חזור לכרטיסייה שנפתחה לאחרונה להמשיך',
        subtitleNewTab: 'חזור לכרטיסייה הקודמת להמשיך',
        title: 'אימות דוא"ל הצליח',
      },
    },
    phoneCode: {
      formSubtitle: 'הכנס את קוד האימות שנשלח למספר הטלפון שלך',
      formTitle: 'קוד אימות',
      resendButton: 'שלח קוד שוב',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'אמת את מספר הטלפון שלך',
    },
    start: {
      actionLink: 'התחבר',
      actionText: 'יש לך חשבון?',
      subtitle: 'להמשיך אל {{applicationName}}',
      title: 'צור את החשבון שלך',
    },
  },
  socialButtonsBlockButton: 'המשך עם {{provider|titleize}}',
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
    form_password_not_strong_enough: 'הסיסמה שלך אינה מספיק חזקה.',
    form_password_pwned: 'הסיסמה הזו נמצאה כחלק מהפרטים שנחשפו בהפרת נתונים ולא ניתן להשתמש בה, נסה סיסמה אחרת במקום.',
    form_password_size_in_bytes_exceeded:
      'הסיסמה שלך חורגת ממספר הבייטים המרבי המותר, נסה לקצר אותה או להסיר כמה תווים מיוחדים.',
    form_password_validation_failed: 'סיסמה שגויה',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed: 'You cannot delete your last identification.',
    not_allowed_access: '',
    passwordComplexity: {
      maximumLength: 'פחות מ-{{length}} תווים',
      minimumLength: '{{length}} תווים או יותר',
      requireLowercase: 'אות קטנה',
      requireNumbers: 'מספר',
      requireSpecialCharacter: 'תו מיוחד',
      requireUppercase: 'אות גדולה',
      sentencePrefix: 'הסיסמה שלך חייבת להכיל',
    },
    phone_number_exists: 'This phone number is taken. Please try another.',
    zxcvbn: {
      couldBeStronger: 'הסיסמה שלך תקפה, אך יכולה להיות חזקה יותר. נסה להוסיף יותר תווים.',
      goodPassword: 'עבודה טובה. זו סיסמה מצוינת.',
      notEnough: 'הסיסמה שלך אינה מספיק חזקה.',
      suggestions: {
        allUppercase: 'הגדל כמה, אך לא את כל האותיות.',
        anotherWord: 'הוסף עוד מילים שהן פחות נפוצות.',
        associatedYears: 'הימנע משנים שקשורות אליך.',
        capitalization: 'הגדל יותר מאות אחת.',
        dates: 'המנע מתאריכים ושנים שקשורים אליך.',
        l33t: "המנע מהחלפות תווים צפויות כמו '@' במקום 'a'.",
        longerKeyboardPattern: 'השתמש בדפוסי מקלדת ארוכים יותר ושנה את כיוון ההקלדה מספר פעמים.',
        noNeed: 'אתה יכול ליצור סיסמאות חזקות ללא שימוש בסמלים, מספרים, או אותיות גדולות.',
        pwned: 'אם אתה משתמש בסיסמה זו במקומות אחרים, עליך לשנותה.',
        recentYears: 'הימנע משנים אחרונות.',
        repeated: 'הימנע ממילים ותווים מוחזרים.',
        reverseWords: 'הימנע מכתיבה הפוכה של מילים נפוצות.',
        sequences: 'המנע מרצפות תווים נפוצות.',
        useWords: 'השתמש במילים מרובות, אך הימנע מביטויים נפוצים.',
      },
      warnings: {
        common: 'זו סיסמה שנמצאת בשימוש נפוץ.',
        commonNames: 'שמות נפוצים ושמות משפחה קלים לניחוש.',
        dates: 'תאריכים קלים לניחוש.',
        extendedRepeat: 'דפוסים מוחזרים של תווים כמו "abcabcabc" קלים לניחוש.',
        keyPattern: 'דפוסים קצרים של מקלדת קלים לניחוש.',
        namesByThemselves: 'שמות בודדים או שמות משפחה קלים לניחוש.',
        pwned: 'הסיסמה שלך הוחשפה במהלך הפרת נתונים באינטרנט.',
        recentYears: 'שנים אחרונות קלות לניחוש.',
        sequences: 'רצפות תווים נפוצות כמו "abc" קלות לניחוש.',
        similarToCommon: 'זו סיסמה דומה לסיסמה שנמצאת בשימוש נפוץ.',
        simpleRepeat: 'תווים מוחזרים כמו "aaa" קלים לניחוש.',
        straightRow: 'שורות ישרות של מקשים במקלדת שלך קלות לניחוש.',
        topHundred: 'זו סיסמה שנמצאת בשימוש תכוף.',
        topTen: 'זו סיסמה שנמצאת בשימוש כבד.',
        userInputs: 'אין להזין נתונים אישיים או קשורים לדף.',
        wordByItself: 'מילים בודדות קלות לניחוש.',
      },
    },
  },
  userButton: {
    action__addAccount: 'הוסף חשבון',
    action__manageAccount: 'נהל חשבון',
    action__signOut: 'התנתק',
    action__signOutAll: 'התנתק מכל החשבונות',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'הועתק!',
      actionLabel__copy: 'העתק הכל',
      actionLabel__download: 'הורד .txt',
      actionLabel__print: 'הדפס',
      infoText1: 'קודי גיבוי יהיו מופעלים לחשבון זה.',
      infoText2: 'שמור את קודי הגיבוי בסוד ואחסן אותם בבטחה. תוכל לחולל מחדש קודי גיבוי אם אתה חושד שהם נפגעו.',
      subtitle__codelist: 'אחסן אותם בבטחה ושמור עליהם בסוד.',
      successMessage:
        'קודי הגיבוי מופעלים כעת. תוכל להשתמש באחד מאלה כדי להתחבר לחשבון שלך, אם אתה מאבד גישה למכשיר האימות שלך. כל קוד יכול להשתמש בו רק פעם אחת.',
      successSubtitle: 'תוכל להשתמש באחד מאלה כדי להתחבר לחשבון שלך, אם אתה מאבד גישה למכשיר האימות שלך.',
      title: 'הוסף אימות קוד גיבוי',
      title__codelist: 'קודי גיבוי',
    },
    connectedAccountPage: {
      formHint: 'בחר ספק כדי לחבר את החשבון שלך.',
      formHint__noAccounts: 'אין ספקים זמינים לחשבונות חיצוניים.',
      removeResource: {
        messageLine1: '{{identifier}} יוסר מהחשבון הזה.',
        messageLine2: 'לא תוכל יותר להשתמש בחשבון מחובר זה וכל התכונות התלויות לא יעבדו.',
        successMessage: '{{connectedAccount}} הוסר מהחשבון שלך.',
        title: 'הסר חשבון מחובר',
      },
      socialButtonsBlockButton: 'חבר חשבון {{provider|titleize}}',
      successMessage: 'הספק התווסף לחשבון שלך',
      title: 'הוסף חשבון מחובר',
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
        formHint: 'אימייל שמכיל קוד אימות ישלח לכתובת זו.',
        formSubtitle: 'הכנס את קוד האימות שנשלח ל-{{identifier}}',
        formTitle: 'קוד אימות',
        resendButton: 'שלח קוד מחדש',
        successMessage: 'האימייל {{identifier}} התווסף לחשבון שלך.',
      },
      emailLink: {
        formHint: 'אימייל שמכיל קישור לאימות ישלח לכתובת זו.',
        formSubtitle: 'לחץ על קישור האימות באימייל שנשלח ל-{{identifier}}',
        formTitle: 'קישור לאימות',
        resendButton: 'שלח קישור מחדש',
        successMessage: 'האימייל {{identifier}} התווסף לחשבון שלך.',
      },
      removeResource: {
        messageLine1: '{{identifier}} יוסר מהחשבון הזה.',
        messageLine2: 'לא תוכל יותר להתחבר באמצעות כתובת אימייל זו.',
        successMessage: 'האימייל {{emailAddress}} הוסר מהחשבון שלך.',
        title: 'הסר כתובת אימייל',
      },
      title: 'הוסף כתובת אימייל',
    },
    formButtonPrimary__continue: 'המשך',
    formButtonPrimary__finish: 'סיים',
    formButtonPrimary__save: 'Save',
    formButtonReset: 'בטל',
    mfaPage: {
      formHint: 'בחר שיטה להוספה.',
      title: 'הוסף אימות דו-שלבי',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: 'הוסף מספר טלפון',
      removeResource: {
        messageLine1: '{{identifier}} לא יקבל יותר קודים לאימות בעת ההתחברות.',
        messageLine2: 'החשבון שלך עשוי לא להיות בטוח כמו שהוא. האם אתה בטוח שאתה רוצה להמשיך?',
        successMessage: 'אימות קוד SMS דו-שלבי הוסר ל{{mfaPhoneCode}}',
        title: 'הסר אימות דו-שלבי',
      },
      subtitle__availablePhoneNumbers: 'בחר מספר טלפון להרשמה לאימות קוד SMS דו-שלבי.',
      subtitle__unavailablePhoneNumbers: 'אין מספרי טלפון זמינים להרשמה לאימות קוד SMS דו-שלבי.',
      successMessage1:
        'When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      successMessage2:
        'Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.',
      successTitle: 'SMS code verification enabled',
      title: 'הוסף אימות קוד SMS',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'סרוק קוד QR במקום',
        buttonUnableToScan__nonPrimary: 'לא יכול לסרוק קוד QR?',
        infoText__ableToScan:
          'הגדר שיטת התחברות חדשה באפליקציית האותנטיקטור שלך וסרוק את קוד ה-QR הבא כדי לחברו לחשבון שלך.',
        infoText__unableToScan: 'הגדר שיטת התחברות חדשה באותנטיקטור שלך והכנס את המפתח שסופק למטה.',
        inputLabel__unableToScan1: 'וודא שסיסמאות מבוססות-זמן או חד-פעמיות מופעלות, ואז סיים לחבר את החשבון שלך.',
        inputLabel__unableToScan2:
          'לחלופין, אם האותנטיקטור שלך תומך בכתובת URI של TOTP, תוכל גם להעתיק את הכתובת המלאה.',
      },
      removeResource: {
        messageLine1: 'קודי האימות מהאותנטיקטור הזה לא יהיו נדרשים יותר בעת ההתחברות.',
        messageLine2: 'החשבון שלך עשוי לא להיות בטוח כמו שהוא. האם אתה בטוח שאתה רוצה להמשיך?',
        successMessage: 'אימות דו-שלבי באמצעות אפליקצית האותנטיקטור הוסר.',
        title: 'הסר אימות דו-שלבי',
      },
      successMessage: 'האימות הדו-שלבי מופעל כעת. בעת ההתחברות, תידרש להכניס קוד אימות מהאותנטיקטור זה כשלב נוסף.',
      title: 'הוסף אפליקציית אימות',
      verifySubtitle: 'הכנס את קוד האימות שנוצר על ידי האותנטיקטור שלך',
      verifyTitle: 'קוד אימות',
    },
    mobileButton__menu: 'תפריט',
    navbar: {
      account: 'Profile',
      description: 'Manage your account info.',
      security: 'Security',
      title: 'Account',
    },
    passwordPage: {
      changePasswordSuccessMessage: 'הסיסמה שלך עודכנה.',
      changePasswordTitle: 'שנה סיסמה',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      sessionsSignedOutSuccessMessage: 'כל המכשירים האחרים התנתקו.',
      successMessage: 'הסיסמה שלך הוגדרה.',
      title: 'הגדר סיסמה',
    },
    phoneNumberPage: {
      infoText: 'הודעת טקסט שמכילה קישור לאימות תישלח למספר טלפון זה.',
      removeResource: {
        messageLine1: '{{identifier}} יוסר מהחשבון הזה.',
        messageLine2: 'לא תוכל יותר להתחבר באמצעות מספר טלפון זה.',
        successMessage: '{{phoneNumber}} הוסר מהחשבון שלך.',
        title: 'הסר מספר טלפון',
      },
      successMessage: '{{identifier}} התווסף לחשבון שלך.',
      title: 'הוסף מספר טלפון',
    },
    profilePage: {
      fileDropAreaHint: 'העלה תמונה בפורמט JPG, PNG, GIF, או WEBP הקטנה מ-10 מ"ב',
      imageFormDestructiveActionSubtitle: 'הסר תמונה',
      imageFormSubtitle: 'העלה תמונה',
      imageFormTitle: 'תמונת פרופיל',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'הפרופיל שלך עודכן.',
      title: 'עדכן פרופיל',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'התנתק מהמכשיר',
        title: 'מכשירים פעילים',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'נסה שוב',
        actionLabel__reauthorize: 'אשר עכשיו',
        destructiveActionTitle: 'הסר',
        primaryButton: 'חבר חשבון',
        subtitle__reauthorize:
          'The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues',
        title: 'חשבונות מחוברים',
      },
      dangerSection: {
        deleteAccountButton: 'מחק חשבון',
        title: 'מסוכן',
      },
      emailAddressesSection: {
        destructiveAction: 'הסר כתובת אימייל',
        detailsAction__nonPrimary: 'הגדר כעיקרית',
        detailsAction__primary: 'השלם אימות',
        detailsAction__unverified: 'השלם אימות',
        primaryButton: 'הוסף כתובת אימייל',
        title: 'כתובת אימייל',
      },
      enterpriseAccountsSection: {
        title: 'חשבונות ארגוניים',
      },
      headerTitle__account: 'חשבון',
      headerTitle__security: 'אבטחה',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'צור קודים מחדש',
          headerTitle: 'קוד גיבוי',
          subtitle__regenerate: 'קבל קבוצה חדשה של קודי גיבוי מאובטחים. קודי גיבוי קודמים יימחקו ולא ניתן להשתמש בהם.',
          title__regenerate: 'צור מחדש קודי גיבוי',
        },
        phoneCode: {
          actionLabel__setDefault: 'הגדר כברירת מחדל',
          destructiveActionLabel: 'הסר מספר טלפון',
        },
        primaryButton: 'הוסף אימות דו-שלבי',
        title: 'אימות דו-שלבי',
        totp: {
          destructiveActionTitle: 'הסר',
          headerTitle: 'אפליקציית מאמת',
        },
      },
      passwordSection: {
        primaryButton__changePassword: 'שנה סיסמה',
        primaryButton__setPassword: 'הגדר סיסמה',
        title: 'סיסמה',
      },
      phoneNumbersSection: {
        destructiveAction: 'הסר מספר טלפון',
        detailsAction__nonPrimary: 'הגדר כראשי',
        detailsAction__primary: 'השלם אימות',
        detailsAction__unverified: 'השלם אימות',
        primaryButton: 'הוסף מספר טלפון',
        title: 'מספרי טלפון',
      },
      profileSection: {
        primaryButton: 'Edit Profile',
        title: 'פרופיל',
      },
      usernameSection: {
        primaryButton__changeUsername: 'שנה שם משתמש',
        primaryButton__setUsername: 'הגדר שם משתמש',
        title: 'שם משתמש',
      },
      web3WalletsSection: {
        destructiveAction: 'הסר ארנק',
        primaryButton: 'ארנקי Web3',
        title: 'ארנקי Web3',
      },
    },
    usernamePage: {
      successMessage: 'שם המשתמש שלך עודכן.',
      title: 'עדכן שם משתמש',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} יוסר מהחשבון הזה.',
        messageLine2: 'לא תוכל יותר להתחבר באמצעות ארנק web3 זה.',
        successMessage: '{{web3Wallet}} הוסר מהחשבון שלך.',
        title: 'הסר ארנק web3',
      },
      subtitle__availableWallets: 'בחר ארנק web3 לחיבור לחשבון שלך.',
      subtitle__unavailableWallets: 'אין ארנקי web3 זמינים.',
      successMessage: 'הארנק התווסף לחשבון שלך.',
      title: 'הוסף ארנק web3',
    },
  },
} as const;
