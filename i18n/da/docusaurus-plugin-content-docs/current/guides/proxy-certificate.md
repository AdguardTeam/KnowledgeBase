---
title: Sådan installeres et proxy-certifikat
sidebar_position: 2
---

Vores computer-apps — AdGuard til Windows og AdGuard til Mac — kan fungere som proxy for andre enheder. Det betyder, at andre enheders trafik kan rutes igennem AdGuard (al trafik eller kun for bestemte apps/webbrowsere).

:::note

Disse enheder skal være på samme netværk som den PC/Mac, på hvilken AdGuard er installeret.

:::

AdGuard filtrerer HTTP-trafik under alle omstændigheder, dog skal der på den tilsluttede enhed manuelt installeres et AdGuard-certifikat til filtrering af HTTPS-trafik.

## Sådan downloades og installeres certifikatet

Afhængigt af operativsystemet på den enhed, hvis trafik skal filtreres, skal en af disse vejledninger følges:

### Windows {#windows}

1. Notér IP-adressen på den computer, på hvilken AdGuard er installeret.

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

1. Klik på **Detaljer...** og navigér til fanen **Proxyer**.

1. Markér de to afkrydsningsfelter *Webproxy (HTTP)* og *Sikker webproxy (HTTPS)*. Angiv i feltet **Server** den noterede IP-adressen på computeren fra i trin 1. Angiv i feltet **Port** den port, der er valgt i netværksindstillingerne i AdGuard computer-appen.

### Android {#android}

1. Notér IP-adressen på den computer, der har AdGuard installeret.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. På computeren med AdGuard, åbn dette link i en webbrowser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Overfør den downloadede **cert.cer**-fil til den Android-enhed, hvis trafik skal rutes igennem AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. Find og tryk på det tidligere downloadede **cert.cer**-certifikat for at åbne filen, og følg vejledningen for at installere certifikatet.

1. Som standard anser Android-enheder ikke certifikater som betroede, så en advarsel vises — denne kan ignoreres. På nogle mobiler vil enhedsadgangskoden muligvis skulle angives. Angiv den, og tryk dernæst på **OK**. Certifikatet installeres herefter.

1. Åbn de avancerede indstillinger for det aktive Wi-Fi-netværk.

1. Skift **Proxy-type** til **Manuel**. Som **Proxy-værtsnavn** angives den noterede IP-adresse på computeren fra trin 1. Angiv som **Proxy-port** den port, der er valgt i netværksindstillingerne i AdGuard computer-appen.

### iOS {#ios}

1. Notér IP-adressen på den computer, der har AdGuard installeret.

1. Sørg for, at AdGuard-beskyttelsen er slået til. På en Windows-computer, markér afkrydsningsfeltet **Benyt AdGuard som en HTTP-proxy** i indstillingerne på fanen **Netværk**. På Mac, gå til **Indstillinger** → **Præferencer** → **Netværk** og slå **HTTP-proxy** til.

1. På computeren med AdGuard, åbn dette link i en webbrowser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klik på knappen **Download**. Starter download ikke, prøv med en anden webbrowser, f.eks. Firefox.

1. Overfør den downloadede **cert.cer**-fil til den iOS-enhed, hvis trafik skal rutes igennem AdGuard. Der kan bruges et USB-kabel, Bluetooth eller cloud-tjenester til at gøre dette.

1. På iOS-enheden, åbn **Indstillinger** → **Downloadet profil** og tryk på **Installér** øverste til højre. Angiv adgangskoden og bekræft installationen. Klik på **Færdig**.

1. Gå til **Indstillinger** → **Generelt** → **Om** → **Certifikattillidsindstillinger**. Aktivér kontakten ved siden af *Adguard Personal CA*. Certifikatet er nu installeret.

1. Åbn på enheden de avancerede indstillinger for det aktive Wi-Fi-netværk.

1. Skift **Proxy-type** til **Manuel**. Som **Proxy-værtsnavn** angives den noterede IP-adresse på computeren fra trin 1. Angiv som **Proxy-port** den port, der er valgt i netværksindstillingerne i AdGuard computer-appen.
