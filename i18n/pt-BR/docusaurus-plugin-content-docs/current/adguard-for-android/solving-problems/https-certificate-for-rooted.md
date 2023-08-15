---
title: Moving CA certificate to System store on rooted devices
sidebar_position: 14
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://adguard.com/download.html?auto=true)

:::

AdGuard for Android provides a feature called [HTTPS filtering](../../overview#https-filtering) that makes it possible to [filter encrypted HTTPS traffic](/general/https-filtering/what-is-https-filtering) on your Android device. This feature requires adding the AdGuard's CA certificate to the list of trusted certificates.

On non-rooted devices CA certificates can be installed to the **User store**. Only a limited subset of apps (mostly browsers) trust CA certificates installed to the User store, meaning HTTPS filtering will work only for such apps.

However, on rooted devices, you can install the certificate to the **System store** and allow HTTPS filtering of other apps' traffic too.


Here's how to do that.

## How to install AdGuard's Certificate to System store (on a rooted device)

1. Enable HTTPS filtering in AdGuard for Android and save AdGuard's certificate to the User store (use [this instruction](../../overview#https-filtering) if needed)

> From AdGuard for Android v4.1 and after users can install two certificates to the User store, which will help to filter websites in Chrome browser.

2. Go to **AdGuard app** → **Menu** (≡) → **Settings** → **Network** → **HTTPS filtering** → **Security certificate** → tap “**Copy to the system store**”

That is enough for older versions of Magisk.

However, if you have a newer version, you will get this message:

> Unable to copy the certificate to the system store. Try using “AdGuard Certificate” module.

In that case, proceed to steps below:

3. Go to **Magisk** → **Settings**

![Open Magisk settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png)

4. Enable **Zygisk**

![Enable Zygisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png)

![Go back to Magisk main screen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png)

5. Download the `.zip` file (of “AdGuard Certificate” module) from the [latest release on GitHub](https://github.com/AdguardTeam/adguardcert/releases/latest/)

6. Go to **Magisk** → **Modules** → **Install from storage** and select the downloaded `.zip` file

![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

![Select AdGuard certificate module *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

7. Reboot

![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

If a new version of "AdGuard certificate" module comes out, repeat steps 3-7 to update the module.

The module does its work during the system boot. If your AdGuard certificate changes, you'll have to reboot the device for the new certificate to be copied to the system store.

### Bromite browser

:::note

In order for the **Bromite** browser to work properly, in addition to the steps mentioned above, you need to set "Allow user certificates" in `chrome://flags` to "Enabled" state.

:::

### Chrome and Chromium-based browsers

Long story short, you will have no problems with HTTPS filtering in Chrome and Chromium-based browsers on rooted devices, if you use "AdGuard Certificate" module.

Here is a bit more detailed explanation: Chrome (and subsequently many other Chromium-based browsers) has recently started requiring CT logs for CA certs found in the **System store**. "AdGuard Certificate" module copies AdGuard's CA certificate from the **User store** to the **System store**. It also contains a Zygisk module that reverts any modifications done by Magisk for [certain browsers](https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc). This way the browsers only find AdGuard’s certificate in the User store and don’t complain about the missing CT log, while other apps continue to use the same certificate from the System store.
