---
title: Erros comuns do instalador
sidebar_position: 6
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Este artigo contém alguns dos erros mais comuns que você pode encontrar durante a instalação do AdGuard para Windows e as possíveis maneiras de resolvê-los.

### Erro 5: Acesso negado {#error-5}

Esta mensagem de erro aparece se as permissões necessárias não forem concedidas. Pode haver vários motivos diferentes pelos quais o instalador do AdGuard não tem as permissões necessárias para concluir corretamente o processo de instalação. Você pode tentar as seguintes etapas:

- Desative temporariamente seus antivírus. Alguns deles podem interferir na instalação, dependendo de suas configurações.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, uma unidade virtual, etc.

- Reinicie o computador. Às vezes, os problemas de permissão são temporários e podem ser resolvidos com a reinicialização do computador.

### Erro 112: O disco está cheio, Erro 1632: Pasta temporária cheia ou inacessível {#error-112}

Estes são dois erros diferentes com soluções muito semelhantes. Como o nome sugere, o instalador AdGuard não encontrou espaço em disco suficiente para concluir a instalação. Há várias coisas que você pode fazer para tentar corrigir o problema:

- Desinstale alguns programas ou exclua arquivos desnecessários da unidade em que você estava tentando instalar o AdGuard.

- Baixe, instale e execute o [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), um software gratuito da Malwarebytes. Entre outras coisas, ele irá limpar seu sistema de todos os "restos" de arquivos que permanecem após a desinstalação incorreta de programas e similares. Isso ajudará a liberar espaço em disco.

- Reinicie o computador. Às vezes, os arquivos temporários podem ocupar uma quantidade considerável de espaço em disco e reiniciar o PC é a maneira mais simples de se livrar deles.

### Erro 1601: o instalador do Windows não está acessível {#error-1601}

Pode-se dizer que esse é uma subcategoria específica do Erro 1603. As soluções possíveis são semelhantes:

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter **services.msc**.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Reinicialize o computador e inicie a instalação novamente. Às vezes, isso é suficiente para resolver o problema.

### Erro 1602: Cancelado pelo usuário {#error-1602}

Se você recebeu esse código de erro, é provável que tenha interrompido o processo de instalação manualmente de uma forma ou de outra. O que você pode fazer é:

- Não feche a janela do instalador. Quando a instalação estiver concluída, ela será fechada automaticamente.

- Se uma janela de diálogo aparecer durante a instalação, clique em "Sim" para conceder ao instalador as permissões necessárias. Clicar em "Não" cancelará a instalação.

- Não inicie outros processos enquanto a instalação estiver em andamento.

### Erro 1603: Erro fatal durante a instalação {#error-1603}

Este erro parece mais assustador do que realmente é. Na realidade, esse é um erro bastante genérico que pode ter muitas causas diferentes e algumas delas são facilmente corrigidas. Tente as seguintes soluções:

- Pressione a tecla *Win*, procure por *Prompt de comando*e execute-o. Lá, digite `sfc /scannow` e pressione *Enter*.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, uma unidade virtual, etc.

- Desinstale o AdGuard usando nossa [ferramenta de desinstalação](../../installation#advanced) e repita a instalação.

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter ***services.msc***.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    - Open *File Explorer*, right-click the drive containing the installation location and select *Properties*.
    - Go to *Security* tab and click *Edit*.
    - Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    - Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    - Click *Change Permissions*.
    - On *Permissions* tab, double-click *Administrators*.
    - Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*.
    - Do the same operation above (from item 7) for *SYSTEM*.
    - Click *OK* all the way out. Try installing AdGuard again.

### Erro 1618: Outra instalação já está em andamento {#error-1618}

Este erro ocorre quando várias instâncias do instalador do AdGuard são iniciadas ao mesmo tempo. O que fazer se você receber esse erro:

- Reinicie o computador e inicie o instalador novamente. Quando você reiniciar o computador, todos os processos em andamento serão interrompidos, incluindo todas as cópias do instalador.

- Não faça vários cliques no instalador, mesmo que ele não inicie imediatamente. Às vezes, pode levar alguns segundos para exibir a interface do usuário do instalador.

### Erro 1638: outra versão deste produto já está instalada {#error-1638}

É muito provável que você já tenha instalado o AdGuard antes.

- Verifique se o AdGuard já está instalado no seu computador. Você pode fazer isso pressionando a tecla *Win* e digitando ***AdGuard***.

- Pode ser que haja alguns arquivos restantes de uma instalação anterior do AdGuard. Desinstale o AdGuard usando nossa [ferramenta de desinstalação](../../installation#advanced) e repita a instalação.

### Outros erros {#other}

Se você encontrou um erro que não está listado acima, é possível que possamos resolvê-lo sozinhos. Mas, para isso, precisamos de seus arquivos de log. Por favor, execute as seguintes etapas:

- Encontre e arquive os **Registros de instalação do AdGuard** conforme descrito em [neste artigo](../installation-logs).

- Encontre e salve no disco os registros do **Event Viewer**. [Este artigo](../system-logs) explica como fazer isso.

- Por favor, envie todos esses arquivos das duas etapas anteriores para a equipe de suporte em **support@adguard.com** e descreva o problema no corpo da mensagem. Nossa equipe de suporte responderá o mais rápido possível.
