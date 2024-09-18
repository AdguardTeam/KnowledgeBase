---
title: Ovladač WFP
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

To filter network traffic, AdGuard uses a network driver. Existují dvě možnosti: ovladač TDI a ovladač WFP. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. Tyto problémy a následné chyby mohou být v každém případě velmi odlišné.

Pokud narazíte na problém, u kterého máte podezření, že by mohl být způsoben tímto problémem, můžete vždy přejít na starší, ale stabilnější síťový ovladač TDI. K tomu je třeba:

1. Přejděte do *Nastavení → Síť*.

2. Disable the WFP driver as it’s done in this picture:

![WFP driver *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
