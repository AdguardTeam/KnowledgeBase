---
title: macOS High Sierra以降に AdGuard をインストールする方法
sidebar_position: 3
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

During the installation of AdGuard on macOS High Sierra (or later), you may receive the message "System Extension Blocked". This is a new security mechanism introduced in High Sierra that requires you to explicitly allow the installation of a third-party system extension.

To complete the installation of AdGuard you have to manually allow loading the extension by clicking the "Allow" button in *System Preferences* → *Security & Privacy* → *General*.

On macOS Sequoia, you can do it in *System Preferences* → *Security & Privacy* → *General* → *Login Items & Extensions*. Once there, click the "i" icon next to *Network Extensions* and toggle the AdGuard option.

![設定で拡張機能のインストールを許可する](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/highsierra.png)

After that you will be able to proceed with the installation as usual.
