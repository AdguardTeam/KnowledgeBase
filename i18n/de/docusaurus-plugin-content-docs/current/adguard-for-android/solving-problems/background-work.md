---
title: Einrichten des AdGuard-Hintergrundbetriebs
sidebar_position: 9
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In some cases, apps won't stay in the background (“alive” or in a sleep mode) due to the Android OS optimization function, or the so-called “battery save mode” — this function can kill background apps. Es kann lästig sein, sie jedes Mal neu zu starten, wenn sie geschlossen wurden. Um das Beenden von Apps im Hintergrund zu vermeiden, müssen Sie die Schritte befolgen, die wir für jeden Hersteller (Version) von Android OS separat beschrieben haben. Beachten Sie, dass die Anleitungen der verschiedenen Hersteller meist sehr ähnlich sind.

## Asus

Die Informationen über Asus-Geräte sind noch lange nicht vollständig, so dass es noch mehr Probleme geben kann, als hier aufgeführt sind. Wir werden diesen Teil des Artikels aktualisieren, sobald wir mehr wissen.

Die Hauptursache für mögliche Probleme mit der Hintergrundarbeit bei Asus-Geräten ist die Optimierungs-App namens Power Master. It is pre-installed and has pretty aggressive default settings, e.g. to block apps from starting and to kill background tasks when your screen turns off. Um sicherzustellen, dass die Hintergrundverarbeitung von Apps funktioniert, richten Sie Folgendes ein:

1. Öffnen Sie den **Mobile Manager** → **PowerMaster** → **Einstellungen** (oder **Batteriesparoptionen**) → Deaktivieren Sie **Aufräumen im Standby-Modus**

1. Öffnen Sie den **Mobile Manager** → **PowerMaster** → **Einstellungen** (oder **Batteriesparoptionen**) → Deaktivieren Sie **Apps vom automatischen Start ausschließen**

Anstatt **Automatischer Start von Apps** komplett zu deaktivieren, können Sie auch **Einstellungen** → **Batteriesparoptionen** → **Autostart-Manager** → **AdGuard** aufrufen und die Markierung entfernen.

## Xiaomi

Xiaomi-Geräte (und insbesondere MIUI-Geräte) gehören zu den problematischsten Geräten, wenn es um Hintergrundaufgaben geht. Sie sind dafür bekannt, dass sie Hintergrundprozesse einschränken und nicht standardmäßige Berechtigungen haben, und obendrein fehlt eine angemessene Dokumentation. Manchmal funktionieren Apps auf Xiaomi-Telefonen einfach nicht richtig und es gibt wenig, was man dagegen tun kann. Im Folgenden finden Sie einige Maßnahmen, die Sie durchführen können, wenn Sie Probleme mit den Hintergrundfunktionen von AdGuard auf verschiedenen Xiaomi-Geräten haben.

### MIUI 13+ and HyperOS

Depending on the MIUI and HyperOS versions, there are two ways to change the battery optimization settings on your phone and block ads more efficiently.

Option 1

1. Go to **Settings** → **Apps** → **Permissions** → **Background autostart** and allow AdGuard to run in the background

1. Return to **Settings** → **Apps** → **Manage apps** → **AdGuard** and uncheck **Pause app activity if unused**

1. Go to **Battery saver** and tap **No restrictions**

Option 2

1. Go to **Settings** → **Apps** → **Manage apps** → **AdGuard** and enable **Autostart**

1. Go to **Battery saver** and tap **No restrictions**

Fertig! You have successfully set up AdGuard to work in the background.

### MIUI 12.0.8

Damit Ihre AdGuard-App erfolgreich im Hintergrund läuft, gehen Sie wie folgt vor:

In **Settings** → **Apps** → **Manage apps**, scroll down to locate **AdGuard** and set **Autostart** to “On”.

