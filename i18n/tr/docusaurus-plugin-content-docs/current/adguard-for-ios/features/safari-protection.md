---
title: Safari protection
sidebar_position: 1
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. iOS için AdGuard altı içerik engelleyici içerir: Genel, Gizlilik, Sosyal, Güvenlik, Özel ve Diğer. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in _Advanced settings_ (tap the gear icon at the bottom right → _General_ → _Advanced settings_ → _Content blockers_).

![Content blockers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

En iyi filtreleme kalitesi için tüm içerik engelleyicileri etkin tutun.

:::

### Filters {#filters}

İçerik engelleyicilerin çalışması, bazen filtre listeleri olarak da adlandırılan filtrelere dayanmaktadır. Her filtre, filtreleme kurallarının bir listesidir. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Reklamları, izleyicileri ve daha fazlasını engellemek için kurallar geliştirilmiştir.

Tüm filtreler içerikli kategoriler hâlinde gruplandırılmıştır. To see the full list of these categories (not to be confused with content blockers), open the _Protection_ section by tapping the shield icon, then go to _Safari protection_ → _Filters_.

![Filter groups \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

Daha fazla filtrenin etkin olması daha az reklam olacağını garanti etmez. Aynı anda etkinleştirilen çok sayıda çeşitli filtre, reklam engellemenin kalitesini düşürür.

:::

Özel filtreler kategorisi, kullanıcıların filtrelerini URL'ye göre eklemeleri için varsayılan olarak boştur. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Tüm filtre listesini eklemeden Safari filtrelemesini özelleştirmek için bu aracı kullanın.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). Ancak bunların birçoğunun iOS'ta Safari'de çalışmayacağını lütfen unutmayın.

![User rules screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the _Safari protection_ screen. Belirli bir sitede reklam engellemeyi devre dışı bırakmak istiyorsanız, İzin listesi size yardımcı olacaktır. It allows you to add domains and subdomains to exclusions. iOS için AdGuard'ın bir İçe ve Dışa aktarma özelliği vardır, böylece bir cihazdaki izin listesi kolayca başka bir cihaza aktarılabilir.
