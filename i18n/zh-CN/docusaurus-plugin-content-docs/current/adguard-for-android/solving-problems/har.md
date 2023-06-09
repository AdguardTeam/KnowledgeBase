---
title: 如何收集 HAR 文件
sidebar_position: 5
---

:::note

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## 什么是 HAR 文件？
HAR（HTTP ARchive）格式是 JSON 格式的存档文件，用于记录 Web 浏览器与站点的交互。 HAR 格式的规范定义了 HTTP 交易的存档数据，浏览器使用该数据来导出其加载的网页的详细信息。 您可以在 [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/) 网站上找到有关 HAR 文件格式及其使用规范的更详细说明。

## 如何收集 HAR 文件
有时我们需要对文件进行分析以拦截由于某种原因难以再现的特定广告。 要获取 HAR 文件，请执行以下步骤：
1. 打开 AdGuard ，前往「设置」
2. 在菜单中选择「高级」
3. 选择「低级设置」
4. 激活 “pref.har.capture”（您必须重新启动保护）
5. 重试导致问题的操作：打开应用程序，执行必要的操作以使广告出现。
6. 现在再次关闭 “pref.har.capture”。
7. Go back and tap "Export logs and system info" → Save.

**请将导出的日志记录发送给 AdGuard 客服支持。**

> 注意：如果你在信息中指定 HelpDesk 号或 GitHub 问题号，我们的支持团队会更快地处理您的问题。

## How to analyze HAR files
以下是我们可以推荐用于分析 HAR 文件的一些资源：
* [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) 是一个 HAR 分析工具，可视化由 HTTP 跟踪工具创建的 HTTP Archive（HAR）日志文件。
* [Fiddler](https://www.telerik.com/fiddler) 是一个 Web 调试代理，可让您捕获、检查、监控计算机和 Internet 之间的所有 HTTP(S) 流量、模拟请求和诊断网络问题。
