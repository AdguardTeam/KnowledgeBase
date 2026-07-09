---
title: Extension web Safari
sidebar_position: 3
---

Les extensions web ajoutent des fonctionnalités personnalisées à Safari. Vous pouvez trouver [plus d'informations sur les extensions web ici](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![À quoi ressemble l'extension web dans Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

L'extension web Safari d'AdGuard est un outil qui profite des nouvelles fonctionnalités d'iOS 15. Il sert à améliorer les capacités d'AdGuard pour iOS. Avec cela, AdGuard peut appliquer des règles de filtrage avancées et bloquer finalement plus de publicités.

## Ce qu'il fait

Par défaut, Safari ne fournit que des outils de base aux bloqueurs de contenu. Ces outils ne proposent pas le niveau de performance trouvé dans les bloqueurs de contenu sur d'autres systèmes d'exploitation (Windows, Mac, Android). Par exemple, les applications AdGuard sur d'autres plateformes peuvent utiliser des outils anti-publicité puissants comme [les règles CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [les sélecteurs Extended CSS](/general/ad-filtering/create-own-filters#extended-css-selectors) et [les scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Malheureusement, ces utilitaires sont absolument irremplaçables lorsqu’il s’agit de cas plus complexes, tels que les publicités pré-roll sur YouTube.

L'extension web Safari d'AdGuard complète AdGuard en lui donnant la possibilité d'utiliser ces types de règles de filtrage.

En plus de cela, l'extension web Safari d'AdGuard peut être utilisée pour gérer rapidement AdGuard pour iOS directement depuis le navigateur. Appuyez sur le bouton *Extensions* — c'est celui avec une icône en forme de puzzle, selon le type de votre appareil, elle peut être située à gauche ou à droite de la barre d'adresse. Recherchez **AdGuard** dans la liste et appuyez dessus.

![Menu de l'extension web *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Sur les iPads, l'extension web Safari d'AdGuard est accessible directement en appuyant sur l'icône AdGuard dans la barre d'adresse du navigateur.

Vous verrez la liste d’options suivante :

- **Activation/désactivation de la protection sur le site**. La désactivation de l'interrupteur désactivera complètement AdGuard pour le site web actuel et ajoutera une règle d'exclusion correspondante. Le fait de réactiver l'interrupteur rétablira la protection du site web et supprimera la règle. Un tel changement prendra un certain temps pour prendre effet.

- **Blocage manuel des éléments sur la page**. Appuyez sur le bouton *Bloquer les éléments sur cette page* pour afficher une fenêtre contextuelle de blocage des éléments. Sélectionnez un élément de la page que vous souhaitez masquer, ajustez la zone de sélection, puis prévisualisez les modifications et confirmez la suppression. Une règle de filtrage correspondante sera ajoutée à AdGuard (que vous pourrez ultérieurement désactiver ou supprimer pour annuler la modification).

- **Signaler un problème** . Balayez vers le haut pour faire apparaître le bouton *Signaler un problème*. Utilisez-le pour signaler une annonce manquée ou tout autre problème rencontré sur la page en cours.

## Comment activer l'extension web Safari d'AdGuard

:::note

L'extension web Safari d'AdGuard nécessite l'accès au contenu des pages web pour fonctionner, mais ne l'utilise pas à d'autres fins que le blocage des publicités.

:::

### Dans les paramètres iOS

L'extension web n'est pas un outil autonome et nécessite AdGuard pour iOS. Si AdGuard pour iOS n'est pas installé sur votre appareil, veuillez [l'installer d'abord](../installation) et terminer le processus d'intégration pour le préparer au travail.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### Dans Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
