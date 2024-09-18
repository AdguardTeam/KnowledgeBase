---
title: 隐身模式
sidebar_position: 4
---

众多网站收集其访问者的信息，例如 IP 地址，安装的浏览器及操作系统，屏幕分辨率，甚至是重新定向访问者的页面。 有些网页使用 Cookie 以标记用户的浏览器并保存个人设置及首选项，或在用户下次访问时进行身份识别。 隐身模式可保护个人信息免受此类数据和统计收集系统的侵害。

您可以灵活调整隐身模式的工作：例如，可以禁止网站接收您在互联网上查找其时使用的搜索请求，自动删除第三方和网站自己的 Cookie，关闭可用于跟踪您行踪的浏览器地理位置共享，以及隐藏真实 IP 地址，甚至用任意 IP 地址取而代之。

以下我们详述控制**隐身模式**设置的主功能和选项。 他们分为四组：**常规**、**跟踪方式**、**浏览器 API** 和**其他**。

:::note

由于操作系统或其它限制，部分产品的某些选项可能不可用。

:::

## 常规 {#general}

### 隐藏搜索查询 {#searchqueries}

当用户从 Google、Yahoo 或任何其它搜索引擎定向到某个网站时，该设置隐藏您用于查找相应网站的搜索查询。

### 要求网站不进行跟踪 {#donottrack}

