---
title: Sådan indsamles netværksdump med WireShark
sidebar_position: 12
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Nogle gange kræver diagnosticering af netværksproblemer, at det præcist kan ses, hvordan enheden kommunikerer med internet. Indsamling af en netværksdump tillader os at analysere denne trafik og finde problemårsagen. I denne vejledning vise vi, hvordan et netværksdump oprettes vha. Wireshark.

:::note

Data og filer indeholdt i dump-filer behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/privacy.html).

:::

## 1. Installation af Wireshark

Download Wireshark fra det [officielle websted](https://www.wireshark.org/download.html). Eksekvér installeren og følg vejledningen. Når promptet, installér Npcap — denne driver er nødvendig for, at Wireshark kan opfange/registrere netværkspakker.

## 2. Klargør til optagelse

Før der startes, **luk alle unødvendige programmer og webbrowserfaner**. Dette vil bidrage til at reducere irrelevante data i dumpet.

## 3. Optag netværkstrafik

Åbn Wireshark, hvorefter en liste over netværksgrænseflader vises. Vælg den ønskede: Ethernet for kablet forbindelse, eller Wireless for Wi-Fi.

Ved usikkerhed om valg af grænseflade, vælg den med mest aktivitet i grafen — jo højere grafen er, desto mere trafik går igennem den.

![Hovedskærm \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/main_screen.png)

Dobbeltklik på den valgte grænseflade for at starte optagelsen. Genskab nu det oplevede problem, og sørg for kun at udføre de nødvendige handlinger for at udløse problemet og undgå andre processer. Dette bidrager til at isolere problemet og sikrer, at relevant trafik registreres.

## 4. Stop optagelsen og gem dumpet

Efter genskabelse af problemet, klik på den røde Stop-knap øverst for at afslutte optagelsen.

![Optagelsesproces \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/capturing_process.png)

Gem dataene ved at trykke på Ctrl+S, angive et filnavn og vælge .pcapng-formatet. Det var det — netværksdump-filen er klar.

Når dump-filen indsendes, bedes også angivet en tidslinje for begivenhederne. Beskriv de vigtigste foretagede handlinger, såsom hvornår appen blev startet samt de trin, som ledte til problemet, og inkludér det omtrentlige tidspunkt for problemets opståen.
