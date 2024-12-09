---
title: Two-factor authentication
sidebar_position: 3
---

Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual username and password pair. Bu, güvenlik amacıyla yapılır. Siteler genellikle SMS veya özel bir kimlik doğrulayıcı uygulamasıyla gönderilen bir kod gibi 2FKD yöntemleri sunar.

2FA seçeneğinin eklenmesini avantaj olarak görüyoruz. Ayrıca bunu uygulamanın bazı kullanıcıları rahatsız edebileceğini de biliyoruz. Bu nedenle adguard.com'daki kişisel hesabınız için bunu isteğe bağlı hâle getirdik — yeni bir hesap açtığınızda varsayılan olarak 2FKD devre dışıdır. Ayarlarda elle etkinleştirebilirsiniz. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them.

AdGuard hesabınız için iki faktörlü kimlik doğrulamayı ayarlamanızı öneririz. Bu işlem uzun sürmez ancak lisans anahtarlarınızı, aboneliklerinizi ve en önemlisi hesapla ilişkili tüm kişisel bilgilerinizi korumanıza yardımcı olur.

## Nasıl ayarlanır

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the *Settings* tab:

 ![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Scroll down to *Two-factor authentication* and enable it:

 ![Two-factor authentication toggle *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. A code will be sent to the email address associated with your AdGuard account. To enable 2FA, enter the code and click *Enable*.

 ![The verification code *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

After you enable two-factor authentication, you have two options to choose from:

- *One-time email code*: when you log in, we will ask you to enter the code we sent to your email

- *Code from authenticator app*: when you log in, we will ask for a code from your authenticator app

![2FA options *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::not

If you use the authenticator app, make sure to save the **setup key** somewhere. It will be necessary to recover your account in case your mobile phone gets lost or stolen.

![The setup key in the authenticator app *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

If everything is done right, you will see this when you log into your account the next time:

![The result *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::not

If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.

:::
