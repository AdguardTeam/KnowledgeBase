---
title: Güvenli bir klasöre sertifika yükleme
sidebar_position: 12
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Sertifikayı kaydedin (bu aşamada, daha sonra bulmayı kolaylaştırmak için yeniden adlandırabilirsiniz, ki bunu yapmanız gerekir).
1. *Yükleme talimatları* açılır penceresi göründükten sonra, **Ayarları Aç** öğesine **DOKUNMAYIN**.
1. Uygulamayı simge durumuna küçültün ve *Secure klasörüne* gidin.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Yüklemeyi grafik anahtarınız/parolanız/parmak izinizle onaylayın.
1. Önceden kaydedilmiş sertifikayı bulup seçin ve ardından **Bitti** öğesine dokunun.
1. AdGuard uygulamasına geri dönün ve ana ekrana gidin.
1. Tamamlandı! The certificate has been installed.
