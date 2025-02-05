---
title: Pagini protejate la nivel de browser
sidebar_position: 6
---

:::info

Acest articol se referă la extensia de browser AdGuard, care vă protejează doar browserul dvs. Pentru a proteja întregul dispozitiv, [descărcați aplicația AdGuard](https://adguard.com/download.html?auto=true)

:::

Atunci când utilizați o extensie web precum Extensia de browser AdGuard, există anumite domenii restricționate care interzic accesul sau permisiunile. Ca urmare, extensiile de blocare a anunțurilor nu sunt permise să interacționeze sau să modifice conținutul acestor pagini. Cu alte cuvinte, nu li se permite să blocheze reclame și alte elemente enervante pe aceste pagini web.

## Restricții pentru browserul Chromium

Browserele bazate pe Chromium, cum ar fi Google Chrome, mențin o listă de domenii restricționate la care extensiile nu au voie să acceseze. Aceste domenii includ:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URL-uri care încep cu `chrome://`, `chrome-extension://` sau `https://chrome.google.com/webstore/`
- Fișiere PDF
- Pagini în care JavaScript este dezactivat
- Pagini de avertizare de securitate
- Pagini de eroare, cum ar fi erorile 404 și erorile de rețea
- URL-uri care încep cu `view-source:` sau `data:`

## Restricții pentru browserul Firefox

În mod similar, browserul Firefox are propriul set de domenii restricționate unde extensiile nu au voie să funcționeze. Aceste domenii restricționate includ:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Modificarea restricțiilor în Firefox

Modificarea setărilor avansate poate afecta stabilitatea și securitatea Firefox. Acest lucru este recomandat doar pentru utilizatori avansați. Dacă sunteți conștient de riscurile asociate și doriți totuși să activați modulele adăugate interzise pe o pagină protejată, urmați pașii de mai jos:

1. Faceți clic pe butonul de meniu → **Module și teme** → **Extensii**.
2. Faceți clic pe extensia pe care doriți să o activați pe site-urile cu restricții (în acest caz, AdGuard).
3. Select **Allow** in the section **Run on sites with restrictions**.

Alternativ, puteți:

1. Deschideți o filă nouă și tastați **about:config** în bara de adrese.
2. Apăsați **Return**. Este posibil să întâlniți o avertizare. În acest caz, faceți clic pe **Acceptați riscul și continuați**.
3. Căutați `extensions.webextensions.restrictedDomains`. Dacă nu găsiți această preferință, o puteți crea. Selectați pur și simplu tipul **Boolean** și faceți clic pe **+** pentru a-l adăuga.
4. Faceți clic pe butonul de comutare de lângă această preferință și schimbați valoarea acesteia în `false`.
5. Reporniti Firefox.

Pentru informații suplimentare despre acest subiect, citiți [articolul de pe site-ul de suport Mozilla](https://mzl.la/3POXoWi).
