---
title: 收集 HAR 文件的方式
sidebar_position: 1
---

HAR 文件可帮助我们的技术支持团队解决复杂的问题。 为了创建这种文件，我们建议使用 Chrome 或火狐浏览器。 不过， IE 11、Edge 和 Safari 也支持 `.har` 文件的生成和导出功能。

## Chrome 浏览器 {#chrome}

如要在 Chrome 中创建 HAR 文件请执行以下操作：

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. Click on the **Network tab**.

1. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![Chrome 浏览器](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Edge 浏览器 {#edge}

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. Click on the **Network tab**.

1. 找到 Network 标签中的左上角的圆形按钮，并确认它处于红色录音模式。 如果是灰色的，请您单击使其变为红色的，并开始录音。

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Firefox 浏览器 {#firefox}

To create a HAR file in Firefox:

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. Open Developer Tools in **Network** mode:

    - From menu: **Menu → Web Developer → Network**.
    - Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

1. Note the **Play/Pause** button at the top left of the Network tab.

    - 按钮应处于继续记录模式。

1. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

1. Select the **Persist Logs** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Internet Explorer11 浏览器 {#ie11}

To create a HAR file in Internet Explorer 11:

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. Open Developer Tools in **Network** mode:

    - From Tools cog wheel menu: **Developer Tools** → **Network tab**.
    - Keyboard: **F12 → Network** tab.

1. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.

    - 录音时继续按钮将变为灰色，停止按钮为红色。 Put in **Play** mode.

1. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Hover over icons to see names.

    - **Clear session** button is a three line icon with an x on it.

1. Check the **Disable cache** check box.

1. Reproduce the steps that create the issue.

1. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Safari 浏览器 {#safari}

To create a HAR file in Safari:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.

    - If not visible, turn it on by going to **Safari → Settings → Advanced**.
    - Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

1. 前往出现问题的 URL。 暂时不要重复导致问题的操作。

1. Open **Network** tab in Web Inspector:

    - From menu: **Develop → Show Web Inspector → Network**.
    - Keyboard: **⌥+⌘+I→Network**

1. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.

    - Keyboard: **⌘+K**

1. Check the **Disable caches** check box.

1. Reproduce the steps that create the issue.

1. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, too.

## 安卓系统 {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

1. Choose **Advanced** in the menu.

1. Choose **Low Level Settings**

1. Activate `pref.har.capture` (you will have to restart the protection).

1. Now reproduce the problem — open the app, perform the necessary actions to make the ad appear.

1. Now turn `pref.har.capture` off again.

1. Go back and tap **Export logs and system info** → **Save**.

## Windows 系统 {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

1. Check the **Enable HAR writing** box.

1. Reproduce the problem.

1. Go to **General settings** → Click **Export logs** → **Save**.

1. Disable HAR writing by unchecking the corresponding box.
