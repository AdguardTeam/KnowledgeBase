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

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### V Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
