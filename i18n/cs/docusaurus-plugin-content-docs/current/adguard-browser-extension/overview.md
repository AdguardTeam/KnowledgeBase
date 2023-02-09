---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard nabízí řadu softwarových produktů, které blokují reklamy a slídiče na různých platformách. Jedním z nejoblíbenějších produktů AdGuardu je bezplatné rozšíření, které funguje v pěti oblíbených prohlížečích: Chrome, Firefox, Edge, Opera a Yandex Browser. Rozšíření prohlížeče obsahují základní funkce pro blokování reklam, ale nelze je srovnávat s plnohodnotnými programy pro stolní počítače, jako jsou např. [AdGuard pro Windows](/adguard-for-windows/overview) a [AdGuard pro macOS](/adguard-for-mac/overview).

![Rozšíření prohlížeče AdGuard pro Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Dostupnost {#br-extension}

[Rozšíření prohlížeče AdGuard](https://adguard.com/en/adguard-browser-extension/overview.html) je k dispozici pro většinu známých prohlížečů. Snadno jej najdete v internetovém obchodě svého prohlížeče nebo na našich oficiálních stránkách.

![Dostupné pro většinu oblíbených prohlížečů *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

> Máme samostatné rozšíření pro Safari. Od vydání [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html) se u většiny rozšíření pro blokování reklam objevily velké problémy, a mnoho z nich přestalo fungovat. Museli jsme vyvinout samostatné rozšíření [pro Safari](/adguard-for-safari/overview), které má oproti rozšíření popsanému v tomto článku některé odlišnosti.

**Nezapomeňte, že funkčnost každého rozšíření je přísně omezena možnostmi prohlížeče.** Pokud tedy chcete získat plnohodnotnou ochranu, zvažte instalaci samostatného programu pro svůj počítač. Zde je [důvod, proč](#comparison).

## Blokování reklam {#adblocker}

Blokování reklam je jednoznačně klíčovou funkcí každého blokátoru reklam a AdGuard není výjimkou. Rozšíření úspěšně zablokuje reklamy na jakékoli stránce v prohlížeči. Blokování reklam je založeno na tzv. seznamech filtrů nebo jednoduše na [filtrech](/general/ad-filtering/how-ad-blocking-works). Filtry lze povolit nebo zakázat v nastavení rozšíření. Blokování reklam si můžete přizpůsobit aktivací konkrétních filtrů.

### Filtry {#filters}

Seznamy filtrů jsou v podstatě soubory pravidel zapsané ve speciálním jazyce. Váš blokátor reklam interpretuje pravidla a uplatňuje je. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filtry *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Všechny filtry jsou seskupeny podle své role. Existují například kategorie filtrů pro blokování reklam, filtry pro ochranu soukromí, filtry související se sociálními médii atd. Můžete povolit jednotlivé filtry nebo celou skupinu najednou.

![Filtry pro blokování reklam *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Vlastní filtry {#custom}

Zatímco vlastnosti ostatních skupin filtrů jsou víceméně předvídatelné, existuje skupina s názvem *Vlastní*, která může vyvolat další otázky.

![Vlastní filtry *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Na této kartě můžete přidat filtry, které ve výchozím nastavení rozšíření neobsahuje. Na internetu je k dispozici spousta [veřejně dostupných filtrů](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

Chcete-li přidat filtr, stačí kliknout na *Přidat vlastní filtr*, zadat adresu URL nebo cestu k souboru filtru, který chcete přidat a kliknout na *Další*.

![Přidat vlastní filtr *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Uživatelská pravidla {#user-rules}

*Uživatelská pravidla* jsou další nástroj, který vám pomůže přizpůsobit blokování reklam.

![Uživatelská pravidla *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Nová pravidla lze přidávat několika způsoby. Nejjednodušší je prostě zadat pravidlo, to ale vyžaduje určitou znalost [syntaxe pravidel](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Dbejte na to, aby byla jednotlivá pravidla oddělena od sebe zalomením řádků.** Všimněte si, že import seznamu filtrů připravených k použití je vhodnější provést na kartě [Vlastní filtry](#custom).

Kromě toho můžete exportovat vlastní pravidla filtrování. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

Když přidáte webovou stránku na Seznam povolených (více o tom [níže](#allowlist)), nebo použijete nástroj Asistent pro skrytí prvku na stránce, uloží se příslušné pravidlo také do *Uživatelských pravidel*.

### Seznam povolených {#allowlist}

*Seznam povolených* se používá k vyloučení určitých webových stránek z filtrování. Pravidla blokování se na webové stránky ze seznamu nevztahují.

![Seznam povolených *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

*Seznam povolených* lze také obrátit: reklamy můžete odblokovat všude kromě webových stránek přidaných do tohoto seznamu. Chcete-li to provést, povolte možnost *Invertovat seznam povolených*.

![Invertovat seznam povolených *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Můžete také importovat a exportovat stávající seznamy povolených. To je užitečné například v případě, že chcete v každém prohlížeči použít stejná pravidla pro povolení.

## Režim utajení {#stealth-mode}

*Režim utajení* má zajistit ochranu citlivých osobních údajů před online slídiči a podvodníky.

![Režim utajení *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

V Režimu utajení můžete zabránit tomu, aby webová stránka viděla vyhledávací dotazy, které jste použili k jejímu nalezení na internetu, automaticky odstranit soubory cookies třetích stran a vlastní soubory cookies webové stránky atd. Všem těmto funkcím je věnován [zvláštní článek](/general/stealth-mode).

> Všimněte si, že některé možnosti *Režimu utajení* dostupné v plnohodnotných aplikacích nejsou v rozšířeních prohlížeče z důvodu technických omezení k dispozici.

## Další funkce a možnosti {#other}

Kromě velkých klíčových modulů rozšíření prohlížeče AdGuard existuje několik dalších specifických funkcí, které lze konfigurovat na kartách *Obecné* a *Další nastavení* v nastavení rozšíření.

### Obecné {#general}

Na kartě *Obecné* můžete povolit reklamy ve vyhledávání a vlastní propagaci webových stránek [](/general/ad-filtering/search-ads), povolit automatickou aktivaci filtrů pro jednotlivé jazyky, určit interval aktualizace filtrů atd.

![Obecné *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Besides, here you can enable [*Phishing and malware protection*](/general/browsing-security).

You can save your settings configuration by clicking the *Export settings* button. The settings will be saved as a .json file. To upload the previously saved settings configuration, use the *Import settings* function. You can even use it to quickly switch between different settings profiles or even to transfer settings configurations between different browsers.

### Additional settings {#misc}

The *Additional settings* section contains a range of various settings that are related to the ad blocking process and application usability.

![Další nastavení *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

From this tab, you can activate optimized filters, enable notifications about extension updates, open the *Filtering log*, or clear the statistics of blocked ads and trackers.

Besides, you can opt to help us with the development of filters by sending the statistics on applied rules: which ones are triggered, on which websites, and how often. All data is strictly anonymized; this option is disabled by default.

### About {#about}

In the *About* section, you can find infos about the current version, links to the EULA and Privacy policy, and to the repository of the Browser extension on GitHub.

![Informace *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Extension’s main menu {#main-menu}

The extension's main page can be accessed by clicking on the extension's icon on the toolbar of your browser.

![Hlavní nabídka *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

On the main page, you can hide any element on any page manually (a corresponding rule will be added to the *User rules*), open the *Filtering log* to view the complete information about your browser's traffic and block requests on the go, or look at a website’s security report. Besides, you can submit a complaint about any website (for example, if there are missed ads on the page, our filter engineers will review the report and fix the problem) and see the statistics on applied blocking rules.

All web requests made by the browser are displayed in the *Filtering log*, along with detailed information about each request. The *Filtering log* makes it easy, for example, to monitor requests blocked by AdGuard Browser extension. Besides, it allows you to block any request or add a previously blocked request to Allowlist in two clicks. The *Filtering log* also offers you a wide variety of options for sorting web requests, which can be helpful when creating your own filtering rules. You can open the *Filtering log* by selecting the corresponding item in the main menu, or from the settings page (in the "Additional settings" tab).

By clicking the icons in the top right corner of the extension's main menu, you can open the extension settings or pause the protection.

## AdGuard Browser extension vs. standalone apps {#comparison}

The main advantage of AdGuard standalone programs over browser extensions is that the programs can block ads in every browser and in almost all apps. You may use different browsers at the same time, the app will filter ads and online threats in all of them equally well.

The second difference is that the possibilities of extension-based ad blockers are strictly limited by browser guidelines. The browser extensions have to conform to the policies of the browsers, where ad blocking might be restricted. Thus, some types of filtering rules are not supported by the extensions. The functionality of the desktop apps is not limited, so they have a better filtering quality.

Whereas AdGuard Browser extension is free and easy to install, and has filters to block ads and fight online threats, the full-fledged apps are more powerful and have a list of advanced features. See all the differences in the comparative table below.

![Rozšíření vs. aplikace *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – within browser restrictions and only in the browser where it is installed;

`2` – the extension is unable to detect requests from other extensions. If a malicious or tracking extension sends a request to its server to show you ads or track your activity, AdGuard Browser extension will not be able to block that request;

`3` – not all types of ads and threats can be blocked by browser extensions due to certain browser restrictions. Some elements may get to the page and slow down the loading process. Besides, unlike browser-based ad blockers, the AdGuard app blocks ads before they are loaded to the browser. This saves traffic and speeds up page loading.