---
title: Gestion des paramètres et de la protection
sidebar_position: 3
---

## Available commands

Pour obtenir une liste de toutes les commandes AdGuard disponibles, sasissez :

```sh
adguard-cli --help-all
```

## Activation et désactivation de la protection

### Enable protection

Pour activer la protection, il faut saisir :

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Pour désactiver la protection, saisissez :

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Pour afficher l'état de la protection, il faut saisir :

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Vérification des mises à jour

Pour vérifier les mises à jour, saisissez :

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Pour mettre à jour AdGuard pour Linux, saisissez :

```sh
adguard-cli update
```

### Update script output

Pour voir la sortie du script de mise à jour, il faut saisir :

```sh
adguard-cli update -v
```

## Configuration d'AdGuard pour Linux

Utilisez la commande `config` pour configurer AdGuard pour Linux. Sous-commandes :

- `afficher`: Afficher la configuration actuelle dans `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `définir`: Configurer une option dans `proxy.yaml`
    - `listen_ports.http_proxy`: Port d'écoute HTTP
    - `proxy_mode`: Mode proxy (`manuel` ou `auto`)

- `get` : Obtenir l'état actuel des options ci-dessus

## Gestion des filtres

Utilisez la commande `filters` pour configurer AdGuard pour Linux. Sous-commandes :

- `list` : Liste des filtres installés

    - `--all`: Afficher tous les filtres

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install` : Installer un filtre. Saisissez l'URL du filtre que vous souhaitez installer

- `activer`: Activer un filtre. Saisissez le nom ou l'ID du filtre

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `désactiver`: Désactiver un filtre. Saisissez le nom ou l'ID du filtre

- `update` : Mise à jour des filtres

## Changing the proxy server listen address in manual proxy mode

By default, the proxy server listens on `127.0.0.1` — the address of the loopback network interface.
There are two ways to make the proxy server listen on a different interface:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Edit the config file directly:
    - To determine the location of the config file, run `adguard-cli config show | grep "Config location"`.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
