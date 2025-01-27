---
title: Comment empêcher le système de désactiver AdGuard
sidebar_position: 9
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

In the **Lock apps** screen, set the toggle switch for the AdGuard app to On.

![Paramètres Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

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

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Exécutez les commandes suivantes sur votre ordinateur :

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Si AdGuard continue à être arrêté, essayez également d'exécuter

`adb shell pm stopservice hwPfwService`

### Appareils sous EMUI 6+ (et certains appareils sous EMUI 5)

- **Paramètres du téléphone** → **Paramètres avancés** → **Gestionnaire de batterie** → **Plan d'alimentation** défini sur **Performance**;
- **Paramètres du téléphone** → **Paramètres avancés** → **Gestionnaire de batterie** → **Applications protégées** — définir AdGuard comme **Protégé**;
- **Paramètres du téléphone** → **Applications** → **Votre application** → **Batterie** → **Prompt à forte consommation d'énergie** `[décocher]` et **Continuer à fonctionner après l'extinction de l'écran** `[cocher]`;
- **Paramètres du téléphone** → **Applications** → **Paramètres avancés (En bas)** → **Ignorer les optimisations** → Appuyez sur Autoriser → **Toutes les applications** → Trouvez AdGuard dans la liste et définissez sur **Autoriser**.

#### Huawei P9 Plus

Ouvrir les paramètres de l'appareil → **Applications** → **Paramètres** → **Accès spécial** → choisir **Ignorer l'optimisation de la batterie** → sélectionner **Autoriser** pour AdGuard.

### Huawei P20, Huawei Honor 9 Lite et Huawei Mate 9 Pro

Ouvrez les paramètres de l'appareil → **Batterie** → **Lancement de l'application** → définissez AdGuard sur **Gérer manuellement** et assurez-vous que tout est activé.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Paramètres du téléphone** → **Batterie** → **Lancement de l'application** → réglez AdGuard sur **Gérer manuellement** et assurez-vous que tout est activé. Pour des processus d'arrière-plan fiables, vous devrez peut-être désinstaller PowerGenie comme décrit ci-dessus.

### Anciens appareils Huawei

Les anciens appareils Huawei sont les plus faciles à configurer, il suffit d'effectuer deux étapes simples pour verrouiller AdGuard en arrière-plan pour qu'il ne soit pas terminé par le mode d'économie de batterie ou le processus de fermeture des applications en arrière-plan.

- Appuyez sur le bouton **Tâches récentes** :

    ![Applications récentes Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Appuyez sur l'icône de verrouillage :

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

De plus, pour configurer plus efficacement le travail de fond d'AdGuard, vous devez ouvrir les paramètres de l'appareil et faire ce qui suit :

- Accédez aux **Paramètres** → ouvrez le **Gestionnaire de batterie** → définissez le **Plan d’alimentation** sur **Performances**;
- Ensuite, choisissez les **Applications protégées** dans le **Gestionnaire de batterie** et vérifiez si AdGuard est protégé ;
- Allez dans **Applications** dans les paramètres principaux et appuyez sur AdGuard là → choisissez **Batterie** → activez **Prompt à forte consommation d'énergie** et **Continuer à fonctionner lorsque l'écran est éteint**;
- Ensuite, dans la section **Applications**, ouvrez les **Paramètres** (en bas) → **Accès spécial** → choisissez **Ignorer l'optimisation de la batterie** → appuyez sur **Autoriser** → **Toutes les applications** → trouvez AdGuard dans la liste et définissez-le sur **Refuser**.

## Meizu

Meizu a presque la même approche aux limitations des processus en arrière-plan que Huawei et Xiaomi. Vous pouvez donc éviter de désactiver le travail en arrière-plan d'AdGuard et de toute autre application en ajustant les paramètres suivants :

- Allez dans les **Paramètres avancés** → ouvrez **Gestionnaire de batterie** → définissez le **Plan d'alimentation** sur **Performances**;
- Ensuite, choisissez les **Applications protégées** dans le **Gestionnaire de batterie** et vérifiez si AdGuard est protégé ;
- Allez dans la section **Applications** et appuyez sur AdGuard là → choisissez **Batterie** → activez **Prompt à forte consommation d'énergie** et **Continuer à fonctionner lorsque l'écran est éteint**.

## Nokia

Dans les appareils Nokia fonctionnant sous Android 9+ le **Mode économie d'énergie Evenwell** est désactivé, cette fonctionnalité était coupable de l'arrêt des processus en arrière-plan. Si AdGuard est toujours bloqué sur votre téléphone Nokia, consultez les [anciennes instructions](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Désinstallez le paquet **com.evenwell.emm** via les commandes ADB suivantes :

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 et 5.1

Sur ces appareils, il y a un gestionnaire de tâches appelé **DuraSpeed** qui termine toutes les applications en arrière-plan. Il ne peut pas être désinstallé ou désactivé par des moyens habituels. Ces actions nécessitent ADB, et même alors, s'il est désactivé, DuraSpeed se réactivera au redémarrage. Vous avez besoin d'une application de gestion des tâches comme [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) pour la désactivation automatique de DuraSpeed.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Grant MacroDroid (or your choice of automation app) the ability to write to the global settings store by entering this command:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Create a task triggered at **Device Boot** that performs the following:

    - Paramètre système : type **Global**, nom `setting.duraspeed.enabled`, valeur **-1**
    - Paramètre système : type **System**, nom `setting.duraspeed.enabled`, valeur **-1**
    - Paramètres du système : type **Global**, nom `setting.duraspeed.enabled`, valeur **0**
    - Paramètre système : type **System**, nom `setting.duraspeed.enabled`, valeur **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Vous avez besoin de paramètres de deux types : **Global** et **System**. La capture d'écran montre uniquement Global à titre d'exemple.


:::

### Autres modèles Nokia

- Accédez aux **Réglages** du téléphone → **Applications** → **Voir toutes les applications**.

- Appuyez sur le menu dans le coin supérieur droit → **Afficher le système**.

Trouvez **l'application économiseur d'énergie** dans la liste, sélectionnez-la et appuyez sur **Forcer la fermeture**. Elle restera arrêtée pendant un certain temps mais redémarrera à un moment donné.

À partir de maintenant, AdGuard devrait fonctionner normalement et utiliser les optimisations de batterie standard d'Android jusqu'à ce que l'Économie d'énergie redémarre.

Une solution alternative et plus permanente pour des utilisateurs plus technophiles :

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Enable [Developer options](https://developer.android.com/studio/debug/dev-options.html);

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Désinstallez le paquet **com.evenwell.powersaving.g3** via les commandes ADB suivantes :

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

### Optimisation de la batterie

- Ouvrez les paramètres de l'appareil → **Batterie** → **Optimisation de la batterie** → passez à la liste de **Toutes les applications** (menu supérieur) → choisissez AdGuard → activez **Ne pas optimiser**

- Ouvrez les paramètres de l'appareil → **Batterie** → **Optimisation de la batterie** → (⁝) menu à trois points → **Optimisation avancée** → Désactivez l'optimisation approfondie

### Lancement automatique des app

L'app Auto-Launch, chargée du lancement automatique des applications (sur certains téléphones OnePlus) empêche essentiellement les applications de fonctionner en arrière-plan. Please disable it for AdGuard.

### Optimisation améliorée/avancée

Pour OnePlus 6 et supérieur :

- Ouvrez les **Paramètres système** → **Batterie** → **Optimisation de la batterie** → (⁝) menu à trois points → **Optimisation avancée**
- Désactivez **l'optimisation approfondie** / **la batterie adaptative**
- Désactivez l'**Optimisation du mode veille**. OnePlus essaie d'apprendre quand vous dormez habituellement et, à ces moments-là, il désactivera les connexions réseau du téléphone. Ce paramètre empêchera la livraison des notifications push.

Pour les OnePlus inférieurs à 6 :

- Désactivez les **Paramètres système** → **Batterie** → **Optimisation de la batterie** → (⁝) menu à trois points → **Optimisation améliorée**.

### Suppression des applications récentes

Normalement, lorsque vous swipez une application, elle ne s'arrête pas. Cependant, sur OnePlus, cela peut fonctionner différemment. Le gestionnaire de suppression d'applications récentes peut être configuré de manière que le fait de swiper l'application pour la fermer l'arrêtera. Pour revenir au mode "normal" :

Allez aux **Paramètres** → **Paramètres avancés** → **Gestion des applications récentes** → Passez à la **Suppression normale**

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
