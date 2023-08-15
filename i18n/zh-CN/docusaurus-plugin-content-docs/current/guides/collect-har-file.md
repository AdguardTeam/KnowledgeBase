---
title: 收集 HAR 文件的方式
sidebar_position: 1
---

HAR 文件可帮助我们的技术支持团队解决复杂的问题。 为了创建这种文件，我们建议使用 Chrome 或火狐浏览器。 不过， IE 11、Edge 和 Safari 也支持 `.har` 文件的生成和导出功能。

## Chrome 浏览器 {#chrome}

如要在 Chrome 中创建 HAR 文件请执行以下操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![Chrome 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. 重复导致问题的步骤。

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Edge 浏览器 {#edge}

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![edge 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. 重复导致问题的步骤。

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Firefox 浏览器 {#firefox}

如要在火狐浏览器中创建 HAR 文件请执行以下操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. Open Developer Tools in **Network** mode:
- From menu: **Menu → Web Developer → Network**.
- Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

3. Note the **Play/Pause** button at the top left of the Network tab.
- 按钮应处于继续记录模式。

4. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

5. Select the **Persist Logs** check box on the Network tab.

6. Check the **Disable cache** check box.

![firefox 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. 重复导致问题的步骤。

8. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

9. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Internet Explorer11 浏览器 {#ie11}

要在 Internet Explorer 11 中创建 HAR 文件：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

2. Open Developer Tools in **Network** mode:
- From Tools cog wheel menu: **Developer Tools** → **Network tab**.
- Keyboard: **F12 → Network** tab.

3. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.
- 录音时继续按钮将变为灰色，停止按钮为红色。 Put in **Play** mode.

4. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. 将鼠标悬停在图标上可以查看名称。
- **Clear session** button is a three line icon with an x on it.

5. Check the **Disable cache** check box.

6. 重复导致问题的步骤。

7. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

8. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## Safari 浏览器 {#safari}

如要在 Safari 中创建 HAR 文件请执行以下操作：

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.
- If not visible, turn it on by going to **Safari → Settings → Advanced**.
- Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

2. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

3. Open **Network** tab in Web Inspector:
- From menu: **Develop → Show Web Inspector → Network**.
- Keyboard: **⌥+⌘+I→Network**

4. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

5. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.
- Keyboard: **⌘+K**

6. Check the **Disable caches** check box.

7. 重复导致问题的步骤。

8. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

9. 发送至 AdGuard 支持团队（support@adguard.com），并详细描述问题。 屏幕截图也会有所帮助。

## 安卓系统 {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

2. Choose **Advanced** in the menu.

3. Choose **Low Level Settings**

4. 激活 `pref.har.capture`（您必须重新启动保护）

5. 重试导致问题的操作：打开应用程序，执行必要的操作以使广告出现。

6. 现在再次关闭 `pref.har.capture`。

7. Go back and tap **Export logs and system info** → **Save**.

## Windows 系统 {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

2. Check the **Enable HAR writing** box.

3. 重复导致问题的步骤。

4. Go to **General settings** → Click **Export logs** → **Save**.

5. 通过取消勾选相应的方框禁止 HAR 写入。
