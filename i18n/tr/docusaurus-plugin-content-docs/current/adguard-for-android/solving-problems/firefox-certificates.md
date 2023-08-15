---
title: Manual installation of the security certificate into the Firefox browser
sidebar_position: 11
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true).

:::

For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox.

### Method 1

:::note

This method works in Firefox for Android version 90.0 and later.

:::

To make Firefox trust the AdGuard certificate, do the following:

1. Tarayıcıyı çalıştırın.
2. Go to **Settings** → **About Firefox**.

![Firefox hakkında *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Firefox logosuna beş kez dokunun.
4. Navigate to **Settings** → **Secret Settings**.

![Secret Settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. Toggle **Use third party CA certificates**.

### Method 2

:::note

Bu yöntem yalnızca **rootlu** cihazlarda çalışır.

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).
2. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklamayı** etkinleştirin:
    - Telefonunuzda **Ayarlar** uygulamasını açın;
    - **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
    - **Yapı numarası** satırına 7 kez dokunun. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
    - **Sistem Ayarları** → **Geliştirici Seçenekleri** öğesini açın → Aşağı kaydırın ve **USB hata ayıklaması** öğesini etkinleştirin → Uyarıyı dikkatlice okuduktan sonra **USB hata ayıklamasına izin ver** penceresinde hata ayıklamanın etkinleştirildiğini onaylayın.
3. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);
4. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;
5. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;
6. Belirtilen klasörde iki dosya ile ilgileniyoruz:
    - `cert9.db`
    - `key4.db`
7. We need to move these files to a folder of the browser where the security certificate issue occurred:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. Tam komut şöyle görünür:
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.

The full command should look something like this:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

If `adb shell su` does not work, you should try `adb shell` initially, and then `su`.
