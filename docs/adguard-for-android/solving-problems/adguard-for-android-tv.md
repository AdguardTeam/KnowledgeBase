---
title: How to install AdGuard for Android TV
sidebar_position: 15
---

:::info

This article is about AdGuard for Android TV, an ad blocker that protects your TV at the system level. To see how it works, [download the AdGuard TV app](https://agrd.io/tvapk)

:::

In most cases, stock browsers cannot install a file on your TV, but you can download a browser from the Google Play Store that has this functionality. In our guide, we will go through an example of installation using the TV Bro browser, but there are other options and you can choose the one that better suits your needs. As an alternative, you can use the [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader) app.

## Installing AdGuard for Android TV via browser

1. Install the [TV Bro browser](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) on your Android TV.

1. Download and install AdGuard for Android TV:

- Open the installed TV Bro browser on your Android TV.
- In the address bar of the browser, type `https://agrd.io/tvapk` and press *Enter* or follow the link.
- The browser will start downloading the AdGuard for Android TV installation file automatically.
- Once the download is complete, select *Downloads* in the browser control bar, then select the downloaded file.
- In a warning message, allow installing files from the browser.
- Return to your browser, open *Downloads*, and click the downloaded file.
- In the system window that appears, click *Install*, then *Done* or *Open*.

Done, AdGuard for Android TV is installed.

1. Launch AdGuard for Android TV:

- After the installation is complete, find the AdGuard app in the list of installed apps on your Android TV.
- Click the AdGuard icon to launch the app.
- Follow the on-screen instructions to complete the setup.

## Installing AdGuard for Android TV via ADB

1. Make sure that Android Debug Bridge (ADB) is installed on your computer. If not, you can follow the instructions on XDA Developers: [ADB Installation Guide](https://www.xda-developers.com/install-adb-windows-macos-linux).

1. Download [AdGuard for Android TV](https://agrd.io/tvapk).

1. In your TV settings, go to *System* → *About* and press the build number seven times to unlock developer options. Enable *USB debugging*.

1. Write down the IP address of your Android TV:

    - On your Android TV, navigate to Settings.
    - Select *System* → *About*.
    - Find *Network* and select *Wi-Fi* or *Ethernet*, depending on your connection type.
    - Go to the network section and find *IP address*. Note down this IP address.

1. Connect to Android TV via ADB:

    - Open the terminal or command prompt on your computer.
    - Enter the command `adb connect` and paste the IP address of your TV.
    - The connection will be established.

1. Install AdGuard for Android TV via ADB:

    - In the terminal, enter the command `adb install Downloads/adguard_tv.apk`. If necessary, replace `Downloads/adguard_tv.apk` with your path.
    - Wait for a message in the terminal indicating the successful installation of the app.
