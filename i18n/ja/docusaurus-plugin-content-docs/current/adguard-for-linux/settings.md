---
title: 設定と保護機能の管理
sidebar_position: 3
---

## Available commands

すべての AdGuard コマンドをリストの形で確認するには、以下を入力してください：

```sh
adguard-cli --help-all
```

## AdGuard による保護機能をオン・オフにする

### Enable protection

保護を有効にするには、以下を入力します：

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

保護機能をオフにするには、以下を入力します：

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

保護ステータスを表示するには、以下を入力します：

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### フィルタ更新を確認する

更新があるかどうかをチェックするには、以下を入力します：

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

AdGuard for Linux をアップデートするには、以下を入力します：

```sh
adguard-cli update
```

### Update script output

更新スクリプトの出力を表示するには、以下を入力します：

```sh
adguard-cli update -v
```

## AdGuard for Linux を設定する

AdGuard for Linuxを設定するには、`config` コマンドを使用します。 サブコマンドは以下のとおりです：

- `show`: `proxy.yaml` の現在の構成を表示する

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: `proxy.yaml` でオプションを設定する
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: プロキシモード（`manual`または`auto`）

- `get`: 上記オプションの現在の状態を取得する

## フィルターを管理する

AdGuard for Linuxを設定するには、`filters` コマンドを使用します。 サブコマンドは以下のとおりです：

- `list`: インストールされているフィルタ一覧を表示する

    - `--all`: すべてのフィルタを表示

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: フィルタをインストールする （インストールしたいフィルタのURLを入力してください。）

- `enable`: フィルタを有効にする （フィルタの名前またはIDを入力してください。）

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: フィルタを無効にする （フィルタの名前またはIDを入力してください。）

- `update`: フィルタを更新する

## Changing the proxy server listen address in manual proxy mode

By default, the proxy server listens on `127.0.0.1` — the address of the loopback network interface.
There are two ways to make the proxy server listen on a different interface:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Edit the config file directly:
    - To determine the location of the config file, run `adguard-cli config show | grep "Config location"`.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
