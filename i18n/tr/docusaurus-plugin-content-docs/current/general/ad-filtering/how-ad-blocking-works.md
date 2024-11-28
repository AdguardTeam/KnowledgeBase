---
title: Reklam engelleme nasıl çalışır
sidebar_position: 1
---

AdGuard has many ad-blocking products for different platforms, each with its own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside.

:::not

We don't cover DNS filtering here. It's a different way of blocking ads, with its own advantages and disadvantages. Follow this link to [learn more about DNS filtering](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work).

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## General principle

Filter lists, also called filters, lie at the core of any ad blocker. Filters are literally lists of rules written in a special syntax. Ad blockers can understand this complex syntax. They interpret filtering rules and perform actions on web traffic based on what the rules tell them to do: block specific elements, alter web pages in certain ways, etc.

![Reklam engelleme nasıl çalışır](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Filtre listeleri

To better understand ad blocking, it's important to know the underlying principles of how filters work.

Filtering rules that make up filters are not created automatically. They are developed by filter maintainers, including professionals and volunteers, who use browser developer consoles and other tools (such as the AdGuard's filtering log) to determine which rules will block a particular ad or tracker. This description of the process is very simplistic — some ads are particularly hard to block and require multiple rules, multiple iterations, and the use of complex syntax.

And even when a rule finally gets added to a filter, it doesn't mean that it stays there forever. Ads change, ways to serve the same ads on the same websites change, and the filter rules have to change, too. Sometimes rules become obsolete, a new ad appears, or a new filtering rule is needed to block the same ad. Filtreler genellikle bir kişi tarafından yönetilir, ancak bir yönetici ekibi için bile tüm web'i sürekli olarak izlemek imkansızdır. That's why many ad blockers have tools to help users easily report any filter-related issues they encounter.

![Filter update scheme](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

AdGuard users [have access to a special web reporting tool](https://reports.adguard.com/new_issue.html). Thanks to user complaints, filter developers can focus on correcting their filter lists and not on scouring the Internet for new and old unblocked ads.

Filters can do more than just block ads. İzlenmeyi, sosyal medya araçlarını ve çerez bildirimleri gibican sıkıcı öğeleri engelleyen filtreler vardır. Different users may choose different combinations of filters to match their personal preferences. There are websites like [filterlists.com](https://filterlists.com/) that are dedicated to filter lists and have huge databases.

We develop and maintain [our own set of filter lists](../adguard-filters) that can be used with AdGuard or other ad blockers.

## Types of filtering rules

There are many types of filtering rules that serve different purposes. Depending on the ad blocker you use, and especially on your OS, some types of rules may not be supported.

### Temel filtreleme kuralları

To be displayed on a web page or in an app, the ad has to be loaded from a server first. To do so, the browser or the app needs to send a web request. Bir reklamın ekranınızda görünmesini engellemenin en temel yolu, bu isteği engellemektir, böylece sunucuya asla ulaşmamasını ve dolayısıyla yanıt vermemesini sağlamaktır.

Basically, all AdGuard Ad Blocker products can block web requests according to the active filter rules. This method is very effective at stopping the ad, but it has some drawbacks. The most obvious one is: whatever place an ad was taking up will be left empty or occupied by an ad leftover.

### Kozmetik filtreleme kuralları

Every web page has a Document Object Model (DOM), an HTML document containing the structure and elements of this page. As ads are also page elements, they get recorded in the DOM. Ad blockers can remove parts of the DOM, while filtering rules help them understand which parts are ads and should be removed, and which parts should be left intact.

This method allows you to avoid above-mentioned blank spaces and ad leftovers, as well as perform other more complicated tasks.

### HTML filtreleme kuralları

In most cases, it's enough to use the above-mentioned basic and cosmetic rules to filter ads. But when it is necessary to change the HTML code of the page itself before it is loaded, you need filtering rules for HTML content. These rules allow you to specify the HTML elements to be cut out before the browser even loads the page.

These rules are quite complicated and require the ad blocker to be granted certain access rights, so not all platforms support them. Currently, these rules work only in the AdGuard Firefox add-on and in the AdGuard apps for Windows, Mac, and Android.

:::info

There are other types of filtering rules, but they require more advanced technical knowledge to understand how they work. If you are interested, [check out our comprehensive guide on filtering rules in the linked article](../create-own-filters).

:::

## AdGuard'da istek işleme türleri

AdGuard, istekleri kullanıcı tarafından etkinleştirilen filtrelere, kullanıcı kurallarına ve ayarlara göre işler. Sonuç olarak, bir istek engellenebilir, değiştirilebilir, izin verilebilir veya üzerine hiçbir işlem yapılmadığında sadece işlenebilir.

Detailed information on how each request of yours has been handled by AdGuard can be found in the *Filtering log* (AdGuard for Windows, AdGuard for Mac, AdGuard Browser Extension) or *Recent activity* (AdGuard for iOS, AdGuard for Android).

AdGuard filtreleriyle ilgili olarak, filtrelerimizin her birinin neyi ve neden engellediğini ayrıntılı olarak açıklayan [filtre politikamızı](../filter-policy) da kontrol edebilirsiniz.

### Engellenen isteklerin örnekleri

AdGuard DNS filtresi, `ad.doubleclick.net` gibi reklam alan adlarına gelen istekleri engeller.

AdGuard İzleme Koruması filtresi, `youtube.com/youtubei/log_event?` gibi izleme isteklerini engeller.

### İzin verilen isteklerin örnekleri

AdGuard Temel filtresi, `www.google.com/complete/search?q=` gibi reklam dışı isteklerin yapılmasına izin verir.

Filter unblocking search ads and self-promotion allows requests to search ad-related domains, such as `www.google.com/aclk?`.

Kullanıcı tarafından *İzin listesine* eklenen sitelere yapılan isteklere izin verilir.

### Değiştirilmiş isteklerin örnekleri

Koruma seviyesi *Yüksek* olarak ayarlanmış izleme koruması özelliği, izleme parametrelerini kaldırarak istekleri değiştiren AdGuard URL İzleme filtresini etkinleştirir:

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` → `https://www.gog.com/game/spec_ops_the_line`

Please note that *modified* events you see in the Filtering log or Recent activity refer not only to the cases when a request is modified, but also when:

- sayfadaki bir şey değiştirilirse (genellikle kozmetik kurallar tarafından)
- yanıt değiştirilirse
