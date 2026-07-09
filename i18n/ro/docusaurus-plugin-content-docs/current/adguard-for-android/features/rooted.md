---
title: Dispozitive cu acces root
sidebar_position: 9
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Din cauza măsurilor de securitate ale sistemului de operare Android, unele caracteristici AdGuard sunt disponibile doar pe dispozitive cu acces root. Iată lista acestora:

- În majoritatea cazurilor, **Filtrarea HTTPS în aplicații** necesită [instalarea unui certificat CA în magazinul de sistem](/adguard-for-android/features/settings#security-certificates), deoarece majoritatea aplicațiilor nu au încredere în certificatele din magazinul utilizatorului
- Modul de rutare [**Proxy automat**](/adguard-for-android/features/settings#routing-mode) necesită acces root datorită restricțiilor Android asupra filtrării traficului la nivel de sistem
- Modul de rutare [**Proxy manual**](/adguard-for-android/features/settings#routing-mode) necesită acces root pe Android 10 și versiuni ulterioare, deoarece nu mai este posibilă determinarea numelui aplicației asociate cu o conexiune filtrată de AdGuard
