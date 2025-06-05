---
title: 设置和保护管理
sidebar_position: 3
---

## Available commands

要查看所有可用的 AdGuard 命令列表，请输入以下命令：

```sh
adguard-cli --help-all
```

## 启用和禁用保护

### Enable protection

启用保护，请输入以下命令：

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

禁用保护，请输入以下命令：

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

要查看保护状态，请输入以下命令：

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### 检查更新

要检查更新，请输入以下命令：

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

要更新 Linux 版 AdGuard，请输入以下命令：

```sh
adguard-cli update
```

### Update script output

要查看更新脚本的输出，请输入以下命令：

```sh
adguard-cli update -v
```

## 配置 AdGuard Linux 版

使用 `config` 命令配置 Linux 版 AdGuard。 子命令：

- `show`：显示 `proxy.yaml` 中的当前配置

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`：在 `proxy.yaml` 中配置选项
    - `listen_ports.http_proxy`：HTTP 协议监听端口
    - `proxy_mode`：代理模式（`manual` 或 `auto`)

- `get`：获取上述选项的当前状态

## 管理过滤器

使用 `filters` 命令配置 Linux 版 AdGuard。 子命令：

- `list`：列出已安装的过滤器

    - `--all`：查看所有过滤器

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`：安装过滤器。 请输入您要安装的过滤器 URL

- `enable`：启用过滤器。 输入过滤器的名称或 ID

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`：禁用过滤器。 输入过滤器的名称或 ID

- `update`：更新过滤器

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
