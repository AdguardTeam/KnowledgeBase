---
title: インストール・初期設定・削除
sidebar_position: 2
---

## AdGuard for Linux をインストールする方法

AdGuard for Linux  をインストールするには、以下のコマンドを入力してください：

【安定版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

【ベータ版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

【Nightly版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

必要に応じて、管理者パスワードを入力します。

`y` を押すことで `/usr/local/bin` に実行可能ファイルへのリンクを作成し、インストールが完了するまで待ちます。

:::note

AdGuard の公式バージョンであることを証明するには、`gpg` ツールを使用して署名を検証することができます。 [GitHubで詳細を読む](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## ライセンスを有効化する

AdGuard for Linuxをご利用いただくには[AdGuardライセンス](https://adguard.com/license.html)が必要です。 まだライセンスをお持ちでない方は、ログインするかアカウントを作成して14日間の無料トライアルをご利用いただけます。 すでにライセンスをお持ちの場合は、ログインすることで有効化してください。

ログインまたはアカウントを登録するには、以下を入力します：

```
adguard-cli activate
```

ライセンスをリセットするには、以下を入力します：

```
adguard-cli reset-license
```

ライセンス情報を表示するには、以下を入力します：

```
adguard-cli license
```

## 初期設定

AdGuardを稼働させるには、初期設定を完了してください。 これには、AdGuard CA 証明書のインストール、必要なフィルターの有効化、プロキシモードの選択が含まれます。

設定ウィザードを実行するには、以下を入力します：

```
adguard-cli configure
```

## AdGuard for Linux をアンインストールする方法

AdGuard をアンインストールするには、以下のコマンドを入力します：

【安定版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

【ベータ版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

【Nightly版】

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

必要に応じて、管理者パスワードを入力します。
