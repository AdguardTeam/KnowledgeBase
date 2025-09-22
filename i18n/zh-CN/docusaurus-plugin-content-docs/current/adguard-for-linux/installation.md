---
title: 安装、设置和卸载
sidebar_position: 2
---

## 安装 AdGuard Linux 版

在电脑上打开命令行窗口。 在 Linux 上，使用键盘快捷键 _Ctrl+Alt+T_。 在 Mac 上，在搜索字段中输入 _Terminal_。

要安装 AdGuard，请选择适合您的版本（稳定版、Beta 测试版或 Nightly 版），并输入相应的命令。

**稳定版**：

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta 测试版**：

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly 夜间版**：

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

如果需要，请输入您的管理员密码。

按 `y` 在 `/usr/local/bin` 中创建可执行文件的链接，等待安装完成。

:::note

您可以使用 `gpg` 工具验证签名，以证明这是 AdGuard 的官方版本。 [在 GitHub 上了解详情](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## 初始设置

Linux 版 AdGuard 需要 [AdGuard 许可证](https://adguard.com/license.html)。 如果您还没有许可证，可以登录或创建账号以获取免费的 14 天试用期。 如果您已有许可证，请登录激活。 要做到这一点，请遵循以下逐步指南：

1. 安装后，请输入以下命令：

   ```sh
   adguard-cli activate
   ```

2. 然后选择所需的选项：

   ![adguard-cli 激活 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. 获得许可证后，请按提供的链接继续激活：

   ![激活许可证 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. 激活后，您可以继续使用该程序：

   ![激活成功 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. 您还可以输入以下命令来重置许可证：

   ```sh
   adguard-cli reset-license
   ```

   或输入以下命令查看许可证信息

   ```sh
   adguard-cli license
   ```

6. 现在需要设置 AdGuard CLI。 要运行配置向导，请输入以下命令：

   ```sh
   adguard-cli configure
   ```

   ![设置 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

   向导会询问初始设置所需的基本问题。

7. 之后，您可以输入以下命令来启动 AdGuard 保护

   ```sh
   adguard-cli start
   ```

   ![启动保护 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. 要查看保护状态，请输入以下命令：

   ```sh
   adguard-cli status
   ```

   用以下命令停止保护：

   ```sh
   adguard-cli stop
   ```

   ![停用保护 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. 要查看当前配置，请键入：

   ```sh
   adguard-cli config show
   ```

   ![当前设置 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

   配置文件的路径也将被显示，您应该编辑它。 它包含所有附加选项的描述。

   或者，您可以使用以下命令：

   ```sh
   adguard-cli config get
   ```

   或者：

   ```sh
   adguard-cli config set
   ```

   它们主要用于脚本。

有关可用命令的更多信息，请查看[设置和保护管理](https://adguard.com/kb/adguard-for-linux/settings/)部分。

## 卸载 AdGuard Linux 版

要卸载 AdGuard，请输入以下命令：

稳定版

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta 测试版

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly 夜间版

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

如果需要，请输入您的管理员密码。
