---
title: Filters
sidebar_position: 1
---

:::info

Bu makale, yalnızca tarayıcınızı koruyan AdGuard Tarayıcı Uzantısı hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. Sonuç olarak, web sayfalarınızda reklam görmeyi bırakırsınız.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tüm filtreler rollerine göre gruplandırılmıştır. Örneğin, reklam engelleme filtreleri, gizlilik koruma filtreleri, sosyal medya ile ilgili filtreler, vb. için kategoriler vardır. Filtreleri teker teker veya tüm grubu aynı anda etkinleştirebilirsiniz.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Özel filtreler

While the features of other filter groups are more or less self-explanatory, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Bu sekmede, varsayılan olarak uzantıda bulunmayan filtreler ekleyebilirsiniz. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Üstelik kendi filtrelerinizi oluşturabilir ve ekleyebilirsiniz. Aslında, herhangi bir filtre seti oluşturabilir ve reklam engellemeyi istediğiniz şekilde özelleştirebilirsiniz.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Yeni kurallar eklemenin birkaç yolu vardır. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Kullanıma hazır bir filtre listesini bir metin dosyasından da içe aktarabilirsiniz. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Ayrıca, kendi filtreleme kurallarınızı dışa aktarabilirsiniz. Bu seçenek, kural listenizi tarayıcılar veya cihazlar arasında aktarmak için iyidir.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## İzin listesi

The _allowlist_ is used to exclude certain websites from filtering. Listedeki sitelere engelleme kuralları uygulanmaz.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Ayrıca mevcut izin listelerini içe ve dışa aktarabilirsiniz. Örneğin, aynı izin verme kurallarını tarayıcılarınızın her birine uygulamak istiyorsanız kullanışlıdır.
