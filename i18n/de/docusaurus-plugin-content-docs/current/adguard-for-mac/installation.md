---
title: 'Installation/Deinstallation'
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einen multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

## Systemanforderungen

**Betriebssystemversion:** macOS 10.15 (64 Bit) oder höher

**RAM:** mindestens 2 GB

**Browser:** Safari, Chrome, Firefox, Opera, Yandex.Browser und jeder andere macOS-kompatible Browser

**Freier Speicherplatz:** 120 MB

## Installation

Um AdGuard für Mac auf Ihrem Computer zu installieren, starten Sie Ihren Browser, geben Sie *adguard.com* in die Adressleiste ein und drücken Sie **Herunterladen** [auf der sich öffnenden Seite](https://adguard.com/download.html?auto=1).

![Laden Sie die App herunter *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Warten Sie, bis *AdguardInstaller.dmg* heruntergeladen wurde, und doppelklicken Sie auf das Symbol in der Liste der heruntergeladenen Dateien im Dock-Bedienfeld.

![Doppelklicken Sie, um die Datei zu öffnen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

Das AdGuard-Symbol erscheint auf Ihrem Desktop. Klicken Sie darauf, um die Installations-App zu öffnen, und doppelklicken Sie im geöffneten Fenster auf das AdGuard-Symbol.

![Doppelklicken Sie auf das AdGuard-Symbol](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Beim ersten Start von AdGuard wird Ihr Betriebssystem Sie warnen, dass diese App aus dem Internet heruntergeladen wurde. Klicken Sie auf **Öffnen**.

![Klicken Sie auf Öffnen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Im nächsten Schritt müssen Sie auf **Installieren** klicken.

![Klicken Sie auf Installieren](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Warten Sie auf die Ausführung des Installationsprogramms.

![Warten Sie, bis die erforderlichen Dateien heruntergeladen wurden](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Um die App nutzen zu können, benötigen Sie das Administratorpasswort für Ihr macOS-Konto. Geben Sie das Passwort ein, wenn Sie dazu aufgefordert werden, und drücken Sie **OK**.

![Geben Sie das Passwort ein](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Jetzt sehen Sie einen Schnellinstallationsassistenten, in dem Sie angeboten werden, den Schutz nach Ihren Bedürfnissen zu konfigurieren. Sie können entweder gleich mit dem Feintuning beginnen („Auf gehts!“) oder vorerst überspringen („Nicht ändern“).

![Schutz konfigurieren](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

So, AdGuard ist auf Ihrem Mac installiert!

## Deinstallation

### Regulär

Öffnen Sie zunächst die Finder-App, indem Sie auf das entsprechende Symbol klicken:

![Öffnen Sie den Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Gehen Sie zum Abschnitt Anwendungen. Suchen Sie dort AdGuard, klicken Sie mit der rechten Maustaste darauf und wählen Sie **In den Papierkorb verschieben**.

![Verschieben Sie AdGuard in den Papierkorb *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Erweitert

**Verwenden Sie diese Anleitung nur, wenn Sie wissen, was Sie tun, oder wenn unser Support-Service Ihnen ausdrücklich die „erweiterte Deinstallation“ empfohlen hat. Führen Sie außerdem zuerst alle Schritte aus der „regulären Deinstallation“ durch.**

1. Löschen Sie danach folgende AdGuard-Dateien:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (Ordner)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (Datei)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (Ordner)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (Datei)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (Datei)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (Datei)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (Datei)

    Öffnen Sie dazu die Terminal-App, geben Sie die folgenden Befehle ein und führen Sie sie aus:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Starten Sie die App **Aktivitätsanzeige**.
1. Suchen Sie mit dem Suchwerkzeug den Prozess **cfprefsd**.

    ![Starten Sie die Anwendung „Activity Monitor“](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Stoppen Sie den Prozess, der unter dem Benutzer ausgeführt wird (nicht den, der unter Root ausgeführt wird). Klicken Sie dazu auf den Prozess und dann oben links auf X. Confirm the action in the dialogue window.

    ![Bestätigen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard ist jetzt von Ihrem Computer entfernt.
