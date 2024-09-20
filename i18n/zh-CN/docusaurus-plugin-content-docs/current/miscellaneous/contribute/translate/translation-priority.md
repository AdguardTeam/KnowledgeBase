---
title: AdGuard Crowdin：翻译文件的优先级
sidebar_position: 5
---

There are five major AdGuard projects on Crowdin — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), and [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

我们没有明确的用户该从哪一个文件或软件开始翻译 *AdGuard Applications* 项目的要求。 用户可以选择最喜欢的文件或软件即可。

我们只想强调几个要点：

- The app is only available to users in those languages for which all translations have been completed on Crowdin;
- 我们建议译员在翻译软件内容后才翻译应用商店上的描述，因为没有软件的翻译，应用商店上的说明就没有必要了。

在 *AdGuard Websites* 项目里情况有所不同。 即使没有 100% 的翻译，我们也可以添加网站的新语言版本。 但是，这取决于已经翻译的文件。 这就是我们建议您从最重要的文件开始翻译。下面是文件排序（重要的文件排在前面，次要的文件排在后面）：

[AdGuard 广告拦截程序的网站](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN 网站](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS 网站](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

除更新这些文件的现有字符串外，添加的新字符串也需要工程翻译者和审核员特别注意。

除了网站之外，AdGuard 网站项目中还有一个用于翻译[交易型电子邮件（transactional emails）](https://crowdin.com/project/adguard-websites/en#/emails)的文件。 此文件新添加的字符串也要优先翻译。
