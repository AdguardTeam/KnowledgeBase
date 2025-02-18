---
title: Ochrana proti podvodnému a zákeřnému software
sidebar_position: 3
---

Oběti phishingu a malwaru jsou stále častým problémem. Pro zvýšení digitální bezpečnosti jsme do produktů AdGuard začlenili speciální filtry, které vás ochrání před škodlivými a podvodnými webovými stránkami. K dnešnímu dni jsme kategorizovali více než 15 milionů webů a vytvořili databázi 1,5 milionu webů, o nichž je známo, že obsahují phishing a malware. Pomocí této databáze, AdGuard kontroluje navštívené webové stránky a chrání vás před online hrozbami.

:::note Důležité

Přísně vzato neshromažďujeme ani nepoužíváme žádné informace o navštívených webových stránkách.

:::

## Jak AdGuard kontroluje webové stránky?

Při každé návštěvě webové stránky si místní klient vyměňuje informace s naším koncovým serverem ve formě hashů a prefixů hash. Na základě této výměny místní klient určí, zda je web zařazen do databáze potenciálně nebezpečných webů. Rozsah této kontroly se u aplikací a rozšíření liší.

### V aplikacích

AdGuard poskytuje nejlepší možnou ochranu tím, že kontroluje jak stránky, tak všechny objekty na nich načtené. AdGuard kontroluje adresy URL a názvy domén pomocí hash prefixů, nikoli celých adres URL, takže naše servery nezachovávají žádné informace o navštívených webových stránkách a vaše osobní údaje jsou zcela v bezpečí. Naše servery odpoví na dotaz aplikace seznamem všech možných adres, které odpovídají prefixu hash. Pokud je na základě shody hash detekována potenciální hrozba, přístup na danou webovou stránku je okamžitě zablokován.

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

Naše rozšíření prohlížeče mohou kontrolovat pouze názvy domén, nikoli celé adresy URL. Nemohou také kontrolovat poddotazy. To znamená, že pokud jsou na stránce potenciálně škodlivé prvky, budou načteny, i když je stránka sama o sobě z bezpečné domény. Rozšíření proti nim nebude schopno chránit. Je také důležité poznamenat, že prováděná kontrola je asynchronní, tj. probíhá současně s načítáním stránky, takže je možné, že se načte i škodlivý software.

## Nastavení ochrany proti phishingu a malwaru v produktech AdGuard

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Ochrana proti podvodnému a zákeřnému software](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Co blokujeme

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Správa našich filtrů

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Chcete nám pomoci?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### Falešně pozitivní odezvy

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## Pokud máte podezření na webovou stránku

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
