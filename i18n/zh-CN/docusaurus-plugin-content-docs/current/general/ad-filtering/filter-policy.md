---
title: AdGuard 过滤策略
sidebar_position: 6
---

:::note 免责声明

在启用任何过滤器前，请仔细阅读本过滤器政策。

使用 AdGuard 广告过滤程序、AdGuard DNS 及其相关过滤器，可能会影响第三方网站及服务的正常显示与功能。 用户有责任仔细阅读并遵守所使用的任何网站或服务的政策与条款。

在启用由第三方提供的过滤器前，您同意自行审阅其适用条款，并就是否使用做出自主判断与决定。 AdGuard 不对第三方过滤器的运行机制或其条款内容承担任何责任，其在 AdGuard 产品中的存在亦不代表 AdGuard 推荐使用。

:::

在 AdGuard，我们长期以来一直遵循一些原则来创建我们的过滤器，这些原则和过滤器说明是我们过滤政策的一部分。

## 通用标准

这些标准适用于所有过滤器的规则。

- 在有足够流量的情况下，我们才会添加用于相应网站的规则。 流量由公开统计数据（如有的话）或间接统计工具（如社交网络上的用户数量）判断。 在一个网站的流量达到每月 100,000 次访问时，流量算是充足的。 我们也会考虑为不太受欢迎的网站添加一条规则，但最终决定权在过滤器开发人员手中。 流量较低的网站仍应被检查第三方分析和广告网络的情况如何。
- 对于“内容农场”（制作大量内容的网站，其主要目的是在搜索结果中获得较高的可见度并产生广告收入），过滤器开发人员会根据内容的质量做出决定。

过滤规则的质量要求：

- 规则不应该对网站性能带来负面影响。
- 解锁规则必须尽可能具体，以避免解锁不必要的内容。
- JavaScript 规则应尽量少用，只有在不使用 JavaScript 规则就无法屏蔽广告的情况下才使用。

## 广告拦截过滤器

### 专用名词

**广告拦截程序**（或者，广告拦截器）是一种软件或硬件工具，用于过滤、隐藏或拦截网页上的广告和其他元素。 创建广告拦截程序的目的是，改善用户体验、缩短页面加载时间、减少互联网流量消耗、屏蔽广告、提升浏览网站和使用应用程序时的隐私性，以及拦截恼人的元素。

**过滤器**（或者，**过滤器列表**）是一套过滤规则，旨在使用广告拦截程序过滤内容和拦截各种类型的广告和其他内容。 这些过滤器通常在浏览器、程序或 DNS 服务器级别上运行。

**Anti-adblock**（中文：反广告拦截）是网站或应用程序使用的一种技术，旨在检测广告拦截并以不同方式对其做出反应：跟踪、重新注入广告、鼓励禁用广告拦截器（即所谓的“广告拦截墙”（英文：Adblock walls））。 反广告拦截有多种类型

- 不提供其他选择的 Anti-adblock：要继续使用网站，用户必须禁用网站上的广告拦截程序。
- 提供替代选项的 “Anti-adblock wall”，例如购买订阅以继续使用广告拦截程序。
- 非强制的信息提示：要求用户禁用广告拦截器，但这些信息可以直接关闭，然后继续允许用户不受限制地继续浏览网站。
- 针对广告拦截器的使用实施替代广告：网站在检测到广告拦截器时引入替代广告。
- 收费墙：一种内容货币化方法，对用户部分或完全隐藏内容，并通过信息提示用户购买订阅以获取访问权。

### 过滤器

AdGuard 广告拦截的过滤器包含以下过滤器：

- AdGuard 基础过滤器
- AdGuard 移动广告过滤器
- 按语言原则划分的地区过滤器，包括中文、荷兰语、法语、德语、日语、俄语、西班牙语/葡萄牙语、土耳其语和乌克兰语

### 过滤器的用途

- **基础过滤器**旨在拦截英语网站和没有单独过滤器的网站上的广告。 它还包含适用于所有网站（无论网站的语言）的一般过滤规则。
- **移动广告过滤器**拦截移动版网站和移动应用程序中的广告。 没有基于语言的细分。
- **地区过滤器**遵循与**基础过滤器**相同的政策，但仅限于特定语言的网站。

