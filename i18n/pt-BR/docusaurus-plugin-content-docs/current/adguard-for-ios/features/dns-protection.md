---
title: Proteção DNS
sidebar_position: 2
---

:::info

Este artigo é sobre o AdGuard para iOS, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

[Módulo de proteção DNS](https://adguard-dns.io/kb/general/dns-filtering/) aumenta sua privacidade criptografando seu tráfego DNS. Ao contrário do bloqueio de conteúdo do Safari, a proteção DNS funciona em todo o sistema, ou seja, além do Safari, em aplicativos e outros navegadores. Você deve habilitar este módulo antes de poder usá-lo. Você pode fazer isso na tela inicial tocando no ícone de escudo na parte superior da tela ou acessando a guia _Proteção_ → _Proteção DNS_.

:::note

Para poder gerenciar as configurações de DNS, os aplicativos AdGuard exigem o estabelecimento de uma VPN local. Ele não encaminhará seu tráfego por meio de servidores remotos. No entanto, o sistema solicitará que você confirme a permissão de acesso.

:::

### Implementação de DNS {#dns-implementation}

![Tela de implementação de DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Esta seção tem duas opções: AdGuard e implementação nativa. Basicamente, esses são dois métodos de configuração de DNS.

Na implementação nativa, o DNS é gerenciado pelo sistema e não pelo aplicativo. Isso significa que o AdGuard não precisa criar uma VPN local. Infelizmente, isso não te ajudará a contornar as restrições do sistema e usar o AdGuard junto com outros aplicativos baseados em VPN. Se alguma VPN estiver habilitada, o DNS nativo será ignorado. Consequentemente, você não poderá filtrar o tráfego localmente nem usar nosso novo [protocolo DNS-over-QUIC (DoQ)] (https://adguard.com/en/blog/dns-over-quic.html).

### Servidores DNS {#dns-servers}

A próxima seção que você verá na tela Proteção DNS é o servidor DNS. Ele mostra o servidor DNS e o tipo de criptografia selecionados no momento. Para alterar qualquer um deles, toque no botão para entrar na tela do servidor DNS.

![Servidores DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Os servidores diferem pela velocidade, protocolo empregado, confiabilidade, política de registro, etc. Por padrão, o AdGuard irá sugerir vários servidores DNS entre os mais populares (incluindo AdGuard DNS). Toque em qualquer um para alterar o tipo de criptografia (se tal opção for fornecida pelo proprietário do servidor) ou para visualizar a página inicial do servidor. Adicionamos etiquetas como "Política de não registro", "Bloqueio de anúncios", "Segurança" para ajudá-lo a fazer uma escolha.

Além disso, na parte inferior da tela existe a opção de adicionar um servidor DNS personalizado. Ele oferece suporte a servidores normais, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC.

#### Autenticação básica de HTTP para DNS-over-HTTPS

Esse recurso traz os recursos de autenticação do protocolo HTTP para o DNS, que não possui autenticação integrada. A autenticação no DNS é útil se você deseja restringir o acesso ao seu servidor DNS personalizado a usuários específicos.

Para ativar este recurso:

1. No AdGuard DNS, vá para _Configurações do servidor_ → _Dispositivos_ → _Configurações_ e altere o servidor DNS para aquele com autenticação. Clicar em _Negar outros protocolos_ removerá outras opções de uso de protocolo, deixando apenas a autenticação DNS-over-HTTPS habilitada e impedindo seu uso por terceiros. Copie o endereço gerado.

![DNS sobre HTTPS com autenticação](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. No AdGuard para iOS, vá para a guia _Proteção_ → _Proteção DNS_ → _Servidor DNS_ e cole o endereço gerado no campo _Adicionar um servidor DNS personalizado_. Salve e selecione a nova configuração.

Para verificar se tudo está configurado corretamente, visite nossa [página de diagnóstico](https://adguard.com/en/test.html).

### Configurações de rede {#network-settings}

![Tela de configurações de rede \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Os usuários também podem gerenciar a segurança do DNS na tela de configurações de rede. _Filtrar dados móveis_ e _Filtrar Wi-Fi_ ativam ou desativam a proteção DNS para os respectivos tipos de rede. Mais abaixo, em _Exceções de Wi-Fi_, você pode excluir redes Wi-Fi específicas da proteção DNS (por exemplo, você pode querer excluir sua rede doméstica se usar o [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### Filtragem DNS {#dns-filtering}

A filtragem DNS permite que você personalize seu tráfego DNS ativando o filtro AdGuard DNS, adicionando filtros DNS personalizados e usando a lista de bloqueio/lista de permissões de DNS.

Como acessar:

_Proteção_ (o ícone de escudo na barra de menu inferior) → _Proteção DNS_ → _Filtragem DNS_

![Tela de filtragem de DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### Filtros DNS {#dns-filters}

Semelhante aos filtros que funcionam no Safari, os filtros de DNS são conjuntos de regras escritas de acordo com uma [sintaxe] especial (https://adguard-dns.io/kb/general/dns-filtering-syntax/). O AdGuard monitorará seu tráfego DNS e bloqueará solicitações que correspondam a uma ou mais regras. Você pode usar filtros como o [filtro AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter) ou adicionar arquivos de hosts como filtros. Vários filtros podem ser adicionados simultaneamente. Para saber como fazer isso, conheça [este manual completo](adguard-for-ios/solving-problems/system-wide-filtering).

#### Lista de permissões e lista de bloqueios {#allowlist-blocklist}

Além dos filtros DNS, você pode ter um impacto direcionado na filtragem DNS adicionando domínios únicos à lista de bloqueios ou à lista de permissões. A lista de bloqueio ainda suporta a mesma sintaxe DNS, e ambos podem ser importados e exportados, assim como a lista de permissões no bloqueio de conteúdo do Safari.
