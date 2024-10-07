---
title: Guia de configurações de baixo nível
sidebar_position: 6
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Como encontrar as configurações de baixo nível

:::cuidado

A alteração das *configurações de baixo nível* pode causar problemas no desempenho do AdGuard, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. Esta seção só deve ser aberta se você souber o que está fazendo ou se a nossa equipe de suporte o solicitar.

:::

Para ir para *Configurações de baixo nível*, abra o aplicativo AdGuard e toque no ícone de engrenagem no canto inferior direito da tela. Em seguida, selecione *Geral → Avançado → Configurações de baixo nível*.

## Configurações de baixo nível

No AdGuard v4.0 para Android, redesenhamos completamente as configurações de baixo nível: dividimos em blocos temáticos, deixamos mais claras, adicionamos validação de valores inseridos e outras opções de segurança, eliminamos algumas configurações e adicionamos outras.

### Proteção DNS

#### Upstreams alternativos

Aqui você pode especificar o(s) resolvedor(es) DNS de fallback a ser(em) usado(s) caso o servidor configurado não esteja disponível. Existem três opções: *DNS automático*, *Nenhum*e *DNS personalizado*. Se nenhum servidor de fallback for especificado, o *DNS automático*, seja o DNS do sistema ou do AdGuard, será usado. *Nenhum* significa que não há fallback algum. Selecionar *DNS personalizado* permite listar endereços de servidores IPv4 e IPv6 para usar como upstreams.

#### Domínios de fallback

Aqui você pode listar domínios que serão encaminhados diretamente para upstreams de fallback, se eles existirem.

#### Detectar domínios de pesquisa

Se essa configuração estiver ativada, o AdGuard detectará os domínios de pesquisa e os encaminhará automaticamente para upstreams de fallback.

#### Upstreams de inicialização

Bootstrap DNS para servidores DoH, DoT e DoQ. O *DNS automático*, seja o DNS do sistema ou do AdGuard, é usado por padrão. Ao selecionar *DNS personalizado*, você pode listar os endereços de servidor IPv4 e IPv6 a serem usados como upstreams de bootstrap.

#### Modo de bloqueio para regras de estilo adblock

Aqui você pode especificar o tipo de resposta para domínios bloqueados por regras de DNS com base na sintaxe da regra de bloqueio de anúncios (por exemplo, `||example.org^`).

- Responder com REFUSED
- Responder com NXDOMAIN
- Responder com endereço IP personalizado (endereços IPv4 e IPv6 podem ser especificados aqui)

#### Modo de bloqueio para regras de hosts

Aqui você pode especificar o tipo de resposta para domínios bloqueados por regras de DNS com base na sintaxe da regra de hosts (por exemplo, `<ip> <domain> 0.0.0.0 example.com`).

- Responder com REFUSED
- Responder com NXDOMAIN
- Responder com endereço IP personalizado (endereços IPv4 e IPv6 podem ser especificados aqui)

#### Tempo limite de solicitação de DNS

Aqui você pode especificar o tempo em milissegundos que o AdGuard aguardará pela resposta do servidor DNS selecionado antes de recorrer ao fallback. Caso não preencha este campo ou insira um valor inválido, será utilizado o valor de 5000.

#### Resposta TTL bloqueada

Aqui você pode especificar o valor TTL (time to live) que será retornado em resposta a uma solicitação bloqueada.

#### Tamanho do cache DNS

Aqui você pode especificar o número máximo de respostas em cache. O valor padrão é 1000.

#### Bloqueio ECH

Se ativado, o AdGuard remove os parâmetros Encrypted ClientHello das respostas DNS.

#### Ignorar proxy de saída indisponível

Se esta configuração estiver habilitada, o AdGuard enviará solicitações de DNS diretamente quando o proxy de saída não estiver disponível.

#### Experimentar HTTP/3 para upstreams DNS-over-HTTPS

Se esta configuração estiver habilitada, o AdGuard usará HTTP/3 para acelerar a resolução de consultas DNS para upstreams DoH. Caso contrário, o AdGuard retornará ao seu comportamento padrão e usará HTTP/2 para enviar todas as solicitações de DNS para DNS sobre HTTPS.

#### Resposta a falhas SERVFAIL

Se esta configuração estiver habilitada e todos os upstreams, incluindo os de fallback, não responderem, o AdGuard enviará uma resposta SERVFAIL ao cliente.

