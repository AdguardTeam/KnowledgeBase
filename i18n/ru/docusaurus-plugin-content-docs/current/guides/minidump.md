---
title: Как создать файл minidump для исправления ошибки BSoD
sidebar_position: 8
---

К сожалению, почти все пользователи Windows знакомы с ошибкой [Синий экран смерти (Blue Screen of Death, BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death). Эта ошибка возникает, когда системе Windows сталкивается с проблемами, которые могут повлиять на безопасную работу системы, например, проблемы со сторонним кодом драйвера, аппаратным обеспечением или кодом Microsoft. Чтобы устранить ошибку синего экрана, пользователи могут использовать файл minidump.

## Что такое файл minidump?

Файл minidump — это файл с информацией о характере сбоя системы. Он создаётся непосредственно перед появлением синего экрана и содержит минимальное количество полезной информации, которую можно использовать для решения проблемы. Обычно расширение файла minidump — *.dmp*.

:::note
В Windows 10 на синем экране отображается код остановки и QR-код. Пользователь может использовать эти данные, чтобы найти в интернете информацию о конкретной проблеме.

:::

По умолчанию возможность создания файла minidump отключена. Поэтому сначала нужно разобраться в том, как её включить, а потом уже углубляться в детали использования этого файла.

## Как разрешить создание файла minidump

Даже если вы не сталкивались с ошибками BSoD, лучше настроить эту опцию — это общая рекомендация, не обязательно связанная с продуктами AdGuard. Следуйте этой инструкции, чтобы автоматически создать minidump-файл.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::tip

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Записать событие в системный журнал
    - Выполнить автоматическую перезагрузку
    - Запись отладочной информации → Малый дамп памяти (256 КБ)

    ![Три опции *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Нажмите **OK**, чтобы применить настройки.
 1. Перезагрузите компьютер.

Вы разрешили создание файла minidump. Теперь он будет создаваться автоматически при сбое системы.

:::note

По умолчанию minidump-файл хранится в папке **%SystemRoot%\Minidump**. Вы можете выбрать любую другую папку, но помните, что многие программы по умолчанию ищут именно это место, поэтому мы не рекомендуем менять расположение.

:::

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Включите защиту AdGuard.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
