---
title: Nastavení
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Na kartu _Nastavení_ se dostanete klepnutím na ikonu úplně vpravo dole na obrazovce. Tato část obsahuje různá nastavení, informace o aplikaci, licenci a předplatném a různé zdroje podpory.

## Obecné

Tato sekce vám pomůže spravovat vzhled a chování aplikace: můžete nastavit barevný motiv a jazyk, spravovat oznámení a další. Pokud chcete týmu AdGuard pomoci odhalit pády aplikací a zkoumat jejich použitelnost, můžete povolit funkce _Automatické hlášení pádů_ a _Odesílání technických údajů a údajů o interakci_.

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

V sekci _Aktualizace aplikace a filtrů_ můžete nakonfigurovat automatické aktualizace filtrů a vybrat kanál aktualizace aplikace. Vyberte _Hlavní_ pro větší stabilitu a _Beta_ nebo _Nightly_ pro včasný přístup k novým funkcím.

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Pokročilá nastavení

_Automatizace_ vám umožňuje spravovat AdGuard prostřednictvím aplikací Tasker.

_Hlídací pes_ pomáhá chránit AdGuard před vypnutím systémem ([přečtěte si více o úsporném režimu baterie systému Android](/adguard-for-android/solving-problems/background-work/)). Zadaná hodnota bude interval v sekundách mezi kontrolami watchdog.

_Úroveň záznamu_ definuje, jaká data o provozu aplikace by měla být zaznamenána. Ve výchozím nastavení aplikace shromažďuje údaje o vlastních událostech. _Úroveň ladění_ zaznamenává více událostí – povolte ji, pokud o to tým AdGuardu požádá, abyste mu pomohli lépe porozumět problému. [Přečtěte si více o shromažďování a odesílání záznamů](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Sekce _Nízkoúrovňová nastavení_ je určena pro zkušené uživatele. [Přečtěte si více o Nízkoúrovňových nastavení](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrování

Tato sekce umožňuje spravovat nastavení HTTPS filtrování, filtry a uživatelské skripty a nastavit proxy server.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filtry

AdGuard blokuje reklamy, slídiče a obtěžující prvky pomocí pravidel ze svých filtrů. Většina funkcí ze sekce _Ochrana_ je podporována [AdGuard filtry](/general/ad-filtering/adguard-filters/#adguard-filters). Pokud povolíte _Základní ochranu_, automaticky se zapne filtr AdGuard Base a AdGuard Filtr mobilních reklam. A naopak: pokud oba filtry vypnete, bude vypnuta i _Základní ochrana_.

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtry povolené ve výchozím nastavení jsou dostatečné pro běžný provoz AdGuardu. Pokud si však chcete blokování reklam přizpůsobit, můžete použít jiné AdGuard filtry nebo filtry třetích stran. Za tímto účelem vyberte kategorii a povolte požadované filtry. Chcete-li přidat vlastní filtr, klepněte na _Vlastní filtry_ → _Přidat vlastní filtr_ a zadejte jeho URL nebo cestu k souboru.

:::note

Pokud aktivujete příliš mnoho filtrů, mohou některé webové stránky fungovat nesprávně.

:::

[Více informací o filtrech](https://adguard.com/en/blog/what-are-filters.html)

### Rozšíření

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Síť

#### HTTPS filtrování

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. Pokud potřebujete, můžete také povolit možnost _Filtrovat weby s certifikáty EV_.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## Licence

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Podpora

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
