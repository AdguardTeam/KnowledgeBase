---
title: 拡張機能
sidebar_position: 3
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

AdGuard は[ユーザースクリプトマネージャ](/general/userscripts)として、ウェブサイトの機能を大幅に拡張することができます。 AdGuard のユーザーは、独自のスクリプトを追加したり、既存のスクリプトを管理したりできます。

![拡張機能画面 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**ユーザースクリプトを自動で検出する**

このオプションを有効にすると、AdGuard はユーザー スクリプトに対するブラウザクエリを自動的に定義し、ユーザー スクリプトのインストールを提案するようになります。 これ以外で、拡張機能は手動でダウンロードしてインストールすることもできます。

AdGuard にインストールされている拡張機能は以下の通りです:

![プリインストールされているユーザースクリプト \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard アシスタント**

AdGuard アシスタントは、[新しいアシスタント](/adguard-for-windows/browser-assistant.md)がブラウザで利用できない場合に使用できるレガシー アシスタントです。 ユーザーがAdGuardアプリを開かなくても、ブラウザ上で AdGuard の基本設定をすばやく変更できるようにする拡張機能です。 AdGuard アシスタントは、Microsoft Windowsと互換性のあるブラウザの全てで動作します。 ※ユーザーによって例外としてリストされたウェブサイト、およびコンテンツが不正に表示される可能性がある特定のウェブページには、AdGuard アシスタントのアイコンは表示されません。

**AdGuard Extra**

これは、ブロックされた広告を再度挿入する手法（いわゆる広告ブロッカー回避や広告再投入という技術）への対処法として設計されたカスタム拡張機能です。 どちらも、広告主の間で人気が高まり続けている高度な広告ブロッカー対策手法です。

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard ポップアップブロッカー**

この拡張機能は、ウェブページ閲覧時にポップアップウィンドウが開かないようにしてくれます。 ポップアップの中には、サイト管理のための設定や、リンクをクリックしたときに表示される追加参考情報が含まれているような、役に立つとされるポップアップもたまにあります。 そのため、必要に応じてAdGuard ポップアップブロッカーをオフにすることができます。 また、この拡張機能は、AdGuard の除外リストに追加されたウェブサイトでも機能しません。 デフォルトではオフになっていますが、アプリの設定でオンにすることができます。 You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trustを使って、各ウェブサイトの、ユーザーの意見に基づいた評判を見ることができます。 サイトは、信頼性、安全性など、いくつかの特定の基準によって評価されます。 デフォルトではこの拡張機能はオフになっていますが、アプリの設定でオンにすることができます。 ※AdGuardはこの拡張機能の開発者ではありません。

### ネットワーク

このモジュールはネットワークフィルタリング専用のもので、ネットワーク関連の追加オプションがあります。 Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. これらは、あなたのウェブスペースをより良くフィルタリングするための重要な追加予防措置です。 現在、ほとんどのウェブサイトがHTTPSを使用しており、広告も同様です。 From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![ネットワーク設定 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

このモジュールでは、「HTTPプロキシとしてAdGuardを使用する」チェックボックスをオンにすると、AdGuardを通常のHTTPプロキシとして使用し、通過するすべてのトラフィックをフィルタリングできます。 「EV証明書を持つウェブサイトをフィルタリング」オプションを有効にすることもできます。 EV (Extended Validation) SSL証明書は、ウェブサイトの所有者がEVガイドラインで定義されている国際標準化された徹底的な身元確認プロセスに合格したことを保証します。 これは、このような証明書を持つウェブサイトを信頼してフィルタリングをしないようなユーザーがいる理由でもあります。

最後に、プロキシ設定のセクションがあります。 そこで、AdGuard がフィルタの更新や新バージョンの取得などに使用するプロキシサーバーを指定できます。

### AdGuard VPN

最後のセクションは AdGuard VPN に関するものです。AdGuard VPN は、インターネットを閲覧するたびにセキュリティと匿名性を提供する理想的なツールです。 「ダウンロード」ボタンをクリックしてダウンロードするか、「ホームページ」ボタンをクリックして AdGuard VPN のウェブサイトにアクセスしてください。

そもそも、AdGuard VPN の仕組みは何なのか？ 技術的な詳細は省きますが、VPNは、ユーザーのコンピュータまたはモバイル端末とリモートVPNサーバーの間に安全な暗号化トンネルを作成すると言えます。 これにより、データと個人情報の機密性が保たれるだけでなく、オンライン上の第三者にはユーザーの実際のIPではなく、VPNサーバーのIPアドレスが見えるので、ユーザーの位置情報も隠されます。

**AdGuard VPN の機能:**

- あなたの本当の居場所を隠し、匿名性を保てるようにします。
- IPアドレスを変更することで、トラッキングからデータ・個人情報を保護します。
- トラフィック（通信）を暗号化し、詐欺師やハッカーが通信内容にアクセスできないようにします。
- VPNを使用するとしない場所を設定できます（「VPN対象外リスト「機能）

AdGuard VPN についての詳しい情報は、[AdGuard VPN ナレッジベース](https://adguard-vpn.com/kb/)をご覧ください。
