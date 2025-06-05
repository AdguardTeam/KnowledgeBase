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

`GET /foo/bar/ HTTP/1.1
Host: example.org`

sera convertie en

`GET /foo/bar/ HTTP/1.1
Host: example.org`

Cette option n'est appliquée que lorsque l'option *Protection contre l'inspection approfondie des paquets* du mode furtif est activée.

### Ajuster la taille de la fragmentation du paquet TLS initial

Cette option spécifie la taille de la fragmentation des paquets TCP, ce qui permet d'éviter une inspection approfondie des paquets. Cette option n'affecte que le trafic sécurisé (HTTPS).

Si cette option est activée, AdGuard divise le paquet TLS initial (le paquet Client Hello) en deux parties : la première a la longueur spécifiée et la seconde a le reste, jusqu'à la longueur du paquet TLS initial entier.

Valeurs valides : 1 – 1500. Si une taille invalide est spécifiée, la valeur sélectionnée par le système sera utilisée. Cette option n'est appliquée que lorsque l'option *Protection contre l'inspection approfondie des paquets* du mode furtif est activée.

### Taille de fragment de requête HTTP simple

Ajuste la taille de la fragmentation de la requête HTTP. Cette option n'affecte que le trafic HTTP non sécurisé. Si cette option est activée, AdGuard divise le paquet initial en deux parties : la première a la longueur spécifiée et la seconde a le reste, jusqu'à la longueur du paquet d’origine entier.

Valeurs valides : 1 – 1500. Si une taille invalide est spécifiée, la valeur sélectionnée par le système sera utilisée. Cette option n'est appliquée que lorsque l'option *Protection contre l'inspection approfondie des paquets* du mode furtif est activée.

### Afficher QUIC

Permet d'afficher les enregistrements du protocole QUIC dans le journal de filtrage. Pour les requêtes bloquées uniquement.

### Activer TCP keepalive

Envoie périodiquement des paquets TCP sur une connexion inactive pour s'assurer qu'elle est active et pour renouveler les délais d'attente NAT. Cette option peut être utile pour contourner les paramètres stricts de traduction d'adresses réseau (NAT) utilisés par certains FAI.

### Intervalle Keepalive TCP

Ici, vous pouvez spécifier une période d'inactivité, en secondes, avant d'envoyer une sonde keepalive. Si 0 est spécifié, la valeur sélectionnée par le système sera utilisée.

:::note

Ce paramètre ne fonctionne que lorsque l'option *Activer TCP keepalive* est activée.

:::

### Délai d'attente TCP keepalive

Ici, vous pouvez spécifier le temps en secondes avant d'envoyer une autre sonde keepalive à un homologue qui ne répond pas. Si 0 est spécifié, la valeur sélectionnée par le système sera utilisée.

:::note

Ce paramètre ne fonctionne que lorsque l'option *Activer TCP keepalive* est activée.

:::

### Bloquer Java

Certains sites Web et services Web prennent toujours en charge les plug-ins Java. L'API qui sert de base aux plug-ins Java présente de graves vulnérabilités de sécurité. Vous pouvez désactiver ces plug-ins pour des raisons de sécurité. Néanmoins, même si vous décidez d'utiliser l'option *Bloquer Java* , JavaScript sera toujours activé.

### Délai d'attente DNS personnalisé

Ici, vous pouvez spécifier le temps en millisecondes que AdGuard attendra pour la réponse du serveur DNS sélectionné avant de recourir au traitement de secours. Si vous ne remplissez pas ce champ ou si vous saisissez une valeur invalide, la valeur de 5000 sera utilisée.

### Utilisation de HTTP/3 pour DNS-over-HTTPS

Active HTTP/3 pour les serveurs en amont DNS-over-HTTPS afin d'accélérer la connexion si le serveur en amont sélectionné prend en charge ce protocole. Cela signifie qu'activer cette option ne garantit pas que toutes les requêtes DNS seront envoyées via HTTP/3.

### Utilisation des DNS en amont de repli

Les requêtes normales seront redirigées vers un traitement de secours en amont si toutes les requêtes DNS vers les amonts sélectionnés échouent.

### Requêtes parallèles vers les DNS en amont

Tous les flux amonts seront interrogés en parallèle et la première réponse est renvoyée. Étant donné que les requêtes DNS sont effectuées en parallèle, l’activation de cette fonctionnalité augmente la vitesse d’Internet.

