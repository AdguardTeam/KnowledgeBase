---
title: 跟踪保护（原称隐身模式）
sidebar_position: 4
---

众多网站收集其访问者的信息，例如 IP 地址，安装的浏览器及操作系统，屏幕分辨率，甚至是重新定向访问者的页面。 有些网页使用 Cookie 以标记用户的浏览器并保存设置及首选项，或在用户下次访问时进行身份识别。 **跟踪保护**可以保护个人信息免受此类数据和统计收集系统的侵害。

用户可以按需调整跟踪防护设置。 例如，您可以阻止网站接收引导您访问的搜索引擎查询记录， 可以自动删除第三方和第一方 Cookie， 还可以关闭可能被用于追踪位置的浏览器地理位置共享功能。 此外，用户还能隐藏真实 IP 地址或将其替换为随机 IP。

以下我们详述控制**跟踪保护**设置的功能。 功能分为四组，包括**常规**、**跟踪方式**、**浏览器 API** 和**其他**。

:::note

由于操作系统或浏览器的限制，部分产品的某些功能可能不可用。

:::

## 常规 {#general}

### 拦截跟踪器 {#blocktrackers}

该功能通过 AdGuard 跟踪防护过滤器来拦截追踪器和网站分析工具。

### 从 URL 中删除跟踪参数 {#removetracking}

启用此功能后，AdGuard 将使用「AdGuard URL 跟踪」过滤器移除网页 URL 中的跟踪参数，例如 `utm_*` 和 `fb_ref`。

### 隐藏搜索查询 {#searchqueries}

该功能可以隐藏用户通过搜索引擎结果访问网站时的搜索查询内容。 例如，当您通过 Google 或 Yahoo 等搜索引擎打开某个网站时，此功能将隐藏您用于查找该网站的搜索关键词。

### 要求网站不跟踪 {#donottrack}

向您访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号.

### 其他隐私过滤器 {#otherprivacyfilters}

此功能可以显示已在「**过滤器**」中启用的其他隐私保护过滤器。

:::note

适用于 AdGuard Android 版和 Windows 版。

:::

## 跟踪方式 {#tracking-methods}

### 删除第三方 Cookie {#3p-cookie}

该功能通过限制第三方 Cookie 的生命周期，防止广告商跨页面追踪您的浏览行为。

网站使用 Cookie 存储用户的信息和首选项，如所选语言，位置或购物车上的列表。 当您再次访问某个网站时，浏览器会向该网站发送属于该网站的 Cookie，使其能够“记住”您的数据。

第三方 Cookie 是由非当前浏览网站所设置的 Cookie。 例如，cnn.com 首页可能包含 Facebook 的「点赞」组件。 该组件会植入一个可被 Facebook 后续读取的 Cookie。 部分广告商利用此类 Cookie 追踪用户访问过的其他含其广告的网站。

您可以设置时间期限（以分钟为单位），到期后所有第三方 Cookie 将被自动删除。 如需彻底阻止此类 Cookie，请将其生命周期设置为 0。

:::caution

