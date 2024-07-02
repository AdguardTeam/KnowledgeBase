---
title: Two-factor authentication
sidebar_position: 3
---

Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual username and password pair. Bu, güvenlik amacıyla yapılır. Siteler genellikle SMS veya özel bir kimlik doğrulayıcı uygulamasıyla gönderilen bir kod gibi 2FKD yöntemleri sunar.

2FA seçeneğinin eklenmesini avantaj olarak görüyoruz. Ayrıca bunu uygulamanın bazı kullanıcıları rahatsız edebileceğini de biliyoruz. Bu nedenle adguard.com'daki kişisel hesabınız için bunu isteğe bağlı hâle getirdik — yeni bir hesap açtığınızda varsayılan olarak 2FKD devre dışıdır. Ayarlarda elle etkinleştirebilirsiniz. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them.

AdGuard hesabınız için iki faktörlü kimlik doğrulamayı ayarlamanızı öneririz. Bu işlem uzun sürmez ancak lisans anahtarlarınızı, aboneliklerinizi ve en önemlisi hesapla ilişkili tüm kişisel bilgilerinizi korumanıza yardımcı olur.

## Nasıl ayarlanır

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the Settings tab:

![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png)

1. Scroll down to *Password and 2FA* section and click **Enable**:

![The Change button *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png)

1. Kimlik doğrulama uygulaması yüklemek ve QR kodunu taramak için ekrandaki talimatları izleyin:

![The verification code](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png)

***Important***

- İkinci faktör yedekleme kodunu bir yere kaydedin, cep telefonunuzun kaybolması veya çalınması durumunda hesabınızı kurtarmanız gerekecektir;

Her şey doğru yapıldıysa, bir sonraki sefer hesabınıza giriş yaptığınızda bunu göreceksiniz:

![Sonuç *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png)

Kodu okumak ve girmek için mobil kimlik doğrulayıcı uygulamanızı kullanın. Şimdi giriş yapmış olmalısınız!

***NOT***: Kimlik doğrulama hatası alırsanız, telefonunuzdaki saati kontrol edin. Hatanın nedeni senkronize olmayan bir saat olabileceğinden, gerekiyorsa saati düzeltin.
