---
title: Manuelle Installation des Zertifikats
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einen multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Mac muss das Root-Zertifikat im Zertifikatspeicher installieren, um [HTTPS-Datenverkehr filtern zu können](/general/https-filtering/what-is-https-filtering). Diese Aktion wird in den meisten Fällen automatisch ausgeführt, wenn Sie die App zum ersten Mal ausführen, aber Benutzer von Gecko-basierten Browsern (Firefox, Waterfox, usw.), die ein Master-Passwort für ihren Browser eingerichtet haben, müssen möglicherweise zusätzliche Schritte unternehmen (weil diese Browser ihren eigenen Zertifikatsspeicher anstelle des Systemspeichers verwenden). Sie müssen entweder das Master-Passwort eingeben, wenn sie dazu aufgefordert werden (um AdGuard Zugriff auf den Zertifikatsspeicher zu gewähren) oder das Zertifikat manuell installieren.

Um das Zertifikat manuell in einem Firefox-ähnlichen Browser zu installieren, machen Sie Folgendes:

  1. Open *Preferences*

  2. Go to *Privacy & Security* → *Certificates*

  3. Click *View Certificates*

  4. Navigate to the *Authorities* tab and click the *Import...* button

  5. Wählen Sie die Datei `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` aus oder laden Sie sie einfach von http://local.adguard.org/cert mit einem Chromium-basierten Browser herunter (z. B. Google Chrome oder neu Edge) und mit einer in AdGuard laufenden HTTPS-Filterung

Die genauen Aktionen, die für verschiedene Gecko-basierte Browser erforderlich sind, können variieren, aber die allgemeine Reihenfolge und der Pfad zur `Personal CA.cer` Datei sind gleich.

P.S.: For [Setapp application version](https://setapp.com/apps/adguard) the file path is the following: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
