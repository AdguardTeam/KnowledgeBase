---
title: Ghid pentru setările la nivel scăzut
sidebar_position: 6
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cum să accesați setările la nivel scăzut

:::atenție

Modificarea *setărilor la nivel scăzut* poate provoca probleme cu performanța AdGuard, poate întrerupe conexiunea la Internet sau poate compromite securitatea și intimitatea dumneavoastră. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.

:::

To go to *Low-level settings*, open the AdGuard app and tap the gear icon in the lower right corner of the screen. Apoi alegeți *General → Avansat → Setări la nivel scăzut*.

## Setări la nivel scăzut

Pentru AdGuard v4.0 pentru Android, am reproiectat complet setările la nivel scăzut: le-am împărțit în blocuri tematice, le-am făcut mai clare, am adăugat validarea valorilor introduse și alte măsuri de siguranță, ne-am debarasat de unele setări și am adăugat altele.

### Protecție DNS

#### De rezervă în amonte

Aici puteți specifica rezolutoarele DNS de rezervă care vor fi utilizate dacă serverul configurat nu este disponibil. Există trei opțiuni: *DNS automat*, *Nimic* și *DNS personalizat*. Dacă nu este specificat niciun server de rezervă, se va folosi *DNS automat* — DNS-ul sistemului sau DNS-ul AdGuard. *Nimic* înseamnă fără rezervă. Selectarea *DNS personalizat* vă permite să enumerați adresele serverelor IPv4 și IPv6 care vor fi utilizate ca upstreams.

#### Domenii de rezervă

Aici puteți lista domeniile care vor fi redirecționate direct către upstreams de rezervă dacă există.

#### Detectează domeniile de căutare

Dacă această setare este activată, AdGuard va detecta domeniile de căutare și le va redirecționa automat către upstreams de rezervă.

#### Bootstrap în amonte

Bootstrap DNS pentru servere DoH, DoT și DoQ. The *Automatic DNS* — the system DNS or AdGuard DNS — is used by default. Prin selectarea *DNS personalizat*, puteți lista adresele serverelor IPv4 și IPv6 care vor fi utilizate ca bootstrap upstreams.

#### Blocking mode for adblock-style rules

Aici puteți specifica tipul de răspuns pentru domeniile blocate de regulile DNS bazate pe sintaxa regulilor adblock (de exemplu, `||example.org^`).

- Răspundeți cu REFUSED
- Răspundeți cu NXDOMAIN
- Răspundeți cu adresa IP personalizată (adresele IPv4 și IPv6 pot fi specificate aici)

#### Blocking mode for hosts rules

Aici puteți specifica tipul de răspuns pentru domeniile blocate de regulile DNS bazate pe sintaxa regulilor gazdelor (de exemplu, `<ip> <domain> 0.0.0.0 example.com`).

- Răspundeți cu REFUSED
- Răspundeți cu NXDOMAIN
- Răspundeți cu adresa IP personalizată (adresele IPv4 și IPv6 pot fi specificate aici)

#### Timeout cerere DNS

Aici puteți specifica timpul în milisecunde pe care AdGuard va aștepta pentru răspunsul de la serverul DNS selectat înainte de a recurge la fallback. Dacă nu completați acest câmp sau introduceți o valoare invalidă, va fi utilizată valoarea de 5000.

#### Răspuns blocat TTL

Aici puteți specifica valoarea TTL (durata de viață) care va fi returnată ca răspuns la o cerere blocată.

#### Dimensiunea cache-ului DNS

Aici puteți specifica numărul maxim de răspunsuri în cache. Valoarea implicită este 1000.

#### Blocarea ECH

Dacă este activat, AdGuard elimină parametrii Encrypted Client Hello din răspunsurile DNS.

#### Ignore unavailable outbound proxy

Dacă această setare este activată, AdGuard va trimite solicitări DNS direct atunci când proxy-ul de ieșire nu este disponibil.

#### Încercați HTTP/3 pentru DNS-over-HTTPS în amonte

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### Răspuns de eșec SERVFAIL

If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client.

#### Utilizați de rezervă pentru domeniile care nu sunt de rezervă

If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validați DNS-urile în amonte

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filtrarea

#### Capturați HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### HTTPS filtering

#### Encrypted Client Hello

Fiecare conexiune Internet criptată are o parte necriptată. Acesta este primul pachet care conține numele serverului la care vă conectați. Tehnologia Encrypted Client Hello este destinată să rezolve această problemă și să criptaze acel ultim bit de informație necriptată. Pentru a beneficia de aceasta, activați opțiunea *Encrypted Client Hello*. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted.

#### Verificarea OCSP

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Dacă certificatul este revocat, conexiunile curente și viitoare către domeniu vor fi blocate.

#### Redirecționați solicitările DNS-over-HTTPS

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filter HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Outbound proxy

#### Afișați setarea Filtrare solicitări DNS

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Protecție

#### Intervalele de porturi

Aici puteți specifica intervalele de porturi care ar trebui filtrate.

#### Înregistrați evenimentele HTML eliminate

If this setting is enabled, AdGuard will record blocked HTML elements in *Recent activity*.

#### Scriptlet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Aplicații excluse

Aici puteți lista numele pachetelor și UIDs pe care doriți să le excludeți din protecția AdGuard.

#### Pachete bypass QUIC

Aici puteți specifica numele pachetelor pentru care AdGuard ar trebui să ocolească traficul QUIC.

#### Reconfigurați proxy-ul automat când se schimbă rețeaua

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### Filtrare IPv6

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### Intervalele IPv4 excluse de la filtrare

Filtering for the IPv4 ranges listed in this section is disabled.

#### Intervalele IPv6 excluse de la filtrare

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive pentru socket-urile de ieșire

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

După un număr definit de sistem de încercări nereușite de a obține un răspuns de la server, sistemul închide automat conexiunea TCP.

### Setări VPN locale

#### Întârziere de recuperare pentru VPN revocată

Aici puteți seta timpul unei întârzieri în milisecunde înainte ca AdGuard să încerce să restabilească protecția VPN după ce aceasta a fost revocată de o aplicație VPN terță parte sau prin ștergerea profilului VPN. The default value is 5000 ms.

#### Reprogramați întârzirea pentru recuperarea VPN revocată

Aici puteți seta timpul unei întârzieri în milisecunde înainte ca AdGuard să reprogrameze restabilirea protecției VPN după ce aceasta a fost revocată de o aplicație VPN terță parte sau prin ștergerea profilului VPN. The default value is 5000 ms.

#### MTU

Aici puteți seta unitatea maximă de transmisie (MTU) a interfeței VPN. Intervalul recomandat este de 1500-1900 bytes.

#### Restaurați automat VPN

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Captură de pachete (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

#### Adresa IPv4

Aici puteți introduce adresa IP care va fi folosită pentru a crea o interfață TUN. Implicit, este `172.18.11.218`.

#### Rutare forțată LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Rutarea tuturor conexiunilor LAN IPv4

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### Adresa IPv6

Aici puteți introduce adresa IP care va fi folosită pentru a crea o interfață TUN. Implicit, este `2001:db8:ad:0:ff::`.

### Miscellaneous

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
