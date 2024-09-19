---
title: Guide sur les Paramètres avancés
sidebar_position: 9
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Comment accéder aux Paramètres avancés

:::caution

La modification des *Paramètres avancés* peut entraîner des problèmes de performance d'AdGuard, interrompre la connexion Internet ou compromettre votre sécurité et votre confidentialité. Ne modifiez cette section que si vous êtes sûr de ce que vous faites ou si notre équipe d'assistance vous a demandé de le faire.

:::

Pour accéder aux *Paramètres avancés*, ouvrez AdGuard, cliquez sur l'icône d'engrenage, sélectionnez *Avancé*, puis sélectionnez *Paramètres avancés*.

## Paramètres avancés

### Network settings

#### `network.extension.exclude.domains`

Les domaines répertoriés seront exclus du filtrage dans le *Extension du réseau* mode. Utilisez une virgule ou un saut de ligne pour séparer les valeurs.

#### `network.extension.exclude.ports`

Les ports répertoriés seront exclus du filtrage dans le *Extension du réseau* mode. Utilisez une virgule ou un saut de ligne pour séparer les valeurs.

#### `network.extension.route.exclude`

Les itinéraires répertoriés seront exclus du filtrage en mode *Extensions du réseau* . Définissez des routes à l’aide d’une adresse IP ou d’un CIDR de destination. Séparez les valeurs par des virgules ou des sauts de ligne.

#### `network.extension.http.downgrade.bundleids`

Ici, vous pouvez spécifier une liste d'applications pour lesquelles le protocole HTTP/2 sera rétrogradé vers HTTP/1.1 dans le mode de filtrage *Extension de réseau* . L'identifiant du paquet doit être séparé par une virgule ou un saut de ligne.

#### `network.extension.monterey.force.split.tunnel`

Vous pouvez ici interdire à AdGuard d'utiliser la "route par défaut" qui est activée par défaut dans le mode *Extension réseau* sur macOS Monterey. AdGuard utilise la "route par défaut" pour désactiver iCloud Private Relay et Protect Mail Activity, car il ne peut pas fonctionner en équipe avec ceux-ci.

Vous trouverez plus d'informations sur le problème [dans cet article](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Ici, vous pouvez définir une liste d'applications qui effectuent des requêtes DNS directement et non via le résolveur DNS du système (par exemple, certains clients VPN ou applications de filtrage DNS). Le filtrage DNS sera désactivé pour eux dans le mode *Extension réseau.*. Les identifiants des lots doivent être séparés par une virgule ou un saut de ligne.

#### `network.dns.filter.secure.request`

Redirige les requêtes DNS sécurisées vers un proxy DNS local, s'il en existe un disponible.

#### `network.https.ocsp.check`

En définissant `true`, vous activez la vérification de la révocation du certificat HTTPS.

#### `network.tcp.keepalive.enabled`

Envoie périodiquement des paquets TCP sur une connexion inactive pour s'assurer qu'elle reste active et pour renouveler les délais d'attente NAT.

#### `network.tcp.keepalive.interval.seconds`

Temps d'inactivité, en secondes, avant l'envoi d'une sonde keepalive. Si 0 est spécifié, le système utilisera la valeur par défaut.

#### `network.tcp.keepalive.timeout.seconds`

Temps, en secondes, avant d'envoyer une autre sonde keepalive à un homologue qui ne répond pas. Si 0 est spécifié, la valeur sélectionnée par le système sera utilisée.

#### `network.https.ech.enabled`

Utilise un proxy DNS local pour rechercher des configurations dans les listes de configuration ECH. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Vérifie l'authenticité de tous les certificats du domaine en fonction de la politique de transparence des certificats Chrome.

#### `network.https.filter.http3.enabled`

En définissant `true`, vous autorisez AdGuard à filtrer le trafic envoyé via HTTP/3, la dernière version du protocole HTTP basé sur QUIC.

#### `network.filtering.localnetwork`

En définissant `true`, vous activez le filtrage du réseau local.

#### `network.filtering.localhost`

En définissant `true`, vous activez le filtrage LoopBack.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Ici, vous pouvez saisir les adresses IP des serveurs DNS qui seront utilisées pour déterminer l'adresse du serveur DNS crypté.

