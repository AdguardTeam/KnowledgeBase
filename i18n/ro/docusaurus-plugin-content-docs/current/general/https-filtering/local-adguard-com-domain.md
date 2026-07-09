---
title: Domeniul local.adguard.org
sidebar_position: 3
---

Utilizatorii AdGuard pentru Windows, macOS și Android pot observa că AdGuard adaugă un mic script pe fiecare pagină web, care este încărcată din domeniul `local.adguard.org`.

În primul rând, nu vă faceți griji, acesta nu este un domeniu real, iar de fapt nu există un server real cu acest nume. Acest domeniu este folosit pentru a aplica filtrarea cosmetică pe paginile web, dar totul se face local, direct pe dispozitivul dumneavoastră, fără a se conecta la vreun server.

### Explicație tehnică

Dar ce se întâmplă și de ce se face asta? Vă rugăm să citiți explicația tehnică de mai jos.

1. AdGuard este un blocant de conținut la nivel de rețea, așa că nu poate adăuga pur și simplu JavaScript și CSS personalizate pe pagini web, așa cum fac extensiile pentru browser. Cu toate acestea, a face acest lucru este crucial pentru blocarea conținutului de calitate.
2. Pentru a face acest lucru, AdGuard injectează un "script de conținut" care arată așa: `<script src="https://local.adguard.org/.../content-script.js">`. Acest "script de conținut" se ocupă de filtrarea cosmetică, ascunzând sau eliminând conținutul publicitar de pe paginile web.
3. Conexiunile la adresa IP a domeniului `local.adguard.org` sunt interceptate de AdGuard la nivel de rețea și **sunt procesate local**. Aceasta este motivul pentru care acel domeniu are o adresă IP "statică" care nu se schimbă timp de ani de zile.

**De ce trebuie să folosim o adresă IP reală pentru asta?**

- Nu putem folosi `127.0.0.1` deoarece browserele nu o vor accepta.
- Folosirea unei adrese IP din subrețelele private este posibilă, dar această soluție are două dezavantaje.
    - Primul, există o șansă mică de a intersecta cu un serviciu intranet existent și de a întrerupe accesul la acesta.
    - Al doilea, unele servere DNS pot considera aceasta un atac de reîmpăturire DNS și pot refuza să răspundă la `local.adguard.org`.

### Verificare

Acest lucru este ușor de verificat. Dacă dezactivați AdGuard, veți vedea că este pur și simplu imposibil să stabiliți o conexiune la `local.adguard.org` deoarece nu există un server cu această adresă. Încercați doar să o deschideți în browser când AdGuard este dezactivat.
