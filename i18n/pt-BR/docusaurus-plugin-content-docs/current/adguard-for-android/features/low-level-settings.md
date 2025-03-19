---
title: Guia de configurações de baixo nível
sidebar_position: 5
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## Como encontrar as configurações de baixo nível

:::caution

Alterar as configurações de baixo nível pode causar problemas no desempenho do AdGuard, interromper sua conexão com a Internet ou comprometer sua segurança e privacidade. Use os recursos de baixo nível somente se você for um usuário experiente e souber o que está fazendo, ou se nossa equipe de suporte o solicitar.

:::

To access _Low-level settings_, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select _General → Advanced → Low-level settings_.

## Configurações de baixo nível

Para o AdGuard v4.x para Android, redesenhamos completamente as configurações de baixo nível. Refizemos a lista de configurações e as reorganizamos em grupos temáticos com descrições aprimoradas. Também adicionamos validação de entrada e outras válvulas de segurança.

### Proteção DNS

#### Upstreams alternativos

Aqui você pode especificar o(s) resolvedor(es) DNS de recuo a ser(em) usado(s) quando o servidor configurado não estiver disponível. Opções disponíveis:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Estes endereços serão utilizados como servidores DNS primários.

#### Domínios de fallback

Aqui você pode listar domínios que serão redirecionados para recuos de servidores DNS primários, se disponíveis. Você pode inserir múltiplos domínios, um por linha. Você pode usar wildcards limitados.

#### Detectar domínios de pesquisa

Se essa configuração estiver ativada, o AdGuard detectará os domínios de pesquisa DNS e os redirecionará automaticamente para servidores DNS primários recuo, se disponíveis.

#### Upstreams de inicialização

Bootstrap DNS para servidores DNS primários criptografados, como DoH, DoT e DoQ. Opções disponíveis:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS. Esta opção está selecionada por padrão.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Estes endereços serão utilizados como servidores DNS primários bootstrap.

#### Modo de bloqueio para regras de estilo adblock

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Opções disponíveis:

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Você terá que inserir um endereço IPv4 para solicitações A bloqueadas e um endereço IPv6 para solicitações AAAA bloqueadas.

#### Modo de bloqueio para regras de hosts

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Você terá que inserir um endereço IPv4 para solicitações A bloqueadas e um endereço IPv6 para solicitações AAAA bloqueadas.

#### Tempo limite de solicitação de DNS

Aqui você pode especificar o tempo de espera, em milissegundos, que o AdGuard aguardará para cada Solicitação de DNS antes de redirecioná-la para um resolvedor de DNS fallback. Caso não preencha este campo ou insira um valor inválido, será utilizado o valor de 5000 ms.
Se você tiver vários servidores DNS primários, o recuo DNS será usado somente após o tempo de espera de cada servidor DNS primário ter expirado.

#### Resposta TTL bloqueada

Aqui você pode definir o tempo de vida (TTL) do registro para domínios bloqueados. O valor padrão é 3600 segundos.

#### Tamanho do cache DNS

Aqui você pode especificar o número máximo de respostas em cache. O valor padrão é 1000.

#### Bloqueio ECH

Se esta configuração estiver ativada, o AdGuard bloqueará o TLS Encrypted Hello (ECH) nas respostas DNS.

#### Experimentar HTTP/3 para upstreams DNS-over-HTTPS

Se esta configuração estiver ativada, o AdGuard usará HTTP/3 para acelerar a resolução de consultas de DNS para servidores DNS primários do DNS-over-HTTPS. Caso contrário, o AdGuard retornará ao seu comportamento padrão e usará HTTP/2 para enviar todas as solicitações de DNS para DNS-over-HTTPS.

#### Resposta a falhas SERVFAIL

Se esta configuração estiver ativada, o AdGuard enviará uma resposta SERVFAIL ao cliente se todos os servidores DNS primários, incluindo os de recuo, falharem em responder. Se esta configuração estiver desabilitada, nenhuma resposta será enviada ao cliente nesse caso.

#### Usar fallback para todos os domínios

