---
title: Zertifikatsbezogene Probleme
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

To be able to filter HTTPS-traffic and efficiently block ads and trackers, AdGuard generates a special (and unique) root certificate and installs it into the system storage. Mehr darüber, warum ein Zertifikat erforderlich ist, erfahren Sie in [diesem Artikel](/general/https-filtering/what-is-https-filtering).

Normalerweise vertrauen Browser dem AdGuard-Zertifikat, sobald es während des Installationsvorgangs zum Zertifikatspeicher des Systems hinzugefügt wurde. In manchen Fällen reicht dies jedoch nicht aus, und Sie können auf Warnungen oder Fehler stoßen. Dies geschieht am häufigsten in Firefox-basierten Browsern wie Mozilla Firefox, PaleMoon, Waterfox usw. oder in Yandex.Browser.

## *Potential Security Risk* error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Alte FireFox-Versionen sowie darauf basierende Browser vertrauen nicht auf Zertifikate aus dem Systemspeicher, sondern nur auf solche aus dem lokalen Speicher. Seit Version 68 vertraut FireFox den Systemzertifikaten, aber Sie können immer noch die Fehlermeldung „Verbindung ist nicht vertrauenswürdig” erhalten. If something like this happens, first try to click the *Reinstall Certificate* button — you will find it in the *Network* tab.

![Zertifikat neu installieren](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Wenn das nicht hilft, folgen Sie den Anweisungen zum manuellen Hinzufügen des AdGuard-Zertifikats zum FireFox-Speicher.

> Diese Anleitung gilt für den Firefox-Browser. Die Namen der Schaltflächen und Menüpunkte können in anderen Firefox-basierten Browsern abweichen.

1. Starten Sie AdGuard.

1. Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. Der Browser sollte mit dem Herunterladen der Datei **cert.cer** beginnen.

    :::note

    You can also open the download page by clicking the link via the AdGuard app at *Settings → Network → HTTPS filtering*.


:::

    ![Zertifikat-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Öffnen Sie Ihren Browser und dann die *Einstellungen*.

1. Go to *Privacy & Security* tab.

1. Blättern Sie nach unten zu *Zertifikate* und klicken Sie auf die Schaltfläche *Zertifikate anzeigen…*.

    ![Fenster „Zertifikate” anzeigen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Wählen Sie den Tab *Zertifizierungsstellen*.

1. Klicken Sie auf *Importieren...*.

    ![Zertifikatseinstellungen – Importieren](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Suchen Sie die heruntergeladene Datei **cert.cer**und klicken Sie auf *Öffnen*.

1. Check the *Trust this CA to identify websites* box and then click *OK*.

    ![Zertifikatseinstellungen — Kontrollkästchen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Sie haben das AdGuard-Zertifikat erfolgreich installiert. Starten Sie den Browser neu und der Fehler sollte behoben sein.

## Yandex.Browser certificate warning

If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Warum geschieht das?

Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data.

However, AdGuard also adds its certificate to the trusted ones. This leads to the warning message you have encountered.

### So kann das Problem gelöst werden

Am einfachsten ist es, wenn Sie auf die Schaltfläche **Website öffnen** klicken. Dadurch wird Yandex.Browser angewiesen, das AdGuard-Zertifikat als vertrauenswürdig zu betrachten, zumindest für eine gewisse Zeit. Normalerweise werden Sie diese Meldung nicht mehr sehen, aber es ist nicht ausgeschlossen, dass sie gelegentlich angezeigt wird, aus welchen Gründen auch immer. In such cases, simply press the same button again *(make sure it is AdGuard's certificate!)*.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high.
