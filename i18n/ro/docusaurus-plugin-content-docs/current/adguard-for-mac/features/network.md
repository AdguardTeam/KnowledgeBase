---
title: Rețea
sidebar_position: 10
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## General

![Rețea](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtrați automat aplicațiile

În mod implicit, AdGuard blochează reclamele și trackerele în majoritatea browserelor ([Tor Browser este o excepție](/adguard-for-mac/solving-problems/tor-filtering)). Această setare permite AdGuard să blocheze reclamele și în aplicații.

Pentru a gestiona aplicațiile filtrate, faceți clic pe _Aplicații_.

### Filtrați protocolul HTTPS

Această setare permite AdGuard să filtreze protocolul sigur HTTPS, care este utilizat în prezent de majoritatea site-urilor web și aplicațiilor. În mod implicit, site-urile web cu informații potențial sensibile, cum ar fi serviciile bancare, nu sunt filtrate. Pentru a gestiona excluderile HTTPS, faceți clic pe _Excluderi_.

În mod implicit, AdGuard nu filtrează site-urile web cu certificate de validare extensivă (EV). Dacă este necesar, puteți activa opțiunea _Filtrați site-urile web cu certificate EV_.

## Outbound proxy

Puteți configura AdGuard pentru a direcționa tot traficul dispozitivului dvs. prin intermediul serverului proxy.

## Proxy HTTP

Puteți folosi AdGuard ca server proxy HTTP. Aceasta vă va permite să filtrați traficul pe alte dispozitive conectate la proxy.

Asigurați-vă că Mac-ul dvs. și alt dispozitiv sunt conectate la aceeași rețea și introduceți portul proxy pe dispozitivul pe care doriți să-l redirecționați prin intermediul serverului proxy (de obicei, în setările de rețea). Pentru a filtra traficul HTTPS, [transferați certificatul proxy AdGuard](http://local.adguard.org/cert) pe acest dispozitiv. [Aflați mai multe despre instalarea unui certificat proxy](/guides/proxy-certificate)
