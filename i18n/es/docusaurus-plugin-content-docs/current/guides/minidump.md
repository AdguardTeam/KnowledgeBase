---
title: Cómo crear un archivo minidump para solucionar el error BSOD
sidebar_position: 8
---

Desafortunadamente, casi todos los usuarios de Windows están familiarizados con el error [Pantalla azul de la muerte (BSoD)](https://es.wikipedia.org/wiki/Pantalla_azul_de_la_muerte). BSoD ocurre cuando el sistema Windows encuentra problemas que pueden afectar el funcionamiento seguro del sistema, como problemas con el código de drivers de terceros, el hardware o el código de Microsoft. Para solucionar el error de pantalla azul, los usuarios pueden utilizar un archivo minidump.

## ¿Qué es el archivo Minidump?

Un archivo minidump es un archivo que contiene información sobre la naturaleza del fallo del sistema. Se crea antes de que aparezca la pantalla azul y tiene la cantidad mínima de información útil que se puede utilizar para resolver el problema. El archivo minidump suele tener una extensión *.dmp*.

:::nota
En Windows 10, la pantalla azul muestra un código STOP y un código QR. El usuario puede utilizar esta información y buscar en la Web el problema específico.

:::

La opción de crear el archivo minidump está desactivada de forma predeterminada, así que antes de entrar en más detalles sobre cómo utilizar el archivo, vamos a echar un vistazo más de cerca a cómo habilitarlo.

## Configurando Windows para crear el archivo Minidump

Incluso si no experimentas ningún error de bloqueo BSoD, aún puedes configurar esta opción; esta es una recomendación general, no necesariamente relacionada con los productos AdGuard. Sigue las instrucciones continuación para crear automáticamente el archivo minidump.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::consejo

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Guardar un evento en el registro del sistema
    - Reiniciar automáticamente
    - Guardar de información de depuración → Small memory dump (256 kb)

    ![Tres opciones *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Haz clic en **Aceptar** para aplicar la configuración.
 1. Reinicia la computadora.

Has habilitado correctamente el archivo minidump. Ahora se creará automáticamente cuando hay un fallo en el sistema.

:::note

De forma predeterminada, el archivo minidump se almacena en la carpeta **%SystemRoot%\Minidump**. Puedes cambiar la ubicación del directorio como desees, pero recuerda que muchos programas están configurados para buscar esta ubicación de forma predeterminada, por lo que te recomendamos que no cambies la ubicación.

:::

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Habilita la protección AdGuard.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
