---
title: How to protect AdGuard from being disabled by the system
sidebar_position: 8
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

In some cases, apps won't stay in the background (“alive” or in a sleep mode) due to the Android OS optimization function, or the so-called “battery save mode” — this function can kill background apps. Poate fi incomod să le relansați de fiecare dată când sunt închise. Pentru a evita închiderea aplicației din fundal, trebuie să urmați pașii descriși separat pentru fiecare producător (versiune) a sistemului de operare Android. Rețineți că instrucțiunile pentru diferiți producători sunt, în cea mai mare parte, foarte similare.

## Asus

Informațiile despre dispozitivele Asus sunt încă departe de a fi exhaustive, așa că pot exista mai multe probleme decât cele enumerate aici. Vom actualiza această parte a articolului când vom ști mai multe.

Sursa principală a problemelor potențiale cu lucrul în fundal pe dispozitivele Asus este asociată cu aplicația de optimizare numită Power Master. Este preinstalată și are setări implicite destul de agresive, de exemplu, pentru a bloca aplicațiile de la a porni și a închide sarcinile în fundal când ecranul tău se stinge. Pentru a te asigura că procesarea în fundal a aplicațiilor funcționează, setează următoarele:

1. Du-te la **Manager mobil** → **PowerMaster** → **Setări** (sau **Opțiuni de economisire a energiei**) → Debifează **Curățați în suspendare**

1. Go to **Mobile Manager** → **PowerMaster** → **Settings** (or **Battery-saving options**) → Uncheck **Auto-deny apps from auto starting**

Alternativ, în loc să debifezi complet **Auto-refuz aplicațiile de a porni automat**, poți merge la **Setări** → **Opțiuni de economisire a energiei** → **Manager de pornire automată** → **AdGuard** și debifează-l.

## Xiaomi

Dispozitivele Xiaomi (și în special MIUI) sunt printre cele mai problematice în ceea ce privește lucrul în fundal. Se știe că limitează procesele în fundal și au permisiuni non-standard, fiind lipsiți de documentație adecvată. Uneori aplicațiile pur și simplu nu funcționează corect pe telefoanele Xiaomi și există puțin ce poate fi făcut în privința asta. Mai jos sunt câteva acțiuni pe care le-ai putea încerca să le efectuezi dacă întâmpini probleme cu lucrul în fundal al AdGuard pe diverse dispozitive Xiaomi.

### MIUI 13+ and HyperOS

Depending on the MIUI and HyperOS versions, there are two ways to change the battery optimization settings on your phone and block ads more efficiently.

Option 1

1. Go to **Settings** → **Apps** → **Permissions** → **Background autostart** and allow AdGuard to run in the background

1. Return to **Settings** → **Apps** → **Manage apps** → **AdGuard** and uncheck **Pause app activity if unused**

1. Go to **Battery saver** and tap **No restrictions**

Option 2

1. Go to **Settings** → **Apps** → **Manage apps** → **AdGuard** and enable **Autostart**

1. Go to **Battery saver** and tap **No restrictions**

Terminat! You have successfully set up AdGuard to work in the background.

### MIUI 12.0.8

Pentru a permite aplicației AdGuard să funcționeze cu succes în fundal, urmează pașii următori:

In **Settings** → **Apps** → **Manage apps**, scroll down to locate **AdGuard** and set **Autostart** to “On”.

