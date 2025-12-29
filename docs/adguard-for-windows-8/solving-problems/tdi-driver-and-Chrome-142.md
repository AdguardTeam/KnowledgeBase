---
title: Filtering issues in Chrome 142+ when using the TDI driver
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

Some AdGuard for Windows users may notice that [the app stops filtering traffic in Chromium-based browsers](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Starting from Google Chrome 142+, browser traffic simply does not appear at the TDI driver level, preventing AdGuard from inspecting or filtering it.

This behavior is not a bug in AdGuard, but a result of recent architectural and security changes in modern browsers.

## Why this happens

Chromium-based browsers (Chrome, Edge, Brave, Vivaldi, etc.) have been strengthening their security architecture. One significant change is moving sensitive internal processes into the [Windows AppContainer sandbox](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), including the Network Service, which handles all browser traffic.

### What changed in Chrome 142

Starting from Chrome 142, the Network Service process is now launched inside AppContainer by default.

When this happens, applications running in an AppContainer do not use the legacy TDI networking interface; instead, their traffic is routed through the more modern WSK (Winsock Kernel) stack. As a result, the TDI driver cannot see, intercept, or process connections that go through WSK, and all browser traffic becomes invisible to the TDI driver used by AdGuard.

This behavior is controlled entirely by Chrome’s sandboxing policies and internal experiments (field trials), not by user settings.

## Why this affects AdGuard

The TDI driver is an outdated Windows technology that has been deprecated and unsupported by Microsoft for many years. It is not compatible with modern isolation and sandboxing models used by browsers.

Because of this, TDI-based traffic visibility becomes increasingly unstable. In some browsers, it has already disappeared completely, and it will eventually stop working altogether.

AdGuard already treats the TDI driver as deprecated, and its complete removal is planned as the product evolves.

## Temporary solution

Certain Windows registry changes can force the browser to stop using AppContainer, causing its processes to run in a non-sandboxed mode again. Network Service stops using the WSK stack and falls back to a network path that the TDI driver can see. AdGuard then regains the ability to filter browser traffic.

### How to modify the registry in Chromium-based browsers

:::warning

Administrator rights are required to edit the registry. Incorrect changes may affect system or browser stability and security. Always create a backup of the registry branch before modifying it.

Before proceeding, keep in mind that this solution reduces sandbox/AppContainer security, making the browser less isolated. It applies system-wide because it modifies `HKLM`, and should only be used for debugging, temporary workarounds, in controlled environments, or when TDI-based traffic interception is strictly necessary.

It should **not** be applied broadly across end-user machines. **Proceed only if you understand the implications.**

:::

You can apply the necessary registry changes automatically by using one of the pre-generated .reg files below. Each file disables AppContainer/Network Service sandboxing for a specific Chromium-based browser:

- [Download Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Download Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Download Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Download Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Download Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Download YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

If your browser is not listed, follow the manual instructions below to create the necessary registry entries:

1. Determine its policy branch by checking the vendor’s official documentation or by opening the internal policy page. In Chrome, navigate to `chrome://policy`. Other browsers use a similar path.

1. Identify the correct registry branch for your browser. Different Chromium-based browsers use different policy paths under `HKLM`. It should follow the model `HKLM\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Open the Registry Editor:

    - Press *Win + R*
    - Type *regedit* and press *Enter*
    - Approve the UAC prompt by running it as administrator

1. Back up the Policies branch:

    - In the left panel, navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
    - Right-click *Policies* → *Export*
    - Save the file as *Policies_backup.reg*

    If something goes wrong, you can restore the backup by double-clicking this file.

1. Navigate to your browser’s policy key:

    - Expand the path `HKEY_LOCAL_MACHINE` → *SOFTWARE* → *Policies*.
    - Locate the folder corresponding to your browser.

If the key does not exist, you can create it manually. Example for Chrome:

- Right-click *Policies* → *New* → *Key* and name it `Google`
- Inside `Google`, create another key named `Chrome`

Repeat the same logic for Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. You should end up with a key that looks like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Add the required registry values:

    - In the correct key, click the right panel → *New* → *DWORD (32-bit) Value*
    - Name it `RendererAppContainerEnabled`

    - Double-click it and set:

        - **Value:** 0
        - **Base:** Hexadecimal or Decimal (either is fine)

    - Repeat the process and create a second DWORD `NetworkServiceSandboxEnabled`.

    - Set its value to 0.

    Both parameters must be `REG_DWORD` and have the value **0**.

1. Close the browser and apply the settings. To ensure the policy is loaded:

    - Fully close the browser
    - Check Task Manager and make sure no processes such as *chrome.exe*, *msedge.exe*, *brave.exe* remain running
    - Reopen the browser

1. Verify that the policies have been applied by opening the policy viewer for your browser.

You should see the following policies active:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

If available, click *Reload policies*.

Done!

## Permanent solution

We’re planning to add support for the SockFilter driver in the upcoming versions. It will fix the issue by solving conflicts in the WFP stack. [More information](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
