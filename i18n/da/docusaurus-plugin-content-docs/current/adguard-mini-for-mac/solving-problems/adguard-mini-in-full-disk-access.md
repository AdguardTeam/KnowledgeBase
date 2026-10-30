---
title: Hvorfor AdGuard Mini vises i Fuld diskadgang på macOS
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard Mini til Mac, der kun beskytter Safari-webbrowseren. For at beskytte Mac'en helt, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

AdGuard Mini til Mac kan muligvis optræde i _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskadgang_. En post der betyder ikke, at AdGuard har bedt om Fuld diskadgang eller har modtaget den: macOS tilføjer selv poster, og kontakten forbliver slået fra. Ingen dialogboks vises, når dette sker.

## Hvorfor posten vises

Ingen app kan tilføje eller fjerne sin egen post i _Fuld diskadgang_ eller slå sin egen kontakt til. macOS opretter posten, når en app tilgår data, som systemet beskytter, f.eks. filer tilhørende andre apps.

Listen over beskyttede data afhænger af macOS-versionen. Apple ændrer disse regler mellem udgivelser, så en handling, der ikke tilføjede noget i en ældre version, kan tilføje en post i en nyere. Fra og med macOS 27 er de mapper beskyttet, hvor nogle apps, herunder populære webbrowsere, gemmer deres data. Åbnes en sådan mappe, selv for blot at læse den, føjes appen til listen. Op til og med macOS 26 tilføjede den samme handling intet.

macOS beholder også poster, efter at en app er slettet, og efter at macOS er opdateret. En post, der ses i dag, kan være oprettet for år siden af en tidligere version af appen.

## AdGuard Mini til Mac

AdGuard Mini til Mac føjer sig ikke selv til listen. Posten stammer fra AdGuard til Safari — [det tidligere navn på den samme app](https://adguard.com/support/adguard-mini-mac/about/what_is.html).

macOS føjede AdGuard til Safari til listen på macOS 13 og senere; på macOS 12 skete dette det ikke. Når appen opdateres til AdGuard Mini til Mac, opretter macOS ikke en ny post, men omdøber den eksisterende til AdGuard Mini. Derfor kan posten være der, selvom appen blev installeret for år siden eller i mellentiden er slettet.

## Systemniveaubeskyttelse er ikke relateret til Fuld diskadgang

_Systemniveaubeskyttelse_, URL-filteret i AdGuard Mini til Mac, er en netværksudvidelse. Den håndterer netværkstrafik og læser ikke filer på disken. Den vises i _Systemindstillinger_ → _Generelt_ → _Loginelementer og Udvidelser_, separat fra _Fuld diskadgang_.

## Sådan fjernes posten

Selve posten giver ikke AdGuard adgang til brugerfiler. Adblocking fungerer, selvom kontakten er slået fra, så posten kan blot blive stående.

Sådan fjernes den:

1. To til _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskaadgang_.
2. Slå kontakten fra.
3. Vælg AdGuard-posten, og klik på _−_.

:::caution

Slå ikke denne kontakt til uden grund. _Fuld diskadgang_ giver appen adgang til næsten alle brugerdata, herunder dokumenter, webbrowserdata, e-mails, beskeder og andre apps' filer. AdGuard Mini fungerer uden.

:::

![Full diskadgang-liste med AdGuard-post \*border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)

For at nulstille posten fra Terminal, eksekvér kommandoen fra [Apples vejledning til nulstilling af adgang til beskyttede ressourcer](https://developer.apple.com/documentation/xcode/resetting-access-to-protected-resources-in-macos):

`tccutil reset SystemPolicyAllFiles com.adguard.safari.AdGuard`

Virker `tccutil reset` ikke, så prøv at genstarte appen.

Uden `sudo` nulstiller kommandoen posten for den aktuelle brugerkonto. Med `sudo`, for alle konti på Mac'en.

:::note

En _Fuld diskadgang_-post forbliver nogle gange stående efter `tccutil reset`. Fjernelse af posten i _Systemindstillinger_ er mere pålideligt.

:::

### Posten kan dukke op igen

macOS tilføjer posten igen næste gang appen tilgår en beskyttet mappe, f.eks. når AdGuard Mini til Mac migrerer indstillinger. macOS tilføjer selv posten, det betyder ikke, at appen anmodede om adgang.
