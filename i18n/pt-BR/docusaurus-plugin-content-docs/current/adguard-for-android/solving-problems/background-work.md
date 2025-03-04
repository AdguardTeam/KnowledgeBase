---
title: Como proteger o AdGuard de ser desativado pelo sistema
sidebar_position: 9
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Em alguns casos, os aplicativos não permanecem em segundo plano (“ativos” ou em modo de espera) devido à função de otimização do sistema operacional Android, também chamado “Modo de economia de bateria”. Essa função pode encerrar aplicativos em segundo plano. Pode ser inconveniente reiniciá-los sempre que forem fechados. Para evitar o encerramento do aplicativo em segundo plano, você precisa seguir os passos que descrevemos separadamente para cada fabricante (versão) do sistema operacional Android. Observe que as instruções para diferentes fabricantes são, em geral, muito semelhantes.

## Asus

As informações sobre dispositivos Asus ainda estão incompletas, então pode haver mais problemas do que os listados aqui. Atualizaremos esta parte do artigo quando tivermos mais informações.

A principal fonte de possíveis problemas com o trabalho em segundo plano nos dispositivos Asus está associada ao aplicativo de otimização chamado Power Master. Ele vem pré-instalado e tem configurações padrão bastante agressivas, por exemplo, para bloquear a inicialização de aplicativos e encerrar tarefas em segundo plano quando a tela é desligada. Para garantir que o processamento em segundo plano dos aplicativos funcione, configure o seguinte:

1. Vá para **Mobile Manager** → **PowerMaster** → **Configurações** (ou **Opções de economia de bateria**) → Desmarque **Limpar em suspensão**

1. Vá para **Mobile Manager** → **PowerMaster** → **Configurações** (ou **Opções de economia de bateria**) → Desmarque **Negar automaticamente a inicialização automática de aplicativos**

Como alternativa, em vez de desmarcar **Negar automaticamente a inicialização automática de aplicativos** completamente, você pode ir para **Configurações** → **Opções de economia de bateria** → **Gerenciador de inicialização automática** → **AdGuard** e desmarcá-lo.

## Xiaomi

Os dispositivos Xiaomi (e especialmente os MIUI) estão entre os mais problemáticos quando se trata de trabalho em segundo plano. Eles são conhecidos por limitar processos em segundo plano e têm permissões fora do padrão, além da falta de documentação adequada. Às vezes, os aplicativos simplesmente não funcionam direito nos telefones da Xiaomi e não há muito que possa ser feito a respeito. Abaixo estão algumas ações que você pode tentar executar caso tenha algum problema relacionado ao trabalho em segundo plano do AdGuard em vários dispositivos Xiaomi.

### MIUI 13+ e HyperOS

Dependendo das versões do MIUI e do HyperOS, há duas maneiras de alterar as configurações de otimização da bateria do seu telefone e bloquear anúncios com mais eficiência.

Opção 1

1. Vá para **Configurações** → **Aplicativos** → **Permissões** → **Inicialização automática em segundo plano** e permita que o AdGuard seja executado em segundo plano

1. Retorne para **Configurações** → **Aplicativos** → **Gerenciar aplicativos** → **AdGuard** e desmarcar **Pausar atividade do aplicativo se não for usado**

1. Vá para **Economia de bateria** e toque em **Sem restrições**

Opção 2

1. Vá para **Configurações** → **Aplicativos** → **Gerenciar aplicativos** → **AdGuard** e habilite **Início automático**

1. Vá para **Economia de bateria** e toque em **Sem restrições**

Pronto! Você configurou com sucesso o AdGuard para funcionar em segundo plano.

### MIUI 12.0.8

Para permitir que seu aplicativo AdGuard seja executado com sucesso em segundo plano, faça o seguinte:

Em **Configurações** → **Aplicativos** → **Gerenciar aplicativos**, role para baixo para localizar **AdGuard** e defina **Início automático** como “Ativado”.

