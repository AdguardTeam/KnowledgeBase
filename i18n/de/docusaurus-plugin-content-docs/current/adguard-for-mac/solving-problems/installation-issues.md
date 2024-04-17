---
title: Lösung von Installationsproblemen
sidebar_position: 5
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

## Fehler „Installation fehlgeschlagen“ in macOS Catalina

Während der Installation kann ein Fehler wie dieser auftreten:

![Installationsfehlerbildschirm](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Folgen Sie dieser Anleitung, um das Problem zu lösen:

1. Starten Sie Ihren Mac neu
2. Wenn Ihr Mac neu startet, halten Sie die Tasten *Command(⌘) + R* gedrückt, sobald der Startton ertönt. Halten Sie die Tasten gedrückt, bis das Apple-Logo erscheint, um den Computer in den Wiederherstellungsmodus zu versetzen.
3. Wählen Sie in der oberen Leiste *Dienstprogramme* → *Terminal*, und führen Sie folgenden Befehl aus: `csrutil disable`
4. Starten Sie den Mac neu und melden Sie sich im Administratorprofil an
5. Öffnen Sie das Finder-Fenster und wählen Sie in der oberen Leiste *Gehen zu* → *Gehen zum Ordner* und geben Sie `~/private/`ein
6. Erstellen Sie einen Ordner mit dem Namen *tmp* und geben Sie Ihr Passwort ein
7. Starten Sie die AdGuard-Installation

Wenn die Installation abgeschlossen ist, starten Sie Ihren Mac im Wiederherstellungsmodus mithilfe der obigen Anweisungen neu und führen Sie den Befehl `csrutil enable` im Terminal aus, um den Systemschutz zu aktivieren.
