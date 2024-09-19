---
title: Guia de configurações de baixo nível
sidebar_position: 5
---

:::info

Este artigo aborda o AdGuard para iOS, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Como alcançar as configurações de baixo nível

:::cuidado

A alteração das *configurações de baixo nível* pode causar problemas no desempenho do AdGuard, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. Esta seção só deve ser aberta se você souber o que está fazendo ou se a nossa equipe de suporte o solicitar.

:::

Para ir para *Configurações de baixo nível*, toque no ícone de engrenagem no canto inferior direito da tela para abrir as *Configurações*. Selecione a seção *Geral* e, em seguida, ative a opção *Modo avançado*. Então, a seção *Configurações avançadas* irá aparecem abaixo. Toque em *Configurações avançadas* para acessar a seção *Configurações de baixo nível*.

## Configurações de baixo nível

### Modo túnel

Existem dois modos de túnel principais: *Split* e *Full*. O modo *Split-Tunnel* fornece compatibilidade entre o AdGuard e os chamados aplicativos "VPN pessoal". No modo *Full-Tunnel*, nenhuma outra VPN pode funcionar simultaneamente com o AdGuard.

Há um recurso específico do modo *Split-Tunnel*: se o proxy DNS não funcionar bem, o iOS irá redirecionar o tráfego através do servidor DNS especificado nas configurações do iOS. Nenhum anúncio está bloqueado neste momento e o tráfego DNS não é criptografado.

No modo *Full-Tunnel*, apenas o servidor DNS especificado nas configurações do AdGuard é usado. Se não responder, a Internet simplesmente não funcionará. O modo *Full-Tunnel* ativado pode causar o desempenho incorreto de alguns programas (por exemplo, Facetime) e causar problemas com atualizações de aplicativos.

Por padrão, o AdGuard usa o modo *Split-Tunnel* como a opção mais estável.

Há também um modo adicional chamado *Full-Tunnel (sem ícone VPN)*. É exatamente igual ao modo *Full-Tunnel*, mas é configurado para que o ícone da VPN não seja exibido na linha do sistema.

### Modo de bloqueio

Neste módulo você pode selecionar a forma como o AdGuard responderá às consultas DNS que devem ser bloqueadas:

- Padrão: responder com endereço IP zero quando bloqueado por regras do tipo adblock; responder com o endereço IP especificado na regra quando bloqueado por regras no estilo /etc/hosts
- RECUSADO: responda com código RECUSADO
- NXDOMAIN: responder com o código NXDOMAIN
- IP não especificado: responder com endereço IP zero
- IP personalizado: responder com um endereço IP definido manualmente

### Bloquear IPv6

Ao mover o botão de alternância para a direita, você ativa o bloqueio de consultas IPv6 (solicitações AAA). As solicitações de DNS do tipo AAAA não serão resolvidas, portanto, apenas as consultas IPv4 poderão ser processadas.

### Resposta TTL bloqueada

Aqui você pode definir o período de armazenamento em cache a resposta a uma solicitação DNS em um dispositivo. Durante o tempo de vida especificado (em segundos), a solicitação pode ser lida do cache sem solicitar novamente o servidor DNS.

### Servidores de bootstrap

Para DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC, é necessário um servidor de bootstrap para obter o endereço IP do servidor DNS principal. Se não for especificado, o servidor DNS das configurações do iOS será usado como servidor de inicialização.

### Servidores Fallback

Aqui você pode especificar um servidor alternativo para o qual uma solicitação será redirecionada se o servidor principal não responder. Se não for especificado, o servidor DNS do sistema será usado como substituto. Também é possível especificar `none`. Neste caso, não haverá servidor substituto definido e apenas o servidor DNS principal será usado.

### Tempo de atualização do aplicativo em segundo plano

Aqui você pode selecionar a frequência com que o aplicativo verificará atualizações de filtro em segundo plano. Observe que as verificações de atualização não serão realizadas com mais frequência do que o período especificado, mas os intervalos exatos podem não ser respeitados.
