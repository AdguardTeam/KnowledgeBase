---
title: Gestionarea aplicațiilor
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

The _App management_ module can be accessed by tapping the _App management_ tab (third icon from the left at the bottom of the screen). Această secțiune vă permite să gestionați permisiunile și setările de filtrare pentru toate aplicațiile instalate pe dispozitivul dvs.

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Prin atingerea unei aplicații, puteți gestiona setările acesteia:

- Rutați traficul său prin AdGuard
- Block ads and trackers in this app (_Filter app content_)
- Filtrați traficul său HTTPS (pentru aplicațiile care nu sunt browsere, necesită [instalarea certificatului CA AdGuard în magazinul de sistem](/adguard-for-android/solving-problems/https-certificate-for-rooted/), disponibil pe dispozitivele cu root)
- Rutați-l prin serverul proxy specificat sau AdGuard VPN în modul Integrare

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Din meniul contextual, puteți accesa și statisticile aplicației.

![App management in Chrome. Context menu \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Aplicații „fără probleme” și „problematici”

Cele mai multe aplicații funcționează corect atunci când sunt filtrate. Pentru astfel de aplicații, traficul lor este rutat prin AdGuard și filtrat implicit.

Unele aplicații, cum ar fi Managerul de descărcări, radio, aplicații de sistem cu UID 1000 și 1001 (de exemplu, servicii Google Play), sunt „problematici” și pot funcționa incorect atunci când sunt rutează prin AdGuard. De aceea, puteți vedea următoarea avertizare când încercați să rutezați sau să filtrați toate aplicațiile:

![Dialogul rutează toate aplicațiile \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Pentru a asigura funcționarea corectă a tuturor aplicațiilor instalate pe dispozitivul dvs., vă recomandăm cu tărie să rutați doar aplicațiile fără probleme prin AdGuard. Puteți vedea lista completă a aplicațiilor care nu sunt recomandate pentru filtrare în _Setări_ → _Modul general_ → _Avansat_ → _Setări de nivel inferior_ → _Protecție_ → _Aplicații excluse_.
