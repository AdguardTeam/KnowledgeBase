---
title: Safari 扩展
sidebar_position: 3
---

:::info

这篇文章是关于 Safari 版的 AdGuard，用于保护用户的 Safari 浏览器。 如果需要保护整个设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

## 什么是 Safari 扩展

Safari 扩展是为 Safari 浏览器添加功能的小型软件程序。 它们允许用户添加浏览器未内置的功能以定制和增强浏览体验。 Safari 版 AdGuard 主要使用扩展功能对通过 Safari 打开的网站应用过滤规则。

## 工作原理

AdGuard 使用过滤规则阻止网站上的广告、跟踪器和其他骚扰。 AdGuard 的规则和用户的自定义过滤器会转换为 Safari 可以“理解”的规则，并集成到六个 Safari 扩展中：

- AdGuard 常用
- AdGuard 隐私
- AdGuard 社交
- AdGuard 安全
- AdGuard 其它

每个内容拦截扩展最多可包含 150,000 个启动的过滤规则。 大多数过滤组内的规则数量不超过 15 万个。 不过，如果启动太多特定语言或自定义过滤器，可能会超出限制。 在这种情况下，超过限制的随机规则将被自动禁用，这可能会导致拦截错误。 **我们强烈建议只启动所需要的过滤器**。

还有一个扩展：*AdGuard Safari 版*，它将 AdGuard 图标添加到 Safari 中的搜索栏旁边，并允许用户使用高级规则来拦截复杂的广告。

![Safari 扩展](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

下面我们详细介绍每个扩展。

## 内容拦截扩展

「*AdGuard 常用*」应用过滤器中的规则，要启动这些规则请前往「*过滤器*」→「*广告拦截*」和「*过滤器*」→「*特定语言*」。 该扩展专注于全面广告拦截，包括特定语言的广告过滤器。

用户可以在「*过滤器*」→「*隐私*」中启用「*AdGuard 隐私*」的过滤器规则。 它可以阻止跟踪机制，确保用户的浏览活动保持私密。

用户可在「*过滤器*」→「*社交工具*」和「*过滤器*」→「*烦人元素*中启动「*AdGuard 社交* 」过滤器规则。 它能拦截弹出窗口、社交媒体按钮、在线助手窗口以及网页上其他用户可能会觉得烦人的元素。

用户可以在「*过滤器*」→「*安全*」中启用「*AdGuard 安全*」的过滤器规则。 该扩展可识别并阻止潜在的有害元素，保护用户免受恶意内容的侵害。

「*AdGuard 其他*」应用不属于上述类别的过滤器规则。要启动「AdGuard 其他」 前往「*过滤器*」→「*其他*」：「*解除搜索广告和自我推销过滤器*」、「*AdGuard DNS 过滤器*」，以及「*AdGuard 实验性过滤器*」。

*AdGuard 自定义* 应用用户自己添加到「*自定义过滤器*」的规则。

每个扩展都包含用户规则和白名单规则。

## AdGuard Safari版

*AdGuard for Safari activates the AdGuard icon next to the search bar. It's useful if you want to quickly set up protection for a specific website or block ads manually. It also contains advanced rules that aren't converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## 如何管理 Safari 扩展程序

1. 打开 Safari，单击屏幕左上角的「*Safari*」展开菜单。

    ![Safari 设置 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Click *Settings...*

1. 选择「*扩展*」

    ![扩展标签](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## 为什么 Safari 版 AdGuard 需要权限

启用「*AdGuard Safari 版*」扩展时，用户可能会注意到它需要「**访问网页内容**」和「**访问浏览历史**」的权限。 下面是需要这些权限的原因：

- 访问网页内容，允许手动广告拦截和高级拦截规则正常工作。
- 访问浏览历史记录，允许扩展检查网站的保护状态，并确定应应用哪些高级规则。

我们不会将这些数据用于任何其他目的或与任何人共享。 如需了解更多信息，请查看我们的[隐私政策](https://adguard.com/privacy.html)。
