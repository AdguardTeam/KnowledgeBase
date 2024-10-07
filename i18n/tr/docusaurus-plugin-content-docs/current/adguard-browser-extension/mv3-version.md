---
title: Chrome için AdGuard Tarayıcı Uzantısı MV3
sidebar_position: 5
---

As MV2 extensions are being phased out in the Chrome Web Store, Chrome users may need to switch to MV3 extensions that are compatible with Chrome’s new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Our MV3 extension effectively blocks ads and trackers while seamlessly managing social widgets, banners, and video ads. Most users will not notice any operational differences, but there are some limitations and changes to be aware of.

## Uzantılarımızı nerede bulabilirsiniz

The **MV3 version** has replaced our old extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

MV3'ün **beta sürümü** [Chrome Web Mağazasında](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf) hâlâ mevcut olacaktır.

Eski beta uzantısı [**AdGuard Reklam Engelleyici MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) olarak yeniden adlandırılacak ve Google tarafından kullanımdan kaldırılana kadar desteklenecektir.

## Özellikler ve ayarlarda temel değişiklikler

- **No auto and manual filter updates.** The options _Auto-update filters_ and _Check filters update_ are no longer available in the _Filters_ tab. Bazı kurallar artık DNR formunda uygulandığından, filtreleri istek üzerine güncelleyemiyoruz, yalnızca mağazalardaki incelemeyle birlikte uzantıyı güncelleme işleminin tamamını gerçekleştiriyoruz.

- **Filtreleme günlüğü**

  ![Filtreleme günlüğü \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “assumed rule that was triggered” based on our engine. Kesin bilgi için, uzantının "Paketlenmemiş öğe" hâlini tarayıcınıza kendiniz yüklemeniz gerekir. Bunu nasıl yapacağınıza dair ayrıntılı talimatları [ayrı bir makalede]](/adguard-browser-extension/solving-problems/debug-rules/) bulabilirsiniz.

- _İzleme koruması_ (eski adıyla _Gizlilik modu_)

  ![İzleme koruması \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Phishing & malware protection_ is no longer available in the general settings. Kendinizi kötü amaçlı sitelerden ve dolandırıcılıklardan korumak için _Filtreler_ sekmesinde uygun _Güvenlik_ filtrelerini etkinleştirin.

  ![Güvenlik \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitations

### Maksimum kural ve filtre sayısı

Manifest V3 imposes limits on static and regex rules per extension. Users may receive notifications when these limits are exceeded.

![Kural limitleri \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Çok fazla uzantı \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Basically, Manifest V3 divides rules into static (built-in) and dynamic, with strict limits in place.

**Static rules:** minimum **30,000** rules per extension, with a cumulative limit of **330,000** for all extensions installed by a single user.

For regex rules, the limit is set at **1,000 per extension**.

The maximum number of simultaneously enabled filters is **50**.

**Dynamic rules:** a strict cap of **5,000** rules is imposed, which includes a maximum of 1,000 regex rules.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first allowlist, then user rules, and finally — custom filters.

> **Converted rules** are rules that have been transformed
> to [DNR format] using the [declarative converter][github-declarative-converter].
> Bu dönüştürme işlemi sırasında, bazı kurallar diğerlerinin üzerine yazılabilir (`$badfilter`), bazıları birleştirilebilir (`$removeparam`),
> biraz farklı bir sıralamaya sahip bir kural listesiyle sonuçlanabilir.
>
> From this list of converted rules, we will only use 5,000 rules. The rest of them will be displayed in the editor, but not applied.

Here's how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

is converted to

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

Daha fazla örnek [GitHub][github-declarative-converter-examples] adresinde bulunabilir.

### Ağ kuralı değiştiricileri

Network rule modifiers have limitations: some of them cannot be implemented in MV3, or can only be implemented with restrictions.

More details about the limitations can be found on [GitHub][github-declarative-converter].
Değiştiriciler hakkında daha fazla bilgi için lütfen [Bilgi tabanımıza](/general/ad-filtering/create-own-filters) bakın.

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
