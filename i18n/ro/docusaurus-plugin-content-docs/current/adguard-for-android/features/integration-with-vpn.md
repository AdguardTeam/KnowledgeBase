---
title: Integrare cu AdGuard VPN
sidebar_position: 8
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pentru Android creează un VPN local pentru a filtra traficul. Astfel, alte aplicații VPN nu pot fi utilizate în timp ce AdGuard pentru Android este în execuție. Cu toate acestea, atât aplicațiile AdGuard, cât și [AdGuard VPN](https://adguard-vpn.com/) au moduri integrate care permit utilizarea lor împreună.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. Aceasta permite AdGuard să creeze o interfață VPN și să blocheze reclamele și trackerele local, în timp ce AdGuard VPN direcționează tot traficul printr-un server extern.

Dacă dezactivezi AdGuard VPN, AdGuard va înceta să-l folosească ca server proxy extern. Dacă dezactivezi AdGuard, AdGuard VPN va direcționa traficul prin propria sa interfață VPN.

Dacă ai Bloctantul de reclame AdGuard și instalezi AdGuard VPN, aplicația Blocant de reclame va detecta și va activa _Integrarea cu AdGuard VPN_ automat. Același lucru se întâmplă în direcția inversă. Reține că, dacă ai activat integrarea, nu vei putea gestiona excluderile aplicației și conecta la serverele DNS din aplicația AdGuard VPN. Poți specifica aplicațiile care să fie direcționate prin tunelul tău VPN prin _Setări_ → _Filtrare_ → _Rețea_ → _Proxy_ → _Aplicații care funcționează prin proxy_. Pentru a selecta un server DNS, deschide AdGuard → _Protecție_ → _Protecție DNS_ → _Server DNS_.
