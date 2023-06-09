---
title: Guia de configurações avançadas (de baixo nível)
sidebar_position: 7
---

:::note

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

As Configurações Avançadas, antes conhecidas como configurações de baixo nível, geralmente contêm opções que vão além dos conhecimentos do usuário médio e não são aplicadas no uso diário. O AdGuard para Windows foi pensado para que você consiga utilizá-lo sem alterá-las, mas elas fornecem recursos adicionais em alguns casos mais extremos ou para resolver algum problema incomum.

> Alterar as *Configurações avançadas* sem saber ao certo o que estamos fazendo pode trazer problemas ao desempenho do AdGuard, à conexão com a Internet ou a sua segurança e privacidade. Você só deve fazer alterações nessas configurações se souber o que está fazendo ou se nossa equipe de suporte solicitar alguma ação.

## Como acessar as configurações avançadas

Para ir para *Configurações avançadas*, clique em *Configurações → Configurações gerais* na janela principal e role para baixo até *Configurações avançadas*. Como alternativa, selecione *Avançado → Configurações avançadas...* no menu lateral.

## Configurações avançadas

Depois de abrir as Configurações avançadas, você verá as seguintes opções:

### Bloquear TCP Fast Open

Se ativado, o AdGuard bloqueará o TCP Fast Open no navegador Edge. Para aplicar as configurações, você precisa reiniciar o navegador.

### Usar Encrypted ClientHello

Cada conexão de Internet criptografada tem uma parte não criptografada. Estamos falando do primeiro pacote, que contém o nome do servidor ao qual você está se conectando. A tecnologia Encrypted ClientHello deve resolver esse problema e criptografar esta última parte de informação não criptografada. Para utilizá-la, habilite a opção *Usar Encrypted ClientHello*. Ela utiliza um proxy DNS local para procurar a configuração ECH para o domínio. Se encontrado, o pacote ClientHello será criptografado.

### Verificar a transparência do certificado dos sites

Verifica a autenticidade de todos os certificados do domínio com base na política de transparência de certificados do Chrome. Se o certificado não estiver em conformidade com a política do Certificado de Transparência do Chrome, o AdGuard não filtrará o site. O Chrome, por sua vez, irá bloqueá-lo.

### Ativar verificações de revogação de certificado SSL/TLS

Depois de habilitada, essa opção executa verificações de OCSP assíncronas para verificar se o certificado SSL/TLS do site foi revogado.

Se a verificação do OCSP for concluída dentro do tempo limite mínimo, o AdGuard aplicará imediatamente o resultado: bloquear a conexão se o certificado for revogado ou estabelecer uma conexão se o certificado for válido.

Se a verificação demorar muito, o AdGuard estabelecerá uma conexão e continuará verificando em segundo plano. Se o certificado for revogado, as conexões atuais e futuras com o domínio serão bloqueadas.

### Mostrar AdGuard VPN nas configurações

Ativar esta opção permite que você exiba a aba AdGuard VPN nas Configurações para facilitar a abertura do aplicativo e do site do produto.

### Exclua o aplicativo da filtragem inserindo o caminho completo

Se você deseja que o AdGuard não filtre nenhum aplicativo específico, especifique o caminho completo de cada um deles e os aplicativos serão excluídos da filtragem. Separe caminhos diferentes por ponto e vírgula.

### Ativar notificações de pop-ups do AdGuard

Ative este recurso para ver as pop-ups de notificações do AdGuard. Elas não aparecem com muita frequência e contêm apenas informações importantes. Você também pode usar o menu lateral para rever a última pop-up de notificação.

### Interceptar automaticamente URLs de inscrição de filtros

Ative este recurso se você quiser que o AdGuard intercepte automaticamente URLs de inscrição de filtro (ou seja, `abp:subscribe` e similares) e abra uma caixa de diálogo de instalação de filtro personalizado.

### Usar modo de redirecionamento de driver

Se esta opção estiver ativada, o AdGuard intercepta todo o tráfego e o redireciona para o servidor proxy local para posterior filtragem.

Caso contrário, o AdGuard filtrará todo o tráfego em tempo real, sem redirecionamento. Nesse caso, o sistema considerará o AdGuard como o único aplicativo que se conecta à Internet (os outros aplicativos são roteados por ele). A desvantagem é que isso tornará o firewall do sistema menos eficaz. A vantagem é que essa abordagem funciona um pouco mais rápido.

### Abrir a janela principal na inicialização do sistema

Ative esta opção para abrir a janela principal do AdGuard depois que o sistema for carregado. Observe que isso não afeta se o serviço de filtragem real será iniciado ou não. Esta configuração está localizada em *Configurações → Configurações Gerais*

### Ativar filtragem na inicialização do sistema

