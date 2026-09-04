---
title: Guia de configurações avançadas (de baixo nível)
sidebar_position: 7
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

As Configurações Avançadas, antes conhecidas como configurações de baixo nível, geralmente contêm opções que vão além dos conhecimentos do usuário médio e não são aplicadas no uso diário. O AdGuard para Windows foi pensado para que você consiga utilizá-lo sem alterá-las, mas elas fornecem recursos adicionais em alguns casos mais extremos ou para resolver algum problema incomum.

:::caution

Mindlessly changing _Advanced Settings_ can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. Você só deve fazer alterações nessas configurações se souber o que está fazendo ou se nossa equipe de suporte solicitar alguma ação.

:::

## Como acessar as configurações avançadas

To go to _Advanced settings_, in the main windows click _Settings → General Settings_ and scroll down to _Advanced Settings_. Alternatively, select _Advanced → Advanced settings..._ in the tray menu.

## Configurações avançadas

Depois de abrir as Configurações avançadas, você verá as seguintes opções:

### Bloquear TCP Fast Open

Se ativado, o AdGuard bloqueará o TCP Fast Open no navegador Edge. Para aplicar as configurações, você precisa reiniciar o navegador.

### Usar Encrypted Client Hello

Cada conexão de Internet criptografada tem uma parte não criptografada. Estamos falando do primeiro pacote, que contém o nome do servidor ao qual você está se conectando. A tecnologia Encrypted ClientHello deve resolver esse problema e criptografar esta última parte de informação não criptografada. To benefit from it, enable the _Use Encrypted Client Hello_ option. Ela utiliza um proxy DNS local para procurar a configuração ECH para o domínio. Se for encontrado, o pacote Client Hello será criptografado.

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

Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. `abp:subscribe` and alike) and to open a custom filter installation dialog.

### Filtrar HTTP/3

Se esta opção estiver ativada, o AdGuard filtrará as solicitações enviadas por HTTP/3, além de outros tipos de solicitação.

**Limitações**:

- Os navegadores baseados em Chrome não aceitam certificados de usuário, portanto, a filtragem HTTP/3 não é compatível com eles.
- Os navegadores baseados no Firefox se comportam de maneira semelhante por padrão, mas você pode definir a opção `network.http.http3.disable_when_third_party_roots_found` como `false` em `about:config` para permitir certificados de usuário para HTTP/3.
- O Safari suporta filtragem HTTP/3 sem configuração adicional.

### Usar modo de redirecionamento de driver

Se esta opção estiver ativada, o AdGuard intercepta todo o tráfego e o redireciona para o servidor proxy local para posterior filtragem.

Caso contrário, o AdGuard filtrará todo o tráfego em tempo real, sem redirecionamento. Nesse caso, o sistema considerará o AdGuard como o único aplicativo que se conecta à Internet (os outros aplicativos são roteados por ele). A desvantagem é que isso tornará o firewall do sistema menos eficaz. A vantagem é que essa abordagem funciona um pouco mais rápido.

### Abrir a janela principal na inicialização do sistema

Ative esta opção para abrir a janela principal do AdGuard depois que o sistema for carregado. This setting, which doesn't affect whether the actual filtering service is launched or not, is located in _Settings → General Settings_.

### Ativar filtragem na inicialização do sistema

A partir da v7.12, por padrão, o serviço do AdGuard não filtra o tráfego após a inicialização do sistema operacional se a opção Iniciar o AdGuard na inicialização do sistema estiver desativada. Em outras palavras, o serviço do AdGuard é iniciado no modo “ocioso”. Ative esta opção para filtrar o tráfego do AdGuard mesmo que o aplicativo não seja iniciado.

:::note

Before v7.12, the AdGuard service started in filtering mode by default (even if the _Launch AdGuard at system start-up_ was disabled). Se você estava satisfeito com o funcionamento antigo, ative esta opção.

:::

### Filtrar localhost

Se você deseja que o AdGuard filtre as conexões de loopback, marque a caixa. Esta opção estará sempre ativada se você tiver o AdGuard VPN instalado, caso contrário, ele não funcionará.

### Excluir da filtragem intervalos de IP especificados

If you don't want AdGuard to filter particular subnets, enable this feature and specify the IP ranges in the CIDR notation (e.g. 98.51.100.14/24) in the **IP ranges excluded from filtering** section below.

### Habilitar escrita HAR

This option should be enabled **only for debugging purposes**. Marcar a caixa de verificação fará com que o AdGuard crie um arquivo no formato HAR 1.2 contendo informações sobre todas as solicitações HTTP filtradas. Este arquivo pode ser analisado com o aplicativo Fiddler. Observe que isso pode tornar sua navegação na web significativamente mais lenta.

### Adicionar um espaço extra à solicitação HTTP simples

Adiciona espaço extra entre o método HTTP e o URL e remove o espaço após o campo "Host:" para evitar a inspeção profunda do pacote. Por exemplo, a solicitação

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Ajustar o tamanho da fragmentação do pacote TLS inicial

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Se for especificado um tamanho inválido, o valor selecionado pelo sistema será utilizado. This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Tamanho do fragmento de solicitação HTTP simples

Ajusta o tamanho da fragmentação da solicitação HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valid values: 1–1500. Se for especificado um tamanho inválido, o valor selecionado pelo sistema será utilizado. This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Exibir QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Ativar TCP Keepalive

Valores válidos: 1–1500. Se for especificado um tamanho inválido, o valor selecionado pelo sistema será utilizado.

### Intervalo de manutenção do TCP

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the _Enable TCP keepalive_ option is enabled.

:::

### Tempo limite de manutenção de atividade TCP

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the _Enable TCP keepalive_ option is enabled.

:::

### Bloquear Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use _Block Java_ option, JavaScript will still be enabled.

### Tempo limite de servidor DNS

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Usar HTTP/3 para DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Usar upstreams DNS alternativos

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Consultar upstreams de DNS em paralelo

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Sempre responder a consultas de DNS com falha

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Ativar a filtragem de solicitações de DNS seguras

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Modo de bloqueio para regras de hosts

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Resposta com o erro “Recusado”
- Resposta com o erro “NxDomain”
- Resposta com um endereço IP personalizado

### Modo de bloqueio para regras de estilo adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Resposta com o erro “Recusado”
- Resposta com o erro “NxDomain”
- Resposta com um endereço IP personalizado

### Endereço IPv4 personalizado

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Endereço IPv6 personalizado

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Servidores Fallback

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Não usar servidores fallback;
- Usar servidores padrões do sistema;
- Usar servidores personalizados.

### Bloquear ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Lista de servidores alternativos personalizados

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Lista de endereços de inicialização personalizados

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in _DNS protection_. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### Exclusões de DNS

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Excluir nomes de redes Wi-Fi especificados (SSIDs) da filtragem de DNS

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
