---
title: Cum se instalează un certificat proxy
sidebar_position: 2
---

Aplicațiile noastre desktop, AdGuard pentru Windows și AdGuard pentru macOS, pot fi utilizate ca proxy pentru alte dispozitive. Aceasta înseamnă că puteți direcționa traficul altor dispozitive prin AdGuard (toate traficul sau traficul aplicațiilor și browserelor specifice).

:::note

Aceste dispozitive trebuie să fie în aceeași rețea cu PC-ul sau Mac-ul cu AdGuard.

:::

Traficul HTTP va fi filtrat în orice caz, dar pentru ca AdGuard să poată filtra trafic HTTPS, trebuie să instalați manual certificatul AdGuard pe dispozitivul conectat.

## Cum se descarcă și se instalează certificatul

În funcție de sistemul de operare al dispozitivului ale cărui trafic doriți să filtrați, urmați una dintre aceste instrucțiuni:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. Asigurați-vă că protecția AdGuard este activată. Pe un computer Windows, bifați caseta **Utilizați AdGuard ca proxy HTTP** în tab-ul **Rețea** din setările acestuia. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Pe același computer cu AdGuard, urmați acest link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. Dacă descărcarea nu începe, încercați un alt browser, de exemplu Firefox.

1. Transferați fișierul descărcat **cert.cer** pe dispozitivul Windows ale cărui trafic doriți să direcționați prin AdGuard. Puteți utiliza un cablu USB, Bluetooth sau servicii de cloud pentru a face acest lucru.

1. Pe acel dispozitiv, apăsați **Win**, tastați `Gestionați certificatele computerului` și apăsați **Enter**.

1. Pe pagina *Certificate — Computer local*, găsiți folderul *Autorități de certificare rădăcină de încredere* → *Certificate*.

1. Faceți clic dreapta pe folderul *Certificate* și faceți clic pe **Toate sarcinile** → **Importați**.

1. Pe pagina *Asistent pentru importul certificatului*, faceți clic pe **Următorul**.

1. Click **Browse** to import the certificate.

1. Navigați la fișierul certificat **cert.cer**, selectați-l, faceți clic pe **Deschis**, apoi **Următorul**.

1. Selectați caseta de bifat **Plasați toate certificatele în următoarea unitate**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Faceți clic pe **Finalizați**.

1. Apăsați **Win**, apoi deschideți **Setări**.

1. Selectați **Rețea & Internet** → **Proxy**.

1. Toggle *Automatically detect settings* off.

1. Click **Set up** in the *Use a proxy server* tab.

1. Activați comutatorul. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. Pentru **Port**, introduceți portul ales în setările rețelei aplicației AdGuard desktop.

1. Faceți clic pe **Salvați**.

### macOS {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. Asigurați-vă că protecția AdGuard este activată. Pe un computer Windows, bifați caseta **Utilizați AdGuard ca proxy HTTP** în tab-ul **Rețea** din setările acestuia. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Urmați acest link folosind un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. Dacă descărcarea nu începe, încercați un alt browser, de exemplu Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. Puteți utiliza un cablu USB, Bluetooth sau servicii de cloud pentru a face acest lucru.

1. Faceți dublu clic pe fișierul certificat descărcat.

1. Enter the administrator password and then click **Modify Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Sub *Sistem*, evidențiați certificatul pe care l-ați adăugat.

1. Faceți clic dreapta pe el și selectați **Obțineți informații** din meniul contextual.

1. Extindeți *Încredere* pentru a afișa politicile de încredere pentru certificat.

1. Sub *Secure Sockets Layers (SSL)*, selectați **Încredere întotdeauna**.

1. Deschideți **Preferințe de sistem** → **Rețea** și selectați conexiunea activă din partea de sus.

1. Click **Details...** and navigate to the **Proxies** tab.

1. Bifați două casete: *Proxy web (HTTP)* și *Proxy web sigur (HTTPS)*. În câmpul **Server**, tastați adresa IP a computerului dumneavoastră pe care ați notat-o în pasul 1. În câmpul **Port**, introduceți portul ales în setările rețelei aplicației AdGuard desktop.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. Asigurați-vă că protecția AdGuard este activată. Pe un computer Windows, bifați caseta **Utilizați AdGuard ca proxy HTTP** în tab-ul **Rețea** din setările acestuia. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. De pe computerul cu AdGuard, urmați acest link folosind un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. Dacă descărcarea nu începe, încercați un alt browser, de exemplu Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. Puteți utiliza un cablu USB, Bluetooth sau servicii de cloud pentru a face acest lucru.

1. Găsiți și atingeți certificatul **cert.cer** descărcat anterior pentru a deschide fișierul și urmați instrucțiunile pentru a instala certificatul.

1. Dispozitivele Android nu au încredere în certificate în mod implicit, deci va apărea o avertizare — o puteți ignora. Pe unele telefoane, este posibil să vi se ceară să introduceți parola dispozitivului. Faceți acest lucru, apoi apăsați **OK**. Certificatul va fi instalat.

1. Deschideți setările avansate ale rețelei Wi-Fi active.

1. Schimbați **Tipul proxy** în **Manual**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. Pentru **Port proxy**, introduceți portul ales în setările rețelei aplicației AdGuard desktop.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. Asigurați-vă că protecția AdGuard este activată. Pe un computer Windows, bifați caseta **Utilizați AdGuard ca proxy HTTP** în tab-ul **Rețea** din setările acestuia. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. De pe computerul cu AdGuard, urmați acest link folosind un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. Dacă descărcarea nu începe, încercați un alt browser, de exemplu Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. Puteți utiliza un cablu USB, Bluetooth sau servicii de cloud pentru a face acest lucru.

1. Pe dispozitivul vostru iOS, deschideți **Setări** → **Profil descărcat** și atingeți **Instalați** în colțul din dreapta sus. Introduceți parola și confirmați instalarea. Tap **Done**.

1. Mergeți la **Setări** → **General** → **Despre** → **Setările de încredere a certificatului**. Activați comutatorul de lângă *Adguard Personal CA*. Certificatul este acum instalat.

1. Pe acel dispozitiv, deschideți setările avansate ale rețelei Wi-Fi active.

1. Schimbați **Tipul proxy** în **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Pentru **Port proxy**, introduceți portul ales în setările rețelei aplicației AdGuard desktop.
