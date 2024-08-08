---
title: Как экспортировать логи с фоновой страницы
sidebar_position: 1
---

## Экспорт логов с фоновой страницы в расширении

### Chrome

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите по адресу `chrome://extensions`.

3. Включите _Режим разработчика_.

   ![Режим разработчика \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Нажмите `background.html`.

   ![background.html \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Откройте вкладку _Консоль_.

   ![Вкладка консоль \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Откройте контекстное меню и выберите _Сохранить как..._.

   ![Сохранить как \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите на `about:addons`.

3. Нажмите _Отладка дополнений_.

   ![Отладка дополнений \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Нажмите _Проверить_.

   ![Исследовать \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Перейдите во вкладку _Консоль_.

   ![Консоль \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Нажмите _Сохранить все сообщения в файл_.

   ![Сохранить в файл \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Отправкка логов

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
