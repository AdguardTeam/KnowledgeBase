---
title: Birden çok kullanıcı profilinden kaynaklanan sorunlar
sidebar_position: 10
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Bu makalede, Android cihazlarınızda *birden fazla hesap* veya *Kısıtlı Profiller* kurduğunuzda AdGuard ile ilgili sorunları nasıl çözeceğinize ilişkin yöntemleri bulacaksınız.

## Birden çok kullanıcı profilinden kaynaklanan sorunlar

Android 9 ve üzeri sürümlerde, cihazınızda birden fazla kullanıcı profili için AdGuard yüklüyse uygulamayı kaldırırken sorunlarla karşılaşabilirsiniz. AdGuard'ı bir kullanıcı profilinden kaldırdığınızda, uygulama, uygulama listesinde görünmeye devam eder, ancak onu kaldıramaz veya yeniden yükleyemezsiniz. Bunun nedeni, AdGuard'ın cihaza farklı bir kullanıcı profili için yüklenmiş olmasıdır.

Başarısız bir kaldırma girişiminden sonra AdGuard'ı yeniden yüklemeye çalışırsanız, "Uygulamayı cihazınıza yükleyemezsiniz" hata mesajını görürsünüz.

Bu sorunu çözmek için uygulamayı tüm kullanıcılardan kaldırmanız gerekir: Ayarlar → Tüm uygulamalar → AdGuard'a gidin. Sağ üst köşedeki üç noktalı menüye dokunun ve *Tüm kullanıcılar için kaldır* öğesini seçin.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Kısıtlı Mod profili kullanmanın sebep olduğu sorunlar

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. Sonuç olarak, AdGuard **yerel VPN modunda** koruma başlatamaz. Ayrıca, bu sorunun sebeplerinden biri cihazınızda **Dual App/Dual Messenger** profilini kullanmak olabilir. Below are described the recommendations that you can apply when this problem occurs.

### Çözümler

Sorunu çözmek için üç yolunuz var:

### 1. Seçenek: ADB kullanarak AdGuard'a izinler verme

:::not

Bu yaklaşım **AdGuard v3.5 nightly 6** sürümünden itibaren kullanılabilir. Daha eski bir sürüm kullanıyorsanız, en son güncellemeyi [buradan](https://adguard.com/adguard-android/overview.html) edinebilirsiniz.

:::

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklama** öğesini etkinleştirin:

    - Open the **Settings** app phone;
    - **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
    - **Yapı numarası** satırına 7 kez dokunun. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
    - **Sistem Ayarları** → **Geliştirici Seçenekleri** öğesini açın → Aşağı kaydırın ve **USB hata ayıklama** öğesini etkinleştirin → Uyarıyı dikkatlice okuduktan sonra **USB hata ayıklamasına izin ver** penceresinde hata ayıklamanın etkinleştirildiğini onaylayın.

    :::not

    Herhangi bir zorluk veya ek sorunuz varsa, tam talimatlar [burada](https://developer.android.com/studio/debug/dev-options) bulunabilir.


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Cihazınızı bir **USB kablosu** kullanarak **ADB** kurduğunuz bilgisayara veya dizüstü bilgisayara bağlayın;

1. PC'nizde **komut satırını** açın:

    - **Cmd.exe** if you are using **Windows**;
    - **Terminal** if you are using **macOS**;

1. `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` komutunu yazın ve **Enter** tuşuna basın.

### 2. Seçenek: *kısıtlanmış kullanıcı hesabını* kaldırma

About how to manage user accounts from an Android device you can [find here](https://support.google.com/a/answer/6223444?hl=en).

:::not

Bazı durumlarda kısıtlanmış kullanıcı hesapları dolaylı olarak oluşturulur ve kaldırılamaz. For instance, when you use Dual messenger or Dual app features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

:::

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LG ve Samsung cihazları

Owners of **LG** or **Samsung** phones may also encounter a similar issue. **Dual App/Dual Messenger** işlevi (otomatik olarak kısıtlı bir profil oluşturur) kullanılmasından kaynaklanabilir. Bu sorunu çözmek için bu özelliği devre dışı bırakmanız gerekir.

### Samsung

- Open **Settings**;
- **Gelişmiş** öğesine basın;
- Scroll down and press **Dual messenger**;
- Disable the **Dual messenger** for all apps;
- Cihazı 5 dakika kilitleyin;
- Ekranın kilidini açın ve VPN profilini yeniden oluşturmayı deneyin.

### LG

- Open **Settings**;
- **Genel** sekmesini seçin;
- Scroll down and press **Dual app**;
- Tüm uygulamaları listeden kaldırın;
- Cihazınızı yeniden başlatın.
