---
title: Chrome 142 ve üzeri sürümlerde TDI sürücüsü kullanılırken filtreleme sorunları
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

Some AdGuard for Windows users may notice that [the app stops filtering traffic in Chromium-based browsers](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Starting from Google Chrome 142+, browser traffic simply does not appear at the TDI driver level, preventing AdGuard from inspecting or filtering it.

Bu davranış AdGuard'daki bir hata değil, modern tarayıcılardaki son mimari ve güvenlik değişikliklerinin bir sonucudur.

## Bu neden oluyor

Chromium tabanlı tarayıcılar (Chrome, Edge, Brave, Vivaldi, vb.) güvenlik mimarilerini güçlendiriyorlar. One significant change is moving sensitive internal processes into the [Windows AppContainer sandbox](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), including the Network Service, which handles all browser traffic.

### Chrome 142'de neler değişti

Chrome 142'den itibaren, Ağ Hizmeti işlemi artık varsayılan olarak AppContainer içinde başlatılıyor.

Bu olduğunda, bir AppContainer içinde çalışan uygulamalar eski TDI ağ arayüzünü kullanmaz; bunun yerine, akışları daha modern WSK (Winsock Kernel) yığını üzerinden yönlendirilir. As a result, the TDI driver cannot see, intercept, or process connections that go through WSK, and all browser traffic becomes invisible to the TDI driver used by AdGuard.

This behavior is controlled entirely by Chrome’s sandboxing policies and internal experiments (field trials), not by user settings.

## Bu durum AdGuard'ı neden etkiliyor

The TDI driver is an outdated Windows technology that has been deprecated and unsupported by Microsoft for many years. It is not compatible with modern isolation and sandboxing models used by browsers.

Bu sebeple, TDI tabanlı trafik görünürlüğü giderek daha istikrarsız hâle geliyor. In some browsers, it has already disappeared completely, and it will eventually stop working altogether.

AdGuard already treats the TDI driver as deprecated, and its complete removal is planned as the product evolves.

## Geçici çözüm

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

2. Identify the correct registry branch for your browser. Different Chromium-based browsers use different policy paths under `HKLM`. It should follow the model `HKLM\SOFTWARE\Policies\<Vendor>\<Product>`.

3. Kayıt Defteri Düzenleyicisini açın:

   - _Win + R_ tuşlarına basın
   - _regedit_ yazın ve _Enter_ tuşuna basın
   - Approve the UAC prompt by running it as administrator

4. Back up the Policies branch:

   - In the left panel, navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Right-click _Policies_ → _Export_
   - Save the file as _Policies_backup.reg_

   If something goes wrong, you can restore the backup by double-clicking this file.

5. Navigate to your browser’s policy key:

   - Expand the path `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_.
   - Tarayıcınıza karşılık gelen klasörü bulun.

If the key does not exist, you can create it manually. Chrome için örnek:

- _Politikalar_ → _Yeni_ → _Anahtar_ öğesine sağ tıklayın ve `Google` adını verin
- Inside `Google`, create another key named `Chrome`

Repeat the same logic for Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. You should end up with a key that looks like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Add the required registry values:

   - In the correct key, click the right panel → _New_ → _DWORD (32-bit) Value_

   - Name it `RendererAppContainerEnabled`

   - Double-click it and set:

     - **Value:** 0
     - **Base:** Hexadecimal or Decimal (either is fine)

   - Repeat the process and create a second DWORD `NetworkServiceSandboxEnabled`.

   - Set its value to 0.

   Both parameters must be `REG_DWORD` and have the value **0**.

2. Close the browser and apply the settings. To ensure the policy is loaded:

   - Tarayıcıyı tamamen kapatın
   - Check Task Manager and make sure no processes such as _chrome.exe_, _msedge.exe_, _brave.exe_ remain running
   - Reopen the browser

3. Verify that the policies have been applied by opening the policy viewer for your browser.

You should see the following policies active:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

If available, click _Reload policies_.

Tamamlandı!

## Permanent solution

We’re planning to add support for the SockFilter driver in the upcoming versions. It will fix the issue by solving conflicts in the WFP stack. [More information](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
