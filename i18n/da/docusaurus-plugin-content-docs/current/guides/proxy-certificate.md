---
title: How to install a proxy certificate
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## How to download and install the certificate

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. På samme computer med AdGuard, følg dette link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Overfør den downloadede **cert.cer**-fil til den enhed, hvis trafik skal rutes igennem AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. På den enhed, tryk på **Win**, skriv `Håndtér computercertifikater` og tryk på **Retur**.

1. På siden *Certifikater — Lokal computer*, find mappen *Betroede Rodcertificeringsmyndigheder* → *Certifikater*.

1. Højreklik på mappen *Certifikater*, og klik på **Alle opgaver** → **Import**.

1. På siden *Certifikatimport Guide*, klik på **Næste**.

1. Klik på **Gennemse** for at importere certifikatet.

1. Find certifikatfilen **cert.cer**, vælg den, klik på **Åbn** og dernæst på **Næste**.

1. Markér afkrydsningsfeltet **Placér alle certifikater i flg. lager**.

1. Sørg for, at feltet *Certifikatlager* viser *Betroede Rodcertificeringsmyndigheder*, og klik på **Næste**.

1. Klik på **Udfør**.

1. Tryk på **Win**, og åbn dernæst **Indstillinger**.

1. Vælg **Netværk og Internet** → **Proxy**.

1. Slå *Detektér automatisk indstillinger* fra.

1. Klik på **Opsæt** på fanen *Brug en proxyserver*.

1. Slå kontakten til. Angiv som **Proxy IP-adresse** den noterede IP-adresse på computeren fra trin 1. Angiv som **Port** den port, der er valgt i netværksindstillingerne i AdGuard computer-appen.

1. Klik på **Gem**.

### Mac {#mac}

1. Notér IP-adressen på den computer, der har AdGuard installeret.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. Følg dette link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Overfør den downloadede **cert.cer**-fil til den Mac-enhed, hvis trafik skal rutes igennem AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. Dobbeltklik på den downloadede certifikatfil.

1. Angiv administratoradgangskoden, og klik dernæst på **Redigér Nøglering**.

1. Gå til **Spotlight** (søgeikonet øverste til højre), skriv `Keychain Access`, og vælg dernæst **Keychain Access** fra søgeresultaterne.

1. Fremhæv under *System* det tilføjede certifikat.

1. Højreklik på det og vælg i kontekstmenuen **Hent info**.

1. Udvid *Tillid* for at få vist certifikatets tillidspolitikker.

1. Vælg under *Secure Sockets Layers (SSL)* **Hav altid tillid**.

1. Åbn **Systempræferencer** → **Netværk** og vælg den aktive forbindelse øverst.

1. Click **Details...** and navigate to the **Proxies** tab.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### Android {#android}

1. Notér IP-adressen på den computer, der har AdGuard installeret.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. From the computer with AdGuard, follow this link using a web browser: [https://local.adguard.org/cert](https://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Open advanced settings of the active Wi-Fi network.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS {#ios}

1. Notér IP-adressen på den computer, der har AdGuard installeret.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. From the computer with AdGuard, follow this link using a web browser: [https://local.adguard.org/cert](https://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Enter your password and confirm the installation. Tap **Done**.

1. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. The certificate is now installed.

1. On that device, open advanced settings of the active Wi-Fi network.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
