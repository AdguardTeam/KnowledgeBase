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

![DNS warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### V rozšířeních prohlížeče

Naše rozšíření prohlížeče mohou kontrolovat pouze názvy domén, nikoli celé adresy URL. Nemohou také kontrolovat poddotazy. To znamená, že pokud jsou na stránce potenciálně škodlivé prvky, budou načteny, i když je stránka sama o sobě z bezpečné domény. Rozšíření proti nim nebude schopno chránit. Je také důležité poznamenat, že prováděná kontrola je asynchronní, tj. probíhá současně s načítáním stránky, takže je možné, že se načte i škodlivý software.

## Nastavení ochrany proti phishingu a malwaru v produktech AdGuard

- **Pro Windows**: Aktivujte *modul Bezpečné prohlížení* v menu *Nastavení*

![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Pro macOS**: Povolte modul *Bezpečnost* v *Předvolbách*

![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Pro Android**: Zapněte *Bezpečné prohlížení* na kartě *Ochrana*

![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Pro iOS**: Ačkoli neexistuje samostatný modul, můžete přejít do *Ochrany Safari* → *Filtrování* → *Bezpečnost* a povolit dostupná filtrování. Dále povolte *DNS ochranu* a vyberte jeden ze serverů AdGuard DNS

![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Pro rozšíření prohlížeče**: Povolte *ochranu proti phishingu a malwaru* na kartě *Nastavení*. Pro lepší ochranu přejděte na *Filtrování* → *Bezpečnost* a aktivujte dostupné filtry

![Ochrana proti podvodnému a zákeřnému software](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Pro soukromý AdGuard DNS:** Povolte ochranu proti malware v *Nastavení serveru* v nabídce *Bezpečnost*

![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Co blokujeme

Spravujeme dva základní filtry: jeden chrání před phishingem a podvodnými webovými stránkami, které se snaží ukrást přihlašovací údaje uživatele, a druhý blokuje přístup k webovým stránkám, o nichž je známo, že šíří malware, který by mohl vést ke ztrátě dat, úniku informací nebo poškození vašeho zařízení. Tyto filtry vás také chrání před webovými stránkami s různými podvody a podvodnými schématy. Podrobnější informace naleznete v tomto [článku na Wikipedii](https://en.wikipedia.org/wiki/Phishing).

## Správa našich filtrů

AdGuard spravuje rozsáhlou databázi phishingových a malwarových webových stránek, která je pravidelně a automaticky aktualizována podle objevených nových hrozeb. Shromažďujeme informace z různých spolehlivých a kvalitních zdrojů, veřejných i od jiných společností, a shromažďujeme je do společné databáze nebezpečných stránek.

Automaticky analyzujeme stížnosti na podezřelé weby a trávíme mnoho času udržováním databáze v aktuálním stavu, odstraňováním falešných hlášení a zaváděním mechanismů, které jim v budoucnu zabrání.

### Chcete nám pomoci?

Jakákoli pomoc je vítána! Pokud narazíte na phishingovou nebo malwarovou webovou stránku, nahlaste ji na <support@adguard.com>.

### Falešně pozitivní odezvy

Občas se do AdGuard filtrů přidají i jiné než škodlivé webové stránky. Snažíme se procento falešných pozitivních výsledků snížit, ale stále se vyskytují. Pokud se s tímto chováním AdGuardu setkáte, nahlaste prosím falešné hlášení naší technické podpoře na <support@adguard.com>.

## Pokud máte podezření na webovou stránku

Pokud máte podezření, že by určitá webová stránka mohla být nebezpečná, zkontrolujte ji nejprve pomocí našeho nástroje [pro kontrolu zabezpečení](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
