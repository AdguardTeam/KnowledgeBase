---
title: Como criar um arquivo minidump para corrigir o erro BSoD
sidebar_position: 8
---

Quase todos os usuários do Windows estão familiarizados com o erro [Blue Screen of Death (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death), infelizmente. BSoD ocorre quando o sistema Windows encontra problemas que podem afetar a operação segura do sistema, como problemas com código de driver de terceiros, hardware ou código da Microsoft. Para resolver o erro de tela azul, os usuários podem usar um arquivo minidump.

## O que é um arquivo Minidump?

Um arquivo minidump é um arquivo que contém informações sobre o tipo de falha do sistema. Ele é criado pouco antes do aparecimento dos erros de tela azul e contém o mínimo de informações úteis que podem ser utilizadas para resolver o problema. O arquivo minidump geralmente tem a extensão *.dmp*.

:::note
No Windows 10, a tela azul mostra um código STOP e um código QR. O usuário pode usar essas informações e o problema específico na Web.

:::

A opção para criar um arquivo minidump está desativada por padrão, portanto, antes de entrarmos em mais detalhes sobre como usar o arquivo, vamos dar uma olhada mais de perto em como ativá-la.

## Configure o Windows para criar o arquivo Minidump

Mesmo que você não encontre nenhum erro de travamento BSoD, você ainda pode comfigurar esta opção. Esta é uma recomendação geral, não necessariamente relacionada aos produtos AdGuard. Siga as instruções abaixo para criar o arquivo minidump automaticamente.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::dica

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Gravar um evento no registro do sistema
    - Reiniciar automaticamente
    - Salvando informações de depuração → Despejo de memória pequeno (256 kb)

    ![Três opções *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Clique em **OK** para aplicar as configurações.
 1. Reinicie o computador.

Você ativou o arquivo minidump com sucesso. Agora, se o sistema travar, ele será criado automaticamente.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Por padrão, o arquivo minidump é armazenado na pasta **%SystemRoot%\Minidump**. Você pode alterar o local para o diretório que quiser, mas lembre-se de que muitos programas estão configurados para procurar esse local por padrão, portanto, recomendamos que você não altere o local.

:::

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Ative a proteção do AdGuard.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
