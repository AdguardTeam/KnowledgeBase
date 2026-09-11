---
title: Installation, configuration et suppression
sidebar_position: 2
---

## Installation d'AdGuard pour Linux

Ouvrez la ligne de commande sur votre ordinateur. Sur Linux, utilisez le raccourci clavier _Ctrl+Alt+T_. Sur votre Mac, tapez _Terminal_ dans le champ de recherche.

Pour installer AdGuard, choisissez la version qui vous convient le mieux (version, bêta ou nightly) et saisissez la commande correspondante.

**Version** :

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Bêta** :

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly** :

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Si nécessaire, saisissez votre mot de passe administrateur.

Appuyez sur `y` pour créer un lien dans `/usr/local/bin` vers l'exécutable et attendez que l'installation soit terminée.

:::note

Vous pouvez vérifier la signature pour prouver qu'il s'agit d'une version officielle d'AdGuard en utilisant l'outil `gpg`. [En savoir plus sur GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Configuration initiale

AdGuard pour Linux nécessite une [licence AdGuard](https://adguard.com/license.html). Si vous n'avez pas encore de licence, vous pouvez vous identifier ou créer un compte pour obtenir un essai gratuit de 14 jours. Si vous avez déjà une licence, connectez-vous pour l'activer. Suivez ce guide étape par étape pour faire ça :

1. Après l'installation, saisissez :

   ```sh
   adguard-cli activate
   ```

2. Ensuite, sélectionnez l'option souhaitée :

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/1activate.png)

3. Dès que vous avez une licence, suivez le lien fourni pour procéder à l'activation :

   ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/2activate_link.png)

4. Après l'activation, vous pouvez continuer à travailler avec le programme :

   ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/3activate_success.png)

5. Vous pouvez également réinitialiser votre licence en saisissant :

   ```sh
   adguard-cli reset-license
   ```

   ou voir les informations sur la licence en saisissant

   ```sh
   adguard-cli license
   ```

6. Il faut maintenant configurer AdGuard CLI. Pour exécuter l'assistant de configuration, saisissez :

   ```sh
   adguard-cli configure
   ```

   ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/4configure.png)

   L'assistant posera des questions basiques obligatoires pour la configuration initiale.

7. Ensuite, vous pouvez démarrer la protection AdGuard en saisissant

   ```sh
   adguard-cli start
   ```

   ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/5start.png)

8. Vous pouvez vérifier l'état de la protection en utilisant :

   ```sh
   adguard-cli status
   ```

   et l'arrêter avec :

   ```sh
   adguard-cli stop
   ```

   ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

9. Pour vérifier la configuration actuelle, tapez :

   ```sh
   adguard-cli config show
   ```

   ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

   Le chemin vers le fichier de configuration sera également affiché, c'est possible et même nécessaire de le modifier directement. Il contient des descriptions de toutes les options supplémentaires.

   En alternative, vous pouvez utiliser les commandes :

   ```sh
   adguard-cli config get
   ```

   ou :

   ```sh
   adguard-cli config set
   ```

   Ils sont pourtant principalement destinés à la rédaction de scripts.

Pour plus d'informations sur les commandes disponibles, consultez la section [Paramètres et gestion de la protection](https://adguard.com/kb/adguard-for-linux/settings/).

## Désinstallation d'AdGuard pour Linux

Pour désinstaller AdGuard, saisissez :

Release

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Si nécessaire, saisissez votre mot de passe administrateur.