广告拦截过滤器的主要目标在于拦截网站、应用程序和某些可以从互联网上加载广告的设备上的所有类型广告。广告类型如下：

- 横幅。以图像形式显示在网页各部分的广告。
- 前导广告。文字或图形广告，通常是动画广告，旨在引起访问者的兴趣（“标题党”、吸睛图片）以此增加点击率。
- 文字广告。文字形式的广告，包括链接。
- 模式广告。以模式窗口的形式突然出现在当前内容之上的广告。
- 弹出式广告。点击页面上任何位置时，广告都会在当前窗口下的单独窗口中打开。
- 重定向广告。用户点击后自动重定向到其他网站的机制。
- 伪装成网站内容的广告，点击后会打开含有促销产品或无关内容的页面。
- 视频广告。网站和应用程序的视频内容或独立广告元素中嵌入的广告视频。
- 互动广告。用户可与之互动的广告（如游戏和调查，完成后会打开广告项目）。
- 插播广告。移动设备上覆盖应用程序或网络浏览器界面的全屏广告。
- 占据较大空间或在背景中格外显眼并吸引访问者注意力的残留广告（几乎无法辨别或难以察觉的广告除外）。
- Anti-adblock 广告。当主要广告被屏蔽时，网站上显示的替代广告。
- 一些知名脚本会使用诱饵元素来检测广告拦截程序。这样做有多种目的，包括改变广告显示方式、指纹识别等等。
- 网站自身的广告，如果它已被一般过滤规则屏蔽（请参阅*限制及例外*）。
- 阻止网站使用的反屏蔽脚本（请参阅*限制及例外*）。
- 恶意软件注入的广告，如果提供了有关其加载方法或复制步骤的详细信息。
- 不必要的“挖矿”。未经用户同意挖掘加密货币的脚本

### 限制及例外

- 不应故意屏蔽网站自身的广告。 但是，如果屏蔽是由一般过滤规则造成的，则不应解除屏蔽。
- 付费墙等内容访问限制措施不会被广告拦截过滤器屏蔽。 不过，如果其运作方式侵犯用户隐私，则可能被「跟踪保护过滤器」屏蔽。
- 在以下情况下，Anti-adblock walls 将被屏蔽：
    - 强烈要求禁用或删除广告拦截器，或有效阻止使用网站。
    - 对使用广告拦截器可能造成的后果作出错误和误导性的描述。
    - 使访问者面临恶意广告的风险，如果未阻止的广告来自可疑来源。
    - 它们侵犯用户隐私或对其产生负面影响。
- 如果广告拦截程序检测到的信息至少满足以下条件之一，我们将不予拦截：
    - 监测到的信息允许不干扰网站使用体验，不会覆盖大量页面内容。
    - 监测到的信息提供禁用广告拦截器的替代方案，但这种替代方案不会危及用户的隐私或安全。
    - 它们允许用户继续访问网站内容。
    - 某些传统规则可能会继续拦截符合上述一个或多个标准的信息。 如果发现此类规则，将依照政策进行处理。
- 如果网络矿池是公开的，且不完全用于恶意目的，则不会被封锁。

## 跟踪保护过滤器

### 专用名词

**跟踪**：出于营销目的，对用户及其与网站和应用程序的互动情况进行监控和收集数据的过程，以及为分析网站或应用程序的运行情况而获取遥测数据的过程。 这一过程包括跟踪访问的页面、花费的时间、与网站元素的互动（如点击、提交表单）以及其他指标。 网站和应用程序所有者可以通过它更好地了解用户行为、优化功能和调整营销策略。 跟踪还可用于监控性能、使用模式和发现问题，为开发人员提供必要的数据，以提高网站或应用程序的稳定性和质量。 即使获得的数据无法识别个人身份，此类行为仍被视为跟踪。

**跟踪器**：用于网站或应用程序的软件，旨在收集有关其运行和访客操作的信息。 它跟踪用户与网站或应用程序的互动，记录有关页面浏览、花费时间、点击、表单提交和其他事件的数据。 其目的是为网站和应用程序所有者提供分析用户行为、改善用户体验以及优化内容和广告的工具。

