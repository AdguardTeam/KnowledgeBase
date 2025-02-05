---
title: Zertifikatsinstallation in einem Sicherheitsordner
sidebar_position: 13
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Wenn Sie AdGuard im [*Sicherheitsordner* auf Ihrem Android-Gerät](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) installieren (dies gilt vor allem für Samsung-Geräte), kann es zu Schwierigkeiten bei der Installation des HTTPS-Zertifikats kommen. Das Problem ist, dass der *Sicherheitsordner* einen eigenen Bereich hat, in dem die Zertifikate gespeichert werden. Wenn Sie jedoch alles nach der regulären Anleitung zur Zertifikatsinstallation ([hier beschrieben](/adguard-for-android/features/settings#https-filtering)) durchführen, wird das Zertifikat in den Hauptspeicher installiert und spielt für Ihren Werbeblocker im *Sicherheitsordner* keine Rolle. Um dieses Problem zu lösen und das Zertifikat für Ihren AdGuard für Android in den *Sicherheitsordner* zu installieren, folgen Sie bitte stattdessen diesen Anweisungen:

1. Nach der Installation der App und der Verbindung mit dem lokalen VPN tippen Sie auf **AKTIVIEREN** neben der Meldung *HTTPS-Filterung ist deaktiviert*.
1. Tippen Sie auf **Weiter** → **Weiter** → **Jetzt speichern** → **Zertifikat speichern**.
1. Speichern Sie das Zertifikat (in diesem Stadium können Sie es umbenennen, um es später leichter auffinden zu können, was Sie auch tun müssen).
1. Wenn das Pop-Up-Fenster *Installationsanweisungen* angezeigt wird, tippen Sie **NICHT** **Einstellungen öffnen**.
1. Minimieren Sie die App und wechseln Sie zum *Sicherheitsordner*.
1. Tippen Sie auf das Drei-Punkte-Menü (⋮) und öffnen Sie **Einstellungen** ➜ **Andere Sicherheitseinstellungen**.
1. Tippen Sie auf **Sicherheitszertifikate** → **Vom Gerätespeicher installieren** → **CA-Zertifikat** → **Trotzdem installieren**
1. Bestätigen Sie die Installation mit Ihrem Grafikschlüssel/Passwort/Fingerabdruck.
1. Suchen Sie das zuvor gespeicherte Zertifikat, wählen Sie es aus und tippen Sie dann auf **Fertig**.
1. Kehren Sie zur AdGuard-App zurück und wechseln Sie zurück zum Hauptbildschirm. Möglicherweise müssen Sie wischen und die App neu starten, um die Meldung *HTTPS-Filterung ist ausgeschaltet* zu entfernen.
1. Fertig! Das Zertifikat wurde installiert.
