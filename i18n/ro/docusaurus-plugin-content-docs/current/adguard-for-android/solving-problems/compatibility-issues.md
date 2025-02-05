---
title: Probleme cunoscute de compatibilitate cu aplicațiile Android
sidebar_position: 16
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Aplicații VPN

Dacă folosești AdGuard în modul de filtrare *VPN Local*, nu poți rula alte aplicații VPN în același timp. Pentru a rezolva această problemă, îți sugerăm să:

- Folosești [AdGuard VPN](https://adguard-vpn.com/welcome.html) — modul său *Integrat* permite două aplicații să funcționeze simultan
- Configurează aplicația ta VPN să acționeze ca un [proxy de ieșire](../solving-problems/outbound-proxy.md) și configurează un proxy de ieșire local folosind parametrii din aplicația terță parte
- Switch to the *Automatic proxy* mode. Când faci asta, AdGuard nu va mai folosi VPN-ul local și va reconfigura iptables în schimb
- Switch to the *Manual proxy* mode. Pentru a face acest lucru, mergi la *Setări* → *Filtrare* → *Rețea* → *Mod de rutare*

:::note Compatibility

Modul *proxy Automatic* este accesibil doar pe dispozitivele cu root. Pentru *proxy Manual*, este necesar root pe dispozitivele care rulează Android 10 sau versiuni ulterioare.

:::

## DNS privat

Funcția DNS privată a fost introdusă în Android Pie. Înainte de versiunea Q, DNS-ul privat nu întrerupea logica de filtrare DNS AdGuard și redirecționarea DNS prin AdGuard funcționa normal. Dar, începând cu versiunea Q, prezența DNS-ului privat forțează aplicațiile să redirecționeze traficul prin rezolvatorul de sistem în loc de AdGuard. Vezi [blogul devs Android](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) pentru mai multe detalii.

- Pentru a rezolva problema cu DNS-ul privat, folosește regula `$network`

Unii producători de dispozitive țin setările DNS-ului privat ascunse și setează modul 'Automatic' ca modul implicit. Astfel, dezactivarea DNS-ului privat este imposibilă, dar putem face sistemul să creadă că serverul în amonte nu este valid blocându-l cu o regulă `$network`. De exemplu, dacă sistemul folosește DNS-ul Google în mod implicit, putem adăuga regulile `|8.8.4.4^$network` și `|8.8.8.8^$network` pentru a bloca DNS-ul Google.

## Browsere nesuportate

### Browsere UC: UC Browser, UC Browser pentru x86, UC Mini, UC Browser HD

Pentru a putea filtra traficul HTTPS, AdGuard cere utilizatorului să adauge un certificat în certificatele de utilizator de încredere ale dispozitivului. Din păcate, browserele UC nu au încredere în certificatele utilizatorului, așa că AdGuard nu poate efectua filtrare HTTPS acolo.

- Pentru a rezolva această problemă, mutați [certificatul în magazinul de certificate al sistemului](../solving-problems/https-certificate-for-rooted.md/)

:::note Compatibility

Necesită acces root.

:::

### Browser Dolphin: Dolphin Browser, Dolphin Browser Express

AdGuard nu poate filtra traficul său când funcționează în modul *proxy Manual*, deoarece acest browser ignoră setările proxy de sistem.

- Folosește modul de filtrare *VPN Local* pentru a rezolva această problemă

### Opera mini: Opera mini, Opera mini cu Yandex

Opera mini redirecționează traficul printr-un proxy de compresie în mod implicit și AdGuard nu poate decomprima și filtra în același timp.

- Nu există nicio soluție în acest moment

### Browser Puffin: Puffin Browser, Puffin Browser Pro

Browser Puffin redirecționează traficul printr-un proxy de compresie în mod implicit și AdGuard nu poate decomprima și filtra în același timp.

- Nu există nicio soluție în acest moment
