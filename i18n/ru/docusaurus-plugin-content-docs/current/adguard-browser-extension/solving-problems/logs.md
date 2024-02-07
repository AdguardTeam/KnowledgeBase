---
title: Как экспортировать логи с фоновой страницы
sidebar_position: 1
---

## Экспорт логов с фоновой страницы в расширении

### Chrome

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите по адресу `chrome://extensions`.

3. Включите _Режим разработчика_.

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Нажмите `background.html`.

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Откройте вкладку _Консоль_.

   ![The Console tab \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Откройте контекстное меню и выберите _Сохранить как..._.

   ![Save as \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Откройте Браузерное расширение AdGuard и, если возможно, воспроизведите действия, которые привели к ошибке. Запомните точное время, когда произошла ошибка.

2. Перейдите на `about:addons`.

3. Нажмите _Отладка дополнений_.

   ![Debug Add-ons \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Click _Inspect_.

   ![Inspect \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Перейдите во вкладку _Консоль_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Нажмите _Сохранить все сообщения в файл_.

   ![Save \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Отправкка логов

Теперь, когда вы собрали логи, выполните следующие действия, чтобы отправить их нашей команде разработчиков:

1. Сообщите об ошибке [на GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Вы также можете загрузить архив на Google Диск и добавить на него ссылку вместо прикрепления файла.
