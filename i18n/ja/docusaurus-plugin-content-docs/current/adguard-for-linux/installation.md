---
title: インストール・初期設定・削除
sidebar_position: 2
---

## AdGuard for Linux をインストールする方法

Open the command line on your computer. On Linux, use the keyboard shortcut _Ctrl+Alt+T_. On Mac, type _Terminal_ in the search field.

To install AdGuard, choose the version that better suits you (release, beta, or nightly) and enter the respective command.

**Release**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

必要に応じて、管理者パスワードを入力します。

`y` を押すことで `/usr/local/bin` に実行可能ファイルへのリンクを作成し、インストールが完了するまで待ちます。

:::note

AdGuard の公式バージョンであることを証明するには、`gpg` ツールを使用して署名を検証することができます。 [GitHubで詳細を読む](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## 初期設定

AdGuard for Linuxをご利用いただくには[AdGuardライセンス](https://adguard.com/license.html)が必要です。 If you don’t have a license yet, you can log in or create an account to get a free 14-day trial. すでにライセンスをお持ちの場合は、ログインすることで有効化してください。 To do it, follow this step-by-step guide:

1. After installation, enter:

   ```sh
   adguard-cli activate
   ```

2. Then select the desired option:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/1activate.png)

3. Once you have a license, follow the provided link to proceed with the activation:

   ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/2activate_link.png)

4. After activation, you can continue to work with the program:

   ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/3activate_success.png)

5. You can also reset your license by entering:

   ```sh
   adguard-cli reset-license
   ```

   or  view the license info by entering

   ```sh
   adguard-cli license
   ```

6. Now you need to set up AdGuard CLI. 設定ウィザードを実行するには、以下を入力します：

   ```sh
   adguard-cli configure
   ```

   ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/4configure.png)

   The wizard will ask basic questions required for the initial setup.

7. After that, you can start the AdGuard protection by entering

   ```sh
   adguard-cli start
   ```

   ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/5start.png)

8. 保護ステータスを表示するには、以下を入力します：

   ```sh
   adguard-cli status
   ```

   保護機能を止めるには、以下を入力します：

   ```sh
   adguard-cli stop
   ```

   ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

9. 現在の構成を確認するには、以下のように入力します：

   ```sh
   adguard-cli config show
   ```

   ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

   構成ファイルへのパスも表示されます。これは直接編集可能で編集すべきです。 すべての追加オプションの説明が含まれています。

   代替として、以下のコマンドを使用できます：

   ```sh
   adguard-cli config get
   ```

   もしくは:

   ```sh
   adguard-cli config set
   ```

   ただし、これらは主にスクリプティングのために設計されています。

利用可能なコマンドに関する詳細情報は、[設定と保護の管理](https://adguard.com/kb/adguard-for-linux/settings/)セクションを確認してください。

## AdGuard for Linux をアンインストールする方法

AdGuard をアンインストールするには、以下のコマンドを入力します：

【安定版】

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

【ベータ版】

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

【Nightly版】

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

必要に応じて、管理者パスワードを入力します。
