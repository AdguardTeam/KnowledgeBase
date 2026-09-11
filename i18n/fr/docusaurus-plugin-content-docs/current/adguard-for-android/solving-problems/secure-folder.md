---
title: Certificate installation in a Secure folder
sidebar_position: 12
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do).
1. After the *Installation instructions* popup appears, **DO NOT** tap **Open Settings**.
1. Minimize the app and go to the *Secure folder*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Confirm installation with your graphic key/password/fingerprint.
1. Find and select the previously saved certificate, then tap **Done**.
1. Return to the AdGuard app and navigate back to the main screen.
1. C'est fait ! The certificate has been installed.
