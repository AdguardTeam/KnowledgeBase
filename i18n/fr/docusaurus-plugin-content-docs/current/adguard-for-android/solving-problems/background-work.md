---
title: Comment empêcher le système de désactiver AdGuard
sidebar_position: 8
---

:::info

Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Dans certains cas, les applications ne restent pas en arrière-plan ("actives" ou en mode veille) en raison de la fonction d'optimisation du système d'exploitation Android, ou du soi-disant "mode d'économie de batterie" — cette fonction peut tuer les applications en arrière-plan. Il peut être peu pratique de les relancer à chaque fois qu'elles sont arrêtées. Pour éviter l'arrêt de l'application en arrière-plan, vous devez suivre les étapes décrites séparément pour chaque fabricant (version) du système d'exploitation Android. Veuillez noter que les instructions des différents fabricants sont généralement très similaires.

## Asus

Les informations sur les appareils Asus sont encore loin d'être exhaustives et il est donc possible que d'autres problèmes se posent. Nous mettrons à jour cette partie de l'article lorsque nous en saurons plus.

La principale source de problèmes potentiels liés au travail en arrière-plan sur les appareils Asus est associée à l'application d'optimisation appelée Power Master. Elle est préinstallée et possède des paramètres par défaut assez agressifs, par exemple pour bloquer le démarrage des applications et pour tuer les tâches d'arrière-plan lorsque l'écran s'éteint. Pour vous assurer que le traitement en arrière-plan des applications fonctionne, configurez les éléments suivants :

