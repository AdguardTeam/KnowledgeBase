---
title: 已知问题
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

最后更新时间：2024年 9月 17日

要阅读本文，请了解关于加密，TLS 和 HTTPS 方面的基本知识。

首先，请看下面这张显示有常规 HTTPS 协议结构的图表：

![什么是 HTTPS 过滤?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard 复制您浏览器使用的 TLS 连接属性：

- AdGuard 使用相同的 TLS 版本
- AdGuard 使用与您浏览器相同的加密方式（密码）

实际上，这意味着如您使用的是安全的现代浏览器，它就会考虑到所有已知的 TLS 问题，不会尝试使用不安全的密码。

**当对证书的有效性有任何疑问时，AdGuard 会做什么？** 在这种情况下，AdGuard 完全停止过滤与此域的所有连接，并让浏览器负责所有决策。

## 已知问题

AdGuard 中的 HTTPS 过滤有缺点。 在接下来的 AdGuard 版本中，它们大部分都会受到淘汰。

以下列出了我们已知的所有问题及其修复的预计时间。

### 检查原始证书

HTTPS 过滤机制的最大缺点是隐藏网站的真实证书。 用户不能轻易地检查到其原始证书，仅能看到由 AdGuard 发行的证书。

这个问题可以通过两种方式解决：

- 通过使用我们的[浏览器助手](https://adguard.com/adguard-assistant/overview.html)。 此浏览器扩展帮助用户直接从浏览器管理过滤，并允许您检查任何网站的原始证书。

  ![证书浏览器助手 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- 通过访问 Android 版 AdGuard 中的「*最近活动*」部分，或Windows 版和 Mac 版 AdGuard 中的「*过滤日志*」部分。 在浏览器助手界面，用户仅能查看网站的证书；而在「最近活动」中，无论是否启用浏览器助手，都可以检查任何子请求或浏览器所使用的服务器的证书。 要通过此方法查看证书，请按照以下步骤操作。

#### 在 Android 版 AdGuard 中检查原始证书

1. 点击导航栏上的「统计」图标。
2. 前往「*最近活动*」。
3. 点击您想要检查证书的请求，以打开请求详情。
4. 向下滚动至「*原始证书*」。 点击了解更多信息。

![Android 版 AdGuard 的最近活动 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### 在 Windows 版 AdGuard 中检查原始证书

1. 前往「*设置*」→「*广告拦截*」→「*过滤日志*」。
2. 点击想检查证书的请求以打开请求详情。
3. 在「*TLS*」部分，点击「*查看网站证书*」。

![Windows 版 AdGuard 的过滤日志 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### 在 macOS 版 AdGuard 中检查原始证书

1. 点击齿轮图标。 在下拉菜单中，前往「*高级*」→「*过滤日志...*」。
2. 点击想要检查证书的请求，以打开请求详情。
3. 点击「*查看证书*」。

![Mac 版 AdGuard 的过滤日志 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### 证书透明度

由于采用了现代加密技术，浏览器通常可以检测到使用伪造或假冒 SSL 证书的恶意网站。 然而，当前的加密机制在检测恶意网站方面并不理想，特别是当这些网站持有误发的证书或由被攻陷或行为不端的证书颁发机构（CA）颁发的证书时。 证书透明度（英文：Certificate Transparency）旨在通过让 SSL 证书的颁发和存在情况公开接受域名所有者、证书颁发机构（CA）及域名用户的审查，来弥补基于证书的这些威胁。

使用 [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) 的 AdGuard 软件，自版本 **1.11** 起，将基于 [Chrome 证书透明度策略](https://googlechrome.github.io/CertificateTransparency/ct_policy.html)（英文：Chrome Certificate Transparency Policy）实施相应政策。

## 有意见或建议？

如您想添加内容、报告错误或提出问题，请联系我们： `devteam@adguard.com`。
