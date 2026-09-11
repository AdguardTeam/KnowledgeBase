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

![常规 \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

用户可在「应用和过滤器更新」下配置自动更新过滤器，以及选择应用更新通道。 选择「稳定版」可试用正式发布版本，选择「测试版」或「Nightly」可提前使用最新功能。

![更新 \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 高级设置

「自动化」让用户通过任务程序管理 AdGuard。

「看门狗功能」可帮助用户保护 AdGuard 免于被系统禁用（[阅读有关 Android 省电模式的更多信息](/adguard-for-android/solving-problems/background-work/)）。 您输入的数值将是看门狗检查的间隔时间（以秒为单位）。

「日志级别」定义应记录哪些有关应用程序运行的数据。 默认情况下，应用程序会收集有关其事件的数据。 「调试」级别记录更多事件，有时 AdGuard 团队要求启用调试级别，因为它们可以帮助支持团队更好地了解问题原因。 [了解有关收集和发送日志的更多信息](/adguard-for-android/solving-problems/log/)。

![进阶设置 \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

「低级设置」部分适用于专家用户。 [了解有关低级设置的更多信息](/adguard-for-android/features/low-level-settings/)

![低级设置 \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## 过滤

此部分让用户管理过滤器、扩展、网络设置、将网站添加到允许列表以及创建用户规则。

[了解如何创建自己的用户规则](/general/ad-filtering/create-own-filters)

![过滤 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.png)

### 过滤器

AdGuard 通过应用过滤器中的规则来拦截广告、跟踪器和干扰内容。 「保护」板块的大多数功能均由 [AdGuard 过滤器](/general/ad-filtering/adguard-filters/#adguard-filters)驱动。 如果启用「基本保护」，将自动开启 AdGuard 基础过滤器和 AdGuard 移动广告过滤器。 反之亦然：如果关闭这两个过滤器，「基本保护」也将被停用。

![过滤器 \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

默认启用的过滤器足以满足 AdGuard 的正常运行。 不过，如果想自定义广告拦截，可以使用其他 AdGuard 或第三方过滤器。 为此，请选择一个类别并启用所需的过滤器。 要添加自定义过滤器，请点击「自定义过滤器」→「添加自定义过滤器」并输入其 URL 或文件路径。

:::note

如果启用的过滤器过多，部分网站可能无法正常工作。

:::

[阅读更多关于过滤器的信息](https://adguard.com/zh_cn/blog/what-are-filters.html)

### 浏览器扩展

扩展允许您添加用户脚本和用户样式。

![扩展程序 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

用户脚本是用 JavaScript 编写的小程序，用于扩展一个或多个网站的功能。 要安装用户脚本，需要一个专门的用户脚本管理器。 AdGuard 内置了此功能，支持通过 URL 或从文件添加用户脚本。

用户样式与用户脚本类似，可以在不修改网页内容的情况下改变网页在浏览器中的外观。 其原理是向网站现有样式添加 CSS 样式。 例如，如果某个网站没有深色主题，而您想要一个，就可以使用用户样式来实现。

要添加用户样式，请前往「设置」→「过滤」→「扩展」→「添加扩展」→「从文件或 URL 导入」。 [网上](https://userstyles.world/)可以找到现成的用户样式。

要创建自己的样式，请点击「添加扩展」→「创建用户样式」。

#### AdGuard Extra

AdGuard Extra 是一款自定义用户脚本，可拦截复杂广告以及将广告重新注入网站的机制。

#### 关闭 AMP

关闭 AMP 是一款用户脚本，可在 Google 搜索结果页面上关闭[加速移动页面](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages)。

### 网络

#### HTTPS 过滤

要在大多数网站和大多数应用中拦截广告和跟踪器，AdGuard 需要过滤其 HTTPS 流量。 [阅读更多关于 HTTPS 过滤的信息](/general/https-filtering/what-is-https-filtering)。

##### 安全证书

为管理加密流量，AdGuard 会在您的设备上安装其 CA 证书。 这是安全的：流量在本地过滤，AdGuard 会验证连接的安全性。

在较旧版本的 Android 上，证书会自动安装。 在 Android 11 及更高版本上，则需要手动安装。 [安装说明](/adguard-for-android/solving-problems/manual-certificate/)

用户存储中的 CA 证书足以过滤浏览器和部分应用中的 HTTPS 流量。 但是，有些应用仅信任系统存储中的证书。 要过滤这些应用中的 HTTPS 流量，需要将 AdGuard 的 CA 证书安装到系统存储中。 [说明](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### 进行 HTTPS 过滤的应用

此部分包含 AdGuard 过滤其 HTTPS 流量的应用列表。 请注意，只有同时在用户存储和系统存储中都安装 CA 证书，此设置才能应用于所有应用。

##### 进行 HTTPS 过滤的网站

此设置允许用户管理 AdGuard 应对哪些网站过滤 HTTPS 流量。

HTTPS 过滤允许 AdGuard 过滤请求和响应的内容，但我们绝不会收集或存储这些数据。 不过，为了提高安全性，我们会[将可能包含敏感信息的网站从 HTTPS 过滤中排除](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data)。

您还可以通过选择以下模式之一，将您认为必要的网站添加到排除项：

- 从 HTTPS 过滤中排除特定网站
- 仅对添加到排除项的网站过滤 HTTPS 流量

默认情况下，我们也不会过滤具有扩展验证 (EV) 证书的网站，例如金融网站。 如有需要，可以启用「过滤具有 EV 证书的网站」选项。

#### 代理

用户可以将 AdGuard 设置为通过代理服务器路由设备的所有流量。 [如何设置出站代理](/adguard-for-android/solving-problems/outbound-proxy)

在此板块中，如果 VPN 提供商允许，您还可以设置第三方 VPN 与 AdGuard 协同工作。

在「通过代理运行的应用」下，您可以选择哪些应用通过您指定的代理路由流量。 如果启用了「与 AdGuard VPN 的集成」，此设置相当于 AdGuard VPN 的应用排除功能：它允许您指定哪些应用通过 AdGuard VPN 隧道路由。

#### 路由模式

此板块允许用户选择流量过滤方式。

- **本地 VPN** 通过本地创建的 VPN 过滤流量。 这是最可靠的方式。 由于 Android 的限制，它也是非 Root 设备上唯一可用的系统级流量过滤方式。

:::note

「本地 VPN」模式不允许 AdGuard 与其他 VPN 同时使用。 要将其他 VPN 与 AdGuard 一起使用，您需要将其重新配置为代理模式工作，并在 AdGuard 中设置出站代理。 对于 AdGuard VPN，这通过[**集成模式**](/adguard-for-android/features/integration-with-vpn)自动完成。

:::

- **自动代理**是一种不需要使用 VPN 的替代流量路由方式。 一个显著优势是它可以与 VPN 并行运行。 此模式需要 Root 权限。

:::note

请注意，在「自动代理路由」模式下，DNS 过滤仍将生效，但您的设备可能无法过滤来自特定应用的 DNS 请求。 在「VPN」路由模式下，应用由系统手段从本地 VPN 中排除。 因此，系统解析器知道哪些应用包含在 VPN 中，哪些没有。 它要么让它们进入本地 VPN，要么让它们绕过 VPN。 然而，DNS 请求来自系统解析器，而非应用程序。 在「自动代理」模式下，只能排除应用的流量，而不能排除其 DNS 查询，因为 AdGuard 将其视为系统查询。

:::

- **手动代理** 涉及在特定端口上设置代理服务器，然后在 Wi-Fi 设置中进行配置。 此模式在 Android 10 及以上版本需要 Root 权限。

## 许可证

在此板块中，您可以找到有关您的许可证的信息并对其进行管理：

- 购买 AdGuard 许可证以激活[完整版功能](/adguard-for-android/features/free-vs-full)。
- 登录 AdGuard 账号或输入激活码以激活许可证。
- 注册以激活 14 天试用期。 激活码可用于不同设备和平台。
- 通过三点菜单 (⋮) 刷新许可证状态。
- 打开 AdGuard 账号以在其中管理许可证。
- 重置许可证：例如，如果此许可证的设备数量已达上限，而您想应用另一个许可证。

![许可证页面 \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## 支持

如果您对 AdGuard Android 版有任何疑问或建议，请使用此板块。 在联系支持团队之前，建议先查阅[常见问题](https://adguard.com/support/adguard_for_android.html)或本知识库。

![支持 \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

如果您发现遗漏的广告，请通过「报告错误的拦截」进行反馈。

如遇应用异常行为，请选择「报告错误」。 如有可能，请详细描述问题并附上应用日志。 [如何描述问题](/guides/report-bugs/#how-to-describe-a-problem)

如需提出建议，请使用「请求新功能」。

:::note

GitHub 是报告错误和提出新功能建议的另一种方式。 [说明和仓库链接](/guides/report-bugs/#adguard-for-android)

:::