A partir da v7.12, por padrão, o serviço do AdGuard não filtra o tráfego após a inicialização do sistema operacional se a opção Iniciar o AdGuard na inicialização do sistema estiver desativada. Em outras palavras, o serviço do AdGuard é iniciado no modo “ocioso”. Ative esta opção para filtrar o tráfego do AdGuard mesmo que o aplicativo não seja iniciado.

*Observe que, antes da versão 7.12, o serviço do AdGuard era iniciado no modo de filtragem por padrão (mesmo que *Iniciar o AdGuard na inicialização do sistema” estivesse desativado). Se você estava satisfeito com o funcionamento antigo, ative esta opção.*

### Filtrar localhost

Se você deseja que o AdGuard filtre as conexões de loopback, marque a caixa. Esta opção estará sempre ativada se você tiver o AdGuard VPN instalado, caso contrário, ele não funcionará.

### Excluir da filtragem intervalos de IP especificados

Se você não deseja que o AdGuard filtre sub-redes específicas, ative esse recurso e especifique os intervalos de IP na notação CIDR (por exemplo, 98.51.100.14/24) na seção **intervalos de IP excluídos da filtragem** abaixo.

### Habilitar escrita HAR

Esta opção deve ser habilitada **apenas para fins de debugging**. Se você marcar esta opção, o AdGuard criará um arquivo que contém informações sobre todas as solicitações HTTP filtradas no formato HAR 1.2. Este arquivo pode ser analisado com o aplicativo Fiddler. Observe que isso pode tornar sua navegação na web significativamente mais lenta.

### Adicionar um espaço extra à solicitação HTTP simples

Adiciona espaço extra entre o método HTTP e o URL e remove o espaço após o campo "Host:" para evitar a inspeção profunda do pacote. Por exemplo, a solicitação

`GET /foo/bar/ HTTP/1.1
Host: example.org`

será convertida para

`GET /foo/bar/ HTTP/1.1
Host:exemplo.org`

Esta opção só é aplicada quando a opção do modo Stealth *Proteger de DPI* está habilitada.

### Ajustar o tamanho da fragmentação do pacote TLS inicial

Especifica o tamanho da fragmentação do pacote TCP, evitando a inspeção profunda do pacote. Esta opção afeta apenas o tráfego HTTPS seguro.

Se esta opção estiver ativada, o AdGuard divide o pacote TLS inicial (o pacote ClientHello) em duas partes: a primeira tem o comprimento especificado e a segunda tem o restante, até o comprimento de todo o pacote TLS inicial.

Valores aceitáveis: 1–1500. Se for especificado um tamanho inválido, o valor selecionado pelo sistema será utilizado. Esta opção só é aplicada quando a opção do modo Stealth *Proteger de DPI* está habilitada.

### Tamanho do fragmento de solicitação HTTP simples

Ajusta o tamanho da fragmentação da solicitação HTTP. Esta opção afeta apenas o tráfego HTTP simples. Se esta opção estiver ativada, o AdGuard divide o pacote inicial em duas partes: a primeira com o comprimento especificado e a segunda com o restante, até o comprimento de todo o pacote original.

Valores aceitáveis: 1–1500. Se for especificado um tamanho inválido, o valor selecionado pelo sistema será utilizado. Esta opção só é aplicada quando a opção do modo Stealth *Proteger de DPI* está habilitada.

### Exibir QUIC

Permite exibir os registros do protocolo QUIC no registro de filtragem. Válido somente para solicitações bloqueadas.

### Ativar TCP Keepalive

Envia periodicamente pacotes TCP por conexão ociosa para garantir que esteja ativo e para renovar os tempos limite de NAT. Esta opção pode ser útil para ignorar as configurações de conversão de endereços de rede (NAT) restritas usadas por alguns ISPs.

### Intervalo de manutenção do TCP

Aqui você pode especificar um período de tempo ocioso, em segundos, antes de enviar um teste keepalive. If 0 is specified, the value selected by the system will be used.

Observe que essa configuração só funciona quando a opção *Ativar TCP keepalive* está ativada.

### Tempo limite de manutenção de atividade TCP

Aqui você pode especificar o tempo, em segundos, antes de enviar outro teste de manutenção de atividade para um par que não responde. Se 0 for especificado, o valor selecionado pelo sistema será utilizado.

Observe que essa configuração só funciona quando a opção *Ativar TCP keepalive* está ativada.

### Bloquear Java

Alguns sites e serviços da Web ainda oferecem suporte a plug-ins Java. A API que serve de base para os plug-ins Java possui sérias vulnerabilidades de segurança. Para se proteger, você pode desativar estes plug-ins. No entanto, mesmo que você decida usar a opção *Bloquear Java*, o JavaScript ainda estará ativado.

### Tempo limite de servidor DNS

Aqui você pode especificar o tempo em milissegundos que o AdGuard aguardará pela resposta do servidor DNS selecionado antes de recorrer ao fallback. Caso não preencha este campo ou insira um valor inválido, será utilizado o valor de 5000.

