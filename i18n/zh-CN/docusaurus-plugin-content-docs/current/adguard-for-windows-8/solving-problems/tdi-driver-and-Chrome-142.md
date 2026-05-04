---
title: Chrome 142+ 中使用 TDI 驱动时出现的过滤问题
sidebar_position: 1
---

:::info

本文适用于 Windows 版的 AdGuard v8.0，一款全面的广告拦截器，可在系统层面保护您的设备。 这是一个仍在开发中的 Beta 测试版本。 要试用，请下载 [适用于 Windows 的 AdGuard 测试版](https://agrd.io/windows_beta)。

:::

部分 AdGuard Windows 版用户可能会注意到，[应用在 Chromium 内核浏览器中停止过滤流量](https://github.com/AdguardTeam/AdguardForWindows/issues/5771)。 从 Google Chrome 142+ 开始，浏览器流量根本不会出现在 TDI 驱动层面，导致 AdGuard 无法检测或过滤这些流量。

此行为并非 AdGuard 的缺陷，而是现代浏览器近期架构和安全变更的结果。

## 为什么会发生这种情况

Chromium 内核浏览器（Chrome、Edge、Brave、Vivaldi 等） 一直在加强其安全架构。 一个显著变化是将敏感的内部进程移入 [Windows AppContainer Sandbox](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation)，其中包括处理所有浏览器流量的网络服务（Network Service）。

### Chrome 142 中发生了什么变化

从 Chrome 142 开始，网络服务进程默认在 AppContainer 内启动。

当这种情况发生时，在 AppContainer 中运行的应用程序不会使用传统的 TDI 网络接口；其流量会通过更现代的 WSK（Winsock 内核）协议栈进行路由。 因此，TDI 驱动无法看到、拦截或处理经过 WSK 的连接，所有浏览器流量对 AdGuard 所使用的 TDI 驱动变得不可见。

此行为完全由 Chrome 的沙箱策略和内部实验控制，而非用户设置。

## 为什么会影响到 AdGuard

TDI 驱动是一项过时的 Windows 技术，已被微软弃用且多年不再支持。 它与浏览器使用的现代隔离和沙箱模型不兼容。

因此，基于 TDI 的流量可见性变得越来越不稳定。 在某些浏览器中，它已经彻底消失，最终将完全失效。

AdGuard 已将 TDI 驱动标记为过时，并计划在产品演进过程中彻底移除它。

## 永久解决方案

从 v8.0 RC 版本开始，我们增加了对 SockFilter 驱动的实验性支持。 它通过解决 WFP 协议栈中的冲突来修复该问题。 [更多信息](/adguard-for-windows-8/settings/app-settings/network-settings/)。

使用方法：前往「设置」→「网络」→「流量过滤」，开启流量过滤，并从可用选项列表中选择「SockFilter（实验性）」。

由于该功能仍处于实验阶段，可能存在错误。 如果您发现任何异常、意外或明显故障，**可以在同一位置随时切换回 TDI 或 WFP**。

## 临时解决方案

某些 Windows 注册表修改可以强制浏览器停止使用 AppContainer，使其进程再次以非沙箱模式运行。 网络服务将停止使用 WSK 协议栈，回退到 TDI 驱动能够看到的网络路径。 随后 AdGuard 就能重新获得过滤浏览器流量的能力。

### 如何在基于 Chromium 的浏览器里修改注册表

:::warning

编辑注册表需要管理员权限。 不正确的更改可能会影响系统或浏览器的稳定性和安全性。 修改前务必备份注册表分支。

在继续之前，请记住此解决方案会降低沙箱/AppContainer 的安全性，使浏览器的隔离性变弱。 由于修改的是 `HKLM`，它将影响整个系统，只应出于调试、临时工作区、受控环境或必须使用基于 TDI 的流量拦截时使用。

它**不应该**被广泛应用于最终用户机器。 **请确保您理解其影响后再继续**。

:::

您可以使用下方预生成的 .reg 文件之一自动应用所需的注册表更改。 每个文件为特定的 Chromium 内核浏览器禁用 AppContainer/网络服务沙箱：

- [下载 Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [下载 Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [下载 Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [下载 Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [下载 Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [下载 YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

如果您的浏览器未在列表中，请按照下方手动说明创建必要的注册表项：

1. 确定其策略分支：查阅浏览器的官方文档，或打开内部策略页面。 在 Chrome 浏览器中，导航到 `chrome://policy`。 其他浏览器使用相似的路径。

2. 确定您的浏览器的正确的注册表分支。 不同的基于 Chromium 的浏览器在 `HKLM` 下使用不同的策略路径。 它应遵循 `HKLM\SOFTWARE\Policies\<Vendor>\<Product>` 的模式。

3. 打开注册表编辑器：

   - 按下 _Win + R_
   - 输入 _regedit_ 并按下 _Enter_
   - 以管理员身份运行程序，批准 UAC 提示

4. 备份策略分支：

   - 在左侧面板中，导航到 `HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies`
   - 右键单击 _Policies_ → _导出_
   - 保存文件为 _Policies_backup.reg_

   如果出现问题，您可以通过双击此文件来还原备份。

5. 导航到您的浏览器的策略项：

   - 展开路径 `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_。
   - 找到与您的浏览器对应的文件夹。

如果该项不存在，可以手动创建它。 以 Chrome 浏览器为例：

- 右键单击 _Policies_ → _新建_ → _项_ 并将其命名为 `Google`
- 在 `Google` 内创建另一个名为 `Chrome` 的项

对 Chromium、Edge、Brave、Vivaldi、Yandex 浏览器等重复相同的逻辑。 最终应得到一个形如 `HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\<Vendor>\\<Product>` 的项。

1. 添加所需的注册表项：

   - 在正确的项中，单击右侧面板 → _新建_ → _DWORD (32 位)值_

   - 将其命名为 `RendererAppContainerEnabled`

   - 双击它并设置：

     - **值**：0
     - **基数**：十六进制或十进制（两者均可）

   - 重复上述过程，并创建第二个 DWORD 值 `NetworkServiceSandboxEnabled`。

   - 设置其值为 0。

   两个参数都必须是 `REG_DWORD` 并且值为 **0**。

2. 关闭浏览器并应用设置。 为确保策略已加载：

   - 完全关闭浏览器。
   - 检查任务管理器，确保没有 _chrome.exe_、_msedge.exe_、_msedge.exe_ 等进程仍在运行。
   - 重新打开浏览器

3. 打开浏览器的策略查看器，验证策略已应用。

您您应该看到以下策略生效：

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

如果可用，点击「重新加载策略」。

完成！
