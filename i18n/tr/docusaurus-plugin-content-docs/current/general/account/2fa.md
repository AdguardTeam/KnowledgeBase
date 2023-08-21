---
title: Two-factor authentication
sidebar_position: 3
---

Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual login and password pair. Bu, güvenlik amacıyla yapılır. Siteler genellikle SMS veya özel bir kimlik doğrulayıcı uygulamasıyla gönderilen bir kod gibi 2FKD yöntemleri sunar.

We see adding a 2FA option as a benefit. We also understand that enforcing it may irritate some users. Bu nedenle adguard.com'daki kişisel hesabınız için bunu isteğe bağlı hâle getirdik — yeni bir hesap açtığınızda varsayılan olarak 2FKD devre dışıdır. Ayarlarda elle etkinleştirebilirsiniz. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them.

We recommend setting up two-factor authentication for your AdGuard account. Bu işlem uzun sürmez ancak lisans anahtarlarınızı, aboneliklerinizi ve en önemlisi hesapla ilişkili tüm kişisel bilgilerinizi korumanıza yardımcı olur.

## How to set it up

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the Settings tab:

![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png)

1. Scroll down to *Password and 2FA* section and click **Enable**:

![The Change button *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png)

1. Follow the on-screen instructions to install an authenticator app and scan the QR code:

![The verification code](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png)

***Important***

- İkinci faktör yedekleme kodunu bir yere kaydedin, cep telefonunuzun kaybolması veya çalınması durumunda hesabınızı kurtarmanız gerekecektir;

If everything is done right, you will see this when you log into your account the next time:

![The result *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png)

Use your mobile authenticator app to read the code and enter it. You should be logged in now!

***NOTE***: If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.