### Usar HTTP/3 para DNS-over-HTTPS

Habilita HTTP/3 para upstreams de DNS-over-HTTPS para acelerar a conexão se o upstream selecionado for compatível com esse protocolo. Isso significa que ativar essa opção não garante que todas as solicitações de DNS sejam enviadas via HTTP/3.

### Usar upstreams DNS alternativos

Se ativada, as consultas normais serão redirecionadas para o upstream de fallback se todas as solicitações de DNS para os upstreams selecionados falharem.

### Consultar upstreams de DNS em paralelo

Uma vez ativado, todos os upstreams são consultados em paralelo e a primeira resposta bem-sucedida é retornada. Como as consultas de DNS são feitas em paralelo, habilitar esse recurso aumenta a velocidade da Internet.

### Sempre responder a consultas de DNS com falha

Se a resolução de endereço falhou em cada um dos upstreams encaminhados, bem como nos domínios de fallback, a resposta à solicitação de DNS será `SERVFAIL`.

### Ativar a filtragem de solicitações de DNS seguras

Quando ativado, o AdGuard redireciona as solicitações DNS seguras para o proxy DNS local, além das solicitações DNS simples.

### Modo de bloqueio para regras de hosts

Aqui você pode selecionar a maneira como o AdGuard responderá aos domínios bloqueados por regras de DNS com base na [sintaxe da regra de hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

* Resposta com o erro “Recusado”
* Resposta com o erro “NxDomain”
* Resposta com um endereço IP personalizado

### Modo de bloqueio para regras de estilo adblock

Aqui você pode selecionar a maneira como o AdGuard responderá aos domínios bloqueados pelas regras de DNS com base na [ sintaxe estilo adblock](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

* Resposta com o erro “Recusado”
* Resposta com o erro “NxDomain”
* Resposta com um endereço IP personalizado

### Endereço IPv4 personalizado

Se o endereço IP personalizado for selecionado no modo de bloqueio para regras de hosts ou no modo de bloqueio para regras de estilo adblock, esse endereço IP será retornado em resposta a solicitações A bloqueadas. Se nenhum for especificado, o AdGuard responderá com o erro padrão "Recusado".

### Endereço IPv6 personalizado

Se o endereço IP personalizado for selecionado no modo de bloqueio para regras de hosts ou no modo de bloqueio para regras de estilo adblock, esse endereço IP será retornado em resposta a solicitações AAAA bloqueadas. Se nenhum for especificado, o AdGuard responderá com o erro padrão "Recusado".

### Servidores Fallback

Aqui você pode especificar um servidor DNS alternativo para o qual uma solicitação DNS será reencaminhada se o servidor principal não responder dentro do período de tempo limite especificado na próxima seção. Você pode escolher entre três opções:

* Não usar servidores fallback;
* Usar servidores padrões do sistema;
* Usar servidores personalizados.

### Bloquear ECH

Se ativado, o AdGuard remove os parâmetros Encrypted ClientHello das respostas.

### Lista de servidores alternativos personalizados

Se você deseja que o AdGuard use servidores alternativos personalizados, liste-os nesta seção, um por linha.

### Lista de endereços de inicialização personalizados

Um bootstrap é um servidor DNS intermediário usado para obter o endereço IP do servidor DNS seguro que você escolheu anteriormente em *Proteção DNS*. Esse "intermédio" é necessário ao usar protocolos que denotam o endereço do servidor por letras (como DNS-over-TLS, por exemplo). Nesse caso, o bootstrap atua como um tradutor, transformando as letras em números que seu sistema possa entender.

Por padrão, o resolvedor de DNS do sistema é usado e a solicitação inicial de bootstrap é feita por meio da porta 53. Se isso não for ideal para você, liste aqui os endereços IP dos servidores DNS que serão usados para determinar o endereço do servidor DNS criptografado, de cima para baixo. Os endereços IP especificados serão aplicados na ordem listada. Se você especificar endereços inválidos ou nenhum endereço, os IPs do sistema serão usados.

### Exclusões de DNS

Todas as solicitações de DNS para domínios listados aqui serão redirecionadas para o servidor DNS padrão do sistema em vez do servidor DNS especificado nas configurações do aplicativo. Além disso, as regras de bloqueio de DNS não serão aplicadas a estas solicitações.

### Excluir nomes de redes Wi-Fi especificados (SSIDs) da filtragem de DNS

A proteção de DNS não funcionará para as redes Wi-Fi listadas nesta seção. Especifique os nomes das redes Wi-Fi (SSIDs), um por linha. Isso pode ser útil se uma rede Wi-Fi específica já estiver protegida pelo AdGuard Home ou outro sistema de proteção DNS. Nesse caso, não há motivo para filtrar as solicitações de DNS novamente.