#### Usar fallback para domínios não-fallback

Se essa configuração estiver ativada, o AdGuard usará upstreams de fallback para todos os domínios. Caso contrário, os upstreams de fallback serão usados somente para domínios de fallback e domínios de pesquisa se a opção correspondente estiver habilitada.

#### Validar upstreams de DNS

Se esta configuração estiver habilitada, o AdGuard testará os upstreams de DNS antes de adicionar ou atualizar servidores DNS personalizados.

#### Filtrar DNS seguro

Se esta configuração estiver ativada, o AdGuard aplicará todos os filtros DNS habilitados e regras de usuário DNS ao tráfego DNS sobre HTTPS (DoH) criptografado e não apenas ao DNS simples. O tráfego DoH vem principalmente do Chrome e de outros navegadores que têm uma configuração *DNS seguro* (ou similar). Você pode usar *Filtrar DNS seguro* em dois modos diferentes:

- **Filtrar em tempo real**. Nesse modo, o AdGuard aplica todos os filtros de DNS e regras de usuário de DNS ativados ao tráfego DoH, mas não o redireciona para o proxy de DNS local. Se um servidor DNS for especificado nas configurações do navegador, esse servidor tratará o tráfego DoH para esse navegador

- **Redirecionar para o proxy DNS**. Neste modo, o AdGuard aplica todos os filtros DNS habilitados e regras de usuário DNS ao tráfego DoH, redirecionando-o para o proxy DNS local. O servidor DNS especificado nas configurações de DNS do AdGuard manipulará todo o tráfego DoH

### Filtragem

#### Capturar HAR

Se esta configuração estiver ativada, o AdGuard capturará arquivos HAR. Ele criará um diretório chamado "har" dentro do diretório de cache do aplicativo e adicionará informações sobre todas as solicitações HTTP filtradas no formato HAR 1.2 que podem ser analisadas com o programa Fiddler.

Use-o apenas para fins de depuração!

### Filtragem HTTPS

#### Encrypted Client Hello

Cada conexão de Internet criptografada tem uma parte não criptografada. Estamos falando do primeiro pacote, que contém o nome do servidor ao qual você está se conectando. A tecnologia Encrypted ClientHello deve resolver esse problema e criptografar esta última parte de informação não criptografada. Para se beneficiar disso, ative a opção *Encrypted Client Hello*. Ela utiliza um proxy DNS local para procurar a configuração ECH para o domínio. Se for encontrado, o pacote Client Hello será criptografado.

#### Verificação OCSP

Se esta configuração estiver ativada, o AdGuard executará verificações OCSP assíncronas para obter o status de revogação do certificado SSL de um site.

Se uma verificação OCSP for concluída dentro do tempo limite exigido, o AdGuard bloqueará imediatamente a conexão se o certificado for revogado ou estabelecerá a conexão se o certificado for válido.

Se a verificação demorar muito, o AdGuard permitirá a conexão enquanto continua a verificar o status do certificado em segundo plano. Se o certificado for revogado, as conexões atuais e futuras com o domínio serão bloqueadas.

#### Redirecionar solicitações DNS-over-HTTPS

Se essa configuração estiver ativada, o AdGuard redirecionará as solicitações de DNS-over-HTTPS para o proxy DNS local, além das solicitações de DNS simples. Recomendamos desativar os upstreams de fallback e usar somente servidores DNS criptografados para manter a privacidade.

#### Filtrar HTTP/3

Se esta configuração estiver ativada, o AdGuard filtrará as solicitações enviadas por HTTP/3, além de outros tipos de solicitação.

### Proxy de saída

#### Mostrar a configuração Filtrar solicitações de DNS

Se isso estiver habilitado, a opção *Filtrar solicitações DNS* será exibida na caixa de diálogo *Adicionar servidor proxy*. Use-o para ativar a filtragem de solicitações de DNS que passam pelo proxy especificado.

### Proteção

#### Intervalo de portas

Aqui você pode especificar intervalos de portas que devem ser filtrados.

#### Registrar eventos HTML removidos

Se esta configuração estiver habilitada, o AdGuard registrará elementos HTML bloqueados em *Atividade recente*.

#### Depuração em Scriptlet

Se essa configuração estiver ativada, a depuração em scriptlets será ativada e o log do navegador registrará quando as regras de scriptlet forem aplicadas.

