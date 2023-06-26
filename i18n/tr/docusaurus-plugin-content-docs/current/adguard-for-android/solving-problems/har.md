---
title: How to get HAR files
sidebar_position: 5
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

## What are HAR files?
The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/) website.

## HAR dosyaları nasıl edinilir
Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. To get HAR files follow these steps:
1. Open AdGuard and go to "Settings".
2. Choose "Advanced" in the menu.
3. Choose "Low Level Settings".
4. Activate "pref.har.capture" (you will have to restart the protection).
5. Now reproduce the problem - open the app, perform the necessary actions to make the ad appear.
6. Now turn "pref.har.capture" off again.
7. Geri dönün ve "Günlükleri ve sistem bilgisini dışa aktar" → Kaydet öğesine dokunun.

**Please send the file with logs (that you've got as a result) to the AdGuard support service.**

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.

:::

## HAR dosyaları nasıl analiz edilir
Here are some sources that we can recommend to analyze HAR files:
* [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) is a HAR analyzer tool, visualizes HTTP Archive (HAR) log files created by HTTP tracking tools.
* [Fiddler](https://www.telerik.com/fiddler) is a web debugging proxy, lets you capture, inspect, monitor all HTTP(S) traffic between your computer and the Internet, mock requests, and diagnose network issues.
