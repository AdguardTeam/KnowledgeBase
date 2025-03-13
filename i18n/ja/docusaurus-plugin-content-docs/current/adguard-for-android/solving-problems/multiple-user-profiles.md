---
title: Problems caused by multiple user profiles
sidebar_position: 10
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problems caused by multiple user profiles

On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

To solve this problem, you need to uninstall the application for all users: go to Settings → All apps → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## 制限付きプロファイルが原因の問題

**制限付きプロファイル**（アカウント）のあるAndroid 7以降デバイスの一部（特にSamsung Galaxy S10系端末）で起こる問題です。 このようなプロファイルがある場合、**AdGuard**は、VPNを使用する他アプリケーションと同様に、VPNトラフィックの選択的なフィルタリングに対する制限がかかってしまいます。 その結果、AdGuardは**ローカルVPNモード**での保護を起動できなくなります。 また、この状況の理由の1つは、デバイスで**デュアルアプリ/デュアルメッセンジャー**を使用していることです。 以下に、この問題が発生した場合の対策をまとめました。

### 解決方法

現在対処方法は3つございます（多くの方にとって方法②が一番便利かと思いますが）。

### 【方法①】ADB経由でAdGuardに権限を与える

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. 古いバージョンを使用している場合は、[こちら](https://adguard.com/adguard-android/overview.html)からのNightly最新バージョンを入手できます（もしくはAdGuardアプリ内設定で「アップデートチャンネル」を「Nightly」に切り替えてアプリをアップデートできます）。

:::

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    上記に関してまだご不明やお困りな点ございましたら、[こちら](https://developer.android.com/studio/debug/dev-options)でさらに詳しい手順をご確認ください。


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. **USBケーブル**を使用して**ADB**をインストールしたコンピューターまたはラップトップにAndroidデバイスを接続します。

1. PCで**コマンドライン**を開きます。

    - **Windows**を使用している場合は**Cmd.exe**
    - **macOS**を使用している場合は**ターミナル**

1. `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` というコマンドを入力して**Enter**を押します。これで完了です。

### 【方法②】*制限付きアカウント*を削除する

多くの端末の場合、 [端末設定→詳細設定→複数ユーザー→制限付きプロファイルを削除する]という手順になります。 ユーザーアカウント管理については[こちら](https://support.google.com/a/answer/6223444?hl=en)にてご確認いただけます。

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. これらのケースで問題を解決する方法を以下に記載いたしました。

:::

### 【方法③】*ローカルHTTPプロキシモード*でAdGuardを使用する（ルート権限が必要になります）

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LGとSamsungデバイスの場合

**LG**または**Samsung**端末には「デュアルアプリ」または「デュアルメッセンジャー」機能を使用することにより、制限付きプロファイルが作成され、VPN起動の問題が発生する可能性があります。 この問題を解決するには、**デュアル機能を無効にする**必要があります。

### Samsung

- 端末**設定**を開く
- **高度な設定**をタップ
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- 端末画面オフにして5～10分程度放置する
- 画面のロックを解除し、再度VPNプロファイルの作成を試みてください。

### LG端末

- 端末**設定**を開く
- 「**便利な機能**」を開く（端末によっては「一般」や他のメニュー名称の場合もあります）
- Scroll down and press **Dual App**;
- Remove all apps from the list;
- 端末を再起動する
