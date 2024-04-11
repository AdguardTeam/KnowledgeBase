---
title: Páginas protegidas por el navegador
sidebar_position: 4
---

:::info

Este artículo trata sobre la extensión de navegador AdGuard, que protege solo tu navegador. Para proteger todo tu dispositivo, [descarga la aplicación AdGuard](https://adguard.com/download.html?auto=true)

:::

Cuando se utiliza una extensión web como la extensión de navegador AdGuard, existen ciertos dominios restringidos que prohíben el acceso o los permisos. Como resultado, las extensiones de bloqueo de anuncios no pueden interactuar ni modificar el contenido de estas páginas. Es decir, no se les permite bloquear anuncios y otros elementos molestos en estas páginas web.

## Restricciones de navegador Chromium

Los navegadores basados en Chromium, como Google Chrome, mantienen una lista de dominios restringidos a los que las extensiones no pueden acceder. Estos dominios incluyen:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URL que comienzan con `chrome://`, `chrome-extension://`o `https://chrome.google.com/webstore/`
- Archivos PDF
- Páginas donde Javascript está deshabilitado
- Páginas de advertencia de seguridad
- Páginas de error como errores 404 y errores de red
- URLs que comienzan con `view-source:` o `data:`

## Restricciones del navegador Firefox

De manera similar, el navegador Firefox tiene su propio conjunto de dominios restringidos donde no se permite el funcionamiento de extensiones. Estos dominios restringidos incluyen:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Modificar las restricciones en Firefox

Cambiar la configuración avanzada puede afectar la estabilidad y seguridad de Firefox. Esto se recomienda sólo para usuarios avanzados. Si conoces el riesgo asociado y aún deseas habilitar complementos no permitidos en una página protegida, sigue los pasos a continuación:

1. Haz clic en el botón de menú → **Complementos y temas** → **Extensiones**.
2. Haz clic en la extensión que deseas habilitar en sitios con restricciones (en este caso, AdGuard).
3. Selecciona **Permitir** en la sección **Ejecutar en sitios con restricciones**.

Alternativamente, puedes:

1. Abre una nueva pestaña y escribe **about:config** en la barra de direcciones.
2. Presiona **Regresar**. Es posible que encuentres una advertencia. En este caso, haz clic en **Aceptar el riesgo y continuar**.
3. Busca `extensiones.webextensions.restrictedDomains`. Si no puedes encontrar esta preferencia, puedes crearla. Simplemente selecciona el tipo **Boolean** y haz clic en **+** para agregarla.
4. Haz clic en el botón de alternancia junto a esta preferencia y cambia su valor a `falso`.
5. Reinicia Firefox.

Para obtener más información sobre este tema, lee [el artículo en el sitio web de soporte de Mozilla](https://mzl.la/3POXoWi).