![Configurações Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Role para baixo até **Economia de bateria**, toque nele e defina como "Sem restrições”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

Em **Outras permissões**, defina todas as permissões possíveis como “Ativado”

Execute o aplicativo **Segurança**.

Toque no ícone **de engrenagem** no canto superior direito da tela.

![Configurações Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Toque em **Aumentar velocidade** em Configurações de recursos.

![Configurações Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Toque em **Bloquear aplicativos**.

![Configurações Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Na tela **Bloquear aplicativos**, defina o botão de alternância do aplicativo AdGuard como Ativado.

![Configurações Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Isso é tudo! Você fixou o aplicativo AdGuard com sucesso.

### MIUI 12

Vá para **Configurações** → **Aplicativos** → **Gerenciar aplicativos** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Defina a inicialização automática como “Ativado”
- Defina todas as permissões possíveis em Outras permissões como “Ativado”
- Defina a economia de bateria para **Sem restrições**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Agora inicie o gerenciador de aplicativos ativos deslizando de baixo para cima na tela e procure o aplicativo AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Toque e segure até que um menu apareça. Selecione um ícone de cadeado.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

O ícone de cadeado deve aparecer acima da janela do aplicativo.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Para permitir que seu aplicativo seja executado com sucesso em segundo plano, configure suas configurações da seguinte maneira:

- Defina a inicialização automática como “Ativado”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Configurações** → **Desempenho da bateria &** → desligue a função **Economia de bateria**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Em seguida, abra **Economizador de bateria do aplicativo** Configurações → **AdGuard** → **Sem restrições**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Todos os modelos

As etapas a seguir devem ser executadas em qualquer dispositivo Xiaomi que continue encerrando o aplicativo AdGuard:

#### Gerenciamento de energia

Por favor, ative:

- **Configurações** → **Configurações avançadas** → **Gerenciador de bateria** → defina **Plano de energia** para **Desempenho**
- **Configurações do dispositivo** → **Configurações avançadas** → **Gerenciador de bateria** → **Aplicativos protegidos** — O AdGuard precisa estar **Protegido**
- **Configurações do dispositivo** → **Aplicativos** → **AdGuard** → **Bateria** → **Aviso de uso intensivo de energia** e **Continuar executando após a tela desligada**
- **Configurações** → **Configurações adicionais** → **Bateria & Desempenho** → **Gerenciar o uso da bateria dos aplicativos** e aqui:

1. Alterne os modos de economia de energia para “Desligado”
1. Escolha as seguintes opções: **Economia de energia em segundo plano** → **Escolher aplicativos** → **AdGuard** → **Configurações de segundo plano** → **Sem restrições**

#### Economia de bateria do aplicativo

Defina **Segurança** → **Bateria** → **Economizador de bateria do aplicativo** → **AdGuard** para **Sem restrição**

#### Fixar aplicativo

Para configurar o trabalho em segundo plano do AdGuard em dispositivos Xiaomi, você deve prestar atenção em Bateria e Permissões.

- Toque no botão **Tarefas recentes** e deslize o AdGuard para baixo para tornar as opções *visíveis* (conforme mostrado na captura de tela):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Toque no ícone **de cadeado**. Isso impedirá que a Xiaomi feche o AdGuard automaticamente. Deve ficar assim:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Vá para **Bateria**

- Selecione o aplicativo **economia de bateria**

- Localize e selecione **AdGuard**

- Configure as seguintes **Configurações de segundo plano**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Vá para **Permissões**

- Selecione **Início automático**

- Certifique-se de que a função de inicialização automática esteja habilitada para o AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Em muitos dispositivos Samsung, qualquer aplicativo que não seja utilizado por 3 dias não poderá ser iniciado em segundo plano. Você deve desativar as opções **Bateria adaptável** e **Colocar aplicativos em hibernação** sempre que possível para evitar isso. Observe que, após uma atualização de aplicativo ou sistema operacional, essas configurações geralmente retornam aos valores padrão e precisam ser desativadas novamente.

### Android 11+

No Android 11, a Samsung impedirá que aplicativos (incluindo o AdGuard) funcionem em segundo plano por padrão, a menos que você os exclua das otimizações de bateria. Para garantir que o AdGuard não seja encerrado em segundo plano:

1. Bloqueie o AdGuard em Recentes

    - Abra **Aplicativos recentes**.
    - Encontre o AdGuard.
    - Pressione e segure o ícone do aplicativo AdGuard.

1. Para manter o AdGuard funcionando corretamente:

    Vá para **Configurações** → **Aplicativos** → **AdGuard** → **Bateria** → **Otimizar o uso da bateria**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    No menu suspenso, selecione **Todos**. Em seguida, encontre o AdGuard na lista e defina o estado dele como **Não otimizar** (em alguns modelos, pode haver um botão que você precisa desativar).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Em alguns dispositivos, a configuração relevante pode ter um nome diferente e estar localizada em outros lugares. Entre os caminhos possíveis estão:

    **Configurações** → **Aplicativos** → Menu (⁝) → **Acesso especial** → **Otimizar o uso da bateria** → Encontre o AdGuard na lista e desmarque-o

1. Desabilite a otimização automática. Para isso:

    Abra o menu **Bateria** → (⁝) → Escolha **Automação** → Desative todas as configurações de lá

    Novamente, o caminho exato pode ser diferente, por exemplo, em alguns dispositivos você deve ir para:

    **Configurações** do celular → **Cuidados com o dispositivo** → Toque no menu de três pontos (⁝) → **Avançado** → Desative **Otimização automática** e **Otimizar configurações**

1. Se o seu celular tiver esta opção, desative a Bateria adaptativa:

    Abra as **Configurações** do aparelho → **Bateria** → **Mais configurações da bateria** → Desligue a **Bateria adaptativa**

1. Desative os aplicativos em segundo plano (o nome exato desta configuração e o caminho para ela podem variar dependendo do dispositivo):

    Abra as **Configurações** do telefone → **Bateria** → **Limites de uso em segundo plano** → Desative **Colocar aplicativos não utilizados para hibernar**

### Android 9 & 10

- Vá para **Configurações do telefone** → **Cuidados com o dispositivo** → Toque no item **Bateria** → (⁝) **Menu de 3 pontos** → **Configurações** e desmarque **Colocar aplicativos não utilizados para hibernar** e **Desativar automaticamente aplicativos não utilizados**.

- Verifique se **Configurações do telefone** → **Aplicativos** → **Suspender como Android** → **Bateria** → **Restrição de segundo plano** está definida como **O aplicativo pode usar a bateria em segundo plano** para o AdGuard.

- Remova o AdGuard dos aplicativos em suspensão. Para isso:

    1. Vá para **Configurações do telefone** → **Cuidados com o dispositivo**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Toque em **Bateria**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Toque no **menu de 3 pontos** → **Configurações**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Toque em **Aplicativos em suspensão**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Acorde** o AdGuard usando o ícone da lixeira

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Dispositivos Samsung antigos

Para os primeiros dispositivos Samsung, não há grande necessidade de configurar a operação em segundo plano, mas se no seu caso o aplicativo AdGuard estiver fechando ou desaparecendo das tarefas recentes depois de um tempo, faça o seguinte:

- Toque no botão **Tarefas recentes**, toque no ícone **Configurações adicionais**. Deve ficar assim:

 ![Configurações Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Toque em **Bloquear aplicativos**:

 ![Configurações Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Toque no ícone de bloqueio

 ![Configurações Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

A Huawei e sua personalização do Android **EMUI** estão entre as mais problemáticas do mercado no que diz respeito às limitações de processos em segundo plano não padronizados. Nas configurações padrão, praticamente todos os aplicativos que funcionam em segundo plano enfrentarão problemas e acabarão quebrando.

### Lançamento do aplicativo em alguns dispositivos EMUI 8, 9 e 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

Este recurso pode ou não estar disponível para todos os dispositivos ou pode ser rotulado de forma diferente.

1. Vá para o telefone **Configurações** → **Bateria** → **Iniciar aplicativo**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Desative **Gerenciar tudo automaticamente**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Defina o AdGuard como **Gerenciar manualmente** e habilite todas as opções.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Desative **o Gerenciador de inicialização** que impede que os aplicativos sejam executados automaticamente após a inicialização do telefone.

    Vá para **Configurações** → **Todos** → **Gerenciador de inicialização** → Desative o AdGuard

    Além disso, para processos em segundo plano confiáveis, talvez seja necessário desinstalar o **PowerGenie** conforme detalhado abaixo.

### Dispositivos EMUI 9+ e PowerGenie

:::note

Em telefones com EMUI 9+ (Android P+), há um aplicativo eliminador de tarefas chamado PowerGenie que força o encerramento de todos os aplicativos não permitidos pela Huawei e não oferece aos usuários nenhuma opção de configuração. Veja abaixo como desinstalá-lo.

:::

A Huawei é extremamente criativa em quebrar aplicativos em seus dispositivos. Além de todas as medidas de gerenciamento de energia não padronizadas descritas abaixo, eles introduziram um aplicativo eliminador de tarefas integrado ao EMUI 9 no Android Pie.

Ele é chamado de **PowerGenie** e elimina todos os aplicativos que não estão na sua lista de permissões. Você não pode adicionar aplicativos personalizados na lista de permissões predefinida. Isso significa que não há outra maneira de obter a funcionalidade adequada do aplicativo no Huawei sem a desinstalação do PowerGenie.

Infelizmente, este é um aplicativo de sistema que só pode ser totalmente desinstalado usando o ADB (Android Debug Bridge).

:::note Fonte

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Você precisa**:

Em alguns casos, pode ser possível desabilitar o PowerGenie em **Configurações do celular** → **Aplicativos**. Se essa configuração estiver presente nas configurações do seu dispositivo, você poderá pular as etapas a seguir. No entanto, ele precisará ser reaplicado toda vez que você reiniciar o dispositivo. Se não houver tal configuração, siga estas instruções:

1. [Instale o ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) no seu computador;

1. Conecte seu telefone com um cabo de dados;

1. Ative as [Opções de desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Ative **Depuração via USB** nas opções do desenvolvedor no seu telefone;

1. Execute os seguintes comandos no seu computador:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Se o AdGuard continuar sendo encerrado, tente também executar

`adb shell pm stopservice hwPfwService`

### Dispositivos EMUI 6+ (e alguns dispositivos EMUI 5)

- **Configurações do telefone** → **Configurações avançadas** → **Gerenciador de bateria** → **Plano de energia** definido como **Desempenho**;
- **Configurações do. celular** → **Configurações avançadas** → **Gerenciador de bateria** → **Aplicativos protegidos** → defina o AdGuard como **Protegido**;
- **Configurações do telefone** → **Aplicativos** → **Seu aplicativo** → **Bateria** → **Aviso de uso intensivo de energia** `[desmarque]` e **Continuar executando após a tela desligada** `[marque]`;
- **Configurações do telefone** → **Aplicativos** → **Avançado (na parte inferior)** → **Ignorar otimizações** → Pressione Permitido → **Todos os aplicativos** → Encontre o AdGuard na lista e defina como **Permitir**.

#### Huawei P9 Plus

Abra as configurações do dispositivo → **Aplicativos** → **Configurações** → **Acesso especial** → escolha **Ignorar otimização da bateria** → selecione **Permitir** para AdGuard.

### Huawei P20, Huawei Honor 9 Lite e Huawei Mate 9 Pro

Abra as configurações do dispositivo → **Bateria** → **Iniciar aplicativo** → defina o AdGuard como **Gerenciar manualmente** e certifique-se de que tudo esteja ligado.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Configurações do celular** → **Bateria** → **Inicialização do aplicativo** → defina o AdGuard como **Gerenciar manualmente** e certifique-se de que tudo esteja ativado. Além disso, para processos em segundo plano confiáveis, talvez seja necessário desinstalar o PowerGenie conforme descrito acima.

### Huawei antigo

Os dispositivos Huawei mais antigos são os mais fáceis de configurar. Basta executar dois passos simples para bloquear o AdGuard em segundo plano, para que ele não seja encerrado pelo processo de economia de bateria ou de eliminação de processos em segundo plano.

- Toque no botão **Tarefas recentes**:

    ![Aplicativos recentes da Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Toque no ícone de bloqueio:

    ![Bloqueio Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Além disso, para configurar o trabalho em segundo plano do AdGuard de forma mais eficaz, você deve abrir as configurações do dispositivo e fazer o seguinte:

- Vá para **Configurações** → abra **Gerenciador de bateria** → defina **Plano de energia** para **Desempenho**;
- Em seguida, escolha **Aplicativos protegidos** no **Gerenciador de bateria** e verifique se o AdGuard está protegido;
- Vá para **Aplicativos** nas configurações principais e toque em AdGuard → escolha **Bateria** → habilitar **Aviso de uso intensivo de energia** e **Continuar executando após a tela desligar**;
- Em seguida, na seção **Aplicativos**, abra **Configurações** (na parte inferior) → **Acesso especial** → escolha **Ignorar otimização da bateria** → pressione **Permitido** → **Todos os aplicativos** → encontre o AdGuard na lista e defina-o como **Negar**.

## Meizu

A Meizu tem quase a mesma abordagem às limitações do processo em segundo plano que a Huawei e a Xiaomi. Assim, você pode evitar desabilitar o trabalho em segundo plano do AdGuard e de qualquer outro aplicativo ajustando as seguintes configurações:

- Vá para **Configurações avançadas** → abra **Gerenciador de bateria** → defina **Plano de energia** para **Desempenho**;
- Em seguida, escolha **Aplicativos protegidos** no **Gerenciador de bateria** e verifique se o AdGuard está protegido;
- Vá para a seção **Aplicativos** e toque em AdGuard → escolha **Bateria** → ative **o prompt de uso intensivo de energia** e **Mantenha a execução após a tela ser desligada**.

## Nokia

Os dispositivos (Nokia) com Android 9+ têm **O Evenwell Economia de energia** desativado, o principal culpado por encerrar processos em segundo plano. Se o AdGuard ainda for encerrado no seu telefone Nokia, confira as [instruções antigas](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Instale o ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) no seu computador;

1. Conecte seu telefone com um cabo de dados;

1. Ative as [Opções de desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Ative **Depuração via USB** nas opções do desenvolvedor no seu telefone;

1. Desinstale o pacote **com.evenwell.emm** por meio dos seguintes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 e 5.1

Nesses dispositivos, há um eliminador de tarefas chamado **DuraSpeed** que encerra todos os aplicativos em segundo plano. Ele não pode ser desinstalado ou desabilitado por meios comuns. Essas ações exigem o ADB e, mesmo assim, quando desabilitado, o DuraSpeed será reabilitado na reinicialização. Você precisa de um aplicativo tasker como [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) para desativar automaticamente o DuraSpeed.

1. [Instale o ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) no seu computador;

1. Conecte seu telefone com um cabo de dados;

1. Ative as [Opções do desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Ative **Depuração via USB** nas opções do desenvolvedor no seu telefone;

1. Conceda ao MacroDroid (ou ao aplicativo de automação de sua escolha) a capacidade de gravar no armazenamento de configurações globais inserindo o seguinte comando:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Crie uma tarefa disparada em **Inicialização do dispositivo** que execute o seguinte:

    - Configuração do sistema: tipo **Global**, nome `setting.duraspeed.enabled`, valor **-1**
    - Configuração do sistema: tipo **Sistema**, nome `setting.duraspeed.enabled`, valor **-1**
    - Configuração do sistema: tipo **Global**, nome `setting.duraspeed.enabled`, valor **0**
    - Configuração do sistema: tipo **Sistema**, nome `setting.duraspeed.enabled`, valor **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Você precisa das configurações do tipo **Global** e **Sistema**. A captura de tela mostra apenas a configuração Global como exemplo.


:::

### Outros modelos Nokia

- Vá para o telefone **Configurações** → **Aplicativos** → **Ver todos os aplicativos**.

- Toque no menu do canto superior direito → **Mostrar sistema**.

Encontre o **Aplicativo de economia de energia** na lista, selecione-o e toque em **Forçar fechamento**. Ele permanecerá parado por um tempo, mas será reiniciado em algum momento.

A partir de agora, o AdGuard deve funcionar normalmente e usar as otimizações de bateria padrão do Android até que o Power Saver seja reiniciado.

Uma solução alternativa e mais permanente para usuários mais experientes em tecnologia:

1. [Instale o ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) no seu computador;

1. Conecte seu telefone com um cabo de dados;

1. Ative as [Opções do desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Ative **Depuração via USB** nas opções do desenvolvedor no seu telefone;

1. Desinstale o pacote **com.evenwell.powersaving.g3** por meio dos seguintes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Às vezes, serviços em segundo plano são encerrados (incluindo serviços de acessibilidade, que precisam ser reativados) quando você desliga a tela. Até agora, uma solução alternativa para isso é:

Vá para **Central de Segurança** → toque em **Permissões de Privacidade** → **Gerenciador de Inicialização** e permita que o aplicativo AdGuard seja executado em segundo plano.

Outras soluções:

- Fixe o AdGuard na tela de aplicativos recentes
- Ative o AdGuard na lista de aplicativos dentro do “gerenciador de inicialização” e da “lista de aplicativos flutuantes” do aplicativo de segurança (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Desative as otimizações de bateria

## OnePlus

Dispositivos com OxygenOS integrado são os mais problemáticos, com sua limpeza de cache específica do sistema operacional e RAM livre, incluindo otimização do sistema operacional. Além disso, o OxygenOS pode interromper o trabalho do AdGuard se você não o utilizar por um tempo. Para evitar essas consequências indesejadas, siga estas etapas.

### Bloqueando o aplicativo

- Vá para **Configurações**

- **Bateria** → **Otimização da bateria**

- Encontre o AdGuard

- Toque nele e selecione a opção **Não otimizar**

- Toque em **Concluído** para salvar

- Abra o menu de aplicativos recentes (como mostrado nesta captura de tela):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Bloqueie o aplicativo AdGuard:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::cuidado

Em alguns telefones OnePlus, há também um recurso chamado Inicialização Automática de Aplicativos e Otimização Profunda, que basicamente impede que os aplicativos sejam executados em segundo plano. Por favor, desative-o para o AdGuard.

:::

### Otimização da bateria

- Abra as configurações do dispositivo → **Bateria** → **Otimização da bateria** → alterne para a lista **Todos os aplicativos** (menu superior) → escolha AdGuard → ative **Não otimizar**

- Abra as configurações do dispositivo → **Bateria** → **Otimização da bateria** → Menu (⁝) de três pontos → **Otimização avançada** → Desativar otimização profunda

### Inicialização automática do aplicativo

O lançamento automático de aplicativos (em alguns telefones OnePlus) basicamente impede que os aplicativos sejam executados em segundo plano. Por favor, desative-o para o AdGuard.

### Otimização avançada/aprimorada

Para OnePlus 6 e superior:

- Abra **Configurações do sistema** → **Bateria** → **Otimização da bateria** → (⁝) menu de três pontos → **Otimização avançada**
- Desativar **Otimização profunda** / **Bateria adaptável**
- Desative **Otimização do modo de espera**. O OnePlus tenta aprender quando você normalmente está dormindo e, nesses momentos, ele desattiva as conexões de rede do telefone. Esta configuração impedirá que notificações push sejam entregues.

Para OnePlus abaixo de 6:

- Desligue **Configurações do sistema** → **Bateria** → **Otimização da bateria** → (⁝) menu de três pontos → **Otimização aprimorada**.

### Comportamento de limpeza de aplicativos recentes

Normalmente, quando você desliza um aplicativo para fora, ele não fecha. No entanto, no OnePlus isso pode funcionar de maneira diferente. O gerenciador de comportamento de limpeza de aplicativos recentes pode estar configurado de forma que deslizar o dedo para fechá-lo o desative. Para retornar ao modo “normal”:

Vá para **Configurações** → **Avançado** → **Gerenciamento de aplicativos recentes** → Alternar para **Limpeza normal**

## Sony

A Sony foi a primeira desenvolvedora de sistemas operacionais móveis a introduzir otimização de processos em segundo plano não padronizada. Ele é chamado **Modo Estamina** e interrompe instantaneamente todos os processos em segundo plano se ativado. Para resolver isso:

Vá para **Configurações** → **Bateria** → Desativar **Modo STAMINA**

![Modo Estamina da Sony *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

No Android 11+, na mesma tela do modo STAMINA, há uma configuração chamada **Bateria adaptável**, você deve desativá-la também.

Você também precisa definir o AdGuard como Excetuado do recurso de economia de energia:

**Configurações do sistema** → **Aplicativos & Notificações** → **Avançado** → **Acesso especial a aplicativos** → **Recurso de economia de energia** → Alternar AdGuard para **Exceção**

## Wiko

Os dispositivos Wiko são problemáticos em otimizações não padronizadas de processos em segundo plano. Para permitir que o AdGuard trabalhe em segundo plano, faça o seguinte:

- Vá para **Assistente de telefone** → **Bateria** → desligar **Modo Eco**
- Volte e vá para **Modo manual**
- Toque no ícone **Engrenagem** no canto superior direito → **Lista de permissões de aplicativos em segundo plano** → Selecione **AdGuard**

## Dispositivos Android de estoque Pixel/Nexus/Nubia/Essential

O sistema operacional Android normalmente não entra em conflito com aplicativos executados em segundo plano, mas se você estiver enfrentando algum problema, será necessário ativar o modo **VPN sempre ativa** .

- Vá para **Configurações** → **Rede e Internet**

    ![Rede de ações *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Toque em **VPN** e escolha **AdGuard**

    ![Assinatura *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Configurar **VPN sempre ativa** modo

    ![Protetor de anúncios de ações *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

Em dispositivos que executam o Realme UI 4.0, há três configurações principais para garantir que o AdGuard funcione corretamente em segundo plano.

1. Configure o aplicativo do AdGuard:

    - Pressione e segure o ícone do AdGuard
    - No menu que aparece, selecione **Informações do aplicativo**
    - Vá para **Uso da bateria** e ative todas as opções:
        - Dê permissão para o funcionamento em segundo plano
        - Dê permissão para o funcionamento em primeiro plano
        - Dê permissão para a inicialização automática
    - Na seção **Informações do aplicativo**, role para baixo e desative a opção **Pausar atividade do aplicativo se não utilizado**

    ![VPN sempre ativa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Configure a bateria:

    - Vá para **Configurações → Bateria → Mais configurações → Otimizar o uso da bateria**
    - Encontre o AdGuard na lista e ative **Não otimizar**
    - Em **Outras configurações**, verifique a seção **App Quick Freeze** e desative-a para o AdGuard

    ![VPN sempre ativa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Ativar *VPN sempre ativa* para o AdGuard:

    - Vá para **Configurações → Compartilhamento de & conexão → VPN**
    - Encontre **AdGuard** e ative a opção **VPN sempre ativa**

    ![VPN sempre ativa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
