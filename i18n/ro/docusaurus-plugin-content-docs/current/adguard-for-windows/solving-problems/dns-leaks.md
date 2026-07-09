---
title: Posibile scurgeri DNS
sidebar_position: 10
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pentru Windows permite utilizatorilor să specifice o adresă de server DNS pentru a rezolva interogările în loc de serverul DNS de sistem, care este furnizat de ISP-ul dumneavoastră dacă nu este modificat în setările sistemului. Utilizarea unui server DNS non-implicit poate proteja traficul DNS de interceptarea ISP-ului. În plus, alegând un server DNS criptat și/sau de filtrare, obțineți un alt strat de protecție împotriva actorilor răi și reclamelor enervante.

Mulți utilizatori AdGuard pentru Windows apreciază funcția de protecție DNS. Dar unii dintre ei întâmpină următoarea problemă: un control pe un site web precum https://ipleak.net/ arată că cererile sunt gestionate de serverul DNS implicit în loc de cel selectat. În acest articol vă vom spune de ce se întâmplă acest lucru și cum să îl evitați.

## Adresă DNS bootstrap

The DNS server addresses could be written as IPs or as domain names. În cazul adreselor IP, nu sunt dificultăți: AdGuard trimite cererea DNS direct la serverul specificat în modulul de protecție DNS. Cu toate acestea, adresele serverului DNS criptat, precum DoT sau DoH, sunt de cele mai multe ori scrise ca nume de domeniu. În acest caz, pentru a rezolva mai întâi adresa serverului DNS criptat, AdGuard trimite o interogare DNS la adresa bootstrap, care este implicit un server DNS de sistem. Această conexiune este ceea ce serviciile de verificare percep ca o scurgere.

**Pentru a elimina această scurgere:**

- mergeți la *Setări avansate*
- derulați în jos până la secțiunea *Listă de adrese bootstrap personalizate*
- introduceți adresa bootstrap personalizată în formatul adresei IP (puteți utiliza [lista furnizorilor DNS cunoscuți](https://adguard-dns.io/kb/general/dns-providers/))
- faceți clic pe *Salvați*

## Server DNS de rezervă

Ar putea fi ca AdGuard să nu poată ajunge la serverul specificat din cauza unei conexiuni la internet slabe, a expirării timpului setat implicit sau a unor probleme legate de server. În acest caz, se va conecta la serverul de rezervă, care este implicit un server DNS de sistem. Această conexiune va fi de asemenea considerată de serviciul de verificare ca o scurgere.

**Pentru a elimina această scurgere:**

- mergeți la *Setări avansate*
- derulați în jos până la secțiunea *Servere de rezervă*
- verificați opțiunea *Utilizați servere personalizate*
- apoi găsiți secțiunea *Listă de servere de rezervă personalizate* și introduceți serverele de rezervă personalizate câte unul pe linie

sau

- mergeți la *Setări avansate*
- derulați în jos până la secțiunea *Servere de rezervă*
- verificați opțiunea *Nu utilizați servere de rezervă*

sau

- mergeți la *Setări avansate*
- scroll down to the *DNS server timeout period* section
- introduceți un număr aleatoriu mare
