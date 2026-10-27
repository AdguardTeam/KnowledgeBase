---
title: Kompatibilitetsproblemer med forskellige macOS-versioner
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Aktuelle problematikker

Apple udgiver årligt en ny macOS-version, der introducerer innovative løsninger og tilføjer nye nyttige funktioner. Nogle af dem, såsom Network Extensions API (Big Sur) eller iCloud Private Relay (Monterey), medfører dog nogle problemer for mange applikationer, herunder også AdGuard. I denne artikel gennemgås de kendte problematikker, som er specifikke for hver macOS-version, samt mulige løsningsmodeller.

### Monterey 12: Aktuelle problematikker

Disse problematikker er enten ikke løst af Apple endnu eller er kun delvist løst.

#### Kompatibilitet med iCloud Private Relay

Pt. kan AdGuard og iCloud Private Relay ikke fungere sideløbende. AdGuard kan ikke blokere annoncer, da iCloud Private Relay krypterer trafik, før AdGuard kan filtrere netværksforbindelser. Når iCloud Private Relay er aktivt, umuliggøres enhver filtrering (inkl. lokal filtrering). AdGuard kan derfor ikke filtrere trafik eller udføre DNS-filtrering i Safari. Som standard benytter AdGuard derfor "standardrutning", hvilket deaktiverer iCloud Private Relay.

For en dybere forståelse af denne problematik, tjek [denne artikel](../icloud-private-relay).

**Anbefalet løsning**

