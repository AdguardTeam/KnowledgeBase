---
title: So werden AdGuard-Protokolle erfasst
sidebar_position: 3
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Zur Analyse und Diagnose verschiedener Probleme, die möglicherweise auftreten können, benötigt der AdGuard-Support möglicherweise AdGuard-Protokolldateien. These files contain records about errors and other events that occurr with the software. Nachfolgend finden Sie eine kurze Anleitung, wie Sie die Protokolldateien abrufen und gegebenenfalls an den Support-Dienst senden können.

> AdGuard ist dem Schutz Ihrer Privatsphäre verpflichtet. We strictly follow our [Privacy Policy](https://adguard.com/en/privacy/windows.html) and do not collect any private information about users. Bevor Sie Ihre Protokolle an das Support-Team senden, überprüfen Sie bitte die Datei, da sie zusätzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben möchten. Wenn sie solche persönlichen Informationen enthält, empfehlen wir Ihnen, sie zuerst zu löschen.

### Debug logs {#debug-logs}

1. Öffnen Sie die AdGuard-Einstellungen. Öffnen Sie den Abschnitt *Allgemeine Einstellungen*, blättern Sie bis zum Ende des Bildschirms und schalten Sie die *Protokollierungstiefe* auf *Zur Fehlersuche* um.

    ![Stufe der Fehlersuch-Protokollierung *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduzieren Sie das Problem.

    Wir empfehlen Ihnen dringend, sich den genauen Zeitpunkt zu notieren, zu dem Sie das Problem reproduziert haben: Das hilft unserem Support-Team, relevante Protokolleinträge zu finden und das Problem schneller zu lösen.

1. Exportieren Sie die aufgezeichneten Protokolle über die Schaltfläche *Protokoll exportieren*.

    ![Protokoll exportieren *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Speichern Sie das Archiv in einem beliebigen Ordner.

1. **Wichtig**: Setzen Sie nach dem Exportieren der Protokolle die Protokollierungsstiefe wieder auf *Standard*. Die Protokollierungsstufe *Zur Fehlersuche* verlangsamt die Anwendung.

1. Senden Sie das Archiv an den AdGuard-Support unter **support@adguard.com**, beschreiben Sie das Problem und vergessen Sie nicht, den Zeitpunkt anzugeben, zu dem Sie das Problem reproduziert haben.

### Protokolle der Ablaufverfolgung {#trace-logs}

Manchmal bittet das Support-Team Sie, *Ablaufverfolgungsprotokollen* zu senden. Dann müssen Sie Folgendes tun:

1. Beenden Sie AdGuard, indem Sie mit der rechten Maustaste auf das AdGuard-Symbol im Infobereich der Taskleiste klicken und *AdGuard beenden* wählen:

    ![AdGuard beenden *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Bitte lassen Sie den Dienst nicht laufen:

    ![AdGuard-Dienst beenden *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Öffnen Sie die Eingabeaufforderung (geben Sie `cmd` in der Startleiste ein).

1. Starten Sie die App mit dem Befehl `C:\"Program Files"\Adguard\Adguard.exe /trace` unabhängig von der Windows-Bitrate, wenn Sie AdGuard v7.16 für Windows oder höher installiert haben.

Wenn Sie eine ältere Version von AdGuard für Windows haben, führen Sie die Anwendung mit dem Befehl C:\"Program Files (x86)"\Adguard\Adguard.exe /trace aus, wenn Sie ein 64-Bit-Windows verwenden, und C:\"Program Files"\Adguard\Adguard.exe /trace, wenn Sie ein 32-Bit-Windows verwenden.

1. Reproduzieren Sie das Problem.

    Wir empfehlen Ihnen dringend, sich den genauen Zeitpunkt zu notieren, zu dem Sie das Problem reproduziert haben: Das hilft unserem Support-Team, relevante Protokolleinträge zu finden und das Problem schneller zu lösen.

1. Exportieren Sie die aufgezeichneten Protokolle über die Schaltfläche *Protokoll exportieren*.

    ![Protokoll exportieren *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Machen Sie sich keine Sorgen, wenn die Protokolldatei groß ist. Wir müssen so viele Details wie möglich wissen, um Ihr Problem lösen zu können.
