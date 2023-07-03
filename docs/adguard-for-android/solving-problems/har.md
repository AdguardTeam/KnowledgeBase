---
title: How to get HAR files
sidebar_position: 5
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## What are HAR files?
The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/) website.

## How to get HAR files
Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. To get HAR files follow these steps:
1. Open AdGuard and go to **Settings** (⚙ icon in the lower right corner).
2. Tap **General**.
3. Tap **Advanced**.
4. Tap **Low-level settings**.
5. Scroll down and in the "Filtering" section activate **Capture HAR**.
6. Now reproduce the problem - open the app, perform the necessary actions (to make the ad appear etc.).
7. Turn **Capture HAR** off.
8. Go back to **Advanced**.
9. Tap **Export logs and system info**, then tap **Allow** (if necessary) and **Save**.

**Please send the file with logs (that you've got as a result) to the AdGuard support service.**

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.

:::

## How to analyze HAR files
Here are some sources that we can recommend to analyze HAR files:
* [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) is a HAR analyzer tool, visualizes HTTP Archive (HAR) log files created by HTTP tracking tools.
* [Fiddler](https://www.telerik.com/fiddler) is a web debugging proxy, lets you capture, inspect, monitor all HTTP(S) traffic between your computer and the Internet, mock requests, and diagnose network issues.
