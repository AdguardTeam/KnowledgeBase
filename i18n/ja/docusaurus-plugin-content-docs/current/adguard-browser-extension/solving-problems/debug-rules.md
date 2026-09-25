---
title: How to debug rules in the MV3 extension
sidebar_position: 2
---

In the [AdGuard Browser Extension MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. これは、拡張機能が「解凍」された形式でない限り、ブラウザが具体的にどの宣言的ルールが使われたかについての詳細を提供しないからです。正確な情報を確認するには、ご自身でブラウザにAdGuardブラウザ拡張機能の「解凍」版をインストールする必要があります。

以下の手順は、拡張機能にバンドルされているルールを静的に変更したいという、問題がある場合のためにも使えます。ほとんどの場合、拡張機能の「_ユーザールール_」を使用すれば十分です。

## 前提条件

1. **Git:** [Git をインストールする](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Node.js をインストールする](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Yarn をインストールする](https://classic.yarnpkg.com/lang/en/docs/install)

## 拡張機能をクローンする方法

1. リポジトリをクローンします:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. ディレクトリに移動します:

   ```bash
   cd AdguardBrowserExtension
   ```

3. `v5.0` ブランチに切り替えます:

   ```bash
   git checkout v5.0
   ```

4. 依存関係をインストールします:

   ```bash
   yarn install
   ```

## 拡張機能のビルド方法

1. `v5.0` ブランチに切り替えます:

   ```bash
   git checkout v5.0
   ```

2. ターミナルで次のコマンドを実行します:

   ```bash
   yarn dev chrome-mv3
   ```

3. For Opera, run `yarn dev opera-mv3` instead — the built extension will
   be located in the `./build/dev/opera-mv3` directory.

4. The built extension will be located in the directory:

   ```bash
   ./build/dev/chrome-mv3
   ```

## ブラウザに解凍版をインストールする方法

1. 開発者モードをオンにします:

   ![Developer mode \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. 「_解凍して読み込む_」をクリックします:

   ![Load unpacked \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. 拡張機能ディレクトリを選択し、「選択」をクリックします:

   ![Select \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

これで完了です。

## ルールをデバッグする方法

1. `.txt` ファイルの `./Extension/filters/chromium-mv3` ディレクトリで必要なルールを見つけて変更します。

2. ルールを txt から宣言形式に変換します:

   ```bash
   yarn convert-declarative
   ```

3. 拡張機能を再度ビルドします:

   ```bash
   yarn dev chrome-mv3
   ```

4. ブラウザで拡張機能を再読み込みします:

   ![Reload extension \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
