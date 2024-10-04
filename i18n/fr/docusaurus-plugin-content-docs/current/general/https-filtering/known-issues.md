---
title: Problèmes connus
sidebar_position: 2
---

Dernière mise à jour : 20 septembre 2022

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

Ce problème est résolu dans [l'Assistant de navigateur](https://adguard.com/adguard-assistant/overview.html). Cette extension de navigateur vous aide à gérer le filtrage directement à partir du navigateur et vous permet d'inspecter le certificat original de n'importe quel site web.

### Transparence des certificats

Grâce à la cryptographie moderne, les navigateurs peuvent généralement détecter les sites web malveillants dotés de faux certificats SSL. Toutefois, les mécanismes cryptographiques actuels ne permettent pas de détecter les sites web malveillants s'ils sont dotés de certificats émis par erreur ou par une autorité de certification (AC) compromise ou malhonnête. La transparence des certificats vise à remédier à ces menaces en rendant l'émission et l'existence des certificats SSL accessibles aux propriétaires de domaines, aux autorités de certification et aux utilisateurs de domaines.

Les produits AdGuard qui utilisent [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) à partir de la version **1.11** implémenteront une politique basée sur [Politique de transparence des certificats Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Vous avez des remarques ou des suggestions ?

Si vous souhaitez ajouter quelque chose, signaler des erreurs ou poser une question, veuillez nous contacter à : `devteam@adguard.com`.
