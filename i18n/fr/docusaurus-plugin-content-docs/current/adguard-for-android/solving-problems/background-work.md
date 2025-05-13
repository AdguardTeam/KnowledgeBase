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

Sur de nombreux appareils Samsung, toute application inutilisée pendant 3 jours ne pourra pas démarrer en arrière-plan. Il est conseillé de désactiver les options **Batterie adaptative** et **Mise en veille des applications dans la** mesure du possible pour éviter cela. Veuillez noter qu'après une mise à jour de l'application ou du système d'exploitation, ces paramètres reviennent souvent à leurs valeurs par défaut et doivent être à nouveau désactivés.

### Android 11+

Sur Android 11, Samsung empêchera par défaut les applications (y compris AdGuard) de fonctionner en arrière-plan, à moins que vous ne les excluiez des optimisations de la batterie. Pour s'assurer qu'AdGuard ne sera pas tué en arrière-plan :

1. Verrouillez AdGuard dans Récents

    - Ouvrez les **Applications récentes**.
    - Trouvez AdGuard.
    - Appuyez longuement sur l'icône de l'application AdGuard.

1. Pour assurer le bon fonctionnement d'AdGuard :

    Allez dans **Paramètres** → **Apps** → **AdGuard** → **Batterie** → **Optimiser l'utilisation de la batterie**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Dans le menu déroulant, sélectionnez **Tous.**. Recherchez ensuite AdGuard dans la liste et définissez son état sur **Ne pas optimiser** (sur certains modèles, il peut y avoir un commutateur que vous devez désactiver).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Sur certains appareils, le paramètre concerné peut être nommé différemment et se trouver à d'autres endroits. Parmi les chemins possibles, on trouve :

    **Paramètres** → **Apps** → (⁝) menu → **Accès spécial** → **Optimiser l'utilisation de la batterie** → Trouvez AdGuard dans la liste et décochez-le

1. Désactiver l'optimisation automatique. Pour ce faire :

    Ouvrez le menu **Batterie** → (⁝) → Choisissez **Automatisation** → Désactivez tous les paramètres

    Là encore, le chemin exact peut varier, par exemple sur certains appareils, vous devez aller sur :

    Téléphone **Paramètres** → **Entretien de l'appareil** → Appuyez sur le menu à 3 points (⁝) → **Paramètres Avancés** → Désactivez l'**Optimisation automatique** et les **Paramètres d'optimisation**

1. Si votre téléphone en est équipé, désactivez la Batterie adaptative :

    Ouvrez les **Paramètres** → **Batterie** → **Plus de paramètres de batterie** → Basculez le commutateur de **Batterie adaptative**

1. Désactivez les applications de veille (le nom exact de ce paramètre et le chemin d'accès peuvent varier en fonction de l'appareil) :

    Ouvrez les **Paramètres** → **Batterie** → **Limites d'utilisation en arrière-plan** → Désactivez **Mettre les applications inutilisées en veille**

### Android 9 & 10

- Accédez aux **Paramètres du téléphone** → **Entretien de l'appareil** → Appuyez sur l'élément **Batterie** → (⁝) **Menu à 3 points** → **Paramètres** et décochez **Mettre en veille les applications inutilisées** et **Désactiver automatiquement les applications inutilisées**.

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

- Appuyez sur le bouton **Tâches récentes** , appuyez sur l'icône **Paramètres supplémentaires** . Elle devrait ressembler à ceci :

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

