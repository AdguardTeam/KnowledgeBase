---
title: トラッキング防止
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」について書いています。 デバイス全体を保護するこのアプリは[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. また、Cookie（クッキー）をブロックすることもできます。Cookie（クッキー）を使って、ウェブサイトはあなたのブラウザをマークしたり、個人設定やユーザー設定を保存したり、次回訪問時にあなたを識別したりします。

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

各既定レベルの内容は以下の通りです:

1. **スタンダード**

   ① _トラッカー（個人情報追跡）をブロックする_ この機能は、「AdGuard 追跡防止フィルタ」を使用して、オンラインカウンターやウェブ解析ツールからあなたを保護します。

   ② _Ask websites not to track me_. この機能は、[Global Privacy Control](https://globalprivacycontrol.org/)および[Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track)シグナルをあなたが訪問するウェブサイトに送信し、あなたの行動の追跡を無効にするようウェブアプリに要求します。

   ③ _X-Client-Dataヘッダーを削除する_ この機能により、Google Chromeのバージョンや変更に関する情報がGoogleドメイン（DoubleClickやGoogle Analyticsを含む）に送信されるのを防ぎます。

2. **高め**

   ① _トラッカー（個人情報追跡）をブロックする_ この機能は、「AdGuard 追跡防止フィルタ」を使用して、オンラインカウンターやウェブ解析ツールからあなたを保護します。

   ② _URLからトラッキングパラメータを削除する_ この機能は、「AdGuard URL追跡フィルタ」を使用して、ページURLから `utm_*` や `fb_ref` などといったトラッキングパラメータを削除します。

   ③ _Hide search queries_. This feature hides your searches from websites visited through search engine results

   ④ _Ask websites not to track me_. この機能は、[Global Privacy Control](https://globalprivacycontrol.org/)および[Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track)シグナルをあなたが訪問するウェブサイトに送信し、あなたの行動の追跡を無効にするようウェブアプリに要求します。

   ⑤ _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   この機能は、強制的にサードパーティのクッキー（Cookie）有効期限を切らせた後、それらすべてを削除します。 これには、SNSやその他の第三者サービスのログイン用クッキーも含まれますので、 一部のウェブサイトでは定期的に再ログインが必要になったり、その他のクッキー（Cookie）関連問題が発生する場合があります。 トラッキング（追跡）用Cookieのみをブロックするには、「_スタンダード_」保護レベルを使用してください。

   :::

   ⑤ _X-Client-Dataヘッダーを削除する_ この機能により、Google Chromeのバージョンや変更に関する情報がGoogleドメイン（DoubleClickやGoogle Analyticsを含む）に送信されるのを防ぎます。

3. **厳格**

   ① _トラッカー（個人情報追跡）をブロックする_ この機能は、「AdGuard 追跡防止フィルタ」を使用して、オンラインカウンターやウェブ解析ツールからあなたを保護します。

   ② _URLからトラッキングパラメータを削除する_ この機能は、「AdGuard URL追跡フィルタ」を使用して、ページURLから `utm_*` や `fb_ref` などといったトラッキングパラメータを削除します。

   ③ _Hide search queries_. This feature hides your searches from websites visited through search engine results

   ④ _Ask websites not to track me_. この機能は、[Global Privacy Control](https://globalprivacycontrol.org/)および[Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track)シグナルをあなたが訪問するウェブサイトに送信し、あなたの行動の追跡を無効にするようウェブアプリに要求します。

   ⑤ _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   この機能は、強制的にサードパーティのクッキー（Cookie）有効期限を切らせた後、それらすべてを削除します。 これには、SNSやその他の第三者サービスのログイン用クッキーも含まれますので、 一部のウェブサイトでは定期的に再ログインが必要になったり、その他のクッキー（Cookie）関連問題が発生する場合があります。 トラッキング（追跡）用Cookieのみをブロックするには、「_スタンダード_」保護レベルを使用してください。

   :::

   ⑤ _WebRTCをブロックする_ This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   ⑥ _プッシュAPIをブロックする_ This feature blocks push notifications from websites

   ⑦ _位置情報APIをブロックする_ この機能は、ブラウザがあなたのGPSデータにアクセスしてあなたの位置を特定することを防ぎます。

   ⑧ _サードパーティからリファラを隠す_ どのウェブサイトを訪問したりしているのかをサードパーティに知られないようにします。 本来のページのURLを含むHTTPヘッダーを非表示にし、デフォルトヘッダーまたはカスタムヘッダーに置き換えます。（カスタムヘッダーは自分で設定できます）

   ⑨ _Hide User-Agent_. この機能は、から識別情報を削除します。User-Agentヘッダーには通常、ブラウザの名前やバージョン、オペレーティングシステム、言語設定などという情報が含まれています。

   ⑩ _X-Client-Dataヘッダーを削除する_ この機能により、Google Chromeのバージョンや変更に関する情報がGoogleドメイン（DoubleClickやGoogle Analyticsを含む）に送信されるのを防ぎます。

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
