---
title: Problemas de compatibilidade conhecidos com aplicativos Android
sidebar_position: 16
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Aplicativos VPN

Se você estiver usando o AdGuard no modo de filtragem *VPN local*, não poderá executar outros aplicativos VPN ao mesmo tempo. Para resolver este problema, sugerimos que você:

- Use [AdGuard VPN](https://adguard-vpn.com/welcome.html) — seu *Modo integrado* permite que dois aplicativos operem simultaneamente
- Configure seu aplicativo VPN para atuar como um proxy de saída [](../solving-problems/outbound-proxy.md) e configure um proxy de saída local usando os parâmetros do aplicativo de terceiros
- Mude para o modo *Proxy automático*. Ao fazer isso, o AdGuard não usará mais a VPN local e reconfigurará o iptables
- Mude para o modo *Proxy manual*. Para fazer isso, vá para *Configurações* → *Filtragem* → *Rede* → *Modo de roteamento*

:::note Compatibilidade

O modo *Proxy automático* só é acessível em dispositivos com root. Para *Proxy manual*, o root é necessário em dispositivos com Android 10 ou posterior.

:::

## DNS privado

O recurso DNS privado foi introduzido no Android Pie. Antes da versão Q, o DNS privado não quebrava a lógica de filtragem de DNS do AdGuard e o encaminhamento de DNS pelo AdGuard funcionava normalmente. Mas, a partir da versão Q, a presença do DNS privado força os aplicativos a redirecionar o tráfego por meio do resolvedor do sistema em vez do AdGuard. Veja o blog dos desenvolvedores do Android [](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) para mais detalhes.

- Para resolver o problema com DNS privado, use a regra `$network`

Alguns fabricantes de dispositivos mantêm as configurações de DNS privado ocultas e definem o modo "Automático" como padrão. Portanto, é impossível desativar o DNS privado, mas podemos fazer com que o sistema pense que o upstream não é válido, bloqueando-o com uma regra `$network`. Por exemplo, se o sistema usa o DNS do Google por padrão, podemos adicionar as regras `|8.8.4.4^$network` e `|8.8.8.8^$network` para bloquear o DNS do Google.

## Navegadores não compatíveis

### Navegadores UC: UC Browser, UC Browser para x86, UC Mini, UC Browser HD

Para poder filtrar o tráfego HTTPS, o AdGuard exige que o usuário adicione um certificado aos certificados de usuário confiáveis do dispositivo. Infelizmente, os navegadores UC não confiam nos certificados do usuário, então o AdGuard não pode executar a filtragem HTTPS neles.

- Para resolver este problema, mova o certificado [para o armazenamento de certificados do sistema](../solving-problems/https-certificate-for-rooted.md/)

:::note Compatibilidade

Requer acesso root.

:::

### Navegador Dolphin: Navegador Dolphin, Navegador Dolphin Express

O AdGuard não consegue filtrar seu tráfego ao operar no modo *Proxy manual* porque este navegador ignora as configurações de proxy do sistema.

- Use o modo de filtragem *VPN local* para resolver este problema

### Opera mini: Opera mini, Opera mini com Yandex

O Opera mini direciona o tráfego por meio de um proxy de compactação por padrão, e o AdGuard não consegue descompactá-lo e filtrá-lo ao mesmo tempo.

- Não há solução neste momento

### Navegador Puffin: Navegador Puffin, Navegador Puffin Pro

O Puffin Browser direciona o tráfego por meio de um proxy de compressão por padrão, e o AdGuard não consegue descompactá-lo e filtrá-lo ao mesmo tempo.

- Não há solução neste momento
