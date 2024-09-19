---
title: How to generate a HAR file
sidebar_position: 1
---

HAR 文件可帮助我们的技术支持团队解决复杂的问题。 为了创建这种文件，我们建议使用 Chrome 或火狐浏览器。 不过， IE 11、Edge 和 Safari 也支持 `.har` 文件的生成和导出功能。

## Chrome 浏览器 {#chrome}

要在 Chrome 中创建 HAR 文件，请按照以下步骤操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. 打开**开发者工具**：

    - 在菜单中点击**「菜单」→「更多工具」→「开发者工具」**。
    - 键盘： **Ctrl+Shift+C**，或 **Ctrl+Alt+I**，或 **⌥+⌘+I (Mac)**。

1. 点击「**Network**」标签。

1. 找到 Network（网络）标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果其为灰色，则请点击它使其变为红色以开始录制。

1. 使用「**Clear**」按钮（记录按钮旁边带有一条线的圆圈按钮）以清除所有之前的活动。

1. 选择 Network 标签中的「**Preserve log**」（保留日志）复选框。

1. 选中「**Disable cache**」 。

    ![Chrome 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. 重复导致问题的步骤。

1. 通过右键单击网格并选择「**将所有内容另存为 HAR**」将会话另存为 .har 文件。

1. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Edge 浏览器 {#edge}

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. 打开**开发者工具**：

    - 在菜单中点击**「菜单」→「更多工具」→「开发者工具」**。
    - 键盘： **Ctrl+Shift+C**，或 **Ctrl+Alt+I**，或 **⌥+⌘+I (Mac)**。

1. 点击「**Network**」标签。

1. 找到 Network（网络）标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果其为灰色，则请点击它使其变为红色以开始录制。

1. 使用「**Clear**」按钮（记录按钮旁边带有一条线的圆圈按钮）以清除所有之前的活动。

1. 选择 Network 标签中的「**Preserve log**」（保留日志）复选框。

1. 选中「**Disable cache**」 。

    ![edge 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. 重复导致问题的步骤。

1. 通过右键单击网格并选择「**将所有内容另存为 HAR**」将会话另存为 .har 文件。

1. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Firefox 浏览器 {#firefox}

要在 Firefox 中创建 HAR 文件，请按照以下步骤操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. 在**Network**模式下打开「开发工具」：

    - 从菜单中找到：**「菜单」→「Web 开发者」→「网络」**。
    - 键盘：**Ctrl+Shift+C**，或 ⌥+⌘+E**(Mac)**。

1. 注意：Network 标签左上方的**继续/暂停**按钮。

    - 按钮应处于继续记录模式。

1. 如果当前在网格中显示任何信息，请单击继续/暂停按钮旁边的「**Empty trash can**」按钮进行清除。

1. 选中网络标签上的「**Persist Logs**」（继续记录）复选框。

1. 选中「**Disable cache**」。

    ![firefox 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. 重复导致问题的步骤。

1. 通过右键单击网格并选择「**Save all as HAR**」将会话另存为 .har 文件。

1. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Internet Explorer11 浏览器 {#ie11}

要在 Internet Explorer 11 浏览器中创建 HAR 文件，请按照以下步骤操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. 在**Network**模式下打开「开发工具」：

    - 工具齿轮菜单：「**开发工具**」→「**Network**」。
    - 键盘：**F12 →「Network」**选项卡。

1. 请注意网络标签左上方的开始分析会话「**Play**」（继续）按钮和停止分析的「**Stop**」（停止）按钮。

    - 录音时继续按钮将变为灰色，停止按钮为红色。 进入「**Play**」模式。

1. 使用网络标签上的「**Clear session**」（清除会话）按钮以清除显示在下部网格中的所有会话信息。 将鼠标悬停在图标上可以查看名称。

    - 「**Clear session** 」（清除会话）按钮是一个三行图标，上面带有一个「X」。

1. 选中「**Disable cache**」 。

1. 重复导致问题的步骤。

1. 单击网络标签上的「**Save disk**」（保存磁盘） 按钮（导出为 HAR）将会话内容另存为 .har 文件。

1. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Safari 浏览器 {#safari}

要在 Safari 中创建 HAR 文件，请按照以下步骤操作：

1. 查看屏幕顶部的 Safari 菜单栏是否有「**Develop**」（开发）菜单。

    - 如果沒有开发者菜单，请转到**「Safari」→「Preferences 」（首选项）→「Advanced」（高级）**将其启用。
    - 选菜单栏中的「**Show Develop menu in menu bar**」（显示开发菜单）和底部的复选框。

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. 在网络检查器中打开「**Network**」选项卡：

    - 菜单：**「开发」→「显示 Web 检查器」→「Network」**。
    - 键盘：**F12 →「Network」**选项卡。

1. 在网络选项卡左侧的「**Other filter options...**」（其他过滤选项...）菜单中勾选「**Preserve Log**」（保留日志）复选框。

    ![safari 浏览器](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. 单击「Network」最右侧的「**Delete Trash**」（删除垃圾箱）图标，清除当前的网络项目。

    - 键盘：**⌘+K**

1. 选中「**Disable cache**」（禁用缓存）。

1. 重复导致问题的步骤。

1. 单击「**Preserve Log**」旁边的「**Export**」（导出）图标，将会话内容另存为 .har 文件。

1. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Android 系统 {#android}

要创建 HAR 文件，请执行以下步骤：

1. 打开 AdGuard ，前往「**设置**」。

1. 在菜单中选择「**高级**」。

1. 选择「**低级设置**」。

1. 激活 `pref.har.capture`（必须重新启动保护）。

1. 重试导致问题的操作：打开应用程序，执行必要的操作以使广告出现。

1. 现在再次关闭 `pref.har.capture`。

1. 返回并点击「**导出日志和系统信息**」→「**保存**」。

## Windows 系统 {#windows}

1. 打开**「设置」→「常规设置」**→**「高级设置」**并向下滚动。

1. 选中「**启动 HAR 写入**」。

1. 复现问题。

1. 转到**「常规设置」**→ 单击**「导出日志」**→**「保存」**。

1. 通过取消勾选相应的方框禁止 HAR 写入。
