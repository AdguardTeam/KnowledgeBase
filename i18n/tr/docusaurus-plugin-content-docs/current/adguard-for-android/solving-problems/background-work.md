---
title: How to protect AdGuard from being disabled by the system
sidebar_position: 9
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

In some cases, apps won't stay in the background (“alive” or in a sleep mode) due to the Android OS optimization function, or the so-called “battery save mode” — this function can kill background apps. Her kapatıldıklarında onları yeniden başlatmak sakıncalı olabilir. Arka planda uygulama sonlandırmayı önlemek için Android işletim sisteminin her üreticisi (sürümü) için ayrı ayrı açıkladığımız adımları izlemeniz gerekir. Farklı üreticilerin talimatlarının çoğunlukla çok benzer olduğunu unutmayın.

## Asus

Asus cihazlarıyla ilgili bilgiler hala kapsamlı olmaktan uzak olduğundan burada listelenenden daha fazla sorun olabilir. Daha fazlasını öğrendiğimizde makalenin bu bölümünü güncelleyeceğiz.

Asus cihazlarındaki arka planda çalışmayla ilgili olası sorunların ana kaynağı, Power Master adlı optimizasyon uygulamasıyla ilişkilidir. Önceden yüklenmiştir ve oldukça agresif varsayılan ayarlara sahiptir; örneğin uygulamaların başlatılmasını engellemek ve ekranınız kapandığında arka plan görevlerini sonlandırmak için. To make sure apps background processing works, set up the following:

1. Go to **Mobile Manager** → **PowerMaster** → **Settings** (or **Battery-saving options**) → Uncheck **Clean up in suspend**

1. Go to **Mobile Manager** → **PowerMaster** → **Settings** (or **Battery-saving options**) → Uncheck **Auto-deny apps from auto starting**

Alternatively, instead of unchecking **Auto-deny apps from auto starting** entirely, you can go to **Settings** → **Battery-saving options** → **Auto-start manager** → **AdGuard** and uncheck it.

## Xiaomi

Xiaomi (and especially MIUI) devices are among the most troublesome ones when it comes to background work. They are known to limit background processes and have non-standard permissions with a lack of proper documentation to top it off. Sometimes apps just don't work right on Xiaomi phones and there's little that can be done about that. Below are some actions you might attempt to perform if you run into any trouble regarding AdGuard's background work on various Xiaomi devices.

### MIUI 13+ and HyperOS

Depending on the MIUI and HyperOS versions, there are two ways to change the battery optimization settings on your phone and block ads more efficiently.

Option 1

1. Go to **Settings** → **Apps** → **Permissions** → **Background autostart** and allow AdGuard to run in the background

1. Return to **Settings** → **Apps** → **Manage apps** → **AdGuard** and uncheck **Pause app activity if unused**

1. Go to **Battery saver** and tap **No restrictions**

Option 2

1. Go to **Settings** → **Apps** → **Manage apps** → **AdGuard** and enable **Autostart**

1. Go to **Battery saver** and tap **No restrictions**

Tamamlandı! You have successfully set up AdGuard to work in the background.

### MIUI 12.0.8

To let your AdGuard app run successfully in the background, do the following:

In **Settings** → **Apps** → **Manage apps**, scroll down to locate **AdGuard** and set **Autostart** to “On”.

