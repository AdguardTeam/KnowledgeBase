---
title: Gestion des paramètres et de la protection
sidebar_position: 3
---

## Commandes disponibles

Pour obtenir une liste de toutes les commandes AdGuard disponibles, sasissez :

```sh
adguard-cli --help-all
```

## Activation et désactivation de la protection

### Activer la protection

Pour activer la protection, il faut saisir :

```sh
adguard-cli start
```

Cette commande tente de configurer une redirection vers le proxy.

![Démarrer la protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Désactiver la protection

Pour désactiver la protection, saisissez :

```sh
adguard-cli stop
```

Cette commande arrête le proxy, mais elle empêche également le trafic d'y être redirigé.

### Vérifier l'état de protection

Pour afficher l'état de la protection, il faut saisir :

```sh
adguard-cli status
```

![État/Arrêter la protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Mises à jour

### Vérification des mises à jour

Pour vérifier les mises à jour, saisissez :

```sh
adguard-cli check-update
```

### Mettre à jour AdGuard pour Linux

Pour mettre à jour AdGuard pour Linux, saisissez :

```sh
adguard-cli update
```

### Mettre à jour la sortie du script

Pour voir la sortie du script de mise à jour, il faut saisir :

```sh
adguard-cli update -v
```

## Configuration d'AdGuard pour Linux

Utilisez la commande `config` pour configurer AdGuard pour Linux. Sous-commandes :

- `afficher`: Afficher la configuration actuelle dans `proxy.yaml`

  ![Configuration actuelle \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `définir`: Configurer une option dans `proxy.yaml`
  - `listen_ports.http_proxy`: Port d'écoute HTTP
  - `proxy_mode`: Mode proxy (`manuel` ou `auto`)

- `get` : Obtenir l'état actuel des options ci-dessus

:::note

The Automatic mode can only be used if the following requirements are met:

- `iptables` is installed and running (either `nft` or `legacy`)
- `iptables` supports the `nat` table for both IPv4 and IPv6
- `iptables` supports the `REDIRECT` and `QUEUE` chains for both IPv4 and IPv6
- The `sudo` package is installed

:::

## Gestion des filtres

Utilisez la commande `filters` pour configurer AdGuard pour Linux. Sous-commandes :

- `list` : Liste des filtres installés

  - `--all`: Afficher tous les filtres

  ![Liste des filtres \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install` : Installer un filtre. Saisissez l'URL du filtre que vous souhaitez installer

- `activer`: Activer un filtre. Saisissez le nom ou l'ID du filtre

  ![Activer les filtres \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `désactiver`: Désactiver un filtre. Saisissez le nom ou l'ID du filtre

- `update` : Mise à jour des filtres

## Modification de l'adresse d'écoute du serveur proxy en mode proxy manuel

Par défaut, le proxy écoute sur `127.0.0.1` — l'adresse de l'interface réseau de bouclage local.
Il y a deux façons de faire écouter le proxy sur une interface différente :

1. Exécutez `adguard-cli config set listen_address <address>` où `<address>` est l'adresse à écouter.
2. Modifiez directement le fichier de configuration :
   - Pour déterminer l'emplacement du fichier de configuration, exécutez `adguard-cli config show | grep "Config location"`.
   - Recherchez la clé `listen_address` et définissez sa valeur en conséquence. Pour écouter sur toutes les interfaces réseau disponibles, définissez l'adresse d'écoute sur `0.0.0.0` ou `::`.

Si l'adresse d'écoute est définie sur autre chose que `127.0.0.1`, alors l'authentification du client proxy est obligatoire. AdGuard CLI ne démarrera pas à moins que l'authentification du proxy ne soit configurée :

- Lors de l'exécution de `adguard-cli config set listen_address <address>` où `<address>` n'est pas `127.0.0.1`, AdGuard CLI demandera un nom d'utilisateur et un mot de passe si l'authentification proxy n'est pas déjà configurée.
- Lorsque vous modifiez directement le fichier de configuration, recherchez la clé `listen_auth`. Définissez la sous-clé `enabled` à `true`, et `username` et `password` à des valeurs non vides.

## Configure outbound proxy

You can configure `outbound_proxy` if you want AdGuard CLI to work through another proxy server.

There are two ways to configure it:

### 1. Configure via URL (recommended)

Instead of setting each option step by step, you can set all parameters in a single line using a URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Supported modes are HTTP, HTTPS, SOCKS4, and SOCKS5.

:::

You can also quickly enable or disable `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Or quickly clear the settings:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Configure individual parameters

The ability to adjust specific parameters is also available:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Disable certificate verification for HTTPS proxies:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Enable SOCKS5 proxy for UDP traffic:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

If your SOCKS5 proxy does not support UDP, connections may fail.

:::

## Per-app AdGuard CLI configuration

Users often need to enable filtering manually for certain browsers. AdGuard for Linux supports **per-app configuration**, allowing you to apply settings or rules individually to each application instead of system-wide.

For details, refer to the `apps` section in `proxy.yaml`.

A set of pre-configured entries for popular web browsers is included by default in `browsers.yaml`.

### Checking the current configuration

To view the current `outbound_proxy` configuration, enter:

```sh
adguard-cli config show outbound_proxy
```

:::info Compatibilité

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::

## Export and import settings

The export/import functionality allows you to backup your AdGuard CLI configuration and restore it on the same or different system. This includes filters, proxy settings, and other configuration options.

### Export settings

To export current AdGuard CLI settings to a ZIP archive, use:

```sh
adguard-cli export-settings
```

You can specify the output path using the `-o` or `--output` flag. This can be either a specific file path or a directory:

```sh
# Export to a specific file
adguard-cli export-settings -o "/path/to/settings.zip"

# Export to a directory (archive will be created with a standard name)
adguard-cli export-settings -o "/path/to/directory"
```

If no output path is specified, the settings will be exported to the working directory with a standard name. After successful export, the command will display the full path where the archive was created.

### Import settings

To import AdGuard CLI settings from a ZIP archive, use:

```sh
adguard-cli import-settings -i "/path/to/settings.zip"
```

The `-i` or `--input` flag is required and specifies the path to the settings archive to import.
