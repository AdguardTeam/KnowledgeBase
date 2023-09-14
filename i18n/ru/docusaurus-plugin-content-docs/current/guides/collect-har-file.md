---
title: Как собрать файл HAR
sidebar_position: 1
---

Файлы HAR помогают нашим службам технической поддержки устранять сложные проблемы. Для создания этих файлов мы рекомендуем использовать Chrome или Firefox. Однако IE 11, Edge и Safari также предоставляют возможность создания и экспорта файлов `.har` .

## Chrome {#chrome}

Чтобы создать файл HAR в Chrome:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

1. Откройте **Инструменты разработчика**:

    - Из меню: **Меню → Дополнительные инструменты → Инструменты разработчика**.
    - Клавиатура: **Ctrl+Shift+C**, или **Ctrl+Alt+I**, или **⌥+⌘+I для Mac**.

1. Перейдите во вкладку **Сеть**.

1. Найдите круглую кнопку в левом верхнем углу вкладки и убедитесь, что она находится в режиме записи. Если кнопка серая, кликните на неё — она станет красной, и начнётся запись.

1. Нажмите кнопку **Очистить** (значок в виде перечёркнутого круга рядом с кнопкой записи), чтобы удалить все предыдущие действия.

1. Установите флажок **Сохранить журнал** во вкладке Сеть.

1. Установите флажок **Отключить кеш**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Воспроизведите действия, создающие проблему.

1. Сохраните сессию как файл .har, щёлкнув правой кнопкой мыши на сетку и выбрав **Сохранить как HAR-файл с данными**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Edge {#edge}

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

1. Откройте **Инструменты разработчика**:

    - Из меню: **Меню → Дополнительные инструменты → Инструменты разработчика**.
    - Клавиатура: **Ctrl+Shift+C**, или **Ctrl+Alt+I**, или **⌥+⌘+I для Mac**.

1. Перейдите во вкладку **Сеть**.

1. Найдите круглую кнопку в левом верхнем углу вкладки и убедитесь, что она находится в режиме записи. Если кнопка серая, кликните на неё — она станет красной, и начнётся запись.

1. Нажмите кнопку **Очистить** (значок в виде перечёркнутого круга рядом с кнопкой записи), чтобы удалить все предыдущие действия.

1. Установите флажок **Сохранить журнал** во вкладке Сеть.

1. Установите флажок **Отключить кеш**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Воспроизведите действия, создающие проблему.

1. Сохраните сессию как файл .har, щёлкнув правой кнопкой мыши на сетку и выбрав **Сохранить как HAR-файл с данными**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Firefox {#firefox}

Чтобы создать файл HAR в Firefox:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

1. Запустите Инструменты разработчика в режиме **Сеть**:

    - Из меню: **Меню → Веб-разработчик → Сеть**.
    - Клавиатура: **Ctrl+Shift+C**, или **⌥+⌘+E (Mac)**.

1. Нажмите на кнопку **Приостановить/возобновить запись сетевого журнала** в верхнем левом углу вкладки Сеть.

    - Кнопка должна находиться в режиме воспроизведения.

1. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

1. Select the **Persist Logs** check box on the Network tab.

1. Установите флажок **Отключить кеш**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Воспроизведите действия, создающие проблему.

1. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

1. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## Internet Explorer 11 {#ie11}

To create a HAR file in Internet Explorer 11:

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

1. Запустите Инструменты разработчика в режиме **Сеть**:

    - From Tools cog wheel menu: **Developer Tools** → **Network tab**.
    - Keyboard: **F12 → Network** tab.

1. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.

    - Кнопка Play должна быть серой, а кнопка Stop — красной. Включите режим воспроизведения. Put in **Play** mode.

1. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Hover over icons to see names.

    - **Clear session** button is a three line icon with an x on it.

1. Установите флажок **Отключить кеш**.

1. Воспроизведите действия, создающие проблему.

1. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

1. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Supporting screenshots can be helpful, as well.

## Safari {#safari}

Чтобы создать файл HAR в Safari:

1. Найдите в строке меню Safari раздел **Разработка**.

    - Если его не видно, включите его: **Safari → Настройки → Дополнения**.
    - Проверьте флажок внизу рядом с **Показывать меню «Разработка» в строке меню**.

1. Перейдите по URL-адресу, по которому возникает ошибка. Пока не воспроизводите её.

1. Откройте вкладку **Сеть** в веб-инспекторе:

    - Из меню: **Разработка → Показывать веб-инспектор → Сеть**.
    - Клавиатура: **⌥+⌘+I → Сеть**

1. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.

    - Клавиатура: **⌘+K**

1. Установите флажок **Отключить кеши**.

1. Воспроизведите действия, создающие проблему.

1. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

1. Направьте документ поддержке AdGuard (support@adguard.com) с подробным объяснением ошибки. Supporting screenshots can be helpful, too.

## Android {#android}

To create HAR files, follow these steps:

1. Откройте AdGuard и перейдите в **Настройки**.

1. Выберите в меню **Расширенные**.

1. Выберите **Низкоуровневые настройки**.

1. Активируйте `pref.har.capture` (вам придётся перезапустить защиту).

1. Теперь воспроизведите проблему — откройте приложение, выполните необходимые действия, чтобы реклама появилась.

1. Теперь снова выключите `pref.har.capture`.

1. Вернитесь назад и нажмите **Экспортировать логи и информацию о системе** → **Сохранить**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

1. Установите флажок **Включить запись HAR**.

1. Воспроизведите проблему.

1. Go to **General settings** → Click **Export logs** → **Save**.

1. Disable HAR writing by unchecking the corresponding box.
