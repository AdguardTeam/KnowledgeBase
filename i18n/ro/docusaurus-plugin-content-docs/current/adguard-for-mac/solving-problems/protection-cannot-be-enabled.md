---
title: Protecția nu poate fi activată
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Dacă protecția AdGuard nu poate fi activată dintr-un anumit motiv, efectuați următorii pași:

1. Faceți clic pe iconița AdGuard din bara de meniu și mergeți la *Avansat* → *Resetare setări...* → *Ieșiți din AdGuard...*

2. În căutarea Spotlight, tastați Terminal, introduceți `sudo rm -R /Library/Application\ Support/com.adguard.adguard` și executați.

3. Reporniți computerul dvs.

4. Deschideți din nou Terminalul, tastați `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` și executați. Trebuie să primiți următorul mesaj: `No such file or directory`.

5. Porniți AdGuard și introduceți informațiile de conectare atunci când vi se solicită.
