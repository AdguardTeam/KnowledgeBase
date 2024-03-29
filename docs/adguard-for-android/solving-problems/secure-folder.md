---
title: Certificate installation in a Secure folder
sidebar_position: 13
---

:::info

This article is about AdGuard for Android TV, an ad blocker that protects your TV at the system level. To see how it works, [download the AdGuard TV app](https://agrd.io/tvapk)

:::

If you install AdGuard to [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is, the *Secure folder* has its own space where the certificates are stored. However, if you do everything according to the regular certificate installation instructions ([described here](../../overview#https-filtering)), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. To solve this problem and install the certificate for your AdGuard for Android into the *Secure folder's* storage, please follow these instructions instead:

1. After installing the app and connecting the local VPN, tap **ENABLE** next to the *HTTPS filtering is off* message.
1. Tap **Next** → **Next** → **Save it now** → **Save certificate**.
1. Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do).
1. After the *Installation instructions* popup appears, **DO NOT** tap **Open Settings**.
1. Minimize the app and go to the *Secure folder*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Security certificates** → **Install from device storage** → **CA certificate** → **Install anyway**
1. Confirm installation with your graphic key/password/fingerprint.
1. Find and select the previously saved certificate, then tap **Done**.
1. Return to the AdGuard app and navigate back to the main screen. You may have to swipe and restart the app to get rid of the *HTTPS filtering is off* message.
1. Done! The certificate has been installed.
