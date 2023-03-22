---
title: Crowdinファイルの翻訳の優先順位
sidebar_position: 5
--- 

Crowdinには、[AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases) という5つの主要なAdGuardプロジェクトがあります。

*AdGuard Applications*プロジェクトのどのファイルや製品から始めるべきか、明確なガイドラインはありません。 お好きな製品をお選びください。

ただ、いくつか触れておきたいことがあります:

* Crowdinで翻訳が完了した言語のみが、AdGuardアプリのUIで表示されます。
* 製品自体の翻訳がなければ説明文等は不要になるので、アプリストアの説明文などの翻訳は後回しにしたほうがお勧めです。

ただし、*AdGuard Websites*プロジェクトの場合は異なります。 翻訳が100％完了していなくても、言語をサイトに追加することは可能です。 これはどのファイルがすでに翻訳されているかによります。 そのため、最も重要なファイルから順に翻訳されることをお勧めします（以下に記載）:

[AdGuard Ad Blocker website](https://crowdin.com/project/adguard-websites/en#/adguard.com)

* `critical.resx`
* `auth.resx`
* `welcome.resx`

[AdGuard VPN website](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

* `critical.resx`
* `auth.resx`

[AdGuard DNS website](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

* `critical.resx`
* `auth.resx`

> これらのファイルに新しい文字列を追加したり、既存の文字列を更新したりするには、プロジェクトの翻訳者や校正者が特別な注意を払う必要があります。

Webサイトのほか、AdGuard Websitesプロジェクトには、 [ransactional emails](https://crowdin.com/project/adguard-websites/de#/emails) を翻訳するためのファイルも用意されています。 このファイルで新しく追加された文字列も、翻訳優先度が高いです。