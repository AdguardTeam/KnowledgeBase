---
title: HAR 파일을 수집하는 방법
sidebar_position: 1
---

HAR 파일은 기술 지원 팀이 복잡한 문제를 해결하는 데 도움이 됩니다. 이러한 파일을 만들려면 Chrome 또는 Firefox를 사용하는 것이 좋습니다. 그러나 IE 11, Edge 및 Safari에서는 `.har` 파일 생성 및 내보내기 기능도 제공합니다.

## Chrome {#chrome}

Chrome에서 HAR 파일을 만들려면 다음을 수행합니다.

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. 네트워크 탭의 왼쪽 상단에 있는 동그란 버튼을 찾아 빨간색 녹화 모드로 설정되어 있는지 확인합니다. 회색인 경우 클릭하여 빨간색으로 바꾸면 녹화가 시작됩니다.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. 문제를 만드는 단계를 재현합니다.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. 문제에 대한 자세한 설명과 함께 AdGuard 지원팀(support@adguard.com)으로 전달하세요. 스크린샷을 첨부하는 것도 도움이 될 수 있습니다.

## Edge {#edge}

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. 네트워크 탭의 왼쪽 상단에 있는 동그란 버튼을 찾아 빨간색 녹화 모드로 설정되어 있는지 확인합니다. 회색인 경우 클릭하여 빨간색으로 바꾸면 녹화가 시작됩니다.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. 문제를 만드는 단계를 재현합니다.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. 문제에 대한 자세한 설명과 함께 AdGuard 지원팀(support@adguard.com)으로 전달하세요. 스크린샷을 첨부하는 것도 도움이 될 수 있습니다.

## Firefox {#firefox}

Firefox에서 HAR 파일을 만들려면 다음을 수행합니다.

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

2. Open Developer Tools in **Network** mode:
- From menu: **Menu → Web Developer → Network**.
- Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

3. Note the **Play/Pause** button at the top left of the Network tab.
- 버튼이 재생 모드에 있어야 합니다.

4. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

5. Select the **Persist Logs** check box on the Network tab.

6. Check the **Disable cache** check box.

![파이어폭스](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. 문제를 만드는 단계를 재현합니다.

8. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

9. 문제에 대한 자세한 설명과 함께 AdGuard 지원팀(support@adguard.com)으로 전달하세요. 스크린샷을 첨부하는 것도 도움이 될 수 있습니다.

## Internet Explorer 11 {#ie11}

Internet Explorer 11에서 HAR 파일을 만들려면 다음을 수행합니다.

1. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

2. Open Developer Tools in **Network** mode:
- From Tools cog wheel menu: **Developer Tools** → **Network tab**.
- Keyboard: **F12 → Network** tab.

3. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.
- 녹화 중 재생 버튼은 회색으로 표시되고 중지 버튼은 빨간색으로 표시됩니다. Put in **Play** mode.

4. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. 아이콘 위로 마우스를 가져가면 이름을 볼 수 있습니다.
- **Clear session** button is a three line icon with an x on it.

5. Check the **Disable cache** check box.

6. 문제를 만드는 단계를 재현합니다.

7. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

8. 문제에 대한 자세한 설명과 함께 AdGuard 지원팀(support@adguard.com)으로 전달하세요. 스크린샷을 첨부하는 것도 도움이 될 수 있습니다.

## Safari {#safari}

Safari에서 HAR 파일을 만들려면 다음을 수행합니다.

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.
- If not visible, turn it on by going to **Safari → Settings → Advanced**.
- Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

2. 문제가 발생한 URL로 이동합니다. 아직 문제를 재현하지 마세요.

3. Open **Network** tab in Web Inspector:
- From menu: **Develop → Show Web Inspector → Network**.
- Keyboard: **⌥+⌘+I→Network**

4. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

5. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.
- Keyboard: **⌘+K**

6. Check the **Disable caches** check box.

7. 문제를 만드는 단계를 재현합니다.

8. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

9. 문제에 대한 자세한 설명과 함께 AdGuard 지원팀(support@adguard.com)으로 전달하세요. 스크린샷을 첨부하는 것도 도움이 될 수 있습니다.

## Android {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

2. Choose **Advanced** in the menu.

3. Choose **Low Level Settings**

4. `pref.har.capture`를 활성화합니다(보호 기능을 다시 시작해야 합니다).

5. 이제 문제를 재현하여 앱을 열고 광고가 표시되도록 필요한 작업을 수행합니다.

6. 이제 `pref.har.capture`을 다시 끕니다.

7. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

2. Check the **Enable HAR writing** box.

3. 문제를 재현합니다.

4. Go to **General settings** → Click **Export logs** → **Save**.

5. 해당 확인란을 선택 취소하여 HAR 쓰기를 비활성화합니다.