### Toujours répondre aux requêtes DNS qui ont échoué

Si la résolution d'adresse a échoué sur chacun des serveurs en amont transférés, ainsi que sur les domaines de secours, alors la réponse à la requête DNS sera `SERVFAIL`.

### Activation du filtrage des requêtes DNS sécurisées

AdGuard redirigera les requêtes DNS sécurisées vers le proxy DNS local, en addition aux requêtes DNS simples.

### Mode de blocage pour les règles d’hôtes

Ici, vous pouvez sélectionner la manière dont AdGuard répondra aux domaines bloqués par les règles DNS en fonction de la [syntaxe des règles d'hôtes](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Répondre avec message d'erreur “Refusé”
- Répondre avec message d'erreur “NxDomain”
- Répondre avec une adresse IP personnalisée

### Mode de blocage pour les règles de type adblock

Ici, vous pouvez sélectionner la manière dont AdGuard répondra aux domaines bloqués par les règles DNS en fonction de la [syntaxe de style adblock](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Répondre avec message d'erreur “Refusé”
- Répondre avec message d'erreur “NxDomain”
- Répondre avec une adresse IP personnalisée

### Adresse IPv4 personnalisée

Si l'adresse IP personnalisée est sélectionnée en Mode de blocage pour les règles d'hôtes ou en Mode de blocage pour les règles de style adblock, cette adresse IP sera renvoyée en réponse aux requêtes A bloquées. Si rien n'est spécifié, AdGuard répondra avec l'erreur Refusé par défaut.

### Adresse IPv6 personnalisée

Si l'adresse IP personnalisée est sélectionnée en Mode de blocage pour les règles d'hôtes ou en Mode de blocage pour les règles de style adblock, cette adresse IP sera renvoyée en réponse aux requêtes AAAA bloquées. Si rien n'est spécifié, AdGuard répondra avec l'erreur "Refusé" Par défaut.

### Serveurs Fallback

Ici, vous pouvez spécifier un serveur DNS alternatif vers lequel une requête DNS sera redirigée si le serveur principal ne répond pas dans le délai dépassé spécifié dans la section suivante. Vous avez le choix entre trois options :

- Ne pas utiliser de serveurs de secours;
- Utiliser les serveurs par défaut du système;
- Utiliser les serveurs personnalisés.

### Bloquer ECH

Si cette option est activée, AdGuard supprime les paramètres Encrypted Client Hello des réponses.

### Liste des serveurs de secours personnalisés

Si vous souhaitez qu'AdGuard utilise des serveurs de secours personnalisés, listez-les dans cette section, un par ligne.

### Liste des adresses d'amorçage personnalisées

Un amorçage est un serveur DNS intermédiaire utilisé pour obtenir l'adresse IP du serveur DNS sécuritaire que vous avez choisi précédemment dans *Protection DNS*. Un "terme moyen" est nécessaire lors de l'utilisation de protocoles qui désignent l'adresse du serveur par des lettres (comme DNS-over-TLS, par exemple). Dans ce cas, l'amorçage agit comme un traducteur, transformant les lettres en chiffres que votre système peut comprendre.

Par défaut, le résolveur DNS du système est utilisé, et la requête d'amorçage initiale est effectuée via le port 53. Si cela ne vous convient pas, saisissez ici les adresses IP des serveurs DNS qui seront utilisées pour déterminer l'adresse du serveur DNS crypté dans l'ordre de haut en bas. Les adresses IP spécifiées seront appliquées dans l’ordre indiqué. Si vous spécifiez des adresses invalide, ou aucune adresse du tout, les IP du système seront utilisées.

### Exclusions DNS

Toutes les Requêtes DNS vers les domaines énumérés ici seront redirigées vers le serveur DNS Par défaut du système au lieu du serveur DNS spécifié dans les paramètres de l'application. De plus, les règles de blocage DNS ne seront pas appliquées à de telles requêtes.

### Exclusion des noms de réseaux Wi-Fi (SSID) spécifiés du filtrage DNS

La protection DNS n'inclura pas les réseaux Wi-Fi répertoriés dans cette section. Spécifiez les noms de réseaux Wi-Fi (SSID) un par ligne. Cela peut être utile si un réseau Wi-Fi particulier est déjà protégé par AdGuard Home ou un autre système de protection DNS. Dans ce cas, il est inutile de filtrer à nouveau les requêtes DNS.
