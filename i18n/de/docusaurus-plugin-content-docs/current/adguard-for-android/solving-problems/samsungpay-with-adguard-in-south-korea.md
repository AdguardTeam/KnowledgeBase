---
title: So verwenden Sie Samsung Pay mit AdGuard in Südkorea
sidebar_position: 16
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Bei einigen ist ein Problem aufgetreten: Samsung Pay funktioniert nicht, wenn AdGuard ausgeführt wird. Dieses Problem tritt fast ausschließlich bei Geräten auf, die in Südkorea registriert sind.

Was ist die Ursache für dieses Problem? Manchmal funktioniert Samsung Pay nicht auf Geräten mit laufenden VPN-Diensten, und AdGuard ist eine dieser App. Standardmäßig verwendet AdGuard ein lokales VPN zum Filtern des Datenverkehrs, was bei der Verwendung von Samsung Pay zu Problemen führen kann.

Um mit Samsung Pay bezahlen zu können, muss daher AdGuard deaktiviert werden. Dies kann mit der Funktion *Samsung Pay erkennen* vermieden werden. Wenn diese Option aktiviert ist, wird die App AdGuard beim Öffnen der App Samsung Pay angehalten und beim Schließen der App wieder fortgesetzt.

:::note

Diese Funktion kann nur genutzt werden, wenn in den Einstellungen von AdGuard der Filtermodus Lokales VPN gewählt wurde. Wenn ein anderer Modus verwendet wird, funktioniert Samsung Pay ohne Unterbrechungen.

:::

Um *Samsung Pay erkennen* zu aktivieren, gehen Sie folgendermaßen vor:

1. Öffnen Sie die *Einstellungen* → *Allgemein* → *Erweitert* → *Low-Level-Einstellungen*.

1. Scrollen Sie zu *Samsung Pay erkennen* und bewegen Sie den Schieberegler nach rechts.

1. Tippen Sie auf *Erlauben* und geben Sie AdGuard Zugriff auf Informationen über die Nutzung anderer Anwendungen.

Dies wird benötigt, um Statistiken über den Betrieb von Samsung Pay zu sammeln, damit die Funktion *Samsung Pay erkennen* funktionieren kann.

Nachdem Sie diese Funktion aktiviert haben, wird beim Wechsel von Samsung Pay zu AdGuard die folgende im Screenshot gezeigte Meldung angezeigt.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternativ dazu können Sie das Filtern für Samsung Pay in der *App-Verwaltung* deaktivieren. Wechseln Sie einfach zum Bildschirm *App-Verwaltung* (dritter Reiter von unten), suchen Sie Samsung Pay in der Liste und schalten Sie den Schalter bei *Datenverkehr über AdGuard leiten* aus.
