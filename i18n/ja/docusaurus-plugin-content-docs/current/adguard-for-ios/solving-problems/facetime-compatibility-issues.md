---
title: How to avoid compatibility issues with FaceTime
sidebar_position: 3
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for iOS」について書いています。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

「Full-Tunnel」モードは、他のVPNアプリケーションとの互換性だけでなく、FaceTimeとのAdGuard互換性も阻害する可能性があることが判明しております。

一部のユーザーは、iOS用AdGuardアプリが「Full-Tunnel」モードの場合、デバイス上でFaceTimeが機能しないという問題に遭遇しています。

AdGuardが「Full-Tunnel（VPNアイコンなし）」モードになっている場合、FaceTimeが動作する可能性は高いですが、１００％安定した動作は保証できません。

**AdGuard使用時にFaceTimeを使用し、ビデオ/オーディオ通話が停止しないようにするには、「Split-Tunnel」モードに切り替えてください。（※この不具合は、「DNS通信を保護」がオンの場合にのみ発生します。）**

![Tunnelモード画面 *mobile](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ja/iOS/tunnel-mode.png?!)

【「Split-Tunnel」モードに切り替える方法】

1. Go to AdGuard for iOS *Settings* → *General settings*.
2. 「*高度な設定モード*」のスイッチをオンにして、その下に現れる「*詳細設定*」をタップ
3. *Tunnelモード* → *Split-Tunnel* を選択してください。

完了です！ これで、FaceTimeの互換性に問題はないはずです。
