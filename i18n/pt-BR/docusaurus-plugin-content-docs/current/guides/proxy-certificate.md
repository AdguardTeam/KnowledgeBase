---
title: Como instalar um certificado de proxy
sidebar_position: 2
---

Nossos aplicativos de desktop, AdGuard para Windows e AdGuard para Mac, podem ser usados como proxy para outros dispositivos. Isso significa que você pode rotear o tráfego de outros dispositivos através do AdGuard (todo o tráfego ou tráfego de aplicativos e navegadores específicos).

:::note

Esses dispositivos devem estar na mesma rede que o PC ou Mac com o AdGuard.

:::

O tráfego HTTP será filtrado em qualquer caso, mas para que o AdGuard possa filtrar o tráfego HTTPS, você precisa instalar manualmente o certificado AdGuard no dispositivo conectado.

## Como baixar e instalar o certificado

Dependendo do sistema operacional do dispositivo cujo tráfego você deseja filtrar, siga uma destas instruções:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. Certifique-se de que a proteção do AdGuard esteja ativada. Em um computador Windows, marque a caixa **Usar o AdGuard como proxy HTTP** na guia **Rede** das configurações. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. No mesmo computador com o AdGuard, siga este link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. Se o download não iniciar, tente outro navegador como o Firefox, por exemplo.

1. Transfira o arquivo baixado **cert.cer** para o dispositivo Windows cujo tráfego você deseja rotear por meio do AdGuard. Você pode usar um cabo USB, Bluetooth ou serviços de nuvem para fazer isso.

1. Nesse dispositivo, pressione **Win**, digite `Gerenciar certificados do computador` e pressione **Enter**.

1. Na página *Certificados — Computador Local*, encontre a pasta *Autoridades de certificação root confiáveis* → *Certificados*.

1. Clique com o botão direito do mouse na pasta *Certificados* e clique em **Todas as tarefas** → **Importar**.

1. Na página *Assistente de importação de certificados*, clique em **Avançar**.

1. Clique em **Procurar** para importar o certificado.

1. Navegue até o arquivo de certificado **cert.cer**, selecione-o, clique em **Abrir** e depois em **Avançar**.

1. Selecione o botão **Colocar todos os certificados no seguinte repositório** caixa de seleção.

1. Certifique-se de que o campo *Armazenamento de certificados* exiba *Autoridades de certificação root confiáveis* e clique em **Avançar**.

1. Clique em **Concluir**.

1. Pressione **Win**e abra **Configurações**.

1. Selecione **Rede & Internet** → **Proxy**.

1. Desativar *Detectar configurações automaticamente*.

1. Clique em **Configurar** na guia *Usar um servidor proxy*.

1. Ative esta opção. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. Para **Port**, insira a porta escolhida nas configurações de rede do aplicativo AdGuard para desktop.

1. Clique em **Salvar**.

### Mac {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. Certifique-se de que a proteção do AdGuard esteja ativada. Em um computador Windows, marque a caixa **Usar o AdGuard como proxy HTTP** na guia **Rede** das configurações. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Siga este link usando um navegador da web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. Se o download não iniciar, tente outro navegador como o Firefox, por exemplo.

1. Transfira o arquivo baixado **cert.cer** para o dispositivo Mac cujo tráfego você deseja rotear por meio do AdGuard. Você pode usar um cabo USB, Bluetooth ou serviços de nuvem para fazer isso.

1. Clique duas vezes no arquivo de certificado baixado.

1. Digite a senha de administrador e clique em **Modificar Keychain**.

1. Vá para **Spotlight** (o ícone de pesquisa no canto superior direito), digite `Keychain Access` e selecione **Keychain Access** nos resultados da pesquisa.

1. Em *Sistema*, destaque o certificado que adicionou.

1. Clique com o botão direito e selecione **Obter informações** no menu contextual.

1. Expanda *Confiança* para exibir as políticas de confiança para o certificado.

1. Em *Secure Sockets Layers (SSL)*, selecione **Confiar sempre**.

1. Abra **Preferências do Sistema** → **Rede** e selecione a conexão ativa na parte superior.

1. Clique em **Detalhes...** e navegue até a guia **Proxies**.

1. Marque duas caixas de seleção: *Web proxy (HTTP)* e *Secure web proxy (HTTPS)*. No campo **Servidor**, digite o endereço IP do seu computador que você anotou na etapa 1. No campo **Porta**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. Certifique-se de que a proteção do AdGuard esteja ativada. Em um computador Windows, marque a caixa **Usar o AdGuard como proxy HTTP** na guia **Rede** das configurações. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. Se o download não iniciar, tente outro navegador como o Firefox, por exemplo.

1. Transfira o arquivo baixado **cert.cer** para o dispositivo Android cujo tráfego você deseja rotear por meio do AdGuard. Você pode usar um cabo USB, Bluetooth ou serviços de nuvem para fazer isso.

1. Localize e toque no certificado **cert.cer** baixado anteriormente para abrir o arquivo e siga as instruções para instalar o certificado.

1. Dispositivos Android não confiam em certificados por padrão, então haverá um aviso. Você pode ignorá-lo. Em alguns telefones, pode ser solicitado que você digite a senha do seu dispositivo. Faça isso e pressione **OK**. O certificado será instalado.

1. Abra as configurações avançadas da rede Wi-Fi ativa.

1. Altere o **Tipo de proxy** para **Manual**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. Certifique-se de que a proteção do AdGuard esteja ativada. Em um computador Windows, marque a caixa **Usar o AdGuard como proxy HTTP** na guia **Rede** das configurações. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. Se o download não iniciar, tente outro navegador como o Firefox, por exemplo.

1. Transfira o arquivo baixado **cert.cer** para o dispositivo iOS cujo tráfego você deseja rotear por meio do AdGuard. Você pode usar um cabo USB, Bluetooth ou serviços de nuvem para fazer isso.

1. No seu dispositivo iOS, abra **Configurações** → **Perfil baixado** e toque em **Instalar** no canto superior direito. Digite sua senha e confirme a instalação. Toque em **Concluído**.

1. Vá para **Configurações** → **Geral** → **Sobre** → **Configurações do certificado de confiança**. Habilite a chave ao lado de *Adguard Personal CA*. O certificado agora está instalado.

1. Nesse dispositivo, abra as configurações avançadas da rede Wi-Fi ativa.

1. Altere o **Tipo de proxy** para **Manual**. Para **Nome do host do proxy**, digite o endereço IP do seu computador que você anotou na etapa 1. Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.
