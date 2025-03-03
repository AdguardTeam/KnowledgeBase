---
title: Cum să generați fișiere HAR
sidebar_position: 5
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Fișierele HAR sunt procesate conform [Politicii de confidențialitate AdGuard](https://adguard.com/en/privacy.html).

:::

## Ce sunt fișierele HAR?

Formatul HAR (HTTP ARchive) este un fișier arhivă format JSON pentru înregistrarea interacțiunii unui browser web cu un site. Specificațiile formatului HAR definesc datele arhivate pentru tranzacțiile HTTP pe care un browser le folosește pentru a exporta informații detaliate despre paginile web pe care le încarcă. O descriere mai detaliată a formatului fișierelor HAR și a specificațiilor sale poate fi găsită pe site-ul [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Cum să generați fișiere HAR

Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. Pentru a obține fișiere HAR, urmați acești pași:

1. Deschideți AdGuard și mergeți la **Setări** (⚙ icon în colțul din dreapta jos).
2. Atingeți **Modul general** → **Avansat** → **Setări de nivel scăzut**.
3. Derulați în jos și activați **Capturați HAR** în secțiunea de filtrare.
4. Deschideți aplicația și efectuați acțiunile necesare pentru a reproduce problema.
5. Dezactivați **Capturați HAR**.
6. Întoarceți-vă la **Avansat**.
7. Atingeți **Exportați jurnalele și informațiile de sistem** → **Permiteți** (dacă este necesar) → **Salvați**.

**Trimiteți fișierul generat cu jurnalele la serviciul de suport AdGuard.**

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.

:::

## Cum să analizați fișiere HAR

Iată câteva surse pe care le putem recomanda pentru a analiza fișiere HAR:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) este un instrument de analiză HAR, vizualizând fișierele jurnal HTTP Archive (HAR) create de instrumentele de urmărire HTTP.
- [Fiddler](https://www.telerik.com/fiddler) este un proxy de depanare web, vă permite să capturați, inspectați, monitorizați tot traficul HTTP(S) între computerul dvs. și Internet, să simulați solicitări și să diagnosticați problemele de rețea.
