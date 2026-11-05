---
title: Vejledning til Lavniveauindstillinger
sidebar_position: 5
---

:::info

Denne artikel dækker AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Sådan tilgås Lavniveauindstillinger

:::caution

Ændring af *Lavniveauindstillinger* kan forårsage problemer med AdGuards ydeevne, afbryde internetforbindelsen eller kompromittere brugersikkerhed og -fortrolighed. Dette afsnit bør kun åbnes af brugere, som ved, hvad de foretager sig, eller på anmodning af vores supportteam.

:::

For at gå til *Lavniveauindstillinger*, tryk på tandhjulsikonet nederst til højre for at åbne *Indstillinger*. Vælg afsnittet *Generelt*, og slå kontakten *Avanceret tilstand* til, hvorefter afsnittet *Avancerede indstillinger* vises nedenfor. Tryk på *Avancerede indstillinger* for at komme til afsnittet *Lavniveauindstillinger*.

## Lavniveauindstillinger

### Tunneltilstand

Der er to primære tunneltilstande: *Split* og *Full*. Tilstanden *Split-Tunnel* giver kompatibilitet mellem AdGuard og såkaldte "Personal VPN"-apps. I tilstanden *Full-Tunnel* kan intet andet VPN fungere samtidigt med AdGuard.

Der er en specifik funktion i tilstanden *Split-Tunnel*: Ved dårlig DNS-proxyydelse, hvis f.eks. svaret fra AdGuard DNS-serveren ikke returneres rettidigt, vil iOS i stedet omrute trafik igennem DNS-serveren angivet i iOS-indstillingerne. Ingen annoncer blokeres på dette tidspunkt, og DNS-trafik krypteres ikke.

I tilstanden *Full-Tunnel* bruges kun den i AdGuard-indstillinger angivne DNS-server. Svarer den ikke, fungerer internet simpelthen ikke. Aktiveret *Full-Tunnel*-tilstand kan påvirke ydeevnen af nogle programmer negativt (f.eks. FaceTime) og forårsage problemer med app-opdateringer.

Som standard bruger AdGuard tilstanden *Split-Tunnel* som den mest stabile mulighed.

Der er også en yderligere tilstand betegnet *Full-Tunnel (uden VPN-ikon)*. Denne er identisk med tilstanden *Full-Tunnel*, men blot opsat så VPN-ikonet ikke vises på systembjælken.

### Blokeringstilstand

I dette modul kan der vælges, hvordan AdGuard skal svare på DNS-forespørgsler, som skal blokeres:

- Standard — svar med nul IP-adresse, når blokeret af adblock-lignende regler; svar med IP-adressen angivet i reglen, når blokeret af /etc/hosts-lignende regler
- REFUSED — svar med REFUSED-kode
- NXDOMAIN — svar med NXDOMAIN-kode
- Uspecificeret IP — svar med nul IP-adresse
- Tilpasset IP — svar med en manuelt angivet IP-adresse

### Blokér IPv6

Flyttes kontakten til højre, aktiveres blokering af IPv6-forespørgsler (AAAA-forespørgsler). AAAA-type DNS-forespørgsler opløses ikke, hvorfor kun IPv4-forespørgsler kan behandles.

### Blokeret svar-TTL

Her kan en enheds cachningsperiode for et DNS-forespørgselssvar angives. I den angivne levetid ((time-to-live) i sekunder) kan forespørgslen læses fra cachen, uden at DNS-serveren skal forespørges igen.

### Bootstrap-servere

For DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC kræves en bootstrap-server for at få IP-adressen på den primære DNS-server. Hvis ikke angivet, bruges DNS-serveren fra iOS-indstillinger som bootstrap-server.

### Reserveservere (fallback)

Her kan angives en alternativ server, som en forespørgsel omrutes til, såfremt den primære server ikke svarer. Hvis ikke angivet, bruges systemets DNS-server som reserve. Der kan også angives `none`, i hvilket tilfælde ingen reserveserver opsættes, og kun den primære DNS-server vil blive brugt.

### Opdateringstid for baggrunds-app

Her kan den frekvens vælges, hvormed applikationen vil søge efter filteropdateringer i baggrunden. Bemærk, at opdateringstjek ikke udføres hyppigere end den angivne frekvens, men de nøjagtige intervaller overholdes muligvis ikke.
