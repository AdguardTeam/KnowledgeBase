---
title: Protecție DNS
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru iOS, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

[Modul de protecție DNS](https://adguard-dns.io/kb/general/dns-filtering/) îmbunătățește intimitatea ta prin criptarea traficului DNS. Spre deosebire de blocarea conținutului Safari, protecția DNS funcționează la nivel de sistem, adică dincolo de Safari, în aplicații și alte browsere. Trebuie să activați acest modul înainte de a putea să-l folosiți. Puteți face acest lucru de pe ecranul de start atingând icoana scutului din partea de sus a ecranului sau accesând tab-ul _Protecție_ → _Protecție DNS_.

:::note

Pentru a putea gestiona setările DNS, aplicațiile AdGuard necesită stabilirea unui VPN local. Nu vă va ruta traficul prin servere externe. Cu toate acestea, sistemul vă va întreba să confirmați permisiunea de acces.

:::

### Implementarea DNS {#dns-implementation}

![Ecran de implementare DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Această secțiune are două opțiuni: AdGuard și implementare nativă. Practic, acestea sunt două metode de configurare a DNS-ului.

În implementarea nativă, DNS-ul este gestionat de sistem și nu de aplicație. Aceasta înseamnă că AdGuard nu trebuie să creeze un VPN local. Din păcate, aceasta nu vă va ajuta să ocoliți restricțiile sistemului și să folosiți AdGuard împreună cu alte aplicații bazate pe VPN - dacă vreun VPN este activat, DNS-ul nativ este ignorat. Prin urmare, nu veți putea filtra traficul local sau să folosiți noul nostru [protocol DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### Servere DNS {#dns-servers}

Următoarea secțiune pe care o veți vedea pe ecranul Protecției DNS este serverul DNS. Aceasta arată serverul DNS selectat în prezent și tipul de criptare. Pentru a schimba oricare, atingeți butonul pentru a intra pe ecranul serverului DNS.

![Servere DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Serverele diferă prin viteza lor, protocolul utilizat, credibilitate, politica de jurnalizare etc. Implicit, AdGuard va sugera mai multe servere DNS dintre cele mai populare (inclusiv AdGuard DNS). Atingeți oricare pentru a schimba tipul de criptare (dacă această opțiune este oferită de proprietarul serverului) sau pentru a vizualiza pagina de start a serverului. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

În plus, în partea de jos a ecranului există o opțiune de a adăuga un server DNS personalizat. Acesta suportă servere obișnuite, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS și DNS-over-QUIC.

#### Autentificare HTTP de bază pentru DNS-over-HTTPS

Această caracteristică aduce capacitățile de autentificare ale protocolului HTTP la DNS, care nu are autentificare încorporată. Autentificarea în DNS este utilă dacă doriți să restricționați accesul la serverul DNS personalizat pentru anumiți utilizatori.

Pentru a activa această funcție:

1. În AdGuard DNS, mergeți la _Setări server_ → _Dispozitive_ → _Setări_ și schimbați serverul DNS cu cel care are autentificare. Atingerea _Refuză alte protocoale_ va elimina opțiunile de utilizare a altor protocoale, lăsând activată doar autentificarea DNS-over-HTTPS și împiedicând utilizarea acesteia de către terți. Copiați adresa generată.

![DNS-over-HTTPS cu autentificare](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. În AdGuard pentru iOS, mergeți la tab-ul _Protecție_ → _Protecție DNS_ → _Server DNS_ și lipiți adresa generată în câmpul _Adaugă un server DNS personalizat_. Salvați și selectați noua configurație.

Pentru a verifica dacă totul este configurat corect, vizitați pagina noastră [de diagnosticare](https://adguard.com/en/test.html).

### Setări de rețea {#network-settings}

![Ecranul setărilor de rețea \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Utilizatorii pot, de asemenea, gestiona securitatea DNS-ului pe ecranul setărilor rețelei. _Filtrați date mobile_ și _Filtrați Wi-Fi_ activează sau dezactivează protecția DNS pentru tipurile respective de rețea. Mai jos, la _Excepții Wi-Fi_, puteți exclude anumite rețele Wi-Fi din protecția DNS (de exemplu, poate doriți să excludeți rețeaua de acasă dacă folosiți [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### Filtrarea DNS {#dns-filtering}

Filtrarea DNS vă permite să personalizați traficul DNS prin activarea filtrului DNS AdGuard, adăugând filtre DNS personalizate și utilizând lista de blocări/permițeri.

Cum să accesați:

_Protecție_ (icoana scut în bara de meniu de jos) → _Protecție DNS_ → _Filtrare DNS_

![Ecran de filtrare DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### Filtre DNS {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard va monitoriza traficul DNS și va bloca solicitările care se potrivesc cu una sau mai multe reguli. Puteți folosi filtre precum [filtrul DNS AdGuard](https://github.com/AdguardTeam/AdguardSDNSFilter) sau adăuga fișiere hosts ca filtre. Multiple filtre pot fi adăugate simultan. Pentru a ști cum se face, familiarizați-vă cu [acest manual exhaustiv](adguard-for-ios/solving-problems/system-wide-filtering).

#### Lista permisă și lista de blocări {#allowlist-blocklist}

Pe lângă filtrele DNS, puteți avea un impact țintit asupra filtrării DNS prin adăugarea de domenii unice în lista de blocări sau în lista permisă. Lista de blocări suportă chiar aceeași sintaxă DNS, iar ambele pot fi importate și exportate, la fel ca lista permisă în blocarea conținutului Safari.
