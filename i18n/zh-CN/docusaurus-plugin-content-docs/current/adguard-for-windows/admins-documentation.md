---
title: 管理员文档
sidebar_position: 5
---

本页介绍 AdGuard 集中管理组策略首选项设置和详细信息。

## 1. 下载 MSI 分发包 {#msi-download}

Download the [AdGuard MSI x86](https://static.adguard.com/windows/setup86.msi)

Download the [AdGuard MSI x64](https://static.adguard.com/windows/setup64.msi)

## 2. 配置网络设置 {#settings-configuring}

在加入 Active Directory 域名的机器上，策略设置也可以存储在注册表中的 `HKEY_LOCAL_MACHINE` 下的以下路径中：“Software\Policies\AdGuard\”。

唯一支持的策略是 `LicenseKey`。 如果设置策略，AdGuard 将优先考虑用户在界面中输入的内容。 许可证密钥将用于检查许可证状态。

## 3. 确保 AdGuard 服务器可用 {#servers-available}

AdGuard 连接到两个主机：`api.adguard.org` 和 `filters.adtidy.org`。 确保两台服务器都可用。

## 4. 将 MSI 推送到网络 {#msi-push}

如果您通常使用 SMS 或其他工具，请像通常处理任何其他安装包一样将 AdGuard MSI 推出去。

或者，也可以使用此命令直接在目标计算机上（和后台）运行 MSI：`Msiexec /q /i AdGuard.msi`。

要推出更新，请使用此命令：`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`。

:::note

用户必须以管理员权限运行这些命令。

:::

如果要在 Windows 7 计算机上安装 AdGuard，请确保它已安装 .NET 4 客户端配置文件：https://www.microsoft.com/en-us/download/details.aspx?id=24872。

:::note

从 MSI 文件安装的 Windows 版 AdGuard 将无法自动更新。 要允许手动更新，请执行以下操作：

- 在 v7.16 之后发布的版本中，删除`HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` 下注册表中的`ForbidCheckUpdates` 参数或将其值设为`NO`（不区分大小写）。

- 在 v7.16 及更早版本中，将 x86 操作系统中 `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` 密钥或 x64 操作系统中 `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` 密钥的 `AllowCheckUpdates` 参数设置为`YES`（不区分大小写）。 此参数的任何其他数值或无值都将禁用自动更新。

请注意，不建议以此类方式安装应用程序和手动更新，因为可能会导致技术问题。

:::

## 5. 测试安装 {#installation-test}

在目标机器上，启动 AdGuard。 打开许可证屏幕来检查它是否使用指定的许可证。 您可能需要点击「刷新状态」，以便 AdGuard 验证许可证密钥。
