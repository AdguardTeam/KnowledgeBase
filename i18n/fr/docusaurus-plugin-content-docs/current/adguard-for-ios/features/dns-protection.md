---
title: Protection DNS
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

[Module de protection DNS](https://adguard-dns.io/kb/general/dns-filtering/) améliore votre confidentialité en cryptant votre trafic DNS. Contrairement au blocage de contenu Safari, la protection DNS fonctionne à l'échelle du système, c'est-à-dire au-delà de Safari, dans les applications et autres navigateurs. Vous devez activer ce module avant de pouvoir l'utiliser. Vous pouvez le faire sur l'écran d'accueil en appuyant sur l'icône de bouclier en haut de l'écran ou en accédant à l'onglet _Protection_ → _Protection DNS_.

:::note

Pour pouvoir gérer les paramètres DNS, les applications AdGuard nécessitent l'établissement d'un VPN local. Il n’acheminera pas votre trafic via des serveurs distants. Néanmoins, le système vous demandera de confirmer l'autorisation d'accès.

:::

### Implémentation DNS {#dns-implementation}

! [Écran d’implémentation DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Cette section propose deux options : AdGuard et Implémentation native. Fondamentalement, il s'agit de deux méthodes de configuration du DNS.

Dans l'implémentation native, le DNS est géré par le système et non par l'application. Cela signifie qu'AdGuard n'a pas besoin de créer un VPN local. Malheureusement, cela ne vous aidera pas à contourner les restrictions du système et à utiliser AdGuard avec d'autres applications basées sur VPN : si un VPN est activé, le DNS natif est ignoré. Par conséquent, vous ne pourrez pas filtrer le trafic localement ni utiliser notre tout nouveau [protocole DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### Serveurs DNS {#dns-servers}

La section suivante que vous verrez sur l'écran Protection DNS est le serveur DNS. Il affiche le serveur DNS actuellement sélectionné et le type de cryptage. Pour modifier l'un ou l'autre, appuyez sur le bouton pour accéder à l'écran du serveur DNS.

![Serveurs DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Les serveurs diffèrent par leur vitesse, le protocole utilisé, leur fiabilité, leur politique de journalisation, etc. Par défaut, AdGuard proposera plusieurs serveurs DNS parmi les plus populaires (dont AdGuard DNS). Appuyez sur n'importe quel bouton pour modifier le type de cryptage (si cette option est proposée par le propriétaire du serveur) ou pour afficher la page d'accueil du serveur. Nous avons ajouté des étiquettes telles que « Aucune politique de journalisation », « Blocage des publicités », « Sécurité » pour vous aider à faire un choix.

De plus, en bas de l'écran se trouve une option permettant d'ajouter un serveur DNS personnalisé. Il prend en charge les serveurs standards, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS et DNS-over-QUIC.

#### Authentification de base HTTP pour DNS-over-HTTPS

Cette fonctionnalité apporte les capacités d'authentification du protocole HTTP au DNS, qui n'a pas d'authentification intégrée. L'authentification dans DNS est utile si vous souhaitez restreindre l'accès à votre serveur DNS personnalisé à des utilisateurs spécifiques.

Pour activer cette fonctionnalité :

1. Dans AdGuard DNS, allez dans _Paramètres du serveur_ → _Appareils_ → _Paramètres_ et changez le serveur DNS pour celui avec authentification. Cliquer sur _Refuser les autres protocoles_ supprimera les autres options d'utilisation du protocole, laissant uniquement l'authentification DNS-over-HTTPS activée et empêchant son utilisation par des tiers. Copiez l'adresse générée.

![DNS-over-HTTPS avec authentification](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. Dans AdGuard pour iOS, accédez à l'onglet _Protection_ → _Protection DNS_ → _Serveur DNS_ et collez l'adresse générée dans le champ _Ajouter un serveur DNS personnalisé_. Enregistrez et sélectionnez la nouvelle configuration.

Pour vérifier si tout est correctement configuré, visitez notre [page de diagnostic](https://adguard.com/en/test.html).

### Paramètres réseau {#network-settings}

![Écran des paramètres réseau \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Les utilisateurs peuvent également gérer leur sécurité DNS sur l'écran Paramètres réseau. _Filtrer les données mobiles_ et _Filtrer le Wi-Fi_ activent ou désactivent la protection DNS pour les types de réseaux respectifs. Plus bas, sous _Exceptions Wi-Fi_, vous pouvez exclure certains réseaux Wi-Fi de la protection DNS (par exemple, vous pourriez vouloir exclure votre réseau domestique si vous utilisez [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### Filtrage DNS {#dns-filtering}

Le filtrage DNS vous permet de personnaliser votre trafic DNS en activant le filtre DNS AdGuard, en ajoutant des filtres DNS personnalisés et en utilisant la liste de blocage/liste d'autorisation DNS.

Comment accéder :

_Protection_ (l'icône de bouclier dans la barre de menu inférieure) → _Protection DNS_ → _Filtrage DNS_

![Écran de filtrage DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### Filtres DNS {#dns-filters}

Tout comme les filtres qui fonctionnent dans Safari, les filtres DNS sont des ensembles de règles écrites selon une [syntaxe spéciale](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard surveillera votre trafic DNS et bloquera les requêtes qui correspondent à une ou plusieurs règles. Vous pouvez utiliser des filtres tels que le [Filtre DNS AdGuard](https://github.com/AdguardTeam/AdguardSDNSFilter) ou ajouter des fichiers hôtes comme filtres. Plusieurs filtres peuvent être ajoutés simultanément. Pour savoir comment procéder, familiarisez-vous avec [ce manuel exhaustif](adguard-for-ios/solving-problems/system-wide-filtering).

#### Liste d’autorisation et liste de blocage {#allowlist-blocklist}

En plus des filtres DNS, vous pouvez avoir un impact ciblé sur le filtrage DNS en ajoutant des domaines uniques à la liste de blocage ou à la liste autorisée. La liste de blocage prend même en charge la même syntaxe DNS, et les deux peuvent être importés et exportés, tout comme la liste d'autorisation dans le blocage de contenu Safari.
