---
title: Instalace certifikátu na zařízeních se systémem Android 11+
sidebar_position: 11
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device’s user storage. Ve starších verzích operačního systému Android se to provádělo automaticky, ale v Androidu 11 a novějších verzích jej uživatelé musí nainstalovat ručně.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Certifikát AdGuardu nainstalujete podle následujících kroků:

1. Open the app. On the *Home* screen, tap *HTTPS filtering is off*.

1. Then you’ll be presented with three screens:
    - HTTPS filtering is critical for ad blocking
    - AdGuard’s HTTPS filtering is safe
    - AdGuard certificate

    Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Klepněte na *Uložit* v dolní části otevřené složky *Stáhnout*.

1. Po uložení klepněte na *Otevřít nastavení*.

1. Open *Settings* and type *CA Certificate* in the search bar. Tap the respective option.

1. Může se zobrazit varování. Pokud ano, klepněte na *Přesto nainstalovat* a v případě potřeby zadejte kód PIN.

1. Vyberte soubor AdGuard certifikátu. Jeho název by měl vypadat takto: *adguard_1342_020322.crt*.

You’re all set! Once the certificate is installed successfully, you’ve enabled HTTPS filtering.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Restartujte AdGuard.
2. Zkuste nainstalovat správný certifikát (AdGuard Personal CA) ještě jednou.

## Security warnings

In earlier versions of Android, the quick settings panel displayed the message “Network may be monitored.” Tapping it will open a window with detailed information.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” This means that the system has detected third-party certificates in the user certificate store. Tapping the notification opens a list of certificates in the user certificate store.

Despite these warnings, your traffic remains secure. Your connection to remote servers stays encrypted. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at <support@adguard.com>.
