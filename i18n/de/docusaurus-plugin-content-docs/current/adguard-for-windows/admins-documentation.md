---
title: Dokumentation für Administratoren
sidebar_position: 5
---

Diese Seite beschreibt die Funktionen und Details der zentralen Verwaltung der Richtlinien und Einstellungen von AdGuard.

## 1. MSI herunterladen {#msi-download}

Laden Sie [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)herunter

Laden Sie [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)herunter

## 2. Konfigurieren Sie die Einstellungen für Ihr Netzwerk {#settings-configuring}

Auf Computern, die mit einer Active Directory-Domain verbunden sind, können die Richtlinieneinstellungen auch in der Registrierung unter `HKEY_LOCAL_MACHINE` im folgenden Pfad gespeichert werden: `Software\Policies\AdGuard\`.

Die einzige unterstützte Richtlinie ist `LicenseKey`. Wenn diese Richtlinie festgelegt ist, bevorzugt AdGuard sie gegenüber den Eingaben, die der Benutzer über die Schnittstelle vornehmen kann. Dieser Lizenzschlüssel wird für die Überprüfung des Lizenzstatus verwendet.

## 3. Stellen Sie sicher, dass die AdGuard-Server verfügbar sind {#servers-available}

AdGuard verbindet sich mit zwei Hosts: `api.adguard.org` und `filters.adtidy.org`. Stellen Sie sicher, dass beide Server verfügbar sind.

## 4. Übertragen Sie die MSI auf Ihr Netzwerk {#msi-push}

Wenn Sie normalerweise SMS oder andere Tools verwenden, nutzen Sie diese, um das AdGuard MSI zu verteilen, wie Sie es auch mit jedem anderen Installationspaket tun würden.

Andernfalls können Sie die MSI-Datei auf dem Zielcomputer direkt (und unbemerkt) mit diesem Befehl ausführen: `Msiexec /q /i AdGuard.msi`

Wenn Sie ein Update durchführen müssen, verwenden Sie diesen Befehl: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Sie müssen diese Befehle mit Admin-Rechten ausführen.

:::

Wenn Sie AdGuard auf einem Computer mit Windows 7 installieren möchten, stellen Sie sicher, dass das .NET 4 Client-Profil installiert ist: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Wenn Sie AdGuard für Windows über eine MSI-Datei installiert haben, wird AdGuard nicht automatisch aktualisiert. So erlauben Sie manuelle Aktualisierungen:

- In Versionen, die nach v7.16 veröffentlicht wurden, löschen Sie den Parameter `ForbidCheckUpdates` oder setzen Sie seinen Wert in der Registrierung unter `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` auf `NO` (Groß- und Kleinschreibung wird nicht berücksichtigt).

- In v7.16 und früheren Versionen setzen Sie den Parameter `AllowCheckUpdates` für den Schlüssel `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` auf x86 OS oder `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` auf `YES` (Groß-/Kleinschreibung wird nicht berücksichtigt). Jeder andere Wert oder kein Wert für diesen Parameter deaktiviert die automatische Aktualisierung.

Bitte beachten Sie, dass eine solche Installation der Anwendung und das manuelle Aktualisieren nicht empfohlen wird und technische Probleme verursachen kann.

:::

## 5. Testen Sie Ihre Installation {#installation-test}

Starten Sie AdGuard auf einem Zielrechner. Öffnen Sie den Bildschirm mit den Lizenzinformationen, um zu überprüfen, ob die angegebene Lizenz verwendet wird. Möglicherweise müssen Sie auf „Status aktualisieren” klicken, damit AdGuard den Lizenzschlüssel validiert.
