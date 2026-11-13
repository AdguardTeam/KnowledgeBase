---
title: DNS-beskyttelse
sidebar_position: 3
---

:::info

Denne side omhandler AdGuard Mini til Android, der beskytter Samsung Browser og Yandex Browser samt yder DNS-beskyttelse. For at beskytte Android-enheden fuldstændigt og få mere avancerede indstillinger, [download AdGuard til Android](https://agrd.io/download-kb-adblock).

:::

Med _DNS-beskyttelse_ udvider AdGuard Mini til Android beskyttelsen til hele enheden. Den krypterer DNS-forespørgsler, så ISP'en ikke kan se de besøgte websteder, og blokerer forbindelser til reklame- og sporingsdomæner på DNS-niveau — i alle webbrowsere og apps, ikke kun de understøttede.

![DNS-beskyttelse](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_protection.png)

## Sådan fungerer det

Hver gang en app eller et websted opretter forbindelse til internet, sender enheden først en DNS-forespørgsel for at oversætte domænenavnet til en IP-adresse. DNS-beskyttelse ruter disse forespørgsler gennem den valgte DNS-server. Er et domæne kendt for at levere annoncer eller sporing, blokeres forbindelsen.

For at gøre dette opretter AdGuard Mini et lokalt VPN på enheden. Det er ikke et "rigtigt" VPN: Trafikken rutes ikke igennem fjernservere, al filtrering sker på den lokale enhed.

:::note

Android tillader kun én aktiv VPN-forbindelse ad gangen. Kører en anden VPN-app, vil DNS-beskyttelse ikke fungere sammen med den. Læs mere i [Problemløsning](/adguard-mini-for-android/solving-problems/dns-protection-doesn't-work.md).

:::

For at aktivere _DNS-beskyttelse_, åbn AdGuard Mini til Android og gå til _Beskyttelse_ → _DNS-beskyttelse_, og slå den til.

## DNS-server

En [_DNS-server_](https://adguard-dns.io/kb/general/dns-providers/) kan vælges i indstillingerne for _DNS-beskyttelse_. Forskellige servere håndterer DNS-forespørgsler forskelligt. F.eks. blokerer _AdGuard DNS_ som standard reklame- og sporingsdomæner. Der kan også vælges en _ikke-filtrerende DNS_-server: Den blokerer ikke noget af sig selv, da det bestemmes af brugeren via [DNS-filtre](https://adguard-dns.io/kb/general/dns-filtering/) og [DNS-brugerregler](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

![DNS-server](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_server.png)

## DNS-filtre

:::note

Denne funktion er kun tilgængelig i den [fulde version](https://adguard.com/license.html).

:::

DNS-filtre er lister over domæner, som bør blokeres på DNS-niveau. Aktivér dem for at blokere flere reklame- og sporingsdomæner på enhedsniveau.

![DNS-filtre](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_filters.png)

Der kan også tilføjes egne [_DNS-brugerregler_](https://adguard-dns.io/kb/general/dns-filtering-syntax/). De fungerer som et personligt DNS-filter: Én regel anvendes overalt, i enhver webbrowser og app. F.eks. blokerer `||example.org^` `example.org`, inkl. underdomæner, på hele enheden.
