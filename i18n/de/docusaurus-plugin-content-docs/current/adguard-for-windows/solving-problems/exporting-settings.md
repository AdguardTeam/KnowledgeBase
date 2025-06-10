---
title: Wie man nach dem Update auf v8.0 zurück zur vorherigen Version wechselt
sidebar_position: 12
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard for Windows v8.0 are significant, and we hope you love the new version. Allerdings besteht die Möglichkeit, dass etwas nicht so läuft, wie Sie es erwartet haben. Version 8.0 ist ganz anders, schließlich ist sie nur die erste „Nightly“-Version. Wenn Ihnen die Benutzeroberfläche von Version 8.0 nicht gefällt oder es zu viele Probleme mit Funktionen oder Stabilität gibt, können Sie die vorherige Version mit den alten Einstellungen wiederherstellen.

Damit Ihre Einstellungen nicht verloren gehen, sollten Sie sie vor dem Wechsel auf Version 8.0 exportieren. So können Sie bei Bedarf Version 7 neu installieren und Ihre Einstellungen wieder importieren.

Alternativ steht auch die folgende Methode zur Verfügung:

1. Öffnen Sie nach dem Umstieg auf Version 8 den Ordner `C:\ProgramData\Adguard\Backups` und suchen Sie eine ZIP-Datei mit einem Namen ähnlich `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Kopieren Sie diese Zip-Datei irgendwo außerhalb von `C:\ProgramData\Adguard`, zum Beispiel auf den Desktop. Das ist wichtig, weil die Datei im nächsten Schritt gelöscht wird.
3. Deinstallieren Sie Version 8.0 mit der Option **Einstellungen entfernen**.
4. Installieren Sie den Build der Version 7, der vor dem Update installiert war.
5. Beenden Sie Version 7 über die Taskleiste, um das Filtern zu beenden.
6. Entpacken Sie den Inhalt der ZIP-Datei aus dem ersten Schritt und ersetzen Sie folgende Dateien:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` und `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Starten Sie AdGuard.

Alles bereit!
