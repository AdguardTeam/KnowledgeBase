---
title: Как собрать файл HAR
sidebar_position: 1
---

Файлы HAR помогают нашим службам технической поддержки устранять сложные проблемы. Для создания этих файлов мы рекомендуем использовать Chrome или Firefox. Однако IE 11, Edge и Safari также предоставляют возможность создания и экспорта файлов `.har` .

## Chrome {#chrome}

Чтобы создать файл HAR в Chrome:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Найдите круглую кнопку в левом верхнем углу вкладки и убедитесь, что она находится в режиме записи. Если кнопка серая, кликните на неё — она станет красной, и начнётся запись.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Воспроизведите действия, создающие проблему.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Прилагающиеся скриншоты также могут помочь.

## Edge {#edge}

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Найдите круглую кнопку в левом верхнем углу вкладки и убедитесь, что она находится в режиме записи. Если кнопка серая, кликните на неё — она станет красной, и начнётся запись.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Воспроизведите действия, создающие проблему.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Прилагающиеся скриншоты также могут помочь.

## Firefox {#firefox}

Чтобы создать файл HAR в Firefox:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

2. Open Developer Tools in **Network** mode:
- From menu: **Menu → Web Developer → Network**.
- Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

3. Note the **Play/Pause** button at the top left of the Network tab.
- Кнопка должна находиться в режиме воспроизведения.

4. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

5. Select the **Persist Logs** check box on the Network tab.

6. Check the **Disable cache** check box.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Воспроизведите действия, создающие проблему.

8. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

9. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Прилагающиеся скриншоты также могут помочь.

## Internet Explorer 11 {#ie11}

Чтобы создать файл HAR в Internet Explorer 11:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

2. Open Developer Tools in **Network** mode:
- From Tools cog wheel menu: **Developer Tools** → **Network tab**.
- Keyboard: **F12 → Network** tab.

3. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.
- Кнопка Play должна быть серой, а кнопка Stop — красной. Включите режим воспроизведения. Put in **Play** mode.

4. Удалите любую информацию, появляющуюся на нижней сетке, нажав на кнопку **Очистить сессию** во вкладке Сеть. Наведите курсор иконки, чтобы увидеть их названия.
- **Clear session** button is a three line icon with an x on it.

5. Check the **Disable cache** check box.

6. Воспроизведите действия, создающие проблему.

7. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

8. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Прилагающиеся скриншоты также могут помочь.

## Safari {#safari}

Чтобы создать файл HAR в Safari:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.
- If not visible, turn it on by going to **Safari → Settings → Advanced**.
- Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

2. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

3. Open **Network** tab in Web Inspector:
- From menu: **Develop → Show Web Inspector → Network**.
- Keyboard: **⌥+⌘+I→Network**

4. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

5. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.
- Keyboard: **⌘+K**

6. Check the **Disable caches** check box.

7. Воспроизведите действия, создающие проблему.

8. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

9. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Прилагающиеся скриншоты также могут помочь.

## Android {#android}

Чтобы получить файлы HAR, выполните следующие действия:

1. Open AdGuard and go to **Settings**.

2. Choose **Advanced** in the menu.

3. Choose **Low Level Settings**

4. Активируйте `pref.har.capture` (вам придётся перезапустить защиту).

5. Теперь воспроизведите проблему — откройте приложение, выполните необходимые действия, чтобы реклама появилась.

6. Теперь снова выключите `pref.har.capture` .

7. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

2. Check the **Enable HAR writing** box.

3. Воспроизведите проблему.

4. Go to **General settings** → Click **Export logs** → **Save**.

5. Запретите запись HAR, сняв соответствующий флажок.
