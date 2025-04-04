---
title: Como configurar o proxy de saída
sidebar_position: 7
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Abaixo está uma lista dos aplicativos mais conhecidos que podem ser configurados para funcionar como proxies no AdGuard.

:::note

Se o seu aplicativo não estiver listado abaixo, verifique as configurações de proxy nas configurações ou entre em contato com a equipe de suporte.

:::

O AdGuard permite que você roteie o tráfego do seu dispositivo por meio de um servidor proxy. Para acessar as configurações de proxy, abra **Configurações** e então prossiga para **Filtragem** → **Rede** → **Proxy**.

## Exemplos de configuração de proxy

Neste artigo, damos exemplos de como configurar alguns dos proxies mais populares para trabalhar com o AdGuard.

### Como usar o AdGuard com o Tor

1. Abra o AdGuard e vá para **Configurações** → **Filtragem** → **Rede** → **Proxy**. Baixe “Orbot: Proxy com Tor” diretamente do [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) ou tocando em **Integrar com Tor** e então **Instalar**.

1. Abra o Orbot e pressione o botão **Iniciar** na tela principal do aplicativo.

1. Volte para a tela **Proxy** do AdGuard.

1. Toque no botão **Integrar com Tor**.

1. Todos os campos obrigatórios serão pré-preenchidos:

    | Campo          | Valor                |
    | -------------- | -------------------- |
    | Tipo do proxy  | *SOCKS4* ou *SOCKS5* |
    | Host do proxy  | *127.0.0.1*          |
    | Porta do proxy | *9050*               |

    Ou você pode tocar em **Servidor proxy** → **Adicionar servidor proxy**, inserir esses valores manualmente e definir o Orbot como o proxy padrão.

1. Ative o comutador de proxy principal e a proteção do AdGuard para rotear o tráfego de seu dispositivo por meio do proxy.

    Agora o AdGuard roteará todo o tráfego pelo Orbot. Se você desativar o Orbot, a conexão com a Internet ficará indisponível até que você desative as configurações de proxy de saída no AdGuard.

### Como usar o AdGuard com PIA (Private Internet Access)

*Aqui presumimos que você já é um cliente PIA VPN e o tem instalado em seu dispositivo.*

1. Abra o AdGuard e vá para **Configurações** → **Filtragem** → **Rede** → **Proxy** → **Servidor proxy**.

1. Toque no botão **Adicionar servidor proxy** e insira os seguintes dados:

    | Campo          | Valor                                |
    | -------------- | ------------------------------------ |
    | Tipo do proxy  | *SOCKS5*                             |
    | Host do proxy  | *proxy-nl.privateinternetaccess.com* |
    | Porta do proxy | *1080*                               |

