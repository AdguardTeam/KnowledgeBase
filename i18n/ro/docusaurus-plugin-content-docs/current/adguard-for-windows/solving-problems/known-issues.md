---
title: Probleme cunoscute ale AdGuard pentru Windows
sidebar_position: 11
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Probleme de compatibilitate între AdGuard pentru Windows și AdGuard VPN pentru Windows

Odată ce instalați AdGuard pentru Windows și AdGuard VPN pentru Windows, acestea încep să funcționeze împreună fără niciun efort din partea dumneavoastră. Cu toate acestea, schimbarea unor setări implicite poate face ca aplicațiile să funcționeze incorect atunci când rulează simultan.

There are two specific settings in AdGuard for Windows: *Use redirect driver mode* and *Filter localhost*. Implicit, prima este dezactivată, iar a doua este activată. Schimbarea oricărei dintre aceste setări va perturba inevitabil filtrarea AdGuard, dacă atât Blocantul de reclame AdGuard cât și AdGuard VPN sunt activate pe dispozitivul dumneavoastră.

Schimbarea acestor setări este necesară doar pentru a rezolva problemele legate de funcționarea simultană a Blocantului de reclame AdGuard și a aplicațiilor de nivel rețea, cum ar fi antivirușii, VPN-urile și filtrele de rețea. Dacă întâlniți o situație în care trebuie să schimbați starea implicită a setărilor de mai sus și doriți ca Blocantul de reclame AdGuard și AdGuard VPN să funcționeze simultan și corect — [creați o problemă pe GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) pentru a putea să vă ajutăm personal.

În prezent, lucrăm la depășirea limitărilor enumerate mai sus privind funcționarea simultană a aplicațiilor noastre.
