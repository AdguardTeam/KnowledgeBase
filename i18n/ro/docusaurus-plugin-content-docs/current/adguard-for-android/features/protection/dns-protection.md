---
title: Protecție DNS
sidebar_position: 4
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Modul de protecție DNS poate fi accesat atingând tab-ul _Protecție_ (al doilea icon de pe stânga la baza ecranului) și apoi selectând _Protecție DNS_.

:::tip

Protecția DNS funcționează diferit față de blocarea obișnuită a reclamelor și urmăritorilor. Puteți [afla mai multe despre acest lucru și cum funcționează dintr-un articol dedicat](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_Protecția DNS_ vă permite să filtrați cererile DNS cu ajutorul unui server DNS selectat, filtre DNS și reguli ale utilizatorului:

- Unele servere DNS au liste de blocări care ajută la blocarea cererilor DNS către domenii potențial dăunătoare

- În plus față de serverele DNS, AdGuard poate filtra cererile DNS pe cont propriu folosind un filtru DNS special. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- De asemenea, puteți bloca și debloca domenii creând reguli ale utilizatorului. S-ar putea să fie necesar să consultați articolul nostru despre [sintaxa regulilor de filtrare DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![Protecție DNS \*mobil\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### Server DNS

În această secțiune, puteți selecta un server DNS pentru a rezolva cererile DNS, a bloca reclamele și urmăritorii și a cripta traficul DNS. Atingeți un server pentru a citi descrierea sa completă și a selecta un protocol. Dacă nu ați găsit serverul dorit, îl puteți adăuga manual:

- Atingeți _Adaugă server DNS_ și introduceți adresa serverului (sau adresele)

- Alternativ, puteți selecta un server DNS din [lista furnizorilor DNS cunoscuți](https://adguard-dns.io/kb/general/dns-providers/) și atingeți _Adaugă la AdGuard_ lângă acesta

- Dacă utilizați un server DNS privat AdGuard, îl puteți adăuga la AdGuard din [panoul de control](https://adguard-dns.io/dashboard/)

Implicit, _DNS Automat_ este selectat. Acesta selectează automat un server DNS pe baza setărilor AdGuard și a dispozitivului. Dacă aveți [integrarea cu AdGuard VPN](/adguard-for-android/features/integration-with-vpn) sau un alt proxy SOCKS5 activat, se conectează la _AdGuard DNS fără filtrare_ sau la orice alt server specificat de dumneavoastră. În toate celelalte cazuri, se conectează la serverul DNS selectat în setările dispozitivului dumneavoastră.

#### Filtre DNS

Această secțiune vă permite să adăugați filtre DNS personalizate și reguli de filtrare DNS. Puteți găsi mai multe filtre la [filterlists.com](https://filterlists.com/).