![Setări Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scroll down to **Battery saver**, tap it, and set to “No restrictions”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Other Permissions**, set all possible permissions to “On”

Rulați aplicația **Securitate**.

Tap on the **Gear** icon at the top-right corner of the screen.

![Setări Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tap **Boost speed** in Feature Settings.

![Setări Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Atingeți **Blochează aplicațiile**.

![Setări Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Pe ecranul **Blochează aplicațiile**, setați comutatorul pentru aplicația AdGuard pe Activat.

![Setări Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Asta e tot! You’ve successfully pinned the AdGuard app.

### MIUI 12

Mergi la **Setări** → **Aplicații** → **Gestionează aplicațiile** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Set Autostart to “On”
- Set all possible permissions in Other Permissions to “On”
- Setează economizorul de baterie pe **Fără restricții**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Acum lansați managerul de aplicații active glisând în sus din partea de jos a ecranului și căutați aplicația AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tap and hold it until a menu pops up. Select a lock icon.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Iconița de blocare ar trebui să apară deasupra ferestrei aplicației.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Pentru a permite aplicației tale să funcționeze cu succes în fundal, configurează setările sale astfel:

- Set Autostart to “On”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Setări** → **Baterie & performanță** → dezactivează funcția **Economizor de baterie**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Apoi deschide setările **Economizor de baterie aplicații** → **AdGuard** → **Fără restricții**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Toate modelele

Următorii pași ar trebui să fie efectuați pe orice dispozitiv Xiaomi care continuă să închidă aplicația AdGuard:

#### Power management

Vă rugăm să activați:

- **Settings** → **Advanced Settings** → **Battery manager** → set **Power plan** to **Performance**
- **Device Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — AdGuard needs to be **Protected**
- **Device Settings** → **Apps** → **AdGuard** → **Battery** → **Power-intensive prompt** and **Keep running after screen off**
- **Setări** → **Setări suplimentare** → **Baterie & performanță** → **Gestionează utilizarea bateriei de către aplicații** și aici:

1. Switch Power Saving Modes to “Off”
1. Choose the following options: **Saving Power in The Background** → **Choose apps** → **AdGuard** → **Background Settings** → **No restrictions**

#### Economizor de baterie pentru aplicații

Set **Security** → **Battery** → **App Battery Saver** → **AdGuard** to **No restriction**

#### Fixarea aplicațiilor

Pentru a configura lucrul în fundal al AdGuard pe dispozitivele Xiaomi, trebuie să acorzi atenție Bateriei și Permisiunilor.

- Atingeți butonul **Sarcini recente** și glisați AdGuard în jos pentru a face opțiunile *vizibile* (așa cum este ilustrat în captura de ecran):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tap on the **lock** icon. Aceasta va opri Xiaomi să închidă automat AdGuard. Ar trebui să arate astfel:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Mergi la **Baterie**

- Selectați aplicația **economizor de baterie**

- Găsiți și selectați **AdGuard**

- Configurați următoarele **Setări în fundal**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Mergi la **Permisiuni**

- Selectați **Pornire automată**

- Asigurați-vă că funcția de pornire automată este activată pentru AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Pe multe dispozitive Samsung, orice aplicație care nu este utilizată timp de 3 zile nu va putea să pornească din fundal. You should turn off **Adaptive battery** and **Put apps to sleep** options wherever possible to prevent that. Note that after an app or OS update, these settings often revert to their default values and will need to be turned off again.

### Android 11+

On Android 11, Samsung will prevent apps (including AdGuard) from working in background by default unless you exclude them from battery optimizations. To make sure AdGuard will not get killed in the background:

1. Lock AdGuard in Recent

    - Open **Recent apps**.
    - Find AdGuard.
    - Long-press the icon of the AdGuard app.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is:

    **Settings** → **Apps** → (⁝) menu → **Special Access** → **Optimize battery usage** → Find AdGuard on the list and uncheck it

1. Disable automatic optimization. Pentru a face acest lucru:

    Open **Battery** → (⁝) menu → Choose **Automation** → Toggle off all of the settings there

    Again, the exact path may differ, for example on some devices you should go to:

    Phone **Settings** → **Device care** → Tap the (⁝) 3-dot menu → **Advanced** → Disable **Auto optimization** and **Optimize settings**

1. If your phone has it, disable Adaptive battery:

    Open phone **Settings** → **Battery** → **More battery settings** → Toggle off **Adaptive battery**

1. Disable Sleeping apps (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** → Disable **Put unused apps to sleep**

### Android 9 & 10

- Go to **Phone settings** → **Device care** → Tap on the **Battery** item → (⁝) **3-dot menu** → **Settings** and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- Check that **Phone settings** → **Apps** → **Sleep as Android** → **Battery** → **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from Sleeping apps. To do that:

    1. Go to **Phone settings** → **Device care**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Wake up** AdGuard using the trashcan icon

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Dispozitive Samsung mai vechi

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Ar trebui să arate astfel:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap on the lock icon

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### Lansare aplicație pe unele dispozitive EMUI 8, 9 și 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

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

### Dispozitive EMUI 9+ și PowerGenie

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

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Run the following commands on your computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running

`adb shell pm stopservice hwPfwService`

### EMUI 6+ devices (and some EMUI 5 devices)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Huawei timpuriu

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap on the lock icon:

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

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Uninstall the **com.evenwell.emm** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 și 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Grant MacroDroid (or your choice of automation app) the ability to write to the global settings store by entering this command:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Create a task triggered at **Device Boot** that performs the following:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Alte modele Nokia

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Uninstall the **com.evenwell.powersaving.g3** package via the following ADB commands:

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

### Blochează aplicația

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::atenție

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### Optimizarea bateriei

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### Lansare automată a aplicației

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Optimizare îmbunătățită / Avansată

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Comportamentul de ștergere a aplicațiilor recente

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

## Android stock devices Pixel/Nexus/Nubia/Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. Set up the AdGuard app:

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Set up the battery:

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Enable *Always-On VPN* for AdGuard:

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
