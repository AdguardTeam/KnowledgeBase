---
title: Как настроить фоновую работу AdGuard
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

В некоторых случаях приложения не остаются в фоновом режиме («активными» или в спящем режиме) из-за встроенной функции оптимизации ОС Android или так называемого «режима экономии батареи» — эта функция может закрывать фоновые приложения. Может быть неудобно перезапускать их каждый раз, когда они закрываются. Чтобы избежать завершения работы фонового приложения, необходимо выполнить шаги, указанные нами в инструкции отдельно для каждого производителя (версии) Android OS. Обратите внимание, что инструкции для разных производителей в основном очень похожи.

## Asus

Информация о проблемах на устройствах Asus ещё далеко не исчерпывающая, поэтому в перспективе их может быть больше, чем указано здесь. Мы будем дополнять статью по мере поступления информации.

Основной источник проблем с фоновой работой на устройствах Asus связан с приложением Power Master. Оно предустановлено и имеет довольно агрессивные настройки по умолчанию, например, блокирует запуск приложений и завершает фоновые задачи при выключении экрана. Чтобы убедиться, что приложение работает в фоновом режиме, сделайте следующее:

1. Перейдите к **Mobile Manager** → **PowerMaster** → **Настройки** (или **Параметры экономии заряда батареи**) → Снимите флажок с опции **Очистить в режиме ожидания**

1. Перейдите к **Mobile Manager** → **PowerMaster** → **Настройки** (или **Параметры экономии заряда батареи**) → Снимите флажок с опции **Запрещать приложениям запускаться автоматически**

Или вместо того, чтобы полностью отключать флажок **Запрещать приложениям запускаться автоматически**, вы можете перейти в **Настройки** → **Параметры экономии заряда батареи** → **Диспетчер автозапуска** → **AdGuard** и снять флажок.

## Xiaomi

Устройства Xiaomi (и особенно MIUI) — одни из самых проблемных, когда речь идёт о фоновой работе. Известно, что они ограничивают фоновые процессы и имеют нестандартные разрешения с отсутствием надлежащей документации. Иногда приложения просто не работают на телефонах Xiaomi, и с этим мало что можно сделать. Ниже приведены некоторые действия, которые вы можете выполнить, если столкнётесь с проблемами, связанными с фоновой работой AdGuard на различных устройствах Xiaomi.

### MIUI 13+ и HyperOS

В зависимости от версий MIUI и HyperOS существует два способа изменить настройки оптимизации заряда батареи на телефоне и блокировать рекламу более эффективно.

Опция 1

1. Перейдите в **Настройки** → **Приложения** → **Разрешения** → **Автозапуск в фоновом режиме** и разрешите AdGuard работать в фоновом режиме

1. Вернитесь в **Настройки** → **Приложения** → **Управление приложениями** → **AdGuard** и отключите параметр **Приостановить работу в неактивный период**

1. Перейдите в раздел **Экономия заряда батареи** и нажмите **Без ограничений**

Опция 2

1. Перейдите в **Настройки** → **Приложения** → **Управление приложениями** → **AdGuard** и включите **Автозапуск**

1. Перейдите в раздел **Экономия заряда батареи** и нажмите **Без ограничений**

Готово! Вы успешно настроили AdGuard для работы в фоновом режиме.

### MIUI 12.0.8

Чтобы приложение AdGuard успешно работало в фоновом режиме, сделайте следующее:

В разделе **Настройки** → **Приложения** → **Управление приложениями**, прокрутите вниз до **AdGuard** и включите **Автозапуск**.

