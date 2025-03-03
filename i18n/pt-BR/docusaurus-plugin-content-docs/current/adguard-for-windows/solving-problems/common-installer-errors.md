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

- Inicie e registre novamente o serviço Instalador Microsoft. Isso dá um pouco de trabalho.

    - Pressione *Win + R* e insira **services.msc**.
    - Encontre na lista e clique duas vezes em *Instalador do Windows*.
    - Pressione o botão *Iniciar* sob *Status do serviço* e pressione *OK*. Se o status do serviço for **Em execução**, você deve clicar em *Parar* primeiro e depois em *Iniciar*.
    - Pressione *Win + R*, digite e pressione ***msiexec /unregister*** e pressione *Enter*.
    - Pressione *Win + R* novamente, digite e pressione ***msiexec /regserver*** e pressione *Enter*

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

- Inicie e registre novamente o serviço Instalador Microsoft. Isso dá um pouco de trabalho.

    - Pressione *Win + R* e digite ***services.msc***.
    - Encontre na lista e clique duas vezes em *Instalador do Windows*.
    - Pressione o botão *Iniciar* sob *Status do serviço* e pressione *OK*. Se o status do serviço for **Em execução**, você deve clicar em *Parar* primeiro e depois em *Iniciar*.
    - Pressione *Win + R*, digite e pressione ***msiexec /unregister*** e pressione *Enter*.
    - Pressione *Win + R* novamente, digite e pressione ***msiexec /regserver*** e pressione *Enter*

- Adquira permissões completas na unidade para instalação. É possível que o erro 1603 ocorra porque você não tem permissões completas no local do arquivo. Também não é tão fácil quanto algumas das outras soluções:

    - Abra *File Explorer*, clique com o botão direito do mouse na unidade que contém o local de instalação e selecione *Propriedades*.
    - Vá para a aba *Segurança* e clique em *Editar*.
    - Clique em *SYSTEM* e certifique-se de que a caixa *Permitir* de cada item em *Permissões para SYSTEM* esteja marcada (se for possível marcá-la). Faça a mesma verificação para *Administradores*.
    - Clique em *OK* para voltar à caixa de diálogo *Propriedades*. Em seguida, clique em *Avançado*.
    - Clique em *Alterar permissões*.
    - Na aba *Permissões*, clique duas vezes em *Administradores*.
    - Selecione *Esta pasta, subpastas e arquivos* no campo *Aplica-se a* e marque todas as *permissões básicas* disponíveis. Depois disso, pressione *OK*.
    - Faça a mesma operação acima (do item 7) para *SYSTEM*.
    - Clique em *OK* para sair. Tente instalar o AdGuard novamente.

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
