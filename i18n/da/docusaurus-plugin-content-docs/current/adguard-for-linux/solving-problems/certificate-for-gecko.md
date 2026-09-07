---
title: Installation af AdGuard-certifikatet i Gecko-baserede webbrowsere
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til Linux, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [installér AdGuard til Linux](https://adguard.com/adguard-linux/overview.html)

:::

For at filtrere HTTPS-trafik benytter AdGuard sit eget certifikat. I modsætning til de fleste webbrowsere har Gecko-baserede webbrowsere såsom Firefox et separat certifikatlager, så det skal tilføjes manuelt. Ellers fungerer HTTPS-filtrering ikke.

Vi bruger Firefox som eksempel. Andre Gecko-baserede webbrowsere fungerer på en lignende måde, selvom nogle menunavne kan være anderledes.

## Inden man starter

Sørg for, at:

- AdGuard til Linux kører
- HTTPS-filtrering er slået til

**Begge kræves for at åbne certifikatlinket i næste trin.**

## Installér certifikatet

Følg vejledningen:

1. Download [AdGuard-certifikate](https://local.adguard.org/cert).
2. Åbn Firefox.
3. Klik på menuikonet, og åbn _Indstillinger_.
4. Gå til _Fortrolighed og sikkerhed_, rul ned til afsnittet _Forbindelses- og softwaresikkerhed_ og klik på _Avancerede indstillinger_.
5. Find afsnittet _Certifikater_, og klik på _Håndtér certifikater_.
6. Vælg fanen _Myndigheder_, og klik på _Importere_.
7. Vælg den tidligere downloadede fil, og klik på _Åbn_.
8. Vælg _Stol på denne CA til at identificere websteder_, og klik på _OK_.

Færdig! HTTPS-filtrering bør nu fungere i den Gecko-baserede webbrowser.
