---
title: 如何收集 HAR 文件
sidebar_position: 5
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

## 什么是 HAR 文件？

HAR（HTTP ARchive）格式是 JSON 格式的存档文件，用于记录 Web 浏览器与站点的交互。 HAR 格式的规范定义了 HTTP 交易的存档数据，浏览器使用该数据来导出其加载的网页的详细信息。 您可以在 [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/) 网站上找到有关 HAR 文件格式及其使用规范的更详细说明。

## 如何收集 HAR 文件

有时我们需要对文件进行分析以拦截由于某种原因难以再现的特定广告。 要获取 HAR 文件，请执行以下步骤：

1. Open AdGuard and go to **Settings** (⚙ icon in the lower right corner).
2. Tap **General** →**Advanced** → **Low-level settings**.
3. Scroll down and activate **Capture HAR** in the Filtering section.
4. Open the app and perform the necessary actions to reproduce the problem.
5. Turn **Capture HAR** off.
6. Go back to **Advanced**.
7. Tap **Export logs and system info** → **Allow** (if necessary) → **Save**.

**请将导出的日志记录发送给 AdGuard 客服支持。**

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.

:::

## How to analyze HAR files

以下是我们可以推荐用于分析 HAR 文件的一些资源：

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) 是一个 HAR 分析工具，可视化由 HTTP 跟踪工具创建的 HTTP Archive（HAR）日志文件。
- [Fiddler](https://www.telerik.com/fiddler) 是一个 Web 调试代理，可让您捕获、检查、监控计算机和 Internet 之间的所有 HTTP(S) 流量、模拟请求和诊断网络问题。
