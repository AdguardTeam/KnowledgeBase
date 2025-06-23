---
title: 证书相关问题
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 如需了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

为能够过滤 HTTPS 流量并有效拦截广告和拦截器，AdGuard 会产生特殊（且唯一）的 Root 证书并将其安装到系统存储。 用户可阅读[此文](/general/https-filtering/what-is-https-filtering)以了解需要安装证书的原因。

通常，一旦 AdGuard 证书在安装过程期间添加到系统证书存储区，浏览器就会信任它。 但在某些情况下这还不够，您可能会看到警告或错误。 这经常发生在基于 Firefox 的浏览器（如 Mozilla Firefox，PaleMoon，Waterfox 等）或 Yandex.Browser 的身上。

Here are some common issues:

- [Firefox 的浏览器中的「*潜在的安全风险*」错误](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser 证书警告](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## Firefox 的浏览器中的「*潜在的安全风险*」错误

![安全风险错误](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

旧的 FireFox 版本以及基于它们的浏览器不信任系统存储中的证书，而只信任本地存储中的证书。 从 v68 版本开始，FireFox 信任系统证书，但您仍然会遇到「连接不受信任」错误。 如果发生这种情况，首先尝试转到「*网络*」点击「*重新安装证书*」按钮。

![重新安装证书](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

如果没有帮助，请按照说明手动将 AdGuard 证书添加到 FireFox 存储。

> 此说明适用于 Firefox 浏览器。 在其它基于 Firefox 的浏览器中，按钮和菜单项目的名称可能有所不同。

1. 运行 AdGuard。

1. 转到 [http://local.adguard.org/cert](http://local.adguard.org/cert) 并单击「*下载*」按钮。 浏览器应开始下载 **cert.cer** 文件。

    :::note

    用户也可以通过 AdGuard 程序的*「设置」→「网络」→「HTTPS 过滤」*点击链接以打开下载页面。


:::

    ![证书设置](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. 打开浏览器，然后打开「*设置*」。

1. 转到「*隐私和安全*」标签。

1. 向下滚动到「*证书*」点击「*查看证书*」按钮。

    ![查看证书窗口](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. 选择「*权限*」标签。

1. 点击「*导入...*」。

    ![证书设置：导入](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. 浏览下载的 **cert.cer** 文件并点击「*打开*」。

1. 选中复选框「*信任此 CA 以识别网站*」点击「*确定*」。

    ![证书设置：复选框](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard 证书安装成功。 重新启动浏览器，错误应消失。

## Yandex.Browser 证书警告

Windows 版 AdGuard + Yandex.Browser 的用户可能会遇到以下警告：

![Yandex 证书警告](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### 为什么会发生这种情况

AdGuard 和 Yandex 都非常重视用户在因特网上的安全。 Yandex 当前的策略是对浏览器无法识别的证书向用户发出警告。 这并非毫无依据，因为有时恶意程序会注射自己的证书并借此危害系统和窃取私人数据。

但 AdGuard 也会将其证书添加到受信任的证书中。 这会导致用户遇到的警告消息。

### 如何解决此问题

最简单的方式就是点击「**转到网站**」按钮。 这将告知 Yandex.Browser 记忆 AdGuard 证书为受信任的证书，至少在一段时间内如此。 通常，用户不会再看到此讯息，但无论出于何种原因，警告偶尔出现也并非不可能。 在此种情况下，只需再次点击相同的按钮 *（请确保它是 AdGuard 的证书！）*。

在 AdGuard 内禁用 HTTPS 过滤也会阻止 Yandex.Browser 再次显示此信息，但其代价很大：所有通过 HTTPS 加载的广告（包括 **Yandex 的广告**）都会显示，如 YouTube，Facebook，Instagram 等等。 如您要保持较高的广告拦截质量，我们强烈建议您不要如此做。

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
