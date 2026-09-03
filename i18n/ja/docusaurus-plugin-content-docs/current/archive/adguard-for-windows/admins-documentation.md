---
title: 管理者向けドキュメンテーション
sidebar_position: 5
---

このページでは、AdGuard のポリシーと環境設定の一元管理の機能と詳細について説明しています。

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. このポリシーが設定されている場合、AdGuardは、ユーザーがインターフェイスに入力できる内容よりも、このポリシーを優先します。 このライセンスキーは、ライセンスステータスの確認に使用されます。

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. 両方のサーバーが利用可能であることを確認してください。

## 4. Push the MSI out to your network {#msi-push}

通常、SMS またはその他のツールを使用している場合は、他のインストー ルバンドルと同様に、それらを使用して AdGuard MSI をプッシュします。

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

これらのコマンドは管理者権限で実行する必要があります。

:::

AdGuard を Windows 7 搭載コンピュータにインストールする場合は、.NET 4 Client Profile がインストールされていることを確認してください: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

AdGuard for Windows を MSI ファイルからインストールした場合、AdGuard は自動的に更新されません。 手動アップデートを許可するには：

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. それ以外の値、またはこのパラメータに値がない場合、自動アップデートは無効になります。

※このようなアプリのインストールや手動アップデートは推奨されておらず、技術的な問題を引き起こす可能性があることにご注意ください。

:::

## 5. Test your installation {#installation-test}

ターゲットマシンでAdGuardを起動します。 指定したライセンスが使用されていることを確認するために、ライセンス画面を開いてください。 AdGuardにライセンスキーを検証させるには、「ステータスを更新」をクリックする必要があるかもしれません。
