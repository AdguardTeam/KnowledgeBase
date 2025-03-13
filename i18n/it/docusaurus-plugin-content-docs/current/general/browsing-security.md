---
title: Protezione da phishing e malware
sidebar_position: 3
---

Cadere vittima di phishing e malware rimane un problema comune. Per migliorare la sicurezza digitale, abbiamo incorporato filtri speciali nei prodotti AdGuard per proteggerti da siti web dannosi e quelli di phishing. Ad oggi, abbiamo classificato oltre 15 milioni di siti e creato un database di 1,5 milioni di siti Web noti per phishing e malware. Utilizzando questo database, AdGuard controlla i siti web visitati per proteggerti dalle minacce online.

:::note Important

Non raccogliamo né usiamo alcuna informazione sui siti web visitati.

:::

## How does AdGuard check websites?

Ogni volta che visiti un sito web, il tuo client locale scambia informazioni con il nostro server di backend, nella forma di hash e prefissi di hash. A seconda di questo scambio, il client locale determina se il sito web è elencato nel database dei siti web potenzialmente pericolosi, oppure no. Esiste una differenza nell'ambito di questo controllo per app ed estensioni.

### Nelle app

AdGuard fornisce la migliore protezione possibile ispezionando sia le pagine che tutti gli oggetti caricati su di esse. AdGuard controlla URL e nomi di dominio utilizzando prefissi hash, non gli URL completi, quindi i nostri server non conservano informazioni sui siti web che visiti e le tue informazioni personali sono completamente sicure. I nostri server rispondono alla richiesta dell'applicazione con un elenco di tutti i possibili indirizzi che corrispondono al prefisso hash. Quando viene rilevata una potenziale minaccia in base alle corrispondenze hash, l'accesso a quel sito web viene immediatamente bloccato.

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

Le nostre estensioni di browser possono controllare solo i nomi di dominio, non gli URL completi. Inoltre, non sono in grado di controllare le sottorichieste. Ciò significa che se nella pagina sono presenti elementi potenzialmente dannosi, questi verranno caricati anche se la pagina stessa proviene da un dominio sicuro. L'estensione non sarà in grado di proteggersi da essi. È inoltre importante notare che il controllo effettuato è asincrono, ovvero avviene contemporaneamente al caricamento della pagina, quindi è possibile che venga caricato anche del malware.

## Configurazione della protezione da phishing e malware nei prodotti AdGuard

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Protezione da phishing e malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Cosa blocchiamo

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Manutenzione dei nostri filtri

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Want to help?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### False-positive responses

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## Se hai dubbi su un sito web

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
