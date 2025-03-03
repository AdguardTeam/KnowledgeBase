---
title: 如何修复 `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` 错误
sidebar_position: 11
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

有时，在 AdGuard Windows 版中启用 [HTTPS 过滤](/general/https-filtering/what-is-https-filtering)的用户无法访问某些网站，例如 google.com 和 youtube.com。 使用“严格证书锁定”的浏览器不会打开网站，而是会显示 `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` 错误。

以下是受影响的浏览器列表：

- Arkenfox
- Brace
- Cachy 浏览器
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad 浏览器
- Phoenix
- Tor 浏览器

如果用户的默认浏览器是其中之一，请执行以下操作以解决问题：

1. 在浏览器地址栏中输入 `about:config`
2. 在出现的菜单中，在搜索字段中输入 `security.cert_pinning.enforcement_level`。
3. 将 `security.cert_pinning.enforcement_level` 参数从 2 更改为 1。
