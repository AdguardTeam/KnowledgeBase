---
title: 'Instalace/odinstalace'
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

## Požadavky na systém

**Verze operačního systému:** macOS 10.13 (64 bitů) nebo vyšší

**RAM:** alespoň 2 GB

**Prohlížeče:** Safari, Chrome, Firefox, Opera, Yandex.Browser a jakýkoli jiný prohlížeč kompatibilní s macOS

**Volné místo na disku:** 120 MB

## Instalace

Chcete-li do počítače nainstalovat AdGuard pro macOS, spusťte prohlížeč, do adresního řádku zadejte *adguard.com* a stiskněte **Stáhnout** [na otevřené stránce](https://adguard.com/download.html?auto=1).

![Download the app *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Počkejte, až se stáhne soubor *AdguardInstaller.dmg* a dvakrát klikněte na jeho ikonu v seznamu stažených souborů na panelu Doku.

![Double-click to open the file](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

Na ploše se zobrazí ikona AdGuardu. Kliknutím na ikonu otevřete instalační aplikaci a v otevřeném okně dvakrát klikněte na ikonu AdGuardu.

![Double-click the AdGuard icon](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Při prvním spuštění aplikace AdGuard Vás operační systém upozorní, že tato aplikace byla stažena z Internetu. Klikněte na **Otevřít**.

![Click Open](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

V dalším kroku musíte kliknout na **Instalovat**.

![Click Install](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Počkejte, až instalační program stáhne požadované soubory.

![Wait until the necessary files are downloaded](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Chcete-li aplikaci používat, potřebujete heslo správce k účtu macOS. V dialogovém okně zadejte heslo správce a stiskněte **OK**.

![Enter the password](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Nyní se zobrazí rychlý průvodce instalací, kde vám bude nabídnuta konfigurace ochrany podle vašich potřeb. Buď můžete začít ladit ihned ("Pojďme na to!") nebo krok prozatím přeskočit ("Ponechat tak jak je").

![Configure protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

A je to tady, AdGuard je na vašem Macu nainstalován!

## Odinstalace

### Obvyklá

Nejprve otevřete aplikaci Finder kliknutím na příslušnou ikonu:

![Open Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Přejděte do sekce Aplikace. Vyhledejte tam AdGuard, klikněte na něj pravým tlačítkem myši a vyberte **Přesunout do koše**.

![Move AdGuard to Trash *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Pokročilá

**Tento pokyn použijte pouze v případě, že víte, co děláte, nebo pokud vám naše služba podpory výslovně doporučila "pokročilou odinstalaci". Také nejprve proveďte všechny kroky z "obvyklé odinstalace".**

1. Poté odstraňte následující soubory AdGuardu:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (složka)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (soubor)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (složka)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (soubor)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (soubor)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (soubor)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (soubor)

    Za tímto účelem otevřete aplikaci Terminal, zadejte a proveďte následující příkazy:
    - `sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
    - `rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
    - `rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
    - `rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
    - `find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

1. Spusťte aplikaci **Monitor aktivity**.
1. Pomocí vyhledávacího nástroje vyhledejte proces **cfprefsd**.

    ![Run Activity Monitor](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Ukončete proces, který je spuštěn pod uživatelem (ne ten, který je spuštěn pod root). Chcete-li tak učinit, klikněte na proces a poté klikněte na tlačítko X v levém horním rohu. Potvrďte to v dialogovém okně.

    ![Confirm](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard je nyní z Macu odstraněn.
