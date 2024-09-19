---
title: Guia de configurações avançadas
sidebar_position: 9
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Como acessar as configurações avançadas

:::cuidado

Alterar *Configurações avançadas* pode causar problemas no desempenho do AdGuard, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. Faça alterações nesta seção somente se tiver certeza do que está fazendo ou se nossa equipe de suporte o solicitar.

:::

Para encontrar as *Configurações avançadas*, abra o AdGuard, clique no ícone de engrenagem, selecione *Avançado*e selecione *Configurações avançadas*.

## Configurações avançadas

### Network settings

#### `network.extension.exclude.domains`

Os domínios listados serão excluídos da filtragem no modo *Extensão de rede*. Use uma vírgula ou quebra de linha para separar valores.

#### `network.extension.exclude.ports`

As portas listadas serão excluídas da filtragem no modo *Extensão de rede*. Use uma vírgula ou quebra de linha para separar valores.

#### `network.extension.route.exclude`

As rotas listadas serão excluídas da filtragem no modo *Extensão de rede*. Defina rotas usando um endereço IP ou CIDR de destino. Separe os valores com vírgulas ou quebras de linha.

#### `network.extension.http.downgrade.bundleids`

Aqui, você pode especificar uma lista de aplicativos para os quais o protocolo HTTP/2 sofrerá um downgrade para HTTP/1.1 no modo de filtragem *Extensão de rede*. O ID do pacote deve ser separado por vírgula ou quebra de linha.

#### `network.extension.monterey.force.split.tunnel`

Aqui, você pode proibir o AdGuard de usar a "rota padrão", que é ativada por padrão no modo *Extensão de rede* no macOS Monterey. O AdGuard usa a "rota padrão" para desativar o iCloud Private Relay e Protect Mail Activity, pois não pode operar junto deles.

Você encontrará mais informações sobre o problema [neste artigo](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Aqui você pode especificar uma lista de aplicativos que fazem consultas de DNS diretamente, não por meio do resolvedor de DNS do sistema (por exemplo, alguns clientes VPN ou aplicativos de filtragem de DNS). A filtragem de DNS será desativada para eles no *modo Extensão de rede*. Os IDs dos pacotes devem ser separados por vírgula ou quebra de linha.

#### `network.dns.filter.secure.request`

Redireciona as solicitações de DNS seguro para um proxy de DNS local, se houver um disponível.

#### `network.https.ocsp.check`

Ao definir `true`, você habilita a verificação de revogação de certificado HTTPS.

#### `network.tcp.keepalive.enabled`

Envia periodicamente pacotes TCP através de uma conexão inativa para garantir que ela permaneça ativa e para renovar os tempos limite do NAT.

#### `network.tcp.keepalive.interval.seconds`

Tempo ocioso, em segundos, antes de enviar uma sonda de manutenção de atividade. Se 0 for especificado, o sistema usará o valor padrão.

#### `network.tcp.keepalive.timeout.seconds`

Tempo, em segundos, antes de enviar outra sonda de manutenção de atividade para um peer que não responde. Se 0 for especificado, o valor selecionado pelo sistema será utilizado.

#### `network.https.ech.enabled`

Usa um proxy DNS local para procurar configurações nas listas de configurações ECH. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifica a autenticidade de todos os certificados do domínio com base na política de transparência de certificados do Chrome.

#### `network.https.filter.http3.enabled`

Ao definir `true`, você permite que o AdGuard filtre o tráfego enviado por HTTP/3, a versão mais recente do protocolo HTTP baseado em QUIC.

#### `network.filtering.localnetwork`

Ao definir `true`, você habilita a filtragem de rede local.

#### `network.filtering.localhost`

Ao definir `true`, você habilita a filtragem LoopBack.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Aqui você pode inserir os endereços IP dos servidores DNS que serão usados para determinar o endereço do servidor DNS criptografado.

#### `dns.proxy.fallback.ips`

Aqui você pode especificar uma lista de endereços IP de servidores DNS que serão usados como backups caso o servidor DNS criptografado não responda.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

As consultas normais serão redirecionadas para um upstream de fallback se todos os upstreams normais falharem.

#### `dns.proxy.detect.search.domains`

Esta opção permite a detecção automática do domínio da rede local, que será redirecionado automaticamente para o servidor DNS substituto em vez do servidor DNS principal.

#### `dns.proxy.fallback.domains`

Aqui você pode listar os domínios para os quais o servidor DNS substituto será usado em vez do servidor DNS principal.

#### `dns.proxy.adblockrules.blocking.mode`

Aqui você pode especificar o tipo de resposta do servidor DNS às solicitações bloqueadas, correspondendo às regras do tipo bloqueador de anúncios.

- 0 - responder com REFUSED
- 1 - responder com NXDOMAIN
- 2 - responder com 0.0.0.0 ou com os endereços especificados em `dns.proxy.blocking.response.IPv4.address` e/ou `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Aqui você pode especificar o tipo de resposta do servidor DNS às solicitações bloqueadas, correspondendo às regras dos hosts:

- 0 - responder com REFUSED
- 1 - responder com NXDOMAIN
- 2 - responder com 0.0.0.0 ou com os endereços especificados em `dns.proxy.blocking.response.IPv4.address` e/ou `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.IPv4.address`

Aqui você pode especificar o endereço IPv4 que será retornado em resposta às solicitações "A" bloqueadas quando `dns.proxy.adblockrules.blocking.mode` ou `dns.proxy.hostrules.blocking.mode` está definido para o tipo de resposta "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Aqui você pode especificar o endereço IPv6 que será retornado em resposta às solicitações "AAAA" bloqueadas quando `dns.proxy.adblockrules.blocking.mode` ou `dns.proxy.hostrules.blocking.mode` está definido para o tipo de resposta "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Aqui você pode ativar o bloqueio de consultas DNS IPv6.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Aqui você pode especificar o valor TTL (time to live) que será retornado em resposta a uma solicitação bloqueada.

#### `dns.proxy.parallel.upstream.queries.enabled`

Todos os upstreams são consultados simultaneamente. A primeira resposta é retornada.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Responde à falha upstream com um pacote SERVFAIL.

#### `dns.proxy.http3.enabled`

Ativa HTTP/3 para upstreams de DNS-over-HTTPS para acelerar a conexão.

#### `dns.proxy.block.encrypted.client.hello.response`

Remove os parâmetros Encrypted Client Hello das respostas.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Ajusta o tamanho da fragmentação da solicitação HTTP. Valores válidos: 1–1500. Se um tamanho inválido for especificado, o sistema usará o valor padrão.

#### `stealth.antidpi.clienthello.split.fragment.size`

Esta opção especifica o tamanho da fragmentação do pacote TCP, o que ajuda a evitar a inspeção profunda de pacotes. Valores válidos: 1–1500. Se um tamanho inválido for especificado, o sistema usará o valor padrão.

#### `stealth.antidpi.http.space.juggling`

Adiciona espaço extra entre o método HTTP e o URL e remove espaço após o campo "Host:".

#### `stealth.antidpi.split.delay.millisecond`

Aqui você pode especificar o atraso, em milissegundos, após o envio do primeiro fragmento, caso a fragmentação seja realizada.

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

Ative este recurso se quiser que o AdGuard intercepte automaticamente as URLs dos scripts de usuário e abra a janela de instalação.

#### `subscription.link.interception.filter`

Ative este recurso se quiser que o AdGuard intercepte automaticamente URLs de assinatura (por exemplo, abp:subscribe, etc.) e abra a janela de configuração do filtro personalizado.
