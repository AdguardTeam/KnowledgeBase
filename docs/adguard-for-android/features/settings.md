---
title: Settings
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The *Settings* tab can be accessed by tapping the right-most icon at the bottom of the screen. This section contains various settings, information about your app, license & subscription, and various support resources.

## General

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable *Auto-report crashes* and *Send technical and interaction data*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under *App and filter updates*, you can configure automatic filter updates and select an app update channel. Choose *Release* for more stability and *Beta* or *Nightly* for early access to new features.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Advanced settings

*Automation* allows you to manage AdGuard via tasker apps.

*Watchdog* helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). The value you enter will be the interval in seconds between watchdog checks.

*Logging level* defines what data about the app's operation should be logged. By default, the app collects the data about its events. The *Debug* level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The *Low-level settings* section is for expert users. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtering

This section allows you to manage HTTPS filtering settings, filters, and userscripts, and set up a proxy server.

![Filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filters

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::note

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

### Extensions

Extensions allow you to add userscripts and userstyles.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to *Settings* → *Filtering* → *Extensions*→ *Add extension* → *Import from file or URL*. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap *Add extension* → *Create userstyle*.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Network

#### HTTPS filtering

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. If needed, you can enable the *Filter websites with EV certificates* option.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- *Local VPN* filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The *Local VPN* mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [*Integrated mode*](/adguard-for-android/features/integration-with-vpn).

:::

- *Automatic proxy* is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

:::note

Please note that DNS filtering will still be active in *Automatic proxy* routing mode, and your device may not be able to filter DNS requests from specific apps. In *VPN* routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In *Automatic proxy* mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## License

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 14-day trial period. The license key can be used on different devices and platforms
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/android/settings/licensetab.png)

## Support

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting *[FAQ](https://adguard.com/support/adguard_for_android.html)* or this knowledge base before contacting support.

![Support *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via *Report incorrect blocking*.

For unexpected app behavior, select *Report a bug*. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use *Request a feature*.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
