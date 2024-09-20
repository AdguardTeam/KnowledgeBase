---
title: Cómo crear un archivo dump
sidebar_position: 8
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Los datos y/o archivos proporcionados en archivos dump se procesan de acuerdo con la [Política de privacidad de AdGuard](https://adguard.com/en/privacy.html).

:::

Para diagnosticar los motivos de los posibles problemas que los usuarios pueden encontrar al utilizar AdGuard, es posible que el equipo de soporte necesite el archivo dump del proceso. El archivo dump ayuda a los desarrolladores a ver los procesos que se ejecutaron en la aplicación durante un período de tiempo determinado. A continuación, puedes consultar las instrucciones de cómo recopilar el archivo dump en tu PC.

1. Presiona **Ctrl + Shift + Esc** y haz clic en **Administrador de tareas**

1. En la barra de menú superior, selecciona **Detalles**

    ![Detalles del Administrador de tareas](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Haz clic derecho en el proceso para el que deseas crear el archivo de volcado (por ejemplo, el equipo de soporte puede pedirte que crees un dump para `Adguard.exe`)

1. En el menú desplegable, haz clic en **Crear archivo dump**

1. ¡El archivo fue creado exitosamente!

    ![Crear archivo dump](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Una vez que hayas creado el archivo de volcado, navega hasta la ubicación del archivo. Se te pedirá que abras la carpeta que contiene el archivo dump inmediatamente después de su creación. De lo contrario, podrás encontrarlo dentro de la carpeta **%tmp%**. El archivo dump creado (`.DMP`) tiene el mismo nombre que el nombre del proceso que elegiste en los pasos anteriores. El archivo es bastante grande, así que comprímelo en un archivo antes de enviarlo al soporte.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![Procesos de AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Cuando envíes los archivos dump al equipo de soporte, adjunte también los registros de la aplicación AdGuard para que tengamos más posibilidades de resolver el problema. [Here](../adguard-logs) you can check the instructions on how to get the log file.