![Настройки Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

На том же экране прокрутите вниз до настройки **Контроль активности**, перейдите в неё и выберите «Нет ограничений».

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

В разделе **Другие разрешения** включите все возможные разрешения

Запустите приложение **Безопасность**.

Нажмите на значок **шестерёнки** в правом верхнем углу экрана.

![Настройки Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

На экране «Настройки» выберите пункт **Ускорение**.

![Настройки Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Нажмите на **Закрепить приложения**.

![Настройки Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

На экране **Закрепить приложения** включите AdGuard.

![Настройки Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Готово! Вы успешно закрепили приложение AdGuard.

### MIUI 12

Зайдите в **Настройки** → **Приложения** → **Управление приложениями** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Включите Автозапуск AdGuard
- Включите все возможные разрешения в «Других разрешениях»
- В Разрешениях выберите **Нет ограничений** для Контроля фоновой активности

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Теперь запустите Диспетчер запущенных приложений, проведя пальцем вверх от нижней грани экрана, и найдите приложение AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Нажмите на него и удерживайте, пока не появится меню. Нажмите на значок замка.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Теперь этот значок должен быть над окном AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Чтобы приложение успешно работало в фоновом режиме, настройте следующие параметры:

- Включите Автозапуск AdGuard

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Настройки** → **Батарея и производительность** & → отключите режим **Экономия энергии**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Затем откройте **Контроль фоновой активности** → **AdGuard** → **Нет ограничений**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Все модели

Следующие шаги должны быть выполнены на любом устройстве Xiaomi, которое продолжает останавливать работу приложения AdGuard:

#### Управление питанием

Пожалуйста, включите:

- **Настройки** → **Расширенные настройки** → **Диспетчер батареи** → установите **План электропитания** на **Производительность**
- **Настройки телефона** → **Расширенные настройки** → **Диспетчер батареи** → **Защищённые приложения** — добавьте AdGuard в **Защищённые**
- **Настройки устройства** → **Приложения** → **AdGuard** → **Батарея** → **Энергосберегающая подсказка** и **Продолжить работу после выключения экрана**
- **Настройки** → **Дополнительные настройки** → **Батарея и производительность** → **Управление использованием батареи приложениями**. И здесь:

1. Отключите режимы энергосбережения
1. Выберите следующие параметры: **Энергосбережение в фоновом режиме** → **Выбрать приложение** → **AdGuard** → **Фоновые настройки** → **Нет ограничений**

#### Режим энергосбережения

Настройте **Безопасность** → **Батарея** → **Режим энергосбережения** → **AdGuard** → **Нет ограничений**

#### Закрепление приложения

Чтобы настроить фоновую работу AdGuard для устройств Xiaomi, обратите внимание на пункты Батарея и Разрешения.

- Нажмите на кнопку **Недавние задачи** и смахните AdGuard вниз, чтобы сделать опции *видимыми* (как показано на скриншоте):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Нажмите на иконку **замка**. Это не даст Xiaomi автоматически закрывать AdGuard. Это должно выглядеть так:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Перейдите в раздел **Батарея**

- Выберите приложение для **экономии заряда батареи**

- Найдите и выберите **AdGuard**

- Настройте следующие **Фоновые параметры**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Перейдите в **Разрешения**

- Выберите **Автозапуск**

- Убедитесь, что эта функция включена для AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

On many Samsung devices, apps that have been unused for three days will not be able to start from the background. To prevent this, you should turn off the **Adaptive Battery** and **Put apps to sleep** options wherever possible. Note that after an app or OS update, these settings often revert to their default values and must be turned off again.

### Android 11+

On Android 11, Samsung prevents apps (including AdGuard) from working in the background by default, unless you exclude them from battery optimizations. To ensure that AdGuard will not be terminated in the background:

1. Lock AdGuard in **Recent apps**: open **Recent apps**, find AdGuard, and long-press the AdGuard app icon.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is **Settings** → **Apps** → (⁝) menu → **Special access** → **Optimize battery usage**. Find AdGuard on the list and uncheck it.

1. Disable automatic optimization:

    Open **Battery** → (⁝) menu → **Automation** and toggle off all the settings there.

    Again, the exact path may differ. For example, on some devices you should go to phone **Settings** → **Device care** → (⁝) menu → **Advanced** and isable **Auto optimization** and **Optimize settings**.

1. If your phone has this option, disable **Adaptive battery**:

    Open phone **Settings** → **Battery** → **More battery settings** and toggle off **Adaptive battery**

1. Disable **Sleeping apps** (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** and disable **Put unused apps to sleep**

If you’re still experiencing issues, try these additional battery optimization adjustments:

 1. Navigate to **Settings** → **Apps** → **AdGuard** → **Battery** and turn on the **Optimised** option:

    ![Optimised settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Go to **Settings** → **Battery** → **Background usage limits** → **Never auto sleeping apps**:

    ![Never auto sleeping apps settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Choose AdGuard from the list of apps. If you don’t see it, return to step 1 and make sure that the *Optimized* battery mode is active:

    ![Choose the app *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 и 10

- Go to **Phone settings** → **Device care**, tap the **Battery** item, go to (⁝) **3-dot menu** → **Settings**, and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- In **Phone settings** → **Apps** → **Sleep as Android** → **Battery**, check that **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from **Sleeping apps**:

    1. Go to **Phone settings** → **Device care**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Wake up AdGuard using the trash can icon:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Старые устройства Samsung

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Это должно выглядеть так:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### Запуск приложения на устройствах с EMUI 8, 9 и 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    Зайдите в **Настройки** → **Все** → **Диспетчер запуска** → передвиньте бегунок в положение «Выкл.»

    Также для надёжных фоновых процессов вы можете удалить **Power Genie**, как описано ниже.

### Устройства с EMUI 9+ и PowerGenie

:::note

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Source

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. If this setting is present in your device's settings, you may skip the following steps. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer.

1. Connect your phone with a data cable.

1. Включите [Параметры разработчика](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone.

1. Выполнить на компьютере следующие команды:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### Устройства с EMUI 6+ (и некоторые устройства с EMUI 5)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite и Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Ранние устройства Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Включите [Параметры разработчика](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Удалите файл **com.evenwell.emm** с помощью следующих команд ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 и 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Включите [Параметры разработчика](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Предоставьте MacroDroid (или выбранному вами приложению автоматизации) возможность делать записи в хранилище глобальных настроек, введя эту команду:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Создайте задачу, запускаемую при **Загрузке устройства**, которая выполняет следующее:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Другие модели Nokia

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Включите [Параметры разработчика](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Удалите файл **com.evenwell.powersaving.g3** с помощью следующих команд ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### Блокировка приложения

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### Оптимизация батареи

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### Автозапуск приложения

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Улучшенная / Расширенная оптимизация

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Поведение при очистке последних приложений

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Wiko devices are problematic in terms of non-standard background process optimizations. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## Стандартные устройства Pixel/Nexus/Nubia/Essential на базе Android

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. Настройте приложение AdGuard:

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Настройте батарею:

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Включите *Постоянная VPN* для AdGuard:

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
