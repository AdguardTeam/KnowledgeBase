---
title: Problèmes connus
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

La compréhension de cet article peut nécessiter des connaissances de base sur le chiffrement, TLS et HTTPS.

Tout d’abord, regardez ce diagramme simple qui montre la structure générale du protocole HTTPS :

![Qu'est-ce que le filtrage HTTPS ?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copie les propriétés de la connexion TLS utilisée par votre navigateur :

- AdGuard utilise la même version TLS
- AdGuard utilise les mêmes méthodes de cryptage (ciphers) que votre navigateur

En effet, cela signifie que si vous utilisez un navigateur moderne et sécurisé, il prendra en compte tous les problèmes TLS connus et ne tentera pas d'utiliser des chiffrements non sécurisés.

**Que fait AdGuard en cas de doute sur la validité du certificat ?** Dans de tels cas, AdGuard arrête complètement de filtrer toutes les connexions à ce domaine et laisse le navigateur en charge de toutes les décisions.

## Problèmes connus

Le filtrage HTTPS dans AdGuard présente ses inconvénients. La quasi-totalité d'entre eux devraient être éliminés dans les prochaines versions d'AdGuard.

Tous les problèmes que nous connaissons et les dates de résolution estimées sont répertoriés ci-dessous.

### Inspection du certificat original

L'inconvénient le plus important du mécanisme de filtrage HTTPS est qu'il cache le véritable certificat d'un site web. Vous ne pouvez pas simplement vérifier son certificat d'origine car vous ne pouvez voir que celui émis par AdGuard.

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparence des certificats

Grâce à la cryptographie moderne, les navigateurs peuvent généralement détecter les sites web malveillants dotés de faux certificats SSL. Toutefois, les mécanismes cryptographiques actuels ne permettent pas de détecter les sites web malveillants s'ils sont dotés de certificats émis par erreur ou par une autorité de certification (AC) compromise ou malhonnête. La transparence des certificats vise à remédier à ces menaces en rendant l'émission et l'existence des certificats SSL accessibles aux propriétaires de domaines, aux autorités de certification et aux utilisateurs de domaines.

Les produits AdGuard qui utilisent [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) à partir de la version **1.11** implémenteront une politique basée sur [Politique de transparence des certificats Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Vous avez des remarques ou des suggestions ?

Si vous souhaitez ajouter quelque chose, signaler des erreurs ou poser une question, veuillez nous contacter à : `devteam@adguard.com`.
