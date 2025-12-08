---
title: Filtering issues in Chrome 142+ when using the TDI driver
sidebar_position: 14
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

Some AdGuard for Windows users may notice that the app stops filtering traffic in Chromium-based browsers, especially starting from **Google Chrome 142+**.
Browser traffic simply does not appear at the TDI driver level, preventing AdGuard from inspecting or filtering it.

This behavior is not a bug in AdGuard, but a result of recent architectural and security changes in modern browsers.

## Why this happens

Chromium-based browsers (Chrome, Edge, Brave, Vivaldi, etc.) have been strengthening their security architecture. One significant change is moving sensitive internal processes into the Windows AppContainer sandbox, including the Network Service, which handles all browser traffic.

### What changes when the browser uses AppContainer

- Processes running inside AppContainer **do not use** the legacy TDI network interface.
- The traffic goes through the modern WSK (Winsock Kernel) stack instead.
- The TDI driver cannot see, intercept, or process connections that go through WSK.

As a result, all browser traffic becomes invisible to the TDI driver used by AdGuard.

A known precedent is Microsoft Edge, which has never been filterable via TDI for this exact reason. Now Chrome and other Chromium browsers are adopting the same model.

### What changed in Chrome 142

Starting from **Chrome 142**, the **Network Service** process is now launched inside AppContainer by default.

When this happens, the browser no longer uses TDI, all traffic flows through WSK, and AdGuard cannot intercept that traffic on the TDI level.

This behavior is controlled entirely by Chrome’s sandboxing policies and internal experiments (field trials), not by user settings.

## Why this affects AdGuard

The TDI driver is an outdated Windows technology that has been deprecated and unsupported by Microsoft for many years. It is not compatible with modern isolation and sandboxing models used by browsers.

Because of this, TDI-based traffic visibility becomes increasingly unstable. In some browsers, it has already disappeared completely, and it will eventually stop working altogether.

AdGuard already treats the TDI driver as deprecated, and its complete removal is planned as the product evolves.

## A temporary solution

Certain Windows Registry changes can force the browser to stop using AppContainer, causing its processes to run in a non-sandboxed mode again.

This means:

- Network Service stops using the WSK stack.
- Network Service falls back to a network path that the TDI driver can see.
- AdGuard regains the ability to filter browser traffic.

The relevant keys are:

    ```sh
    RendererAppContainerEnabled = 0
    NetworkServiceSandboxEnabled = 0
    ```

These settings are applied as enterprise policies, meaning:

- They override field trials.
- They override internal browser settings.
- They cannot be reverted by the browser itself.

This makes the workaround more stable than alternatives like clearing the user profile or launching the browser with a different user-data directory.

:::note

This workaround reduces browser security by disabling parts of its sandbox.
It should be used only as a temporary solution until AdGuard fully transitions away from TDI-based filtering.

:::

### How to apply the registry fix manually in any Chromium-based browser

The steps below explain how to manually disable AppContainer and Network Service sandboxing for any Chrome-based browser by editing the Windows Registry.

:::warning

Administrator rights are required to edit the Registry. Incorrect changes may affect system or browser stability and security. Always create a backup of the Registry branch before modifying it.

Before proceeding, keep in mind that this solution reduces sandbox/AppContainer security, making the browser less isolated. It applies system-wide because it modifies `HKLM`, and should only be used for debugging, temporary workarounds, in controlled environments, or when TDI-based traffic interception is strictly necessary.

It should **not** be applied broadly across end-user machines.

**Proceed only if you understand the implications.**

:::

1. Identify the correct registry branch for your browser. Different Chromium-based browsers use different policy paths under `HKLM`:

| Browser                       | Registry Path                                              |
| ----------------------------- | ---------------------------------------------------------- |
| **Google Chrome**             | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome`       |
| **Chromium**                  | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Chromium`            |
| **Microsoft Edge (Chromium)** | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge`      |
| **Brave**                     | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\BraveSoftware\Brave` |
| **Vivaldi**                   | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Vivaldi`             |
| **Yandex Browser**            | `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\YandexBrowser`       |

If your browser is not listed, you must determine its policy branch by checking the vendor’s official documentation, or opening the internal policy page:

- `chrome://policy`
- `edge://policy`
- `brave://policy`
- `vivaldi://policy`
- `browser://policy` (Yandex)

This page shows the exact policy namespace your browser uses. Once identified, we refer to the browser-specific branch as:

    ```sh
    HKLM\SOFTWARE\Policies\<Vendor>\<Product>
    ```

1. Open the Registry Editor:

    - Press **Win + R**
    - Type **regedit** and press **Enter**
    - Approve the UAC prompt by running it as administrator

1. Back up the Policies branch:

    - In the left panel, navigate to:

    ```sh
    HKEY_LOCAL_MACHINE\SOFTWARE\Policies
    ```

    - Right-click **Policies** → **Export**
    - Save the file as `Policies_backup.reg`

    If something goes wrong, you can restore the backup by double-clicking this file.

1. Navigate to your browser’s policy key:
    - Expand the following path:

    ```sh
    HKEY_LOCAL_MACHINE
    └ SOFTWARE
      └ Policies
    ```
    - Locate the folder corresponding to your browser.

If the key does not exist, you can create it manually. Example for Chrome:
    - Right-click **Policies** → **New → Key** → name it `Google`
    - Inside `Google`, create another key named `Chrome`

Repeat the same logic for Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. You should end up with a key that looks like:

    ```sh
    HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>
    ```

1. Add the required registry values:
    - In the correct key, Right-click the right panel → **New → DWORD (32-bit) Value**
    - Name it:

        ```sh
        RendererAppContainerEnabled
        ```

    - Double-click it and set:

        - **Value:** `0`
        - **Base:** Hexadecimal or Decimal (either is fine)

    - Repeat the process and create a second DWORD:

        ```sh
        NetworkServiceSandboxEnabled
        ```

    - Set its value to 0.

    Both parameters must be `REG_DWORD` and have the value **0**.

1. Close the browser and apply the settings. To ensure the policy is loaded:

    - Fully close the browser
    - Check Task Manager — make sure no processes such as `chrome.exe`, `msedge.exe`, `brave.exe`, etc., remain running
    - Reopen the browser

1. Verify that the policies have been applied by opening the policy viewer for your browser:

    - **Chrome:** `chrome://policy`
    - **Chromium:** `chrome://policy`
    - **Edge:** `edge://policy`
    - **Brave:** `brave://policy`
    - **Vivaldi:** `vivaldi://policy`
    - **Yandex Browser:** `browser://policy` or `yandex://policy` (varies)

You should see the following policies active:

    - `RendererAppContainerEnabled` — **0 / false**
    - `NetworkServiceSandboxEnabled` — **0 / false**

If available, click *Reload policies*.

Done!
