---
title: Tor Browserでのフィルタリングを設定する方法
sidebar_position: 10
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

デフォルトでは、Tor BrowserはAdGuardの「フィルタリングされるアプリ」リストに追加されます。 しかし、Torをフィルタリングするためには、AdGuardはTorのセキュリティ設定を変更する必要がある。 変更することにより、TorはAdGuardのCA証明書を信頼するようになります。

Torをフィルタリングすることにして、 「*設定*」→「*ネットワーク*」→「*アプリ…*」でTorにチェックを入れると、AdGuardは以下のダイアログボックスを表示します:

![AdGuardダイアログボックス](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Torの設定を更新することで、AdGuardは以下を設定します:

`security.enterprise_roots.enabled`: true

この設定により、Torはルート証明書を信頼するようになります。 [詳しくはこちら](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)。

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning は、ウェブサイトとユーザー間の接続が正当であることを保証するためのセキュリティ対策です。 これは、なかでもウェブサイトが信頼する公開キー（pin）のリストを公開することで実現されます。 enforcement levelを「1」に設定すると、カスタム CA に対してpinningは実施されなくなります。 [詳しくはこちら](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)。

変更を適用するには、Tor Browserを再起動してください。

※これらの設定を手動で変更した場合、Torフィルタリングは停止されます。