1. Allez dans **Mobile Manager** → **PowerMaster** → **Paramètres** (ou **Options d'économie de la batterie**) → Décochez la case **Nettoyer en cas de suspension.**

1. Allez à **Mobile Manager** → **PowerMaster** → **Paramètres** (ou **Options d'économie de batterie**) → Décochez **Interdire automatiquement aux applications de se lancer automatiquement**

Par ailleurs, au lieu de décocher complètement l'option **Autoriser les applications à démarrer automatiquement**, vous pouvez aller dans **Réglages** → **Options d'économie de la batterie** → **Gestionnaire de démarrage automatique** → **AdGuard** et la décocher.

## Xiaomi

Les appareils Xiaomi (et surtout MIUI) sont parmi les plus gênants en matière de fonctionnement en arrière-plan. Ils sont connus pour limiter les processus d’arrière-plan et disposent d’autorisations non standard, avec un manque de documentation appropriée pour couronner le tout. Parfois, les applications ne fonctionnent tout simplement pas correctement sur les téléphones Xiaomi et il n'y a pas grand-chose à faire à ce sujet. Vous trouverez ci-dessous quelques actions que vous pouvez tenter d'effectuer si vous rencontrez des problèmes concernant le fonctionnement en arrière-plan d'AdGuard sur différents appareils Xiaomi.

### MIUI 13+ et HyperOS

Selon les versions MIUI et HyperOS, il existe deux façons de modifier les paramètres d'optimisation de la batterie sur votre téléphone et de bloquer les publicités plus efficacement.

Option 1

1. Allez dans **Paramètres** → **Applications** → **Permissions** → **Démarrage automatique en arrière-plan** et autorisez AdGuard à s'exécuter en arrière-plan

1. Retournez à **Paramètres** → **Applications** → **Gérer les applications** → **AdGuard** et décochez la case **Suspendre l'activité de l'application si elle n'est pas utilisée**

1. Accédez à **Économiseur de batterie** et appuyez sur **Aucune restriction**

Option 2

1. Accédez à **Paramètres** → **Applications** → **Gérer les applications** → **AdGuard** et activez **Démarrage automatique**

1. Accédez à **Économiseur de batterie** et appuyez sur **Aucune restriction**

C'est fait ! Vous avez configuré AdGuard avec succès pour qu'il fonctionne en arrière-plan.

### MIUI 12.0.8

Pour permettre à votre application AdGuard de fonctionner correctement en arrière-plan, procédez comme suit :

Dans **Paramètres** → **Applications** → **Gérer les applications**, faites défiler l'écran jusqu'à **AdGuard** et réglez le **démarrage automatique** sur "Activé".

![Paramètres Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Faites défiler vers le bas jusqu'à **Économiseur de batterie**, appuyez dessus et réglez sur "Aucune restriction".

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

Dans la rubrique **Autres autorisations**, réglez toutes les autorisations possibles sur "Activé"

Lancez l'application **Sécurité**.

Tapez sur l'icône de l'**engrenage** dans le coin supérieur droit de l'écran.

![Paramètres Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Appuyez sur **Augmenter la vitesse** dans les paramètres des fonctionnalités.

![Paramètres Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Appuyez sur **Verrouiller les applications.**.

![Paramètres Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Dans l'écran **Verrouiller les applications**, mettez l'interrupteur de l'application AdGuard sur Activé.

![Paramètres Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

C'est tout ! Vous avez épinglé l'application AdGuard.

### MIUI 12

Allez dans **Paramètres** → **Apps** → **Gérer les apps** → **AdGuard.**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Régler le démarrage automatique sur "On"
- Définir toutes les autorisations possibles dans Autres autorisations sur "Activé"
- Régler l'économiseur de batterie sur **Aucune restriction**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Lancez maintenant le gestionnaire d’applications actives en faisant glisser votre doigt vers le haut depuis le bas de l’écran et recherchez l’application AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tapez dessus et maintenez-la enfoncée jusqu'à ce qu'un menu s'affiche. Sélectionnez l'icône de verrouillage.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

L'icône de verrouillage doit apparaître au-dessus de la fenêtre de l'application.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Pour que votre application fonctionne correctement en arrière-plan, configurez ses paramètres comme suit :

- Réglez le démarrage automatique sur "On"

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Réglages** → **Performances de la batterie & ** → Désactiver la fonction d'**économie de la batterie**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Ouvrez ensuite les paramètres de **l'économiseur de batterie de l'application** → **AdGuard** → **Aucune restriction**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Tous les modèles

Les étapes suivantes doivent être effectuées sur tout appareil Xiaomi qui continue à tuer l'application AdGuard :

#### Gestion de l'alimentation

Veuillez activer :

- **Paramètres** → **Paramètres avancés** → **Gestionnaire de batterie** → Régler **le plan d'alimentation** sur **Performance**
- **Paramètres de l'appareil** → **Paramètres avancés** → **Gestionnaire de batterie** → **Applications protégées** - AdGuard doit être **protégé**
- **Paramètres de l'appareil** → **Apps** → **AdGuard** → **Batterie** → **Invite gourmande en énergie** et **Continuer à fonctionner après l'extinction de l'écran**
- **Paramètres** → **Paramètres supplémentaires** → **Batterie & Performance** → **Gérer l'utilisation de la batterie par les applications** et ici :

1. Désactivez les modes d'économie d'énergie
1. Choisissez les options suivantes : **Économie d'énergie en arrière-plan** → **Choisir des applications** → **AdGuard** → **Paramètres d'arrière-plan** → **Aucune restriction**

#### Économiseur de batterie de l'application

Définissez la **Sécurité** → **Batterie** → **Économiseur de batterie d'application** → **AdGuard** à **Aucune restriction**

#### Épinglage d'application

Pour configurer le travail en arrière-plan d'AdGuard pour les appareils Xiaomi, vous devez prêter attention à Batterie et Permissions.

- Appuyez sur le bouton **Tâches récentes** et faites glisser AdGuard vers le bas pour rendre les options *visibles* (comme indiqué sur la capture d'écran) :

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tapez sur l'icône de **verrouillage**. Cela empêchera Xiaomi de fermer AdGuard automatiquement. Elle devrait ressembler à ceci :

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Accédez à la **Batterie**

- Sélectionnez l'application **économiseur de batterie**

- Recherchez et sélectionnez **AdGuard**

- Définissez les **paramètres d'arrière-plan** suivants :

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Accédez aux **Autorisations**

- Sélectionnez **Démarrage automatique**

- Assurez-vous que la fonction de démarrage automatique est activée pour AdGuard :

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

### Android 9 & 10

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

### Anciens appareils Samsung

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Elle devrait ressembler à ceci :

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### Lancement de l'application sur certains appareils EMUI 8, 9 et 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    Accédez aux **Paramètres** → **Tout** → **Gestionnaire de démarrage** → Désactivez pour AdGuard

    Pour des processus d'arrière-plan fiables, vous devrez peut-être désinstaller **PowerGenie** comme indiqué ci-dessous.

### Appareils sous EMUI 9+ et PowerGenie

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

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

1. Enable **USB debugging** within Developer options on your phone.

1. Exécutez les commandes suivantes sur votre ordinateur :

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### Appareils sous EMUI 6+ (et certains appareils sous EMUI 5)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite et Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Anciens appareils Huawei

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

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

1. Enable **USB debugging** within Developer options on your phone;

1. Désinstallez le paquet **com.evenwell.emm** via les commandes ADB suivantes :

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 et 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

1. Enable **USB debugging** within Developer options on your phone;

1. Autorisez à MacroDroid (ou toute autre application d'automatisation choisie) la possibilité d'écrire dans le stockage de paramètres globaux en saisissant cette commande :

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Créez une tâche déclenchée au **Démarrage de l'appareil** qui exécute les opérations suivantes :

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

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Désinstallez le paquet **com.evenwell.powersaving.g3** via les commandes ADB suivantes :

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

### Le verrouillage de l’application

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

### Optimisation de la batterie

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### Lancement automatique des app

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Optimisation améliorée/avancée

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Suppression des applications récentes

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

## Appareils Android Pixel/Nexus/Nubia/Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. Configurez l'application AdGuard:

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Configurez la batterie :

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Activez *VPN toujours actif* pour AdGuard :

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

On Motorola devices, there are four key configurations to ensure that AdGuard works properly in the background.

1. Allow background usage:

   - Stop AdGuard protection and close the AdGuard app
   - Go to **Settings → Apps → App battery usage** and find AdGuard
   - Enable **Allow background usage** or select **Unrestricted**, depending on your Android version

1. Remove background activity restrictions:

   - Go to **Settings**
   - Scroll down and tap **Apps & notifications**
   - Find **AdGuard** and open **Advanced → Battery**
   - Tap **Background restriction** or **Background limits**
   - If it says **Background activity restricted**, tap it and then tap **Remove**

1. Manage background apps:

   - Go to **Settings → Battery → Background app use**
   - Enable the **Manage background apps** option
   - In the resulting menu, select the **Apps** tab
   - Find **AdGuard** in the list and tap it
   - In the **Optimize battery use** dialog, select **Always allow**

    ![Always allow *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/motorolla-background-app-use.png)

1. Disable Adaptive Battery:

   - Go to **Settings → Battery**
   - Turn off the **Adaptive Battery** option

## ZTE

ZTE devices functioning under the MyOS operating system have an aggressive approach to background processes. Follow these steps to prevent AdGuard from being closed automatically by AI control:

- Go to **Settings → Battery → App Management**
- Turn off **AI Control**
- Select **Manual Management**
- Find **AdGuard** in the list and set **Background Work** to **Allow**
