---
title: Instalarea manuală a certificatului
sidebar_position: 1
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pentru macOS trebuie să instaleze certificatul rădăcină în depozitul de certificate pentru a putea [filtra traficul HTTPS](/general/https-filtering/what-is-https-filtering). Această acțiune se efectuează automat în cele mai multe cazuri atunci când rulați aplicația pentru prima dată, dar utilizatorii browserelor bazate pe Gecko (Firefox, Waterfox etc.) care au setată o parolă principală pentru browserul lor pot fi solicitați să facă pași suplimentari (deoarece aceste browsere folosesc propriul depozit de certificate în loc de cel al sistemului). Aceștia trebuie fie să introducă parola principală atunci când sunt solicitați (pentru a permite AdGuard accesul la depozitul de certificate), fie să instaleze manual certificatul.

Pentru a instala manual certificatul în browser de tip Firefox:

  1. Deschide *Preferințe*

  2. Mergeți la *Intimitate & Securitate* → *Certificate*

  3. Faceți clic pe *Vizualizați Certificatele*

  4. Navigați la tab-ul *Autorități* și faceți clic pe butonul *Import...*

  5. Select file `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` or just download it from https://local.adguard.org/cert using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard

Acțiunile exacte necesare pentru diferite browsere bazate pe Gecko pot varia, dar secvența generală și calea către `AdGuard Personal CA.cer` vor fi aceleași.
