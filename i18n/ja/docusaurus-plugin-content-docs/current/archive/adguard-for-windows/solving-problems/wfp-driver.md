---
title: WFPドライバー
sidebar_position: 1
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

ネットワークトラフィックをフィルタリングするために、AdGuardはネットワークドライバを使用します。 TDIドライバーとWFPドライバーという2つがあります。 WFPドライバは一般的に好ましく、すべての新しいWindows OSバージョン（Windows 8以降）でデフォルトで有効になっていますが、互換性問題（特に一部のウイルス対策ソフトとの互換性問題）を引き起こす可能性があります。 このような問題やその後のエラーは、それぞれのケースで大きく異なる可能性があります。

これが原因ではないかと思われる問題が発生した場合は、いつでも、より古いながらも安定しているTDIネットワークドライバーに切り替えることができます。 その方法は以下の通りです:

1. Go to _Settings → Network_.

2. 画像のように、WFPドライバーを無効にします:

![WFP driver \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
