---
title: Configurar el filtrado en Tor Browser
sidebar_position: 10
---

:::info

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

De forma predeterminada, Tor Browser se agrega a la lista de aplicaciones filtradas de AdGuard. Sin embargo, para filtrarlo, AdGuard necesita cambiar la configuración de seguridad de Tor. Esto hará que Tor confíe en el certificado CA de AdGuard.

Si decides filtrar el Tor y lo tienes sleccionado en *Preferencias* → *Red* → *Aplicaciones*, AdGuard te mostrará este cuadro de diálogo:

![AdGuard dialog box](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Al actualizar la configuración de Tor, AdGuard establecerá lo siguiente:

`security.enterprise_roots.enabled`: true

This setting will cause Tor to trust root certificates. [Más información](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning is a security measure that allows websites to ensure that the connection between a website and a user is authentic. Esto implica que el sitio web publique una lista de claves públicas, o pins, en los que confía. Con el nivel de aplicación establecido en 1, los pins no se aplican para los CA personalizados. [Más información](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Para aplicar los cambios, deberás reiniciar el Tor Browser.

If you manually change these settings, Tor filtering will be stopped.