Se essa configuração estiver ativada, o AdGuard usará recuos de servidores DNS primários para todos os domínios, incluindo os não recuados. Caso contrário, os servidores DNS primários de recuo serão usados somente para domínios de recuo e domínios de pesquisa se a opção correspondente estiver ativada.

#### Validar upstreams de DNS

Se esta configuração estiver ativada, o AdGuard testará os servidores DNS primários antes de adicionar ou atualizar servidores DNS personalizados.

#### Filtrar DNS seguro

Se essa configuração estiver ativada, o AdGuard filtrará as solicitações de DNS criptografadas, além das solicitações de DNS simples. O tráfego DNS criptografado vem principalmente do Chrome e de outros navegadores que têm uma configuração DNS seguro.

Esta configuração possui dois modos:

- **Filter on the fly**. Neste modo, o AdGuard filtra o tráfego DNS-over-HTTPS sem redirecioná-lo para o proxy DNS local. Ele usará o servidor DNS especificado nas configurações do navegador.

- **Redirect to DNS proxy**. Nesse modo, o AdGuard redirecionará as solicitações de DNS-over-HTTPS para o proxy DNS local para filtragem. Ele usará o servidor DNS selecionado nas configurações de DNS do aplicativo AdGuard.

### Filtragem

#### Capturar HAR

Se esta configuração estiver ativada, o AdGuard fará o registro de todas as solicitações HTTP filtradas no formato HAR <b>1.2</b> no subdiretório "har" no diretório de cache do aplicativo. Esses arquivos podem ser analisados com a ferramenta Fiddler.

Essa configuração pode desacelerar seu dispositivo. Use-o apenas para fins de depuração.

### Filtragem HTTPS

#### Encrypted Client Hello

Se esta configuração estiver ativada, o AdGuard criptografará ClientHellos, se necessário. Este recurso requer a filtragem HTTPS para ser ativada. Este recurso utiliza um proxy DNS local para procurar a configuração ECH para o domínio. Se encontrado, o pacote ClientHello será criptografado. Certifique-se de usar um servidor DNS criptografado com este recurso.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. Estamos falando do primeiro pacote, que contém o nome do servidor ao qual você está se conectando. A tecnologia Encrypted Client Hello é projetada para resolver este problema ao criptografar este pacote.

#### Verificação OCSP

Se esta configuração estiver ativada, o AdGuard verificará automaticamente o status de revogação dos certificados SSL antes de se conectar a um site. Este recurso requer a filtragem HTTPS para ser ativada.

Se a verificação for concluída dentro do tempo de espera exigido, o AdGuard permitirá a conexão se o certificado for válido ou bloqueará imediatamente a conexão se o certificado for revogado.

Se a verificação demorar muito, o AdGuard permitirá a conexão enquanto continua a verificar o status do certificado em segundo plano. Se o certificado for revogado, as conexões atuais e futuras com o domínio serão bloqueadas.

#### Filtrar HTTP/3

Se esta configuração estiver ativada, o AdGuard filtrará as solicitações enviadas por HTTP/3, além de outros tipos de solicitação. Este recurso requer a filtragem HTTPS para ser ativada.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

### Proxy de saída

#### Mostrar a configuração Filtrar solicitações de DNS

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Ativar aquele interruptor ativa a filtragem de Solicitações de DNS que passam pelo proxy de saída especificado.

### Proteção

#### Intervalo de portas

Esta configuração permite que você especifique os intervalos de portas que devem ser filtrados. Insira intervalos de portas, um intervalo por linha. Use `..` to specify the range. For example, `80..5221`.

#### Registrar eventos HTML removidos

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Correção de Scriptlet

Se esta configuração estiver ativada, o aplicativo exibirá informações de depuração no console do navegador. Neste modo, a depuração em scriptlets é ativada e o navegador registra os eventos que ocorrem ao aplicar regras de scriptlet.

#### Aplicativos excluídos

Esta configuração permite que você liste os pacotes e UIDs a excluir da proteção do AdGuard. Digite os nomes dos pacotes ou UIDs, um por linha. You can use `//` for comments.

