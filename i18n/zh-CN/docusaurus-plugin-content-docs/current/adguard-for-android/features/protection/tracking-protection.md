---
title: 跟踪保护
sidebar_position: 2
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

跟踪保护模块可通过点击底部屏幕的「保护」标签（屏幕底部左起第二个图标）并选择「跟踪保护」访问。

「跟踪保护」（以前被称为「隐身模式」）可防止网站收集个人数据，如 IP 地址、浏览器和操作系统信息、屏幕分辨率以及用户访问或重定向的页面。 使用该功能用户还可以阻止识别 Cookie。网站用这些 Cookie 来标记浏览器、保存个人设置和用户偏好，或识别在下次访问时识别他。

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

「跟踪保护」有三个预先配置的隐私保护级别（「标准」、「高」和「强」）和一个用户自定义级别（「自定义」）。

以下是预配置级别的功能：

1. **标准**

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. 「要求网站不进行跟踪」 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   3. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

2. **高**

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. 「从 URL 中删除跟踪参数」 此功能使用「AdGuard URL 跟踪过滤器」从网页 URL 中删除跟踪参数，例如 `utm_*` 和 `fb_ref`。

   3. 「隐藏您的搜索记录」 此功能隐藏用户对访问网站的查询，防止搜索引擎曝光。

   4. 「要求网站不进行跟踪」 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   5. 「自销毁第三方 Cookies」 此功能将第三方 Cookie 的寿命限制为180分钟。

   :::caution

   此功能会强制第三方 Cookie 过期，然后将其全部删除。 这包括用户通过社交网络或其他第三方服务进行的登录。 有些网站可能会要求用户定期重新登录，或遇到其他与 Cookie 有关的问题。 要仅阻止跟踪 Cookie，请使用 「标准」保护级别。

   :::

   6. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

3. **强**（以前被称为「终极」）

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. 「从 URL 中删除跟踪参数」 此功能使用「AdGuard URL 跟踪过滤器」从网页 URL 中删除跟踪参数，例如 `utm_*` 和 `fb_ref`。

   3. 「隐藏您的搜索记录」 此功能隐藏用户对访问网站的查询，防止搜索引擎曝光。

   4. 「要求网站不进行跟踪」 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   5. 「自销毁第三方 Cookies」 此功能将第三方 Cookie 的寿命限制为180分钟。

   :::caution

   此功能会强制第三方 Cookie 过期，然后将其全部删除。 这包括用户通过社交网络或其他第三方服务进行的登录。 有些网站可能会要求用户定期重新登录，或遇到其他与 Cookie 有关的问题。 要仅阻止跟踪 Cookie，请使用 「标准」保护级别。

   :::

   6. 「拦截 WebRTC」 该功能拦截 WebRTC，这是一个已知的漏洞，即使用户使用代理或 VPN，也会泄露真实 IP 地址。

   7. 「拦截推送 API」 此功能防止浏览器接收来自服务器的推送消息。

   8. 「拦截定位 API」 此功能可防止浏览器访问 GPS 数据并确定用户的位置。

   9. 「隐藏第三方 Referer」 此功能防止第三方知道用户访问的网站. 它隐藏包含初始页面 URL 的 HTTP 标头，代之以默认或自定义标头，用户可以进行设置。

   10. 「隐藏 User-Agent」 该功能可移除 User-Agent 标头中的识别信息，信息通常包括浏览器名称和版本、操作系统和语言设置。

   11. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

用户可以在「跟踪保护」中调整设置，并进行自定义配置。 每个设置都有说明，可以帮助您了解其作用。 [进一步了解「跟踪保护」设置的作用](/general/stealth-mode)，请谨慎使用，因为有些设置会干扰网站和浏览器扩展的功能。
