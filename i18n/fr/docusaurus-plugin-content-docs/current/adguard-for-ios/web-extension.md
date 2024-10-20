---
title: Extension web Safari
sidebar_position: 3
---

Les extensions web ajoutent des fonctionnalités personnalisées à Safari. Vous pouvez trouver [plus d'informations sur les extensions web ici](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![À quoi ressemble l'extension web dans Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

L'extension web Safari d'AdGuard est un outil qui profite des nouvelles fonctionnalités d'iOS 15. Il sert à améliorer les capacités d'AdGuard pour iOS. Avec cela, AdGuard peut appliquer des règles de filtrage avancées et bloquer finalement plus de publicités.

## Ce qu'il fait

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

L'extension web Safari d'AdGuard complète AdGuard en lui donnant la possibilité d'utiliser ces types de règles de filtrage.

En plus de cela, l'extension web Safari d'AdGuard peut être utilisée pour gérer rapidement AdGuard pour iOS directement depuis le navigateur. Appuyez sur le bouton *Extensions* — c'est celui avec une icône en forme de puzzle, selon le type de votre appareil, elle peut être située à gauche ou à droite de la barre d'adresse. Recherchez **AdGuard** dans la liste et appuyez dessus.

![Menu de l'extension web *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

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

Une fois terminé, ouvrez *Paramètres → Safari → Extensions*.

![Sélectionnez "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Sélectionnez "Extensions" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Recherchez la section **AUTORISER CES EXTENSIONS** , puis recherchez **AdGuard** parmi les extensions disponibles.

![Sélectionnez "AdGuard" dans la section AUTORISER CES EXTENSIONS *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Appuyez dessus, puis activez le commutateur. Sur le même écran, définissez l'autorisation *Tous les sites web* pour AdGuard sur *Autoriser* ou *Demander*. Si vous choisissez *Autoriser*, vous n'aurez pas à donner votre autorisation à chaque fois que vous visiterez un nouveau site web. En cas de doute, choisissez *Demander* pour accorder des autorisations par site.

![Paramètres de l'extension *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### Dans Safari

You can also enable the AdGuard extension from the Safari browser. To do it, tap *Extensions* (if you don't see it next to the address bar, tap the `aA` icon).

![Dans Safari, appuyez sur l'icône A * mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Recherchez ensuite l'option *Gérer les extensions* dans la liste et appuyez dessus. Dans la fenêtre ouverte, activez le commutateur à côté de **AdGuard**.

![Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Si vous utilisez cette méthode, vous devrez peut-être accéder aux paramètres de Safari pour accorder de toute façon à l'extension AdGuard les autorisations nécessaires.

Vous devriez maintenant pouvoir voir AdGuard parmi les extensions disponibles. Appuyez dessus, puis sur l'icône jaune **i** . Activez la **Protection avancée** en appuyant sur le bouton *Activer* et en confirmant l'action.

:::note

Si vous utilisez AdGuard pour iOS sans abonnement Premium, vous ne pourrez pas activer la **Protection avancée**.

:::

Vous pouvez également activer la **Protection avancée** directement depuis l'application, dans l'onglet **Protection** (deuxième en partant de la gauche dans la rangée d'icônes du bas).

L'extension web Safari d'AdGuard ne fonctionne que sur les versions iOS 15 et ultérieures.
