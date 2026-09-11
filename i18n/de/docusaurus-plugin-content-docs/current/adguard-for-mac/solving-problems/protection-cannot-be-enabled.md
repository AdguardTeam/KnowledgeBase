---
title: Der Schutz kann nicht aktiviert werden
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

Wenn der AdGuard-Schutz aus irgendeinem Grund nicht aktiviert werden kann, führen Sie die folgenden Schritte aus:

1. Klicken Sie auf das AdGuard-Symbol in der Menüleiste und öffnen Sie *Erweitert* → *Einstellungen zurücksetzen...* → *AdGuard beenden...*

2. Geben Sie in der Spotlight-Suche Terminal ein, geben Sie `sudo rm -R /Library/Application\ Support/com.adguard.adguard` ein und führen Sie es aus.

3. Starten Sie Ihren Computer neu.

4. Öffnen Sie das Terminal erneut, geben Sie `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` ein und führen Sie es aus. Sie sollten Folgendes erhalten: `No such file or directory`.

5. Starten Sie AdGuard und geben Sie Ihre Anmeldedaten ein, wenn Sie dazu aufgefordert werden.
