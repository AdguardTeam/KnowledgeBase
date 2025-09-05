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

AdGuard стремится защищать вашу конфиденциальность. Мы строго соблюдаем нашу [Политику конфиденциальности](https://adguard.com/privacy/browser-extension.html) и не собираем никакой личной информации о пользователях. Перед отправкой логов в поддержку проверьте, не содержит ли файл дополнительную информацию, которую вы не хотите передавать. Если в файле осталась личная информация, рекомендуем удалить её.

:::

Теперь, когда вы собрали логи, выполните следующие действия, чтобы отправить их нашей команде разработчиков:

1. Сообщите об ошибке [на GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Вы также можете загрузить архив на Google Диск и добавить на него ссылку вместо прикрепления файла.
