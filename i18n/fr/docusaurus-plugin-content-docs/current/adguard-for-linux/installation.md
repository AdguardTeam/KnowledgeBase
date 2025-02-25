---
title: Installation, configuration et suppression
sidebar_position: 2
---

## Installation d'AdGuard pour Linux

Pour installer AdGuard, saisissez :

Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Bêta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Si nécessaire, saisissez votre mot de passe administrateur.

Appuyez sur `y` pour créer un lien dans `/usr/local/bin` vers l'exécutable et attendez que l'installation soit terminée.

:::note

Vous pouvez vérifier la signature pour prouver qu'il s'agit d'une version officielle d'AdGuard en utilisant l'outil `gpg`. [En savoir plus sur GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Activation de la licence

AdGuard pour Linux nécessite une [licence AdGuard](https://adguard.com/license.html). Si vous n'avez pas encore de licence, vous pouvez vous connecter ou créer un compte pour obtenir un essai gratuit de 14 jours. Si vous avez déjà une licence, connectez-vous pour l'activer.

Pour vous connecter ou créer un compte, saisissez :

```
adguard-cli activate
```

Pour réinitialiser votre licence, saisissez :

```
adguard-cli reset-license
```

Pour afficher les informations sur la licence, saisissez :

```
adguard-cli license
```

## Configuration initiale

Pour qu'AdGuard soit opérationnel, terminez la configuration initiale. Cela inclut l'installation du certificat CA AdGuard, l'activation des filtres nécessaires et la sélection du mode proxy.

Pour exécuter l'assistant de configuration, saisissez :

```
adguard-cli configure
```

## Désinstallation d'AdGuard pour Linux

Pour désinstaller AdGuard, saisissez :

Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Bêta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Si nécessaire, saisissez votre mot de passe administrateur.
