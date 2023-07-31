---
title: Webové rozšíření Safari
sidebar_position: 3
---

Webová rozšíření přidávají do Safari vlastní funkce. Zde najdete [další informace o webových rozšířeních](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Jak vypadá webové rozšíření v Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Webové rozšíření pro Safari od AdGuardu je nástroj, který využívá nové funkce systému iOS 15. Slouží k rozšíření možností aplikace AdGuard pro iOS. Díky němu může AdGuard používat pokročilá pravidla filtrování a nakonec blokovat více reklam.

## K čemu slouží

Safari ve výchozím nastavení poskytuje blokátorům obsahu pouze základní nástroje. Tyto nástroje neumožňují takovou úroveň výkonu, jakou mají blokátory obsahu v jiných operačních systémech (Windows, Mac, Android). Například AdGuard aplikace na jiných platformách mohou používat takové účinné zbraně proti reklamám, jako jsou [CSS pravidla](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selektory CSS](/general/ad-filtering/create-own-filters#extended-css-selectors), a [skriptlety](/general/ad-filtering/create-own-filters#scriptlets). Bohužel jsou tyto nástroje naprosto nenahraditelné při řešení složitějších případů, jako jsou například reklamy před videi na YouTube.

Webové rozšíření pro Safari od AdGuardu doplňuje AdGuard tím, že mu umožňuje používat tyto typy pravidel filtrování.

Kromě toho lze Webové rozšíření pro Safari od AdGuardu použít k rychlé správě AdGuardu pro iOS přímo z prohlížeče. Klepněte na *Rozšíření* – je to tlačítko s ikonou skládačky, v závislosti na typu vašeho zařízení může být umístěno vlevo nebo vpravo od adresního řádku. Vyhledejte **AdGuard** v seznamu a klepněte na něj.

![Menu webového rozšíření *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)
> Na iPadech je webové rozšíření pro Safari od AdGuardu dostupné přímo klepnutím na ikonu AdGuardu v adresním řádku prohlížeče.

Zobrazí se vám následující seznam možností:

* **Zapnutí/vypnutí ochrany na webu**. Vypnutím přepínače se AdGuard pro aktuální webovou stránku zcela zakáže a přidá se příslušné pravidlo výjimky. Opětovným zapnutím přepínače se obnoví ochrana webové stránky a pravidlo se odstraní. Každá taková změna si vyžádá určitý čas, než se projeví.

* **Ruční blokování prvků na stránce**. Klepnutím na tlačítko *Blokovat prvky na této stránce* zobrazíte vyskakovací okno pro blokování prvků. Vyberte libovolný prvek na stránce, který chcete skrýt, upravte oblast výběru, zobrazte náhled změn a potvrďte odstranění. Do AdGuardu bude přidáno odpovídající pravidlo filtrování (které můžete později zakázat nebo odstranit, abyste změnu vrátili).

* **Nahlášení problému**. Přejetím nahoru zobrazíte tlačítko *Nahlásit problém*. Pomocí něj můžete nahlásit nezablokovanou reklamu nebo jiný problém, na který jste na aktuální stránce narazili.

## Jak zapnout webové rozšíření pro Safari od AdGuardu

### V nastavení iOS

Webové rozšíření není samostatný nástroj a vyžaduje AdGuard pro iOS. Pokud na svém zařízení nemáte nainstalovaný AdGuard pro iOS, [nejprve](../installation) jej nainstalujte a dokončete proces registrace, abyste jej připravili k práci.

Po dokončení otevřete *Nastavení → Safari → Rozšíření*.

![Vyberte "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Vyberte "Rozšíření" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Vyhledejte sekci **POVOLIT TATO ROZŠÍŘENÍ** a poté mezi dostupnými rozšířeními vyhledejte **AdGuard**.

![Vyberte "AdGuard" v části POVOLIT TATO ROZŠÍŘENÍ *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Klepněte na něj a zapněte přepínač. Na stejné obrazovce se ujistěte, že rozšíření AdGuardu má požadovaná oprávnění: **Všechny webové stránky** by měly mít stav *Povolit*.

![](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

:::note

Webové rozšíření pro Safari od AdGuardu vyžaduje ke své činnosti přístup k obsahu webových stránek, ale nepoužívá jej k jiným účelům než k blokování reklam.

:::

### V Safari

Rozšíření AdGuard můžete zapnout také v prohlížeči Safari. Klepněte na *Rozšíření* (pokud jej nevidíte vedle adresního řádku, klepněte na ikonu `aA`).

![V Safari klepněte na ikonu aA *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Poté vyhledejte v seznamu možnost *Spravovat rozšíření* a klepněte na ni. V otevřeném okně zapněte přepínač vedle **AdGuardu**.

![Rozšíření *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Rozšíření *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Pokud použijete tuto metodu, možná budete muset přejít do nastavení Safari a udělit rozšíření AdGuardu potřebná oprávnění.

Mezi dostupnými rozšířeními byste nyní měli vidět AdGuard. Klepněte na něj a poté klepněte na žlutou ikonu **i**. Zapněte **Pokročilou ochranu** klepnutím na tlačítko *Zapnout* a potvrďte akci.

:::note

Pokud používáte AdGuard pro iOS bez předplatného Premium, nebudete moci zapnout **Pokročilou ochranu**.

:::

Případně můžete zapnout **Pokročilou ochranu** přímo z aplikace na kartě **Ochrana** (druhá zleva v dolní řadě ikon).

Webové rozšíření pro Safari od AdGuardu funguje pouze ve verzích iOS 15 a novějších.
