---
title: Problèmes liés aux certificats
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour pouvoir filtrer le trafic HTTPS et bloquer efficacement les publicités et les traqueurs, AdGuard génère un certificat racine spécial (et unique) et l'installe dans le stockage du système. Vous pouvez en apprendre davantage sur les raisons pour lesquelles un certificat est requis en lisant [cet article](/general/https-filtering/what-is-https-filtering).

Normalement, les navigateurs font confiance au certificat AdGuard une fois qu'il est ajouté au stockage des certificats du système pendant le processus d'installation. Mais dans certains cas, cela n'est pas suffisant et vous pouvez rencontrer des avertissements ou des erreurs. Cela se produit le plus souvent dans les navigateurs basés sur Firefox comme Mozilla Firefox, PaleMoon, Waterfox, etc., ou dans Yandex.Browser.

## Erreur de *Risque de sécurité potentiel* dans les navigateurs basés sur Firefox

![Erreur de risque de sécurité](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Les anciennes versions de FireFox, ainsi que les navigateurs qui en sont basés, ne font pas confiance aux certificats du stockage système, mais uniquement à ceux de leur stockage local. Depuis la v68, Firefox fait confiance aux certificats système, mais vous pouvez encore rencontrer l'erreur "La connexion n'est pas fiable". Si quelque chose comme cela se produit, essayez d'abord de cliquer sur le bouton *Réinstaller le certificat* — vous le trouverez dans l' *onglet réseau*.

![Réinstallation du certificat](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Si cela ne vous aide pas, suivez les instructions pour ajouter manuellement le certificat AdGuard au stockage de Firefox.

> Ce manuel est standard pour tous les navigateurs Firefox. Les noms des boutons et des éléments de menu peuvent différer dans d'autres navigateurs basés sur Firefox.

1. Démarrez AdGuard.

1. Allez à [http://local.adguard.org/cert](http://local.adguard.org/cert) et cliquez sur le bouton *Télécharger*. Le navigateur devrait commencer à télécharger le fichier **cert.cer**.

    :::note

    Vous pouvez également ouvrir la page de téléchargement en cliquant sur le lien via l'application AdGuard à *Paramètres → Réseau → Filtrage HTTPS*.


:::

    ![Paramètres du certificat](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Ouvrez votre navigateur, puis ouvrez les *Paramètres*.

1. Allez à l'onglet *Confidentialité & Sécurité*.

1. Faire défiler vers le bas jusqu'à *Certificats* et cliquez sur le bouton *Voir les certificats*.

    ![Affichage de la fenêtre des certificats](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Sélectionnez l'onglet *Autorités*.

1. Cliquez sur *Importer...*.

    ![Paramètres du certificat — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Parcourez le fichier téléchargé **cert.cer** et cliquez sur *Ouvrir*.

1. Cochez la case *Faites confiance à cette autorité de certification pour identifier les sites Web* puis cliquez sur *OK*.

    ![Paramètres du certificat — case à cocher](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Vous avez installé le certificat AdGuard. Redémarrez le navigateur et l'erreur devrait disparaître.

## Avertissement de certificat de Yandex.Browser

Si vous utilisez à la fois AdGuard pour Windows et Yandex.Browser, vous avez peut-être rencontré cet avertissement :

![Avertissement de certificat Yandex](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Pourquoi cela se passe-t-il

AdGuard et Yandex prennent tous deux très au sérieux la sécurité des utilisateurs sur Internet. La politique actuelle de Yandex est d'avertir leurs utilisateurs de tout certificat qui n'est pas reconnu par le navigateur. Ce n’est pas sans fondement, car parfois des applications malveillantes peuvent injecter leurs propres certificats et les utiliser pour nuire au système et voler des données privées.

Cependant, AdGuard ajoute également son certificat à ceux de confiance. Cela mène au message d'avertissement que vous avez rencontré.

### Comment résoudre le problème

La manière la plus simple est de cliquer sur le bouton **Aller au site**. Cela indiquera à Yandex.Browser de se souvenir du certificat AdGuard en tant que certificat de confiance, au moins pour un certain temps. Normalement, vous ne devriez plus voir ce message, mais il n'est pas impossible qu'il apparaisse occasionnellement, pour quelque raison que ce soit. Dans de tels cas, appuyez simplement à nouveau sur le même bouton *(assurez-vous qu'il s'agit du certificat d'AdGuard !)*.

Désactiver le filtrage HTTPS dans AdGuard empêchera également Yandex.Browser d'afficher ce message à nouveau, mais cela a un prix : toutes les publicités chargées par HTTPS (y compris les **publicités propres à Yandex**) s'afficheront — sur des sites Web tels que YouTube, Facebook, Instagram, et bien d'autres. Nous déconseillons fortement cela si vous souhaitez maintenir la qualité du blocage de publicité élevée.
