---
title: Gestion des paramètres et de la protection
sidebar_position: 3
---

Pour obtenir une liste de toutes les commandes AdGuard disponibles, sasissez :

```
adguard-cli --help-all
```

## Activation et désactivation de la protection

Pour activer la protection, il faut saisir :

```
adguard-cli start
```

Pour désactiver la protection, saisissez :

```
adguard-cli stop
```

Pour afficher l'état de la protection, il faut saisir :

```
adguard-cli status
```

## Vérification des mises à jour

Pour vérifier les mises à jour, saisissez :

```
adguard-cli check-update
```

Pour mettre à jour AdGuard pour Linux, saisissez :

```
adguard-cli update
```

Pour voir la sortie du script de mise à jour, il faut saisir :

```
adguard-cli update -v
```

## Configuration d'AdGuard pour Linux

Utilisez la commande `config` pour configurer AdGuard pour Linux. Sous-commandes :

- `afficher`: Afficher la configuration actuelle dans `proxy.yaml`
- `définir`: Configurer une option dans `proxy.yaml`
    - `listen_ports.http_proxy`: Port d'écoute HTTP
    - `proxy_mode`: Mode proxy (`manuel` ou `auto`)
- `get` : Obtenir l'état actuel des options ci-dessus

## Gestion des filtres

Utilisez la commande `filters` pour configurer AdGuard pour Linux. Sous-commandes :

- `list` : Liste des filtres installés
    - `--all`: Afficher tous les filtres
- `install` : Installer un filtre. Saisissez l'URL du filtre que vous souhaitez installer
- `activer`: Activer un filtre. Saisissez le nom ou l'ID du filtre
- `désactiver`: Désactiver un filtre. Saisissez le nom ou l'ID du filtre
- `update` : Mise à jour des filtres
