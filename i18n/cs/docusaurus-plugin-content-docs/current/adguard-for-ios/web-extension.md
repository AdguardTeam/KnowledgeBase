---
title: Webové rozšíření Safari
sidebar_position: 3
---

Webová rozšíření přidávají do Safari vlastní funkce. Zde najdete [další informace o webových rozšířeních](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![What the Web extension looks like in Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Webové rozšíření pro Safari od AdGuardu je nástroj, který využívá nové funkce systému iOS 15. Slouží k rozšíření možností aplikace AdGuard pro iOS. Díky němu může AdGuard používat pokročilá pravidla filtrování a nakonec blokovat více reklam.

## K čemu slouží

Safari ve výchozím nastavení poskytuje blokátorům obsahu pouze základní nástroje. Tyto nástroje neumožňují takovou úroveň výkonu, jakou mají blokátory obsahu v jiných operačních systémech (Windows, Mac, Android). Například aplikace AdGuard na jiných platformách mohou používat takové mocné zbraně proti reklamám, jako jsou [pravidla CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [rozšířené selektory CSS](/general/ad-filtering/create-own-filters#extended-css-selectors) a [skriptlety](/general/ad-filtering/create-own-filters#scriptlets). Bohužel jsou tyto nástroje naprosto nenahraditelné při řešení složitějších případů, jako jsou například reklamy před videi na YouTube.

Webové rozšíření pro Safari od AdGuardu doplňuje AdGuard tím, že mu umožňuje používat tyto typy pravidel filtrování.

Kromě toho lze Webové rozšíření pro Safari od AdGuardu použít k rychlé správě AdGuardu pro iOS přímo z prohlížeče. Klepněte na *Rozšíření* – je to tlačítko s ikonou skládačky, v závislosti na typu vašeho zařízení může být umístěno vlevo nebo vpravo od adresního řádku. Vyhledejte **AdGuard** v seznamu a klepněte na něj.

![Web extension menu *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Na iPadech je webové rozšíření pro Safari od AdGuardu dostupné přímo klepnutím na ikonu AdGuardu v adresním řádku prohlížeče.

Zobrazí se vám následující seznam možností:

- **Zapnutí/vypnutí ochrany na webu**. Vypnutím přepínače se AdGuard pro aktuální webovou stránku zcela zakáže a přidá se příslušné pravidlo výjimky. Opětovným zapnutím přepínače se obnoví ochrana webové stránky a pravidlo se odstraní. Každá taková změna si vyžádá určitý čas, než se projeví.

- **Ruční blokování prvků na stránce**. Klepnutím na tlačítko *Blokovat prvky na této stránce* zobrazíte vyskakovací okno pro blokování prvků. Vyberte libovolný prvek na stránce, který chcete skrýt, upravte oblast výběru, zobrazte náhled změn a potvrďte odstranění. Do AdGuardu bude přidáno odpovídající pravidlo filtrování (které můžete později zakázat nebo odstranit, abyste změnu vrátili).

- **Nahlášení problému**. Přejetím nahoru zobrazíte tlačítko *Nahlásit problém*. Pomocí něj můžete nahlásit nezablokovanou reklamu nebo jiný problém, na který jste na aktuální stránce narazili.

## Jak zapnout webové rozšíření pro Safari od AdGuardu

:::note

Webové rozšíření pro Safari od AdGuardu vyžaduje ke své činnosti přístup k obsahu webových stránek, ale nepoužívá jej k jiným účelům než k blokování reklam.

:::

### V nastavení iOS

Webové rozšíření není samostatný nástroj a vyžaduje AdGuard pro iOS. Pokud na svém zařízení nemáte nainstalovaný AdGuard pro iOS, [nejprve](../installation) jej nainstalujte a dokončete proces registrace, abyste jej připravili k práci.

Po dokončení otevřete *Nastavení* a přejděte dolů na položku *Aplikace*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Poté otevřete *Safari* → *Rozšíření*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

V sekci **POVOLIT TATO ROZŠÍŘENÍ** mezi dostupnými rozšířeními vyhledejte **AdGuard**.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Klepněte na něj a přepněte přepínač *Povolit rozšíření*.

V nižší části téže obrazovky zkontrolujte, zda je u položky *Všechny webové stránky* nastaveno *Povolit* nebo *Zeptat se*. Pokud zvolíte *Povolit*, nebudete muset udělovat oprávnění při každé návštěvě nové webové stránky. Pokud si nejste jisti, zvolte *Zeptat se* k udělení oprávnění pro jednotlivé stránky.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### V Safari

Chcete-li rozšíření AdGuard povolit přímo v prohlížeči Safari, klepněte na ikonu na levé straně pole URL:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Poté klepněte na *Spravovat rozšíření*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

V otevřeném okně zapněte přepínače AdGuard. První z nich je webové rozšíření AdGuard, dalších šest jsou blokátory obsahu potřebné pro filtrování.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

Mezi dostupnými rozšířeními byste nyní měli vidět AdGuard. Chcete-li povolit **pokročilou ochranu**, otevřete rozšíření AdGuard, klepněte na žlutou ikonu **i**, stiskněte *Povolit* a akci potvrďte.

:::note

Pokud používáte AdGuard pro iOS bez předplatného Premium, nebudete moci zapnout **Pokročilou ochranu**.

:::

Případně můžete zapnout **Pokročilou ochranu** přímo z aplikace na kartě **Ochrana** (druhá zleva v dolní řadě ikon).

Webové rozšíření pro Safari od AdGuardu funguje pouze ve verzích iOS 15 a novějších.
