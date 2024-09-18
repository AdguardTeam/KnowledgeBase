---
title: Manuelle Installation des Zertifikats
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Mac muss das Root-Zertifikat im Zertifikatspeicher installieren, um [HTTPS-Datenverkehr filtern zu können](/general/https-filtering/what-is-https-filtering). Diese Aktion wird in den meisten Fällen automatisch ausgeführt, wenn Sie die App zum ersten Mal ausführen, aber Benutzer von Gecko-basierten Browsern (Firefox, Waterfox, usw.), die ein Master-Passwort für ihren Browser eingerichtet haben, müssen möglicherweise zusätzliche Schritte unternehmen (weil diese Browser ihren eigenen Zertifikatsspeicher anstelle des Systemspeichers verwenden). Sie müssen entweder das Master-Passwort eingeben, wenn sie dazu aufgefordert werden (um AdGuard Zugriff auf den Zertifikatsspeicher zu gewähren) oder das Zertifikat manuell installieren.

Um das Zertifikat manuell in einem Firefox-ähnlichen Browser zu installieren, machen Sie Folgendes:

  1. Öffnen Sie *Einstellungen*

  2. Wechseln Sie zu *Datenschutz und Sicherheit* ➜ *Zertifikate*

  3. Klicken Sie auf *Zertifikate anzeigen*

  4. Navigieren Sie zum Tab *Befugnisse* und klicken Sie auf die Schaltfläche *Importieren...*

  5. Wählen Sie die Datei `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` aus oder laden Sie sie einfach von http://local.adguard.org/cert mit einem Chromium-basierten Browser herunter (z. B. Google Chrome oder neu Edge) und mit einer in AdGuard laufenden HTTPS-Filterung

Die genauen Aktionen, die für verschiedene Gecko-basierte Browser erforderlich sind, können variieren, aber die allgemeine Reihenfolge und der Pfad zur `Personal CA.cer` Datei sind gleich.

P.S.: Für Version [der Setapp-Anwendung](https://setapp.com/apps/adguard) lautet der Dateipfad wie folgt: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
