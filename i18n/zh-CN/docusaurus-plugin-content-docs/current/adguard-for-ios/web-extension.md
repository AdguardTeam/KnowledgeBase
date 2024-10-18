---
title: Safari Web 扩展
sidebar_position: 3
---

Web 扩展在 Safari 添加自定义功能。 有关 Web 扩展的更多信息，[请点击此处](https://developer.apple.com/documentation/safariservices/safari_web_extensions)。

![Web 扩展在 Safari 中的外观 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuard Safari Web 扩展是一款让用户利用 iOS 15 新功能的工具。 它增强 iOS 版 AdGuard 的功能。 安装扩展后，AdGuard 可以应用高级过滤规则并拦截更多广告。

## 工作原理

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

AdGuard Safari Web 扩展应用这些过滤规则增加 iOS 版 AdGuard 能力。

此外，AdGuard Safari Web 扩展让用户在浏览器快速管理 iOS 版 AdGuard。 点击「*扩展*」按钮，这是一个带拼图图标的按钮，根据设备类型，它可能位于地址栏的左侧或右侧。 在列表中点击「**AdGuard**」。

![Web 扩展菜单 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

用户将看到以下列表：

- **启用/禁用网站保护**。 关闭开关将禁用 AdGuard 在当前网站工作，同时自动添加相应的排除规则。 重新打开开关将恢复对网站的保护并删除规则。 这一变更可能需要一段时间才能生效。

- **手动屏蔽页面上的元素**。 点击「*屏蔽此页面上的元素*」按钮，阻止元素。 在页面上选择要隐藏的元素，调整选择，检查结果预览并确认删除。 相应的过滤规则会添加到 AdGuard 中（随后可以禁用或删除该规则以撤销更改）。

- **报告问题**。 向上滑动即可看到「*报告问题*」按钮。 使用此功能可以报告当前页面上漏掉的广告或其他问题。

## 如何启用 AdGuard Safari Web 扩展

:::note

AdGuard Safari Web 扩展需要访问网页内容才能运行，但不会将此访问权限用于广告拦截以外的任何目的。

:::

### iOS 设置

Web 扩展不是独立工具，需要 iOS 版 AdGuard。 如果设备上未安装 iOS 版 AdGuard，用户必须首先[安装](../installation)它并完成初始设置。

完成后，打开*「设置」→「Safari」→「扩展」*。

![选择 "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![选择 "扩展" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

前往「**允许这些扩展**」部分，然后在可用扩展列表中找到「**AdGuard**」。

![在「允许这些扩展」部分中选择 "AdGuard" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

点击它，然后切换开关。 确保同一屏幕底部的「*所有网站*」设置为「*允许*」或「*询问*」。 选择「*允许*」，无需在每次访问新网站时授予权限。 如果要按站点授予权限，请选择「*询问*」。

![扩展设置 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### Safari 浏览器

You can also enable the AdGuard extension from the Safari browser. To do it, tap *Extensions* (if you don't see it next to the address bar, tap the `aA` icon).

![在 Safari 中点击「大小」图标 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

打开「*管理扩展*」部分。 打开「**AdGuard**」。

![扩展 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![扩展 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

使用这种方法，可能仍需要进入 Safari 设置，并向 AdGuard 扩展授予必要的权限。

现在，用户应该能在可用的 Web 扩展中看到 AdGuard。 点击它，然后点击黄色的「**i**」图标。 点击「*打开*」并确认操作以启用「**高级保护**」。

:::note

「**高级保护**」仅在 AdGuard 高级版中可用。

:::

或者，用户可以在应用程序中启用「**高级保护**」，在「**保护**」选项卡（底部图标行左数第二个图标）。

AdGuard Safari Web 扩展仅适用于 iOS 15 及更高版本。
