---
title: 其他功能
sidebar_position: 4
---

:::info

这篇文章是关于 AdGuard 浏览器扩展，它只能保护用户的浏览器。 要全面保护设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

除了 AdGuard 浏览器扩展的大型关键模块之外，用户还可以在扩展设置的「常规」和「附加设置」选项卡中配置一些更具体的功能。

## 常规 {#general}

在「常规」选项卡中，用户可以允许搜索广告和网站的[自我推广](/general/ad-filtering/search-ads)，启用自动激活特定语言过滤器的，指明过滤器更新间隔等。

![常规 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

此外，还可以启用[「钓鱼和恶意保护」](/general/browsing-security)。

您可以单击「导出设置」来保存设置配置。 设置将保存为 .json 文件。 要导入以前保存的设置配置，请使用「导入设置」功能。 用户还可以使用该功能在不同的设置配置文件之间快速切换，甚至可以在不同的浏览器之间传输设置配置。

## 附加设置 {#misc}

「附加设置」部分包含一系列与广告拦截过程和应用程序可用性有关的各种设置。

![Additional settings \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/additional-settings.png)

From this tab, you can invert the allowlist and add the AdGuard item to the browser’s context menu. You can also enable the display of the number of blocked ads on the AdGuard icon and notifications about extension updates. Additionally, this section lets you enable notifications about the AdGuard app, open the _Filtering log_, clear the statistics of blocked ads and trackers, or reset the settings.

此外，用户可以选择发送应用规则的统计数据以帮助我们开发过滤器：触发哪些规则、在哪些网站上触发以及触发频率。 该选项默认为禁用，因为我们不会在未经同意的情况下收集用户数据。 但是，如果启用该功能，所有数据都将匿名发送。

You can also choose to help us improve the extension by sending us anonymized usage data. This includes the names of the screens you interact with, the names of the buttons you click, and session identifiers. These insights help us understand where users run into friction, refine the experience, and make the extension faster and easier to use. The _Send anonymized usage data_ option is disabled by default. If you enable it, all data will be strictly anonymized and used only internally. It will never be shared with third parties.

:::note

The _Send anonymized usage data_ option can also be enabled on the post-installation page in Chromium-based browsers.

:::

## About {#about}

In the _About_ section, you can find info about the current version, links to the EULA and Privacy policy, and to the repository of the Browser extension on GitHub.

![About \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)
