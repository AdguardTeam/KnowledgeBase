---
title: AdGuard Crowdin：先翻译什么文件
sidebar_position: 5
--- 

Crowdin上有五个主要的 AdGuard 项目，包括 [AdGuard 应用程序（AdGuard Applications）](https://crowdin.com/project/adguard-applications)、[AdGuard 网站（AdGuard Websites）](https://crowdin.com/project/adguard-websites)、[AdGuard 广告拦截程序的知识库（AdGuard Ad Blocker Knowledge base）](https://crowdin.com/project/adguard-knowledge-base)、[AdGuard VPN 知识库（AdGuard VPN Knowledge Base）](https://crowdin.com/project/adguard-vpn-knowledge-base)和 [AdGuard DNS 知识库（AdGuard DNS Knowledge Base）](https://crowdin.com/project/adguard-knowledge-bases)。

我们没有明确的用户该从哪一个文件或软件开始翻译 *AdGuard Applications* 项目的要求。 用户可以选择最喜欢的文件或软件即可。

我们只想强调几个要点：

* 用户在 Crowdin 上完成软件的所有翻译后，我们才能在相应的应用程序里添加新翻译。
* 我们建议译员在翻译软件内容后才翻译应用商店上的描述，因为没有软件的翻译，应用商店上的说明就没有必要了。

在 *AdGuard Websites* 项目里情况有所不同。 即使没有 100% 的翻译，我们也可以添加网站的新语言版本。 但是，这取决于已经翻译的文件。 这就是我们建议您从最重要的文件开始翻译。下面是文件排序（重要的文件排在前面，次要的文件排在后面）：

[AdGuard 广告拦截程序的网站](https://crowdin.com/project/adguard-websites/en#/adguard.com)

* `critical.resx`
* `auth.resx`
* `welcome.resx`

[AdGuard VPN 网站](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

* `critical.resx`
* `auth.resx`

[AdGuard DNS 网站](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

* `critical.resx`
* `auth.resx`

> 翻译人员和审核员需要特别注意在上述文件中添加新的或更新现有的字符串。

除了网站之外，AdGuard 网站项目中还有一个用于翻译[交易型电子邮件（transactional emails）](https://crowdin.com/project/adguard-websites/de#/emails)的文件。 此文件中新添加的字符串也具有较高翻译的优先级。