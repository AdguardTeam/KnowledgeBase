---
title: HAR 파일을 수집하는 방법
sidebar_position: 1
---

HAR 파일은 기술 지원 팀이 복잡한 문제를 해결하는 데 도움이 됩니다. 이러한 파일을 만들려면 Chrome 또는 Firefox를 사용하는 것이 좋습니다. 그러나 IE 11, Edge 및 Safari에서는 `.har` 파일 생성 및 내보내기 기능도 제공합니다.

## Chrome {#chrome}

Chrome에서 HAR 파일을 만들려면 다음을 수행합니다.

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. Click on the **Network tab**.

1. 네트워크 탭의 왼쪽 상단에 있는 동그란 버튼을 찾아 빨간색 녹화 모드로 설정되어 있는지 확인합니다. 회색인 경우 클릭하여 빨간색으로 바꾸면 녹화가 시작됩니다.

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Edge {#edge}

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. Click on the **Network tab**.

1. 네트워크 탭의 왼쪽 상단에 있는 동그란 버튼을 찾아 빨간색 녹화 모드로 설정되어 있는지 확인합니다. 회색인 경우 클릭하여 빨간색으로 바꾸면 녹화가 시작됩니다.

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Firefox {#firefox}

To create a HAR file in Firefox:

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

1. Open Developer Tools in **Network** mode:

    - From menu: **Menu → Web Developer → Network**.
    - Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

1. Note the **Play/Pause** button at the top left of the Network tab.

    - 버튼이 재생 모드에 있어야 합니다.

1. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

1. Select the **Persist Logs** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduce the steps that create the issue.

1. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Internet Explorer 11 {#ie11}

To create a HAR file in Internet Explorer 11:

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

1. Open Developer Tools in **Network** mode:

    - From Tools cog wheel menu: **Developer Tools** → **Network tab**.
    - Keyboard: **F12 → Network** tab.

1. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.

    - 녹화 중 재생 버튼은 회색으로 표시되고 중지 버튼은 빨간색으로 표시됩니다. Put in **Play** mode.

1. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Hover over icons to see names.

    - **Clear session** button is a three line icon with an x on it.

1. Check the **Disable cache** check box.

1. Reproduce the steps that create the issue.

1. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Safari {#safari}

To create a HAR file in Safari:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.

    - If not visible, turn it on by going to **Safari → Settings → Advanced**.
    - Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

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

## Android {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

1. Choose **Advanced** in the menu.

1. Choose **Low Level Settings**

1. Activate `pref.har.capture` (you will have to restart the protection).

1. Now reproduce the problem — open the app, perform the necessary actions to make the ad appear.

1. Now turn `pref.har.capture` off again.

1. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

1. Check the **Enable HAR writing** box.

1. Reproduce the problem.

1. Go to **General settings** → Click **Export logs** → **Save**.

1. Disable HAR writing by unchecking the corresponding box.
