---
title: Driver WFP
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Para filtrar el tráfico de red, AdGuard utiliza un controlador de red. Hay dos opciones: controlador TDI y controlador WFP. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. Estos problemas y errores posteriores pueden ser muy diferentes en cada caso.

Si encuentras un problema que sospecha que puede deberse a esto, siempre puedes cambiar al controlador de red TDI más antiguo pero más estable. Para hacerlo:

1. Ve a *Ajustes → Red*.

2. Disable the WFP driver as it’s done in this picture:

![Driver WFP *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