**URL 跟踪参数**：是地址的一部分，由分析系统添加到链接中，或存在于网页的某些链接中。 当发出请求时，分析系统或网站的后台会对 URL 跟踪参数进行处理，并从中提取信息。 例如，URL 跟踪参数可以传输有关点击或广告活动的信息。 诈骗保护或僵尸网络检测系统也可以使用 URL 跟踪参数。

**Cookies**：是指网站发送并存储在设备上的文件。 这些文件包含各种信息，既是网站在设备上运行所必需的，也是用于分析目的的，用于跟踪网站访客活动的唯一标识符、广告参数等。

### 过滤器

AdGuard 跟踪保护过滤器包含以下过滤器：

- AdGuard 防跟踪保护过滤器
- AdGuard 邮件跟踪保护过滤器
- AdGuard URL 跟踪过滤器

### 过滤器的用途

**AdGuard 防跟踪保护过滤器**用于屏蔽收集用户个人数据的跟踪器，并改善用户使用体验。

屏蔽的内容：

- 分析系统脚本
- 网站和应用程序自身的跟踪脚本
- 屏蔽的 CNAME 跟踪器
- 跟踪 Cookie
- 跟踪像素
- 浏览器的跟踪 API
- 检测广告拦截程序以进行跟踪
- Google 浏览器的隐私沙盒功能及其用于跟踪的分叉（Google Topics API、受保护受众 API）

**URL 跟踪过滤器**旨在移除网址中的跟踪参数。

**Mail 跟踪保护过滤器**会拦截邮件中嵌入的跟踪像素，防止发件人监控用户何时打开邮件。

### 限制及例外

如果跟踪保护过滤器的阻止会影响网站的正常运行，则不应阻止跟踪器：

- Anti-bot 机器人和欺诈保护（如果会影响网站使用）。 例如，使用 PerimeterX 或 hCaptcha 时，当网站试图通过验证码验证访客时，阻止会导致问题。
- 不屏蔽 Sentry 或 Bugsnag 等错误跟踪系统。

## 恼人元素过滤器

恼人元素过滤器的设计目的是通过阻止页面上任何会分散和干扰用户在使用网站时注意力的元素（如各种模式窗口和交互式表单、Cookie 同意通知和请求、移动应用程序横幅以及各种小工具）来提高网站的可用性。

### 专用名词

**Cookie 通知**是一种说明网站 Cookie 类型和使用情况的表格。 Cookie 通知会在用户访问网站时自动出现，告知用户网站使用 Cookie 或其他跟踪技术来收集和使用个人信息，并解释收集信息的原因和共享对象。

**CMP（同意管理平台）**是帮助网站遵守 Cookie 使用规则的软件。 CMP 在获得用户同意之前限制 Cookie 的使用，为用户提供接受某些 Cookie 和管理隐私设置的选项。

**小工具**是一种扩展网站功能的用户界面元素。 网页小工具集成在网页中，可包括按钮、表单或横幅等交互式元素。 它们可让用户访问特定服务或内容，而无需导航到其他页面。

**弹出窗口**是指出现在当前网页上方的窗口。 其目的是显示附加信息、广告、通知或数据输入表单。 弹出窗口通常会阻挡页面主要内容的浏览，并要求用户采取行动才能关闭，这可能会令人恼火。

### 过滤器

为了更好地定制，烦扰过滤器按其用途进行了划分：

- AdGuard Cookie 通知过滤器
- AdGuard 弹窗过滤器
- AdGuard 移动拦截程序横幅广告的过滤器
- AdGuard 小工具过滤器
- AdGuard 其他恼人广告过滤器
- 广告过滤器包含 5 种专门烦扰过滤器的组合过滤器

### 过滤器的用途

#### AdGuard Cookie 通知过滤器

该过滤器旨在阻止 Cookie 通知和来自 Cookie 管理平台（CMP）的请求。 根据网站实现同意机制的方式不同，所采用的方法也有所差异。

大多数情况下，只需隐藏或屏蔽相应的脚本即可。 不过，如果网站要求用户做出 Cookie 选择才能使某些功能或第三方内容正常运行，过滤器会自动采用替代方法来处理该请求。

