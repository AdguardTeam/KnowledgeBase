---
title: Protection contre les maliciels et l'hameçonnage
sidebar_position: 3
---

Les victimes d'hameçonnage et de logiciels malveillants restent un problème courant. Pour améliorer la sécurité numérique, nous avons incorporé des filtres spéciaux dans les produits AdGuard pour vous protéger contre les sites web malveillants et ceux de phishing. À ce jour, nous avons catégorisé plus de 15 millions de sites et construit une base de données de 1,5 million de sites web connus pour hameçonnage et maliciels. À l'aide de cette base de données, AdGuard vérifie les sites web que vous visitez pour vous protéger contre les menaces en ligne.

:::note

Nous ne collectons ni n'utilisons aucune information sur les sites web que vous visitez.

:::

## How does AdGuard check websites?

Chaque fois que vous visitez un site web, votre client local échange des informations avec notre serveur backend sous forme de hachages et de préfixes de hachage. Sur la base de cet échange, le client local détermine si le site web figure ou non dans la base de données des sites web potentiellement dangereux. Il existe une différence dans la portée de cette vérification pour les applications et les extensions.

### Dans les applications

AdGuard offre la meilleure protection possible en inspectant à la fois les pages et tous les objets qui y sont chargés. AdGuard vérifie les URL et les noms de domaine à l'aide de préfixes de hachage, et non des URL complètes, de sorte que nos serveurs ne conservent aucune information sur les sites Web que vous visitez et que vos informations personnelles sont totalement sécurisées. Nos serveurs répondent à la requête de l'application avec une liste de toutes les adresses possibles correspondant au préfixe de hachage. Lorsqu'une menace potentielle est détectée grâce à des correspondances de hachage, l'accès à ce site web est immédiatement bloqué.

![DNS warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### Dans les extensions de navigateur

Nos extensions de navigateur ne peuvent vérifier que les noms de domaine, pas les URL complètes. Ils ne sont pas non plus en mesure de vérifier les sous-requêtes. Cela signifie que s'il y a des éléments potentiellement malveillants sur la page, ils seront chargés même si la page elle-même provient d'un domaine sûr. L’extension ne pourra pas s’en protéger. Il est également important de noter que la vérification effectuée est asynchrone, c'est-à-dire qu'elle se produit en même temps que le chargement de la page, il est donc possible que des logiciels malveillants soient également chargés.

## Paramétrage de la protection contre l'hameçonnage et les maliciels dans les produits AdGuard

- **Pour Windows**: Activez le module *Sécurité de navigation* dans le menu *Paramètres*

![Navigation sécurisée dans Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Pour Mac**: Activez le module *Sécurité* dans *Préférences*

![Sécurité sur Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Pour Android**: Activez *Navigation sécurisée* dans l'onglet *Protection*

![Navigation sécurisée sous Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Pour iOS**: Bien qu'il n'y ait pas de module séparé, vous pouvez aller dans *Protection Safari* → *Filtres* → *Sécurité* et activer les filtres disponibles. En outre, activez la *Protection DNS* et sélectionnez l'un des serveurs DNS AdGuard

![Sécurité sous iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Pour les extensions de navigateur** : Activez la *protection contre l'hameçonnage et les maliciels* dans l'onglet *Paramètres*. Pour une protection renforcée, accédez à *Filtres* → *Sécurité* et activez les filtres disponibles

![Protection contre les maliciels et l'hameçonnage](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Pour le DNS AdGuard privé :** Activez la protection contre les logiciels malveillants dans *Paramètres du serveur* sous *Sécurité*

![Sécurité dans DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Ce que nous bloquons

Nous maintenons deux filtres principaux : un qui protège contre l'hameçonnage et les sites web frauduleux qui tentent de voler les informations d'identification des utilisateurs, et un autre qui bloque l'accès aux sites web connus pour distribuer des maliciels, ce qui pourrait entraîner une perte de données, des fuites d'informations ou des dommages à votre appareil. Ces filtres vous protègent également des sites web des escrocs proposant des stratagèmes frauduleux. Pour des informations plus détaillées, voir l'[article de Wikipédia](https://en.wikipedia.org/wiki/Phishing).

## Entretien de nos filtres

AdGuard gère une vaste base de données de sites web d'hameçonnage et de logiciels malveillants, et elle est mise à jour régulièrement et automatiquement à mesure que de nouvelles menaces sont découvertes. Nous recueillons des informations à partir des sources fiables et de qualité, à la fois publiques et provenant d'autres entreprises, et les regroupons dans une base de données commune sur les sites dangereux.

Nous analysons automatiquement les plaintes concernant les sites web suspects et passons beaucoup de temps à maintenir la base de données à jour, à nettoyer les faux positifs et à mettre en place des mécanismes pour les éviter à l'avenir.

### Want to help?

Nous apprécions toute votre aide ! Si vous rencontrez un site d'hameçonnage ou de maliciels, veuillez le signaler à <support@adguard.com>.

### False-positive responses

Il arrive que des sites web non malveillants soient ajoutés aux filtres d'AdGuard. Nous faisons de notre mieux pour réduire le pourcentage de faux positifs, mais il y en a toujours. Si vous rencontrez ce comportement de la part d'AdGuard, veuillez signaler le faux positif à notre assistance technique à <support@adguard.com>.

## Si vous avez des doutes sur un site web

Si vous pensez qu'un site web donné peut être dangereux, vérifiez-le d'abord à l'aide de notre [outil de vérification de la sécurité](https://reports.adguard.com/welcome.html).

![Contrôle de sécurité](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
