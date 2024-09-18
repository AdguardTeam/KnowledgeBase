---
title: Driver WFP
sidebar_position: 1
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Para filtrar o tráfego de rede, o AdGuard usa um driver de rede. Existem duas opções: driver TDI e driver WFP. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. Esses problemas e erros subsequentes podem ser muito diferentes em cada caso.

Se você encontrar um problema que suspeita ser causado por isso, você sempre pode mudar para o driver de rede TDI mais antigo, porém mais estável. Para isso:

1. Vá para *Configurações → Rede*.

2. Disable the WFP driver as it’s done in this picture:

![Driver WFP *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
