---
title: Ovladač WFP
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

To filter network traffic, AdGuard uses a network driver. Existují dvě možnosti: ovladač TDI a ovladač WFP. Ačkoli je ovladač WFP obecně vhodnější a je ve výchozím nastavení povolen pro všechny novější verze operačního systému Windows (Windows 8 a novější), může potenciálně způsobovat problémy s kompatibilitou, zejména s některými antiviry. Tyto problémy a následné chyby mohou být v každém případě velmi odlišné.

Pokud narazíte na problém, u kterého máte podezření, že by mohl být způsoben tímto problémem, můžete vždy přejít na starší, ale stabilnější síťový ovladač TDI. K tomu je třeba:

1. Přejděte do *Nastavení → Síť*.

2. Deaktivujte ovladač WFP, jak je to zobrazeno na tomto obrázku:

![WFP driver *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
