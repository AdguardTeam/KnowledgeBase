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