向用户访问的网站发送[全球隐私控制](https://globalprivacycontrol.org/#gpc-spec)与[请勿跟踪](https://en.wikipedia.org/wiki/Do_Not_Track)信号。

### 剥离 URL 内的跟踪参数

开启此功能后，AdGuard 将从网页的 URL 内剥离跟踪参数，如 `utm_*` 和 ` fb_ref`。

### 跟踪方式 {#tracking-methods}

### 自销毁第三方 Cookie {#3p-cookie}

网站使用 Cookie 存储用户的信息和首选项，如所选语言，地理位置或购物车上的物品清单。 当您回到网站时，浏览器会回送所属网站的 Cookie，允许其“记住”您的数据。

第三方 Cookie 由用户当前所在网站以外的其他网站设置。 例如，cnn.com 主页上可能有一个 Facebook「赞」小部件。 此小工具将执行 Cookie，Facebook 可能会在稍后读取它。 某些广告商使用此类 Cookie 跟踪用户访问的被托管广告的网站。

以分钟为单位设置销毁所有第三方 Cookie 的时间段。 设置计时器为 0 以完全阻止它们。

:::caution

此设置会删除所有第三方 Сookie，包括用户通过社交网络或其他第三方服务登录的信息。 您可能需要定期重新登录一些网站并面临其他与 Cookie 相关的问题。 要仅阻止跟踪 Cookie，请使用「[*AdGuard 跟踪保护过滤器*](/general/ad-filtering/filter-policy/#tracking-protection-filter)」。

:::

### 自销毁第一方 Cookie {#1p-cookie}

以分钟为单位设置销毁所有 Cookie 的时间段。 设置计时器为 0 以完全阻止它们。

:::caution

我们不推荐您开启此项，因为它可能会严重干扰某些网站的工作。

:::

### 禁用缓存第三方请求 {#3p-cache}

当浏览器寻址某个网页时，服务器会指派 ETag 给相应的网页。 此 ETag 是用于浏览器缓存网页内容。 在进行后续的请求时，浏览器会发送 ETag 给相应的服务器，从而让服务器知晓访问者的身份。 只要网站文件处于缓存状态，浏览器每次访问此网站时都会发送 ETag。 如此网站内嵌其它服务器的内容（如图像或 iframe），则服务器可在您不知情的情况下跟踪您的活动。

### 拦截第三方授权头部 {#3p-auth}

“Authorization”（授权）头部值由浏览器缓存，然后与每个请求一起发送到相应的域。 这意味着它可以如 Cookie 一般用于跟踪目的。

## 浏览器 API {#browser-api}

### 拦截 WebRTC {#webrtc}

WebRTC（网络实时通信）是一种允许在浏览器和应用程序之间直接传输数据流的技术。 其允许其他人知晓您的实际 IP，即使您使用代理或 VPN。 开启此项可能会干扰某些浏览器应用的工作，如通信工具、电影或游戏。

### 拦截推送 API {#push}

无论浏览器是否活动，推送 API 都能让服务器发送讯息给网络应用。 因此，用户可能看到源自各网站的通知，甚至是在您浏览器隐藏到托盘或未启动的情况下。 开启此项以完全阻止浏览器的推送 API。

### 拦截定位 API {#location}

启用此选项将阻止浏览器发送可用于确定用户的位置、修改搜索结果或以其他方式影响用户的网络体验的 GPS 数据。

### 拦截 Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. 启用此设置后，AdGuard 将阻止浏览器检测允许 Flash 显示内容的组件（例如插件和 ActiveXObject 对象）。 这实际上意味着浏览器无法支持 Flash。

### 拦截 Java {#java}

有些网站和 Web 服务仍然使用旧技术支持 Java 插件。 Java 插件 API 是 Java 插件的基础，存在严重的安全漏洞。 为安全起见，用户可以禁用此类插件。 尽管如此，即使用户决定使用「阻止 Java」选项，JavaScript 仍将启用。

## 其它 {#miscellaneous}

### 隐藏第三方 Referer {#referer}

Referrer 是浏览器发送请求到服务器时所用的 HTTP 头部。 其包含请求源的 URL。 当您在各网页间导航时，Referer 会保存初始页的 URL。 托管目标网页的服务器通常具备解析 Referrer 的软件，并从中提取各种信息。 开启「*隐藏第三方 Referrer*」选项后，通过更改 HTTP 头部使第三方网站不可视当前网站。

您也可在 *Referer* 字段输入任意值以设置 Referer。 要使用默认 Referer，置空此字段即可。

请注意，要过滤流量，AdGuard 应用会“劫持”浏览器到服务器的请求。 对广告，跟踪和钓鱼网站的请求可在发送其请求到服务器之前更改或完全拦截。 「*隐藏第三方 Referer*」也是如此：AdGuard 拦截 HTTP(S) 请求，在启用该选项后软件删除或更改 Referer 标头。 但是，只有在这些请求“离开”浏览器后软件才开始拦截。 这意味着，如果在浏览器内监视 Referer（例如，借助 Chrome 浏览器的开发者工具），用户将看到原来的 Referer，因为请求尚未到达 AdGuard。 您可以使用 [Fiddler](https://www.telerik.com/fiddler) 等软件来确保 Referer 被正确更改。

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. 它将立即更改 Referer，因此开发工具将为用户的请求显示所需的 Referer。

### 隐藏 User-Agent {#useragent}

当您访问网站时，浏览器会发送其信息给服务器。 其如一行文本，是以 "User-Agent:" 为开头作为 HTTP 请求的一部分。 其通常包括浏览器的名称和版本，以及操作系统和语言设置。 我们移除身份识别信息内的 User-Agent，以使广告商无法获取它。

您也可在自定义 User-Agent 字段输入任意值以设置 User-Agent。 要使用默认 User-Agent，置空此字段即可。

### 隐藏 IP 地址 {#ip}

隐身模式无法隐藏 IP 地址。 但该设置可以帮用户伪装地址，让您访问的网站认为您是一个代理。 有时这会有帮助，网站将忽略用户的真实 IP 地址。

用户可以设置任意 IP 地址，只需将其输入到相应的字段中即可，让其他人将其视为您的 IP 地址。 要使用默认 IP 地址，置空此字段即可。

### 移除 HTTP 请求中的 X-Client-Data 头部 {#xclientdata}

禁止 Google Chrome 向 Google 域（包括 Double Click 和 Google Analytics）发送包含版本和修改信息的请求。

### 保护免受 DPI 影响 {#dpi}

深度数据包检测（英语：Deep Packet Inspection，缩写成 DPI）是一种按数据包内容对流量进行深度分析和过滤以及统计数据积累的系统。 利用这项技术，互联网服务提供商能够控制流量传输及限制客户访问内容。

AdGuard 可以修改传出数据包，使客户端不受 DPI 拦截标准限制。 这意味着通过启用此选项，用户可以访问他们想要的内容。 目前还不能绕过所有 DPI 系统，但我们不断努力改进。

Windows 版 AdGuard、Mac 版 AdGuard 和 Android 版 AdGuard 已经有「保护免受 DPI 影响」功能。

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
