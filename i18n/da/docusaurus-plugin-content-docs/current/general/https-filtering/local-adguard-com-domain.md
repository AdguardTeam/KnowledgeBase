---
title: Local.adguard.org og injections.adguard.org domæner
sidebar_position: 3
---

Brugere af AdGuard til Windows, Mac og Android bemærker måske, at AdGuard tilføjer et lille script til hver webside. Det indlæses fra enten `local.adguard.org` eller `injections.adguard.org` og assisterer AdGuard med at anvende kosmetisk filtrering. Når AdGuard kører, behandler det scriptforespørgsler lokalt i begge tilfælde.

## `local.adguard.org`-domænet

Dette er ikke et rigtigt domæne, og der er ingen server bag navnet. Domænet bruges til effektuering af kosmetisk filtrering på websider, men alt foregår lokalt direkte på enheden uden at oprette forbindelse til nogen server.

### Teknisk forklaring

AdGuard er en indholdsblocker på netværksniveau, så den kan ikke bare føje tilpasset JavaScript og CSS til websider, som webbrowserudvidelser gør. Dette er imidlertid afgørende for indholdsblockingskvaliteten.

For at gøre dette injicerer AdGuard et indholdsscript, der ser således ud:

`<script src="https://local.adguard.org/.../content-script.js">`

Indholdsscriptet skjuler eller fjerner annonceindhold fra websider. Forbindelser til IP-adressen for `local.adguard.org` opfanges af AdGuard på netværksniveau og **behandles lokalt**. Det er grunden til, at domænet har en “statisk” IP-adresse, der ikke ændres.

**Hvorfor kræves en rigtig IP-adresse?**

- Vi kan ikke bruge `127.0.0.1`, da webbrowserne ikke accepterer det.
- Brug af IP-adresser fra de private undernet er muligt, men denne løsning har to ulemper.
    - For det første er der en lille chance for at interferere med en eksisterende intranettjeneste og ødelægge adgangen hertil.
    - For det andet kan nogle DNS-servere betragte dette som et DNS-genbindingsangreb og nægte `local.adguard.org` svar.

### Bekræftelse

Deaktiveres AdGuard og `local.adguard.org` forsøges åbnet i webbrowseren, kan forbindelsen ikke oprettes: AdGuard er der ikke længere til at opfange den, og der er ingen server på den adresse.

## Domænet `injections.adguard.org`

Når trafikken går igennem en eksplicit proxy (en proxy indstillet i systemet eller webbrowseren, ikke i AdGuard), bruger AdGuard `injections.adguard.org` i stedet for `local.adguard.org` til at anvende kosmetiske regler. De fleste brugere ser aldrig dette domæne.

## Hvordan domænerne `injections.adguard.org` og `local.adguard.org` adskiller sig

- **`local.adguard.org`:** AdGuard opsnapper forbindelsen fuldstændigt og svarer på enheden. Forespørgslen forlader aldrig enheden.
- **`injections.adguard.org`:** AdGuard bruger dette domæne, når den registrerer, at trafikken går igennem en eksplicit proxy. I modsætning til `local.adguard.org` skal en forbindelse til dette domæne være mulig gennem proxyen. AdGuard behandler forespørgslen på scriptet lokalt i selve den etablerede forbindelse.

Så selvom `injections.adguard.org` er tilgængelig over netværket, henter AdGuard ikke scriptet fra sin server. Hvis AdGuard ikke kører, forbliver domænet tilgængeligt, men dets server behandler eller logger ikke brugerforespørgsler.

### Hvis en side fryser ved “Venter på local.adguard.org” eller “Venter på injections.adguard.org”

Hvis AdGuard ikke håndterer en forbindelse til `injections.adguard.org`, fejler den normalt hurtigt. Hvis forbindelsen i stedet timer ud, kan webbrowseren vise “Venter på injections.adguard.org”, og indlæsning af siden kan tage længere tid.

Oftest overtager en anden app, der filtrerer trafik, forbindelsen, før AdGuard gør det: Et antivirusprogram med Web-beskyttelse, et VPN- eller proxy-værktøj eller en anden adblocker. AdGuard kan derefter ikke injicere sit indholdsscript, så siden indlæses langsomt, og nogle kosmetiske regler anvendes ikke.

Prøv at deaktivere sådanne app én efter én for at finde problemkilden. Fortsætter problemet, kontakt venligst supporten via support@adguard.com. Inkludér AdGuard-version, den webbrowser, hvori forsinkelsen opleves samt outputtet af `nslookup injections.adguard.org`. Denne kommando viser, om domænet opløses, men ikke om en forbindelse til det udløber.
