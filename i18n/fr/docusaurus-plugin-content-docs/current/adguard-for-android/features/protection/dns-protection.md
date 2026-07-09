---
title: Protection DNS
sidebar_position: 4
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Le module de Protection DNS est accessible en appuyant sur l'onglet _Protection_ (deuxième icône en partant de la gauche en bas de l'écran) puis en sélectionnant _Protection DNS_.

:::tip

La protection DNS fonctionne différemment du blocage classique des publicités et des trackers. Vous pouvez apprendre plus à ce sujet et comment tout fonctionne dans un [article dédié](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_La protection DNS_ autorise le filtrage des Requêtes DNS avec l'aide d'un serveur DNS sélectionné, de filtres DNS et de Règles utilisateur :

- Certains serveurs DNS disposent de listes de blocage qui permettent de bloquer les requêtes DNS vers des domaines potentiellement dangereux

- En plus des serveurs DNS, AdGuard peut filtrer lui-même les requêtes DNS à l'aide d'un filtre DNS spécial. Il contient une liste importante de domaines publicitaires et de domaines de suivi — les requêtes qui leur sont adressées sont redirigées vers un serveur de type "blackhole"

- Vous pouvez également bloquer et débloquer des domaines en créant des règles utilisateur. Vous devrez peut-être consulter notre article sur la [syntaxe des règles de filtrage DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![Protection DNS \*mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### Serveur DNS

Dans cette section, vous pouvez sélectionner un serveur DNS pour résoudre les requêtes DNS, bloquer les publicités et les traqueurs, et chiffrer le trafic DNS. Appuyez sur un serveur pour lire sa description complète et sélectionner un protocole. Si vous n'avez pas trouvé le serveur souhaité, vous pouvez l'ajouter manuellement :

- Appuyez sur _Ajouter un serveur DNS_ et saisissez l'adresse (ou les adresses) du serveur

- Vous pouvez également sélectionner un serveur DNS dans la [liste des fournisseurs DNS connus](https://adguard-dns.io/kb/general/dns-providers/) et appuyer sur _Ajouter à AdGuard_ à côté de celui-ci

- Si vous utilisez un serveur DNS AdGuard privé, vous pouvez l'ajouter à AdGuard depuis le [tableau de bord](https://adguard-dns.io/dashboard/)

Par défaut, le _DNS automatique_ est sélectionné. Il définit un serveur DNS en fonction des paramètres de AdGuard et de l'appareil. Si vous avez activé [l'intégration avec AdGuard VPN](/adguard-for-android/features/integration-with-vpn) ou un autre proxy SOCKS5, il se connecte à _AdGuard DNS Sans filtrage_ ou à tout autre serveur que vous spécifiez. Dans tous les autres cas, il se connecte au serveur DNS sélectionné dans les paramètres de votre appareil.

#### Filtres DNS

Cette section vous permet d'ajouter des filtres DNS personnalisés et des règles de filtrage DNS. Vous pouvez trouver de nouveaux filtres sur [filterlists.com](https://filterlists.com/).
