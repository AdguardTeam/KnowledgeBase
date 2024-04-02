---
title: Statistiky
sidebar_position: 3
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

The _Statistics_ module can be accessed by tapping the _Statistics_ tab (fourth icon from the left at the bottom of the screen). Tato funkce vám poskytne kompletní přehled o provozu ve vašem zařízení: kolik požadavků je odesláno a kterým společnostem, kolik dat je odesláno a staženo, jaké požadavky jsou blokovány atd. You can choose to display the statistics for the selected time period: 24 hours, 7 days, 30 days, or all time.

![Statistics \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Statistiky jsou rozděleny do různých sekcí.

### Požadavky

This section shows the number of blocked ads, trackers, and the total number of requests. You can filter requests by data type: mobile data, Wi-Fi, or all data combined.

_Recent activity_, formerly known as _Filtering log_, shows the last 10,000 requests processed by AdGuard. Tap three-dots menu (⋮) and then _Customize_ to filter requests by status (_regular_, _blocked_, _modified_, or _allowlisted_) or origin (_first-party_ or _third-party_).

You can tap a request to view its details and add a blocking or unblocking rule in one tap.

### Využití dat

This section shows the amount of downloaded and uploaded data and saved traffic for the selected data type (mobile data, Wi-Fi, or all). Tap _saved_, _uploaded_, or _downloaded_ to view the graph of data usage over time.

### Aplikace

Tato sekce zobrazuje statistiky všech aplikací nainstalovaných ve vašem zařízení. Aplikace můžete třídit podle počtu blokovaných reklam, slídičů nebo podle počtu odeslaných požadavků.

Tap _View all apps_ to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Pokud klepnete na aplikaci, zobrazí se její úplné statistiky: požadavky, které odesílá, domény a společnosti, na které obrací.

### Společnosti

Tato sekce zobrazuje společnosti, na které se vaše zařízení obrací. Co to znamená? AdGuard detekuje domény, do kterých vaše zařízení odesílá požadavky a určuje, kterým společnostem patří. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### Statistiky DNS

This section shows data about the requests handled by _DNS protection_. Celkový počet odeslaných požadavků a počet požadavků zablokovaných AdGuardem si můžete prohlédnout v číslech a grafech. Najdete zde také statistiky o množství ušetřených, stažených a nahraných dat.

### Využití baterie

Tato sekce zobrazuje statistiky o prostředcích zařízení použitých AdGuardem za posledních 24 hodin. The data may differ from the stats displayed in your device settings. This happens because the system attributes the traffic of all filtered apps to AdGuard. Zařízení tedy zobrazuje, že AdGuard spotřebovává více prostředků, než ve skutečnosti spotřebovává. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/).
