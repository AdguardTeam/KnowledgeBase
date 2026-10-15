---
title: AdGuard Browser Extension MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), and other Chromium-based browsers, Opera and Microsoft Edge among them, are moving to MV3 as well. Users of these browsers need an MV3 extension, compatible with the new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Наше MV3-расширение эффективно блокирует рекламу и трекеры, а также убирает виджеты социальных сетей, баннеры и видеорекламу. Большинство пользователей не заметят переход на MV3, но о некоторых ограничениях и изменениях следует рассказать.

## Где найти наши расширения

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip` for Chrome and `opera-mv3.zip` for Opera.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Основные изменения в функциях и настройках

- **Filter updates.** The options _Auto-update filters_ and _Check filters update_ are not available
  in the _Filters_ tab: rules that ship as part of the extension can be updated only together with a
  new extension version, after store review. Keep automatic extension updates enabled in your
  browser.

  Custom filters you add by URL update on their own, independently of extension updates.

- **AdGuard Quick Fixes filter.** Because built-in rules can’t be updated on request, the extension
  ships the _AdGuard Quick Fixes_ filter. It uses dynamic rules to react to newly introduced ads and
  broken websites between releases, so keep it enabled.

- **Filtering log**

  ![Filtering log \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “assumed rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a [separate article](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking protection_ (formerly known as _Stealth mode_)

  ![Tracking protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

  There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Phishing & malware protection_ is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate _Security_ filters in the _Filters_ tab.

  ![Security \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Ограничения

### Максимальное количество правил и фильтров

Manifest V3 накладывает ограничения на статические правила и правила с регулярными выражениями для каждого расширения. Пользователи могут увидеть уведомления, если эти ограничения превышены.

![Лимиты правил \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Слишком много расширений \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Manifest V3 делит правила на статические (встроенные) и динамические, и для всех действуют строгие ограничения.

**Статические правила:** минимум **30 000** правил на расширение, с общим лимитом **330 000** для всех расширений, установленных одним пользователем.

Для правил с регулярными выражениями лимит составит **1000 правил на расширение**.

Максимальное количество одновременно включенных фильтров — **50**.

**Динамические правила:** установлено строгое ограничение в **5000** правил, включая не более 1000 правил с регулярными выражениями.

Если этот лимит превышен, будут применены только **5000 преобразованных правил** в следующем порядке: правила Белого списка, Пользовательские правила, Собственные фильтры и Фильтр быстрых исправлений.

> **Преобразованные правила** — это правила, которые были преобразованы
> в \[формат DNR] с помощью [декларативного конвертера][github-declarative-converter].
> В ходе преобразования некоторые правила могут отменять другие (`$badfilter`), а некоторые могут объединиться (`$removeparam`), в результате чего порядок правил изменится.
>
> Из этого списка преобразованных правил будут использоваться только 5000 правил. Остальные будут отображены в редакторе, но применяться не будут.

Here’s how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

преобразуется в

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Больше примеров можно найти [на GitHub][github-declarative-converter-examples].

### Модификаторы сетевых правил

Применение модификаторов сетевых правил тоже изменилось: некоторые вообще не могут быть реализованы в условиях MV3, а некоторые работают с ограничениями.

Более подробную информацию об ограничениях можно найти [на GitHub][github-declarative-converter].
Добавили информацию об этих модификаторах [в Базу знаний](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
