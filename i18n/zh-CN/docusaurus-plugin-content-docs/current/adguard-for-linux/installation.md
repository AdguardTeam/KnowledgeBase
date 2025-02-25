---
title: 安装、设置和卸载
sidebar_position: 2
---

## 安装 AdGuard Linux 版

要安装 AdGuard，请输入以下命令：

稳定版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta 测试版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly 夜间版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

如果需要，请输入您的管理员密码。

按 `y` 在 `/usr/local/bin` 中创建可执行文件的链接，等待安装完成。

:::note

您可以使用 `gpg` 工具验证签名，以证明这是 AdGuard 的官方版本。 [在 GitHub 上了解详情](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## 激活许可证

Linux 版 AdGuard 需要 [AdGuard 许可证](https://adguard.com/license.html)。 如果您还没有许可证，可以登录或创建账号以获取免费的 14 天试用期。 如果您已有许可证，请登录激活。

要登录或创建账号，请输入以下命令：

```
adguard-cli activate
```

要重置许可证，请输入以下命令：

```
adguard-cli reset-license
```

要查看许可证信息，请输入以下命令：

```
adguard-cli license
```

## 初始设置

要使 AdGuard 正常运行，请完成初始设置。 设置包括安装 AdGuard CA 证书，启用必要的过滤器，并选择代理模式。

要运行配置向导，请输入以下命令：

```
adguard-cli configure
```

## 卸载 AdGuard Linux 版

要卸载 AdGuard，请输入以下命令：

稳定版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta 测试版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly 夜间版

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

如果需要，请输入您的管理员密码。
