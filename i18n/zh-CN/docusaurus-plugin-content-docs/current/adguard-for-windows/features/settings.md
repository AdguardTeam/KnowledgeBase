---
title: 设置
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

「设置」是最需要关注的部分。 用户可以在此处配置本应用以完全符合您的需求：仅拦截困扰您的广告，使用受信任提供商的 DNS 服务器，移除第三方 Cookie 等等。

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Ad blocking

此为 Windows 版 AdGuard 的主模块，可从用户访问的网站上和设备上安装的应用内移除广告。 要过来广告和威胁隐私的内容，如横幅，弹窗或跟踪器，AdGuard 使用不同的过滤器：用[特定语法](/general/ad-filtering/create-own-filters)编写的有类似用途的规则组。 要了解什么是过滤器及其工作原理，请阅读[本文](/general/ad-filtering/how-ad-blocking-works)。

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- 开启自动激活特定语言的过滤器。
- 禁用[搜索广告和自我推销](/general/ad-filtering/search-ads)拦截。
- 禁用 Windows 11 开始菜单中的广告。
- 激活预安装的过滤器，如「AdGuard 基础过滤器」。
- 点击「添加过滤器」按钮从列表上安装过滤器或添加自定义过滤器。
- 使用「过滤器编辑器」按钮更改现有规则组。
- 点击「过滤日志」按钮以查看由浏览器和您系统上已安装应用的所有请求。 用户可以在过滤日志创建自定义规则以拦截或取消任何请求的拦截。
- 用自己编写的规则，导入的规则或用 AdGuard 助手扩展创建的规则组成过滤器。

在开始手动编写自己的规则之前，请阅读我们详细的[语法指南](/general/ad-filtering/create-own-filters)。

### Tracking protection

Many websites gather information about their visitors, such as their IP addresses, browser and operating system details, screen resolution, and the webpage from which the user came or was redirected. Some websites use cookies to mark and identify your browser, save your personal settings and preferences. This allows them to “recognize” you on your next visit. Tracking protection safeguards your personal information from these data- and statistics-gathering systems.

![Tracking protection levels \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection1.png)

You can adjust the _Tracking Protection_ settings as needed. For example, you can prevent websites from receiving the search request that you used to find them on the Internet, automatically delete third- and first-party cookies, and disable location sharing in your browser, to prevent tracking of your whereabouts.

![Tracking protection custom features \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection2.png)

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### 浏览安全

Browsing security gives strong protection against malicious and phishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module, you can:

- enable notifications to block requests to malicious and phishing sites,
- activate sound notifications,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

The module checks the contents of webpages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### 浏览器助手

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
