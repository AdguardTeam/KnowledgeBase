---
title: 设置
sidebar_position: 4
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

点击屏幕底部最右边的图标即可进入「设置」。 本部分包含各种设置、有关应用程序、许可证和订阅的信息以及各种支持资源。

## 通用

此部分可帮助用户管理本应用的外观和行为：可以设置颜色主题和语言，管理通知等。 如您想帮助 AdGuard 团队检测应用崩溃并研究可用性，您可以开启「自动报告崩溃」和「发送技术和交互数据」。

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

用户可在「应用和过滤器更新」下配置自动更新过滤器，以及选择应用更新通道。 选择「稳定版」可试用正式发布版本，选择「测试版」或「Nightly」可提前使用最新功能。

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 高级设置

「自动化」让用户通过任务程序管理 AdGuard。

「看门狗功能」可帮助用户保护 AdGuard 免于被系统禁用（[阅读有关 Android 省电模式的更多信息](/adguard-for-android/solving-problems/background-work/)）。 您输入的数值将是看门狗检查的间隔时间（以秒为单位）。

「日志级别」定义应记录哪些有关应用程序运行的数据。 默认情况下，应用程序会收集有关其事件的数据。 「调试」级别记录更多事件，有时 AdGuard 团队要求启用调试级别，因为它们可以帮助支持团队更好地了解问题原因。 [了解有关收集和发送日志的更多信息](/adguard-for-android/solving-problems/log/)。

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

「低级设置」部分适用于专家用户。 [了解有关低级设置的更多信息](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## 过滤

此部分允许用户管理 HTTPS 过滤设置、过滤器和用户脚本，以及设置代理服务器。

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### 过滤器

AdGuard 应用过滤器中的规则以阻止广告、跟踪器和其他干扰。 「保护」的大部分功能基于 [AdGuard 过滤器](/general/ad-filtering/adguard-filters/#adguard-filters)。 如果启用「基本保护」，它将自动打开 AdGuard 基础过滤器和 AdGuard 移动广告过滤器。 在关闭两个过滤器的情况下，「基本保护」也将被禁用。

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

默认启用的过滤器足以保证 AdGuard 的正常运行。 不过，如果用户想自定义广告拦截，可以使用其他 AdGuard 或第三方过滤器。 要管理广告拦截请选择某个类别并启用自己想要的过滤器。 要添加自定义过滤器，请点击「自定义过滤器」→「添加自定义过滤器」，然后输入 URL 或文件路径。

:::note

启动的过滤器数量过多，会导致一些网站无法正常运行。

:::

[了解有关过滤器的更多信息](https://adguard.com/zh_cn/blog/what-are-filters.html)

### 浏览器扩展

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### 网络

#### HTTPS 过滤

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

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. 如果需要，用户还可以启用「过滤带 EV 证书的网站」。

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

:::note

Please note that DNS filtering will still be active in _Automatic proxy_ routing mode, and your device may not be able to filter DNS requests from specific apps. In _VPN_ routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In _Automatic proxy_ mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## 许可证

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the activation code to activate your license
- Sign up to activate your 14-day trial period. The activation code can be used on different devices and platforms
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/android/settings/licensetab.png)

## 支持

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