1. Você também precisa preencher os campos **Nome de usuário/Senha**. Para fazer isso, faça login no [Painel de Controle do Cliente](https://www.privateinternetaccess.com/pages/client-sign-in) no site da PIA. Toque no botão **Gerar senha** na seção **Gerar senha PPTP/L2TP/SOCKS**. Um nome de usuário começando com “x” e uma senha aleatória serão exibidos. Use-os para preencher os campos **Nome de usuário do proxy** e **Senha do proxy** no AdGuard.

1. Toque em **Salvar e selecionar**.

1. Ative o comutador de proxy principal e a proteção do AdGuard para rotear o tráfego de seu dispositivo por meio do proxy.

### Como usar o AdGuard com o TorGuard

*Aqui presumimos que você já é um cliente TorGuard e o tem instalado em seu dispositivo.*

1. Abra o AdGuard e vá para **Configurações** → **Filtragem** → **Rede** → **Proxy** → **Servidor proxy**.

1. Toque no botão **Adicionar servidor proxy** e insira os seguintes dados:

    | Campo          | Valor                                       |
    | -------------- | ------------------------------------------- |
    | Tipo do proxy  | *SOCKS5*                                    |
    | Host do proxy  | *proxy.torguard.org* ou *proxy.torguard.io* |
    | Porta do proxy | *1080* ou *1085* ou *1090*                  |

1. Nos campos **Nome de usuário** e **Senha**, insira seu nome de usuário e senha de proxy que você escolheu na inscrição no TorGuard.

1. Toque em **Salvar e selecionar**.

1. Ative o comutador de proxy principal e a proteção do AdGuard para rotear o tráfego de seu dispositivo por meio do proxy.

### Como usar o AdGuard com a NordVPN

1. Faça login em sua conta NordVPN.

1. Vá para **Serviços** → **NordVPN** → **Configuração manual** e configure suas credenciais de serviço manualmente.

1. Você receberá um código de verificação no endereço de e-mail usado para o NordVPN. Use-o na sua conta NordVPN conforme solicitado e toque em *Aplicar* e *OK* para salvar as alterações.

![Configuração manual](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Abra o aplicativo AdGuard, vá para **Configurações** → **Filtragem** → **Rede** → **Proxy** → **Servidor proxy** → **Adicionar servidor proxy**.

1. Insira os seguintes dados:

    | Campo          | Valor                                                                                                                             |
    | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
    | Tipo do proxy  | *SOCKS5*                                                                                                                          |
    | Host do proxy  | Qualquer servidor [desta lista](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Porta do proxy | *1080*                                                                                                                            |

1. Insira suas credenciais NordVPN nos campos **Nome de usuário** e **Senha**.

1. Toque em **Salvar e selecionar**.

1. Ative o comutador de proxy principal e a proteção do AdGuard para rotear o tráfego de seu dispositivo por meio do proxy.

### Como usar o AdGuard com o Shadowsocks

*Aqui presumimos que você já configurou um servidor Shadowsocks e um cliente no seu dispositivo.*

:::note

Você deve remover o aplicativo Shadowsocks da filtragem antes de configurar o processo (**Gerenciamento de aplicativos** →**Shadowsocks** → **Rotear tráfego pelo AdGuard**) para evitar loops e quedas infinitos.

:::

1. Abra o AdGuard e vá para **Configurações** → **Filtragem** → **Rede** → **Proxy** → **Servidor proxy**.

1. Toque em **Adicionar servidor proxy** e preencha os campos:

    | Campo          | Valor       |
    | -------------- | ----------- |
    | Tipo do proxy  | *SOCKS5*    |
    | Host do proxy  | *127.0.0.1* |
    | Porta do proxy | *1080*      |

1. Toque em **Salvar e selecionar**.

1. Ative o comutador de proxy principal e a proteção do AdGuard para rotear o tráfego de seu dispositivo por meio do proxy.

### Como usar o AdGuard com o Clash

*Aqui presumimos que você já é um cliente Clash e o tem instalado em seu dispositivo.*

1. Abra o Clash e vá para **Configurações** → **Rede** → **Tráfego da rota do sistema** e ative a opção. Isso colocará o Clash no modo proxy.

1. Abra o AdGuard e vá para **Gerenciamento de aplicativos**. Escolha **Clash para Android** e desabilite **Rotear tráfego através do AdGuard**. Isso eliminará o looping de tráfego.

1. Em seguida, vá para **Configurações** → **Filtragem** → **Rede** → **Proxy** → **Servidor proxy**.

1. Toque em **Adicionar servidor proxy** e preencha os campos:

    | Campo          | Valor       |
    | -------------- | ----------- |
    | Tipo do proxy  | *SOCKS5*    |
    | Host do proxy  | *127.0.0.1* |
    | Porta do proxy | *7891*      |

## Limitações

No entanto, pelo menos um fator pode impedir que determinado tráfego seja roteado pelo proxy de saída, mesmo após a definição das configurações de proxy do AdGuard. Isso aconteceria se o próprio aplicativo não estivesse configurado para enviar seu tráfego pelo AdGuard. Para fazer isso, você precisa prosseguir para **Gerenciamento de aplicativos**, escolher o aplicativo e ativar **Rotear tráfego pelo AdGuard**.
