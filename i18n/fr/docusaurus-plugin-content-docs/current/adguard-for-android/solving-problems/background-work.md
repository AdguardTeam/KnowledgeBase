---
title: How to protect AdGuard from being disabled by the system
sidebar_position: 9
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

In some cases, apps won't stay in the background (“alive” or in a sleep mode) due to the Android OS optimization function, or the so-called “battery save mode” — this function can kill background apps. It may be inconvenient to relaunch them each time they are getting closed. To avoid the background app termination, you need to follow the steps we described separately for each manufacturer (version) of Android OS. Veuillez noter que les instructions des différents fabricants sont généralement très similaires.

## Asus

Information on Asus devices is still far from being exhaustive so there may be more issues than listed here. We're going to update this part of the article when we know more.

The main source of potential problems with background work on Asus devices is associated with the optimization app called Power Master. It is pre-installed and has pretty aggressive default settings, e.g. to block apps from starting and to kill background tasks when your screen turns off. To make sure apps background processing works, set up the following:

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

C'est fait ! You have successfully set up AdGuard to work in the background.

### MIUI 12.0.8

To let your AdGuard app run successfully in the background, do the following:

In **Settings** → **Apps** → **Manage apps**, scroll down to locate **AdGuard** and set **Autostart** to “On”.

![Xiaomi Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scroll down to **Battery saver**, tap it, and set to “No restrictions”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Other Permissions**, set all possible permissions to “On”

Run the **Security** app.

Tap on the **Gear** icon at the top-right corner of the screen.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tap **Boost speed** in Feature Settings.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tap **Lock apps**.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

In the **Lock apps** screen, set the toggle switch for the AdGuard app to On.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

That’s all! You’ve successfully pinned the AdGuard app.

### MIUI 12

Go to **Settings** → **Apps** → **Manage apps** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Set Autostart to “On”
- Set all possible permissions in Other Permissions to “On”
- Set Battery saver to **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Now launch the active apps manager by swiping up from the bottom of the screen and look for the AdGuard app.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tap and hold it until a menu pops up. Select a lock icon.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

The lock icon should appear above the app window.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

To let your app run successfully in the background, configure its settings as follows:

- Set Autostart to “On”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Settings** → **Battery & performance** → switch-off **Battery saver** function

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Then open **App battery saver** settings → **AdGuard** → **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### All models

The following steps should be performed on any Xiaomi device that keeps killing the AdGuard app:

#### Power management

Please enable:

- **Settings** → **Advanced Settings** → **Battery manager** → set **Power plan** to **Performance**
- **Device Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — AdGuard needs to be **Protected**
- **Device Settings** → **Apps** → **AdGuard** → **Battery** → **Power-intensive prompt** and **Keep running after screen off**
- **Settings** → **Additional Settings** → **Battery & Performance** → **Manage apps’ battery usage** and here:

1. Switch Power Saving Modes to “Off”
1. Choose the following options: **Saving Power in The Background** → **Choose apps** → **AdGuard** → **Background Settings** → **No restrictions**

#### App battery saver

Set **Security** → **Battery** → **App Battery Saver** → **AdGuard** to **No restriction**

#### App pinning

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap the **Recent tasks** button and swipe AdGuard down to make options *visible* (as shown on the screenshot):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tap on the **lock** icon. This will stop Xiaomi from closing AdGuard automatically. It should look like this:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Go to **Battery**

- Select the **battery saver** app

- Find and select **AdGuard**

- Set up the following **Background settings**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Go to **Permissions**

- Select **Autostart**

- Make sure that autostart function is enabled for AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Sur de nombreux appareils Samsung, toute application inutilisée pendant 3 jours ne pourra pas démarrer en arrière-plan. You should turn off **Adaptive battery** and **Put apps to sleep** options wherever possible to prevent that. Veuillez noter qu'après une mise à jour de l'application ou du système d'exploitation, ces paramètres reviennent souvent à leurs valeurs par défaut et doivent être à nouveau désactivés.

### Android 11+

Sur Android 11, Samsung empêchera par défaut les applications (y compris AdGuard) de fonctionner en arrière-plan, à moins que vous ne les excluiez des optimisations de la batterie. To make sure AdGuard will not get killed in the background:

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

1. Disable automatic optimization. To do so:

    Open **Battery** → (⁝) menu → Choose **Automation** → Toggle off all of the settings there

    Again, the exact path may differ, for example on some devices you should go to:

    Phone **Settings** → **Device care** → Tap the (⁝) 3-dot menu → **Advanced** → Disable **Auto optimization** and **Optimize settings**

1. If your phone has it, disable Adaptive battery:

    Open phone **Settings** → **Battery** → **More battery settings** → Toggle off **Adaptive battery**

1. Disable Sleeping apps (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** → Disable **Put unused apps to sleep**

### Android 9 & 10

- Go to **Phone settings** → **Device care** → Tap on the **Battery** item → (⁝) **3-dot menu** → **Settings** and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- Vérifiez que dans les **Paramètres du téléphone** → **Applications** → **Mettre en veille comme Android** → **Batterie** → la **Restriction d'arrière-plan** est définie sur **L'application peut utiliser la batterie en arrière-plan** pour AdGuard.

- Supprimez AdGuard des applications en veille. Pour cela :

    1. Accédez aux **Paramètres du téléphone** → **Entretien de l'appareil**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Appuyez sur **Batterie**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Touchez le **menu à 3 points** → **Paramètres**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Appuyez sur **Applications en veille**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Réveillez** AdGuard en utilisant l'icône de la corbeille

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Anciens appareils Samsung

Pour les premiers appareils Samsung, il n'est pas vraiment nécessaire de configurer le fonctionnement en arrière-plan, mais si dans votre cas l'application AdGuard se ferme ou disparaît des tâches récentes après un certain temps, procédez comme suit :

- Appuyez sur le bouton **Tâches récentes** , appuyez sur l'icône **Paramètres supplémentaires** . It should look like this:

 ![Paramètres Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Appuyez sur **Verrouiller les applications** :

 ![Paramètres Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Appuyez sur l'icône de verrouillage

 ![Paramètres Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei et leur personnalisation d'Android **EMUI** sont parmi les plus problématiques sur le marché en ce qui concerne les limitations non standard des processus d'arrière-plan. Avec les paramètres par défaut, pratiquement toutes les applications qui fonctionnent en arrière-plan rencontreront des problèmes et finiront par s'arrêter.

### Lancement de l'application sur certains appareils EMUI 8, 9 et 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

Cette fonctionnalité peut être ou ne pas être disponible pour tous les appareils ou peut être étiquetée différemment.

1. Allez aux **Réglages** du téléphone → **Batterie** → **Lancement de l'application**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Désactivez **Gérer tout automatiquement**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Réglez AdGuard sur **Gérer manuellement** et activez tous les bascules.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Désactivez le **Gestionnaire de démarrage** qui empêche les applications de s'exécuter automatiquement après le démarrage du téléphone.

    Accédez aux **Paramètres** → **Tout** → **Gestionnaire de démarrage** → Désactivez pour AdGuard

    Pour des processus d'arrière-plan fiables, vous devrez peut-être désinstaller **PowerGenie** comme indiqué ci-dessous.

### Appareils sous EMUI 9+ et PowerGenie

:::note

Sur les téléphones équipés d'EMUI 9+ (Android P+), il existe une application tueuse de tâches appelée PowerGenie qui force à quitter toutes les applications non listées par Huawei et ne donne aux utilisateurs aucune option de configuration. Voyez ci-dessous comment le désinstaller.

:::

Huawei est extrêmement inventif pour interrompre les applications sur ses appareils. En plus de toutes les mesures de gestion de l'énergie non standards décrites ci-dessous, ils ont introduit une application de gestion des tâches intégrée directement dans EMUI 9 sous Android Pie.

L'app s'appelle **PowerGenie** et tue toutes les applications qui ne figurent pas sur sa liste blanche. Vous ne pouvez pas ajouter d'applications personnalisées à leur liste blanche prédéfinie. Cela signifie qu'il n'y a pas d'autre moyen d'atteindre la fonctionnalité prévue de l'application sur Huawei que de désinstaller PowerGenie.

Malheureusement, c'est une application système qui ne peut être complètement désinstallée qu'à l'aide d'ADB (Android Debug Bridge).

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

### Early Huawei

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

Dans les appareils Nokia fonctionnant sous Android 9+ le **Mode économie d'énergie Evenwell** est désactivé, cette fonctionnalité était coupable de l'arrêt des processus en arrière-plan. Si AdGuard est toujours bloqué sur votre téléphone Nokia, consultez les [anciennes instructions](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Uninstall the **com.evenwell.emm** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 et 5.1

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

### Autres modèles Nokia

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

Parfois, les services d'arrière-plan sont arrêtés (y compris les services d'accessibilité, qui doivent ensuite être réactivés) lorsque vous éteignez l'écran. En ce moment, voici la solution de contournement pour cela :

Allez dans le **Centre de sécurité** → appuyez sur **Autorisations de confidentialité** → **Gestionnaire de démarrage** et autorisez l'application AdGuard à s'exécuter en arrière-plan.

Autres solutions :

- Épinglez AdGuard sur l'écran des applications récentes
- Activez AdGuard dans la liste des applications à l'intérieur du "gestionnaire de démarrage" et de la "liste des applications flottantes" de l'application de sécurité (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Désactivez les optimisations de la batterie

## OnePlus

Les appareils équipés d'OxygenOS sont les plus problématiques, avec son nettoyage de cache spécifique au système d'exploitation et sa RAM libre, y compris l'optimisation du système d'exploitation. De plus, OxygenOS peut interrompre le fonctionnement d'AdGuard si vous ne l'utilisez pas pendant un certain temps. Pour éviter ces conséquences indésirables, procédez comme suit.

### Le verrouillage de l’application

- Accédez aux **Paramètres**

- **Batterie** → **Optimisation de la batterie**

- Trouvez AdGuard

- Appuyez dessus et sélectionnez l'option **Ne pas optimiser**

- Appuyez sur **Terminé** pour enregistrer

- Ouvrez le menu des applications récentes (comme indiqué sur cette capture d’écran):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Verrouillez l'application AdGuard :

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

Sur certains téléphones OnePlus, il existe également une fonction appelée Lancement automatique d'application et Optimisation approfondie qui empêche essentiellement les applications de fonctionner en arrière-plan. Please disable it for AdGuard.

:::

### Battery optimization

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### App Auto-Launch

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Enhanced / Advanced optimization

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Recent apps clearing behaviour

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
