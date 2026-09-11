---
title: Configurați filtrarea în browserul Tor
sidebar_position: 10
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

By default, Tor Browser is added to AdGuard’s list of filtered applications. Cu toate acestea, pentru a-l filtra, AdGuard trebuie să schimbe setările de securitate ale Tor. Aceasta va face ca Tor să aibă încredere în certificatul CA al AdGuard.

Dacă decideți să filtrați Tor și să verificați în *Preferințe* → *Rețea* → *Aplicații*, AdGuard vă va arăta această casetă de dialog:

![Caseta de dialog AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Prin actualizarea setărilor Tor, AdGuard va seta următoarele:

`security.enterprise_roots.enabled`: true

Această setare va face ca Tor să aibă încredere în certificatele rădăcină. [Aflați mai multe](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning este o măsură de securitate care permite site-urilor web să se asigure că conexiunea între un site web și un utilizator este autentică. Aceasta implică ca site-ul să publice o listă de chei publice sau pinuri în care are încredere. Cu nivelul de aplicare setat la 1, pinningul nu este aplicat pentru CA-uri personalizate. [Aflați mai multe](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Pentru a aplica modificările, va trebui să reporniți browserul Tor.

Dacă schimbați manual aceste setări, filtrarea Tor va fi oprită.
