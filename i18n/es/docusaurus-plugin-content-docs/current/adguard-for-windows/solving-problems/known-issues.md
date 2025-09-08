---
title: Problemas conocidos de AdGuard para Windows
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemas de compatibilidad con AdGuard para Windows y AdGuard VPN para Windows

Una vez que instales AdGuard para Windows y AdGuard VPN para Windows, comenzarán a trabajar juntos sin ningún esfuerzo de tu parte. Sin embargo, cambiar algunas de sus configuraciones predeterminadas puede hacer que las aplicaciones funcionen incorrectamente cuando se ejecutan al mismo tiempo.

Hay dos configuraciones específicas en AdGuard para Windows: *Usar el modo de controlador de redirección* y *Filtrar localhost*. De forma predeterminada, el primero está deshabilitado y el segundo está habilitado. Cambiar cualquiera de estas configuraciones inevitablemente interrumpirá el filtrado de AdGuard si tanto el bloqueador de anuncios AdGuard como AdGuard VPN están habilitados en tu dispositivo.

Cambiar esta configuración solo es necesario para resolver problemas relacionados con el funcionamiento simultáneo del bloqueador de anuncios AdGuard y aplicaciones a nivel de red como antivirus, VPN y filtros de red. Si te encuentras en una situación en la que necesitas cambiar el estado predeterminado de la configuración anterior y aún quieres que el bloqueador de anuncios AdGuard y AdGuard VPN funcionen simultánea y correctamente: [crea una propuesta en GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) para que podamos ayudarte personalmente.

Actualmente estamos trabajando para superar las limitaciones mencionadas anteriormente del trabajo simultáneo de nuestras aplicaciones.
