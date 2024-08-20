---
title: Configurar el filtrado en Tor Browser
sidebar_position: 10
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

De forma predeterminada, Tor Browser se agrega a la lista de aplicaciones filtradas de AdGuard. Sin embargo, para filtrarlo, AdGuard necesita cambiar la configuración de seguridad de Tor. Esto hará que Tor confíe en el certificado CA de AdGuard.

Si decides filtrar el Tor y lo tienes sleccionado en *Preferencias* → *Red* → *Aplicaciones*, AdGuard te mostrará este cuadro de diálogo:

![Cuadro de diálogo de AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Al actualizar la configuración de Tor, AdGuard establecerá lo siguiente:

`security.enterprise_roots.enabled`: true

Esta configuración hará que Tor confíe en los certificados root. [Más información](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning es una medida de seguridad que permite a los sitios web garantizar que la conexión entre un sitio web y un usuario es auténtica. Esto implica que el sitio web publique una lista de claves públicas, o pins, en los que confía. Con el nivel de aplicación establecido en 1, los pins no se aplican para los CA personalizados. [Más información](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Para aplicar los cambios, deberás reiniciar el Tor Browser.

Si cambias manualmente esta configuración, el filtrado de Tor se detendrá.
