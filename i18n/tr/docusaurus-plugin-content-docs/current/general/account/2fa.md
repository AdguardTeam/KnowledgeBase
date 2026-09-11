---
title: İki faktörlü kimlik doğrulama
sidebar_position: 3
---

Two-factor authentication (or 2FA) is an authentication method that requires an additional piece of evidence from the user to log in, on top of the usual username and password pair. Bu, güvenlik amacıyla yapılır. Siteler genellikle SMS veya özel bir kimlik doğrulayıcı uygulamasıyla gönderilen bir kod gibi 2FKD yöntemleri sunar.

2FA seçeneğinin eklenmesini avantaj olarak görüyoruz. Ayrıca bunu uygulamanın bazı kullanıcıları rahatsız edebileceğini de biliyoruz. Bu nedenle adguard.com'daki kişisel hesabınız için bunu isteğe bağlı hâle getirdik — yeni bir hesap açtığınızda varsayılan olarak 2FKD devre dışıdır. Ayarlarda elle etkinleştirebilirsiniz. As for the currently available authentication methods, we use the tried and tested one: an authenticator app for Android or iOS. You can use almost any such app, and there are plenty of them.

AdGuard hesabınız için iki faktörlü kimlik doğrulamayı ayarlamanızı öneririz. Bu işlem uzun sürmez ancak lisans anahtarlarınızı, aboneliklerinizi ve en önemlisi hesapla ilişkili tüm kişisel bilgilerinizi korumanıza yardımcı olur.

## Nasıl ayarlanır

1. Log into your [AdGuard account](https://auth.adguardaccount.com/login.html) and go to the *Settings* tab:

 ![AdGuard Hesap ayarları *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Aşağı kaydırın ve *İki faktörlü kimlik doğrulamasını* etkinleştirin:

 ![İki faktörlü kimlik doğrulama geçişi *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. AdGuard hesabınızla ilişkili e-posta adresinize bir kod gönderilecektir. 2FKD'yı etkinleştirmek için kodu girin ve *Etkinleştir* öğesine tıklayın.

 ![Doğrulama kodu *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

İki faktörlü kimlik doğrulamayı etkinleştirdikten sonra, aralarından seçim yapabileceğiniz iki seçeneğiniz olur:

- *Tek seferlik e-posta kodu*: Giriş yaptığınızda, e-postanıza gönderdiğimiz kodu girmenizi isteyeceğiz

- *Kimlik doğrulayıcı uygulamasından gelen kod*: Giriş yaptığınızda, kimlik doğrulayıcı uygulamanızdan bir kod isteyeceğiz

![2FA options *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

Eğer kimlik doğrulama uygulamasını kullanıyorsanız **kurulum anahtarını** bir yere kaydettiğinizden emin olun. Cep telefonunuzun kaybolması veya çalınması durumunda hesabınızı kurtarmanız gerekecektir.

![Kimlik doğrulayıcı uygulamasındaki kurulum anahtarı *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

If everything is done right, you will see this when you log into your account the next time:

![Sonuç *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

Kimlik doğrulama hatası alırsanız telefonunuzun saatini kontrol edin. Adjust it if needed, as an unsynchronized clock may be the cause of the error.

:::
