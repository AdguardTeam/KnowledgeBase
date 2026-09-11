---
title: Problemer forårsaget af flere brugerprofiler
sidebar_position: 9
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problemer forårsaget af flere brugerprofiler

Er AdGuard installeret på Android 9 og senere for mere end én brugerprofil på enheden, kan der opstå problemer ved afinstallation af appen. Når AdGuard afinstalleres i én brugerprofil, vises appen stadig på app-listen, men den vil hverken kunne afinstallere eller geninstalleres. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

For at løse dette problem skal appen afinstalleres for alle brugere: Gå til Indstillinger → Alle apps → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

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
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    Ved evt. problemer eller yderligere spørgsmål findes den komplette vejledning [hér](https://developer.android.com/studio/debug/dev-options).


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Tilslut via et **USB-kabel** enheden til den computer/bærbare, på hvilken **ADB** er installeret;

1. Åbn en **kommandolinje** på PC'en:

    - **Cmd.exe** i **Windows**;
    - **Terminal** i **macOS**;

1. Indtast kommandoen `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` og tryk på **Retur**.

### Mulighed 2: Fjern *begrænset brugerkonto*

Information om håndtering af brugerkonti på en Android-enhed kan findes [hér](https://support.google.com/a/answer/6223444?hl=en).

:::note

Begrænsede brugerkonti oprettes i visse tilfælde obligatorisk og ikke kan fjernes. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Nedenfor beskrives, hvordan problemet løses i sådanne tilfælde.

:::

### Mulighed 3: Brug AdGuard i *Lokal HTTP-proxytilstand* (kræver root)

For at aktivere denne tilstand, åbn **AdGuard-indstillingerne** → **Netværk** → **Filtreringsmetode** → **Lokal HTTP-proxy**

### LG- og Samsung-enheder

Ejere af mobiler fra **Samsung** eller **LG** kan også støde på et lignende problem. Det kan være forårsaget af brugen af **Dual App/Dual Messenger**-funktionen (der automatisk opretter en begrænset profil). For at løse problemet skal funktionen deaktiveres.

### Samsung

- Åbn **Indstillinger**;
- Tryk på **Avanceret**;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Lås enheden i 5 minutter;
- Oplås skærmen, og prøv at oprette VPN-profilen igen.

### LG

- Åbn **Indstillinger**;
- Vælg fanen **Generelt**;
- Scroll down and press **Dual App**;
- Remove all apps from the list;
- Genstart enheden.
