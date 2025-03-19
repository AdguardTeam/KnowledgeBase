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

「低级设置」部分适用于专家用户。 [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## 过滤

此部分允许用户管理 HTTPS 过滤设置、过滤器和用户脚本，以及设置代理服务器。

![Filtering \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### 过滤器

AdGuard 应用过滤器中的规则以阻止广告、跟踪器和其他干扰。 「保护」的大部分功能基于 [AdGuard 过滤器](/general/ad-filtering/adguard-filters/#adguard-filters)。 如果启用「基本保护」，它将自动打开 AdGuard 基础过滤器和 AdGuard 移动广告过滤器。 在关闭两个过滤器的情况下，「基本保护」也将被禁用。

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

默认启用的过滤器足以保证 AdGuard 的正常运行。 不过，如果用户想自定义广告拦截，可以使用其他 AdGuard 或第三方过滤器。 要管理广告拦截请选择某个类别并启用自己想要的过滤器。 要添加自定义过滤器，请点击「自定义过滤器」→「添加自定义过滤器」，然后输入 URL 或文件路径。

:::note

启动的过滤器数量过多，会导致一些网站无法正常运行。

:::

[了解有关过滤器的更多信息](https://adguard.com/zh_cn/blog/what-are-filters.html)

### 用户脚本

用户脚本是用 JavaScript 编写的迷你程序，用于扩展一个或多个网站的功能。 要安装用户脚本，需要一个特殊的用户脚本管理器。 AdGuard 有这样的功能，让用户通过 URL 或文件添加用户脚本。

![Userscripts \*mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra 是一个自定义用户脚本，可拦截复杂广告和将广告重新注入网站的机制。

#### 禁用 AMP

禁用 AMP 是一个用户脚本，用于禁用 Google 搜索结果页面上的[加速移动页面](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages)。

### 网络

#### HTTPS 过滤

要拦截大多数网站和应用程序中的广告和跟踪器，AdGuard 需要过滤 HTTPS 流量。 [了解有关 HTTPS 过滤的更多信息](/general/https-filtering/what-is-https-filtering)。

##### 安全证书

要管理加密的流量，AdGuard 在设备上安装 CA 证书。 这是安全的：流量在本地过滤，并且 AdGuard 验证连接的安全性。

在旧版本的 Android 系统上，证书会自动安装。 在 Android 11 及更高版本中，用户需要手动安装证书。 [安装说明](/adguard-for-android/solving-problems/manual-certificate/)

用户存储中的 CA 证书足以过滤浏览器和某些应用程序中的 HTTPS 流量。 不过，有些应用程序只信任系统存储中的证书。 要过滤 HTTPS 流量，需要将 AdGuard 的 CA 证书安装到系统存储中。 [说明](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### 进行 HTTPS 过滤的应用程序

本部分包含 AdGuard 过滤 HTTPS 流量的应用程序列表。 请注意，只有在用户存储和系统存储都有 CA 证书的情况下，才能对所有应用程序应用设置。

##### 进行 HTTPS 过滤的网站

此设置允许用户管理 AdGuard 应过滤 HTTPS 流量的网站。

HTTPS 过滤允许 AdGuard 过滤请求和响应的内容，但我们从不收集或存储这些数据。 不过，要提高安全性，我们[将包含潜在敏感信息的网站排除在 HTTPS 过滤之外](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data)。

用户还可以选择模式，将您认为必要的网站添加到排除项中：

- 将特定网站排除在 HTTPS 过滤之外
- 仅对添加到排除项的网站过滤 HTTPS 流量

默认情况下，我们无法过滤带有扩展验证 (EV) 证书的网站，如金融网站。 如果需要，用户还可以启用「过滤带 EV 证书的网站」。

#### 代理

用户可以设置 AdGuard 通过代理服务器路由所有设备的流量。 [设置出站代理的说明](/adguard-for-android/solving-problems/outbound-proxy)

如果您的 VPN 提供商允许，还可以设置第三方 VPN 与 AdGuard 一起工作。

在「通过代理运行的应用」下，用户可以选择通过指定代理传输流量的应用程序。 如果启用「与 AdGuard VPN 集成」，此设置将发挥 AdGuard VPN 应用程序排除的作用，允许用户指定通过 AdGuard VPN 隧道路由的应用程序。

#### 路由模式

本设置允许用户选择流量过滤方法。

- 「本地 VPN」通过本地创建的 VPN 过滤流量。 这是最可靠的模式。 由于 Android 的限制，这也是唯一一种可用于非 Root 设备的全系统流量过滤方法。

:::note

「本地 VPN」模式不允许 AdGuard 与其他 VPN 同时运行。 要在 AdGuard 工作时启用其他 VPN，需要将其重新配置为代理模式，并在 AdGuard 中设置出站代理。 在 AdGuard VPN 里，「[集成模式](/adguard-for-android/features/integration-with-vpn)」自动启动 。

:::

- 「自动代理」是一种无需使用 VPN 的替代流量路由选择方法。 一个显著的优点是它可以与 VPN 并行运作。 此模式需要 Root 访问权限。

- 「手动代理」在特定端口上设置代理服务器，然后在 Wi-Fi 设置中进行配置。 此模式需要 Android 10 及以上系统的 Root 访问权限。

## 许可证

在「许可证」中，可以找到有关许可证的信息并进行管理：

- 购买 AdGuard 许可证以激活[完整版功能](/adguard-for-android/features/free-vs-full)。
- 登录 AdGuard 账号或输入许可证密钥以激活许可证。
- 如果尚未使用许可证，请激活 7 天试用期。
- 通过三点菜单（⋮）刷新许可证状态。
- 打开 AdGuard 账号管理许可证。
- 重置许可证。在您已达到此许可证可绑定的设备数量限制，并希望申请另一个许可证的情况下。

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## 支持

如果用户对 AdGuard Android 版有任何问题或建议，请了解本部分。 我们建议在联系支持人员之前先查阅「[常见问题](https://adguard.com/support/adguard_for_android.html)」或本知识库。

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

如果您发现没有被拦截的广告，请通过「报告错误拦截」报告错误。

对于意外的应用程序行为，请选择「报告错误」。 如果可以的话，请详细描述遇到的问题并上载应用程序日志记录。 [描述问题的方法](/guides/report-bugs/#how-to-describe-a-problem)

如需提出建议，请使用「功能请求」。

:::note

GitHub 是报告错误和建议新功能的另一种方式。 [说明和软件源链接](/guides/report-bugs/#adguard-for-android)

:::
