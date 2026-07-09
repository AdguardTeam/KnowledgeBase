---
title: Filtering issues in Chrome 142+ when using the TDI driver
sidebar_position: 14
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

Some AdGuard for Windows users may notice that [the app stops filtering traffic in Chromium-based browsers](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Starting from Google Chrome 142+, browser traffic simply does not appear at the TDI driver level, preventing AdGuard from inspecting or filtering it.

This behavior is not a bug in AdGuard, but a result of recent architectural and security changes in modern browsers.

## 为什么会发生这种情况

Chromium-based browsers (Chrome, Edge, Brave, Vivaldi, etc.) have been strengthening their security architecture. One significant change is moving sensitive internal processes into the [Windows AppContainer sandbox](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), including the Network Service, which handles all browser traffic.

### What changed in Chrome 142

Starting from Chrome 142, the Network Service process is now launched inside AppContainer by default.

When this happens, applications running in an AppContainer do not use the legacy TDI networking interface; instead, their traffic is routed through the more modern WSK (Winsock Kernel) stack. As a result, the TDI driver cannot see, intercept, or process connections that go through WSK, and all browser traffic becomes invisible to the TDI driver used by AdGuard.

This behavior is controlled entirely by Chrome’s sandboxing policies and internal experiments (field trials), not by user settings.

## Why this affects AdGuard

The TDI driver is an outdated Windows technology that has been deprecated and unsupported by Microsoft for many years. 它与浏览器使用的现代隔离和沙箱模型不兼容。

因此，基于 TDI 的流量可见性变得越来越不稳定。 In some browsers, it has already disappeared completely, and it will eventually stop working altogether.

AdGuard already treats the TDI driver as deprecated, and its complete removal is planned as the product evolves.

## 永久解决方案

From v7.22.4, we’ve added experimental support for the SockFilter driver. 它通过解决 WFP 协议栈中的冲突来修复该问题。 [更多信息](/adguard-for-windows/features/network/#sockfilter-and-other-network-drivers)。

使用方法：前往「设置」→「网络」→「流量过滤」，开启流量过滤，并从可用选项列表中选择「SockFilter（实验性）」。

由于该功能仍处于实验阶段，可能存在错误。 如果您发现任何异常、意外或明显故障，**可以在同一位置随时切换回 TDI 或 WFP**。

## 临时解决方案

Certain Windows registry changes can force the browser to stop using AppContainer, causing its processes to run in a non-sandboxed mode again. Network Service stops using the WSK stack and falls back to a network path that the TDI driver can see. 随后 AdGuard 就能重新获得过滤浏览器流量的能力。

### 如何在基于 Chromium 的浏览器里修改注册表

:::warning

编辑注册表需要管理员权限。 不正确的更改可能会影响系统或浏览器的稳定性和安全性。 Always create a backup of the registry branch before modifying it.

Before proceeding, keep in mind that this solution reduces sandbox/AppContainer security, making the browser less isolated. It applies system-wide because it modifies `HKLM`, and should only be used for debugging, temporary workarounds, in controlled environments, or when TDI-based traffic interception is strictly necessary.

它**不应该**被广泛应用于最终用户机器。 **Proceed only if you understand the implications.**

:::

#### Using .reg files

You can apply the necessary registry changes automatically by using one of the pre-generated .reg files below. Each file disables AppContainer/Network Service sandboxing for a specific Chromium-based browser:

- [下载 Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [下载 Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [下载 Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Download Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [下载 Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Download YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

You can revert these changes using the undo .reg files provided below. These files remove the registry branches that were added by the direct version:

- [Undo Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chrome.reg)
- [Undo Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chromium.reg)
- [Undo Edge.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Edge.reg)
- [Undo Brave.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Brave.reg)
- [Undo Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Vivaldi.reg)
- [Undo YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_YandexBrowser.reg)

#### Explicit registry editing

If your browser is not listed, follow the manual instructions below to create the necessary registry entries:

1. Determine its policy branch by checking the vendor’s official documentation or by opening the internal policy page. 在 Chrome 浏览器中，导航到 `chrome://policy`。 其他浏览器使用相似的路径。

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

If the key does not exist, you can create it manually. 以 Chrome 浏览器为例：

- 右键单击 _Policies_ → _新建_ → _项_ 并将其命名为 `Google`
- 在 `Google` 内创建另一个名为 `Chrome` 的项

对 Chromium、Edge、Brave、Vivaldi、Yandex 浏览器等重复相同的逻辑。 You should end up with a key that looks like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. 添加所需的注册表项：

   - 在正确的项中，单击右侧面板 → _新建_ → _DWORD (32 位)值_

   - 将其命名为 `RendererAppContainerEnabled`

   - 双击它并设置：

     - **Value:** 0
     - **Base:** Hexadecimal or Decimal (either is fine)

   - 重复上述过程，并创建第二个 DWORD 值 `NetworkServiceSandboxEnabled`。

   - 设置其值为 0。

   两个参数都必须是 `REG_DWORD` 并且值为 **0**。

2. 关闭浏览器并应用设置。 为确保策略已加载：

   - 完全关闭浏览器
   - Check Task Manager and make sure no processes such as _chrome.exe_, _msedge.exe_, _brave.exe_ remain running
   - 重新打开浏览器

3. Verify that the policies have been applied by opening the policy viewer for your browser.

You should see the following policies active:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

If available, click _Reload policies_.

完成！
