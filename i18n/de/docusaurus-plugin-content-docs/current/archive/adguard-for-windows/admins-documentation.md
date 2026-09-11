---
title: Dokumentation für Administratoren
sidebar_position: 5
---

Diese Seite beschreibt die Funktionen und Details der zentralen Verwaltung der Richtlinien und Einstellungen von AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Wenn diese Richtlinie festgelegt ist, bevorzugt AdGuard sie gegenüber den Eingaben, die der Benutzer über die Schnittstelle vornehmen kann. Dieser Lizenzschlüssel wird für die Überprüfung des Lizenzstatus verwendet.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Stellen Sie sicher, dass beide Server verfügbar sind.

## 4. Push the MSI out to your network {#msi-push}

Wenn Sie normalerweise SMS oder andere Tools verwenden, nutzen Sie diese, um das AdGuard MSI zu verteilen, wie Sie es auch mit jedem anderen Installationspaket tun würden.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Sie müssen diese Befehle mit Admin-Rechten ausführen.

:::

Wenn Sie AdGuard auf einem Computer mit Windows 7 installieren möchten, stellen Sie sicher, dass das .NET 4 Client-Profil installiert ist: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Wenn Sie AdGuard für Windows über eine MSI-Datei installiert haben, wird AdGuard nicht automatisch aktualisiert. So erlauben Sie manuelle Aktualisierungen:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Jeder andere Wert oder kein Wert für diesen Parameter deaktiviert die automatische Aktualisierung.

Bitte beachten Sie, dass eine solche Installation der Anwendung und das manuelle Aktualisieren nicht empfohlen wird und technische Probleme verursachen kann.

:::

## 5. Test your installation {#installation-test}

Starten Sie AdGuard auf einem Zielrechner. Öffnen Sie den Bildschirm mit den Lizenzinformationen, um zu überprüfen, ob die angegebene Lizenz verwendet wird. Möglicherweise müssen Sie auf „Status aktualisieren” klicken, damit AdGuard den Lizenzschlüssel validiert.
