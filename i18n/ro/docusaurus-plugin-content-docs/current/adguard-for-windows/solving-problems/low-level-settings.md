---
title: Setări avansate (de nivel scăzut)
sidebar_position: 7
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Anterior cunoscute ca setări de nivel scăzut, Setările Avansate conțin în principal opțiuni care depășesc competența medie a utilizatorului și nu sunt aplicate în utilizarea zilnică. AdGuard pentru Windows este conceput să funcționeze fără a fi nevoie să modificați niciuna dintre ele, dar acestea vor oferi funcții suplimentare în anumite cazuri sau când se rezolvă o problemă neobișnuită.

:::atenție

Schimbarea fără a gândi *Setărilor Avansate* poate provoca probleme cu performanța AdGuard, poate întrerupe conexiunea la Internet sau compromite securitatea și intimitatea dumneavoastră. Ar trebui să modificați aceste setări doar dacă sunteți siguri de ceea ce faceți sau dacă echipa noastră de suport v-a cerut să faceți acest lucru.

:::

## Cum să accesați Setările Avansate

Pentru a accesa *setările avansate*, în fereastra principală faceți clic pe *Setări → Setări generale* și derulați în jos până la *Setări Avansate*. Alternativ, selectați *Avansat → Setări avansate...* în meniul din sistem.

## Setări Avansate

Odată ce deschideți Setările Avansate, veți fi prezentat cu următoarele opțiuni:

### Blocați TCP Fast Open

Dacă este activat, AdGuard va bloca TCP Fast Open în browserul Edge. Pentru a aplica setările, trebuie să reporniți browserul.

### Use Encrypted Client Hello

Fiecare conexiune Internet criptată are o parte necriptată. Acesta este primul pachet care conține numele serverului la care vă conectați. Tehnologia Encrypted Client Hello este destinată să rezolve această problemă și să criptaze acel ultim bit de informație necriptată. To benefit from it, enable the *Use Encrypted Client Hello* option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted.

### Verificați transparența certificatelor site-urilor web

Verifică autenticitatea tuturor certificatelor pentru domeniu pe baza Politicii de transparență a certificatelor Chrome. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome, la rândul său, îl va bloca.

### Activarea verificărilor de revocare a certificatelor SSL/TLS

Odată activată, această opțiune efectuează verificări OCSP asincrone pentru a verifica dacă certificatul SSL/TLS al site-ului web a fost revocat.

Dacă verificarea OCSP se finalizează în cadrul timpului minim de expirare, AdGuard va aplica imediat rezultatul: blocați conexiunea dacă certificatul este revocat sau stabiliți o conexiune dacă certificatul este valid.

Dacă verificarea durează prea mult, AdGuard va stabili o conexiune și va continua verificările în fundal. Dacă certificatul este revocat, conexiunile curente și viitoare către domeniu vor fi blocate.

### Arată AdGuard VPN în Setări

Activarea acestei opțiuni vă permite să afișați tab-ul AdGuard VPN în Setări pentru deschiderea ușoară a aplicației și a site-ului produsului.

### Excluderea aplicației de la filtrare introducând calea completă

Dacă doriți ca AdGuard să nu filtreze o aplicație specifică, specificați calea completă către aceasta și aplicațiile vor fi excluse de la filtrare. Separați diferitele căi prin punct și virgulă.

### Activați notificările pop-up AdGuard

Activați această funcție pentru a vedea notificările pop-up AdGuard. Acestea nu apar prea des și conțin doar informații importante. De asemenea, puteți folosi meniul din sistem pentru a revedea ultima notificare pop-up.

### Interceptați automat URL-urile de abonament la filtru

Activați această opțiune dacă doriți ca AdGuard să intercepteze automat URL-urile de abonament la filtru (adică `abp:subscribe` și asemenea) și să deschidă un dialog de instalare a filtrului personalizat.

### Filter HTTP/3

If this option is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Utilizați modul driver de redirecționare

Dacă această opțiune este activată, AdGuard intercepta tot traficul și îl va redirecționa către serverul proxy local pentru filtrarea ulterioară.

În caz contrar, AdGuard va filtra tot traficul pe loc, fără a redirecționa. În acest caz, sistemul va considera AdGuard ca fiind singura aplicație care se conectează la Internet (celelalte aplicații sunt rute prin aceasta). Dezavantajul este că va face Firewall-ul sistemului mai puțin eficient. Avantajul este că această abordare funcționează puțin mai repede.

### Deschideți fereastra principală la demarajul sistemului

Activați această opțiune pentru a face fereastra principală AdGuard să se deschidă după ce sistemul este încărcat. This setting, which doesn't affect whether the actual filtering service is launched or not, is located in *Settings → General Settings*.

### Activați filtrarea la demarajul sistemului

Începând de la v7.12, în mod implicit, serviciul AdGuard nu filtrează traficul după demarajul sistemului dacă opțiunea Lansați AdGuard la demarajul sistemului este dezactivată. Cu alte cuvinte, serviciul AdGuard este pornit în modul „inactiv”. Activați această opțiune pentru a face AdGuard să filtreze traficul chiar dacă aplicația nu este lansată.

:::note

Before v7.12, the AdGuard service started in filtering mode by default (even if the *Launch AdGuard at system start-up* was disabled). If you were satisfied with the old behavior, enable this option.

:::

### Filtrați localhost

Dacă doriți ca AdGuard să filtreze conexiunile de loopback, bifați căsuța. Această opțiune va fi întotdeauna activată dacă aveți instalat AdGuard VPN, pentru că altfel nu va putea funcționa.

### Excludeți intervalele IP specificate de la filtrare

Dacă nu doriți ca AdGuard să filtreze anumite subrețele, activați această funcție și specificați intervalele IP în notația CIDR (ex. 98.51.100.14/24) în secțiunea **Intervale IP excluse de la filtrare** de mai jos.

### Activați scrierea HAR

Această opțiune ar trebui să fie activată **doar pentru scopuri de depanare**. Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. Acest fișier poate fi analizat cu aplicația Fiddler. Rețineți că acest lucru poate încetini semnificativ navigarea dumneavoastră pe internet.

### Adăugați un spațiu suplimentar la cererea HTTP simplă

Adaugă un spațiu suplimentar între metoda HTTP și URL și elimină spațiul după câmpul "Host:" pentru a evita inspecția profundă a pachetelor. De exemplu, cererea

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Adjust size of fragmentation of initial TLS packet

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Plain HTTP request fragment size

Ajustează dimensiunea fragmentării cererilor HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valid values: 1–1500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Arată QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Enable TCP keepalive

Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use.

### TCP keepalive interval

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP keepalive timeout

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Block Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Perioada de expirare a serverului DNS

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Use HTTP/3 for DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Use fallback DNS upstreams

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Query DNS upstreams in parallel

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Always respond to failed DNS queries

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Activați filtrarea cererilor DNS sigure

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Blocking mode for hosts rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Răspundeți cu o adresă IP personalizată

### Blocking mode for adblock-style rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Răspundeți cu o adresă IP personalizată

### Adresă IPv4 personalizată

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Adresă IPv6 personalizată

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Servere de rezervă

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Nu utilizați servere de rezervă;
- Utilizați servere implicite de sistem;
- Utilizați servere personalizate.

### Blocați ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Lista serverelor de rezervă personalizate

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Lista de adrese bootstrap personalizate

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### Excluderi DNS

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
