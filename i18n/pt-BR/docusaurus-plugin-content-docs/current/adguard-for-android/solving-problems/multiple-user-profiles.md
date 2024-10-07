---
title: Problemas causados por múltiplos perfis de usuário
sidebar_position: 10
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Neste artigo, você encontrará métodos sobre como resolver problemas com o AdGuard ao configurar *várias contas* ou *Perfis restritos* em seus dispositivos Android.

## Problemas causados por múltiplos perfis de usuário

No Android 9 e versões posteriores, se o AdGuard estiver instalado em mais de um perfil de usuário no seu dispositivo, você poderá encontrar problemas ao desinstalar o aplicativo. Ao desinstalar o AdGuard de um perfil de usuário, o aplicativo ainda aparecerá na lista de aplicativos, mas você não poderá desinstalá-lo ou reinstalá-lo. Isso acontece porque o AdGuard foi instalado para um perfil de usuário diferente no dispositivo.

Se você tentar reinstalar o AdGuard após uma tentativa de remoção malsucedida, verá a mensagem de erro “Não é possível instalar o aplicativo no seu dispositivo”.

Para resolver esse problema, você precisa desinstalar o aplicativo para todos os usuários: vá para Configurações → Todos os aplicativos → AdGuard. Toque no menu de três pontos no canto superior direito e selecione *Desinstalar para todos os usuários*.

![Desinstalar *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problemas causados pelo uso de um perfil de Modo Restrito

Os proprietários de telefones, tablets ou TVs com o sistema operacional Android 7+ podem enfrentar o problema causado pelo uso de **um perfil com Modo Restrito**. Se você tiver esse perfil, o **AdGuard**, assim como outros aplicativos que usam VPN, terá restrições na filtragem seletiva do tráfego VPN. Como resultado, o AdGuard não pode iniciar a proteção em um **modo VPN local**. Além disso, um dos motivos para essa situação pode ser o uso do **perfil Dual App/Dual Messenger** em seu dispositivo. Abaixo estão descritas as recomendações que você pode aplicar quando esse problema ocorrer.

### Soluções

Você tem três maneiras de resolver o problema:

### Opção 1: Conceder permissões ao AdGuard usando o ADB

:::note

Esta abordagem está disponível a partir de **AdGuard v3.5 nightly 6**. Se estiver usando uma versão mais antiga, você pode obter a atualização mais recente [aqui](https://adguard.com/adguard-android/overview.html).

:::

1. Ative o **modo de desenvolvedor** e ative a **depuração USB**:

    - Abra as **Configurações** em seu celular;
    - Vá para a seção **Sistema** (último item no menu de configurações). Nesta seção, encontre o subitem **Sobre o telefone**;
    - Toque na linha **Número de build** 7 vezes. Depois disso, você receberá uma notificação de que **Você agora é um desenvolvedor** (Se necessário, insira um código de desbloqueio para o dispositivo);
    - Abra **Configurações do sistema** → **Opções do desenvolvedor** → Role para baixo e ative **Depuração USB** → Confirme se a depuração está ativada na janela **Permitir depuração USB** depois de ler o aviso com atenção.

    :::note

    Se você tiver alguma dificuldade ou dúvida adicional, instruções completas podem ser encontradas [aqui](https://developer.android.com/studio/debug/dev-options).


:::

1. [Instale e configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) o ADB; Na plataforma Windows, os usuários da **Samsung** talvez precisem instalar [esse utilitário](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Conecte seu dispositivo usando um cabo **USB** ao computador ou laptop no qual você instalou **ADB**;

1. Abra **o prompt de comando** no seu PC:

    - **Cmd.exe** se você estiver usando o **Windows**;
    - **Terminal** se você estiver usando o **macOS**;

1. Digite o comando `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` e pressione **Enter**.

### Opção 2: Remover *conta de usuário restrita*

Para saber como gerenciar contas de usuário em um dispositivo Android, clique [aqui](https://support.google.com/a/answer/6223444?hl=en).

:::note

Em alguns casos, contas de usuários restritas são criadas implicitamente e não podem ser removidas. Por exemplo, quando você usa os recursos Dual Messenger ou Dual App em dispositivos **Samsung** ou **LG**. Você pode ler abaixo como corrigir o problema nesses casos.

:::

### Opção 3: Use o AdGuard no *modo proxy HTTP local* (requer root)

Para ativar esse modo, abra **configurações do AdGuard** → **Rede** → **Método de filtragem** → **Prroxy HTTP legal**

### Dispositivos LG e Samsung

Os proprietários de telefones **LG** ou **Samsung** também podem encontrar um problema semelhante. Pode ser causado pelo uso da função **Dual App/Dual Messenger** (que cria automaticamente um perfil restrito). Para resolver esse problema, você precisa desativar esse recurso.

### Samsung

- Abra **Configurações**;
- Pressiona **Avançado**;
- Role para baixo e pressione **Dual messenger**;
- Desative o **Dual messenger** para todos os aplicativos;
- Bloqueie o dispositivo por 5 minutos;
- Desbloqueie a tela e tente novamente criar o perfil VPN.

### LG

- Abra **Configurações**;
- Selecione a aba **Geral**;
- Role para baixo e pressione **Aplicativo duplo**;
- Remova todos os aplicativos da lista;
- Reinicie seu dispositivo.
