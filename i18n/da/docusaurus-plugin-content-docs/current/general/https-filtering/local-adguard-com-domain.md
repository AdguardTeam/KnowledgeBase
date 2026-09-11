---
title: Local.adguard.org-domæne
sidebar_position: 3
---

Brugere af AdGuard til Windows, Mac og Android bemærker muligvis, at AdGuard tilføjer et lille script til hver webside, der indlæses fra domænet `local.adguard.org`.

Først og fremmest, bare rolig, dette er ikke et reelt domæne, og der er faktisk ingen rigtig server med det navn. Domænet bruges til effektuering af kosmetisk filtrering på websider, men alt foregår lokalt direkte på enheden uden at oprette forbindelse til nogen server.

### Teknisk forklaring

Men hvad sker der, og hvorfor gøres dette? Læs venligst den tekniske forklaring nedenfor.

1. AdGuard er en indholdsblocker på netværksniveau, så den kan ikke bare tilføje tilpasset JavaScript og CSS til websider, som webbrowserudvidelserne gør. At gøre dette er imidlertid afgørende for indholdsblockingkvaliteten.
2. For at gøre det injicerer AdGuard et "indholdsscript", der ser således ud: `<script src="https://local.adguard.org/.../content-script.js">`. Dette "indholdsscript" tager sig af kosmetisk filtrering, skjuler eller fjerner annonceindhold fra websiderne.
3. Forbindelser til IP-adressen på domænet `local.adguard.org` opfanges af AdGuard på netværksniveau og **behandles lokalt**. Det er grunden til, at dette domæne har en "statisk" IP-adresse, der er uændret i årevis.

**Hvorfor kræves en rigtig IP-adresse til dette?**

- `127.0.0.1` kan ikke bruges, da webbrowsere ikke accepterer den.
- Brug af IP-adresser fra de private undernet er muligt, men denne løsning har to ulemper.
    - For det første er der en lille chance for at interferere med en eksisterende intranettjeneste og ødelægge adgangen hertil.
    - For det andet kan nogle DNS-servere betragte dette som et DNS-genbindingsangreb og nægte `local.adguard.org` svar.

### Bekræftelse

Dette er nemt at bekræfte. Deaktiveres AdGuard, vil der være tydeligt, at det simpelthen er umuligt at etablere forbindelse til `local.adguard.org`, da ingen server med den adresse findes. Prøv blot at åbne den i webbrowseren, når AdGuard er deaktiveret.
