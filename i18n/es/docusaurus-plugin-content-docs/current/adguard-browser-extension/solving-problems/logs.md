---
title: Cómo exportar registros desde la página en segundo plano
sidebar_position: 1
---

## Exportación de registros desde la página en segundo plano de la extensión

### Chrome

1. Abre la extensión de navegador AdGuard y, si es posible, repite las acciones que provocaron el error. Anota la hora exacta en que ocurrió el error.

2. Ve a `chrome://extensions`.

3. Activa el _Modo desarrollador_.

   ![Modo desarrollador \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Haz clic en `background.html`.

   ![Background \*borde](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Abre la pestaña _Consola_.

   ![La pestaña Consola \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Abre el menú contextual y selecciona _Guardar como…_.

   ![Guardar como \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Abre la extensión de navegador AdGuard y, si es posible, repite las acciones que provocaron el error. Anota la hora exacta en que ocurrió el error.

2. Ve a `about:addons`.

3. Haz clic en _Depurar complementos_.

   ![Depurar complementos \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Haz clic en _Inspeccionar_.

   ![Inspeccionar \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Ve a la pestaña _Consola_.

   ![Consola \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Haz clic en _Guardar todos los mensajes en un archivo_.

   ![Guardar \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Enviar registros

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
