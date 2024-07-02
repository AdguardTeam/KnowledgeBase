---
title: Как получить логи AdGuard
sidebar_position: 3
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Для анализа и диагностики различных проблем службе поддержки могут понадобиться файлы журнала AdGuard. Эти файлы содержат записи обо всех ошибках, которые произошли с программой за последнее время. Ниже представлена краткая инструкция, описывающая как получить и отправить в службу поддержки файлы журнала.

> AdGuard стремится защищать вашу конфиденциальность. We strictly follow our [Privacy Policy](https://adguard.com/en/privacy/windows.html) and do not collect any private information about users. Перед отправкой логов в поддержку проверьте, не содержит ли файл дополнительную информацию, которую вы не хотите передавать. Если в файле осталась личная информация, рекомендуем удалить её.

### Debug logs {#debug-logs}

1. Откройте настройки AdGuard. Перейдите в раздел *Общие настройки*, прокрутите вниз до конца экрана и выберите *Уровень логирования* *Подробный*.

    ![Подробный уровень логирования *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Воспроизведите ошибку.

    Мы настоятельно рекомендуем записывать точное время, когда вы воспроизвели проблему: это поможет нашей команде поддержки найти соответствующие логи и решить проблему быстрее.

1. Экспортируйте полученные логи при помощи кнопки *Экспортировать логи*.

    ![Экспортировать логи *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Сохраните архив в любую папку.

1. **Important**: after exporting the logs, set the logging level back to *Standard*. *Подробный* уровень логирования может значительно замедлить работу приложения.

1. Отправьте сохранённый архив в службу поддержки AdGuard по адресу **support@adguard.com**, опишите проблему и не забудьте указать время, когда вы воспроизвели проблему.

### Трейсовые логи {#trace-logs}

Иногда в поддержке вас могут попросить прислать *трейсовые* логи. Тогда вам нужно будет сделать следующее:

1. Остановите AdGuard, щёлкнув правой кнопкой мыши по значку AdGuard в меню трея и выбрав *Закрыть AdGuard*:

    ![Выйти из AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Пожалуйста, не оставляйте приложение запущенным:

    ![Остановить AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Откройте консоль (наберите `cmd` в стартовой панели).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard v7.16 for Windows or later.

If you have an older version of AdGuard for Windows, run the application with the command C:\"Program Files (x86)"\Adguard\Adguard.exe /trace if you are using 64-bit Windows, and C:\"Program Files"\Adguard\Adguard.exe /trace if you are using 32-bit.

1. Воспроизведите ошибку.

    Мы настоятельно рекомендуем записывать точное время, когда вы воспроизвели проблему: это поможет нашей команде поддержки найти соответствующие логи и решить проблему быстрее.

1. Экспортируйте полученные логи при помощи кнопки *Экспортировать логи*.

    ![Экспортировать логи *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Не пугайтесь, если файл с логами будет большим. Нам необходимо узнать как можно больше подробностей, чтобы исправить вашу проблему.
