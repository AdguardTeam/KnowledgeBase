---
title: Setări la nivel scăzut
sidebar_position: 6
---

:::info

Acest articol se referă la AdGuard pentru iOS, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the _Low-level settings_, go to _Settings_ → _General_ → (Enable _Advanced mode_ if it's off) → _Advanced settings_ → _Low-level settings_.

În cea mai mare parte, setările din această secțiune este mai bine să rămână neschimbate: folosiți-le doar dacă sunteți siguri de ceea ce faceți sau dacă echipa de asistență vă cere acest lucru. Dar unele setări ar putea fi modificate fără niciun risc.

### Blocați IPv6 {#blockipv6}

Pentru orice interogare DNS trimisă pentru a obține o adresă IPv6, aplicația noastră returnează un răspuns gol (de parcă această adresă IPv6 nu există). Acum există o opțiune de a nu returna adrese IPv6. În acest moment, descrierea acestei funcții devine prea tehnică: configurarea sau dezactivarea IPv6 este domeniul exclusiv al utilizatorilor avansați. Presupunând că sunteți unul dintre ei, va fi bine să știți că avem acum această caracteristică, dacă nu — nu este nevoie să vă adânciți în asta.

### Servere bootstrap și de rezervă {#bootstrap-fallback}

Fallback is a backup DNS server. Dacă ați ales un server DNS și s-a întâmplat ceva cu acesta, este necesar un server de rezervă pentru a seta serverul DNS de rezervă până când serverul principal răspunde.

Cu Bootstrap, este puțin mai complicat. Pentru ca AdGuard pentru iOS să utilizeze un server DNS sigur personalizat, aplicația noastră trebuie să obțină mai întâi adresa sa IP. În acest scop, DNS-ul de sistem este utilizat implicit, dar uneori acest lucru nu este posibil din diverse motive. În astfel de cazuri, Bootstrap ar putea fi utilizat pentru a obține adresa IP a serverului DNS sigur selectat. Iată două exemple pentru a ilustra când un server Bootstrap personalizat ar putea ajuta:

1. Când un server DNS implicit de sistem nu returnează adresa IP a unui server DNS sigur și nu este posibil să folosiți unul sigur.
2. Când aplicația noastră și VPN-ul terț sunt utilizate simultan și nu este posibil să folosiți DNS-ul sistemului ca Bootstrap.
