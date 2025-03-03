---
title: Ayarlar
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

The _Settings_ tab can be accessed by tapping the right-most icon at the bottom of the screen. This section contains various settings, information about your app, license & subscription, and various support resources.

## Genel

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable _Auto-report crashes_ and _Send technical and interaction data_.

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under _App and filter updates_, you can configure automatic filter updates and select an app update channel. Choose _Release_ for more stability and _Beta_ or _Nightly_ for early access to new features.

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Advanced settings

_Automation_ allows you to manage AdGuard via tasker apps.

_Watchdog_ helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). Girdiğiniz değer, watchdog denetimleri arasındaki saniye cinsinden aralık olacaktır.

_Logging level_ defines what data about the app's operation should be logged. Varsayılan olarak, uygulama etkinlikleriyle ilgili verileri toplar. The _Debug_ level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Günlükleri toplama ve gönderme hakkında daha fazla bilgi edinin](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The _Low-level settings_ section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtreleme

This section allows you to manage HTTPS filtering settings, filters, and userscripts, and set up a proxy server.

![Filtering \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtreler

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the _Protection_ section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable _Basic protection_, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, _Basic protection_ will also be disabled.

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap _Custom filters_ → _Add custom filter_ and enter its URL or file path.

:::note

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

### Kullanıcı Betikleri

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. Bir kullanıcı betiği yüklemek için özel bir kullanıcı betiği yöneticisine ihtiyacınız vardır. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts \*mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra, karmaşık reklamları ve reklamları sitelere yeniden enjekte eden mekanizmaları engelleyen özel bir kullanıcı betiğidir.

#### AMP'yi devre dışı bırak

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Ağ

#### HTTPS filtreleme

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Güvenlik sertifikaları

Şifrelenmiş trafiği yönetmek için AdGuard, CA sertifikasını cihazınıza yükler. Güvenlidir: trafik yerel olarak filtrelenir ve AdGuard bağlantının güvenliğini doğrular.

Android'in eski sürümlerinde sertifika otomatik olarak yüklenir. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. Ancak, yalnızca sistem depolamasındaki sertifikalara güvenen uygulamalar vardır. Buradaki HTTPS trafiğini filtrelemek için AdGuard'ın CA sertifikasını sistem depolamasına yüklemeniz gerekir. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS filtrelenen uygulamalar

Bu bölüm, AdGuard'ın HTTPS trafiğini filtrelediği uygulamaların listesini içerir. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS filtrelenmiş siteler

Bu ayar, AdGuard'ın HTTPS trafiğini filtrelemesi gereken siteleri yönetmenizi sağlar.

HTTPS filtreleme, AdGuard'ın isteklerin ve yanıtların içeriğini filtrelemesini sağlar, ancak bu verileri asla toplamaz veya saklamayız. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. If needed, you can enable the _Filter websites with EV certificates_ option.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Yönlendirme modu

Bu bölüm trafik filtreleme yöntemini seçmenizi sağlar.

- _Local VPN_ filters traffic through a locally created VPN. Bu en güvenilir moddur. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## Lisans

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Destek

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
