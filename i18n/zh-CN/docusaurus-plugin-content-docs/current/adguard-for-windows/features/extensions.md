---
title: 扩展
sidebar_position: 3
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

AdGuard 可作为[用户脚本管理器](/general/userscripts)以显著扩展网站功能。 AdGuard 用户可以添加自己的脚本，也可以管理现有脚本。

![扩展 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**自动检测用户脚本**

开启此功能后，AdGuard 将自动定义浏览器对用户脚本的查询并建议安装选项。 否则，需要用户手动下载和安装扩展。

以下扩展是随 AdGuard 一起安装的：

![预装用户脚本 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard 助手**

如[新版助手](/adguard-for-windows/browser-assistant.md)不可用于您的浏览器，您可以使用旧版助手，即 AdGuard 助手。 此扩展的名称是经过深思熟虑的：其协助用户在浏览器内直接更改 AdGuard 的基本设置，而无需打开程序。 AdGuard 助手可协同所有 Windows 兼容的浏览器一起工作。 此外，在用户排除的网站上以及某些存在内容不能正确显示的网页内，AdGuard 助手的图标是不会显示的。

**AdGuard Extra**

此自定义扩展设计用于对抗重新插入已拦截广告技术，即所谓的广告拦截器规避/广告重新注入。 两者都是受广告商欢迎的先进的反广告拦截方式。

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard 弹窗拦截器**

用户在查看网页时此扩展防止弹出窗口被打开。 一些弹窗被认为是有用的，它们可能包含网站管理设置或点击链接时显示附加参考信息。 这就是用户可按需关闭拦截器的原因。 此扩展程序也不适用于那些已添加到 AdGuard 排除项列表的网站。 默认情况下其是关闭的，但用户可以在应用程序设置内打开它。 You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**（信任网站）

Web of Trust 让用户根据自己的意见查看每个网站的声誉。 网站是根据一系列具体标准进行评级的：信任度、安全性等等。 默认情况下扩展是关闭的，但用户可以在应用程序设置内打开它。 请注意，AdGuard 不是此扩展的开发者。

### 网络

倒数第二个模块专用于网络过滤，用户可以在此处找到附加的网络相关选项。 Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. 这些重要的额外预防措施可更好地过滤您的网络空间。 当前大部分网站使用 HTTPS，广告亦是如此。 From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![网络设置 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

用户也可以选中此模块内的复选框「将 AdGuard 用作 HTTP 代理」以将 AdGuard 用作常规的 HTTP 代理过滤经由所有流量。 用户也可开启「用 EV 证书过滤网站」功能。 扩展验证（EV）SSL 证书提供更强大的安全保障；此类网站的所有者必须通过 EV 指南定义的彻底的全球标准化身份验证过程。 这就是一些用户信任具有此类证书的网站并且不愿过滤它们的原因。

最后是代理设置部分。 用户可以在此处指定 AdGuard 更新过滤器，获取新版本等所用的代理服务器。

### AdGuard VPN

最后一部分专门介绍 AdGuard VPN，是指一种在用户每次浏览互联网时提供安全性和匿名性的理想工具。 用户可以点击「下载」按钮开始下载，或点击「主页」按钮转到 AdGuard VPN 官网。

AdGuard VPN 工作原理是什么？ 在不讨论技术细节的情况下，我们可以说 VPN 在用户的计算机或移动设备与远程 VPN 服务器之间创建一个安全的加密隧道。 通过这种方式，数据的保密性以及用户的匿名性得以保留，因为第三方观察者看到的是 VPN 服务器的 IP 地址而不是用户的实际 IP。

**AdGuard VPN 能做什么：**

- 隐藏用户的真实位置帮助保持匿名性
- 更改用户的 IP 地址避免他人跟踪个人数据
- 加密用户的流量不让第三方访问个人数据
- 让用户自己配置在哪里启用或关闭 VPN（排除项功能）

要了解更多关于 AdGuard VPN 的信息，请转到 [AdGuard VPN 知识库](https://adguard-vpn.com/kb/)。