![Xiaomi Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scroll down to **Battery saver**, tap it, and set to “No restrictions”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Other Permissions**, set all possible permissions to “On”

Starten Sie die App **Sicherheit**.

Tippen Sie auf das **Zahnrad**-Symbol in der oberen rechten Ecke des Bildschirms.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tippen Sie auf **Geschwindigkeit erhöhen** in den Funktionseinstellungen.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tap **Lock apps**.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

In the **Lock apps** screen, set the toggle switch for the AdGuard app to On.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Fertig! Sie haben die AdGuard-App erfolgreich angeheftet.

### MIUI 12

Öffnen Sie **Einstellungen** → **Apps** → **Apps verwalten** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Set Autostart to “On”
- Set all possible permissions in Other Permissions to “On”
- Setzen Sie den Batterieschutz auf **Keine Einschränkungen**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Starten Sie nun den Manager für aktive Apps, indem Sie vom unteren Bildschirmrand nach oben wischen und nach der AdGuard-App suchen.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tippen Sie darauf und halten Sie sie gedrückt, bis ein Menü angezeigt wird. Wählen Sie das Schlosssymbol.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Das Schlosssymbol sollte über dem App-Fenster angezeigt werden.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Um Ihre App erfolgreich im Hintergrund auszuführen, konfigurieren Sie ihre Einstellungen wie folgt:

- Set Autostart to “On”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Settings** → **Battery & performance** → switch-off **Battery saver** function

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Then open **App battery saver** settings → **AdGuard** → **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Alle Modelle

Die folgenden Schritte sollten auf jedem Xiaomi-Gerät durchgeführt werden, welches die AdGuard-App immer wieder deaktiviert:

#### Energieverwaltung

Bitte aktivieren Sie:

- **Einstellungen** → **Erweiterte Einstellungen** → **Batteriemanager** → stellen Sie den **Energieplan** auf **Leistung**
- **Device Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — AdGuard needs to be **Protected**
- **Device Settings** → **Apps** → **AdGuard** → **Battery** → **Power-intensive prompt** and **Keep running after screen off**
- **Settings** → **Additional Settings** → **Battery & Performance** → **Manage apps’ battery usage** and here:

1. Switch Power Saving Modes to “Off”
1. Choose the following options: **Saving Power in The Background** → **Choose apps** → **AdGuard** → **Background Settings** → **No restrictions**

#### Energiesparmodus

Stellen Sie **Sicherheit** → **Akku** → **Energiesparmodus** → **AdGuard** auf **Keine Einschränkung**

#### App anheften

Um die Hintergrundaktivität von AdGuard für Xiaomi-Geräte einzurichten, sollten Sie die Punkte Akku und Berechtigungen beachten.

- Tap the **Recent tasks** button and swipe AdGuard down to make options *visible* (as shown on the screenshot):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tap on the **lock** icon. This will stop Xiaomi from closing AdGuard automatically. Es sollte wie folgt aussehen:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Öffnen Sie **Batterie**

- Wählen Sie eine App zum **Batteriesparen**

- Suchen und wählen Sie **AdGuard**

- Richten Sie die folgenden **Hintergrundeinstellungen** ein:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Wechseln Sie zu **Berechtigungen**

- Wählen Sie **Autostart**

- Stellen Sie sicher, dass die Autostart-Funktion für AdGuard aktiviert ist:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Auf vielen Samsung-Geräten kann eine App, die 3 Tage lang nicht benutzt wurde, nicht mehr im Hintergrund gestartet werden. Um dies zu verhindern, sollten Sie die Optionen **Adaptiver Akku** und **Apps in den Ruhezustand versetzen** möglichst ausschalten. Beachten Sie, dass diese Einstellungen nach einer App- oder Betriebssystemaktualisierung oft auf ihre Standardwerte zurückgesetzt werden und erneut deaktiviert werden müssen.

### Android 11+

Unter Android 11 verhindert Samsung standardmäßig, dass Apps (einschließlich AdGuard) im Hintergrund ausgeführt werden, es sei denn, Sie schließen sie von den Akku-Optimierungen aus. To make sure AdGuard will not get killed in the background:

1. Lock AdGuard in Recent

    - Open **Recent apps**.
    - Find AdGuard.
    - Long-press the icon of the AdGuard app.

1. To keep AdGuard working properly:

    Öffnen Sie **Einstellungen** → **Apps** → **AdGuard** → **Akku** → **Akkuverbrauch optimieren**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Wählen Sie im Auswahlmenü **Alle**. Suchen Sie dann AdGuard in der Liste und setzen Sie den Status auf **Nicht optimieren** (bei einigen Modellen gibt es möglicherweise einen Schalter, den Sie deaktivieren müssen).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Auf einigen Geräten kann die entsprechende Einstellung anders heißen und sich an anderen Stellen befinden. Zu den möglichen Pfaden zählen:

    **Settings** → **Apps** → (⁝) menu → **Special Access** → **Optimize battery usage** → Find AdGuard on the list and uncheck it

1. Deaktivieren Sie die automatische Optimierung. Um dies zu tun:

    Open **Battery** → (⁝) menu → Choose **Automation** → Toggle off all of the settings there

    Again, the exact path may differ, for example on some devices you should go to:

    Phone **Settings** → **Device care** → Tap the (⁝) 3-dot menu → **Advanced** → Disable **Auto optimization** and **Optimize settings**

1. If your phone has it, disable Adaptive battery:

    Open phone **Settings** → **Battery** → **More battery settings** → Toggle off **Adaptive battery**

1. Disable Sleeping apps (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** → Disable **Put unused apps to sleep**

### Android 9 und 10

- Go to **Phone settings** → **Device care** → Tap on the **Battery** item → (⁝) **3-dot menu** → **Settings** and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- Check that **Phone settings** → **Apps** → **Sleep as Android** → **Battery** → **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from Sleeping apps. Um dies zu tun:

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

### Ältere Samsung-Geräte

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Es sollte wie folgt aussehen:

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap on the lock icon

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

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

:::note

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Quelle

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

### EMUI 6+ Geräte (und einige EMUI 5 Geräte)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Telefoneinstellungen** → **Apps** → **Ihre App** → **Akku** → **Energieintensive Anforderung** `[deaktivieren]` und **Nach Ausschalten des Bildschirms weiterlaufen lassen** `[aktivieren]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Ältere Huawei-Geräte

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

### Nokia 3.1 und 5.1

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

### Andere Nokia-Modelle

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

Weitere Lösungen:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### Locking the app

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

### Batterieoptimierung

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### App Auto-Launch

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Enhanced / Advanced optimization

Für OnePlus 6 und höher:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

Für OnePlus unter 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Recent apps clearing behaviour

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina Modus *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

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
