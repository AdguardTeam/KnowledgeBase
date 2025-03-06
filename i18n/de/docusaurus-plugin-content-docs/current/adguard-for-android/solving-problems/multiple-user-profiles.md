---
title: Probleme, die durch mehrere Benutzerprofile verursacht werden
sidebar_position: 10
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In diesem Artikel finden Sie Methoden, wie Sie Probleme mit AdGuard lösen können, wenn Sie *mehrere Konten* oder *Eingeschränkte Profile* auf Ihren Android-Geräten einrichten.

## Probleme, die durch mehrere Benutzerprofile verursacht werden

Unter Android 9 und höher, wenn AdGuard für mehr als ein Benutzerprofil auf Ihrem Gerät installiert ist, können Probleme bei der Deinstallation der App auftreten. Wenn Sie AdGuard aus einem Benutzerprofil deinstallieren, wird die App weiterhin in der App-Liste angezeigt, aber Sie können sie weder deinstallieren noch neu installieren. Dies geschieht, weil AdGuard für ein anderes Benutzerprofil auf dem Gerät installiert ist.

Wenn Sie versuchen, AdGuard nach einem erfolglosen Entfernungsversuch erneut zu installieren, erhalten Sie die Fehlermeldung „Sie können die App nicht auf Ihrem Gerät installieren“.

Um dieses Problem zu lösen, müssen Sie die App für alle Benutzer deinstallieren: Gehen Sie zu Einstellungen → Alle Apps → AdGuard. Tippen Sie auf die drei-Punkte-Menü (⋮) in der oberen rechten Ecke und wählen Sie *Für alle Benutzer deinstallieren*.

![Deinstallation *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Probleme, die durch die Verwendung eines Profils im eingeschränkten Modus verursacht werden

Bei Smartphones, Tablets oder Fernsehern mit dem Betriebssystem Android 7+ kann es zu dem Problem kommen, dass von **Profil mit eingeschränktem Modus** verursacht wird. Wenn Sie ein solches Profil haben, erhält **AdGuard**, wie andere Anwendungen, die VPN verwenden, Einschränkungen für die selektive Filterung von VPN-Datenverkehr. Infolgedessen kann AdGuard keinen Schutz im **lokalen VPN-Modus** starten. Einer der Gründe für diese Situation kann auch die Verwendung des **Dual App/Dual Messenger-Profils** auf Ihrem Gerät sein. Im Folgenden werden die Empfehlungen beschrieben, die Sie beim Auftreten dieses Problems anwenden können.

### Lösungen

Sie haben drei Möglichkeiten, das Problem zu lösen:

### Option 1: Erteilen von Berechtigungen für AdGuard über ADB (Android Debug Bridge)

:::note

Dieser Lösungsansatz ist ab **AdGuard v3.5 nightly 6** verfügbar. Wenn Sie eine ältere Version verwenden, können Sie die neueste Aktualisierung [hier](https://adguard.com/adguard-android/overview.html) herunterladen.

:::

1. Aktivieren Sie den **Entwicklermodus** und aktivieren Sie **USB-Debugging**:

    - Öffnen Sie **Einstellungen** auf Ihrem Telefon;
    - Wechseln Sie zum Abschnitt **System** (letzter Punkt im Einstellungsmenü). In diesem Abschnitt finden Sie den Unterpunkt **Über das Telefon**;
    - Tippen Sie 7 Mal auf die Zeile **Versionsnummer**. Danach erhalten Sie eine Benachrichtigung: **Sie sind jetzt ein Entwickler** (Geben Sie ggf. einen Entsperrcode für das Gerät ein);
    - Öffnen Sie **Systemeinstellungen** → **Entwickleroptionen** → Blättern Sie nach unten und aktivieren Sie **USB-Debugging** → Bestätigen Sie, dass das Debugging im Fenster **USB-Debugging zulassen** aktiviert ist, nachdem Sie die Warnung sorgfältig gelesen haben.

    :::note

    Wenn Sie Schwierigkeiten oder zusätzliche Fragen haben, finden Sie die vollständige Anleitung [hier](https://developer.android.com/studio/debug/dev-options).


:::

1. [Installieren und konfigurieren Sie](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Auf der Windows-Plattform müssen Besitzer von **Samsung** möglicherweise [dieses Dienstprogramm](https://developer.samsung.com/mobile/android-usb-driver.html)installieren.

1. Schließen Sie Ihr Gerät mit einem **USB-Kabel** an den Computer oder Laptop an, auf dem Sie **ADB** installiert haben;

1. Öffnen Sie **die Befehlszeile** auf Ihrem PC:

    - **Cmd.exe**, wenn Sie **Windows** verwenden;
    - **Terminal**, wenn Sie **macOS** verwenden;

1. Geben Sie den Befehl `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` ein und drücken Sie **Enter**.

### Option 2: Entfernen des *eingeschränkten Benutzerkontos*

Wie Sie Benutzerkonten von einem Android-Gerät aus verwalten können, erfahren Sie [hier](https://support.google.com/a/answer/6223444?hl=en).

:::note

In einigen Fällen werden eingeschränkte Benutzerkonten implizit erstellt und können nicht entfernt werden. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Im Folgenden erfahren Sie, wie Sie das Problem in diesen Fällen beheben können.

:::

### Option 3: AdGuard im *Lokalen HTTP-Proxy-Modus* verwenden (erfordert root)

Um diesen Modus zu aktivieren, öffnen Sie **AdGuard-Einstellungen** → **Netzwerk** → **Filtermethode** → **Lokaler HTTP-Proxy**

### LG- und Samsung-Geräte

Bei **LG**- oder **Samsung**-Handys kann ein ähnliches Problem auftreten. Es kann durch die Verwendung der **Dual App/Dual Messenger** Funktion verursacht werden (die automatisch ein eingeschränktes Profil erstellt). Um dieses Problem zu lösen, müssen Sie diese Funktion deaktivieren.

### Samsung

- Öffnen Sie die **Einstellungen**;
- Tippen Sie auf **Erweitert**;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Sperren Sie das Gerät für 5 Minuten;
- Entsperren Sie den Bildschirm und versuchen Sie erneut, das VPN-Profil zu erstellen.

### LG

- Öffnen Sie die **Einstellungen**;
- Wählen Sie den Tab **Allgemein**;
- Scroll down and press **Dual App**;
- Entfernen Sie alle Apps aus der Liste;
- Starten Sie Ihr Gerät neu.
