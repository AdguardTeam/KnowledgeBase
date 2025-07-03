---
title: Zertifikatsinstallation in einem Sicherheitsordner
sidebar_position: 12
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Speichern Sie das Zertifikat (in diesem Stadium können Sie es umbenennen, um es später leichter auffinden zu können, was Sie auch tun müssen).
1. Wenn das Pop-Up-Fenster *Installationsanweisungen* angezeigt wird, tippen Sie **NICHT** **Einstellungen öffnen**.
1. Minimieren Sie die App und wechseln Sie zum *Sicherheitsordner*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Bestätigen Sie die Installation mit Ihrem Grafikschlüssel/Passwort/Fingerabdruck.
1. Suchen Sie das zuvor gespeicherte Zertifikat, wählen Sie es aus und tippen Sie dann auf **Fertig**.
1. Return to the AdGuard app and navigate back to the main screen.
1. Fertig! Das Zertifikat wurde installiert.
