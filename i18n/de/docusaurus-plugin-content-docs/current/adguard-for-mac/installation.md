---
title: 'Installation/Deinstallation'
sidebar_position: 2
---

## Systemanforderungen

**Betriebssystemversion:** macOS 10.13 (64 Bit) oder höher

**RAM:** mindestens 2 GB

**Browser:** Safari, Chrome, Firefox, Opera, Yandex.Browser und jeder andere macOS-kompatible Browser

**Freier Speicherplatz:** 120 MB

## Installation

To install AdGuard for macOS on your computer, launch your browser, type _adguard.com_ in the address bar, and press **Download** [on the page that opens](https://adguard.com/download.html?auto=1).

![Laden Sie die App herunter *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Warten Sie, bis _AdguardInstaller.dmg_ heruntergeladen wurde, und doppelklicken Sie auf das Symbol in der Liste der heruntergeladenen Dateien im Dock-Bedienfeld.

![Doppelklicken Sie, um die Datei zu öffnen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

Das AdGuard-Symbol erscheint auf Ihrem Desktop. Klicken Sie darauf, um die Installations-App zu öffnen, und doppelklicken Sie im geöffneten Fenster auf das AdGuard-Symbol.

![Doppelklicken Sie auf das AdGuard-Symbol](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Beim ersten Start von AdGuard wird Ihr Betriebssystem Sie warnen, dass diese App aus dem Internet heruntergeladen wurde. Klicken Sie auf **Öffnen**.

![Klicken Sie auf Öffnen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Im nächsten Schritt müssen Sie auf **Installieren** klicken.

![Klicken Sie auf Installieren](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Warten Sie auf die Ausführung des Installationsprogramms.

![Warten Sie, bis die erforderlichen Dateien heruntergeladen wurden](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Um die App nutzen zu können, benötigen Sie das Administratorpasswort für Ihr macOS-Konto. Geben Sie das Passwort ein, wenn Sie im Dialogfeld dazu aufgefordert werden, und drücken Sie **OK**.

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

1. After that, delete following AdGuard files:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (folder)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (file)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (folder)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (file)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (file)

    To do so, open the Terminal app, then enter and execute the following commands:
    - `sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
    - `rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
    - `rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
    - `rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
    - `find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

1. Run the **Activity Monitor** app.
1. Suchen Sie mit dem Suchwerkzeug den Prozess **cfprefsd**.

    ![Starten Sie die Anwendung „Activity Monitor“](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Stoppen Sie den Prozess, der unter dem Benutzer ausgeführt wird (nicht den, der unter Root ausgeführt wird). Klicken Sie dazu auf den Prozess und dann oben links auf X. Bestätigen Sie dies im Dialogfenster.

    ![Bestätigen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard ist jetzt von Ihrem Computer entfernt.
