---
title: Bezpečné prohlížení
sidebar_position: 3
---

Každý den se na internetu stanou obětí virových útoků nebo podvodů desítky tisíc lidí. Do aplikace AdGuard jsme přidali speciální filtry, které vás ochrání před škodlivými a podvodnými webovými stránkami.

Dosud jsme kategorizovali více než 15 milionů stránek a naše filtry obsahují přibližně 1,5 milionu phishingových a malwarových stránek. Jen se nad tím zamyslete: 10% všech známých webů může být pro vás nebezpečných! Nezkušení uživatelé se mohou snadno stát obětí podvodníků nebo hackerů. Doufáme, že používání ochrany proti škodlivým webům vám pomůže vyhnout se všem nebezpečím, se kterými se můžete setkat.

## Jak kontrola funguje?

Rozsah a metody kontrol závisí na používaném produktu. V našich rozšířeních prohlížeče kontroluje AdGuard pouze navštívené stránky. V nástroji AdGuardu pro Windows, Mac nebo Android vám nabízíme nejlepší možnou ochranu tím, že kontrolujeme jak stránky, tak všechny objekty na nich načtené.

### AdGuard pro Windows, Mac, a Android

Pro práci s filtry používáme protokol [Safe Browsing API verze 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec). Tento protokol nám umožňuje uchovávat vaše osobní údaje v naprostém bezpečí. Náš server neví nic o webových stránkách, které jste navštívili. Pro kontroly používáme prefixy hash, nikoli otevřené adresy URL.

Následující obrázek poskytuje obecnou představu o tom, jak modul Bezpečné prohlížení funguje. Jako příklad uvádíme AdGuard pro Windows.

![Functioning algorithm of Browsing security module](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### Rozšíření prohlížeče AdGuard

Rozšíření prohlížeče pracují jinak a ke kontrole navštívených stránek používají takzvané rozhraní [*Lookup API*](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668). Při každé návštěvě jakékoli webové stránky si místní klient vyměňuje informace s naším koncovým serverem ve formě hashů a prefixů hash. Na základě této výměny místní klient určí, zda je web zařazen do databáze potenciálně nebezpečných webů. Pro ty, kteří se o tento proces zajímají hlouběji, bude užitečný výše uvedený odkaz.

Upozorňujeme vás, že nikdy nezískáváme žádné informace, které by nám umožnily zjistit, které webové stránky navštěvujete a tyto údaje jakkoli využít.

Přibližný algoritmus fungování modulu Bezpečného prohlížení je znázorněn na obrázku níže.

![Functioning algorithm of Browsing security module in AdGuard browser extensions.](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png)

## Filtry AdGuardu

V současné době spravujeme dva AdGuard filtry. Jeden chrání před phishingem a podvodnými webovými stránkami. Druhý chrání před škodlivými webovými stránkami, jejichž návštěva může vést k infikování virem.

### Filtr phishingových stránek

*Phishing* je typ online podvodu, jehož cílem je získat přístup k důvěrným údajům uživatelů — uživatelské jména a hesla. Pokud vás toto téma zajímá, doporučujeme vám přečíst si [tento článek na Wikipedii](http://en.wikipedia.org/wiki/Phishing).

Kromě phishingových stránek tento filtr pokrývá také různé podvodné stránky, včetně všech druhů podvodů, prodeje neexistujícího obsahu a podobně.

### Filtr škodlivých stránek

Tento filtr obsahuje odkazy na stránky, které mohou spustit škodlivý kód, což může vést k úniku informací, ztrátě dat nebo poškození zařízení uživatele. Spustitelný kód může být autorizovaný (např. při stažení a spuštění spustitelného souboru) nebo neautorizovaný (např. při napadení spywarem).

## Jak můžeme do filtrů přidávat nové adresy?

Většina práce je automatizovaná, takže si můžete být jisti, že nový malware a phishingové adresy jsou do naší databáze přidávány co nejrychleji.

### Bezpečné prohlížení Adguard — komunita

Důležitým nástrojem pro udržení nejvyšší úrovně filtrování je *komunita Bezpečného prohlížení AdGuardu*. Členem komunity se může stát každý uživatel našich produktů — ať už jde o AdGuard pro Windows nebo naše rozšíření pro prohlížeče — a pomoci nám tak při vytváření AdGuard filtrů.

Na obrázku níže vidíte algoritmus práce komunity pro Bezpečné prohlížení:

![The way AdGuard Browsing security Community works](https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png)

### Chcete nám pomoci?

Rádi přijmeme jakoukoli pomoc! Pokud nám chcete zaslat stížnost na phishingové nebo malwarové stránky, můžete tak učinit prostřednictvím technické podpory skrze **support@adguard.com**.

### Falešně pozitivní odezvy

Občas se do AdGuard filtrů přidají i jiné než škodlivé webové stránky. Snažíme se procento falešných pozitivních výsledků snížit, ale stále se vyskytují. Pokud se s tímto chováním AdGuardu setkáte, pošlete nám stížnost na falešně pozitivní výsledek. Takové stížnosti můžete podat prostřednictvím naší technické podpory skrze **support@adguard.com**.
