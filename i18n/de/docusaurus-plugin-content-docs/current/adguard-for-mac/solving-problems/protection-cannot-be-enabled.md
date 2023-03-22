---
title: Der Schutz kann nicht aktiviert werden
sidebar_position: 2
---
 
Wenn der AdGuard-Schutz aus irgendeinem Grund nicht aktiviert werden kann, führen Sie die folgenden Schritte aus:

1. Klicken Sie auf das AdGuard-Symbol in der Menüleiste → gehen Sie zu Erweitert → Einstellungen zurücksetzen… → AdGuard beenden…

2. Geben Sie in der Spotlight-Suche Terminal ein, geben Sie `sudo rm -R /Library/Application\ Support/com.adguard.adguard` ein und führen Sie es aus.

3. Starten Sie Ihren Computer neu.

4. Öffnen Sie das Terminal erneut, geben Sie `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` ein und führen Sie es aus. Sie sollten Folgendes erhalten: `No such file or directory`.

5. Starten Sie AdGuard, geben Sie Login und Passwort ein, wenn Sie dazu aufgefordert werden.