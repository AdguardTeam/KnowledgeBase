---
title: Nastavení
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

The _Settings_ tab can be accessed by tapping the right-most icon at the bottom of the screen. This section contains various settings, information about your app, license & subscription, and various support resources.

## Obecné

Tato sekce vám pomůže spravovat vzhled a chování aplikace: můžete nastavit barevný motiv a jazyk, spravovat oznámení a další. If you want to help the AdGuard team detect app crashes and research usability, you can enable _Auto-report crashes_ and _Send technical and interaction data_.

![General \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under _App and filter updates_, you can configure automatic filter updates and select an app update channel. Choose _Release_ for more stability and _Beta_ or _Nightly_ for early access to new features.

![Updates \*mobile\_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Pokročilá nastavení

_Automation_ allows you to manage AdGuard via tasker apps.

_Watchdog_ helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). Zadaná hodnota bude interval v sekundách mezi kontrolami watchdog.

_Logging level_ defines what data about the app's operation should be logged. Ve výchozím nastavení aplikace shromažďuje údaje o vlastních událostech. The _Debug_ level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The _Low-level settings_ section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrování

Tato sekce umožňuje spravovat nastavení HTTPS filtrování, filtry a uživatelské skripty a nastavit proxy server.

![Filtering \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtry

AdGuard blokuje reklamy, slídiče a obtěžující prvky pomocí pravidel ze svých filtrů. Most features from the _Protection_ section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable _Basic protection_, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, _Basic protection_ will also be disabled.

![Filters \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtry povolené ve výchozím nastavení jsou dostatečné pro běžný provoz AdGuardu. Pokud si však chcete blokování reklam přizpůsobit, můžete použít jiné AdGuard filtry nebo filtry třetích stran. Za tímto účelem vyberte kategorii a povolte požadované filtry. To add a custom filter, tap _Custom filters_ → _Add custom filter_ and enter its URL or file path.

:::note

Pokud aktivujete příliš mnoho filtrů, mohou některé webové stránky fungovat nesprávně.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

### Uživatelské skripty

Uživatelské skripty jsou miniprogramy napsané v jazyce JavaScript, které rozšiřují funkčnost jedné nebo více webových stránek. K instalaci uživatelských skriptů potřebujete speciální správce uživatelských skriptů. AdGuard takovou funkci má a umožňuje přidávat uživatelské skripty pomocí URL nebo ze souboru.

![Userscripts \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra je vlastní uživatelský skript, který blokuje složité reklamy a mechanismy, které znovu vkládají reklamy na webové stránky.

#### Zakázat AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Síť

#### HTTPS filtrování

K blokování reklam a slídičů na většině webových stránek a ve většině aplikací potřebuje AdGuard filtrovat jejich provoz HTTPS. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Bezpečnostní certifikáty

Za účelem správy šifrovaného provozu nainstaluje AdGuard do vašeho zařízení certifikát CA. Je to bezpečné: provoz je filtrován lokálně a AdGuard ověřuje bezpečnost připojení.

Ve starších verzích Androidu se certifikát nainstaluje automaticky. V systému Android 11 a novějších verzích je třeba certifikát nainstalovat ručně. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

Certifikát CA v uživatelském úložišti stačí k filtrování provozu HTTPS v prohlížečích a některých aplikacích. Existují však aplikace, které důvěřují pouze certifikátům ze systémového úložiště. Chcete-li tam filtrovat provoz HTTPS, musíte do systémového úložiště nainstalovat CA certifikát AdGuardu. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Filtrované aplikace HTTPS

Tato sekce obsahuje seznam aplikací, pro které AdGuard filtruje provoz HTTPS. Upozorňujeme, že nastavení lze použít pro všechny aplikace pouze v případě, že máte certifikáty CA v uživatelském úložišti i v systémovém úložišti.

##### Weby s HTTPS filtrováním

Toto nastavení umožňuje spravovat weby, pro které má AdGuard filtrovat provoz HTTPS.

Filtrování HTTPS umožňuje AdGuardu filtrovat obsah požadavků a odezev, tato data však nikdy neshromažďujeme ani neukládáme. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Výběrem jednoho z režimů můžete do výjimek přidat také weby, které považujete za nezbytné:

- Vyloučení konkrétních webových stránek z HTTPS filtrování
- Filtrování provozu HTTPS pouze na webech přidaných do výjimek

Ve výchozím nastavení také nefiltrujeme weby s certifikáty s rozšířeným ověřením (EV), jako jsou například finanční webové stránky. Pokud potřebujete, můžete také povolit možnost _Filtrovat weby s certifikáty EV_.

#### Proxy

AdGuard můžete nastavit tak, aby veškerý provoz vašeho zařízení směroval přes server proxy. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

V této sekci můžete také nastavit VPN třetí strany pro spolupráci s AdGuardem, pokud to váš poskytovatel VPN umožňuje.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Režim směrování

V této sekci můžete vybrat metodu filtrování provozu.

- _Local VPN_ filters traffic through a locally created VPN. Jedná se o nejspolehlivější režim. Vzhledem k omezením systému Android je to také jediná celosystémová metoda filtrování provozu dostupná na zařízeních bez přístupu root.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. Chcete-li s AdGuardem používat jinou VPN, musíte ji překonfigurovat, aby fungovala v režimu proxy, a nastavit odchozí proxy v AdGuardu. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. Významnou výhodou je, že jej lze provozovat souběžně s VPN. Tento režim vyžaduje přístup root.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. Tento režim vyžaduje přístup root pro Android 10 a vyšší.

## Licence

V této sekci najdete informace o své licenci a můžete provádět následující:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Přihlásit se ke svému AdGuard účtu nebo zadat licenční klíč pro aktivaci licence
- Zaregistrovat se a aktivovat si 7denní zkušební dobu, pokud jste ji ještě nevyužili
- Refresh the license status from the three-dots menu (:)
- Otevřít AdGuard účet a spravovat v něm své licence
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Podpora

Tuto sekci použijte, pokud máte nějaké dotazy nebo návrhy týkající se AdGuardu pro Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. Pokud je to možné, popište podrobně svůj problém a přidejte záznamy aplikace. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub je alternativní způsob, jak hlásit chyby a navrhovat nové funkce. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