#### Pacotes QUIC bypass

Aqui você pode especificar nomes de pacotes para os quais o AdGuard deve ignorar o tráfego QUIC. Digite os nomes dos pacotes, um por linha. You can use `//` for comments.

#### Reconfigurar o proxy automático quando a rede mudar

Se esta configuração estiver ativada, a proteção do AdGuard será reiniciada para reconfigurar os parâmetros automáticos do proxy quando seu dispositivo se conectar a outra rede. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### Filtragem IPv6

Se esta configuração estiver ativada, o AdGuard filtrará redes IPv6 se uma interface de rede IPv6 estiver disponível.

#### Intervalos IPv4 excluídos da filtragem

Aqui você pode listar os intervalos de endereços IPv4 a excluir da filtragem. Insira um alcance de IP por linha. You can use `//` for comments.

#### Intervalos IPv6 excluídos da filtragem

Aqui você pode listar os intervalos de endereços IPv6 a excluir da filtragem. Insira um alcance de IP por linha. You can use `//` for comments.

#### TCP keepalive para soquetes de saída

Se essa configuração estiver ativada, o AdGuard enviará uma sonda keepalive após o intervalo de tempo especificado para garantir que a conexão TCP ainda esteja ativa. Após um número definido pelo sistema de tentativas malsucedidas de obter uma resposta do servidor, o sistema fecha automaticamente a conexão TCP.

Esta configuração permite que você especifique:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. O valor padrão é 0. Se você estiver tendo problemas com NAT, defina isso como 20.
- **Time between keepalive probes** for an unresponsive peer. O valor padrão é 0 segundos.

### Configurações locais de VPN

#### Atraso de recuperação para VPN revogada

Aqui você pode definir o atraso em milissegundos antes que o AdGuard tente restaurar a proteção VPN após ela ter sido revogada por um aplicativo VPN de terceiros ou pela exclusão do perfil VPN. O valor padrão é 5000 ms.

#### Reagendar atraso para recuperação de VPN revogada

Aqui você pode definir o atraso em milissegundos antes que o AdGuard reprograme a restauração da proteção VPN após ela ter sido revogada por um aplicativo VPN de terceiros ou pela exclusão do perfil VPN. O valor padrão é 5000 ms.

#### MTU

Aqui você pode definir a unidade máxima de transmissão (MTU) da interface VPN. Este é o tamanho máximo do pacote de dados usado na sua VPN local. O intervalo recomendado é de 1500 a 1900 bytes.

#### Restaurar VPN automaticamente

Se esta configuração estiver ativada, a VPN local do AdGuard será reativada automaticamente após ser desligada devido à ausência de rede, tethering ou modo de baixo consumo de energia.

#### Captura de pacotes (PCAP)

Essa configuração ativa o registro de interfaces TUN. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. Este arquivo lista todos os pacotes de rede transmitidos pela VPN e pode ser analisado usando a ferramenta Wireshark.

#### Incluir a porta Wi-Fi nas rotas VPN

Se esta configuração estiver ativada, os endereços IP do gateway serão adicionados às rotas da VPN quando o dispositivo estiver conectado ao Wi-Fi.

#### Endereço IPv4

Aqui você pode inserir o endereço IP que será usado para criar uma interface TUN. The default value is `172.18.11.218`.

#### Forçar o roteamento de LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Rotear todas as conexões LAN IPv4

Se esta configuração estiver ativada, o AdGuard excluirá as conexões LAN da filtragem de redes simples. Isso pode não funcionar para redes complexas. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### Endereço IPv6

Aqui você pode inserir o endereço de IP que será usado para criar uma interface TUN. The default value is `2001:db8:ad:0:ff::`.

### Diversos

#### Mostrar as ferramentas para desenvolvedores na tela principal

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. Ele permite que você ative ou desative rapidamente filtros personalizados, acesse registros, ative vários registros e muito mais.

#### Detectar Samsung Pay

Se esta configuração estiver ativada, a proteção do AdGuard será pausada quando você abrir o aplicativo Samsung Pay. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
