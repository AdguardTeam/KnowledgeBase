---
title: How to generate HAR files
sidebar_position: 5
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

HAR files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

## Что такое файлы HAR?

Формат HAR (HTTP ARchive) представляет собой файл архива в формате JSON для протоколирования взаимодействия браузера с сайтом. The specifications of HAR format define archival data for HTTP transactions that a browser uses to export detailed information about the web pages it loads. Более подробное описание формата файла HAR и его характеристик вы можете найти на сайте [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## How to generate HAR files

Иногда нам нужно проанализировать данные файлы, чтобы заблокировать определённые объявления, которые по какой-то причине трудно воспроизвести. To get HAR files, follow these steps:

1. Откройте AdGuard и перейдите в **Настройки** (значок ⚙ в правом нижнем углу).
2. Нажмите **Общие** →**Дополнительные** → **Низкоуровневые настройки**.
3. Прокрутите вниз и активируйте опцию **Записывать HAR** в разделе Фильтрации.
4. Откройте приложение и выполните необходимые действия, чтобы воспроизвести проблему.
5. Выключите опцию **Записывать HAR**.
6. Вернитесь в раздел **Расширенные**.
7. Нажмите **Экспортировать логи и информацию о системе** → **Разрешить** (при необходимости) → **Сохранить**.

**Send the generated file with the logs to the AdGuard support service.**

:::note

Наша команда поддержки обработает ваш тикет гораздо быстрее, если вы укажете в сообщении номер тикета HelpDesk или номер проблемы на GitHub.

:::

## Как анализировать файлы HAR

Вот некоторые источники, которые мы рекомендуем для анализа файлов HAR:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) — это инструмент анализа HAR, визуализирующий файлы журналов HTTP Archive (HAR), созданные средствами отслеживания HTTP.
- [Fiddler](https://www.telerik.com/fiddler) — это прокси-сервер для веб-отладки, который позволяет перехватывать, проверять и отслеживать весь трафик HTTP(S) между вашим компьютером и интернетом, имитировать запросы и диагностировать сетевые проблемы.
