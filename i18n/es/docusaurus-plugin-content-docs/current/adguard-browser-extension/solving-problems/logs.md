---
title: Cómo exportar registros desde la página en segundo plano
sidebar_position: 1
---

## Exportación de registros desde la página en segundo plano de la extensión

### Chrome

1. Abre la extensión de navegador AdGuard y, si es posible, repite las acciones que provocaron el error. Anota la hora exacta en que ocurrió el error.

2. Ve a `chrome://extensions`.

3. Activa el _Modo desarrollador_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Abre la extensión de navegador AdGuard y, si es posible, repite las acciones que provocaron el error. Anota la hora exacta en que ocurrió el error.

2. Ve a `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Haz clic en _Inspeccionar_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Enviar registros

:::note

AdGuard se compromete a proteger tu privacidad. Seguimos estrictamente nuestra [Política de Privacidad](https://adguard.com/privacy/browser-extension.html) y no recopilamos ninguna información privada sobre los usuarios. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener información adicional que no deseas compartir. Si contiene información personal, te recomendamos que la elimines primero.

:::

Ahora que has recopilado los registros, sigue estos pasos para enviarlos a nuestro equipo de desarrollo:

1. Informa el error en [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Envía tu archivo con los registros y el tiempo de reproducción a `devteam@adguard.com` y añade un enlace a tu GitHub issue. También puedes cargar el archivo en Google Drive y agregarle el enlace en lugar de adjuntar el archivo.
