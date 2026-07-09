---
title: Cum să folosești Samsung Pay cu AdGuard în Coreea de Sud
sidebar_position: 16
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Un număr de utilizatori s-au confruntat cu o problemă în care Samsung Pay nu funcționează în timp ce AdGuard este activ. Această problemă apare aproape exclusiv pe dispozitivele înregistrate în Coreea de Sud.

Ce cauzează această problemă? Uneori, Samsung Pay nu funcționează pe dispozitivele cu servicii VPN active, iar AdGuard este una dintre aceste aplicații. Implicit, AdGuard folosește un VPN local pentru a filtra traficul, ceea ce poate cauza probleme la utilizarea Samsung Pay.

Ca urmare, utilizatorii au fost nevoiți să dezactiveze AdGuard când efectuau plăți cu Samsung Pay. Acest lucru poate fi evitat cu caracteristica *Detectare Samsung Pay*. Când această opțiune este activată, aplicația AdGuard este suspendată ori de câte ori utilizatorul deschide aplicația Samsung Pay și se reia când aplicația este închisă.

:::note

Această caracteristică va funcționa doar dacă modul de filtrare VPN local este ales în setările AdGuard. Dacă este utilizat un alt mod, Samsung Pay va funcționa fără întreruperi.

:::

Pentru a activa *Detectare Samsung Pay*, urmează acești pași:

1. Mergi la *Setări* → *Modul general* → *Avansat*→ *Setări de nivel scăzut*.

1. Derulează la *Detectare Samsung Pay* și mută glisorul spre dreapta.

1. Apasă *Permite permisiuni* și oferă AdGuard acces la informațiile despre utilizarea altor aplicații.

Avem nevoie de aceasta pentru a colecta statistici despre funcționarea Samsung Pay, astfel încât caracteristica *Detectare Samsung Pay* să funcționeze.

După activarea acestei caracteristici, când treci de la Samsung Pay la AdGuard, va apărea următorul mesaj, așa cum este arătat în captura de ecran.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternativ, poți dezactiva filtrarea pentru Samsung Pay în *Gestionarea aplicațiilor*. Pur și simplu mergi la ecranul *Gestionarea aplicațiilor* (a treia filă de la fund), găsește Samsung Pay în listă și oprește comutatorul la *Rutează traficul prin AdGuard*.
