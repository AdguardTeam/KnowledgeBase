---
title: 管理员文档
sidebar_position: 5
---

本页介绍 AdGuard 集中管理组策略首选项设置和详细信息。

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. 如果设置策略，AdGuard 将优先考虑用户在界面中输入的内容。 许可证密钥将用于检查许可证状态。

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. 确保两台服务器都可用。

## 4. Push the MSI out to your network {#msi-push}

如果您通常使用 SMS 或其他工具，请像通常处理任何其他安装包一样将 AdGuard MSI 推出去。

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

用户必须以管理员权限运行这些命令。

:::

如果要在 Windows 7 计算机上安装 AdGuard，请确保它已安装 .NET 4 客户端配置文件：https://www.microsoft.com/en-us/download/details.aspx?id=24872。

:::note

从 MSI 文件安装的 Windows 版 AdGuard 将无法自动更新。 要允许手动更新，请执行以下操作：

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. 此参数的任何其他数值或无值都将禁用自动更新。

请注意，不建议以此类方式安装应用程序和手动更新，因为可能会导致技术问题。

:::

## 5. Test your installation {#installation-test}

在目标机器上，启动 AdGuard。 打开许可证屏幕来检查它是否使用指定的许可证。 您可能需要点击「刷新状态」，以便 AdGuard 验证许可证密钥。
