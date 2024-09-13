---
title: 手动安装证书
sidebar_position: 1
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

Mac 版 AdGuard 需要将 Root 证书安装到证书存储区，才能进行 [HTTPS 流量过滤](/general/https-filtering/what-is-https-filtering)。 在大多数情况下，首次运行应用程序时会自动执行安装，但使用基于 Gecko 的浏览器（如 Firefox、Waterfox）的用户，如果在浏览器中设置了主密码，则可能需要采取额外步骤（这些浏览器使用自己的证书存储空间，而不是系统的证书存储空间）。 出现提示时（允许 AdGuard 访问证书存储），必须输入主密码或手动安装证书。

如何在基于 Firefox 的浏览器中手动安装证书：

  1. 打开「*首选项*」。

  2. 转至「*隐私和安全*」→「*证书*」。

  3. 点击「*查看证书*」。

  4. 转到「*授权*」选项卡并单击「*导入..*」按钮。

  5. 选择 `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` 文件，或使用基于 Chromium 的浏览器（如 Google Chrome 或新 Edge）并在 AdGuard 中运行 HTTPS 过滤，从 http://local.adguard.org/cert 下载该文件。

不同的基于 Gecko 的浏览器可能需要不同的操作，但 `AdGuard Personal CA.cer ` 文件的基本流程和路径是相同的。

附注：[Setapp 应用程序版本](https://setapp.com/apps/adguard)的文件路径如下：`/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
