---
title: Как получить файлы журнала Windows
sidebar_position: 5
---

Для анализа и диагностики сложных проблем, связанных с работой AdGuard, службе поддержки могут понадобиться файлы журнала Windows. Журналы Windows содержат записи о системных событиях и ошибках за последнее время. Ниже представлена инструкция для получения и отправки этих файлов.

1. Нажмите *Win + R*

2. In the window that appears type in `eventvwr` and click *OK*:

![Окно запуска *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

3. Окно программы «Просмотр событий» выглядит, как показано ниже.

![Просмотр событий *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

Чтобы сохранить нужные нам файлы, сделайте следующее:

- Open *Application*: *Event Viewer (Local)* → *Windows Logs* → *Application*.

- Right-click *Application* and in the drop-down menu select *Save All Events As...*

- Выберите имя и место сохранения, нажмите *Сохранить*. Выберите *Отображать сведения для следующих языков*. Поставьте галочку напротив пункта *Английский язык*. Нажмите *OK*.

- Open *System*: *Event Viewer (Local)* → *Windows Logs* →  *System*.

- Right-click *System* and in the drop-down menu select *Save All Events As...*

- Выберите папку назначения, введите имя и нажмите *Сохранить*. Выберите *Отображать сведения для следующих языков*. Поставьте галочку напротив пункта *Английский язык*. Нажмите *OK*.

Полученные два файла отправьте в службу поддержки AdGuard: **support@adguard.com**.
