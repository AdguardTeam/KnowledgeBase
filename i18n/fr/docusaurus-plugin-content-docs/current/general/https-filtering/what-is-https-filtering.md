---
title: Qu'est-ce que le filtrage HTTPS
sidebar_position: 1
---

### Qu'est-ce que HTTPS ?

HTTPS (HyperText Transfer Protocol Secure) est une extension du protocole HTTP qui prend en charge le cryptage pour accroître la sécurité. Ce protocole est utilisé pour transmettre en toute sécurité des informations précieuses telles que des données personnelles, des informations de carte bancaire, etc.

L’utilisation du protocole HTTPS est très avantageuse car le trafic crypté est protégé contre les écoutes clandestines par des tiers, et nous ne pouvons que nous en réjouir. L'acceptation du protocole HTTPS a augmenté ces dernières années, principalement parce qu'il est [encouragé par Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) et également en raison de l'émergence de l'autorité de certification gratuite [Let's Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

Le diagramme ci-dessous décrit la différence entre le protocole HTTP simple et le protocole HTTPS sécurisé.

![Qu'est-ce que HTTPS ?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Qu'est-ce qu'un certificat de sécurité ?

En termes simples, HTTPS signifie cryptage des données. Mais un problème subsiste : comment être sûr d'avoir établi une connexion cryptée avec le bon site web ? C’est là que les certificats de sécurité entrent en jeu. Un certificat sert de preuve que le site web est vraiment qui ou ce qu'il prétend être. Si un site web ne dispose pas d'un tel certificat, ou si le certificat contient des informations incorrectes, le navigateur ne vous permettra pas d'établir une connexion sécurisée. Il est important que le certificat utilisé par un site web soit émis par une autorité de certification (AC) à laquelle votre navigateur fait confiance. Une telle autorité de certification garantit que le certificat SSL est bien délivré au propriétaire du site web.

### Pourquoi AdGuard doit-il pouvoir filtrer HTTPS ?

La plupart des sites web utilisent désormais HTTPS, et il en va de même pour la publicité. Voici quelques sites web populaires sur lesquels vous ne pouvez pas supprimer les publicités sans filtrage HTTPS : youtube.com, facebook.com et x.com.

### Comment fonctionne le filtrage HTTPS ?

Si c'était facile, HTTPS ne serait pas aussi sécurisé. Lorsqu'un navigateur tente de se connecter à un serveur, AdGuard établit deux connexions sécurisées : une avec le navigateur (ou une autre application) et l'autre avec le serveur. Le navigateur doit faire confiance à AdGuard et aux connexions qu'il crée. À cette fin, AdGuard génère un certificat racine spécial (et unique) et l'installe dans le système et, le cas échéant, dans certains navigateurs (par exemple, dans Firefox). AdGuard peut désormais voir les paquets de données à l'intérieur de la connexion sécurisée et ainsi faire son travail : bloquer les publicités et les traqueurs.

Pour une meilleure compréhension, nous avons représenté ce processus :

![How HTTPS filtering works](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Mon trafic reste-t-il crypté et sécurisé ?

Bien sûr ! Votre connexion avec un serveur distant reste cryptée et sécurisée. AdGuard, just like a browser, checks the server’s certificate before determining if the connection should be filtered or not.

Pourtant, le filtrage HTTPS présente ses inconvénients. Le plus important est qu'il cache au navigateur le certificat réel du site web. À la place, le navigateur voit le certificat émis par AdGuard.

C'est pourquoi nous avons pris des mesures supplémentaires pour améliorer la sécurité des connexions.

### Les sites web financiers et sites web contenant des données personnelles sensibles

Par défaut, AdGuard ne filtre aucune information sur les sites web des banques, des systèmes de paiement ou des sites web contenant des données personnelles précieuses. Nous tenons à jour une liste de [milliers d'exclusions](https://github.com/AdguardTeam/HttpsExclusions).

Si vous pensez qu'un site web devrait être ajouté à cette liste, n'hésitez pas à [nous le faire savoir](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certificats EV (Extended Validation)

AdGuard vous permet de désactiver le filtrage pour tous les sites web qui utilisent des certificats de validation étendue.

Un certificat EV offre un niveau de sécurité plus élevé et fournit davantage de garanties qu'un certificat ordinaire, prouvant que le site web n'est pas frauduleux ou faux.

### Problèmes liés au filtrage HTTPS

A [2017 study](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) found that 5 to 10% of HTTPS connections were established by HTTPS filtering applications. Cela est généralement effectué par des types différents de logiciels antivirus. La mauvaise nouvelle est que 24 des 26 antivirus testés ont réduit, de diverses manières, le niveau de sécurité des connexions, tandis que les deux tiers ont créé des connexions sujettes au piratage.

Les chercheurs sont arrivés à une conclusion simple : la communauté de sécurité Internet devrait prêter une attention particulière aux applications qui filtrent les connexions sécurisées. Les développeurs de ces logiciels doivent accorder une attention particulière à la qualité de la mise en œuvre du filtrage.

Nous tenons à souligner qu’AdGuard n’a pas été testé dans l’étude ci-dessus. Nous avons effectué des estimations conformément à leur série de tests, et au moment des tests, nous aurions pu recevoir la note maximale - A\*. Cependant, ce score n’est pas parfait. Au cours de l’étude, les chercheurs ont identifié certains problèmes qui ont été omis dans l’évaluation finale.

Chez AdGuard, nous sommes entièrement d’accord avec ces conclusions. De plus, nous souhaitons être aussi ouverts que possible avec les utilisateurs et parler des problèmes que nous rencontrons actuellement et des mesures que nous prenons pour améliorer la qualité et la sécurité du mécanisme de filtrage. La liste de ces problèmes est triée par priorité.

La plupart des problèmes découverts dans l’étude ci-dessus sont liés aux mécanismes de validation des certificats. C’est sur cela que nous voulons nous concentrer en premier. Nous travaillons sur une bibliothèque de validation de certificats séparée. De plus, nous souhaitons la rendre open source. Un [article séparé](../known-issues) énumère tous les inconvénients connus du filtrage HTTPS dans AdGuard et nos plans pour les corriger.

#### Problèmes de filtrage HTTPS sur Android 7+

[À partir d'Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), les développeurs doivent indiquer explicitement que leurs applications font confiance aux certificats installés par l'utilisateur. Tout le monde ne souhaite pas le faire ou ne s'en préoccupe pas. Qu'est-ce que cela signifie pour AdGuard ? AdGuard installe un certificat utilisateur pour pouvoir filtrer le trafic HTTPS. Si une application ne fait pas confiance à ce certificat, son trafic HTTPS ne sera pas filtré. Alors que faire ?

La première chose à mentionner est que de nombreuses applications (même modernes) font encore confiance aux certificats d'utilisateur. Rien n’a changé à cet égard. Presque tous les navigateurs font également confiance à ces certificats. Il existe peut-être des navigateurs exotiques qui ne le font pas, mais ils constituent une rare exception à la pratique courante.

Enfin, si votre appareil est rooté, vous pouvez déplacer le certificat AdGuard vers le stockage système. De cette façon, vous n’avez pas à vous soucier des autorisations qu’une application particulière peut ou non avoir : le trafic HTTPS sera filtré pour les applications modernes ainsi que pour les plus anciennes. Veuillez garder à l'esprit que dans ce cas, certaines restrictions de sécurité supplémentaires (par exemple, HPKP ou `Expect-CT`) s'appliquent à AdGuard.

### Comment vérifier manuellement la qualité HTTPS ?

Il existe plusieurs sites web dédiés où vous pouvez vérifier la qualité de votre connexion HTTPS. Ces sites web vérifient si votre navigateur (ou, dans notre cas, votre navigateur plus AdGuard) est susceptible d'être affecté par des vulnérabilités courantes. If you plan to use any program that filters HTTPS, not necessarily AdGuard (e.g., an antivirus), we advise that you check the connection quality using these websites.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
