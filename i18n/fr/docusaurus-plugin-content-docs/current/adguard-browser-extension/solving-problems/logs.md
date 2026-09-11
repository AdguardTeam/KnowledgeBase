---
title: Comment exporter les journaux depuis la page d'arrière-plan
sidebar_position: 1
---

## Exportation des journaux depuis la page d'arrière-plan dans l'extension

### Chrome

1. Ouvrez l'extension de navigateur AdGuard et, si possible, répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.

2. Naviguez vers `chrome://extensions`.

3. Activez le _Mode développeur_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Ouvrez l'extension de navigateur AdGuard et, si possible, répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.

2. Accédez à `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Cliquez sur _Inspecter_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Envoi des journaux

:::note

AdGuard s'engage à protéger votre vie privée. Nous suivons strictement notre [Politique de confidentialité](https://adguard.com/privacy/browser-extension.html) et ne collectons aucune information privée sur les utilisateurs. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::

Maintenant que vous avez collecté les journaux, veuillez suivre ces étapes pour les soumettre à notre équipe de développement :

1. Signalez le bug sur [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Envoyez votre archive avec les journaux et la durée de lecture à `devteam@adguard.com` et ajoutez un lien vers votre problème GitHub. Vous pouvez également télécharger l'archive sur Google Drive et y ajouter le lien au lieu de joindre le fichier.