Det anbefales at bruge AdGuard sammen med en mere traditionel VPN-tjeneste såsom [AdGuard VPN](https://adguard-vpn.com/).

**Alternativ løsning**

AdGuard kan forhindres i at bruge "standardruten" ved at deaktivere den. Dette kan gøres via Avancerede indstillinger → `network.extension.monterey.force.split.tunnel`. Bemærk, at aktivering af indstillingen vil medføre de ovenfor nævnte problematikker.

![Avancerede indstillinger *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Kompatibilitet med Protect Mail Activity

Apples Mail-app bruger nu en proxy til at skjule brugerens IP-adresse ved download af billeder fra e-mails. Dette fungerer dog ikke, såfremt en VPN-forbindelse er aktiv. Da den behandler AdGuard som et VPN, præindlæses billeder ikke automatisk.

For en dybere forståelse af denne problematik, tjek [denne artikel](../protect-mail-activity).

**Anbefalet løsning**

P.t. anbefales brug af en mere traditionel VPN-tjeneste, såsom [AdGuard VPN](https://adguard-vpn.com/), i stedet for de nyere Apple-fortrolighedsfunktioner.

### Monterey 12, Big Sur 11.6 og senere: Aktuelt eksisterende problematikker

Disse problematikker er enten ikke løst af Apple endnu eller er kun delvist løst.

#### Kompatibilitet med Cisco AnyConnect

I tilstanden *Netværksudvidelse* fungerer AdGuard ikke sammen med Cisco AnyConnect. AdGuards tilstand skal ændres til *Automatisk proxy*. For at gøre det, følg [denne vejledning](#automatic-proxy).

#### Kompatibilitet med Flutter

Dette problem er løst i Flutter 2.2 udgivet i juni 2021. For at rette det i applikationer udviklet i Flutter, skal der dog afventes opdateringer.

Anvendes Flutter sammen med AdGuard i tilstanden "Netværksudvidelse" (eller en hvilken som helst anden "Transparent Proxy"-type-app) i Monterey eller Big Sur, opstår der problemer: Projekter åbnes ikke, og Flutter vil reelt være ødelagt. Vi har allerede anmeldt denne fejl til Apple. I mellemtiden kan disse midlertidige løsninger anvendes:

1. Brug AdGuard i tilstanden [Automatisk proxy](#automatic-proxy).

1. Deaktivér SIP, og skift AdGuard til tilstanden Kernel-udvidelse som forklaret [hér](#kernel-extension).

#### VPN-apps med ældre API

Selvom AdGuard vises som et VPN i systemindstillingerne, bør den ikke forårsage konflikter under drift sammen med andre VPN-baserede apps. Bruges imidlertid en VPN-baseret app downloadet uden for App Store, er der risiko for, at den anvender den gamle VPN API og derfor skal undtages fra filtrering:

1. Åbn AdGuards menu.
1. Vælg *Præferencer…*.
1. Skift til fanen *Netværk*.
1. Klik på knappen *Applikationer…*.
1. Find appen, der skal undtages, og fjern markeringen af dens afkrydsningsfelt.

![Filtrerede apps](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Allerede løste problematikker

Disse problematikker er blevet løst af Apple nu, men de kan stadig opstå i ældre versioner af macOS Big Sur.

### Kompatibilitet med Little Snitch 5

P.t. er tilstanden Netværkudvidelse i AdGuard inkompatibel med [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). Når begge kører, er der risiko for at støde på problemer med adfærden af forskellige apps, selv hvis de ikke filtreres af AdGuard. Problematikken er direkte forårsaget af en fejl i Big Sur, og vi har allerede informeret Apple herom. Vi antager derfor, at problematikken er løst i en af de kommende opdateringer.

Deaktivering af forbindelsesovervågning i Little Snitch løser dog ikke problemet, da dette ikke fjerner Little Snitch-udvidelsen fra systemhukommelsen. Indtil Apple har rettet fejlen, anbefales det derfor at skifte til filtreringstilstanden [**Automatisk proxy**](#automatic-proxy), når AdGuard er i drift sammen med Little Snitch i Big Sur.

### Kompatibilitet med lokale proxyer

:::note

Nu kan AdGuard problemfrit (for det meste) filtrere lokale proxyer. Opleves problemer i OS-version 11.1+, eller hvis Big Sur 11.0 anvendes, skal den lokale proxy fjernes fra systemindstillingerne og en upstream-proxy i stedet opsættes i AdGuard jf. vejledningen nedenfor.

:::

Sådan opsættes en upstream-proxy i AdGuard til Mac i Big Sur:

1. Åbn AdGuard-indstillingerne *Præferencer → Netværk → Udgående proxy*.
2. Vælg afhængigt af proxytypen HTTP, HTTPS, SOCKS4 eller SOCKS5.
3. Udfyld felterne:
    - `host` er proxyserverens IP-adresse,
    - `port` er det portnummer, proxyserveren skal anvende,
    - `user` og `password` er brugernavn og adgangskode til proxyen (hvis krævet). Ignorér det ene eller begge, hvis ikke relevant.

Opleves problemer, kontakt da vores tekniske support via support@adguard.com.

#### Eksempel 1: Opsætning af en upstream Shadowsocks-proxy

Her er et eksempel på, hvordan en upstream-proxy opsættes til [Shadowsocks](https://shadowsocks.org).

Først og fremmest kræves en fungerende serverside til proxyen. Til dette ønskes sandsynligvis anvendt en JSON-fil, såsom denne (`server` og `password` værdier er valgt tilfældigt her):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

Yderligere information om at kommer i gang kan findes på [Shadowsocks-webstedet](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Dernæst skal Shadowsocks-klienten installeres på Mac'en. Sørg for, at 'Manuel tilstand' eller 'Autotilstand' er valgt i indstillingerne! Opsætningen vil ikke fungere, såfremt 'Global tilstand' (eller 'Autotilstand' i Big Sur-versioner før 11.1) er valgt.

![Valg af Manuel tilstand eller Autotilstand i indstillingerne *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Gå dernæst til *AdGuard-menuen → Avanceret → Avancerede indstillinger...* og sæt *Værdi*-området for `upstream.proxy`-indstillingen til `socks5://localhost:1080`. Bemærk, at "local_port"-værdien fra JSON-filen skal benyttes her.

Da Shadowsocks anvender SOCKS5, skal værdien af `upstream.proxy.socks5udp`-indstillingen i AdGuards Avancerede indstillinger sættes til `true` for at få AdGuard til at rute UDP-trafik til proxyserveren.

#### Eksempel 2: Opsætning af upstream Surge-proxy

I Big Sur v11.1+ er der ingen kendte konflikter mellem AdGuard og Surge-proxy. Bruges en ældre version af Big Sur (før 11.1), så tjek at **Systemproxy** nederste til højre slået fra. Ellers fungerer Surge ikke med AdGuard. **Forbedret tilstand** kan dog slås til uden at forårsage konflikt i nogen Big Sur-version.

![Opsætning af upstream Surge-proxy *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Gå dernæst til *Præferencer → Netværk → Udgående proxy* og udfyld felterne. Som SOCKS5 proxy-type:

- `host`: localhost
- `port`: 6153 Som HTTP proxy-type:
- `host`: localhost
- `port`: 6152

## Alternativer til brugen af en Netværksudvidelse

Det er umuligt at forudse hvert eneste mulige problematik, der kan opstå i Big Sur eller Monterey, da der er et utal af forskellige hardware/software- og indstillingsmuligheder. Opleves kompatibilitetsproblemer, bedes vores supportteam kontaktet, men afprøv gerne en af disse løsninger først.

### Brug af "Automatisk proxy"-filtreringstilstand {#automatic-proxy}

Opleves problematikker i Big Sur eller Monterey, som ikke ingen af metoderne ovenfor kan løse, prøv at skifte AdGuard til tilstanden *Automatisk proxy*.

1. Åbn AdGuards menu.
1. Vælg *Præferencer…*.
1. Skift til fanen *Netværk*.
1. Klik på knappen *Vælg tilstand…*.
1. Vælg *Automatisk proxy*.

![Skift AdGuard til Automatisk proxy-tilstand](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Nu har AdGuard automatisk føjet en **.pac**-fil til Mac'ens netværksindstillinger, så systemet nu betragter AdGuard som en proxy og forsøge at sende al trafik herigennem.

:::note

Visse apps ignorerer muligvis denne systemindstilling, hvorfor deres trafik ikke filtreres.

:::

### Aktivering af Kernel Extension i Big Sur og Monterey {#kernel-extension}

Som standard bruger AdGuard Network Extension-framework i Big Sur og Monterey, da det gamle Kernel Extension-framework er deaktiveret der. Dette kan forårsage visse kompatibilitetsproblematikker, men for at genaktivere Kernel Extension, skal System Integrity Protection (SIP) først deaktiveres. For at deaktivere SIP, følg denne vejledning:

1. Klik på *Apple-symbolet* på menubjælken.
1. Klik på *Genstart*
1. Hold *Kommando-R* nede for at genstarte i Gendannelsestilstand.
1. Klik på *Værktøjer*.
1. Vælg *Terminal*.
1. Skriv `csrutil disable`.
1. Tryk på *Retur* eller *Retur* på tastaturet.
1. Klik på *Apple-symbolet* på menubjælken.
1. Klik på *Genstart*

Nu da SIP er deaktiveret, aktiveres Kernel Extension således:

![Aktivering af Kernel Extension](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Åbn AdGuards menu.
1. Vælg *Præferencer…*.
1. Skift til fanen *Netværk*.
1. Klik på knappen *Vælg tilstand…*.
1. Vælg *Kernel Extension*.
1. Bekræft, at der skal skiftes til Kernel Extension.

:::caution

Denne metode anbefales dog kun brugt, såfremt alt andet fejler, da den kan medføre uventede problemer.

:::
