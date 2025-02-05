---
title: ルート化されたデバイス
sidebar_position: 7
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」についてです。 デバイス全体を保護するこのアプリは、[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

Android OSのセキュリティ対策により、AdGuardの一部の機能はroot化されたデバイスでのみ利用可能です。 そういった機能は以下の通りです:

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- Androidのシステム全体のトラフィックフィルタリングの制限により、[**自動プロキシ**ルーティングモード](/adguard-for-android/features/settings#routing-mode)にはルートアクセスが必要です。
- Android 10以降では、[**手動プロキシ**ルーティングモード](/adguard-for-android/features/settings#routing-mode)にルートアクセスが必要です。AdGuardによってフィルタリングされた接続に関連付けられたアプリの名前を特定できなくなったためです。
