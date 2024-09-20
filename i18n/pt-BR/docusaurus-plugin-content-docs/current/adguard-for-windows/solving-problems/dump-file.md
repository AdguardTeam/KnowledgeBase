---
title: Como criar um arquivo dump
sidebar_position: 8
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Os dados e/ou arquivos fornecidos nos arquivos dump são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

Para diagnosticar os motivos de possíveis problemas que os usuários podem encontrar ao usar o AdGuard, a equipe de suporte pode precisar do arquivo dump do processo. O arquivo dump ajuda os desenvolvedores a ver os processos que foram executados no aplicativo durante um determinado período de tempo. Abaixo, você pode conferir as instruções de como coletar o arquivo dump em seu PC.

1. Pressione **Ctrl + Shift + Esc** e clique em **Gerenciador de Tarefas**

1. Na barra de menu superior, selecione **Detalhes**

    ![Detalhes do Gerenciador de Tarefas](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Clique com o botão direito no processo para o qual deseja criar o arquivo dump (por exemplo, a equipe de suporte pode solicitar que você crie um dump para `Adguard.exe`)

1. No menu suspenso, clique em **Criar arquivo dump**

1. O arquivo foi criado com sucesso!

    ![Criar arquivo dump](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Depois de criar o arquivo dump, navegue até o local do arquivo. Será pedido que você abra a pasta que contém o arquivo dump logo após sua criação. Caso contrário, você poderá encontrá-lo dentro da pasta **%tmp%**. O arquivo dump criado (`.DMP`) tem o mesmo nome do processo que você escolheu nas etapas anteriores. O arquivo é muito grande, portanto, compacte-o antes de enviá-lo ao suporte.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![Processos do AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Ao enviar os arquivos dump para a equipe de suporte, anexe também os logs do aplicativo AdGuard para que tenhamos mais chances de resolver o problema. [Here](../adguard-logs) you can check the instructions on how to get the log file.
