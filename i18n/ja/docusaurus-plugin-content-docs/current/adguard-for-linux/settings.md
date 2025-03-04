---
title: 設定と保護機能の管理
sidebar_position: 3
---

すべての AdGuard コマンドをリストの形で確認するには、以下を入力してください：

```
adguard-cli --help-all
```

## AdGuard による保護機能をオン・オフにする

保護を有効にするには、以下を入力します：

```
adguard-cli start
```

保護機能をオフにするには、以下を入力します：

```
adguard-cli stop
```

保護ステータスを表示するには、以下を入力します：

```
adguard-cli status
```

## フィルタ更新を確認する

更新があるかどうかをチェックするには、以下を入力します：

```
adguard-cli check-update
```

AdGuard for Linux をアップデートするには、以下を入力します：

```
adguard-cli update
```

更新スクリプトの出力を表示するには、以下を入力します：

```
adguard-cli update -v
```

## AdGuard for Linux を設定する

AdGuard for Linuxを設定するには、`config` コマンドを使用します。 サブコマンドは以下のとおりです：

- `show`: `proxy.yaml` の現在の構成を表示する
- `set`: `proxy.yaml` でオプションを設定する
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: プロキシモード（`manual`または`auto`）
- `get`: 上記オプションの現在の状態を取得する

## フィルターを管理する

AdGuard for Linuxを設定するには、`filters` コマンドを使用します。 サブコマンドは以下のとおりです：

- `list`: インストールされているフィルタ一覧を表示する
    - `--all`: すべてのフィルタを表示
- `install`: フィルタをインストールする （インストールしたいフィルタのURLを入力してください。）
- `enable`: フィルタを有効にする （フィルタの名前またはIDを入力してください。）
- `disable`: フィルタを無効にする （フィルタの名前またはIDを入力してください。）
- `update`: フィルタを更新する
