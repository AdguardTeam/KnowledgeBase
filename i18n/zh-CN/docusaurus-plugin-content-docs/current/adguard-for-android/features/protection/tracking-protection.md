---
title: 跟踪保护
sidebar_position: 2
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. 使用该功能用户还可以阻止识别 Cookie。网站用这些 Cookie 来标记浏览器、保存个人设置和用户偏好，或识别在下次访问时识别他。

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

以下是预配置级别的功能：

1. **标准**

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. _Ask websites not to track me_. 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   3. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

2. **高**

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. 「从 URL 中删除跟踪参数」 此功能使用「AdGuard URL 跟踪过滤器」从网页 URL 中删除跟踪参数，例如 `utm_*` 和 `fb_ref`。

   3. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   4. _Ask websites not to track me_. 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   5. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   此功能会强制第三方 Cookie 过期，然后将其全部删除。 这包括用户通过社交网络或其他第三方服务进行的登录。 有些网站可能会要求用户定期重新登录，或遇到其他与 Cookie 有关的问题。 要仅阻止跟踪 Cookie，请使用 「标准」保护级别。

   :::

   6. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

3. **强**（以前被称为「终极」）

   1. 「拦截跟踪器」 此功能使用「AdGuard 防跟踪保护过滤器」，保护用户免受在线计数器和网络分析工具的侵扰。

   2. 「从 URL 中删除跟踪参数」 此功能使用「AdGuard URL 跟踪过滤器」从网页 URL 中删除跟踪参数，例如 `utm_*` 和 `fb_ref`。

   3. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   4. _Ask websites not to track me_. 此功能将向用户访问的网站发送 [Global Privacy Control](https://globalprivacycontrol.org/) 和 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 信号，要求网页应用程序禁用跟踪用户的活动。

   5. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   此功能会强制第三方 Cookie 过期，然后将其全部删除。 这包括用户通过社交网络或其他第三方服务进行的登录。 有些网站可能会要求用户定期重新登录，或遇到其他与 Cookie 有关的问题。 要仅阻止跟踪 Cookie，请使用 「标准」保护级别。

   :::

   6. 「拦截 WebRTC」 This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   7. 「拦截推送 API」 This feature blocks push notifications from websites

   8. 「拦截定位 API」 此功能可防止浏览器访问 GPS 数据并确定用户的位置。

   9. 「隐藏第三方 Referer」 此功能防止第三方知道用户访问的网站. 它隐藏包含初始页面 URL 的 HTTP 标头，代之以默认或自定义标头，用户可以进行设置。

   10. _Hide User-Agent_. 该功能可移除 User-Agent 标头中的识别信息，信息通常包括浏览器名称和版本、操作系统和语言设置。

   11. 「移除 X-Client-Data 头部」 此功能禁止 Chrome 浏览器向 Google 域名（包括 DoubleClick 和 Google Analytics）发送有关其版本和修改的信息。

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
