---
title: Der Schutz kann nicht aktiviert werden
sidebar_position: 2
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

Wenn der AdGuard-Schutz aus irgendeinem Grund nicht aktiviert werden kann, führen Sie die folgenden Schritte aus:

1. Click the AdGuard icon at the menu bar and go to *Advanced* → *Reset settings...* → *Quit AdGuard...*

2. Geben Sie in der Spotlight-Suche Terminal ein, geben Sie `sudo rm -R /Library/Application\ Support/com.adguard.adguard` ein und führen Sie es aus.

3. Starten Sie Ihren Computer neu.

4. Öffnen Sie das Terminal erneut, geben Sie `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` ein und führen Sie es aus. Sie sollten Folgendes erhalten: `No such file or directory`.

5. Start AdGuard and enter your login information when prompted.
