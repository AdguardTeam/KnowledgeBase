---
title: Güvenlik sertifikasının Firefox tarayıcısına elle yükleme
sidebar_position: 11
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true).

:::

AdGuard'ın Firefox'ta HTTPS trafiğini başarılı bir şekilde filtrelemesi için tarayıcının AdGuard sertifikasına güvenmesi gerekir. Firefox'un farklı sürümleri için farklı şekilde elde edilebilir.

### Method 1

:::not

Bu yöntem, Android için Firefox'un 90.0 ve üzeri sürümlerinde çalışır.

:::

Firefox'un AdGuard sertifikasına güvenmesini sağlamak için aşağıdakileri yapın:

1. Tarayıcıyı çalıştırın.

1. **Ayarlar** → **Firefox Hakkında** öğesine gidin.

    ![Firefox hakkında *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Firefox logosuna beş kez dokunun.

1. **Ayarlar** → **Gizli Ayarlar** öğesine gidin.

    ![Gizli Ayarlar *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Toggle **Use third party CA certificates**.

### Method 2

:::not

Bu yöntem yalnızca **rootlu** cihazlarda çalışır.

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklama** öğesini etkinleştirin:

    - Telefonunuzda **Ayarlar** uygulamasını açın;
    - **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
    - **Yapı numarası** satırına 7 kez dokunun. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
    - **Sistem Ayarları** → **Geliştirici Seçenekleri** öğesini açın → Aşağı kaydırın ve **USB hata ayıklama** öğesini etkinleştirin → Uyarıyı dikkatlice okuduktan sonra **USB hata ayıklamasına izin ver** penceresinde hata ayıklamanın etkinleştirildiğini onaylayın.

1. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);

1. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;

1. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;

1. Belirtilen klasörde iki dosya ile ilgileniyoruz:

    - `cert9.db`
    - `key4.db`

1. We need to move these files to a folder of the browser where the security certificate issue occurred:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. Tam komut şöyle görünür:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. Bundan sonra bunları Firefox tarayıcınızda gerekli klasöre taşımalısınız.

    Tam komut şöyle görünmelidir:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    `adb shell su` çalışmazsa, önce `adb shell` ve ardından `su` denemelisiniz.
