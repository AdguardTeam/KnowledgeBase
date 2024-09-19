---
title: Comment exporter les journaux depuis la page d'arrière-plan
sidebar_position: 1
---

## Exportation des journaux depuis la page d'arrière-plan dans l'extension

### Chrome

1. Ouvrez l'extension de navigateur AdGuard et, si possible, répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.

2. Naviguez vers `chrome://extensions`.

3. Activez le _Mode développeur_.

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Cliquez sur `background.html`.

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Ouvrez l'onglet _Console_.

   ![L'onglet Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Ouvrez le menu contextuel et sélectionnez _Enregistrer sous…_.

   ![Enregistrer sous \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Ouvrez l'extension de navigateur AdGuard et, si possible, répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.

2. Accédez à `about:addons`.

3. Cliquez sur _Déboguer modules additionnels_.

   ![Déboguer modules additionnels \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Cliquez sur _Inspecter_.

   ![Inspecter \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Allez dans l'onglet _Console_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Cliquez sur _Enregistrer tous les messages dans un fichier_.

   ![Enregistrer \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Envoi des journaux

:::note

AdGuard s'engage à protéger votre vie privée. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
