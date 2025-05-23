---
title: AdGuard filters
sidebar_position: 2
---

:::info

Este artigo é sobre os filtros que desenvolvemos e que vêm pré-instalados no AdGuard. To check them out, you can [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Este artigo é sobre os filtros que criamos para usar no AdGuard e outros softwares de bloqueio de anúncios (por exemplo, uBlock Origin). Filters are sets of rules in text format used by AdGuard apps and programs to filter out advertising and privacy-threatening content such as banners, popups, or trackers. Filters contain lists of rules based on their purpose. Language filters include rules for corresponding language segments of the Internet (e.g., German filter). Task-based filters group rules that fulfil a specific task, such as Social media filter or Tracking Protection filter. Enabling or disabling a filter makes it easier to work with the entire list of rules at once.

## AdGuard filters

- **Base filter** removes ads from websites with English content. Originally based on [EasyList](https://easylist.to/) and modified by us. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **Tracking Protection filter** — comprehensive list of various online counters and web analytics tools. Use it to hide your actions online and avoid tracking. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **URL Tracking filter** enhances privacy by removing tracking parameters from URLs. When a user opts to block tracking parameters in Stealth Mode, this filter will be enabled automatically. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **Social media filter** removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **Annoyances filter** blocks irritating elements on web pages. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt). Includes the following AdGuard filters (all of them can be enabled separately from the Annoyances filter):

    - **Cookie Notices** blocks cookie notices on web pages. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Popups** blocks all kinds of popups that are not necessary for websites' operation. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Mobile App Banners** blocks banners that promote mobile apps of websites. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widgets** blocks third-party widgets: online assistants, live support chats, etc. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Other Annoyances** blocks elements that do not fall under the popular categories of annoyances. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **Filter unblocking search ads and self-promotions** unblocks ads that may be useful to users. Learn more about this filter on [this page](../search-ads). [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Russian filter** removes ads from websites in Russian. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **German filter** removes ads from websites in German. Originally based on the [EasyList Germany](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **French filter** removes ads from websites in French. Originally based on the [Liste FR](https://forums.lanik.us/viewforum.php?f=91) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Japanese filter** removes ads from websites in Japanese. Originally based on the [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Dutch filter** removes ads from websites in Dutch. Originally based on the [EasyList Dutch](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Spanish/Portuguese filter** removes ads from websites in Spanish and Portuguese. Originally based on the [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Turkish filter** removes ads from websites in Turkish. Created by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Chinese filter** removes ads from websites in Chinese. Originally based on the [EasyList China](https://github.com/easylist/easylistchina) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Ukrainian filter** removes ads from websites in Ukrainian. Learn more about this filter on [this page](https://adguard.com/en/blog/ukrainian-filter.html). [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **Experimental filter** serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. In case these rules perform without any issues, they get added to main filters. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Mobile ads filter** blocks ads on mobile devices. Contains all known mobile ad networks. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **DNS filter** — composed of several other filters (AdGuard Base filter, Social media filter, Spyware filter, Mobile ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking. This filter is used by [AdGuard DNS](https://adguard-dns.io/kb) servers to block ads and tracking. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
- **Quick Fixes filter** — used to quickly resolve critical content filtering issues on popular websites without updating the MV3 extension. [View rules](https://filters.adtidy.org/extension/chromium-mv3/filters/24.txt)

## AdGuard Filters Policy

Our filter policy defines what AdGuard filters should and shouldn't block, as well as the rules for adding and removing rules from filters. Read the full text of [AdGuard filter policy](../filter-policy) for detailed information.

## Contributing to AdGuard filters

We are blessed with a unique community that not only loves AdGuard but also gives back. Many people volunteer in various ways to make AdGuard's user experience better for everybody. You are welcome to join the band and make a difference. We will do our part and happily reward the most active community. So, what can you do?

### Report Issues

We rely on the community to let us know about issues with our filters. It helps us use our time more efficiently and keep filters constantly updated. To submit a report, please use this [web reporting tool](https://agrd.io/report).

### Suggest Filtering Rules

You will find many open issues in the [GitHub filter repository](https://github.com/AdguardTeam/AdguardFilters/issues). Each one refers to a problem with a website, such as a missed ad or a false positive. Pick an issue and suggest your own rules in the comments. AdGuard filter engineers will review your suggestions and, if approved, add your rules to AdGuard filters.

Here is the [official documentation](../create-own-filters) on the syntax of AdGuard filtering rules. Please read it carefully: it will help you create your own filtering rules.

### Other ways to contribute

Here is [a dedicated page](https://adguard.com/contribute.html) for people willing to contribute to AdGuard in other ways.
