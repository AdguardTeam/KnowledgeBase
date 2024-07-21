---
title: Startprobleme unter macOS
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

Gelegentlich kann macOS die Beschädigung des Netzwerkerweiterungsmoduls von AdGuard verursachen, wodurch die App nicht verwendet werden kann. In diesem Fall sollten Sie je nach Betriebssystemversion einer dieser Anweisungen folgen.

## Startprobleme unter macOS 11 und höher

Wenn Sie Probleme beim Starten von AdGuard für Mac auf den Betriebssystemen Big Sur und Monterey haben, verwenden Sie bitte diese Anleitung:

1. Starten Sie den Mac neu und rufen Sie den [Wiederherstellungsmodus](https://support.apple.com/en-us/HT201255) auf.
1. Deaktivieren Sie SIP (starten Sie **Terminal** aus dem Menü **Utilities** und geben Sie `csrutil disable` ein).
1. Starten Sie den Mac neu.
1. Schließen Sie die AdGuard-App, öffnen Sie **Terminal** und geben Sie `systemextensionsctl reset` ein.
1. Starten Sie den Mac neu und rufen Sie den Wiederherstellungsmodus auf.
1. Aktivieren Sie SIP (starten Sie **Terminal** aus dem Menü **Utilities** und geben Sie `csrutil enable` ein).
1. Starten Sie die AdGuard-App und aktivieren Sie den Schutz.

## Startprobleme unter macOS 10

Wenn Sie Probleme beim Starten von AdGuard für Mac auf den Betriebssystemen Sierra, Mojave und Catalina haben, verwenden Sie bitte diese Anleitung:

1. Öffnen Sie **Terminal** und geben Sie den Befehl `ls -@lOae /private/var/db/KernelExtensionManagement` ein.
1. Stellen Sie sicher, dass das Kennzeichen `restricted` nicht vorhanden ist (wie auf dem Screenshot). ![Befehlsbeispiel *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Starten Sie Ihren Mac im Wiederherstellungsmodus neu.
1. Öffnen Sie **Dienstprogramme** → **Terminal**.
1. Geben Sie `csrutil disable` ein.
1. Geben Sie das Administrator-Passwort ein.
1. Starten Sie Ihren Mac neu.
1. Öffnen Sie **Terminal** und geben Sie den folgenden Befehl ein: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Starten Sie Ihren Mac im Wiederherstellungsmodus neu.
1. Öffnen Sie **Dienstprogramme** → **Terminal** → Geben Sie `csrutil enable` → Geben Sie das Administrator-Passwort ein → Starten Sie Ihren Mac neu.
1. Aktivieren Sie den AdGuard-Schutz.