此设置会删除所有第三方 Cookie，包括用户通过社交网络或其他第三方服务登录的信息。 您可能需要定期重新登录一些网站并面临其他与 Cookie 相关的问题。 要仅阻止跟踪 Cookie，请使用「[*AdGuard 跟踪保护过滤器*](/general/ad-filtering/filter-policy/#tracking-protection-filter)」。

:::

:::note

适用于 Android 版和 Windows 版 AdGuard、适用于 macOS 版 AdGuard 以及 AdGuard 浏览器扩展（基于 MV2 的浏览器）。

:::

### 删除第一方 Cookie（不推荐） {#1p-cookie}

该功能通过限制第一方 Cookie 的生命周期，防止网站记住您的个人数据（包括登录凭据和语言偏好设置）。

您可以设置时间期限（以分钟为单位），到期后所有 Cookie 将被自动删除。 如需彻底阻止此类 Cookie，请将其生命周期设置为 0。

:::caution

我们不推荐您开启此项，因为它可能会严重干扰某些网站的工作。 如果拦截这些 Cookie，某些网站可能会崩溃或停止运行。

:::

:::note

适用于 Android 版和 Windows 版 AdGuard、适用于 macOS 版 AdGuard 以及 AdGuard 浏览器扩展（基于 MV2 的浏览器）。

:::

### 拦截 ETag 和 If-None-Match 标头 {#3p-cache}

该功能从请求和响应中删除 ETag 和 If-None-Match 标头以防止被它们跟踪。

当浏览器寻址某个网页时，服务器会指派 ETag 给相应的网页。 此 ETag 是用于浏览器缓存网页内容。 在进行后续的请求时，浏览器会发送 ETag 给相应的服务器，从而让服务器知晓访问者的身份。 只要网站文件处于缓存状态，浏览器每次访问此网站时都会发送 ETag。 如此网站内嵌其它服务器的内容（如图像或 iframe），则服务器可在您不知情的情况下跟踪您的活动。

:::note

适用于 Android 版和 Windows 版 AdGuard，以及适用于 macOS 版 AdGuard。

:::

### 拦截第三方 Authorization 标头 {#3p-auth}

该功能会禁用可能被用于追踪的缓存授权数据。 注意：启用此功能可能会影响部分浏览器扩展和网站的正常使用。

浏览器会缓存「Authorization」标头值，并在每次向该域名发送请求时附带此信息。 这意味着它可能像 Cookie 一样被用于追踪目的。

:::note

适用于 Android 版和 Windows 版 AdGuard，以及适用于 macOS 版 AdGuard。

:::

## 浏览器 API {#browser-api}

:::note

AdGuard 浏览器扩展目前仅提供「**拦截 WebRTC**」功能。 您可以在「**其他**」中找到该选项。

:::

### 拦截 WebRTC {#webrtc}

该功能可以拦截可能导致真实 IP 地址泄露的 WebRTC 通信，即使您使用代理或 VPN 也不例外。

WebRTC（网页实时通信）是一项支持浏览器与应用程序间直接数据流传输的技术。 不过，该技术可能暴露用户的真实 IP 地址，即便在使用代理或 VPN 的情况下亦然。

:::caution

启用此选项可能会影响部分浏览器应用程序的正常运行，例如即时通讯软件、流媒体平台、在线聊天室或网页游戏。

:::

### 拦截 Push API {#push}

此功能拦截来自网站的推送通知。

Push API 允许服务器向网络应用推送消息，无论您的浏览器是否处于活动状态。 这意味着即使浏览器处于最小化或关闭状态，您仍可能收到各类网站的通知。 启用此选项可以彻底屏蔽浏览器的 Push API 功能。

### 拦截 Location API {#location}

该功能可以阻止网站检测用户的地理位置。

启用此选项将防止浏览器发送可能被用于确定个人的位置、修改搜索结果或以其他方式影响网络浏览体验的 GPS 数据。

### 拦截 Flash {#flash}

该功能拦截浏览器中的 Flash Player 支持以增强保护并加快网站加载速度。

Flash Player 插件已日益容易遭受病毒和黑客等网络威胁的攻击，同时可能显著增加网站加载时间。 启用此设置后，AdGuard 将阻止浏览器检测支持 Flash 内容显示的组件（例如插件和 ActiveXObject 对象）。 这实际上意味着浏览器将无法支持 Flash。

### 拦截 Java {#java}

该功能会禁用网站及网络服务中的 Java 插件，因为该 API 存在严重安全隐患。 此操作不会禁用 JavaScript。

有些网站和 Web 服务仍然使用旧技术支持 Java 插件。 Java 插件 API 是 Java 插件的基础，存在严重的安全漏洞。 为安全起见，用户可以禁用此类插件。 不过，即便您选择启用「拦截 Java」选项，JavaScript 功能仍将保持启用状态。

## Windows 跟踪 {#windowstracking}

:::note

这些功能仅在 Windows 版 AdGuard 中可用。

:::

### 禁用 Windows 遥测 {#windowstelemetry}

此功能将禁止发送有关您系统及应用使用情况的技术数据。

### 禁用 Windows Recall {#windowsrecall}

此功能阻止 Windows 对桌面活动进行截图分析。

### 关闭广告 ID {#advertisingid}

此功能通过禁用广告 ID 来阻止对您应用使用情况的追踪。

### 禁用 Microsoft Defender 自动报告 {#windowsautoreport}

此功能将拦截可疑软件的自动报告及采样行为。

### 禁用 WAP 推送消息路由服务 {#wappushrouting}

此功能将停止收集有关 Windows 组件问题的数据。

## 其它 {#miscellaneous}

### 隐藏第三方 Referer {#referer}

此功能防止第三方知道用户访问的网站。

Referrer 是浏览器发送请求到服务器时所用的 HTTP 头部。 其包含请求源的 URL。 当您在各网页间导航时，Referer 会保存初始页的 URL。 托管目标网页的服务器通常具备解析 Referer 的软件，并从中提取各种信息。 启用「*隐藏第三方 Referer*」设置后，将通过修改 HTTP 标头的方式，向第三方网站隐藏您当前访问的网站信息。

您也可以在「*自定义 Referer*」字段输入任意值以设置 Referer。 要使用默认 Referer，置空此字段即可。

需要注意的是，为了实现流量过滤功能，AdGuard 应用程序会拦截浏览器与服务器之间的通信请求。 向广告、追踪及钓鱼服务器的请求可能会在发送至目标服务器前被修改，或遭到完全拦截。 「*隐藏第三方 Referer*」也是如此：AdGuard 拦截 HTTP(S) 请求，在启用该选项后软件删除或更改 Referer 标头。 不过，只有在这些请求“离开”浏览器后软件才开始拦截。 这意味着如果您在浏览器内部监控 Referer（例如使用 Chrome 开发者工具），您看到的仍是原始 Referer 值，因为该请求尚未经过 AdGuard 处理。 您可以使用 [Fiddler](https://www.telerik.com/fiddler) 等软件来确保 Referer 被正确更改。

由于所有浏览器扩展的性质，AdGuard 浏览器扩展在浏览器内部运行。 AdGuard 会在请求发出的瞬间立即修改 Referer 值，因此开发者工具将显示您期望的 Referer 请求头信息。

### 隐藏 User-Agent {#useragent}

该功能移除 User-Agent 头部的识别信息。

当您访问网站时，浏览器会发送其信息给服务器。 其如一行文本，是以「User-Agent:」为开头作为 HTTP 请求的一部分。 其通常包括浏览器的名称和版本，以及操作系统和语言设置。 我们会从识别信息中移除 User-Agent 字段，以防止广告商获取该数据。

用户还可以通过在「自定义 User-Agent」字段中输入任意值来设定特定的 User-Agent 信息。 要使用默认 User-Agent，置空此字段即可。

:::note

适用于 Android 版和 Windows 版 AdGuard，以及适用于 macOS 版 AdGuard。

:::

### 隐藏 IP 地址 {#ip}

该功能会诱使网站误认为您是通过指定 IP 地址访问的代理服务器。

跟踪保护无法隐藏您的 IP 地址。 不过，该设置可以帮用户伪装地址，让您访问的网站认为您是一个代理。 有时这会有帮助，网站将忽略用户的真实 IP 地址。

用户只需在相应字段中输入任意 IP 地址，即可让他人将该地址识别为您的真实 IP。 要使用默认 IP 地址，置空此字段即可。

:::note

适用于 Android 版和 Windows 版 AdGuard，以及适用于 macOS 版 AdGuard。

:::

### 删除 X-Client-Data 标头 {#xclientdata}

该功能会阻止 Google Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送其版本及修改信息。

:::note

适用于 Android 版和 Windows 版 AdGuard、适用于 macOS 版 AdGuard 以及 AdGuard 浏览器扩展（基于 Chromium 的浏览器）。

:::

### 保护免受 DPI 影响 {#dpi}

该功能会对您的出站流量进行修改，使互联网服务提供商（ISP）的深度数据包检测（DPI）系统无法识别您访问的网站。 但请注意，我们无法保证对所有 DPI 系统都能提供完全防护。

深度数据包检测（英语：Deep Packet Inspection，缩写成 DPI）是一种按数据包内容对流量进行深度分析和过滤以及统计数据积累的系统。 利用这项技术，互联网服务提供商能够控制流量传输及限制客户访问内容。

AdGuard 可以修改传出数据包，使客户端不受 DPI 拦截标准限制。 这意味着通过启用此选项，用户可以访问他们想要的内容。 目前还不能绕过所有 DPI 系统，但我们不断努力改进。

:::note

适用于 Android 版和 Windows 版 AdGuard，以及适用于 macOS 版 AdGuard。

:::

:::caution

如果在 Windows 版 AdGuard 中启用此功能，可能会干扰 ESET 防病毒软件。 Anti-DPI 将阻止 ESET 过滤流量，从而使黑名单和恶意网站不受阻止。

:::
