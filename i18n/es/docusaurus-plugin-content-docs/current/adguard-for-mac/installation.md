---
title: 'Install/Uninstall'
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## System  requirements

**Operating system version:** macOS 10.13 (64 bit) or higher

**RAM:** at least 2 GB

**Browsers:** Safari, Chrome, Firefox, Opera, Yandex.Browser, and any other macOS compatible browser

**Free disk space:** 120 MB

## Installation

To install AdGuard for Mac on your computer, launch your browser, type *adguard.com* in the address bar, and press **Download** [on the page that opens](https://adguard.com/download.html?auto=1).

![Download the app *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Wait for *AdguardInstaller.dmg* to download and double-click its icon in the list of downloaded files on the Dock panel.

![Double-click to open the file](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

The AdGuard icon will appear on your desktop. Click it to open the installation app and double-click the AdGuard icon in the opened window.

![Double-click the AdGuard icon](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Upon the first AdGuard launch, your operating system will warn you that this application has been downloaded from the Internet. Click **Open**.

![Click Open](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

In the next step, you'll need to click **Install**.

![Click Install](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Wait for the installer to download the required files.

![Wait until the necessary files are downloaded](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

To use the application, you will need the administrator password for your macOS account. Enter the password when prompted in the dialogue box and press **OK**.

![Enter the password](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Now, you'll see a quick installation wizard where you'll be offered to configure protection to your needs. You can either start fine-tuning right away ("Let's do it!") or skip for now ("Leave as it is").

![Configure protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Here we are, AdGuard is installed on your Mac!

## Uninstall

### Regular

First of all, open the Finder app by clicking the respective icon:

![Open Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Go to the Applications section. Find AdGuard there, right-click it and choose **Move to Trash**.

![Move AdGuard to Trash *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Advanced

**Use this instruction only if you know what you are doing or if our support service specifically recommended you the 'advanced uninstall'. Also, do all the steps from the "regular uninstall" first.**

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
1. Using search tool, find the process **cfprefsd**.

    ![Run Activity Monitor](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Stop the process which is being run under the user (not the one run under root). To do so, click the process and then click X on the upper left. Confirm it in the dialogue window.

    ![Confirm](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard is removed from your computer now.
