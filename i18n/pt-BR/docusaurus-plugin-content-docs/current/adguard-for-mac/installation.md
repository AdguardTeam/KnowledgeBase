---
title: 'Instalação'
sidebar_position: 2
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisitos do sistema

**Versão do sistema operacional:** macOS 10.15 (64 bits) ou superior

**RAM:** pelo menos 2 GB

**Navegadores:** Safari, Chrome, Firefox, Opera, Yandex.Browser e qualquer outro navegador compatível com macOS

**Espaço livre em disco:** 120 MB

## Instalação

Para instalar o AdGuard para Mac no seu computador, abra o navegador, digite *adguard.com* na barra de endereço e pressione **Baixar** [na página que abrir](https://adguard.com/download.html?auto=1).

![Baixar o aplicativo *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Aguarde o download do arquivo *AdguardInstaller.dmg* e clique duas vezes no seu ícone na lista de arquivos baixados no painel do Dock.

![Clique duas vezes para abrir o arquivo](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

O ícone do AdGuard aparecerá na sua área de trabalho. Clique nele para abrir o aplicativo de instalação e clique duas vezes no ícone do AdGuard na janela aberta.

![Clique duas vezes no ícone do AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Na primeira inicialização do AdGuard, seu sistema operacional avisará que este aplicativo foi baixado da Internet. Clique em **Abrir**.

![Clique em Abrir](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Na próxima etapa, clique em **Instalar**.

![Clique em Instalar](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Espere até que o instalador seja executado.

![Aguarde até que os arquivos necessários sejam baixados](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Para usar o aplicativo, você precisará da senha de administrador da sua conta macOS. Digite a senha quando solicitado na caixa de diálogo e pressione **OK**.

![Digite a senha](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Agora, você verá um assistente de instalação rápida, onde será solicitado que você configure a proteção de acordo com suas necessidades. Você pode começar a fazer ajustes imediatamente ("Vamos lá!") ou pular por enquanto ("Deixar como está").

![Configurar proteção](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Prontinho, o AdGuard está instalado no seu Mac!

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

However, you still can [download an older, compatible version](https://agrd.io/adguard_for_mac_v2-17)

## Desinstalar

### Regular

Primeiro, abra o aplicativo Finder clicando no seu respectivo ícone:

![Abra o Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Vá para a seção Aplicativos. Encontre o AdGuard lá, clique com o botão direito e escolha **Mover para a Lixeira**.

![Mover AdGuard para a Lixeira *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Avançado

**Use estas instruções somente se você souber o que está fazendo ou se nosso serviço de suporte recomendou especificamente a "desinstalação avançada". Além disso, execute todos os passos da "Desinstalação regular" primeiro.**

1. Depois disso, exclua os seguintes arquivos do AdGuard:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (pasta)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (arquivo)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (pasta)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (arquivo)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (arquivo)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (arquivo)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (arquivo)

    Para isso, abra o aplicativo Terminal, digite e execute os seguintes comandos:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Execute o aplicativo **Monitor de Atividades**.
1. Usando a ferramenta de busca, encontre o processo **cfprefsd**.

    ![Execute o Monitor de Atividade](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Pare o processo que está sendo executado pelo usuário (não aquele executado como root). Para isso, clique no processo e depois clique em X no canto superior esquerdo. Confirme a ação na janela de diálogo.

    ![Confirmar](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

O AdGuard foi removido do seu computador agora.
