---
title: 如何从后台页面导出日志
sidebar_position: 1
---

## 从扩展程序的后台页面导出日志

### Chrome 浏览器

1. 打开 AdGuard 浏览器扩展，如果可以的话，请您尽可能重复导致错误的操作。 请记下错误发生的确切时间。

2. 转到 `chrome://extensions`。

3. 启用「开发者模式」。

   ![开发者模式 \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Click `background.html`.

   ![背景 \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. 打开「Console」（控制台）选项卡。

   ![控制台选项卡 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. 打开上下文菜单，选择「另存为…」。

   ![另存为 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox 浏览器

1. 打开 AdGuard 浏览器扩展，如果可以的话，请您尽可能重复导致错误的操作。 请记下错误发生的确切时间。

2. 转到 `about:addons`。

3. 单击「调试附加组件」。

   ![调试组件 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. 点击「检查」。

   ![检查 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. 打开「Console」（控制台）选项卡。

   ![控制台 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. 单击「Save all Messages to File」（将所有信息保存到文件）。

   ![保存 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## 发送日志记录

:::note

AdGuard 致力于保护用户的个人隐私。 我们严格遵守[隐私政策](https://adguard.com/privacy/browser-extension.html)，不收集用户的私人信息。 请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。 如果其中包含此类个人信息，我们建议您先将其删除。

:::

现在，您已经收集了日志，请按照以下步骤将日志提交给我们的开发团队：

1. 在 [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose) 上报告错误。
2. 将包含日志和复现时间的存档发送至 devteam@adguard.com 并附上指向您的 GitHub Issue 的链接。 您也可以将存档上传到 Google Drive，然后添加链接，而不是附加文件。
