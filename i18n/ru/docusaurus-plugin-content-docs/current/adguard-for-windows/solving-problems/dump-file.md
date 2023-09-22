---
title: Как создать файл дампа
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Для диагностики проблем и ошибок, с которыми пользователи могут столкнуться при использовании AdGuard, службе поддержки может понадобиться файл дампа. Файл дампа помогает разработчикам увидеть процессы, которые выполнялись в приложении за определённый период времени. Ниже вы можете ознакомиться с инструкциями о том, как собрать файл дампа на вашем компьютере.

1. Press **Ctrl + Shift + Esc** and click **Task Manager**

1. В верхней строке меню выберите **Подробности**

    ![Сведения о диспетчере задач](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Щёлкните правой кнопкой мыши на процесс, для которого вы хотите создать файл дампа (например, служба поддержки может попросить вас создать дамп для `Adguard.exe`)

1. В раскрывающемся меню нажмите **Создать файл дампа**

1. Файл успешно создан!

    ![Create dump file](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

After you’ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the **%tmp%** folder. The created dump file (`.DMP`) has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support.

:::note

AdGuard for Windows has two running processes (`Adguard.exe` and `AdguardSvc.exe`). So you need to create the dump file separately for each process.

:::

![AdGuard processes](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. [Here](../adguard-logs) you can check the instructions on how to collect the log file.
