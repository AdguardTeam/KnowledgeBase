---
title: 如何收集 HAR 文件
sidebar_position: 5
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 什么是 HAR 文件？

HAR（HTTP ARchive）格式是 JSON 格式的存档文件，用于记录 Web 浏览器与站点的交互。 HAR 格式的规范定义了 HTTP 交易的存档数据，浏览器使用该数据来导出其加载的网页的详细信息。 您可以在 [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/) 网站上找到有关 HAR 文件格式及其使用规范的更详细说明。

## 如何收集 HAR 文件

有时我们需要对文件进行分析以拦截由于某种原因难以再现的特定广告。 要获取 HAR 文件，请执行以下步骤：

1. 打开 AdGuard 并转到「**设置**」（右下角的「⚙」图标）。
2. 点击「**通用**」→「**高级**」→「**低级设置**」。
3. 向下滚动并激活「过滤」部分中的「**捕获 HAR**」。
4. 打开应用程序并执行必要的操作来重现问题。
5. 关闭「**捕获 HAR**」。
6. 回到「**高级设置**」。
7. 点击「**导出日志和系统信息**」→「**允许**」（如有必要）→「**保存**」。

**请将导出的日志记录发送给 AdGuard 客服支持。**

:::note

如果用户在信息中指定 HelpDesk 号或 GitHub 问题号，我们的支持团队会更快地处理您的问题。

:::

## 如何分析 HAR 文件

以下是我们可以推荐用于分析 HAR 文件的一些资源：

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) 是一个 HAR 分析工具，可视化由 HTTP 跟踪工具创建的 HTTP Archive（HAR）日志文件。
- [Fiddler](https://www.telerik.com/fiddler) 是一个 Web 调试代理，可让您捕获、检查、监控计算机和 Internet 之间的所有 HTTP(S) 流量、模拟请求和诊断网络问题。