[Forum XDA](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Ce qu'il faut faire** :

Ce n'est pas confirmé, mais il pourrait être possible de simplement désactiver PowerGenie dans les **Paramètres du téléphone** → **Applications**. Si ce paramètre est présent dans les réglages de votre appareil, vous pouvez sauter les étapes suivantes. Cependant, il devra être réappliqué à chaque redémarrage de votre appareil. Si ce réglage est absent, suivez ces instructions :

1. [Installez ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sur votre ordinateur ;

1. Connectez votre téléphone avec un câble de données ;

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

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

1. [Installez ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sur votre ordinateur ;

1. Connectez votre téléphone avec un câble de données ;

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Désinstallez le paquet **com.evenwell.emm** via les commandes ADB suivantes :

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 et 5.1

Sur ces appareils, il y a un gestionnaire de tâches appelé **DuraSpeed** qui termine toutes les applications en arrière-plan. Il ne peut pas être désinstallé ou désactivé par des moyens habituels. Ces actions nécessitent ADB, et même alors, s'il est désactivé, DuraSpeed se réactivera au redémarrage. Vous avez besoin d'une application de gestion des tâches comme [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) pour la désactivation automatique de DuraSpeed.

1. [Installez ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sur votre ordinateur ;

1. Connectez votre téléphone avec un câble de données ;

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html) ;

1. Activez le **débogage USB ** dans les options du développeur sur votre téléphone ;

1. Autorisez à MacroDroid (ou toute autre application d'automatisation choisie) la possibilité d'écrire dans le stockage de paramètres globaux en saisissant cette commande :

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Créez une tâche déclenchée au **Démarrage de l'appareil** qui exécute les opérations suivantes :

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

1. [Installez ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sur votre ordinateur ;

1. Connectez votre téléphone avec un câble de données ;

1. Activez les [options pour développeurs](https://developer.android.com/studio/debug/dev-options.html);

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

Sur certains téléphones OnePlus, il existe également une fonction appelée Lancement automatique d'application et Optimisation approfondie qui empêche essentiellement les applications de fonctionner en arrière-plan. Veuillez désactiver cela pour AdGuard.

:::

### Optimisation de la batterie

- Ouvrez les paramètres de l'appareil → **Batterie** → **Optimisation de la batterie** → passez à la liste de **Toutes les applications** (menu supérieur) → choisissez AdGuard → activez **Ne pas optimiser**

- Ouvrez les paramètres de l'appareil → **Batterie** → **Optimisation de la batterie** → (⁝) menu à trois points → **Optimisation avancée** → Désactivez l'optimisation approfondie

### Lancement automatique des app

L'app Auto-Launch, chargée du lancement automatique des applications (sur certains téléphones OnePlus) empêche essentiellement les applications de fonctionner en arrière-plan. Veuillez désactiver cela pour AdGuard.

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

Sony était le premier développeur de système d'exploitation mobile à introduire une optimisation des processus d'arrière-plan non standard. Il s'appelle **Mode Stamina** et il interrompt instantanément tous les processus d'arrière-plan s'il est activé. Pour résoudre ce problème :

Allez dans **Paramètres** → **Batterie** → Désactivez le **Mode STAMINA**

![Mode Stamina de Sony *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

Sur Android 11+, sur le même écran que le mode STAMINA, il y a un paramètre appelé **Batterie adaptative**, vous devez également le désactiver.

Vous devez également exclure AdGuard de la fonction d'économie d'énergie dans les paramétrages :

**Paramètres système** → **Applications & Notifications** → **Paramétres avancés** → **Accès spécial aux applications** → **Fonction d'économie d'énergie** → Définir AdGuard comme une des **Exclusions**

## Wiko

Les appareils Wiko posent des problèmes en ce qui concerne les optimisations des processus d'arrière-plan non standards. Pour permettre à AdGuard de fonctionner en arrière-plan, procédez comme suit :

- Accédez à l'**Assistant téléphonique** → **Batterie** → éteindre **Mode éco**
- Revenez en arrière et allez à **Mode manuel**
- Appuyez sur l'icône **Engrenage** en haut à droite → **Liste blanche des applications en arrière-plan** → Sélectionnez **AdGuard**

## Appareils Android Pixel/Nexus/Nubia/Essential

Le système d'exploitation Android n'entre normalement pas en conflit avec les applications fonctionnant en arrière-plan, mais si vous rencontrez des problèmes, vous devrez activer le mode **VPN toujours actif** .

- Allez dans **Paramètres** → **Réseau et Internet**

    ![Réseau de stockage *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Appuyez sur **VPN** et choisissez **AdGuard**

    ![Réseau de stockage *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Activez le mode **VPN toujours actif**

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

Sur les appareils exécutant Realme UI 4,0, il existe trois configurations clés pour garantir qu'AdGuard fonctionne correctement en arrière-plan.

1. Configurez l'application AdGuard:

    - Appuyez longuement sur l'icône AdGuard
    - Dans le menu qui apparaît, sélectionnez **Infos de l'application**
    - Accédez à l'**Utilisation de la batterie** et activez toutes les options :
        - Autoriser les opérations en arrière-plan
        - Autoriser l'activité au premier plan
        - Autoriser le lancement automatique
    - Dans la section **Infos de l'application**, faites défiler vers le bas et désactivez l'option **Mettre en pause l'activité de l'application si non utilisée**

    ![VPN toujours actif *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Configurez la batterie :

    - Accédez à **Paramètres → Batterie → Plus de paramètres → Optimiser l'utilisation de la batterie**
    - Recherchez AdGuard dans la liste et activez **Ne pas optimiser**
    - Dans les **Autres paramètres**, trouvez la section **App Quick Freeze** et désactivez-la pour AdGuard

    ![VPN toujours actif *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Activez *VPN toujours actif* pour AdGuard :

    - Allez dans les **Paramètres → Connexion & Partage → VPN**
    - Recherchez **AdGuard** et activez l'option **VPN toujours actif.**

    ![VPN toujours actif *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
