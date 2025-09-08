---
title: Wie man nach dem Update auf v8.0 zurück zur vorherigen Version wechselt
sidebar_position: 12
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Die Änderungen in AdGuard für Windows v8.0 sind umfangreich, und wir hoffen, dass Ihnen die neue Version gefällt. Allerdings besteht die Möglichkeit, dass etwas nicht so läuft, wie Sie es erwartet haben. Version 8.0 ist ganz anders, schließlich ist sie nur die erste „Nightly“-Version. Wenn Ihnen die Benutzeroberfläche von Version 8.0 nicht gefällt oder es zu viele Probleme mit Funktionen oder Stabilität gibt, können Sie die vorherige Version mit den alten Einstellungen wiederherstellen.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

Alternativ steht auch die folgende Methode zur Verfügung:

1. Öffnen Sie nach dem Umstieg auf Version 8 den Ordner `C:\ProgramData\Adguard\Backups` und suchen Sie eine ZIP-Datei mit einem Namen ähnlich `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. Deinstallieren Sie Version 8.0 mit der Option **Einstellungen entfernen**.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Beenden Sie Version 7 über die Taskleiste, um das Filtern zu beenden.
6. Entpacken Sie den Inhalt der ZIP-Datei aus dem ersten Schritt und ersetzen Sie folgende Dateien:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` und `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Starten Sie AdGuard.

Alles bereit!
