---
title: Zertifikatsbezogene Probleme
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Um den HTTPS-Verkehr zu filtern und Werbung und Tracker effizient zu blockieren, generiert AdGuard ein spezielles (und einzigartiges) Stammzertifikat und installiert es im Systemspeicher. Mehr darüber, warum ein Zertifikat erforderlich ist, erfahren Sie in [diesem Artikel](/general/https-filtering/what-is-https-filtering).

Normalerweise vertrauen Browser dem AdGuard-Zertifikat, sobald es während des Installationsvorgangs zum Zertifikatspeicher des Systems hinzugefügt wurde. In manchen Fällen reicht dies jedoch nicht aus, und Sie können auf Warnungen oder Fehler stoßen. Dies geschieht am häufigsten in Firefox-basierten Browsern wie Mozilla Firefox, PaleMoon, Waterfox usw. oder in Yandex.Browser.

Here are some common issues:

- [Fehler *Potenzielles Sicherheitsrisiko* in Firefox-basierten Browsern](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser-Zertifikat-Warnung](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## Fehler *Potenzielles Sicherheitsrisiko* in Firefox-basierten Browsern

![Sicherheitsrisiko Fehler](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Alte FireFox-Versionen sowie darauf basierende Browser vertrauen nicht auf Zertifikate aus dem Systemspeicher, sondern nur auf solche aus dem lokalen Speicher. Seit Version 68 vertraut FireFox den Systemzertifikaten, aber Sie können immer noch die Fehlermeldung „Verbindung ist nicht vertrauenswürdig” erhalten. Wenn so etwas passiert, versuchen Sie zunächst, auf die Schaltfläche *Zertifikat neu installieren* zu klicken. Sie finden sie im Tab *Netzwerk*.

![Zertifikat neu installieren](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Wenn das nicht hilft, folgen Sie den Anweisungen zum manuellen Hinzufügen des AdGuard-Zertifikats zum FireFox-Speicher.

> Diese Anleitung gilt für den Firefox-Browser. Die Namen der Schaltflächen und Menüpunkte können in anderen Firefox-basierten Browsern abweichen.

1. Starten Sie AdGuard.

1. Öffnen Sie die Seite [http://local.adguard.org/cert](http://local.adguard.org/cert) und klicken anschließend auf die Schaltfläche *Herunterladen*. Der Browser sollte mit dem Herunterladen der Datei **cert.cer** beginnen.

    :::note

    Sie können die Download-Seite auch über den Link in der AdGuard-App unter *Einstellungen → Netzwerk → HTTPS-Filterung* öffnen.


:::

    ![Zertifikat-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Öffnen Sie Ihren Browser und dann die *Einstellungen*.

1. Wechseln Sie zum Abschnitt *Datenschutz und Sicherheit*.

1. Blättern Sie nach unten zu *Zertifikate* und klicken Sie auf die Schaltfläche *Zertifikate anzeigen…*.

    ![Fenster „Zertifikate” anzeigen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Wählen Sie den Tab *Zertifizierungsstellen*.

1. Klicken Sie auf *Importieren...*.

    ![Zertifikatseinstellungen – Importieren](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Suchen Sie die heruntergeladene Datei **cert.cer**und klicken Sie auf *Öffnen*.

1. Aktivieren Sie das Kästchen *Dieser CA vertrauen, um Websites zu identifizieren* und klicken Sie dann auf *OK*.

    ![Zertifikatseinstellungen — Kontrollkästchen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Sie haben das AdGuard-Zertifikat erfolgreich installiert. Starten Sie den Browser neu und der Fehler sollte behoben sein.

## Yandex.Browser-Zertifikat-Warnung

Wenn Sie sowohl AdGuard für Windows als auch Yandex.Browser verwenden, sind Sie vielleicht schon auf diese Warnung gestoßen:

![Yandex-Zertifikat-Warnung](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Warum geschieht das?

Sowohl bei AdGuard als auch bei Yandex wird die Sicherheit im Internet sehr ernst genommen. Derzeit warnt Yandex vor jedem Zertifikat, das vom Browser nicht erkannt wird. Dies ist nicht unbegründet, denn manchmal können böswillige Anwendungen ihre eigenen Zertifikate einschleusen und dies nutzen, um das System zu schädigen und private Daten zu stehlen.

AdGuard fügt jedoch auch sein Zertifikat zu den vertrauenswürdigen Zertifikaten hinzu. Dies führt zu der Warnmeldung, die Sie erhalten haben.

### So kann das Problem gelöst werden

Am einfachsten ist es, wenn Sie auf die Schaltfläche **Website öffnen** klicken. Dadurch wird Yandex.Browser angewiesen, das AdGuard-Zertifikat als vertrauenswürdig zu betrachten, zumindest für eine gewisse Zeit. Normalerweise werden Sie diese Meldung nicht mehr sehen, aber es ist nicht ausgeschlossen, dass sie gelegentlich angezeigt wird, aus welchen Gründen auch immer. Drücken Sie in solchen Fällen einfach erneut die gleiche Taste *(stellen Sie sicher, dass es sich um das Zertifikat von AdGuard handelt!)*.

Das Deaktivieren der HTTPS-Filterung im AdGuard verhindert auch, dass Yandex.Browser diese Meldung erneut anzeigt, aber sie hat einen hohen Preis: Jeder Werbung, die über HTTPS geladen werden (einschließlich **Yandex-eigener Anzeigen**), werden angezeigt — auf Websites wie YouTube, Facebook, Instagram und vielen anderen. Wir raten dringend davon ab, wenn Sie die Qualität der Werbeblockierung hoch halten möchten.

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
