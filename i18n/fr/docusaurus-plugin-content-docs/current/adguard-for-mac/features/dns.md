---
title: DNS
sidebar_position: 4
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Protection DNS

La section _DNS_ contient une fonctionnalité, _Protection DNS_, avec plusieurs paramètres :

- Fournisseurs
- Filtres
- Liste de blocage
- Liste d’autorisation

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

Si vous activez la _Protection DNS_, le trafic DNS sera géré par AdGuard.

### Fournisseurs

Sous _Fournisseurs_, vous pouvez sélectionner un serveur DNS pour crypter votre trafic DNS et bloquer les publicités et les trackers si nécessaire. Nous recommandons AdGuard DNS. Pour une configuration plus avancée, vous pouvez [configurer un serveur DNS AdGuard privé](https://adguard-dns.io/welcome.html) soit ajouter un serveur personnalisé en cliquant sur l'icône « + » dans le coin inférieur gauche.

### Filtres

Les filtres DNS appliquent des règles de blocage des publicités au niveau DNS. Ce type de filtrage est moins précis que le blocage classique des publicités, mais il est particulièrement utile pour bloquer un domaine entier. Pour ajouter un filtre DNS, cliquez sur « + ». Vous pouvez trouver plus de filtres DNS sur [filterlists.com](https://filterlists.com/).

### Liste de blocage

Les domaines figurant sur cette liste seront bloqués. Pour ajouter un domaine, cliquez sur « + ». Vous pouvez ajouter des noms de domaine ou des règles de filtrage DNS à l'aide d'une [syntaxe spéciale](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

Pour exporter ou importer une liste de blocage, ouvrez le menu contextuel.

### Liste d’autorisation

Les domaines sur cette liste ne sont pas filtrés. Pour ajouter un domaine, cliquez sur « + ». Pour exporter ou importer une liste d'autorisation, ouvrez le menu contextuel.
