---
title: How to collect a HAR file
sidebar_position: 1
---

## Creating a HAR File {#har}

HAR files help our technical support teams troubleshoot complex issues. To create these files, we recommend using Chrome or Firefox. However, IE 11, Edge, and Safari also provide `.har` file generation and export capability.

## Chrome {#chrome}

To create a HAR file in Chrome:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.

2. Open ***Developer Tools***:

- From menu: ***Menu > More Tools > Developer Tools***.
- Keyboard: ***Ctrl+Shift+C***, or ***Ctrl+Alt+I***, or ***⌥+⌘+I for Mac***.

3. Click on the ***Network tab***.

4. Locate the round button at the top left of the Network tab and confirm it is in red recording mode. If it's grey, click to turn red to start recording.

5. Use the ***clear*** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the ***Preserve log*** check box on the Network tab.

7. Check the ***Disable cache*** check box.

![chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reproduce the steps that create the issue.

9. Save session as a .har file by right clicking on the grid and selecting ***Save as HAR with content***.

10. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Edge {#edge}

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.

2. Open ***Developer Tools***:

- From menu: ***Menu > More Tools > Developer Tools***.
- Keyboard: ***Ctrl+Shift+C***, or ***Ctrl+Alt+I***, or ***⌥+⌘+I for Mac***.

3. Click on the ***Network tab***.

4. Locate the round button at the top left of the Network tab and confirm it is in red recording mode. If it's grey, click to turn red to start recording.

5. Use the ***clear*** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the ***Preserve log*** check box on the Network tab.

7. Check the ***Disable cache*** check box.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reproduce the steps that create the issue.

9. Save session as a .har file by right clicking on the grid and selecting ***Save as HAR with content***.

10. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Firefox {#firefox}

To create a HAR file in Firefox:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.

2. Open Developer Tools in ***Network*** mode:
- From menu: ***Menu > Web Developer > Network***.
- Keyboard: ***Ctrl+Shift+C***, or **⌥+⌘+E (Mac)**.

3. Note the ***play/pause*** button at the top left of the Network tab.
- Button should be in play mode.

4. If any information is currently displayed in the grid, clear by clicking the ***delete trash can*** button next to the play/pause button.

5. Select the ***Persist Logs*** check box on the Network tab.

6. Check the ***Disable cache*** check box.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reproduce the steps that create the issue.

8. Save session as a .har file by right clicking on the grid and selecting ***Save all as HAR***.

9. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Internet Explorer 11 {#ie11}

To create a HAR file in Internet Explorer 11:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.

2. Open Developer Tools in ***Network*** mode:
- From Tools cog wheel menu: ***Developer Tools*** > ***Network tab***.
- Keyboard: ***F12 > Network*** tab

3. Note the start profiling session ***Play*** button and stop profiling ***Stop*** button at top left of Network tab.
- Play button will be gray when recording and Stop button will be red. Put in ***Play*** mode.

4. Clear any session info appearing in the lower grid using the ***Clear session*** button on Network tab. Hover over icons to see names.
- ***Clear session*** button is a three line icon with an x on it.

5. Check the ***Disable cache*** check box.

6. Reproduce the steps that create the issue.

7. Save session as a .har file by clicking on the ***Save disk*** button (Export as HAR) on Network tab.

8. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Safari {#safari}

To create a HAR file in Safari:

1. Check the Safari menu bar at the top of the screen for a ***Develop*** menu. Check the checkbox at the bottom next to ***Show Develop menu in menu bar***.
- If not visible, turn it on by going to ***Safari > Preferences > Advanced***.

2. Go to the URL where the issue occurs. Do not reproduce the issue yet.

3. Open ***Network*** tab in Web Inspector:
- From menu: ***Develop > Show Web Inspector > Network***.
- Keyboard: ***⌥+⌘+I > Network***

4. Check ***Preserve Log*** checkbox on right side of the Network tabs.

5. Clear current Network items by clicking the ***delete Trash*** icon at the far right of Network tabs.

6. Check the ***Disable cache*** check box.

7. Reproduce the steps that create the issue.

8. Save session as a .har file by clicking the ***Export*** icon next to ***Preserve Log***.

9. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, too.

## 安卓系统 {#android}

要获取 HAR 文件，请执行以下步骤：

1. Open AdGuard and go to ***Settings***.

2. Choose ***Advanced*** in the menu.

3. Choose ***Low Level Settings***

4. Activate `pref.har.capture` (you will have to restart the protection).

5. Now reproduce the problem — open the app, perform the necessary actions to make the ad appear.

6. Now turn `pref.har.capture` off again.

7. Go Back, then tap on ***Export logs and system info*** -> ***Save***.

## Windows {#windows}

1. Open ***Settings*** —> ***General settings*** —> ***Advanced settings** and scroll down.

2. Check the ***Enable HAR writing*** box.

3. Reproduce the problem.

4. Go to ***General settings*** -> Click on ***Export logs*** -> ***Save***.

5. Disable HAR writing by unchecking the corresponding box.