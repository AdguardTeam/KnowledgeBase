---
title: Integración con AdGuard VPN
sidebar_position: 8
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Android crea una VPN local para filtrar el tráfico. Por lo tanto, no se pueden utilizar otras aplicaciones VPN mientras se ejecuta AdGuard para Android. Sin embargo, tanto las aplicaciones AdGuard como [AdGuard VPN](https://adguard-vpn.com/) tienen modos integrados que te permiten usarlas juntas.

En este modo, AdGuard VPN actúa como un servidor proxy saliente a través del cual el bloqueador de anuncios AdGuard enruta su tráfico. Esto permite a AdGuard crear una interfaz VPN y bloquear anuncios y rastreadores localmente, mientras que AdGuard VPN enruta todo el tráfico a través de un servidor remoto.

Si desactivas AdGuard VPN, AdGuard dejará de usarlo como proxy saliente. Si desactivas AdGuard, AdGuard VPN enrutará el tráfico a través de su propia interfaz VPN.

Si tienes el bloqueador de anuncios AdGuard e instalas AdGuard VPN, la aplicación del bloqueador de anuncios lo detectará y habilitará la _Integración con AdGuard VPN_ automáticamente. Lo mismo ocurre a la inversa. Ten en cuenta que si habilitaste la integración, no podrás administrar las exclusiones de aplicaciones ni conectarte a servidores DNS desde la aplicación AdGuard VPN. Puedes especificar que las aplicaciones se enruten a través de tu túnel VPN a través de _Configuración_ → _Filtrado_ → _Red_ → _Proxy_ → _Aplicaciones que funcionan a través de proxy_. Para seleccionar un servidor DNS, abre AdGuard → _Protección_ → _Protección DNS_ → _Servidor DNS_.
