---
title: Problèmes liés aux certificats
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour pouvoir filtrer le trafic HTTPS et bloquer efficacement les publicités et les traqueurs, AdGuard génère un certificat racine spécial (et unique) et l'installe dans le stockage du système. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Normalement, les navigateurs font confiance au certificat AdGuard une fois qu'il est ajouté au stockage des certificats du système pendant le processus d'installation. Mais dans certains cas, cela n'est pas suffisant et vous pouvez rencontrer des avertissements ou des erreurs. Cela se produit le plus souvent dans les navigateurs basés sur Firefox comme Mozilla Firefox, PaleMoon, Waterfox, etc., ou dans Yandex.Browser.

Here are some common issues:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Les anciennes versions de FireFox, ainsi que les navigateurs qui en sont basés, ne font pas confiance aux certificats du stockage système, mais uniquement à ceux de leur stockage local. Depuis la v68, Firefox fait confiance aux certificats système, mais vous pouvez encore rencontrer l'erreur "La connexion n'est pas fiable". If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Si cela ne vous aide pas, suivez les instructions pour ajouter manuellement le certificat AdGuard au stockage de Firefox.

> Ce manuel est standard pour tous les navigateurs Firefox. Les noms des boutons et des éléments de menu peuvent différer dans d'autres navigateurs basés sur Firefox.

1. Démarrez AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Vous avez installé le certificat AdGuard. Redémarrez le navigateur et l'erreur devrait disparaître.

## Avertissement de certificat de Yandex.Browser

Si vous utilisez à la fois AdGuard pour Windows et Yandex.Browser, vous avez peut-être rencontré cet avertissement :

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Pourquoi cela se passe-t-il

AdGuard et Yandex prennent tous deux très au sérieux la sécurité des utilisateurs sur Internet. La politique actuelle de Yandex est d'avertir leurs utilisateurs de tout certificat qui n'est pas reconnu par le navigateur. Ce n’est pas sans fondement, car parfois des applications malveillantes peuvent injecter leurs propres certificats et les utiliser pour nuire au système et voler des données privées.

Cependant, AdGuard ajoute également son certificat à ceux de confiance. Cela mène au message d'avertissement que vous avez rencontré.

### Comment résoudre le problème

The easiest way is to click the **Go to site** button. Cela indiquera à Yandex.Browser de se souvenir du certificat AdGuard en tant que certificat de confiance, au moins pour un certain temps. Normalement, vous ne devriez plus voir ce message, mais il n'est pas impossible qu'il apparaisse occasionnellement, pour quelque raison que ce soit. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Nous déconseillons fortement cela si vous souhaitez maintenir la qualité du blocage de publicité élevée.

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
