---
title: Safari 扩展
sidebar_position: 3
---

![扩展标签](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari 扩展是一种实现内容拦截器的机制，内容拦截器是过滤器的主题集合。 例如，与隐私相关的过滤器包含在内容拦截器中，其相应名称为「AdGuard 隐私」。

设计内容拦截器有两个原因：结构过滤器和符合 Apple 公司的限制。

[2019年](https://adguard.com/en/blog/adguard-safari-1-5.html)，Apple 对 Safari 浏览器的广告拦截器设置了限制，只允许它们同时使用5万个过滤规则。 由于这个数量不足以让一个广告拦截器提供良好的过滤质量（仅 AdGuard 基础过滤器就有 30,000 个过滤规则），我们将 AdGuard Safari 版分成六个内容拦截器，每个拦截器包含多达 50,000 个规则。

[2022年](https://adguard.com/en/blog/adguard-for-safari-1-11.html)，Apple 将每个内容拦截器的过滤规则数量限制提高到同时应用15万个规则。 关于 Mac 版 AdGuard Mini，六种内容拦截器最多可以启用 900,000 个规则。

虽然数量限制提高了，但内容拦截器的结构却保持不变。

在「Safari 扩展」中，用户可以查看哪些内容拦截器已启用、每个拦截器使用了多少条规则，以及哪些过滤器正在运行。

:::tip

用户可以在「设置」→「过滤器」中管理已启用的过滤器。 在「Safari 扩展」中，用户只能看到已启用的过滤器列表和已启用的规则数量。

:::

## AdGuard Mini 的 Safari 扩展列表

### AdGuard 常用

「AdGuard 常规」是一款内容拦截器，结合最基本的拦截广告过滤器。 我们建议始终启用「AdGuard 基础过滤器」。

### AdGuard 隐私

「AdGuard 基础过滤器」内容拦截器是对抗计数器和其他网络分析工具的主要工具。 「AdGuard 防跟踪保护过滤器」 默认已启用。

### AdGuard 社交

「AdGuard 社交」包含针对社交媒体按钮、小工具、脚本和图标的过滤器。 本部分还包含其他恼人元素过滤器：用于拦截弹窗、横幅、Cookie 通知等。 要启用它们，请在「设置」→「过滤器」中找到「社交插件」。

### AdGuard 安全

该内容拦截器整合了多个与安全相关的过滤器。 「Malware Domains Blocklist」阻止因传播恶意软件和间谍软件而臭名昭著的域名。 「Spam404」保护用户免受网络欺诈。 「NoCoin Filter List」干扰基于浏览器的加密货币，如 Coinhive。

### AdGuard 其它

「AdGuard 其他」包含具有各种功能的过滤器。 例如，它有一个过滤器，可以解除对搜索广告和自我推销广告的屏蔽。 在某些情况下，该过滤器有助于准确找到用户正在寻找的内容，因为这些广告比其他类型的广告更相关，干扰性更小。

:::note 免责声明

我们没有任何由广告商付费的“可接受广告”。 我们为用户提供查看[搜索广告和网站自我宣传](/general/ad-filtering/search-ads)的选项。

:::

### AdGuard 自定义

![创建自定义过滤器](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

如果需要更多过滤器，可以将其添加到「AdGuard 自定义」扩展中。

要添加自定义过滤器，请转到「设置」→「过滤器」→「自定义过滤器」，并在相关字段中输入 URL 或本地文件路径。 用户可以在「filterlists.com](https://filterlists.com」上查看新的过滤器。
