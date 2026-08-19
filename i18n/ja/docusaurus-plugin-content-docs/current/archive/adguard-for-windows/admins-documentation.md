---
title: 管理者向けドキュメンテーション
sidebar_position: 5
---

このページでは、AdGuard のポリシーと環境設定の一元管理の機能と詳細について説明しています。

## 1. MSIをダウンロードする {#msi-download}

[AdGuard MSI x86 をダウンロード](https://agrd.io/adguard_setup86_msi)

[AdGuard MSI x64 をダウンロード](https://agrd.io/adguard_setup64_msi)

## 2. お使いのネットワーク用の設定を構成する {#settings-configuring}

Active Directoryドメインに参加しているマシンでは、ポリシー設定はレジストリ`HKEY_LOCAL_MACHINE`の下のパスに格納されることができます： `Software\Policies\AdGuard\`

サポートされているポリシーは `LicenseKey` のみです。 このポリシーが設定されている場合、AdGuardは、ユーザーがインターフェイスに入力できる内容よりも、このポリシーを優先します。 このライセンスキーは、ライセンスステータスの確認に使用されます。

## 3. AdGuardサーバーが利用可能であることを確認する {#servers-available}

AdGuardは、`api.adguard.org` と `filters.adtidy.org` という2つのホストに接続します。 両方のサーバーが利用可能であることを確認してください。

## 4. MSIをお使いのネットワークにプッシュする {#msi-push}

通常、SMS またはその他のツールを使用している場合は、他のインストー ルバンドルと同様に、それらを使用して AdGuard MSI をプッシュします。

そうでない場合は、こちらのコマンドを使用して、ターゲットマシンで直接（そしてsilentに）MSIを実行することができます： `Msiexec /q /i AdGuard.msi`

アップデートを展開する必要がある場合は、こちらのコマンドを使用します： `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

これらのコマンドは管理者権限で実行する必要があります。

:::

AdGuard を Windows 7 搭載コンピュータにインストールする場合は、.NET 4 Client Profile がインストールされていることを確認してください: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

AdGuard for Windows を MSI ファイルからインストールした場合、AdGuard は自動的に更新されません。 手動アップデートを許可するには：

- v7.16以降のバージョンでは、レジストリの`HKEY_LOCAL_MACHINE`にある`ForbidCheckUpdates`パラメータを削除するか、その値を`NO`（大文字と小文字の区別なし）に設定します。

- v7.16 以前のバージョンでは、x86 OS の `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` キーまたは x64 OS の `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` キーの `AllowCheckUpdates` パラメータを `YES` (大文字と小文字の区別なし) に設定します。 それ以外の値、またはこのパラメータに値がない場合、自動アップデートは無効になります。

※このようなアプリのインストールや手動アップデートは推奨されておらず、技術的な問題を引き起こす可能性があることにご注意ください。

:::

## 5. インストールをテストする {#installation-test}

ターゲットマシンでAdGuardを起動します。 指定したライセンスが使用されていることを確認するために、ライセンス画面を開いてください。 AdGuardにライセンスキーを検証させるには、「ステータスを更新」をクリックする必要があるかもしれません。
