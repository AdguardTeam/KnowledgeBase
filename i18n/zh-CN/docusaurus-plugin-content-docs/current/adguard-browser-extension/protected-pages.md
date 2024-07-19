---
title: 受浏览器保护的网页
sidebar_position: 5
---

:::info

本文介绍的是 AdGuard 浏览器扩展，它仅保护用户的浏览器。 如果需要保护整个设备，请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)。

:::

在您使用像是 AdGuard 浏览器扩展的网络扩展程序时，某些受限域名会禁止访问或限制权限。 因此，广告拦截扩展无法与这些页面进行交互或修改其内容。 换句话说，这些扩展无法屏蔽那些网页上的广告和其他烦人的元素。

## Chromium 浏览器限制

基于 Chromium 的浏览器（如 Google 浏览器）会维护一个不允许扩展程序访问的受限域名列表。 这些域名包括：

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- 以 `chrome://`、`chrome-extension://`、`https://chrome.google.com/webstore/` 开头的 URL
- PDF 文件
- 禁用 Javascript 的页面
- 安全警告页面
- 错误页面，如 404 错误和网络错误
- 以 `view-source:` 或 `data:` 开头的 URL

## Firefox 浏览器限制

同样，Firefox 浏览器也有自己的一组不允许运行扩展程序的受限域名。 这些受限域名包括：

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## 修改 Firefox 浏览器的限制

更改高级设置可能会影响 Firefox 浏览器的稳定性和安全性。 仅推荐高级用户更改设置。 如果您已了解相关风险，但仍希望启用受保护页面中被禁止的扩展程序，请按照以下步骤操作：

1. 点击菜单按钮 →「**扩展与主题**」→「**扩展程序**」。
2. 单击要在受限制网站上启用的扩展（本例中为 AdGuard）。
3. 在「**在受限站点上运行**」中选择「**允许**」。

或者，您也可以：

1. 打开一个新标签页，在地址栏中输入 **about:config**。
2. 按「**返回**」。 您可能会收到警告。 在这种情况下，请单击「**接受风险并继续**」。
3. 搜索 `extensions.webextensions.restrictedDomains`。 如果您找不到此首选项，可以直接创建。 只需选择「**Boolean**」类型，然后单击「**+**」添加即可。
4. 单击该首选项旁边的切换按钮，将其值更改为「`false`」。
5. 重启 Firefox 浏览器。

有关这方面的更多信息，请阅读 [Mozilla 支持网站的文章](https://mzl.la/3POXoWi)。
