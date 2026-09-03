---
title: DNSリークの可能性
sidebar_position: 10
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

AdGuard for Windowsでは、クエリを解決するために、システムDNSサーバーの代わりにDNSサーバーアドレスを指定することができます。（システムDNSサーバーは、システム設定で上書きされていない場合、インターネットプロバイダによって提供されます。） デフォルトでないDNSサーバーを使うことで、インターンシッププロバイダーの傍受からDNSトラフィックを守ることができます。 さらに、暗号化および/またはフィルタリングDNSサーバーを選択することで、悪質業者や迷惑な広告からの保護機能を得ることができます。

多くの AdGuard for Windows ユーザーは、DNS保護機能を高く評価してくれています。 しかし、次のような問題が発生していることもあります。https://ipleak.net/ のようなウェブサイトをチェックすると、リクエストは選択したDNSサーバーではなく、デフォルトのDNSサーバーによって処理されていることがわかります。 本記事では、なぜこのようなことが起こるのか、またそれを回避する方法を説明します。

## bootstrap DNSアドレス

DNS サーバーのアドレスは、IP またはドメイン名として記述できます。
IPアドレスの場合、AdGuardはDNS保護モジュールで指定されたサーバーにDNSリクエストを直接転送しますので、問題はありません。 しかし、DoTやDoHのような暗号化されたDNSサーバーアドレスは、ドメイン名として記述されることがほとんどです。 この場合、最初に暗号化されたDNSサーバーアドレスを解決するために、AdGuardはデフォルトでシステムDNSサーバーにDNSクエリを送信します。 この接続を、チェックサービスがリークと認識してしまうものです。

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## フォールバックDNSサーバー

インターネット接続が弱い、デフォルトで設定されているタイムアウトの期限切れ、またはサーバー関連の問題のために、AdGuardが指定されたサーバーに到達できないことがあります。 この場合、デフォルトではシステムDNSサーバーであるフォールバックサーバーに、AdGuardは接続します。 この接続もチェックサービスによってリークとして認識されます。

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

もしくは

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

もしくは

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- 任意の大きな数値を入力します。
