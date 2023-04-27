---
title: 收集 HAR 文件的方式
sidebar_position: 1
---

HAR 文件可帮助我们的技术支持团队解决复杂的问题。 为了创建这种文件，我们建议使用 Chrome 或火狐浏览器。 不过， IE 11、Edge 和 Safari 也支持 `.har` 文件的生成和导出功能。

## Chrome 浏览器 {#chrome}

如要在 Chrome 中创建 HAR 文件请执行以下操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. 打开***开发者工具***：

- 从菜单中找到：***「菜单」→「更多工具」→「开发者工具」***。
- 键盘：***Ctrl + Shift + C***，或 ***Ctrl + Alt + I***，或***⌥+⌘+ I（使用于 Mac）***。

3. 单击 ***「Network」（网络）标签***。

4. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

5. 使用「***clear***」（清除）按钮（记录按钮旁边带有一条线的圆圈按钮）以清除所有之前的活动。

6. 选择 Network 标签中的「***Preserve log***」（保留日志）复选框。

7. 勾选「***Disable cache***」（禁用缓存）复选框。

![chrome 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. 重复导致问题的步骤。

9. Save session as a .har file by right-clicking the grid and selecting ***Save as HAR with content***.

10. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Edge 浏览器 {#edge}

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. 打开 ***Developer Tools***（开发者工具）：

- 从菜单中找到：***「菜单」→「更多工具」→「开发者工具」***。
- 键盘：***Ctrl + Shift + C***，或 ***Ctrl + Alt + I***，或***⌥+⌘+ I（使用于 Mac）***。

3. 单击 ***「Network」（网络）标签***。

4. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

5. 使用「***clear***」（清除）按钮（记录按钮旁边带有一条线的圆圈按钮）以清除所有之前的活动。

6. 选择 Network 标签中的「***Preserve log***」（保留日志）复选框。

7. 勾选「***Disable cache***」（禁用缓存）复选框。

![edge 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. 重复导致问题的步骤。

9. Save session as a .har file by right-clicking the grid and selecting ***Save as HAR with content***.

10. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Firefox 浏览器 {#firefox}

如要在火狐浏览器中创建 HAR 文件请执行以下操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. 在「***Network***」（网络）模式下打开开发者工具：
- 从菜单中找到：***「菜单」→「Web 开发者」→「网络」***。
- 键盘：***Ctrl + Shift + C*** 或 **⌥+⌘+ E（使用于 Mac）**。

3. 注意：网络标签左上方的***继续/暂停***按钮。
- 按钮应处于继续记录模式。

4. 如果当前在网格中显示任何信息，请单击继续/暂停按钮旁边的***删除垃圾箱***按钮进行清除。

5. 选中网络标签上的「***Persist Logs***」（继续记录）复选框。

6. 勾选「***Disable cache***」（禁用缓存）复选框。

![firefox 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. 重复导致问题的步骤。

8. Save session as a .har file by right-clicking the grid and selecting ***Save all as HAR***.

9. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Internet Explorer11 浏览器 {#ie11}

要在 Internet Explorer 11 中创建 HAR 文件：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. 在「***Network***」（网络）模式下打开开发者工具：
- 从工具齿轮菜单中找到：***「开发者工具」***→***「网络」标签***。
- 键盘：***F12 →「网络」***标签。

3. 请注意网络标签左上方的开始分析会话「***Play***」（继续）按钮和停止分析的「***Stop***」（停止）按钮。
- 录音时继续按钮将变为灰色，停止按钮为红色。 置于「*** Play***」（继续）模式。

4. 使用网络标签上的「***Clear session***」（清除会话）按钮以清除显示在下部网格中的所有会话信息。 将鼠标悬停在图标上可以查看名称。
- 「***Clear session*** 」（清除会话）按钮是一个三行图标，上面带有一个「X」。

5. 勾选「***Disable cache***」（禁用缓存）复选框。

6. 重复导致问题的步骤。

7. 单击网络标签上的「***Save disk***」（保存磁盘） 按钮（导出为 HAR）将会话内容另存为 .har 文件。

8. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Safari 浏览器 {#safari}

如要在 Safari 中创建 HAR 文件请执行以下操作：

1. 查看屏幕顶部的 Safari 菜单栏是否有「***Develop***」（开发）菜单。 选菜单栏中的「***Show Develop menu in menu bar***」（显示开发菜单）和底部的复选框。
- 如果没有，请转到 ***Safari →「Preferences 」（首选项）→「Advanced」（高级）***将其启用。

2. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

3. 在 Web Inspector（Web 检查器）中打开「***Network***」（网络）标签：
- 从菜单中找到：***「开发」→「显示 Web 检查器」→「网络」***。
- 键盘：***⌥+⌘+ I →「网络」***

4. 选网络标签右侧的「***Preserve Log***」（保留日志）复选框。

5. 单击「Network」最右侧的「***delete Trash***」（删除垃圾箱）图标，清除当前的网络项目。

6. 勾选「***Disable cache***」（禁用缓存）复选框。

7. 重复导致问题的步骤。

8. 单击「***Preserve Log***」旁边的「***Export***」（导出）图标，将会话内容另存为 .har 文件。

9. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## 安卓系统 {#android}

要获取 HAR 文件，请执行以下步骤：

1. 打开 AdGuard 并转到「***设置***」

2. 在菜单中选择「***高级***」

3. 选择「***低级设置***」

4. 激活 `pref.har.capture`（您必须重新启动保护）

5. 重试导致问题的操作：打开应用程序，执行必要的操作以使广告出现。

6. 现在再次关闭 `pref.har.capture`。

7. 返回，然后点击「***导出日志和系统信息***」→「***保存***」。

## Windows 系统 {#windows}

1. 打开「***设置***」→「***一般设置***」→ 「**高级设置**」并向下滚动。

2. 勾选「***Enable HAR writing***」（启用 HAR 写入）复选框。

3. 重复导致问题的步骤。

4. 前往「***General settings***」（常规设置）→ 点击「***Export logs***」（导出日志）→「***Save***」（保存）。

5. 通过取消勾选相应的方框禁止 HAR 写入。
