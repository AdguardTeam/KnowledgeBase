---
title: Protection contre les maliciels et l'hameçonnage
sidebar_position: 3
---

Les victimes d'hameçonnage et de logiciels malveillants restent un problème courant. Pour améliorer la sécurité numérique, nous avons incorporé des filtres spéciaux dans les produits AdGuard pour vous protéger contre les sites web malveillants et ceux de phishing. À ce jour, nous avons catégorisé plus de 15 millions de sites et construit une base de données de 1,5 million de sites web connus pour hameçonnage et maliciels. À l'aide de cette base de données, AdGuard vérifie les sites web que vous visitez pour vous protéger contre les menaces en ligne.

:::note importante

Nous ne collectons ni n'utilisons aucune information sur les sites web que vous visitez.

:::

## Comment AdGuard vérifie-t-il les sites web ?

Chaque fois que vous visitez un site web, votre client local échange des informations avec notre serveur backend sous forme de hachages et de préfixes de hachage. Sur la base de cet échange, le client local détermine si le site web figure ou non dans la base de données des sites web potentiellement dangereux. Il existe une différence dans la portée de cette vérification pour les applications et les extensions.

### Dans les applications

AdGuard offre la meilleure protection possible en inspectant à la fois les pages et tous les objets qui y sont chargés. AdGuard vérifie les URL et les noms de domaine à l'aide de préfixes de hachage, et non des URL complètes, de sorte que nos serveurs ne conservent aucune information sur les sites Web que vous visitez et que vos informations personnelles sont totalement sécurisées. Nos serveurs répondent à la requête de l'application avec une liste de toutes les adresses possibles correspondant au préfixe de hachage. Lorsqu'une menace potentielle est détectée grâce à des correspondances de hachage, l'accès à ce site web est immédiatement bloqué.

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

Nos extensions de navigateur ne peuvent vérifier que les noms de domaine, pas les URL complètes. Ils ne sont pas non plus en mesure de vérifier les sous-requêtes. Cela signifie que s'il y a des éléments potentiellement malveillants sur la page, ils seront chargés même si la page elle-même provient d'un domaine sûr. L’extension ne pourra pas s’en protéger. Il est également important de noter que la vérification effectuée est asynchrone, c'est-à-dire qu'elle se produit en même temps que le chargement de la page, il est donc possible que des logiciels malveillants soient également chargés.

## Paramétrage de la protection contre l'hameçonnage et les maliciels dans les produits AdGuard

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Protection contre les maliciels et l'hameçonnage](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Ce que nous bloquons

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Entretien de nos filtres

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Vous souhaitez nous aider ?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### Réponses faussement positives

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## Si vous avez des doutes sur un site web

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
