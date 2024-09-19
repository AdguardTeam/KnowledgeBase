---
title: Userscripts
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Modifican o amplían la funcionalidad de uno o más sitios web. Es posible que muchos usuarios de AdGuard ya estén familiarizados con scripts de usuario como AdGuard Assistant, Popup Blocker y AdGuard Extra.

:::note Aplicaciones compatibles

AdGuard puede ampliar significativamente la funcionalidad del sitio web al actuar como administrador de scripts de usuario. Puedes agregar tus scripts personalizados o administrar los existentes en nuestros tres productos: [AdGuard para Windows](/adguard-for-windows/features/extensions), [AdGuard para Android](/adguard-for-android/features/settings#userscripts)y [ y AdGuard para Mac](/adguard-for-mac/features/extensions).

:::

## Scripts de AdGuard recomendados

Estos scripts de usuario provienen directamente de los desarrolladores de AdGuard y podemos garantizar que son efectivos y seguros. Para algunos de los scripts de usuario desarrollados por terceros que consideramos buenos y confiables, [desplázate hacia abajo hasta la siguiente sección](#top-picks). También puedes encontrar algunos de los [sitios web populares con scripts](#more-userscripts) a continuación, pero recuerda que cada vez que descargas un script de usuario de una fuente desconocida, te expones a cierto riesgo, ya que algunos scripts pueden ser dañinos a tu computadora.

### AdGuard Extra

Una extensión que bloquea anuncios en casos difíciles cuando el enfoque habitual basado en filtros no es suficiente. AdGuard Extra viene preinstalado con todas las versiones premium de AdGuard, por lo que no necesitas hacer nada para habilitarlo. Sin embargo, si deseas utilizarlo junto con la extensión de navegador AdGuard o cualquier otro bloqueador de anuncios, necesitarás utilizar una extensión adicional. Obtén más información sobre este script de usuario y cómo instalarlo en [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard Popup Blocker

El nombre habla por sí solo: bloquea las ventanas emergentes, uno de los tipos de anuncios más molestos en las páginas web. Obtén más información sobre este script de usuario, sus características clave y cómo instalarlo en [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard Assistant (versión antigua)

Esta extensión personalizada está diseñada para controlar el filtrado directamente desde la página del navegador (bloqueo manual, exclusión del sitio, etc.).

:::note

Esta versión del Asistente es heredada y no tiene sentido usarla en sistemas nuevos, ya que ha sido reemplazada por el [Asistente de navegador](https://adguard.com/adguard-assistant/overview.html)completo. Pero el Asistente antiguo puede ser de ayuda si no hay un Asistente de navegador para tu navegador. Si este es tu caso, puedes aprender cómo instalar AdGuard Assistant en [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Deshabilitar AMP

Un script que sólo está preinstalado en AdGuard para Android. Desactiva AMP (Accelerated Mobile Pages) en la página de resultados de búsqueda de Google. Obtén más información sobre este script de usuario y cómo instalarlo en [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Deshabilitar AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Mejores opciones fuera de AdGuard{#top-picks}

AdGuard no desarrolla estos scripts de usuario y, por lo tanto, no podemos ofrecer una garantía del 100% de que sean seguros y/o funcionen en todo momento. Sin embargo, según nuestra experiencia, merecen una recomendación ya que todos se han ganado su buena reputación.

### Don't track me Google

Este script elimina la función de seguimiento de Google de los enlaces en los resultados de búsqueda de Google. Acelera la carga de los resultados de búsqueda y te permite hacer clic derecho o tocar para copiar la URL del enlace.

Tu código fuente es [disponible en GitHub](https://github.com/Rob--W/dont-track-me-google). Este script de usuario se puede descargar desde [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e instalar en cualquier aplicación basada en AdGuard CoreLibs.

### microShield

Un script de usuario para personas que visitan sitios web coreanos y algunos sitios web internacionales. El script de usuario de microShield bloquea la publicidad de Ad-Shield y el antibloqueo de publicidad. Tu código fuente original está disponible en [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) y [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Este script de usuario se puede instalar en aplicaciones basadas en AdGuard CoreLibs, Violentmonkey, Tampermonkey y [quoid/userscripts](https://github.com/quoid/userscripts). Más información sobre microShield y cómo instalarlo en [GitHub](https://github.com/List-KR/microShield).

## ¿Dónde conseguir más scripts de usuario?{#more-userscripts}

Como los scripts de usuario son creados principalmente por entusiastas, debes tener cuidado al instalarlos. Cualquier script de fuente desconocida conlleva un riesgo potencial. Sin embargo, existe una gran variedad de scripts interesantes que, si se instalan con cuidado y responsabilidad, pueden hacer que el uso de algunos sitios web sea más conveniente.

Aquí describiremos algunos de los catálogos de scripts de usuario más populares.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) es un catálogo de scripts de usuario de los creadores de Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) es un catálogo de scripts de usuario de código abierto escrito en nodeJS. No tiene moderación, así que mantente alerta ante cualquier script sospechoso.

### Comunidad

Si te gusta la idea de personalizar tu navegador con la ayuda de scripts de usuario, y tienes alguna duda, puedes preguntarlo en uno de estos sitios web:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Desarrollo

### Solicitar licencia

Si estás desarrollando tu propio script personalizado y deseas probar cómo funciona con AdGuard, solicita una clave de licencia beta para la aplicación.

Para obtenerlo, envía un correo electrónico a devteam@adguard.com con la siguiente información:

**Asunto:** Solicitud de licencia de autor de script de usuario

**Cuerpo:** Cuéntanos sobre los scripts de usuario en los que estás trabajando.

Aquí hay un [enlace mailto](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Compatibilidad

#### Bloqueo de metadatos

##### Propiedades compatibles

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

##### Propiedades no compatibles

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Funciones GM compatibles

AdGuard admite tanto las funciones GM\_ antiguas como la nueva API GM4 que utiliza objetos GM.

##### Valores

:::note

Todas las funciones antiguas de Greasemonkey enumeradas están obsoletas pero aún son compatibles.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Aquí](https://wiki.greasespot.net/GM.info) puedes encontrar más información sobre la API de Greasemonkey.

### Ejemplo

```javascript
// ==UserScript==
// @name            Name as shown to the user when locale is english or unknown
// @name:ru         Name as shown to the user when locale is russian
// @description     Description as shown to the user when locale is english or unknown
// @description:ru  Description as shown to the user when locale is russian
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```
