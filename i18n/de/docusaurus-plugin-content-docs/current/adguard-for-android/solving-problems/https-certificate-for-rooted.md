---
title: Moving the CA certificate to the system store on rooted devices
sidebar_position: 14
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard for Android can [filter encrypted HTTPS traffic](/general/https-filtering/what-is-https-filtering), thus blocking most ads and trackers on websites. Auf gerooteten Geräten können Sie mit AdGuard auch den HTTPS-Datenverkehr in Apps filtern. Für die HTTPS-Filterung muss das CA-Zertifikat von AdGuard in die Liste der vertrauenswürdigen Zertifikate aufgenommen werden.

On non-rooted devices, CA certificates can be installed to the **user store**. Only a limited subset of apps (mostly browsers) trust CA certificates installed to the user store, meaning HTTPS filtering will work only for such apps.

On rooted devices, you can install a certificate to the **system store**. That will allow AdGuard to filer HTTPS traffic in other apps as well.

Here's how to do that.

## How to install AdGuard's certificate to the system store

1. Open *AdGuard → Settings → Filtering → Network → HTTPS filtering → Security certificates*.

1. If you don't have any certificate yet, **install the AdGuard Personal CA into the user store**. This will allow AdGuard to filter HTTPS traffic in browsers.

1. **Install the AdGuard Intermediate CA into the user store**. You'll need it to run the adguardcert Magisk module that allows you to move certificates to the system store.

    ![Install the certificate *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Install the [latest release of the **adguardcert** Magisk module](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Open *Magisk → Modules → Install from storage* and select the downloaded **adguardcert** file. The AdGuard Personal CA certificate will be copied to the system store.

    ![Magisk-Module öffnen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Installation aus dem Speicher *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![adguardcert auswählen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Tap **Reboot**.

    ![Gerät neu starten *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

After the transfer, the **AdGuard Personal CA** in the system store will allow you to filter HTTPS traffic in apps, while the **AdGuard Intermediate CA** in the user store will allow you to filter HTTPS traffic in Chromium-based browsers (see below why).

## Known issues with Chrome and Chromium-based browsers

Chrome and other Chromium-based browsers require Certificate Transparency (CT) logs for certificates located in the system store. CT logs don't contain information about certificates issued by HTTPS-filtering apps. Therefore, AdGuard requires an additional certificate in the user store to filter HTTPS traffic in these browsers.

### Bromit-Browser

In addition to the above issue, Bromite doesn't trust certificates in the user store by default. To filter HTTPS traffic there, open Bromite, go to `chrome://flags`, and set *Allow user certificates* to *Enabled*. **This applies to both rooted and non-rooted devices**.
