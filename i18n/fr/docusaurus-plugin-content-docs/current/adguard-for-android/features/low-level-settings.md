---
title: Guide sur les paramètres de bas niveau
sidebar_position: 5
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Comment accéder aux paramètres de bas niveau

:::caution

La modification des paramètres de bas niveau peut entraîner des problèmes de performance d'AdGuard, interrompre votre connexion Internet ou compromettre votre sécurité et votre confidentialité. N'utilisez les fonctions de bas niveau que si vous êtes un utilisateur expérimenté et si vous savez ce que vous faites, soit si notre équipe d'assistance vous a demandé de le faire.

:::

Pour accéder aux _Paramètres de bas niveau_, ouvrez l'application AdGuard et appuyez sur l'icône d'engrenage dans le coin inférieur droit de l'écran. Sélectionnez ensuite _Général → Avancé → Paramètres de bas niveau_.

## Paramètres de bas niveau

Pour AdGuard pour Android v4.x, nous avons entièrement repensé les paramètres de bas niveau. Nous avons retravaillé la liste des paramètres et les avons organisés en groupes thématiques avec des descriptions améliorées. Nous avons également ajouté une validation de l'input et d'autres dispositifs de sécurité.

### Protection DNS

#### Repli en amont

Ici, vous pouvez spécifier le ou les résolveurs DNS de traitement de secours à utiliser lorsque le serveur configuré n'est pas disponible. Options disponibles :

- _DNS automatique_: Sélectionnez cette option si vous souhaitez utiliser le DNS système ou le DNS AdGuard.
- _Aucun_ : Sélectionnez cette option si vous ne souhaitez pas de solution de repli.
- _DNS personnalisé_ : Sélectionnez cette option et saisissez des adresses IPv4 ou IPv6 de serveur DNS simples, une par ligne. Ces adresses seront utilisées en amont.

#### Domaines de secours

Ici, vous pouvez lister les domaines qui seront redirigés vers les serveurs de secours en amont, s'ils sont disponibles. Vous pouvez saisir plusieurs domaines, un par ligne. Vous pouvez utiliser des caractères génériques limités.

#### Détecter les domaines de recherche

Si ce paramètre est activé, AdGuard détectera les domaines de recherche DNS et les redirigera automatiquement vers les traitements de secours en amont, si disponibles.

#### Bootstrap en amont

Bootstrap DNS pour les DNS chiffrés en amont, tels que les serveurs DoH, DoT et DoQ. Options disponibles :

- _DNS automatique_: Sélectionnez cette option si vous souhaitez utiliser le DNS système ou le DNS AdGuard. Cette option est sélectionnée par défaut.
- _DNS personnalisé_ : Sélectionnez cette option et saisissez des adresses IPv4 ou IPv6 de serveur DNS simples, une par ligne. Ces adresses seront utilisées comme adresses d'amorçage en amont.

#### Mode de blocage pour les règles de type adblock

Ici, vous pouvez spécifier le type de réponse pour les domaines bloqués par les règles DNS basées sur la syntaxe des règles de blocage publicitaire (par exemple, `||example.org^`). Options disponibles :

- _REFUSED_ : Répondre avec le code REFUSED
- _NXDOMAIN_ : Répondre avec le code NXDOMAIN
- _Adresse IP personnalisée_ : sélectionnez cette option pour renvoyer une adresse IP personnalisée. Vous devrez entrer une adresse IPv4 pour les requêtes A bloquées et une adresse IPv6 pour les requêtes AAAA bloquées.

#### Mode de blocage pour les règles d’hôtes

