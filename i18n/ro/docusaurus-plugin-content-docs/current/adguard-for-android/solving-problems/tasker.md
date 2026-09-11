---
title: How to automate AdGuard for Android
sidebar_position: 3
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Many people choose Android because they like customizing settings and want to control their device completely. Și este complet normal dacă unii utilizatori AdGuard nu sunt mulțumiți de comportamentul său implicit. Să spunem că doriți ca protecția să se oprească atunci când o anumită aplicație este lansată și apoi să o reporniți din nou când aplicația este închisă. Aceasta este o sarcină pentru aplicația Tasker.

## Interfața AdGuard

Există o mulțime de aplicații de automatizare acolo, de exemplu [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) etc. AdGuard oferă o interfață care permite acestor aplicații să configureze diverse reguli de automatizare.

![Automation *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Datorită acestei interfețe, orice aplicație poate trimite un mesaj special (numit "intenție") care conține numele acțiunii și unele date suplimentare, dacă este necesar. AdGuard va analiza această intenție și va efectua acțiunile necesare.

### Probleme de securitate

Nu este periculos să lăsați unele aplicații aleatoare să gestioneze ceea ce face AdGuard? Este, și de aceea o parolă este trimisă împreună cu intenția. Această parolă va fi generată de AdGuard automat, dar o puteți modifica, desigur, în orice moment.

### Acțiuni disponibile

Iată acțiunile care, atunci când sunt incluse în intenție, vor fi înțelese de AdGuard:

`start` pornește protecția, nu sunt necesare date suplimentare;

`stop` oprește protecția, nu sunt necesare date suplimentare;

`pause` pauses the protection. Diferența dintre acesta și `stop` este că va apărea o notificare care repornește protecția când o atingeți. Nu sunt necesare date suplimentare;

`update` checks for available filter and app updates, no additional data is needed;

-----

`dns_filtering` activează și dezactivează filtrarea DNS. Necesar un semn suplimentar:

`enable:true` sau `enable:false` activează sau dezactivează filtrarea DNS, respectiv.

`fake_dns` permite rezolvarea cererilor DNS pe serverul proxy de ieșire. Aceasta necesită un semn suplimentar:

`enable:true` sau `enable:false` activează sau dezactivează setarea *Folosește FakeDNS*, respectiv.

:::note

Când setarea *Folosește FakeDNS* este activată, *Protecția DNS* va fi dezactivată automat. DNS requests won't be filtered locally.

:::

-----

`dns_server` comută între serverele DNS, trebuie să includeți date suplimentare:

 `server:adguard dns` comută la serverul DNS AdGuard;

:::note

Lista completă a numelui furnizorului acceptat poate fi găsită în [lista cunoscută a furnizorilor DNS](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` comută la serverul adăugat anterior numit `custom`;

 `server:tls://dns.adguard.com` creează un nou server și comută la acesta dacă serverele și furnizorii adăugați anterior nu conțin un server cu aceeași adresă. Altfel, se comută pe serverul respectiv. Puteți adăuga adresele serverului ca IP (DNS regular), `sdns://…` (DNSCrypt sau DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) sau `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` creează un server cu adrese separate prin virgulă și comută la acesta. Când adăugați un server prin `server:1.1.1.1, tls://1.1.1.1`, serverul adăugat anterior este eliminat.

 `server:system` resetează setările DNS la serverele DNS implicite ale sistemului.

 -----

`proxy_state` activează/dezactivează proxy-ul de ieșire. Necesar un semn suplimentar:

`enable:true` sau `enable:false` activează sau dezactivează proxy-ul de ieșire, respectiv.

-----

`proxy_default` setează proxy-ul din lista celor adăugați anterior ca implicit sau creează unul nou dacă serverul nu a fost adăugat anterior.

Trebuie să specificați date suplimentare:

`server:[nume]` unde `[nume]` este numele proxy-ului de ieșire din listă.

Sau puteți configura parametrilor serverului manual:

`server:[tip=…&gazdă=…&port=…&nume utilizator=…&parolă=…&udp=…&trust=…]`.

`proxy_remove` elimină serverul proxy din lista celor adăugați anterior.

`server:[nume]` unde `[nume]` este numele proxy-ului de ieșire din listă.

Sau puteți configura parametrii de eliminare manual:

`server:[tip=…&gazdă=…&port=…&nume utilizator=…&parolă=…&udp=…&trust=…]`.

- **Parametrii obligatorii**:

`[tip]` — tipul serverului proxy:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[gazdă]` — domeniul sau adresa IP a proxy-ului de ieșire;

`[port]` — portul proxy-ului de ieșire (număr întreg de la 1 la 65535);

- **Parametrii opționali**:

 `[login și parolă]` — doar dacă proxy-ul o cere. Aceste date sunt ignorate atunci când configurați **SOCKS4**;

 `[udp]` aplicat doar pe tipul **SOCKS5** și include opțiunea **UDP prin SOCKS5**. Este necesar să setați valoarea **adevărat sau fals**;

 `[trust]` applies for **HTTPS_CONNECT** server type only and include option **Trust any certificates**. Este necesar să setați valoarea **adevărat sau fals**.

:::note Exemplu

`setare după nume`: server:MyServer

`manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Nu uitați să includeți parola, numele pachetului și clasa. Trebuie să faceți acest lucru pentru fiecare intenție.**

Extra: `parolă:*******`

Numele pachetului: `com.adguard.android`

Clasă: `com.adguard.android.receiver.AutomationReceiver`

:::note

Înainte de v4.0, clasa se numea `com.adguard.android.receivers.AutomationReceiver`, dar apoi am schimbat numele în `com.adguard.android.receiver.AutomationReceiver`. Dacă această funcție este utilizată, nu uitați să actualizați la noul nume.

:::

### Executare fără notificare

Pentru a efectua o sarcină fără a arăta o notificare, adăugați un EXTRA suplimentar `quiet: true`

### Exemplu

![Instrucțiune *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
