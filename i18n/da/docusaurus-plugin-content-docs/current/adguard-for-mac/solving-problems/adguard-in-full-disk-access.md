---
title: Hvorfor AdGuard vises i Fuld diskadgang på macOS
sidebar_position: 13
---

:::info

Denne artikel omhandler AdGuard til Mac. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

AdGuard til Mac kan muligvis optræde i _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskadgang_. En post der betyder ikke, at AdGuard har bedt om Fuld diskadgang eller har modtaget den: macOS tilføjer selv poster, og kontakten forbliver slået fra. Ingen dialogboks vises, når dette sker.

## Hvorfor posten vises

Ingen app kan tilføje eller fjerne sin egen post i _Fuld diskadgang_ eller slå sin egen kontakt til. macOS opretter posten, når en app tilgår data, som systemet beskytter, f.eks. filer tilhørende andre apps.

Listen over beskyttede data afhænger af macOS-versionen. Apple ændrer disse regler mellem udgivelser, så en handling, der ikke tilføjede noget i en ældre version, kan tilføje en post i en nyere. Fra og med macOS 27 er de mapper beskyttet, hvor nogle apps, herunder populære webbrowsere, gemmer deres data. Åbnes en sådan mappe, selv for blot at læse den, føjes appen til listen. Op til og med macOS 26 tilføjede den samme handling intet.

macOS beholder også poster, efter at en app er slettet, og efter at macOS er opdateret. En post, der ses i dag, kan være oprettet for år siden af en tidligere version af appen.

## AdGuard til Mac

AdGuard til skriver et Native Messaging-manifest til Browser Assistent, en webbrowserudvidelse. Manifestet fortæller webbrowseren, hvor AdGuard kan findes, og webbrowseren bruger det til at sende beskeder mellem udvidelsen og AdGuard. Dette er det, der lader Browser Assistent vise, hvordan AdGuard filtrerede den aktuelle side og håndtere blokering uden at åbne appen.

AdGuard gemmer manifestet i webbrowserens mappe i brugerbiblioteket. På macOS 27 er denne mappe beskyttet, så forsøget på at skrive manifestet føjer AdGuard til listen _Fuld diskadgang_.

:::caution

Slå ikke denne kontakt til uden grund. _Fuld diskadgang_ giver appen adgang til næsten alle brugerdata, herunder dokumenter, webbrowserdata, e-mails, beskeder og andre apps' filer. AdGuard fungerer uden.

Kan Browser Assistent ikke oprette forbindelse til AdGuard, start med den mere afgrænsede mulighed: [Browser Assistent virker ikke på macOS 27](https://adguard.com/kb/adguard-for-mac/solving-problems/browser-assistant-macos-27/) viser, hvordan der tildeles adgang til webbrowsermappen alene. Brug kun _Fuld diskadgang_, **såfremt disse trin ikke hjælper**.

:::

## Sådan fjernes posten

Selve posten giver ikke AdGuard adgang til brugerfiler. Adblocking fungerer, selvom kontakten er slået fra, så posten kan blot blive stående.

Sådan fjernes den:

1. To til _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskaadgang_.
2. Slå kontakten fra.
3. Vælg AdGuard-posten, og klik på _−_.

:::note

Såfremt Fuld diskadgang er tildelt AdGuard til Mac for [Browser Assistent](https://adguard.com/kb/adguard-for-mac/solving-problems/browser-assistant-macos-27/), fjernes adgangen, hvis posten fjerner. Adblocking påvirkes ikke.

:::

![Full diskadgang-liste med AdGuard-post \*border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)

For at nulstille posten fra Terminal, eksekvér kommandoen fra [Apples vejledning til nulstilling af adgang til beskyttede ressourcer](https://developer.apple.com/documentation/xcode/resetting-access-to-protected-resources-in-macos):

`tccutil reset SystemPolicyAllFiles com.adguard.mac.adguard`

Virker `tccutil reset` ikke, så prøv at genstarte Mac'en.

Uden `sudo` nulstiller kommandoen posten for den aktuelle brugerkonto. Med `sudo`, for alle konti på Mac'en.

:::note

En _Fuld diskadgang_-post forbliver nogle gange stående efter `tccutil reset`. Fjernelse af posten i _Systemindstillinger_ er mere pålideligt.

:::

### Posten kan dukke op igen

macOS tilføjer posten igen næste gang appen tilgår en beskyttet mappe, f.eks. når AdGuard til Mac skriver webbrowsermanifestet igen. macOS tilføjer selv posten, det betyder ikke, at appen anmodede om adgang.
