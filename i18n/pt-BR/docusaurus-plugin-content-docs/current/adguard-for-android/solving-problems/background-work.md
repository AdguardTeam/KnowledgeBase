---
title: Como proteger o AdGuard de ser desativado pelo sistema
sidebar_position: 8
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

On many Samsung devices, apps that have been unused for three days will not be able to start from the background. To prevent this, you should turn off the **Adaptive Battery** and **Put apps to sleep** options wherever possible. Note that after an app or OS update, these settings often revert to their default values and must be turned off again.

### Android 11+

On Android 11, Samsung prevents apps (including AdGuard) from working in the background by default, unless you exclude them from battery optimizations. To ensure that AdGuard will not be terminated in the background:

1. Lock AdGuard in **Recent apps**: open **Recent apps**, find AdGuard, and long-press the AdGuard app icon.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is **Settings** → **Apps** → (⁝) menu → **Special access** → **Optimize battery usage**. Find AdGuard on the list and uncheck it.

1. Disable automatic optimization:

    Open **Battery** → (⁝) menu → **Automation** and toggle off all the settings there.

    Again, the exact path may differ. For example, on some devices you should go to phone **Settings** → **Device care** → (⁝) menu → **Advanced** and isable **Auto optimization** and **Optimize settings**.

1. If your phone has this option, disable **Adaptive battery**:

    Open phone **Settings** → **Battery** → **More battery settings** and toggle off **Adaptive battery**

1. Disable **Sleeping apps** (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** and disable **Put unused apps to sleep**

If you’re still experiencing issues, try these additional battery optimization adjustments:

 1. Navigate to **Settings** → **Apps** → **AdGuard** → **Battery** and turn on the **Optimised** option:

    ![Optimised settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Go to **Settings** → **Battery** → **Background usage limits** → **Never auto sleeping apps**:

    ![Never auto sleeping apps settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Choose AdGuard from the list of apps. If you don’t see it, return to step 1 and make sure that the *Optimized* battery mode is active:

    ![Choose the app *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 & 10

- Go to **Phone settings** → **Device care**, tap the **Battery** item, go to (⁝) **3-dot menu** → **Settings**, and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- In **Phone settings** → **Apps** → **Sleep as Android** → **Battery**, check that **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from **Sleeping apps**:

    1. Go to **Phone settings** → **Device care**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Wake up AdGuard using the trash can icon:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Dispositivos Samsung antigos

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Deve ficar assim:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### Lançamento do aplicativo em alguns dispositivos EMUI 8, 9 e 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    Vá para **Configurações** → **Todos** → **Gerenciador de inicialização** → Desative o AdGuard

    Além disso, para processos em segundo plano confiáveis, talvez seja necessário desinstalar o **PowerGenie** conforme detalhado abaixo.

### Dispositivos EMUI 9+ e PowerGenie

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Source

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. If this setting is present in your device's settings, you may skip the following steps. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer.

1. Connect your phone with a data cable.

1. Ative as [Opções de desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone.

1. Execute os seguintes comandos no seu computador:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### Dispositivos EMUI 6+ (e alguns dispositivos EMUI 5)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite e Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Huawei antigo

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Ative as [Opções de desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Desinstale o pacote **com.evenwell.emm** por meio dos seguintes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 e 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Ative as [Opções do desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Conceda ao MacroDroid (ou ao aplicativo de automação de sua escolha) a capacidade de gravar no armazenamento de configurações globais inserindo o seguinte comando:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Crie uma tarefa disparada em **Inicialização do dispositivo** que execute o seguinte:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Outros modelos Nokia

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Ative as [Opções do desenvolvedor](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Desinstale o pacote **com.evenwell.powersaving.g3** por meio dos seguintes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### Bloqueando o aplicativo

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::cuidado

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### Otimização da bateria

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### Inicialização automática do aplicativo

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Otimização avançada/aprimorada

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Comportamento de limpeza de aplicativos recentes

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Wiko devices are problematic in terms of non-standard background process optimizations. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## Dispositivos Android de estoque Pixel/Nexus/Nubia/Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. Configure o aplicativo do AdGuard:

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Configure a bateria:

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Ativar *VPN sempre ativa* para o AdGuard:

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

On Motorola devices, there are four key configurations to ensure that AdGuard works properly in the background.

1. Allow background usage:

   - Stop AdGuard protection and close the AdGuard app
   - Go to **Settings → Apps → App battery usage** and find AdGuard
   - Enable **Allow background usage** or select **Unrestricted**, depending on your Android version

1. Remove background activity restrictions:

   - Go to **Settings**
   - Scroll down and tap **Apps & notifications**
   - Find **AdGuard** and open **Advanced → Battery**
   - Tap **Background restriction** or **Background limits**
   - If it says **Background activity restricted**, tap it and then tap **Remove**

1. Manage background apps:

   - Go to **Settings → Battery → Background app use**
   - Enable the **Manage background apps** option
   - In the resulting menu, select the **Apps** tab
   - Find **AdGuard** in the list and tap it
   - In the **Optimize battery use** dialog, select **Always allow**

    ![Always allow *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/motorolla-background-app-use.png)

1. Disable Adaptive Battery:

   - Go to **Settings → Battery**
   - Turn off the **Adaptive Battery** option

## ZTE

ZTE devices functioning under the MyOS operating system have an aggressive approach to background processes. Follow these steps to prevent AdGuard from being closed automatically by AI control:

- Go to **Settings → Battery → App Management**
- Turn off **AI Control**
- Select **Manual Management**
- Find **AdGuard** in the list and set **Background Work** to **Allow**

## Infinix

Infinix devices apply strict battery and power-saving rules that may interrupt AdGuard’s work in the background. Follow these steps to prevent AdGuard from being closed automatically by the system and ensure stable protection:

1. Disable protection and close the AdGuard app.

1. Go to system settings → *App management* → *App list* → *AdGuard* → *Battery* and enable *Allow background usage*. Then go to *Allow background usage* setting and switch the mode to *Unrestricted*.

    ![Allow background usage *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_allow.png)

1. Open system settings → *App management* → *Auto-start management* and enable *AdGuard*.

    ![Auto-start management *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_app_launch.png)

1. Navigate to system settings → *Battery & Power Saving* → *Power Saver* and disable *Battery Saver*.

1. From the *Battery & Power Saving* tab, find *AdGuard*, and select *No Restrictions*.

    ![Power saving management for apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_power_saving.png)

1. Go to *App management* → *Special App Access* → *Battery Optimisation*. At the top of the screen, select *All apps* from the dropdown menu, tap *AdGuard*, and set it to *Not Optimised*.

    ![Battery optimisation *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_not_optimized.png)
