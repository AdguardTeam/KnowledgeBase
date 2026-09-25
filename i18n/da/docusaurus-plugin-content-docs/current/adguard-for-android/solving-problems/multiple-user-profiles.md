---
title: Problemer forårsaget af flere brugerprofiler
sidebar_position: 9
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

I denne artikel findes metoder til at løse problemer med AdGuard under oprettelse af *flere konti* eller *Begrænsede profiler* på Android-enheder.

## Problemer forårsaget af flere brugerprofiler

Er AdGuard installeret på Android 9 og senere til mere end én brugerprofil på enheden, kan der opstå problemer ved afinstallation af appen. Når AdGuard afinstalleres i én brugerprofil, vises appen stadig på app-listen, men den vil hverken kunne afinstallere eller geninstalleres. Dette sker, fordi AdGuard er installeret i en anden brugerprofil på enheden.

Forsøges AdGuard geninstalleret efter et mislykket afinstallationsforsøg, vises fejlmeddelelsen "Appen kan ikke installeres på denne enhed”.

For at løse dette problem skal appen afinstalleres for alle brugere: Gå til Indstillinger → Alle apps → AdGuard. Tryk på de tre prikker øverste til højre og vælg *Afinstallér for alle brugere*.

![Afinstallation *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problemer forårsaget af brug af en Begrænset tilstandsprofil

Ejere af mobiler, tablets eller TV'er med Android 7+ som operativsystem, kan stå over for problemet forårsaget ved brug af **en profil med Begrænset tilstand**. Haves en sådan profil, begrænses **AdGuard** ligesom andre apps, som bruger VPN, i selektiv filtrering af VPN-trafik. Som en konsekvens kan AdGuard ikke starte beskyttelse i en **lokal VPN-tilstand**. En af årsagerne til denne situation kan også være brugen af **Dual App/Dual Messenger-profil** på enheden. Nedenfor beskrives de anbefalinger, som kan anvendes, hvis dette problem opstår.

### Løsninger

Der er tre måder at løse problemet på:

### Mulighed 1: Tildel AdGuard tilladelser via ADB

:::note

Denne tilgang er tilgængelig fra **AdGuard v3.5 nightly 6**. Benyttes en ældre version, kan den seneste opdatering hentes [hér](https://adguard.com/adguard-android/overview.html).

:::

1. Aktivér både **Udviklertilstand** samt **USB-fejlfinding**:

    - Åbn appen **Indstillinger** på mobilen;
    - Gå til afsnittet **System** (sidste punkt på indstillingsmenuen). Find i dette afsnit underpunktet **Om telefon**;
    - Tryk 7 gange på linjen **Build-nummer**. Dernæst ses meddelelse **Du er nu udvikler** (angiv om nødvendigt enhedens oplåsningskode);
    - Åbn **Systemindstillinger** → **Udviklerindstillinger** → rul ned og aktivér **USB-fejlretning** → bekræft, at fejlretning er aktiveret i vinduet **Tillad USB-fejlretning** efter omhyggeligt at have læst advarslen.

    :::note

    Ved evt. problemer eller yderligere spørgsmål findes den komplette vejledning [hér](https://developer.android.com/studio/debug/dev-options).


:::

1. [Installér og opsæt](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; På Windows-platformen skal **Samsung**-brugere muligvis også installere [dette værktøj](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Tilslut via et **USB-kabel** enheden til den computer/bærbare, på hvilken **ADB** er installeret;

1. Åbn en **kommandolinje** på PC'en:

    - **Cmd.exe** i **Windows**;
    - **Terminal** i **macOS**;

1. Indtast kommandoen `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` og tryk på **Retur**.

### Mulighed 2: Fjern *begrænset brugerkonto*

Information om håndtering af brugerkonti på en Android-enhed kan findes [hér](https://support.google.com/a/answer/6223444?hl=en).

:::note

Begrænsede brugerkonti oprettes i visse tilfælde obligatorisk og ikke kan fjernes. Eksempelvis, når Dual Messenger- eller Dual App-funktioner bruges på enheder fra **Samsung** eller **LG**. Nedenfor beskrives, hvordan problemet løses i sådanne tilfælde.

:::

### Mulighed 3: Brug AdGuard i *Lokal HTTP-proxytilstand* (kræver root)

For at aktivere denne tilstand, åbn **AdGuard-indstillingerne** → **Netværk** → **Filtreringsmetode** → **Lokal HTTP-proxy**

### LG- og Samsung-enheder

Ejere af mobiler fra **Samsung** eller **LG** kan også støde på et lignende problem. Det kan være forårsaget af brugen af **Dual App/Dual Messenger**-funktionen (der automatisk opretter en begrænset profil). For at løse problemet skal funktionen deaktiveres.

### Samsung

- Åbn **Indstillinger**;
- Tryk på **Avanceret**;
- Rul ned og tryk på **Dual Messenger**;
- Deaktivér **Dual Messenger** for alle apps;
- Lås enheden i 5 minutter;
- Oplås skærmen, og prøv at oprette VPN-profilen igen.

### LG

- Åbn **Indstillinger**;
- Vælg fanen **Generelt**;
- Rul ned og tryk på **Dual App**;
- Fjern alle apps fra listen;
- Genstart enheden.