#### Aplicativos excluídos

Aqui você pode listar nomes de pacotes e UIDs que deseja excluir da proteção do AdGuard.

#### Pacotes QUIC bypass

Aqui você pode especificar nomes de pacotes para os quais o AdGuard deve ignorar o tráfego QUIC.

#### Reconfigurar o proxy automático quando a rede mudar

Se esta configuração estiver ativada, a proteção do AdGuard será reiniciada para reconfigurar as configurações automáticas de proxy quando seu dispositivo se conectar a outra rede. Esta configuração só se aplica se o *Modo de roteamento* estiver definido como *Proxy automático*.

#### Filtragem IPv6

Se esta configuração estiver ativada, o AdGuard filtrará redes IPv6 se uma interface de rede IPv6 estiver disponível.

#### Intervalos IPv4 excluídos da filtragem

A filtragem para os intervalos IPv4 listados nesta seção está desabilitada.

#### Intervalos IPv6 excluídos da filtragem

A filtragem para os intervalos IPv6 listados nesta seção está desabilitada.

#### TCP keepalive para soquetes de saída

Se essa configuração estiver ativada, o AdGuard enviará uma sonda keepalive após o período de tempo especificado para garantir que a conexão TCP esteja ativa. Aqui, você pode especificar o tempo ocioso antes de iniciar as sondagens keepalive e o tempo entre as sondagens keepalive para um peer que não responde.

Após um número definido pelo sistema de tentativas malsucedidas de obter uma resposta do servidor, o sistema fecha automaticamente a conexão TCP.

### Configurações locais de VPN

#### Atraso de recuperação para VPN revogada

Aqui você pode definir o tempo de atraso em milissegundos antes que o AdGuard tente restaurar a proteção VPN após ela ter sido revogada por um aplicativo VPN de terceiros ou pela exclusão do perfil VPN. O valor padrão é 5000 ms.

#### Reagendar atraso para recuperação de VPN revogada

Aqui você pode definir o tempo de atraso em milissegundos antes que o AdGuard reprograme a restauração da proteção VPN após ela ter sido revogada por um aplicativo VPN de terceiros ou pela exclusão do perfil VPN. O valor padrão é 5000 ms.

#### MTU

Aqui você pode definir a unidade máxima de transmissão (MTU) da interface VPN. O intervalo recomendado é de 1500 a 1900 bytes.

#### Restaurar VPN automaticamente

Se esta configuração estiver habilitada, a VPN local do AdGuard será reativada automaticamente após ser desligada devido à ausência de rede, tethering ou modo de baixo consumo de energia.

#### Captura de pacotes (PCAP)

Se esta configuração estiver ativada, o AdGuard criará um arquivo `timestamp.pcap` (por exemplo, 1682599851461.pcap) no diretório de cache do aplicativo. Este arquivo lista todos os pacotes de rede transferidos pela VPN e pode ser analisado com o programa Wireshark.

#### Incluir a porta Wi-Fi nas rotas VPN

Se esta configuração estiver habilitada, os endereços IP do gateway serão adicionados às rotas VPN quando estiver em Wi-Fi.

#### Endereço IPv4

Aqui você pode inserir o endereço IP que será usado para criar uma interface TUN. Por padrão, é `172.18.11.218`.

#### Forçar o roteamento de LAN IPv4

Se esta configuração estiver habilitada, o AdGuard filtrará todas as conexões LAN, incluindo o tráfego de rede IPv4 local, mesmo que a opção *Rotear todas as conexões LAN IPv4* esteja habilitada.

#### Rotear todas as conexões LAN IPv4

Se esta configuração estiver ativada, o AdGuard excluirá as conexões LAN da filtragem de redes simples. Isso pode não funcionar para redes complexas. Esta configuração só se aplica se *Forçar roteamento LAN IPv4* estiver desabilitado.

#### Endereço IPv6

Aqui você pode inserir o endereço IP que será usado para criar uma interface TUN. Por padrão, é `2001:db8:ad:0:ff::`.

### Diversos

#### Detectar Samsung Pay

Se esta configuração estiver ativada, a proteção do AdGuard será pausada enquanto o Samsung Pay estiver em uso. Usuários coreanos precisam desse recurso porque enfrentam [problemas com o Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) quando o AdGuard está ativado.
