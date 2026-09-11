---
title: Как собирать логи AdGuard
sidebar_position: 3
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Для анализа и диагностики различных проблем службе поддержки могут понадобиться файлы журнала AdGuard. Эти файлы содержат записи обо всех ошибках, которые произошли с программой за последнее время. Ниже представлена краткая инструкция, описывающая как получить и отправить в службу поддержки файлы журнала.

:::note

AdGuard стремится защищать вашу конфиденциальность. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Перед отправкой логов в поддержку проверьте, не содержит ли файл дополнительную информацию, которую вы не хотите передавать. Если в файле осталась личная информация, рекомендуем удалить её.

:::

### Debug logs {#debug-logs}

1. Откройте настройки AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Воспроизведите ошибку.

   Мы настоятельно рекомендуем записывать точное время, когда вы воспроизвели проблему: это поможет нашей команде поддержки найти соответствующие логи и решить проблему быстрее.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Сохраните архив в любую папку.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Тогда вам нужно будет сделать следующее:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Пожалуйста, не оставляйте приложение запущенным:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Если у вас установлена старая версия AdGuard для Windows, запустите приложение командой C:\"Program Files (x86)"\Adguard\Adguard.exe /trace, если вы используете 64-битную Windows, и C:\"Program Files"\Adguard\Adguard.exe /trace, если 32-битную.

1. Воспроизведите ошибку.

   Мы настоятельно рекомендуем записывать точное время, когда вы воспроизвели проблему: это поможет нашей команде поддержки найти соответствующие логи и решить проблему быстрее.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Не пугайтесь, если файл с логами будет большим. Нам необходимо узнать как можно больше подробностей, чтобы исправить вашу проблему.
