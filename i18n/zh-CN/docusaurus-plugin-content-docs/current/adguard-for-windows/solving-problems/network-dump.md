---
title: How to collect network dump with WireShark
sidebar_position: 13
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

Sometimes, diagnosing network issues requires seeing exactly how your device communicates with the Internet. Collecting a network dump allows us to analyze this traffic and find the cause of your problem. In this guide, we will show you how to capture a network dump using Wireshark.

:::note

Data and files provided in dump files are processed in accordance with the [AdGuard Privacy policy](https://adguard.com/privacy.html).

:::

## 1. Install Wireshark

Download Wireshark from the [official website](https://www.wireshark.org/download.html). Run the installer and follow the instructions. When prompted, install Npcap — this driver is necessary for Wireshark to capture network packets.

## 2. Prepare for capture

Before starting, **close all unnecessary programs and browser tabs**. This will help reduce unrelated data in the dump.

## 3. Capture network traffic

Open Wireshark, and you will see a list of network interfaces. Select the one you need: Ethernet if you have a wired connection, or Wireless if you’re using Wi-Fi.

If you’re not sure which interface to choose, pick the one with the most activity in the graph — the higher the graph, the more traffic goes through it.

![Main screen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/main_screen.png)

Double-click the selected interface to start the capture. Now, reproduce the issue you are experiencing, making sure to perform only the necessary actions to trigger the problem and avoid any other processes. This helps isolate the issue and ensures relevant traffic is recorded.

## 4. Stop capture and save the dump

After reproducing the issue, click the red Stop button at the top to finish the capture.

![Capture process \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/capturing_process.png)

To save the data, press Ctrl+S, enter a file name, and choose the .pcapng format. That’s it — your network dump file is ready.

When sending the dump, please also provide a timeline of events. Describe the main actions you took, such as when you launched the app and the steps that led to the issue, and include the approximate time the issue occurred.
