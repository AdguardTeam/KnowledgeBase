---
title: 什么是 HTTPS 过滤
sidebar_position: 1
---

### 什么是 HTTPS？

HTTPS（安全超文本传输协议）是 HTTP 协议的扩展，支持加密以提高安全性。 该协议用于安全传输有价值的信息，如个人数据、信用卡详细信息等。

使用 HTTPS 非常有利，因为加密流量可以防止第三方窃听，我们非常关注这一点。 近年来，HTTPS 的接受度一直在增长，主要是因为 [ Google 鼓励](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html)，也因为免费证书颁发机构 [Let's Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt) 的出现。

下图描述普通 HTTP 协议和安全 HTTPS 协议之间的区别。

![什么是 HTTPS？](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### 什么是安全证书？

简而言之，HTTPS 意味着数据加密。 但仍然存在一个问题：如何确定已与正确的网站建立加密连接？ 这就是安全证书发挥作用的时候。 证书可以证明网站的真实身份。 如网站无此类证书，或证书包含不正确的信息，浏览器将不允许建立安全连接。 重要的是，网站使用的证书必须由浏览器信任的证书颁发机构 (CA) 颁发。 此种 CA 确保 SSL 证书确实颁发给网站的所有者。

### 为什么 AdGuard 要能够过滤 HTTPS？

当前大部分网站使用 HTTPS，广告亦是如此。 以下是一些热门网站，如果没有 HTTPS 过滤，将无法删除广告：youtube.com、facebook.com 和 x.com。

### HTTPS 过滤的工作方式?

如果工作方式很容易的话，HTTPS 就不会那么安全了。 当浏览器尝试连接到服务器时，AdGuard 会建立两个安全连接：一个与浏览器（或另一个应用程序）建立连接，另一个与服务器建立连接。 浏览器必须信任 AdGuard 及其创建的连接。 为此，AdGuard 生成一个特殊（且唯一）的根证书并将其安装到系统中，并在需要时安装到某些浏览器中（例如，Firefox 浏览器）。 AdGuard 可以看到安全连接内发生的情况，并完成自己的工作，即拦截广告和跟踪器。

以下查看处理过程：

![HTTPS 过滤的工作方式](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### 用户流量是否保持加密且安全？

当然！ 用户与远程服务器的连接保持加密且安全。 AdGuard 与浏览器一样，会在决定是否过滤服务器证书之前检查服务器的证书。

然而，HTTPS 过滤也有其缺点。 最重要的一点是它向浏览器隐藏网站的实际证书。 浏览器看到的是 AdGuard 颁发的证书。

因此，我们采取了额外的措施以提高连接安全性。

### 金融网站和含有敏感个人数据的网站

默认情况下，AdGuard 不会过滤银行网站、支付系统或包含有价值个人数据的网站上的任何信息。 我们维护着[数千个排除项](https://github.com/AdguardTeam/HttpsExclusions)的列表。

如果您认为某些网站应添加到此列表中，[请告知我们](https://github.com/AdguardTeam/HttpsExclusions/issues/new)。

### 扩展验证 (EV) 证书

AdGuard 让用户禁用对所有使用扩展验证证书的网站的过滤。

与普通证书相比，EV 证书的安全级别更高，能提供更多保证，确保网站并非欺诈或伪造。

### 与 HTTPS 过滤有关的问题

[2017 年研究](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf)发现 5% 到 10% 的 HTTPS 连接是由 HTTPS 过滤应用程序建立的。 它通常是由各种防病毒软件完成的。 坏消息是，26 款经过测试的防病毒软件中有 24 款以各种方式降低连接安全级别，而三分之二的产品创建了容易遭受黑客攻击的连接。

研究人员得出一个简单的结论：互联网安全社区应密切关注过滤安全连接的应用程序。 此类软件的开发人员必须认真关注过滤的质量。

需要强调的是，AdGuard 没有参加上述的研究。 我们根据他们的测试集进行了估算，在测试过程中，我们可以获得最高分 — A\*。 然而，这个分数并不完美。 在研究过程中，研究人员发现一些在最终评估中被忽略的问题。

在 AdGuard，我们 100% 同意上述结论。 此外，我们希望尽可能地向用户开放，讨论我们目前遇到的问题以及我们为提高过滤机制的质量和安全性而采取的措施。 这些问题的列表按优先级排序。

上述研究中发现的大多数问题都与证书验证机制有关。 这是我们首先要关注的。 我们就开发一个单独的证书验证库。 此外，我们希望将其开源。 [另一篇文章](../known-issues)列出 AdGuard 中 HTTPS 过滤的所有已知缺点以及我们的修复计划。

#### Android 7+ 的 HTTPS 过滤问题

[从 Android 7 开始](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html)，开发人员就必须明确指出他们的应用信任用户安装的证书。 并不是每个人都愿意这样做，或者对此感到烦恼。 这对 AdGuard 意味着什么？ AdGuard 安装用户证书以便能够过滤 HTTPS 流量。 如果应用不信任此证书，则不会过滤其 HTTPS 流量。 该怎么办？

首先值得一提的是，许多应用程序（甚至是现代应用程序）仍然信任用户证书。 在这方面没有任何变化。 几乎所有浏览器也都信任此类证书。 可能有一些外来浏览器不这样做，但它们是常见做法的罕见例外。

最后，如果设备已获得 Root 权限，则可以将 AdGuard 证书移至系统存储。 这样，用户不必担心特定应用程序可能具有或不具有的任何权限，HTTPS 流量将针对现代应用程序和旧应用程序进行过滤。 请记住，在这种情况下，一些额外的安全限制（例如 HPKP 或 `Expect-CT`）适用于 AdGuard。

### 如何手动检查 HTTPS 品质？

有数个专门的网站可用于您检查 HTTPS 连结品质。 这些网站会检查您的浏览器（或者在我们的例子中，您的浏览器加上 AdGuard）是否容易受到常见漏洞的影响。 如果您打算使用任何过滤 HTTPS 的程序，不一定是 AdGuard（例如防病毒软件），我们建议您使用这些网站检查连接质量。

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
