---
title: Cum să activați filtrarea la nivel de sistem în AdGuard pentru iOS
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru iOS, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Despre filtrarea la nivel de sistem

System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. Acest articol vă va spune cum să o activați pe dispozitivul dvs. iOS.

Pe iOS, singura cale de a bloca reclamele și trackerele la nivel de sistem este să folosiți [filtrarea DNS](https://adguard-dns.io/kb/general/dns-filtering/).

Mai întâi, trebuie să activați protecția DNS. Pentru a face acest lucru:

1. Deschideți *AdGuard pentru iOS*.
2. Apăsați pe iconița *Protecție* (a doua iconiță din bara de meniu de jos).
3. Activați comutatorul de *Protecție DNS*.

![DNS protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Acum, dacă scopul dvs. este să blocați reclamele și trackerele la nivel de sistem, aveți trei opțiuni:

 1. Utilizați filtrul DNS AdGuard (*Protecție* (iconița scut în meniul de jos) → *Protecția DNS* → *filtrarea DNS* → *filtre DNS* → *filtrul DNS AdGuard*).
 2. Utilizați serverul DNS AdGuard (*Protecție* (iconița scut în meniul de jos) → *Protecția DNS* → *server DNS* → *AdGuard DNS*) sau un alt server DNS de blocare care vă place.
 3. Add a custom DNS filter/hosts file to your liking.

Prima și a treia opțiune au mai multe avantaje:

- Puteți utiliza orice server DNS la discreția dvs. și nu sunteți legat de un server de blocare specific, deoarece filtrul se ocupă de blocare.
- Puteți adăuga mai multe filtre DNS și/sau fișiere hosts (deși utilizarea prea multora ar putea încetini AdGuard).

![Cum funcționează filtrarea DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Cum să adăugați un filtru/fișier hosts DNS personalizat

Puteți adăuga orice filtru DNS sau fișier hosts care vă place.

Ca exemplu, să adăugăm [OISD Blocklist Big](https://oisd.nl/).

1. Copiați acest link: `https://big.oisd.nl` (este un link pentru filtrul OISD Blocklist Big)
2. Open *Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Apăsați *Adăugați un filtru*.
4. Paste the link into the filter URL field.
5. Apăsați *Următorul* → *Adăugați*.

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Adăugați orice număr de alte filtre DNS în același mod, lipind un URL diferit la pasul 4. Puteți găsi diverse filtre și linkuri către ele [aici](https://filterlists.com).
