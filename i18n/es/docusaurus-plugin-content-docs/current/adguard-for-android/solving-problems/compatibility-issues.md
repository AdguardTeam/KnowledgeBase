---
title: Known compatibility issues with Android apps
sidebar_position: 16
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## VPN apps

If you are using AdGuard in the *Local VPN* filtering mode, you cannot run other VPN apps at the same time. To solve this problem, we suggest that you:

- Use [AdGuard VPN](https://adguard-vpn.com/welcome.html) — its *Integrated mode* allows two apps to operate simultaneously
- Configure your VPN app to act as an [outbound proxy](../solving-problems/outbound-proxy.md) and set up a local outbound proxy using the parameters from the third-party app
- Switch to the *Automatic proxy* mode. When you do that, AdGuard will no longer use local VPN and will reconfigure iptables instead
- Cambia al modo de *proxy manual*. Para ello, ve a *Configuración* → *Filtrado* → *Red* → *Modo de enrutamiento*

:::note Compatibilidad

El modo *proxy automático* solo es accesible en dispositivos rooteados. Para el *Proxy manual*, se requiere root en dispositivos que funcionen con Android 10 o posterior.

:::

## DNS privado

La función DNS privado se introdujo en Android Pie. Antes de la versión Q, el DNS privado no rompía la lógica de filtrado de AdGuard DNS y el reenvío de DNS a través de AdGuard funcionaba normalmente. Pero a partir de la versión Q, la presencia de DNS privado obliga a las aplicaciones a redirigir el tráfico a través del solucionador del sistema en lugar de AdGuard. Consulta el [blog de desarrolladores](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) de Android para más detalles.

- Para resolver el problema con DNS privado, usa la regla `$network`

Algunos fabricantes de dispositivos mantienen ocultas las configuraciones de DNS privado y establecen el modo “Automático” como predeterminado. Por lo tanto, deshabilitar el DNS privado es imposible, pero podemos hacer que el sistema piense que el upstream no es válido bloqueándolo con una regla `$network`. Por ejemplo, si el sistema usa Google DNS de forma predeterminada, podemos agregar reglas `|8.8.4.4^$network` y `|8.8.8.8^$network` para bloquear Google DNS.

## Navegadores no compatibles

### Navegadores UC: UC Browser, UC Browser para x86, UC Mini, UC Browser HD

Para poder filtrar el tráfico HTTPS, AdGuard requiere que el usuario agregue un certificado a los certificados de usuario confiables del dispositivo. Lamentablemente, los navegadores UC no confían en los certificados de usuario, por lo que AdGuard no puede realizar el filtrado HTTPS allí.

- Para resolver este problema, mueve el certificado [al almacenamiento de certificados del sistema](../solving-problems/https-certificate-for-rooted.md/)

:::note Compatibilidad

Requiere acceso root.

:::

### Navegador Dolphin: Navegador Dolphin, Navegador Dolphin Express

AdGuard no puede filtrar tu tráfico cuando opera en el modo *Proxy manual* porque este navegador ignora la configuración del proxy del sistema.

- Utiliza el modo de filtrado *VPN local* para resolver este problema

### Opera mini: Opera mini, Opera mini con Yandex

Opera mini dirige el tráfico a través de un proxy de compresión de forma predeterminada y AdGuard no puede descomprimirlo y filtrarlo al mismo tiempo.

- No hay solución en este momento

### Navegador Puffin: Navegador Puffin, Navegador Puffin Pro

Puffin Browser dirige el tráfico a través de un proxy de compresión por defecto y AdGuard no es capaz de descomprimirlo y filtrarlo al mismo tiempo.

- No hay solución en este momento
