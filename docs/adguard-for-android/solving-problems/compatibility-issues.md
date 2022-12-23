---
title: Known compatibility issues with Android apps
sidebar_position: 14
---

### VPN apps

Other VPN apps are incompatible with AdGuard running in the Local VPN filtering mode since you cannot have two active VPNs at the same time. To solve this problem we suggest you:

* use AdGuard VPN — it has Integrated mode that allows two apps to operate seamlessly
* use AdGuard in Local HTTP Proxy mode. *Please note that 'manual' HTTP Proxy mode is not supported on devices since Android 10*
* if you use a third-party VPN app, figure out whether it supports SOCKS4/SOCKS5 mode. If it does, you can configure your VPN app to work as outbound proxy and set up local outbound proxy with params from the third-party app. For instance, AdGuard can be automatically configured with 'Orbot: Proxy with Tor'

### Private DNS

The Private DNS feature was introduced in Android Pie. Before version Q, Private DNS didn't break our logic and the DNS forwarding through AdGuard worked normally. But starting from version Q, the presence of Private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) for more details.

> Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid. The system will use AdGuard as a bootstrap for the first host resolution and we can block it with a `$network` rule. A failed bootstrap request causes the system to redirect DNS traffic through AdGuard.

### Unsupported browsers

| **App name** | **Package name** | **Filtering mode** |
| :----: | :----: | ---: | ---: |
| Opera mini      | com.opera.mini.android | All |
| Opera mini with Yandex | com.opera.mini.android.yandex | All |
| UC Browser | com.UCMobile.intl | All|
| UC Browser for x86 | com.UCMobile.intl.x86 | All |
| UC Mini | com.uc.browser.en | All |
| UC Browser HD | com.uc.browser.hd | All |
| Pufin Browser | com.cloudmosa.puffinFree | All |
| Pufin Browser Pro | com.cloudmosa.puffin | All |
| Dolphin Browser | com.dolphin.browser | Manual HTTP Proxy |
| Dolphin Browser Express | com.dolphin.browser.express.web | Manual HTTP Proxy |

**Why AdGuard doesn't support these browsers**

The UC-family browsers, Opera mini and Pufin Browser use data compression to speed up page loading. However, because of this, AdGuard's traffic filtering works incorrectly and ads are not blocked. As for Dolphin Browser, AdGuard cannot filter its traffic when operating in "Manual proxy mode" because this browser ignores system proxy settings.