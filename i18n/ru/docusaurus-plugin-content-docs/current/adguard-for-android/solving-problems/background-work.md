---
title: How to protect AdGuard from being disabled by the system
sidebar_position: 9
---

В некоторых случаях приложения не остаются в фоновом режиме ("активными" или в спящем режиме) из-за встроенной функции оптимизации ОС Android или так называемого "режима экономии батареи" — эта функция может закрывать фоновые приложения. Может быть неудобно перезапускать их каждый раз, когда они закрываются. Чтобы избежать завершения работы фонового приложения, необходимо выполнить шаги, указанные нами в инструкции отдельно для каждого производителя (версии) Android OS. Обратите внимание, что инструкции для разных производителей в основном очень похожи.

## Asus

Информация о проблемах на устройствах Asus ещё далеко не исчерпывающая, поэтому в перспективе их может быть больше, чем указано здесь. Мы будем дополнять статью по мере поступления информации.

Зайдите в Настройки > Power Manager > Mobile Manager > Настройки > Параметры экономии заряда батареи > Автозапуск Manager > AdGuard > снимите флажок.

## Xiaomi

### MIUI 12.0.8+

Чтобы приложение AdGuard успешно работало в фоновом режиме, сделайте следующее:

Зайдите в **Настройки** > **Приложения** > **Управление приложениями** > прокрутите вниз, чтобы найти **AdGuard**, включите **Автозапуск**.