在可能的情况下，非必要 Cookie 默认会被拒绝。 如果技术上不可行，必须授予同意才能让网站正常运行，则会额外对该网站进行分析和跟踪技术审查，并由 **AdGuard 跟踪保护过滤器**进行拦截。

**限制及例外**

在某些情况下，添加规则的决定由过滤器开发者自行做出；主要是在模拟操作时的选择会影响网站功能的情况下（例如，网站的历史记录可能无法使用，或用户设置可能无法保存）。

#### AdGuard 弹窗过滤器

这是一个用于拦截网页上各类非必需弹窗的过滤器，包括但不限于：

- 请求获取推送通知权限的弹窗
- 订阅新闻、促销活动及各类事件的弹窗和表单，包括通过第三方渠道（如 Google News、Telegram）接收的订阅请求
- 鼓励用户关闭广告拦截程序并侵犯用户隐私的弹窗（由过滤器开发者酌情决定）
- 其他可能对用户造成困扰的弹窗类型（由过滤器开发者酌情决定）

**限制及例外**

- 推送通知仅在非实用用途的网站上被拦截。 例如，在邮件网页客户端或用于工作目的的工具中，这类通知不会被拦截。
- 部分不属于上述类别但仍干扰用户体验的弹窗，也可能被拦截。 例如，网站上的注册提示或介绍网站功能的弹窗。 具体由过滤器开发者酌情决定。
- 要求用户付费以访问内容的内容访问措施，不得被绕过。

#### AdGuard 移动拦截程序横幅广告的过滤器

该过滤器可阻止鼓励访客安装移动应用程序的横幅广告和弹出窗口。

**限制及例外**

位于网站页眉或菜单中的横幅，若非动画形式且未占用过多可用空间，则不予拦截。 若横幅位于页脚，则由过滤器开发者根据具体情况决定。 通常，页脚横幅与其他元素相比并不突出，也不易分散注意力。

#### AdGuard 小工具过滤器

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**限制及例外**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard 其他恼人广告过滤器

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**限制及例外**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## 社交媒体过滤器

### 过滤器

AdGuard Social Media filters include:

- AdGuard Social Media filter

### 过滤器的用途

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### 限制及例外

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## 其他过滤器

This group contains filters that are not essential for blocking advertisements.

### 专用名词

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### 过滤器

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### 过滤器的用途

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**限制及例外**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**限制及例外**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**限制及例外**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy

## How to dispute a blocking rule

AdGuard filter lists are maintained not only by the AdGuard team but also by community contributors. If you believe a blocking rule violates the principles described in this filter policy, you can dispute it by opening an issue on GitHub.

Before submitting a dispute, please make sure you have read this policy carefully. When reviewing your report, filter maintainers will evaluate whether the rule complies with the criteria described above, so your explanation should refer to this policy whenever possible.

### How to submit a dispute

You can submit a dispute by using [our report tool](https://reports.adguard.com/new_issue.html). See the step-by-step guide in our [dedicated article](https://adguard.com/kb/guides/report-website/).

Alternatively, you can report it via GitHub:

1. Go to the [AdGuard Filters GitHub repository](https://github.com/AdguardTeam/AdguardFilters/issues) and create a new issue.
2. Select the **Report an issue using AdGuard** issue template.
3. Fill out the template with as much detail as possible.

Your report should include:

- The URL of the affected website.
- A clear description of what is being blocked.
- The blocking rule, if you know which one is responsible.
- Steps to reproduce the issue.
- Screenshots or other evidence that illustrate the problem, if applicable.
- A detailed explanation of **why you believe the rule does not comply with this filter policy**. Whenever possible, refer to the relevant section or principle of the policy that you believe the rule violates.

### What makes a good dispute?

Simply stating that you disagree with a blocking rule is usually not enough. To help maintainers evaluate your report, explain why the rule conflicts with the blocking policy rather than why you personally would prefer different behavior.

For example, if you believe a rule blocks content that should not be blocked under this policy, describe which policy criterion applies and how the rule fails to meet it. The more specific and well-supported your report is, the easier it will be for maintainers to review your request and determine whether the rule should be changed.
