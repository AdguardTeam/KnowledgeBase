---
title: Как экспортировать логи с фоновой страницы
sidebar_position: 1
---

## Экспорт логов с фоновой страницы в расширении

### Chrome

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите по адресу `chrome://extensions`.

3. Включите _Режим разработчика_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите на `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Нажмите _Проверить_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Отправкка логов

:::note

AdGuard стремится защищать вашу конфиденциальность. Мы строго соблюдаем нашу [Политику конфиденциальности](https://adguard.com/privacy/browser-extension.html) и не собираем никакой личной информации о пользователях. Перед отправкой логов в поддержку проверьте, не содержит ли файл дополнительную информацию, которую вы не хотите передавать. Если в файле осталась личная информация, рекомендуем удалить её.

:::

Теперь, когда вы собрали логи, выполните следующие действия, чтобы отправить их нашей команде разработчиков:

1. Сообщите об ошибке [на GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Вы также можете загрузить архив на Google Диск и добавить на него ссылку вместо прикрепления файла.
