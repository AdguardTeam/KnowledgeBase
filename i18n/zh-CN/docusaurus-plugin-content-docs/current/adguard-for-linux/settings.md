---
title: 设置和保护管理
sidebar_position: 3
---

要查看所有可用的 AdGuard 命令列表，请输入以下命令：

```
adguard-cli --help-all
```

## 启用和禁用保护

启用保护，请输入以下命令：

```
adguard-cli start
```

禁用保护，请输入以下命令：

```
adguard-cli stop
```

要查看保护状态，请输入以下命令：

```
adguard-cli status
```

## 检查更新

要检查更新，请输入以下命令：

```
adguard-cli check-update
```

要更新 Linux 版 AdGuard，请输入以下命令：

```
adguard-cli update
```

要查看更新脚本的输出，请输入以下命令：

```
adguard-cli update -v
```

## 配置 AdGuard Linux 版

使用 `config` 命令配置 Linux 版 AdGuard。 子命令：

- `show`：显示 `proxy.yaml` 中的当前配置
- `set`：在 `proxy.yaml` 中配置选项
    - `listen_ports.http_proxy`：HTTP 协议监听端口
    - `proxy_mode`：代理模式（`manual` 或 `auto`)
- `get`：获取上述选项的当前状态

## 管理过滤器

使用 `filters` 命令配置 Linux 版 AdGuard。 子命令：

- `list`：列出已安装的过滤器
    - `--all`：查看所有过滤器
- `install`：安装过滤器。 请输入您要安装的过滤器 URL
- `enable`：启用过滤器。 输入过滤器的名称或 ID
- `disable`：禁用过滤器。 输入过滤器的名称或 ID
- `update`：更新过滤器
