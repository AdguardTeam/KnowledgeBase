---
title: Crowdinファイルの翻訳の優先順位
sidebar_position: 5
---

There are five major AdGuard projects on Crowdin — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), and [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

*AdGuard Applications*プロジェクトのどのファイルや製品から始めるべきか、明確なガイドラインはありません。 お好きな製品をお選びください。

ただ、いくつか触れておきたいことがあります:

- The app is only available to users in those languages for which all translations have been completed on Crowdin;
- 製品自体の翻訳がなければ説明文等は不要になるので、アプリストアの説明文などの翻訳は後回しにしたほうがお勧めです。

ただし、*AdGuard Websites*プロジェクトの場合は異なります。 翻訳が100％完了していなくても、言語をサイトに追加することは可能です。 これはどのファイルがすでに翻訳されているかによります。 そのため、最も重要なファイルから順に翻訳されることをお勧めします（以下に記載）:

[AdGuard Ad Blocker website](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN website](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS website](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Adding new strings as well as updating existing ones in these files requires special attention from the project translators and proofreaders.

In addition to websites, there is a file for translating [transactional emails](https://crowdin.com/project/adguard-websites/en#/emails) in the AdGuard Websites project. Newly added strings in this file also have a high translation priority.
