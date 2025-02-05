---
title: Ghid pentru Setările la nivel scăzut
sidebar_position: 5
---

:::info

Acest articol se referă la AdGuard pentru iOS, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cum să accesați setările la nivel scăzut

:::atenție

Modificarea *setărilor la nivel scăzut* poate provoca probleme cu performanța AdGuard, poate întrerupe conexiunea la Internet sau poate compromite securitatea și intimitatea dumneavoastră. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.

:::

Pentru a accesa *Setările la nivel scăzut*, atingeți iconița cu rotiță în colțul din dreapta jos al ecranului pentru a deschide *Setările*. Selectați secțiunea *General* și apoi activați comutatorul *Mod avansat*; după aceea secțiunea *Setări avansate* va apărea mai jos. Atingeți *Setările avansate* pentru a accesa secțiunea *Setările la nivel scăzut*.

## Setări la nivel scăzut

### Modul Tunel

Există două moduri principale de tunel: *Split* și *Full*. Modul *Split-Tunnel* oferă compatibilitate dintre AdGuard și așa-numitele aplicații "VPN Personal". În modul *Full-Tunnel*, niciun alt VPN nu poate funcționa simultan cu AdGuard.

Există o caracteristică specifică a modului *Split-Tunnel*: în cazul unei performanțe slabe a proxy-ului DNS, de exemplu, dacă răspunsul de la serverul AdGuard DNS nu este returnat la timp, iOS va redirecționa traficul prin serverul DNS specificat în setările iOS. În prezent, nu sunt blocate reclame și traficul DNS nu este criptat.

În modul *Full-Tunnel*, este utilizat doar serverul DNS specificat în setările AdGuard. Dacă nu răspunde, Internetul pur și simplu nu va funcționa. Activarea modului *Full-Tunnel* poate afecta negativ performanța unor programe (de exemplu, FaceTime) și poate cauza probleme de actualizare a aplicațiilor.

Implicit, AdGuard folosește modul *Split-Tunnel* ca opțiune cea mai stabilă.

Există și un mod suplimentar numit *Full-Tunnel (fără iconița VPN)*. Acesta este exact la fel ca modul *Full-Tunnel*, dar este configurat astfel încât iconița VPN să nu fie afișată în bara de sistem.

### Modul de blocare

În acest modul, puteți selecta modul în care AdGuard va răspunde la interogările DNS care ar trebui blocate:

- Implicit — răspundeți cu o adresă IP zero când sunt blocate de regulile de tip adblock; răspundeți cu adresa IP specificată în regulă când sunt blocate de regulile de tip /etc/hosts
- REFUZAT — răspundeți cu codul REFUZAT
- NXDOMAIN — răspundeți cu codul NXDOMAIN
- IP nedefinit — răspundeți cu o adresă IP zero
- IP personalizat — răspundeți cu o adresă IP setată manual

### Blocați IPv6

Prin mutarea comutatorului către dreapta, activați blocarea interogărilor IPv6 (solicitări AAAA). Solicitările DNS de tip AAAA nu vor fi rezolvate, prin urmare doar interogările IPv4 pot fi procesate.

### Răspuns blocat TTL

Aici puteți seta perioada pentru ca un dispozitiv să cacheze răspunsul la o cerere DNS. În timpul duratei de viață specificate (în secunde), cererea poate fi citită din cache fără a solicita din nou serverul DNS.

### Servere Bootstrap

Pentru DNS-over-HTTPS, DNS-over-TLS și DNS-over-QUIC, este necesar un server bootstrap pentru obținerea adresei IP a serverului DNS principal. Dacă nu este specificat, serverul DNS din setările iOS este utilizat ca server bootstrap.

### Servere de rezervă

Aici puteți specifica un server alternativ la care o solicitare va fi direcționată dacă serverul principal nu răspunde. Dacă nu este specificat, serverul DNS al sistemului va fi utilizat ca rezervă. Este de asemenea posibil să specificați `none`; în acest caz, nu va fi setat niciun server de rezervă și va fi utilizat doar serverul DNS principal.

### Intervalul de actualizare al aplicației de fundal

Aici puteți selecta frecvența cu care aplicația va verifica actualizările filtrării în timp ce se află în fundal. Rețineți că verificarea actualizărilor nu va fi efectuată mai des decât perioada specificată, dar intervalele exacte pot să nu fie respectate.
