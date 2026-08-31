---
title: Guide sur les Paramètres avancés (de bas niveau)
sidebar_position: 7
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Auparavant appelés paramètres de bas niveau, les paramètres Avancés contiennent principalement des options qui vont au-delà des compétences de l'utilisateur moyen et ne sont pas appliquées dans l'utilisation quotidienne. AdGuard pour Windows est conçu pour fonctionner sans jamais avoir à changer l'un d'eux, mais ils fourniront des fonctionnalités supplémentaires dans certains cas particuliers ou lors de la résolution d'un problème peu commun.

:::caution

La modification inconsidérée des *Paramètres Avancés* peut potentiellement entraîner des problèmes de performances d'AdGuard, interrompre la connexion Internet ou compromettre votre sécurité et votre confidentialité. Vous ne devez modifier ces paramètres que si vous avez pleine confidence en ce que vous faites ou si notre Équipe d'assistance vous a demandé de le faire.

:::

## Comment accéder aux Paramètres avancés

Pour accéder aux *Paramètres avancés*, dans la fenêtre principale, cliquez sur *Paramètres → Paramètres généraux* et faites défiler vers le bas jusqu'aux *Paramètres Avancés*. Vous pouvez également sélectionner *Avancés → Paramètres avancés...* dans le menu de la barre d'état système.

## Paramètres avancés

Une fois que vous avez ouvert les Paramètres avancés, vous verrez les options suivantes :

### Bloquer le TCP Fast Open

Si activé, AdGuard bloquera TCP Fast Open dans le navigateur Edge. Pour appliquer les paramètres, vous devez redémarrer le navigateur.

### L'utilisation de Encrypted Client Hello

Chaque connexion Internet chiffrée comporte une partie non chiffrée. Il s'agit du tout premier paquet qui contient le nom du serveur auquel vous vous connectez. La technologie Encrypted Client Hello est censée résoudre ce problème et chiffrer ce dernier morceau d'information non chiffrée. Pour en bénéficier, activez l'option *Utiliser Encrypted Client Hello*. Elle utilise un proxy DNS local pour rechercher la configuration ECH pour le domaine. Si elle est trouvée, le paquet Client Hello sera chiffré.

### Vérifiez la transparence des certificats des sites Web

Vérifie l'authenticité de tous les certificats du domaine en fonction de la politique de transparence des certificats Chrome. Si le certificat ne respecte pas la politique de transparence des certificats Chrome, AdGuard ne filtrera pas le site Web. Chrome, à son tour, le bloquera.

### Activer les contrôles de révocation des certificats SSL/TLS

Une fois activée, cette option effectue des vérifications OCSP asynchrones pour vérifier si le certificat SSL/TLS du site Web est révoqué.

Si le contrôle OCSP se termine dans le délai minimum, AdGuard appliquera immédiatement le résultat : bloquer la connexion si le certificat est révoqué ou établir une connexion si le certificat est valide.

Si la vérification prend trop de temps, AdGuard établira une connexion et continuera à vérifier en arrière-plan. Si le certificat est révoqué, les connexions actuelles et futures au domaine seront bloquées.

### Afficher le volet "AdGuard VPN" dans les Paramètres

Activer cette option vous permet d'afficher l'onglet AdGuard VPN dans les paramètres pour un accès facile à l'application et au site Web du produit.

### Exclure une application du filtrage en saisissant son chemin complet

Si vous souhaitez qu'AdGuard ne filtre pas une application spécifique, spécifiez le chemin complet vers celles-ci et les applications seront exclues du filtrage. Séparer les différents chemins par des points-virgules.

### Activer les notifications pop-up AdGuard

Activez cette fonctionnalité pour voir les notifications contextuelles d'AdGuard. Ils n'apparaissent pas trop souvent et contiennent uniquement des informations importantes. Vous pouvez également utiliser le menu de la barre d'état système pour rappeler la dernière notification contextuelle.

### Intercepter automatiquement les liens d'abonnement aux filtres