#### `dns.proxy.fallback.ips`

Ici, vous pouvez spécifier une liste d'adresses IP des serveurs DNS qui seront utilisées comme sauvegardes au cas où le serveur DNS crypté ne répondrait pas.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Les requêtes normales seront redirigées vers un amont de repli si tous les amonts normaux échouent.

#### `dns.proxy.detect.search.domains`

Cette option permet la détection automatique du domaine du réseau local, qui sera automatiquement redirigé vers le serveur DNS de repli au lieu du serveur DNS principal.

#### `dns.proxy.fallback.domains`

Vous pouvez énumérer ici les domaines pour lesquels le serveur DNS de repli sera utilisé à la place du serveur DNS principal.

#### `dns.proxy.adblockrules.blocking.mode`

Ici, vous pouvez spécifier le type de réponse du serveur DNS aux requêtes bloquées, correspondant aux règles de style adblock.

- 0 - répondre par REFUSED
- 1 — répondre avec NXDOMAIN
- 2 — répondre avec 0.0.0.0 ou les adresses spécifiées dans `dns.proxy.blocking.response.IPv4.address` et/ou `dns.proxy.blocking.response.IPv6 .adress`

#### `dns.proxy.hostrules.blocking.mode`

Ici, vous pouvez spécifier le type de réponse du serveur DNS aux requêtes bloquées, correspondant aux règles d'hôtes :

- 0 - répondre par REFUSED
- 1 — répondre avec NXDOMAIN
- 2 — répondre avec 0.0.0.0 ou les adresses spécifiées dans `dns.proxy.blocking.response.IPv4.address` et/ou `dns.proxy.blocking.response.IPv6 .adress`

#### `dns.proxy.blocking.response.IPv4.address`

Ici, vous pouvez définir l'adresse IPv4 qui sera renvoyée en réponse aux requêtes "A" bloquées lorsque `dns.proxy.adblockrules.blocking.mode` ou `dns.proxy.hostrules .blocking.mode` est défini sur le type de réponse "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Vous pouvez spécifier ici l'adresse IPv6 qui sera renvoyée en réponse aux requêtes "AAAA" bloquées lorsque `dns.proxy.adblockrules.blocking.mode` ou `dns.proxy.hostrules.blocking.mode` est défini sur le type de réponse "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Ce champ permet d'activer le blocage des requêtes DNS IPv6.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Vous pouvez spécifier ici la valeur TTL (time to live) qui sera renvoyée en réponse à une requête bloquée.

#### `dns.proxy.parallel.upstream.queries.enabled`

Tous les amonts sont interrogés simultanément. La première réponse est renvoyée.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Répond à l'échec de l'amont avec un paquet SERVFAIL.

#### `dns.proxy.http3.enabled`

Active HTTP/3 pour les amonts DNS-over-HTTPS pour accélérer la connexion.

#### `dns.proxy.block.encrypted.client.hello.response`

Supprime les paramètres Encrypted Client Hello des réponses.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Ajuste la taille de la fragmentation de la requête HTTP. Valeurs valides : 1 à 1 500. Si une taille non valide est spécifiée, le système utilisera la valeur par défaut.

#### `stealth.antidpi.clienthello.split.fragment.size`

Cette option spécifie la taille de la fragmentation des paquets TCP, ce qui permet d'éviter une inspection approfondie des paquets. Valeurs valides : 1 à 1 500. Si une taille non valide est spécifiée, le système utilisera la valeur par défaut.

#### `stealth.antidpi.http.space.juggling`

Ajoute un espace supplémentaire entre la méthode HTTP et l'URL et supprime l'espace après le champ "Host :".

#### `stealth.antidpi.split.delay.millisecond`

Ici, vous pouvez spécifier le délai, en millisecondes, après l'envoi du premier fragment, si la fragmentation est effectuée.

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

Activez cette fonctionnalité si vous souhaitez qu'AdGuard intercepte automatiquement les URL des scripts utilisateur et ouvre la fenêtre d'installation.

#### `subscription.link.interception.filter`

Activez cette fonctionnalité si vous souhaitez qu'AdGuard intercepte automatiquement les URL d'abonnement (par exemple, abp:subscribe, etc.) et ouvrez la fenêtre de configuration du filtre personnalisé.
