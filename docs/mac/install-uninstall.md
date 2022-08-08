---
title: 'Install/Uninstall'
sidebar_position: 3
---

## System  requirements

**Operating system version:** macOS 10.12 (64 bit) or higher

**RAM:** at least 2 GB

**Browsers:** Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, and any other macOS compatible browser

**Free disk space:** 120 Mbytes

## Installation


To install AdGuard for macOS on your computer, launch your browser, type _adguard.com_ in the address bar, and press **Download** on the page that opens.

![Download the app](https://cdn.adguard.com/content/kb/ad_blocker/mac/1.jpg)

Wait for _AdguardInstaller.dmg_ to download and double-click on its icon in the list of downloaded files on the Dock panel. 

![Double click to open the file](https://cdn.adguard.com/content/kb/ad_blocker/mac/2.jpg)

The AdGuard icon will appear on your Desktop. Click on it to open the installation app. Then double-click on the AdGuard icon in the opened installation window.

![Double click on the AdGuard icon](https://cdn.adguard.com/content/kb/ad_blocker/mac/3.jpg)

 Upon the first AdGuard launch, your operating system will warn you that this application has been downloaded from the Internet. Click **Open**.

![Click Open](https://cdn.adguard.com/content/kb/ad_blocker/mac/4.jpg)

In the next step, you'll need to click **Install**.

![Click Install](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/5.png)

Wait for the installer to download the required files.

![Wait until the necessary files are downloaded](https://cdn.adguard.com/content/kb/ad_blocker/mac/6.jpg)

To use the application, you will need the administrator password for your macOS account. Enter the password when propped in the dialogue box and press **OK**.

![Enter the password](https://cdn.adguard.com/content/kb/ad_blocker/mac/7.jpg)


Now, you'll see a quick installation wizard where we will offer you to configure protection to your needs. You can either start fine-tuning right away ("Let's do it!") or skip for now ("Leave as it is").

![Configure protection](https://cdn.adguard.com/content/kb/ad_blocker/mac/installation-wizard.jpg)

Here we are, AdGuard is installed on your Mac! 

## Uninstall

### Regular
First of all, open 'Finder' app by clicking on a respective icon:

![Open Finder](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

Go to 'Applications' section. Find AdGuard there, right-click on it and choose 'Move to Trash'.

![Move AdGuard to Trash](https://cdn.adguard.com/content/kb/ad_blocker/mac/11.jpg)

### Advanced

**Use this instruction only if you know what you are doing or if our support service specifically recommended you the 'advanced uninstall'. Also, do all the steps from the 'regular uninstall first'.** After that, do the following:

* Delete following AdGuard files:
    * /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (folder)
    * ~/Library/Application Support/com.adguard.mac.adguard (folder)
    * ~/Library/Preferences/com.adguard.mac.adguard.plist (file)
    * ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (folder)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (file)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (file)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (file)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (file)

**To do so**, open the Terminal app, then enter and execute the following commands: 

`sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
`rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
`rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
`rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
`find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

* Run ’Activity Monitor’ app.
* Using search tool, find the process **cfprefsd**.

![Run Activity Monitor](https://cdn.adguard.com/content/kb/ad_blocker/mac/22.jpg)

* Stop the process which is being&nbsp;run under the user (not the one run under root). To do so, click on the process and then on the X on the upper left. Confirm it in the dialogue window.

![Confirm](https://cdn.adguard.com/content/kb/ad_blocker/mac/33.jpg)

AdGuard is removed from your computer now.