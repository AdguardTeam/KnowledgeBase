---
title: 设置和保护管理
sidebar_position: 3
---

## 可用的命令

要查看所有可用的 AdGuard 命令列表，请输入以下命令：

```sh
adguard-cli --help-all
```

## 启用和禁用保护

### 启用保护

启用保护，请输入以下命令：

```sh
adguard-cli start
```

此命令尝试配置对代理的重定向。

![启动保护 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### 停用保护

禁用保护，请输入以下命令：

```sh
adguard-cli stop
```

此命令不仅停用代理，而且还停止流量重定向到代理。

### 检查保护状态

要查看保护状态，请输入以下命令：

```sh
adguard-cli status
```

![状态/停用保护 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## 更新

### 检查更新

要检查更新，请输入以下命令：

```sh
adguard-cli check-update
```

### 更新 AdGuard Linux 版

要更新 Linux 版 AdGuard，请输入以下命令：

```sh
adguard-cli update
```

### 更新脚本输出

要查看更新脚本的输出，请输入以下命令：

```sh
adguard-cli update -v
```

## 配置 AdGuard Linux 版

使用 `config` 命令配置 Linux 版 AdGuard。 子命令：

- `show`：显示 `proxy.yaml` 中的当前配置

  ![当前设置 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`：在 `proxy.yaml` 中配置选项
  - `listen_ports.http_proxy`：HTTP 协议监听端口
  - `proxy_mode`：代理模式（`manual` 或 `auto`)

- `get`：获取上述选项的当前状态

## 管理过滤器

使用 `filters` 命令配置 Linux 版 AdGuard。 子命令：

- `list`：列出已安装的过滤器

  - `--all`：查看所有过滤器

  ![过滤列表 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`：安装过滤器。 请输入您要安装的过滤器 URL

- `enable`：启用过滤器。 输入过滤器的名称或 ID

  ![启用过滤器 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`：禁用过滤器。 输入过滤器的名称或 ID

- `update`：更新过滤器

## 在手动代理模式下更改代理服务器监听地址

默认情况下，代理服务器监听 `127.0.0.1`（循环网络接口的地址）。
有两种方法可以让代理在不同的界面上侦听：

1. 运行 `adguard-cli config set listen_address <address>`，其中`<address>` 是要监听的地址。
2. 编辑配置文件：
   - 要确定配置文件的位置，请运行 `adguard-cli config show | grep "Config location"`。
   - 查找 `listen_address` 键并相应设置其值。 要在所有可用网络接口上监听，请将监听地址设置为 `0.0.0.0` 或 `::`。

若监听地址设置为除 `127.0.0.1` 之外的任何值，则需启用代理客户端认证。 AdGuard CLI 不会启动，除非配置代理认证：

- 当执行 `adguard-cli config set listen_address <address>` 且 `<address>` 不为 `127.0.0.1` 时，若未配置代理认证，AdGuard CLI 将提示输入用户名和密码。
- 编辑配置文件时，请查找 `listen_auth` 键。 将 `enabled` 子键设置为 `true`，并将 `username` 和 `password` 设置为非空值。

## Configure outbound proxy

You can configure `outbound_proxy` if you want AdGuard CLI to work through another proxy server.

There are two ways to configure it:

### 1. Configure via URL (recommended)

Instead of setting each option step by step, you can set all parameters in a single line using a URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Supported modes are HTTP, HTTPS, SOCKS4, and SOCKS5.

:::

You can also quickly enable or disable `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Or quickly clear the settings:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Configure individual parameters

The ability to adjust specific parameters is also available:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Disable certificate verification for HTTPS proxies:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Enable SOCKS5 proxy for UDP traffic:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

If your SOCKS5 proxy does not support UDP, connections may fail.

:::

## Per-app AdGuard CLI configuration

Users often need to enable filtering manually for certain browsers. AdGuard for Linux supports **per-app configuration**, allowing you to apply settings or rules individually to each application instead of system-wide.

For details, refer to the `apps` section in `proxy.yaml`.

A set of pre-configured entries for popular web browsers is included by default in `browsers.yaml`.

### Checking the current configuration

To view the current `outbound_proxy` configuration, enter:

```sh
adguard-cli config show outbound_proxy
```

:::info 兼容性

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::
