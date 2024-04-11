---
title: Statistiky
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Do modulu _Statistiky_ se dostanete klepnutím na kartu _Statistiky_ (čtvrtá ikona zleva v dolní části obrazovky). Tato funkce vám poskytne kompletní přehled o provozu ve vašem zařízení: kolik požadavků je odesláno a kterým společnostem, kolik dat je odesláno a staženo, jaké požadavky jsou blokovány atd. Můžete si vybrat, zda chcete zobrazit statistiky za vybrané časové období: 24 hodin, 7 dní, 30 dní nebo za celou dobu.

![Statistics \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Statistiky jsou rozděleny do různých sekcí.

### Požadavky

V této části se zobrazuje počet blokovaných reklam, slídičů a celkový počet požadavků. Požadavky můžete filtrovat podle typu dat: mobilní data, Wi-Fi nebo všechna data dohromady.

_Nedávná aktivita_, dříve známá jako _Záznam filtrování_ zobrazuje posledních 10000 požadavků zpracovaných AdGuardem. Klepněte na nabídku se třemi tečkami (⋮) a poté na _Přizpůsobit_ pro filtrování požadavků podle stavu (_běžné_, _blokované_, _změněné_ nebo _povolené_), nebo původu (_vlastní_ nebo _třetí strana_).

Klepnutím na požadavek můžete zobrazit jeho podrobnosti a přidat pravidlo blokování nebo odblokování.

### Využití dat

Tato část zobrazuje množství stažených a odeslaných dat a ušetřeného datového provozu pro vybraný typ dat (mobilní data, Wi-Fi nebo všechna data). Klepnutím na _uložené_, _nahrané_ nebo _stažené_ zobrazíte graf využití dat v průběhu času.

### Aplikace

Tato sekce zobrazuje statistiky všech aplikací nainstalovaných ve vašem zařízení. Aplikace můžete třídit podle počtu blokovaných reklam, slídičů nebo podle počtu odeslaných požadavků.

Klepnutím na _Zobrazit všechny aplikace_ rozbalíte seznam svých aplikací seřazený podle počtu reklam, slídičů nebo požadavků.

![List of apps \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Pokud klepnete na aplikaci, zobrazí se její úplné statistiky: požadavky, které odesílá, domény a společnosti, na které obrací.

### Společnosti

Tato sekce zobrazuje společnosti, na které se vaše zařízení obrací. Co to znamená? AdGuard detekuje domény, do kterých vaše zařízení odesílá požadavky a určuje, kterým společnostem patří. Databázi společností najdete na [GitHubu](https://github.com/AdguardTeam/companiesdb).

### Statistiky DNS

Tato sekce zobrazuje údaje o požadavcích zpracovávaných _DNS ochranou_. Celkový počet odeslaných požadavků a počet požadavků zablokovaných AdGuardem si můžete prohlédnout v číslech a grafech. Najdete zde také statistiky o množství ušetřených, stažených a nahraných dat.

### Využití baterie

Tato sekce zobrazuje statistiky o prostředcích zařízení použitých AdGuardem za posledních 24 hodin. Údaje se mohou lišit od statistik zobrazených v nastavení zařízení. K tomu dochází proto, že systém připisuje provoz všech filtrovaných aplikací AdGuardu. Zařízení tedy zobrazuje, že AdGuard spotřebovává více prostředků, než ve skutečnosti spotřebovává. [Přečtěte si více o problémech s baterií a spotřebou datového provozu](/adguard-for-android/solving-problems/battery/).
