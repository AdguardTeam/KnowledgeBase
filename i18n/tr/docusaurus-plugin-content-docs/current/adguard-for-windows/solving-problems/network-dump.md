---
title: How to collect network dump with WireShark
sidebar_position: 12
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Sometimes, diagnosing network issues requires seeing exactly how your device communicates with the Internet. Collecting a network dump allows us to analyze this traffic and find the cause of your problem. In this guide, we will show you how to capture a network dump using Wireshark.

::: note

Data and files provided in dump files are processed in accordance with the [AdGuard Privacy policy](https://adguard.com/privacy.html).

:::

## 1. Wireshark'ı kur

Wireshark'ı [resmi sitesinden](https://www.wireshark.org/download.html) indirin. Kurulum programını çalıştırın ve talimatları izleyin. When prompted, install Npcap — this driver is necessary for Wireshark to capture network packets.

## 2. Prepare for capture

Başlamadan önce, **gereksiz tüm programları ve tarayıcı sekmelerini kapatın**. Bu, dökümdeki alakasız verilerin azaltılmasına yardımcı olur.

## 3. Capture network traffic

Wireshark'ı açın ve ağ arayüzlerinin bir listesini göreceksiniz. İhtiyacınız olanı seçin: Kablolu bağlantınız varsa Ethernet'i veya Wi-Fi kullanıyorsanız Kablosuz'u seçin.

Hangi arayüzü seçeceğinizden emin değilseniz, grafikte en fazla etkinliğe sahip olanı seçin — grafik ne kadar yüksekse, üzerinden geçen trafik de o kadar fazladır.

![Ana ekran](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/main_screen.png)

Double-click the selected interface to start the capture. Now, reproduce the issue you are experiencing, making sure to perform only the necessary actions to trigger the problem and avoid any other processes. Bu, sorunun izole edilmesine yardımcı olur ve ilgili trafiğin kaydedilmesini sağlar.

## 4. Stop capture and save the dump

After reproducing the issue, click the red Stop button at the top to finish the capture.

![Capture process \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/capturing_process.png)

To save the data, press Ctrl+S, enter a file name, and choose the .pcapng format. İşte bu kadar — ağ döküm dosyanız hazır.

When sending the dump, please also provide a timeline of events. Describe the main actions you took, such as when you launched the app and the steps that led to the issue, and include the approximate time the issue occurred.
