---
title: So erfassen Sie Netzwerk-Dumps mit WireShark
sidebar_position: 13
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Um Netzwerkprobleme zu diagnostizieren, muss man mitunter genau prüfen, wie Ihr Gerät mit dem Internet kommuniziert. Das Erfassen eines Netzwerk-Dumps ermöglicht es uns, diesen Datenverkehr zu analysieren und die Ursache für Ihr Problem zu finden. In dieser Anleitung wird gezeigt, wie Sie mit Wireshark einen Netzwerk-Dump erfassen können.

:::note

Daten und Dateien, die in Dump-Dateien bereitgestellt werden, werden gemäß der [Datenschutzerklärung von AdGuard] (https://adguard.com/privacy.html) verarbeitet.

:::

## 1. Wireshark installieren

Laden Sie Wireshark von der [offiziellen Website](https://www.wireshark.org/download.html) herunter. Führen Sie das Installationsprogramm aus und folgen Sie den Anweisungen. Wenn Sie dazu aufgefordert werden, installieren Sie Npcap (Dieser Treiber ist notwendig, damit Wireshark Netzwerkpakete erfassen kann).

## 2. Erfassung vorbereiten

Schließen Sie vor dem Start **alle unnötigen Programme und Browser-Tabs**. Dadurch wird die Anzahl der nicht zugehörigen Daten im Dump reduziert.

## 3. Netzwerkverkehr aufzeichnen

Öffnen Sie Wireshark, und es wird eine Liste der Netzwerkschnittstellen angezeigt. Wählen Sie die gewünschte Option: Ethernet, wenn Sie eine kabelgebundene Verbindung nutzen, oder Wireless, wenn Sie über eine WLAN-Verbindung verbunden sind.

Wenn Sie sich nicht sicher sind, welche Schnittstelle Sie wählen sollen, wählen Sie diejenige mit der höchsten Aktivität im Diagramm (je höher das Diagramm, desto mehr Datenverkehr fließt durch sie).

![Hauptbildschirm](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/main_screen.png)

Doppelklicken Sie auf die ausgewählte Schnittstelle, um die Erfassung zu starten. Reproduzieren Sie nun das Problem, das bei Ihnen auftritt, und stellen Sie sicher, dass Sie nur die notwendigen Aktionen durchführen, um das Problem auszulösen und alle anderen Prozesse zu vermeiden. Dies hilft, das Problem einzugrenzen und stellt sicher, dass nur der relevante Datenverkehr aufgezeichnet wird.

## 4. Erfassung beenden und Aufzeichnung speichern

Nachdem Sie das Problem reproduziert haben, klicken Sie oben auf die rote Schaltfläche „Stopp“, um die Erfassung zu beenden.

![Erfassungsprozess \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/capturing_process.png)

Um die Daten zu speichern, drücken Sie Strg+S, vergeben einen Dateinamen und wählen das Format .pcapng. Das war's – Ihre Netzwerk-Dump-Datei ist erstellt.

Wenn Sie den Dump senden, geben Sie bitte auch eine Zeitleiste der Ereignisse an. Beschreiben Sie die wichtigsten Maßnahmen, die Sie ergriffen haben, z. B. wann Sie die Anwendung gestartet haben und welche Schritte zu dem Problem geführt haben, und geben Sie die ungefähre Uhrzeit an, zu der das Problem aufgetreten ist.