Activez cette fonctionnalité si vous souhaitez qu'AdGuard intercepte automatiquement les URL d'abonnement aux filtres (c'est-à-dire `abp:subscribe` et similaires) et ouvre une boîte de dialogue personnalisé d'installation de filtre.

### Filtrer HTTP/3

Si cette option est activée, AdGuard filtrera les requêtes envoyées sur HTTP/3 en plus d'autres types de requêtes.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Utiliser le mode pilote de redirection

Si cette option est activée, AdGuard intercepte tout le trafic et le redirige vers le proxy local pour un filtrage ultérieur.

Sinon, AdGuard effectuera le filtrage de tout le trafic en temps réel, sans redirection. Dans ce cas, le système considérera AdGuard comme la seule application qui se connecte à Internet (les autres applications sont routées par son intermédiaire). L'inconvénient est que cela rendra le système de pare-feu moins efficace. L'avantage est que cette approche fonctionne un peu plus rapidement.

### Afficher la fenêtre principale au démarrage du système

Activez cette option pour ouvrir la fenêtre principale d'AdGuard après le chargement du système. Ce paramètre, qui n'affecte pas le lancement ou non du service de filtrage réel, se trouve dans *Paramètres → Paramètres généraux*.

### Activer le filtrage au démarrage du système

À partir de la v7.12, par défaut, le service d'AdGuard ne filtre pas le trafic après le démarrage du système si l'option Lancer AdGuard au démarrage du système est désactivée. En d'autres termes, le service AdGuard est démarré en mode "inactif". Activez cette option pour permettre à AdGuard de filtrer le trafic même si l'application n'est pas lancée.

:::note

Avant la v7.12, le service AdGuard démarrait en mode filtrage par défaut (même si l'option *Lancer AdGuard au démarrage du système* était désactivée). Si vous étiez satisfait du comportement ancien, activez cette option.

:::

### Filtrer localhost

Si vous souhaitez qu'AdGuard effectue le filtrage des connexions en boucle, cochez la case. Cette option sera toujours activée si vous avez installé AdGuard VPN, car sinon il ne pourra pas fonctionner.

### Exclure les plages d'adresses IP spécifiées du filtrage

Si vous ne souhaitez pas qu'AdGuard exclue des sous-réseaux particuliers, activez cette fonctionnalité et spécifiez les plages IP en notation CIDR (par exemple, 98.51.100.14/24) dans la section **plages IP exclues du filtrage** ci-dessous.

### Activer l’écriture HAR

Cette option doit être **activée uniquement à des fins de débogage**. Cocher la case à cocher fera en sorte qu'AdGuard crée un fichier au format HAR 1.2 contenant des informations sur toutes les requêtes HTTP filtrées. Ce fichier peut être analysé avec l'application Fiddler. Veuillez noter que cela peut ralentir votre navigation sur le web de manière significative.

### Ajouter un espace supplémentaire à la requête HTTP simple

Ajoute un espace supplémentaire entre la méthode HTTP et l'URL et supprime l'espace après le champ "Host :" pour éviter l'inspection approfondie des paquets. Par exemple, la requête

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Ajuster la taille de la fragmentation du paquet TLS initial

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Si une taille invalide est spécifiée, la valeur sélectionnée par le système sera utilisée. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Taille de fragment de requête HTTP simple

Ajuste la taille de la fragmentation de la requête HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valeurs valides : 1 – 1500. Si une taille invalide est spécifiée, la valeur sélectionnée par le système sera utilisée. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Afficher QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Activer TCP keepalive

Valeurs valides : 1 – 1500. Si une taille invalide est spécifiée, la valeur sélectionnée par le système sera utilisée.

### Intervalle Keepalive TCP

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Délai d'attente TCP keepalive

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Bloquer Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Délai d'attente DNS personnalisé

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Utilisation de HTTP/3 pour DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Utilisation des DNS en amont de repli

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Requêtes parallèles vers les DNS en amont

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Toujours répondre aux requêtes DNS qui ont échoué

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Activation du filtrage des requêtes DNS sécurisées

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Mode de blocage pour les règles d’hôtes

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Répondre avec message d'erreur “Refusé”
- Répondre avec message d'erreur “NxDomain”
- Répondre avec une adresse IP personnalisée

### Mode de blocage pour les règles de type adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Répondre avec message d'erreur “Refusé”
- Répondre avec message d'erreur “NxDomain”
- Répondre avec une adresse IP personnalisée

### Adresse IPv4 personnalisée

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Adresse IPv6 personnalisée

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Serveurs Fallback

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Ne pas utiliser de serveurs de secours;
- Utiliser les serveurs par défaut du système;
- Utiliser les serveurs personnalisés.

### Bloquer ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Liste des serveurs de secours personnalisés

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Liste des adresses d'amorçage personnalisées

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### Exclusions DNS

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Exclusion des noms de réseaux Wi-Fi (SSID) spécifiés du filtrage DNS

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
