---
title: DNS通信を保護
sidebar_position: 4
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」について書いています。 デバイス全体を保護するこのアプリは[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

この機能は、「AdGuardによる保護」タブ（画面下部バーメニューで左から2番目の盾アイコン） → 「DNS通信を保護」にあります。

:::tip

「DNS通信を保護」は、通常の広告やトラッカーのブロック機能とは異なる動作をします。 You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

「DNS通信を保護」機能で、選択したDNSサーバー、DNSフィルタ、およびユーザールールを使って、DNSリクエストをフィルタリングすることができます:

- DNSサーバーの中には、潜在的に有害なドメインへのDNSリクエストをブロックするためのブロックリストを備えているものがあります。

- DNSサーバーに加えて、AdGuard は専用のDNSフィルタというものを使用して、DNSリクエストを独自にフィルタリングできます。 DNSフィルタには広告やトラッキング（追跡）ドメインの大規模なリストが含まれており、それらへのリクエストはブラックホールサーバーにリルートされることで遮断されます。

- また、DNSユーザールールを作成することで、ドメインをブロックしたり、ブロック解除したりすることもできる。 [こちらのDNSフィルタリングルールの構文](https://adguard-dns.io/kb/general/dns-filtering-syntax/)を参照してください。

![DNS 通信を保護 \*mobile\_border](https://cdn.adtidy.org/blog/new/9htftScreenshot_20230621-163736_AdGuard.jpg?mw=1360)

#### DNSサーバー

このセクションでは、DNSリクエストを解決し、広告やトラッカーをDNSレベルでブロックし、DNS通信を暗号化するためにDNSサーバーを選択することができます。 サーバーをタップして詳細な説明を読むことができ、プロトコルを選択します。 使いたいDNSサーバーが見つからなかった場合は、手動でDNSサーバーを追加することができます:

- 「DNSサーバーを追加する」をタップし、DNSサーバーのアドレスを入力します。

- または、[既知のDNSプロバイダーのリスト](https://adguard-dns.io/kb/general/dns-providers/)からDNSサーバーを選択し、その横にある「AdGuardnに追加する」をタップすることもできます。

- プライベート AdGuard DNSサーバー をご利用の場合は、[そのダッシュボード](https://adguard-dns.io/dashboard/)から AdGuard for Android アプリにサーバーを追加できます。

デフォルトでは、「自動DNS」が選択されています。 この場合、AdGuard とデバイスの設定に基づき、DNSサーバーを自動で選択します。 [AdGuard VPNとの併用モード](/adguard-for-android/features/integration-with-vpn)または他のSOCKS5プロキシを有効にしている場合、「AdGuard DNS フィルタリングなし」または指定した他のサーバーに接続します。 それ以外の場合は、デバイスの設定で選択したDNSサーバーに接続します。

#### DNSフィルタ

このセクションでは、カスタムDNSフィルタとDNSフィルタリングルールを追加できます。 [filterlists.com](https://filterlists.com)で様々なフィルタを見つけることができます。
