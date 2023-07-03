---
title: Как получить логи AdGuard
sidebar_position: 3
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

Для анализа и диагностики различных проблем службе поддержки могут понадобиться файлы журнала AdGuard. Эти файлы содержат записи обо всех ошибках, которые произошли с программой за последнее время. Ниже представлена краткая инструкция, описывающая как получить и отправить в службу поддержки файлы журнала.

1. Откройте настройки AdGuard. Перейдите в раздел *Общие настройки*, прокрутите вниз до конца экрана и выберите *Уровень логирования* *Подробный*.

![Подробный уровень логирования *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Воспроизведите проблему.

We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

3. Экспортируйте полученные логи при помощи кнопки *Экспортировать логи*.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

Save the archive to any folder.

4. **Важно**: не забудьте вернуть *Стандартный* уровень логирования. *Подробный* уровень логирования может значительно замедлить работу приложения.

5. Отправьте сохранённый архив в службу поддержки AdGuard по адресу **support@adguard.com**, опишите проблему и не забудьте указать время, когда вы воспроизвели проблему.

### Трейсовые логи {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Остановите AdGuard, щёлкнув правой кнопкой мыши по значку AdGuard в меню трея и выбрав *Закрыть AdGuard*:

![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

Please don't leave the service running:

![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Откройте консоль (наберите `cmd` в стартовой панели).

3. Запустите приложение командой  `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` (если вы используете 64-битный Windows) или `C:\"Program Files"\Adguard\Adguard.exe /trace` (если вы используете 32-битный).

4. Воспроизведите проблему.

We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

5. Экспортируйте полученные логи при помощи кнопки *Экспортировать логи*.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

Не пугайтесь, если файл с логами будет большим. Нам необходимо узнать как можно больше подробностей, чтобы исправить вашу проблему.
