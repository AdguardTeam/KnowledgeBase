---
title: 設定
sidebar_position: 4
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」についてです。 デバイス全体を保護するこのアプリは、[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

「設定」画面は、画面下部の右端の⚙アイコンをタップすることとアクセスできます。 このセクションには、各種設定、アプリ・ライセンス・サブスクリプション に関する情報、各種サポート資料が含まれています。

## 一般設定

このセクションでは、アプリの外観や動作を管理することができます。カラーテーマや言語を変更したり、通知を設定したりすることが可能です。 AdGuardチームがアプリのクラッシュを検出し、ユーザビリティを調査するのを支援したい場合は、「クラッシュを自動報告する」と「技術的情報とインタラクション情報を送信する」をオンにできます。

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

「アプリとフィルタのアップデート」では、フィルタの自動更新を設定し、アプリのアップデートチャネルを選択できます。 一般使用向けの安定したバージョンのアップデートを受け取るには「安定版」チャネル、新機能への早期アクセスしたい場合には 「ベータ版」または「Nightly」チャネルを選択してください。

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 詳細設定

「自動化」オプションを使用すると、Tasker アプリを介して AdGuard を管理できます。

「ウォッチドッグ（Watchdog）」は、AdGuard がシステムによって無効化されるのを防ぎます ([Android のバッテリー節約モードについてもお読みください](/adguard-for-android/solving-problems/background-work/))。 入力した値は、ウォッチドッグチェック間の間隔 (秒単位) になります。

「ログ・レベル」は、アプリの操作に関するどのデータをログに記録するかを定義します。 「デフォルト」レベルでは、アプリはイベントに関するデータを収集します。 「デバッグ」レベルでは、より多くのイベントがログに記録されます。AdGuard チームから問題をより深く理解するために有効にするよう依頼されましたら、これを有効にしてください。 [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

「ローレベル設定」セクションは上級者ユーザー向けです。 [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## フィルタリング

このセクションでは、HTTPSフィルタリング設定、フィルタ、ユーザースクリプトを管理し、プロキシサーバーを設定することができます。

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### フィルタ

AdGuard は、フィルタのルールを適用することで、広告、トラッカー（追跡）、迷惑なコンテンツをブロックします。 「AdGuardによる保護」セクションにある機能のほとんどは、[AdGuard フィルタ](/general/ad-filtering/adguard-filters/#adguard-filters) を使って動いています。 例えば、「基本的な保護」を有効にすると、「AdGuard ベースフィルタ」と「AdGuard モバイル広告フィルタ」が自動的にオンになります。 逆もまた同様で、両方のフィルタをオフにすると、「基本的な保護」も無効になります。

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

デフォルトで有効になっているフィルタは、AdGuard が普通に動作するのに十分です。 しかし、広告ブロックをカスタマイズしたい場合は、他のAdGuardフィルタやサードパーティのフィルタを使用することができます。 既存のフィルタを追加で有効にするには、フィルタのカテゴリを選択し、必要なフィルタを選んでオンにします。 カスタムフィルタを追加するには、[_カスタムフィルタ_] → [_カスタムフィルターを追加する_] をタップし、フィルタの URL またはファイルパスを入力します。

:::note

多くのフィルタを有効にしすぎると、一部のウェブサイトが正しく動作しなくなることがありますので、有効フィルタの数にはご注意ください。

:::

[フィルタについてもっと読む](https://adguard.com/en/blog/what-are-filters.html)

### 拡張機能

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### ネットワーク

#### HTTPSフィルタリング

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. 必要であれば、「_EV証明書を持つウェブサイトをフィルタリング_」オプションを有効にすることができます。

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## ライセンス

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## サポート

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