Ici, vous pouvez spécifier le type de réponse pour les domaines bloqués par les règles DNS basées sur la syntaxe de règle d'hôtes
(par exemple, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_ : Répondre avec le code REFUSED
- _NXDOMAIN_ : Répondre avec le code NXDOMAIN
- _Adresse IP personnalisée_ : sélectionnez cette option pour renvoyer une adresse IP personnalisée. Vous devrez entrer une adresse IPv4 pour les requêtes A bloquées et une adresse IPv6 pour les requêtes AAAA bloquées.

#### Délai d'attente pour les requêtes DNS

Ici, vous pouvez spécifier le délai dépassé, en millisecondes, qu'AdGuard attendra pour chaque requête DNS avant de la rediriger vers un résolveur DNS de traitement de secours. Si vous ne remplissez pas ce champ ou si vous saisissez une valeur invalide, la valeur de 5000 ms sera utilisée.
Si vous avez plusieurs amonts, le DNS de secours ne sera utilisé qu'après l'expiration des délais d'expiration de chaque flux en amont.

#### Réponse TTL bloquée

Ici, vous pouvez définir la durée de vie (TTL) de l'enregistrement pour les domaines bloqués. La valeur par défaut est de 3600 secondes.

#### Taille du cache DNS

Ici, vous pouvez spécifier le nombre maximum de réponses mises en cache. La valeur par défaut est de 1000.

#### Blocage ECH

Si ce paramètre est activé, AdGuard bloquera TLS Encrypted Hello (ECH) dans les réponses DNS.

#### Essayer HTTP/3 pour les amonts DNS-over-HTTPS

Si cette option est activée, AdGuard utilisera le protocole HTTP/3 pour accélérer la résolution des requêtes DNS pour les serveurs DNS en amont utilisant le protocole DNS-over-HTTPS. Sinon, AdGuard reviendra à son paramètre par défaut et utilisera HTTP/2 pour envoyer les requêtes pour DNS-over-HTTPS.

#### Réponse d'erreur SERVFAIL

Si ce paramètre est activé, AdGuard enverra une réponse SERVFAIL au client si toutes les requêtes en amont ne répondent pas. Si ce paramètre est désactivé, aucune réponse sera envoyer au client dans ces circonstances.

#### Utiliser le traitement de secours pour tous les domaines

Si cette option est activée, AdGuard utilisera les serveurs de secours pour tous les domaines, y compris ceux qui ne sont pas prévus pour cela. Sinon, les serveurs de secours en amont ne seront utilisés pour les domaines de secours et les domaines de recherche que si l'option correspondante est activée.

#### Vérifier les serveurs DNS en amont

Si cette option est activée, AdGuard vérifiera les serveurs DNS en amont avant d'ajouter ou de mettre à jour des serveurs DNS personnalisés.

#### Filtrage DNS sécurisé

Si cette option est activée, AdGuard filtrera les requêtes DNS chiffrées en plus des requêtes DNS non chiffrées. Le trafic DNS chiffré provient principalement de Chrome et d'autres navigateurs configurés pour utiliser un DNS sécurisé.

Ce paramètre dispose de deux modes :

- **Filtrer à la volée**. Dans ce mode, AdGuard filtrera le trafic DNS-over-HTTPS sans le rediriger vers le proxy DNS local. Il utilisera le serveur DNS indiqué dans les paramètres du navigateur.

- **Redirection vers un proxy DNS**. Dans ce mode, AdGuard redirigera les requêtes DNS-over-HTTPS vers le proxy DNS local pour le filtrage. Il utilisera le serveur DNS sélectionné dans les paramètres DNS de l'application AdGuard.

### Filtrage

#### Capture HAR

Si cette option est activée, AdGuard enregistrera toutes les requêtes HTTP filtrées au format HAR 1.2 dans le sous-répertoire « har » du répertoire de cache de l'application. Ces fichiers peuvent être analysés à l'aide de l'outil Fiddler.

Ce paramètre peut ralentir votre appareil. Utilisez-le uniquement à des fins de débogage.

### Filtrage HTTPS

#### Encrypted Client Hello

Si cette option est activée, AdGuard chiffrera les requêtes ClientHellos, si nécessaire. Cette fonctionnalité nécessite l'activation du filtrage HTTPS. Cette fonctionnalité utilise un proxy DNS local pour rechercher la configuration ECH du domaine. Si elle est trouvée, le paquet Client Hello sera chiffré. Veillez à utiliser un serveur DNS crypté doté de cette fonctionnalité.

**À propos des ClientHellos et ECH** : Toute connexion Internet chiffrée comporte une partie non chiffrée. Il s'agit du tout premier paquet qui contient le nom du serveur auquel vous vous connectez. La technologie Encrypted Client Hello est conçue pour résoudre ce problème en chiffrant ce paquet.

#### Vérification OCSP

Si cette option est activée, AdGuard vérifiera automatiquement l'état de révocation des certificats SSL avant de se connecter à un site web. Cette fonctionnalité nécessite l'activation du filtrage HTTPS.

Si la vérification est effectuée dans le délai imparti, AdGuard autorisera la connexion si le certificat est valide ou la bloquera immédiatement si le certificat a été révoqué.

Si la vérification prend trop de temps, AdGuard autorisera la connexion tout en continuant à vérifier l'état du certificat en arrière-plan. Si le certificat est révoqué, les connexions actuelles et futures au domaine seront bloquées.

#### Filtrer HTTP/3

Si cette option est activée, AdGuard filtrera les requêtes envoyées via HTTP/3 en plus des autres types de requêtes. Cette fonctionnalité nécessite l'activation du filtrage HTTPS.

**À propos de HTTP/3** : Il s’agit de la dernière version du protocole HTTP, basée sur QUIC.

**Limitations**:

- Les navigateurs basés sur Chrome n'acceptent pas les certificats utilisateur, le filtrage HTTP/3 n'y est donc pas pris en charge.
- Les navigateurs basés sur Firefox se comportent de manière similaire par défaut, mais vous pouvez définir l'option `network.http.http3.disable_when_third_party_roots_found` dans `about:config` sur `false` pour autoriser les certificats utilisateur pour HTTP/3.
- Safari prend en charge le filtrage HTTP/3 sans configuration supplémentaire.

### Proxy sortant

#### Afficher le paramètre « Filtrer les requêtes DNS »

Lorsque ce paramètre est activé, le bouton _Filtrer les requêtes DNS_ s'affiche dans la boîte de dialogue _Ajouter un serveur proxy_. Pour accéder à la boîte de dialogue, ouvrez **Paramètres**, puis accédez à **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**, puis cliquez sur _+ Ajouter un serveur proxy_. L'activation de ce paramètre permet de filtrer les requêtes DNS transitant par le proxy sortant spécifié.

### Protection

#### Plages de ports

Ce paramètre vous permet de définir les plages de ports à filtrer. Saisissez les plages de ports, une plage par ligne. Utilisez `..` pour spécifier la plage. Par exemple, `80..5221`.

#### Journaliser les événements HTML supprimés

Si ce paramètre est activé, AdGuard enregistrera les informations relatives aux éléments HTML bloqués dans _Activité récente_. Pour accéder aux logs, rendez-vous dans _Statistiques_ → _Activité récente_.

#### Débogage de scriptlets

Si ce paramètre est activé, l'application affichera des informations de débogage dans la console du navigateur. Dans ce mode, le débogage des scriptlets est activé, et le navigateur consigne les événements qui se produisent lors de l'application des règles de scriptlet.

#### Applications exclues

Ce paramètre vous permet de répertorier les paquets et les UID à exclure de la protection AdGuard. Saisissez les noms de paquets ou les UID, un par ligne. Vous pouvez utiliser `//` pour les commentaires.

#### Paquets de contournement QUIC

Ici, vous pouvez indiquer les noms des paquets pour lesquels AdGuard doit contourner le trafic QUIC. Saisissez les noms des paquets, un par ligne. Vous pouvez utiliser `//` pour les commentaires.

#### Reconfigurer le proxy automatique en cas de changement de réseau

Si cette option est activée, la protection AdGuard redémarrera afin de reconfigurer les paramètres du proxy automatique lorsque votre appareil se connectera à un autre réseau. Ce paramètre ne s'applique que lorsque le _Mode de routage_ est réglé sur _Proxy automatique_.

#### Filtrage IPv6

Si ce paramètre est activé, AdGuard filtrera les réseaux IPv6 lorsqu'une interface réseau IPv6 est disponible.

#### Plages IPv4 exclues du filtrage

Ici, vous pouvez indiquer les plages d'adresses IPv4 à exclure du filtrage. Saisissez une plage d'adresses IP par ligne. Vous pouvez utiliser `//` pour les commentaires.

#### Plages IPv6 exclues du filtrage

Ici, vous pouvez indiquer les plages d'adresses IPv6 à exclure du filtrage. Saisissez une plage d'adresses IP par ligne. Vous pouvez utiliser `//` pour les commentaires.

#### Maintien de connexion TCP pour les sockets sortants

Si ce paramètre est activé, AdGuard enverra une sonde de maintien de connexion après l’intervalle de temps spécifié afin de s’assurer que la connexion TCP est toujours active. Après un nombre défini par le système de tentatives infructueuses pour obtenir une réponse du serveur, le système fermera automatiquement la connexion TCP.

Ce paramètre vous permet de spécifier :

- **Temps d'inactivité**, en secondes, avant l'envoi de sondes de maintien de connexion TCP vers les sockets sortantes. La valeur par défaut est 0. Si vous rencontrez des problèmes liés au NAT, réglez ce paramètre sur 20.
- **Intervalle entre les sondes de maintien de connexion** pour un pair qui ne répond pas. La valeur par défaut est de 0 secondes.

### Paramètres VPN locaux

#### Délai de rétablissement pour un VPN révoqué

Ici, vous pouvez définir le délai en millisecondes avant qu'AdGuard ne tente de rétablir la protection VPN après que celle-ci a été désactivée par une application VPN tierce ou suite à la suppression du profil VPN. La valeur par défaut est de 5000 ms.

#### Report du délai de rétablissement du VPN après révocation

Ici, vous pouvez définir le délai en millisecondes avant qu'AdGuard ne reprogramme le rétablissement de la protection VPN après que celle-ci a été désactivée par une application VPN tierce ou suite à la suppression du profil VPN. La valeur par défaut est de 5000 ms.

#### MTU

Ici, vous pouvez définir l’unité de transmission maximale (MTU) de l’interface VPN. Il s'agit de la taille maximale du paquet de données utilisé par votre VPN local. La plage recommandée est de 1500 à 1900 octets.

#### Capture de paquets (PCAP)

Ce paramètre active la journalisation des interfaces TUN. Lorsqu'il est activé, AdGuard crée un fichier `timestamp.pcap`, par exemple 1682599851461.pcap, dans le répertoire du cache de l'application. Ce fichier répertorie tous les paquets réseau transmis via le VPN et peut être analysé à l'aide de l'outil Wireshark.

#### Inclure la passerelle Wi-Fi aux routes VPN

Si ce paramètre est activé, les adresses IP de la passerelle seront ajoutées aux routes VPN lorsque l'appareil est connecté au Wi-Fi.

#### Adresse IPv4

Ici, vous pouvez indiquer l'adresse IP qui sera utilisée pour créer une interface TUN. La valeur par défaut est `172.18.11.218`.

#### Forcer l'acheminement du LAN IPv4

Si ce paramètre est activé, AdGuard filtrera toutes les connexions LAN, y compris le trafic réseau IPv4 local, même si l'option _Acheminer toutes les connexions IPv4 LAN_ est activée.

#### Acheminer toutes les connexions LAN IPv4

Si ce paramètre est activé, AdGuard exclura les connexions LAN du filtrage pour les réseaux simples. Cela pourrait ne pas fonctionner pour les réseaux complexes. Ce paramètre ne s'applique que si l'option _Forcer l'acheminement du LAN IPv4_ est désactivée.

#### Adresse IPv6

Ici, vous pouvez indiquer l'adresse IP qui sera utilisée pour créer une interface TUN. La valeur par défaut est `2001:db8:ad:0:ff::`.

### Divers

#### Afficher les outils de développement sur l’écran principal

Si ce paramètre est activé, AdGuard affichera l'icône **Outils de développement** dans le coin supérieur droit de l'écran d'accueil de l'application.

**Outils de développement** est une section spécialisée disponible dans AdGuard pour Android v4.3 et versions ultérieures, conçue pour permettre une navigation et un passage rapide d'une fonctionnalité à l'autre. Permet d'activer ou de désactiver rapidement des filtres personnalisés, d'accéder aux logs, d'activer divers logs, et bien plus encore.

#### Mode interface utilisateur simplifié

Si ce paramètre est activé, AdGuard n'affichera que l'icône DNS sur l'écran d'accueil de l'application.

#### Détection de Samsung Pay

Si ce paramètre est activé, la protection AdGuard sera mise en pause lorsque vous ouvrirez l'application Samsung Pay. Les utilisateurs coréens nécessitent cette fonctionnalité car ils rencontrent [des problèmes avec Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) lorsque AdGuard est activé.

#### Afficher les applications clonées

Si ce paramètre est activé, vous pourrez change les paramètres de routage, de filtrage et de pare-feu pour les applications clonées dans _Gestions des applications_.