![Настройки Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

На том же экране прокрутите вниз до настройки **Контроль активности**, перейдите в неё и выберите "Нет ограничений".

![Miui](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

Запустите приложение **Безопасность**.

Нажмите на значок **шестерёнки** в правом верхнем углу экрана.

![Настройки Miui](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

На экране "Настройки" выберите пункт **"Ускорение"**.

![Настройки Miui](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Затем нажмите на **"Закрепленные приложения"**.

![Настройки Miui](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

На экране **Закрепленные приложения** screen переведите тумблер AdGuard в активное положение.

![Настройки Miui](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Готово! Вы успешно закрепили приложение AdGuard.

### MIUI 12

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Зайдите в **Настройки** > **Приложения** > **Управление приложениями** > **AdGuard**.

- Включите Автостарт
- В Разрешениях выберите **"Нет ограничений"** для Контроля фоновой активности

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Теперь запустите Диспетчер запущенных приложений, проведя пальцем вверх от нижней грани экрана и найдите приложение AdGuard.

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Нажмите на него и удерживайте, пока не появится специальное меню. Нажмите на значок замка.

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Теперь этот значок должен быть над окном AdGuard.

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Чтобы приложение успешно работало в фоновом режиме, настройте следующие параметры:

![Xiaomi](https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi1en.png)

- **Settings** > **Battery & performance** > switch-off **Battery saver** function

![Xiaomi](https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi2en.png)

- Then open **App battery saver** settings > **AdGuard** > **No restrictions**

![Xiaomi](https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi3en.png)

### Power management

Please enable:

- **Settings** > **Advanced Settings** > **Battery manager** > set **Power plan** to **Performance**
- **Device Settings** > **Advanced Settings** > **Battery Manager** > **Protected apps** – your app needs to be Protected
- **Device Settings** > **Apps** > **your app** > **Battery** > **Power-intensive prompt** and **Keep running after screen off**
- **Settings** > **Additional Settings** > **Battery & Performance** > **Manage apps’ battery usage** and here:

1. Switch Power Saving Modes to Off
2. Choose the following options: **Saving Power in The Background** > **Choose apps** > **Select your app** > **Background Settings** > **No restrictions**

### App battery saver

**Security** > **Battery** > **App Battery Saver** > **AdGuard** > **No restriction**

### App pinning

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap the **Recent tasks** button and swipe AdGuard down to make options *visible* (as shown on the screenshot):

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tap on the **lock** icon. This will stop Xiaomi from closing AdGuard automatically. It should look like this:

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Go to **Battery**

- Select **battery saver** app

- Find and select **AdGuard**

- Set up the following **Background settings**:

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Go to **Permissions**

- Select **Autostart**

- Make sure that autostart function is enabled for AdGuard:

![Xiaomi](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

### Galaxy S9 / S10

Battery optimization is **turned on by default**. During the app update or the OS update, the settings also do revert back to the defaults, forcing you to turn them off again.

### Спящие приложения

Sleeping apps menu is the sniper’s nest for Samsung’s app killing policies. Make sure to follow the instructions very carefully to prevent the apps from being killed.

Чеклист:

- Disable **Put unused apps to sleep**
- Disable **Auto-disable unused apps**
- Remove your app from the list of sleeping apps
- Disable background restrictions for your app

1. Start **Device care** from phone settings

![Samsung](https://cdn.adguard.com/public/Adguard/screenshots/android/samsung1en.png)

2. Нажмите **Аккумулятор**

![Samsung](https://cdn.adguard.com/public/Adguard/screenshots/android/samsung2en.png)

3. Tap the **3-dot menu** > **Settings**

![Samsung](https://cdn.adguard.com/public/Adguard/screenshots/android/samsung3en.png)

4. Disable all toggles (except Notifications)
5. Tap **Sleeping apps**

![Samsung](https://cdn.adguard.com/public/Adguard/screenshots/android/samsung45en.png)

6. **Wake up** all the apps using the trashcan icon

![Samsung](https://cdn.adguard.com/public/Adguard/screenshots/android/samsung6en.png)

> **Note**: Make sure that `Put unused apps to sleep` and `Auto-disable unused apps` are disabled. Otherwise, Samsung will put your apps back to sleep after a few days even if you have woken them up manually.

### Старые устройства Samsung

For early Samsung devices, there is no huge need for setting up the background work, but if in your case the application is getting closed or disappears from the recent tasks after a while, do the following:

 - Tap the **Recent tasks** button, tap on the **Additional settings** icon. It should look like this:

 ![Настройки Samsung](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/samsungoptions.png)

 - Tap **Lock Apps**:

 ![Настройки Samsung](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/samsunglockapps.png)

  - Tap on the lock icon

 ![Настройки Samsung](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/samsunglock.png)

## Huawei

### App Launch on some EMUI 8, 9 and 10 devices (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

- **Phone settings** > **Battery** > **App launch** and then set your app to **Manage manually** and make sure everything is turned on.

![Huawei](https://cdn.adguard.com/public/Adguard/screenshots/android/huawei1en.png)

1. **Phone settings** > **Battery** > **App launch**. This feature may or may not be available for all devices or labeled differently.

![Huawei](https://cdn.adguard.com/public/Adguard/screenshots/android/huawei2en.png)

2. Turn off **Manage all automatically**

![Huawei](https://cdn.adguard.com/public/Adguard/screenshots/android/huawei3en.png)

3. Make sure to **ENABLE** all toggles.

Also for reliable background processes you may need to uninstall PowerGenie as detailed below.

### EMUI 9+ devices

> Note: On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a new task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to fix proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge) Source: [XDA](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

**You need to**:

1) [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

2) Connect your phone with a data cable;

3) Enable **Developer options**;

4) Enable **USB debugging** within Developer options on your phone;

5) Run the following commands on your computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

We did not yet have this confirmed but it is possible you can alternatively just disable PowerGenie in *Phone settings* > *Apps*. This setting would need to be re-applied every time you reboot your device.

> Please still follow the steps below — Huawei phones usually have multiple powersaving mechanisms. Also, you may not have PowerGenie on your phone, but your apps may still get killed by another mechanism.

### EMUI 6+ devices (and some EMUI 5 devices):

- **Phone settings** > **Advanced Settings** > **Battery manager** > **Power plan** set to **Performance**;
- **Phone Settings** > **Advanced Settings** > **Battery Manager** > **Protected apps** – set your app as **Protected**;
- **Phone Settings** > **Apps** > **Your app** > **Battery** > **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** > **Apps** > **Advanced (At the bottom)** > **Ignore optimizations** > Press Allowed > **All apps** > Find your app on the list and set to **Allow**.

#### Huawei P9 Plus:

Open device settings > **Apps** > **Settings** > **Special access** > choose **Ignore battery optimization** > select **Allow** for your app.

### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro:

Open device settings > **Battery** > **App launch**> then set your app to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10:

**Phone settings** > **Battery** > **App launch** and then set your app to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Early Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock the application in the background so it won't be terminated by battery saving or background killer process.

  - Tap the **Recent tasks** button:

  ![Последние приложения Huawei](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

  - Нажмите на значок замка:

 ![Huawei lock](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of your app more effectively, you should open device settings and do the following:

- Go to **Advanced Settings** > then open **Battery Manager** > Set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if your app is Protected;
- Go to **Apps** in the main settings and click on AdGuard there > choose **Battery** > enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) > **Special access** > choose **Ignore battery optimization* > press **Allowed** > **All apps** > find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** > then open **Battery Manager** > set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if your app is Protected;
- Go to **Apps** section and click on AdGuard there > choose **Battery** > enable **Power-intensive prompt** and **Keep running after screen is off**;

## Nokia

Nokia on Android O and P disables any background process after 20 minutes if the screen is off.

Here is what you need to do in order to prevent killing the background process of your app:

- Go to device settings > open **Apps** > choose **See all apps**;
- Then tap on the right top corner menu > choose **Show system**;
- Find **Power saver** in the app list, select it and tap **Force stop**. It will remain stopped until the next restart.

From now on, background apps are supposed to work smoothly and use the standard Android battery optimizations.

**There is an alternative solution for background work optimization which is more appropriate for advanced users. Вы найдёте инструкции ниже.**

### Nokia 1 (Android Go)

- Uninstall the com.evenwell.emm package via the following adb commands:

`adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Другие модели Nokia

- Uninstall the com.evenwell.powersaving.g3 package via the following adb commands:

`adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) every time you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** > tap **Privacy Permissions** > **Startup manager** and allow AdGuard app to run in background.

Другие решения:

* Pin your app to the recent apps screen
* Enable your app in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
* Turn off battery optimizations

## Oneplus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the application's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps:

 - Откройте **Настройки**

 - **Battery** > **Battery optimization**

 - Find the app you want to keep awake all the time

 - Tap on it and select **Don't optimize** option

 - Tap **Done** to save

 - Open recent apps menu (as showed on this screenshot):

 ![Onepluslock](https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard application:

![Oneplusdots](https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

> On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for your app.

And here is one more thing to try:

 - Open device settings > **Battery** > **Battery optimization** > switch to the **All apps** list (top menu) > choose your app > activate **Don’t optimize**

 - Open device settings > **Battery** > **Battery Optimization** > three dots > **Advanced Optimization** > Disable Deep Optimization

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization and opened Pandora’s box. It is called Stamina mode and it instantly breaks all background processes and all alarms if enabled.

**Решение:**

Go to **Settings** > **Battery** > Three dots in the top right corner > **Battery optimization** > **Apps** > **AdGuard** > uncheck

## Wiko

Wiko devices are definitely problematic in terms of non-standard background process optimizations and adjustments to the settings that need to be done to make apps work properly.

**Решение:**

- Go to **Phone Assistant** > **Battery** > turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right > **Background apps whitelist** > Select **AdGuard**

## Android stock devices Pixel/Nexus/Essential

Android stock OS normally does not conflict with applications working in the background, but if you are facing any issues you will need to switch on the **Always on VPN** mode.

 - Go to **Settings** > **Network and Internet**

 ![Stocknetwork](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

 - Tap **VPN** and choose **AdGuard**

 ![Stockvpn](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

 - Set up **Always on VPN** mode

 ![Stockadguard](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)