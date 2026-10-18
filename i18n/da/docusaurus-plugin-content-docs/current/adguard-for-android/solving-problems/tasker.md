---
title: Sådan automatiseres AdGuard til Android
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Mange brugere vælger Android, fordi de kan lide at tilpasse indstillinger og ønsker at styre deres enhed fuldstændigt. Det er derfor helt normalt, hvis nogle af AdGuard-brugerne ikke er tilfredse med standardadfærden. Lad os f.eks. sige, at beskyttelsen ønskes stoppet, når en bestemt app startes, og derefter genstartet igen, når appen lukkes. Dette er en opgave for Tasker-appen.

## AdGuard-grænseflade

Der findes mange tasker-apps, f.eks. [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) etc. AdGuards grænseflade giver disse apps mulighed for at opsætte forskellige automatiseringsregler.

![Automatisering *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Denne grænseflade lader enhver app sende en særlig besked (kaldet "intent") indeholdende navnet på handlingen og om nødvendigt yderligere data. AdGuard vil se på denne intent og udføre de nødvendige handlinger.

### Sikkerhedsovervejelser

Er det ikke farligt at lade nogle tilfældige apps styre, hvad AdGuard gør? Det er det, og derfor sendes en adgangskode sammen med intent'en. Denne adgangskode genereres automatisk af AdGuard, men den kan selvfølgelig ændres til enhver tid.

### Tilgængelige handlinger

Her er handlinger, som, når de er inkluderet i intent'en, vil blive forstået af AdGuard:

`start` starter beskyttelsen, ingen ekstra data kræves;

`stop` stopper beskyttelsen, ingen ekstra data kræves;

`pause` pauserer beskyttelsen. Forskellen mellem dette og `stop` er, at der vises en notifikation, der genstarter beskyttelsen, når der trykkes på den. Ingen ekstra data kræves;

`update` tjekker for tilgængelige filter- og app-opdateringer, ingen ekstra data kræves;

-----

`dns_filtering` slår DNS-filtrering til og fra. Kræver et ekstra flag:

`enable:true` eller `enable:false` slår DNS-filtrering hhv. til og fra.

`fake_dns` tillader opløsning af DNS-forespørgsler på den angivne proxyserver. Kræver et ekstra flag:

`enable:true` eller `enable:false` slår indstillingen af *Brug FakeDNS* hhv. til eller fra.

:::note

Aktivering af indstillingen *Brug FakeDNS* deaktiverer automatisk *DNS-beskyttelse*. DNS-forespørgsler vil ikke blive filtreret lokalt.

:::

-----

`dns_server` skifter mellem DNS-servere, ekstra data kræves:

 `server:adguard dns` skifter til AdGuard DNS-server;

:::note

En komplet oversigt over understøttede udbydernavne findes på vores [liste over kendte DNS-udbydere](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` skifter til den tidligere tilføjede server ved navn `custom`;

 `server:tls://dns.adguard.com` opretter en ny server og skifter til den, hvis tidligere tilføjede servere og udbydere ikke indeholder en server med samme adresse. Ellers skifter den til den respektive server. Serveradresser kan tilføjes som IP (alm. DNS), `sdns://…` (DNSCrypt eller DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) eller `tls://…` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` opretter en server med kommaseparerede adresser og skifter til den. Når en server tilføjes via `server:1.1.1.1, tls://1.1.1.1`, fjernes den tidligere tilføjede server.

 `server:system` nulstiller DNS-indstillingerne til systemets standard DNS-servere.

 -----

`proxy_state` slår den udgående proxy til/fra. Kræver et ekstra flag:

`enable:true` eller `enable:false` slår den udgåede proxy hhv. til og fra.

-----

`proxy_default` indstiller proxyen fra listen over tidligere tilføjede som standard eller opretter en ny, hvis serveren ikke tidligere er tilføjet.

Yderligere data skal angives:

`server:[name]`, hvor `[name]` er navnet på den udgående proxy fra listen.

Eller serverparametrene kan opsættes manuelt:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` fjerner proxyserveren fra listen over tidligere tilføjede.

`server:[name]`, hvor `[name]` er navnet på den udgående proxy fra listen.

Eller remove-parametre kan opsættes manuelt:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Obligatoriske parametre**:

`[type]` — proxyservertype:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — udgående proxydomæne eller IP-adresse;

`[port]` — udgående proxyport (heltal fra 1 til 65535);

- **Valgfrie parametre**:

 `[login og adgangskode]` — kun hvis proxyen kræver det. Disse data ignoreres ved opsætning af **SOCKS4**;

 `[udp]` anvendes kun på **SOCKS5**-servertypen og inkluderer indstillingen **UDP via SOCKS5**. Det er nødvendigt at sætte værdien **true eller false**;

 `[trust]` gælder kun for **HTTPS_CONNECT**-servertypen og inkluderer muligheden **Gør alle certifikatr betroede**. Det er nødvendigt at sætte værdien **true eller false**.

:::note Eksempel

`indstilling pr. navn`: server:MinServer

`manuelle indstillinger`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Husk at inkludere adgangskoden, pakkenavn og klasse. Dette skal gøres for hver enkel intent.**

Ekstra: `adgangskode:*******`

Pakkenavn: `com.adguard.android`

Klasse: `com.adguard.android.receiver.AutomationReceiver`

:::note

Før v4.0 hed klassen `com.adguard.android.receivers.AutomationReceiver`, men så ændrede vi navnet til `com.adguard.android.receiver.AutomationReceiver`. Bruges denne funktion, husk da at opdatere til det nye navn.

:::

### Eksekvering uden notifikation

For at udføre en opgave uden at vise en toast, tilføj en yderligere EKSTRA `quit: true`

### Eksempel

![Automatisering *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
