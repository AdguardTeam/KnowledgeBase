---
title: Installation du certificat sur des appareils avec Android 11+
sidebar_position: 11
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device’s user storage. Sur les anciennes versions d'Android, cela se faisait automatiquement, mais sur Android 11 et les versions ultérieures, les utilisateurs doivent l'installer manuellement.

![Certificat *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Suivez ces étapes pour installer le certificat AdGuard:

1. Open the app. On the *Home* screen, tap *HTTPS filtering is off*.

1. Then you’ll be presented with three screens:
    - HTTPS filtering is critical for ad blocking
    - AdGuard’s HTTPS filtering is safe
    - AdGuard certificate

1. Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, copy the text from the *CA Certificate* field and tap *Open Settings*.

1. Open *Settings* and either paste or type *CA Certificate* in the search bar. Tap the respective option.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

You’re all set! Once the certificate is installed successfully, you’ve enabled HTTPS filtering.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Redémarrez AdGuard.
1. Essayez d'installer le certificat correct (AdGuard Personal CA) une fois de plus.

## Security warnings

In earlier versions of Android, the quick settings panel displayed the message “Network may be monitored.” Tapping it will open a window with detailed information.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” This means that the system has detected third-party certificates in the user certificate store. Tapping the notification opens a list of certificates in the user certificate store.

Despite these warnings, your traffic remains secure. Your connection to remote servers stays encrypted. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at <support@adguard.com>.
