---
title: Güvenli bir klasöre sertifika yükleme
sidebar_position: 13
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard to [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. Mesele şu ki, *Secure klasörü* sertifikaların depolandığı kendi alanına sahiptir. However, if you do everything according to the regular certificate installation instructions ([described here](/adguard-for-android/features/settings#https-filtering)), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. Bu sorunu çözmek ve Android için AdGuard sertifikasını *Secure klasörünün* depolama alanına yüklemek için lütfen aşağıdaki talimatları izleyin:

1. Uygulamayı yükledikten ve yerel VPN'i bağladıktan sonra, *HTTPS filtreleme kapalı* mesajının yanındaki **ETKİNLEŞTİR** öğesine dokunun.
1. **Sonraki** → **Sonraki** → **Şimdi kaydet** → **Sertifikayı kaydet** öğesine dokunun.
1. Sertifikayı kaydedin (bu aşamada, daha sonra bulmayı kolaylaştırmak için yeniden adlandırabilirsiniz, ki bunu yapmanız gerekir).
1. *Yükleme talimatları* açılır penceresi göründükten sonra, **Ayarları Aç** öğesine **DOKUNMAYIN**.
1. Uygulamayı simge durumuna küçültün ve *Secure klasörüne* gidin.
1. Üç noktalı menüye dokunun ve **Ayarlar** → **Diğer güvenlik ayarları** öğesine gidin.
1. **Güvenlik sertifikaları** → **Cihaz depolama alanından yükle** → **CA sertifikası** → **Yine de yükle** öğesine dokunun
1. Yüklemeyi grafik anahtarınız/parolanız/parmak izinizle onaylayın.
1. Önceden kaydedilmiş sertifikayı bulup seçin ve ardından **Bitti** öğesine dokunun.
1. AdGuard uygulamasına geri dönün ve ana ekrana gidin. *HTTPS filtreleme kapalı* mesajından kurtulmak için uygulamayı kaydırmanız ve yeniden başlatmanız gerekebilir.
1. Tamamlandı! The certificate has been installed.
