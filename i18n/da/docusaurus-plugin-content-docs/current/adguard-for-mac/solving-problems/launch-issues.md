---
title: Startproblemer på macOS
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Lejlighedsvis kan macOS forårsage korruption af AdGuards Netværksudvidelsesmodul, så det ikke kan bruge appen. I så tilfælde, følg en af disse vejledninger baseret på den aktuelle OS-version.

## Startproblemer på macOS 11 og senere

Opleves problemer med at starte AdGuard til Mac på Big Sur- og Monterey-operativsystemer, følg da denne vejledning:

1. Genstart Mac'en og gå ind i [gendannelsestilstand](https://support.apple.com/en-us/HT201255).
1. Deaktivér SIP (start **Terminal** fra menuen **Værktøjer** og skriv `csrutil disable`).
1. Genstart Mac'en.
1. Luk AdGuard-appen, åbn **Terminal** og skriv `systemextensionsctl reset`.
1. Genstart Mac'en og gå ind i gendannelsestilstand.
1. Aktivér SIP (Start **Terminal** fra menuen **Værktøjer** og skriv `csrutil enable`).
1. Start AdGuard-appen og aktivér beskyttelsen.

## Startproblemer på macOS 10

Opleves problemer med at starte AdGuard til Mac på Sierra-, Monterey- og Catalina-operativsystemer, følg denne vejledning:

1. Åbn **Terminal** og skriv kommandoen `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Tjek, at flaget `restricted` ikke er til stede (som på skærmfotoet). ![Kommandoeksempel *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Genstart Mac'en i gendannelsestilstand.
1. Åbn **Værktøjer** → **Terminal**.
1. Skriv `csrutil disable`.
1. Angiv administratoradgangskoden.
1. Genstart Mac'en.
1. Åbn **Terminal** og indtast kommandoen: `sudo chflags restricted /private/var/db/KernelExtensionManagemen`.
1. Genstart Mac'en i gendannelsestilstand.
1. Åbn **Værktøjer** → **Terminal** → indtast `csrutil enable` → angiv administratoradgangskoden → genstart Mac'en.
1. Aktivér AdGuard-beskyttelsen.
