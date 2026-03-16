---
title: 'Installazione'
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisiti di sistema

**Operating system version:** macOS 12 or later

**RAM:** almeno 2 GB

**Browser:** Safari, Chrome, Firefox, Opera, Yandex.Browser e ogni altro browser compatibile con macOS

**Spazio libero su disco:** 120 MB

## Installazione

Per installare AdGuard per Mac sul tuo computer, avvia il tuo browser, digita *adguard.com* nella barra degli indirizzi e premi su **Scarica** [sulla pagina che si apre](https://adguard.com/download.html?auto=1).

![Scarica l'app *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Attendi il download di *AdguardInstaller.dmg* e fai doppio click sulla sua icona nell'elenco dei file scaricati sul pannello del Dock.

![Doppio click per aprire il file](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

L'icona di AdGuard apparirà sul tuo desktop. Cliccala per aprire l'app di installazione e fai doppio clic sull'icona di AdGuard nella finestra aperta.

![Doppio click sull'icona di AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Al primo avvio di AdGuard, il tuo sistema operativo ti avviserà che l'applicazione è stata scaricata da Internet. Clicca su **Apri**.

![Clicca Apri](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Nel passaggio successivo, dovrai cliccare su **Installa**.

![Clicca Installa](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Attendi che il programma d'installazione scarichi i file necessari.

![Attendi che i file necessari siano scaricati](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Per utilizzare l'applicazione, necessiterai della password dell'amministratore per il tuo profilo di macOS. Inserisci la password quando richiesto nella finestra e premi **OK**.

![Inserisci la password](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Ora, vedrai una procedura guidata d'installazione rapida, in cui ti sarà richiesto di configurare la protezione secondo le tue esigenze. Puoi avviare subito la messa a punto ("Facciamolo!") o saltarla per il momento ("Lascia così com'è").

![Configura la protezione](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Ecco fatto, AdGuard è installata sul tuo Mac!

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

However, you still can [download an older, compatible version](https://agrd.io/adguard_for_mac_v2-17)

## Disinstallazione

### Normale

Prima di tutto, apri l'app Finder cliccando sulla rispettiva icona:

![Apri Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Vai alla sezione Applicazioni. Trova AdGuard, clicca con il destro e scegli **Sposta nel Cestino**.

![Sposta AdGuard nel Cestino *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Avanzate

**Utilizza queste istruzioni soltanto se sai cosa stai facendo o se il nostro servizio di supporto ti ha specificamente consigliato la 'disinstallazione avanzata'. Inoltre, esegui prima tutti i passaggi dalla "disinstallazione regolare".**

1. Successivamente, elimina i seguenti file di AdGuard:
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (cartella)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (file)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (file)

    Per farlo, apri l'app del Terminale, quindi, inserisci ed esegui i seguenti comandi:

    ```bash
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Avvia l'app **Monitoraggio Attività**.
1. Utilizzando lo strumento di ricerca, trova il processo **cfprefsd**.

    ![Esegui Monitoraggio Attività](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Arresta il processo in esecuzione sotto l'utente (non quello eseguito sotto root). Per farlo, clicca sul processo, quindi clicca sulla X in alto a sinistra. Conferma l'azione nella finestra.

    ![Conferma](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard è ora rimosso dal tuo computer.