![Xiaomi Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scroll down to **Battery saver**, tap it, and set to “No restrictions”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Other Permissions**, set all possible permissions to “On”

Run the **Security** app.

Tap on the **Gear** icon at the top-right corner of the screen.

![Miui Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tap **Boost speed** in Feature Settings.

![Miui Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tap **Lock apps**.

![Miui Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

In the **Lock apps** screen, set the toggle switch for the AdGuard app to On.

![Miui Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Hepsi bu kadar! AdGuard uygulamasını başarıyla sabitlediniz.

### MIUI 12

Go to **Settings** → **Apps** → **Manage apps** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Set Autostart to “On”
- Set all possible permissions in Other Permissions to “On”
- Set Battery saver to **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Now launch the active apps manager by swiping up from the bottom of the screen and look for the AdGuard app.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Bir menü açılana kadar dokunun ve basılı tutun. Bir kilit simgesi seçin.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Kilit simgesi, uygulama penceresinin üzerinde görünmelidir.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Uygulamanızın arka planda başarılı bir şekilde çalışmasına izin vermek için ayarlarını aşağıdaki gibi yapılandırın:

- Set Autostart to “On”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Settings** → **Battery & performance** → switch-off **Battery saver** function

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Then open **App battery saver** settings → **AdGuard** → **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Tüm modeller

The following steps should be performed on any Xiaomi device that keeps killing the AdGuard app:

#### Güç yönetimi

Lütfen etkinleştirin:

- **Settings** → **Advanced Settings** → **Battery manager** → set **Power plan** to **Performance**
- **Device Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — AdGuard needs to be **Protected**
- **Device Settings** → **Apps** → **AdGuard** → **Battery** → **Power-intensive prompt** and **Keep running after screen off**
- **Settings** → **Additional Settings** → **Battery & Performance** → **Manage apps’ battery usage** and here:

1. Switch Power Saving Modes to “Off”
1. Choose the following options: **Saving Power in The Background** → **Choose apps** → **AdGuard** → **Background Settings** → **No restrictions**

#### Uygulama pil tasarrufu

**Güvenlik** → **Pil** → **Uygulama Pil Tasarrufu** → **AdGuard** ila **Kısıtlama yok** olarak ayarlayın

#### Uygulama sabitleme

AdGuard'ın Xiaomi cihazları için arka plan çalışmasını ayarlamak için Pil ve İzinlere dikkat etmelisiniz.

- **Son görevler** düğmesine dokunun ve seçenekleri *görünür* yapmak için AdGuard'ı aşağı kaydırın (ekran görüntüsünde gösterildiği gibi):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- **kilit** simgesine dokunun. Bu, Xiaomi'nin AdGuard'ı otomatik olarak kapatmasını durdurur. Bu şöyle görünmelidir:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- **Pil** öğesine gidin

- **pil tasarrufu** uygulamasını seçin

- **AdGuard** öğesini bulun ve seçin

- Aşağıdaki **Arka plan ayarlarını** yapın:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- **İzinler** öğesine gidin

- **Otomatik başlatma** öğesini seçin

- AdGuard için otomatik başlatma işlevinin etkinleştirildiğinden emin olun:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Birçok Samsung cihazında, 3 gün boyunca kullanılmayan herhangi bir uygulama arka plandan başlatılamayacaktır. Bunu önlemek için mümkün olan her yerde **Uyarlanabilir pil** ve **Uygulamaları uyku moduna al** seçeneklerini kapatmalısınız. Bir uygulama veya işletim sistemi güncellemesinden sonra bu ayarların sıklıkla varsayılan değerlerine döndüğünü ve tekrar kapatılması gerekeceğini unutmayın.

### Android 11+

Android 11'de Samsung, pil optimizasyonlarından hariç tutmadığınız sürece uygulamaların (AdGuard dahil) arka planda çalışmasını varsayılan olarak engeller. AdGuard'ın arka planda kapatılmayacağından emin olmak için:

1. AdGuard'ı Sonda kilitleyin

    - **Son uygulamalar** öğesini açın.
    - AdGuard'ı bulun.
    - AdGuard uygulamasının simgesine uzun basın.

1. AdGuard'ın düzgün çalışmasını sağlamak için:

    **Ayarlar** → **Uygulamalar** → **AdGuard** → **Pil** → **Pil kullanımını optimize et** öğesine gidin

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Açılır menüde **Tümü** öğesini seçin. Ardından, listede AdGuard'ı bulun ve durumunu **Optimize etme** olarak ayarlayın (bazı modellerde, kapatmanız gereken bir düğme olabilir).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Bazı cihazlarda, ilgili ayar farklı şekilde adlandırılmış ve başka yerlerde konumlandırılmıştır. Olası yollar arasında şunlar yer alır:

    **Ayarlar** → **Uygulamalar** → (⁝) menüsü → **Özel Erişim** → **Pil kullanımını optimize et** → Listede AdGuard'ı bulun ve işaretini kaldırın

1. Otomatik optimizasyonu devre dışı bırakın. Bunu yapmak için:

    **Pil** → (⁝) menüsünü açın → **Otomasyon** öğesini seçin → Oradaki tüm ayarları kapatın

    Yine, tam yol farklı olabilir, örneğin bazı cihazlarda şuraya gitmelisiniz:

    Telefon **Ayarlar** → **Cihaz bakımı** → (⁝) 3 noktalı menüye dokunun → **Gelişmiş** → **Otomatik optimizasyon** ve **Ayarları optimize et** öğelerini devre dışı bırak

1. Telefonunuzda varsa, Uyarlanabilir pili devre dışı bırakın:

    Telefon **Ayarlar** öğesini açın → **Pil** → **Daha fazla pil ayarları** → **Uyarlanabilir pil** öğesini kapatın

1. Uykudaki uygulamaları devre dışı bırakın (bu ayarın tam adı ve yolu cihaza göre değişebilir):

    Telefon **Ayarlar** öğesini açın → **Pil** → **Arka plan kullanım sınırları** → **Kullanılmayan uygulamaları uyku moduna al** öğesini devre dışı bırakın

### Android 9 & 10

- Go to **Phone settings** → **Device care** → Tap on the **Battery** item → (⁝) **3-dot menu** → **Settings** and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- Check that **Phone settings** → **Apps** → **Sleep as Android** → **Battery** → **Background restriction** is set to **App can use battery in background** for AdGuard.

- AdGuard'ı Uykudaki uygulamalarından kaldırın. Bunu yapmak için:

    1. **Telefon ayarları** → **Cihaz bakımı** öğesine gidin

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. **Pil** öğesine dokunun

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. **3 noktalı menü** → **Ayarlar** öğesine dokunun

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. **Uykudaki uygulamalar** öğesine dokunun

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Çöp kutusu simgesini kullanarak AdGuard'ı **uykudan uyandırın**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Eski Samsung cihazları

Eski Samsung cihazlarında, arka plan işlemini ayarlamaya çok gerek yoktur, ancak sizin durumunuzda AdGuard uygulaması kapanıyorsa veya bir süre sonra son görevlerden kayboluyorsa, aşağıdakileri yapın:

- **Son görevler** düğmesine dokunun, **Ek ayarlar** simgesine dokunun. Bu şöyle görünmelidir:

 ![Samsung ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Kilit simgesine dokunun

 ![Samsung ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei ve Android özelleştirmesi **EMUI**, standart dışı arka plan işlem sınırlamaları açısından piyasadaki en sıkıntılı ürünlerden biridir. On default settings, virtually all apps that work in background will face problems and ultimately break.

### App Launch on some EMUI 8, 9 and 10 devices (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up.

    Go to **Settings** → **All** → **Startup manager** → Toggle AdGuard off

    Also for reliable background processes you may need to uninstall **PowerGenie** as detailed below.

### EMUI 9+ devices and PowerGenie

:::not

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. Nasıl kaldırılacağını aşağıda görebilirsiniz.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Kaynak

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. Bu ayar cihazınızın ayarlarında mevcutsa, aşağıdaki adımları atlayabilirsiniz. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Telefonunuzu bir veri kablosuyla bağlayın;

1. [Geliştirici seçeneklerini](https://developer.android.com/studio/debug/dev-options.html) etkinleştirin;

1. Enable **USB debugging** within Developer options on your phone;

1. Run the following commands on your computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwapsvv`

If AdGuard keeps getting killed, also try running

`adb shell pm stopservice hwPfwService`

### EMUI 6+ devices (and some EMUI 5 devices)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite ve Huawei Mate 9 Pro

Cihaz ayarlarını açın → **Pil** → **Uygulamayı başlatma** → AdGuard'ı **Manuel olarak yönet** olarak ayarlayın ve her şeyin açık olduğundan emin olun.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Telefon ayarları** → **Pil** → **Uygulama başlatma** → AdGuard'ı **Manuel olarak yönet** olarak ayarlayın ve her şeyin açık olduğundan emin olun. Ayrıca güvenilir arka plan işlemleri için PowerGenie'yi yukarıda açıklandığı gibi kaldırmanız gerekebilir.

### Early Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- **Son görevler** düğmesine dokunun:

    ![Huawei son uygulamalar *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Kilit simgesine dokunun:

    ![Huawei kilidi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Ayrıca, AdGuard'ın arka plan çalışmasını daha etkili bir şekilde ayarlamak için cihaz ayarlarını açmalı ve aşağıdakileri yapmalısınız:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu, arka plan işlem sınırlamaları konusunda Huawei ve Xiaomi ile neredeyse aynı yaklaşıma sahiptir. Böylece, aşağıdaki ayarları yaparak AdGuard'ın ve diğer uygulamaların arka planda çalışmasını devre dışı bırakmaktan kaçınabilirsiniz:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Telefonunuzu bir veri kablosuyla bağlayın;

1. [Geliştirici seçeneklerini](https://developer.android.com/studio/debug/dev-options.html) etkinleştirin;

1. Enable **USB debugging** within Developer options on your phone;

1. Uninstall the **com.evenwell.emm** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 ve 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Telefonunuzu bir veri kablosuyla bağlayın;

1. [Geliştirici seçeneklerini](https://developer.android.com/studio/debug/dev-options.html) etkinleştirin;

1. Enable **USB debugging** within Developer options on your phone;

1. Grant MacroDroid (or your choice of automation app) the ability to write to the global settings store by entering this command:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Create a task triggered at **Device Boot** that performs the following:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::not

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Nokia'nın diğer modelleri

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

Şu andan itibaren, AdGuard normal şekilde çalışmalı ve Güç Tasarrufu yeniden başlatılana kadar standart Android pil optimizasyonlarını kullanmalıdır.

Teknoloji meraklısı kullanıcılar için alternatif, daha kalıcı bir çözüm:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Telefonunuzu bir veri kablosuyla bağlayın;

1. [Geliştirici seçeneklerini](https://developer.android.com/studio/debug/dev-options.html) etkinleştirin;

1. Enable **USB debugging** within Developer options on your phone;

1. Uninstall the **com.evenwell.powersaving.g3** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. Şimdiye kadar, bunun için bir geçici çözüm:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Diğer çözümler:

- AdGuard'ı son uygulamalar ekranına sabitleyin
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Pil optimizasyonlarını kapatın

## OnePlus

OxygenOS yüklü cihazlar, işletim sistemi optimizasyonu da dahil olmak üzere işletim sistemine özgü önbellek temizleme ve boş RAM ile en sorunlu olanlardır. Ayrıca OxygenOS, bir süre kullanmazsanız AdGuard'ın çalışmasını kesintiye uğratabilir. Bu istenmeyen sonuçlardan kaçınmak için aşağıdaki adımları izleyin.

### Uygulamayı kilitleme

- **Ayarlar** öğesine gidin

- **Battery** → **Battery optimization**

- AdGuard'ı bulun

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Son uygulamalar menüsünü açın (bu ekran görüntüsünde gösterildiği gibi):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- AdGuard uygulamasını kilitleyin:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Lütfen AdGuard için devre dışı bırakın.

:::

### Pil optimizasyonu

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### App Auto-Launch

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Lütfen AdGuard için devre dışı bırakın.

### Enhanced / Advanced optimization

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. Bu ayar, anlık bildirimlerin gönderilmesini engeller.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Son uygulamaların temizleme davranışı

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. "Normal" moda geri döndürmek için:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. Bunu çözmek için:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Wiko cihazları, standart olmayan arka plan işlem optimizasyonları açısından sorunludur. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## Android stock devices Pixel/Nexus/Nubia/Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)
