---
title: Comment déboguer les règles dans AdGuard pour Chrome MV3
sidebar_position: 2
---

Dans [AdGuard pour Chrome MV3](/adguard-browser-extension/mv3-version), le journal de filtrage ne montre que les règles approximatives qui ont été appliquées, que nous appelons "règles supposées". Cela est dû au fait que le navigateur ne fournit pas de détails sur les règles déclaratives spécifiques utilisées, à moins que l'extension ne soit dans un format "décompressé". Pour obtenir des informations précises, vous devrez installer vous-même la version décompressée de l'extension dans votre navigateur.

Ces instructions sont également destinées aux cas problématiques où vous souhaitez modifier de manière statique les règles fournies avec l'extension. Dans la plupart des cas, l’utilisation de _règles utilisateur_ dans l’extension devrait être suffisante.

## Prérequis

1. **Git :** [Installer Git](https://git-scm.com/book/fr/v2/Mise-en-place-de-l-installation-de-Git)

2. **Node :** [Installer Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn :** [Installer Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Comment cloner une extension

1. Clonez le dépôt :

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Accédez au répertoire :

   ```bash
   cd AdguardBrowserExtension
   ```

3. Passez à la branche 'v5.0' :

   ```bash
   git checkout v5.0
   ```

4. Installez les dépendances :

   ```bash
   yarn install
   ```

## Comment construire une extension

1. Passez à la branche 'v5.0' :

   ```bash
   git checkout v5.0
   ```

2. Exécutez la commande suivante dans le terminal :

   ```bash
   yarn dev chrome-mv3
   ```

3. L'extension construite sera située dans le répertoire :

   ```bash
   ./build/dev/chrome-mv3
   ```

## Comment installer le décompressé dans le navigateur

1. Activez le mode développeur :

   ![Mode développeur](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Cliquez sur _Charger décompressé_ :

   ![Charger décompressé](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Sélectionnez le répertoire de l’extension et cliquez sur 'Sélectionner' :

   ![Sélectionner](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Voilà !

## Comment déboguer les règles

1. Recherchez et modifiez la règle dont vous avez besoin dans le répertoire `./Extension/filters/chromium-mv3` dans les fichiers `.txt`.

2. Convertissez les règles du format txt au format déclaratif :

   ```bash
   yarn convert-declarative
   ```

3. Construisez à nouveau l'extension :

   ```bash
   yarn dev chrome-mv3
   ```

4. Rechargez l’extension dans le navigateur :

   ![Recharger l'extension](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
