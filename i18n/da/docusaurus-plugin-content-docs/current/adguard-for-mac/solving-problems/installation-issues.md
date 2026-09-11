---
title: Løsning af installationsproblemer
sidebar_position: 5
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## "Installation mislykkedes"-fejl i macOS Catalina

Under installationen kan der opleves en fejl som denne:

![Installationsfejlskærm](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Følg denne vejledning for at løse problemet:

1. Genstart Mac'en
2. Når Mac'en genstarter, tryk og hold tasterne *Command(⌘) + R* nede umiddelbart efter, at opstartslyden afspilles. Hold tasterne nede, indtil Apple-logoet vises for at få computeren i Gendannelsestilstand.
3. Vælg fra den øverste bjælke *Værktøjer* → *Terminal*, og eksekvér denne kommando: `csrutil disable`
4. Genstart Mac'en og log ind på profilen Administrator
5. Åbn Finder-vinduet og vælg fra den øverste bjælke *Gå* → *Gå til mappe* og skriv `~/private/`
6. Opret en mappe med navnet *tmp* og angiv den aktuelle adgangskode
7. Start AdGuard-installationen

Når installationen er fuldført, genstart Mac'en i Gendannelsestilstand jf. vejledningen ovenfor og eksekvér kommandoen `csrutil enable` i Terminal for at aktivere systembeskyttelse.
