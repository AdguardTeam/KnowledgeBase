---
title: Zertifikatsbezogene Probleme
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

To be able to filter HTTPS-traffic and efficiently block ads and trackers, AdGuard generates a special (and unique) root certificate and installs it into the system storage. Mehr darüber, warum ein Zertifikat erforderlich ist, erfahren Sie in [diesem Artikel](/general/https-filtering/what-is-https-filtering).

Normally browsers trust the AdGuard certificate once it's added to the system certificate storage during the installation process. But in some cases this is not enough and you may come across warnings or errors. This happens most often in Firefox-based browsers like Mozilla Firefox, PaleMoon, Waterfox, etc., or in Yandex.Browser.

## *Potential Security Risk* error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Old FireFox versions, as well as browsers based on them, do not trust certificates from the system storage, but only those from their local storage. Seit Version 68 vertraut FireFox den Systemzertifikaten, aber Sie können immer noch die Fehlermeldung „Verbindung ist nicht vertrauenswürdig” erhalten. If something like this happens, first try to click the *Reinstall Certificate* button — you will find it in the *Network* tab.

![Zertifikat neu installieren](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Wenn das nicht hilft, folgen Sie den Anweisungen zum manuellen Hinzufügen des AdGuard-Zertifikats zum FireFox-Speicher.

> Diese Anleitung gilt für den Firefox-Browser. Die Namen der Schaltflächen und Menüpunkte können in anderen Firefox-basierten Browsern abweichen.

1. Run AdGuard.

1. Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. The browser should start downloading **cert.cer** file.

    :::note

    You can also open the download page by clicking the link via the AdGuard app at *Settings → Network → HTTPS filtering*.


:::

    ![Zertifikat-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Öffnen Sie Ihren Browser und dann die *Einstellungen*.

1. Go to *Privacy & Security* tab.

1. Scroll down to *Certificates* and click the *View Certificates* button.

    ![Fenster „Zertifikate” anzeigen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Select *Authorities* tab.

1. Click *Import...*.

    ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Browse the downloaded **cert.cer** file and click *Open*.

1. Check the *Trust this CA to identify websites* box and then click *OK*.

    ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

You've successfully installed AdGuard certificate. Restart the browser and the error should go away.

## Yandex.Browser certificate warning

If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Why is this happening

Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data.

However, AdGuard also adds its certificate to the trusted ones. This leads to the warning message you have encountered.

### How to solve the problem

The easiest way is to click the **Go to site** button. This will tell Yandex.Browser to remember AdGuard certificate as a trusted one, at least for a while. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. In such cases, simply press the same button again *(make sure it is AdGuard's certificate!)*.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high.
