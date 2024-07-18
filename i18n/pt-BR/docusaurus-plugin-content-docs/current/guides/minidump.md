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

Even if you don’t experience any BSoD crash errors, you can still set this option — this is a general recommendation, not necessarily related to AdGuard products. Siga as instruções abaixo para criar o arquivo minidump automaticamente.

 1. Digite *sysdm.cpl* na barra de pesquisa do Windows e clique em **Abrir**. A janela **Menu de propriedades do sistema** do Painel de Controle aparecerá na tela.

    :::dica

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![Propriedades do sistema *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Vá para a aba **Avançado**.
 1. Na seção **Inicialização e Recuperação**, clique em **Configurações**.

    ![Inicialização e recuperação *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Habilite as três opções a seguir:

    - Gravar um evento no registro do sistema
    - Reiniciar automaticamente
    - Salvando informações de depuração → Despejo de memória pequeno (256 kb)

    ![Três opções *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Clique em **OK** para aplicar as configurações.
 1. Reinicie o computador.

Você ativou o arquivo minidump com sucesso. Agora, se o sistema travar, ele será criado automaticamente.

:::note

Por padrão, o arquivo minidump é armazenado na pasta **%SystemRoot%\Minidump**. Você pode alterar o local para o diretório que quiser, mas lembre-se de que muitos programas estão configurados para procurar esse local por padrão, portanto, recomendamos que você não altere o local.

:::
