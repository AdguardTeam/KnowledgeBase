---
title: Known compatibility issues with Android apps
sidebar_position: 14
---

## Conflict apps

### Various VPN apps

All VPN apps are incompatible with AdGuard running in VPN filtering mode since you cannot have two active VPNs at the same time. To solve this problem we can suggest you:

* to use AdGuard VPN that has a compatibility mode with AdGuard out-of-the-box
* to use AdGuard in Local HTTP Proxy mode. *Please note that 'manual' HTTP Proxy mode is broken since Android 10*
* to figure out if the third-party VPN app supports SOCKS4/SOCKS5 mode. In this case you can configure a VPN app to work as outbound proxy and to set up local-host outbound proxy with params from the third-party app. AdGuard can be automatically configured with 'Orbot: Proxy with Tor'

### Samsung Pay

The Samsung Pay app does not work with AdGuard due to the presence of an active VPN interface. This issue is region-specific and all known issues were reported by users from South Korea. Find more details [here](https://github.com/AdguardTeam/AdguardForAndroid/issues/1209).

### Private DNS

The Private DNS feature was introduced in Android Pie. However, before version Q the private DNS didn't break our logic, and the DNS forwarding through AdGuard worked normally. But since version Q, the presence of a private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) for more details.

> Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling the private DNS is impossible, but we can make the system think that the upstream is not valid. The system will use us as a bootstrap for the first host resolution and we can block it with $network rule. A failed bootstrap request causes the system to redirect DNS traffic through AdGuard.

## Unsupported browsers

| **App name** | **Package name** | **Filtering mode** |
| :----: | :----: | ---: |
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