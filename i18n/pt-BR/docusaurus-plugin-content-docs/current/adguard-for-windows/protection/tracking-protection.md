---
title: Tracking protection
sidebar_position: 2
---

Muitos sites coletam dados sobre seus visitantes, incluindo endereços de IP, informações do navegador e do sistema operacional, resolução de tela e até mesmo a página de onde você veio. Cookies podem ser usados para identificar seu navegador, lembrar suas preferências ou reconhecê-lo quando você retornar. A Proteção contra rastreamento impede que tais sistemas coletem seus dados pessoais. Saiba mais em nosso [artigo sobre Proteção contra rastreamento no AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Se você não quiser perder tempo ajustando os filtros manualmente, pode simplesmente escolher um dos níveis de proteção prontos:

- _Padrão_: ativado por padrão e oferece proteção confiável para a navegação diária.
- _Alta_: remove parâmetros de rastreamento de URLs de páginas e bloqueia cookies de terceiros. Pode ser que você precise fazer login novamente em alguns sites ou enfrente outros problemas relacionados a cookies.
- _Extremo_: limita o tempo de vida dos cookies de terceiros e bloqueia certas APIs do navegador. Alguns sites podem não funcionar corretamente.

Para máxima flexibilidade, selecione _Personalizado_ e ajuste tudo manualmente. As configurações lá são divididas em cinco categorias:

- [Configurações gerais](#general-settings)

- [Métodos de rastreamento](#tracking-methods)

- [Browser API](#browser-api)

- [Rastreamento do Windows](#windows-tracking)

- [Diversos](#miscellaneous)

## Configurações gerais

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Bloquear rastreadores

Bloqueia rastreadores e análises da Web usando o filtro _AdGuard Tracking Protection_.

### Remover parâmetros de rastreamento das URLs

Remove parâmetros de rastreamento como `utm_*` e `fb_ref` dos URLs das páginas usando o filtro _AdGuard URL Tracking_.

### Ocultar consultas de pesquisa

Oculta consultas de sites visitados a partir de um mecanismo de pesquisa. Quando você é direcionado para um site do Google, Yahoo ou qualquer outro mecanismo de busca, esta opção oculta a consulta de pesquisa usada para encontrar esse site.

### Pedir aos sites que não me rastreiem

Envia os sinais [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita.

### Outros filtros de privacidade

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Métodos de rastreamento

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Excluir cookies de terceiros

Os sites usam cookies para armazenar suas preferências — por exemplo, o idioma que você escolheu, sua localização ou os itens no seu carrinho de compras. Ao retornar, o navegador envia esses cookies de volta para que o site possa reconhecê-lo.

Cookies de terceiros funcionam da mesma maneira, mas são criados por domínios diferentes daquele que você está visitando. Por exemplo, o site cnn.com pode incluir um widget "Curtir" do Facebook que define um cookie que é lido posteriormente pelo Facebook. Os anunciantes costumam usar esses cookies para rastrear quais outros sites você visita.

Com esta opção, você pode definir um limite de tempo (em minutos) após o qual todos os cookies de terceiros serão excluídos. Se você definir o temporizador para 0, esses cookies serão bloqueados completamente.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Lembre-se de que esta configuração remove todos os cookies de terceiros, incluindo aqueles usados para logins via redes sociais ou outros serviços externos. Isso significa que você poderá precisar fazer login novamente de tempos em tempos ou lidar com outros problemas relacionados a cookies. Se você deseja bloquear apenas cookies de rastreamento, use o [_Filtro de proteção contra rastreamento do AdGuard_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Excluir cookies primários (não recomendado)

Esta opção apaga os cookies definidos pelo site que você está visitando após um período de tempo selecionado (em minutos). Quando o cronômetro zerar, todos esses cookies serão removidos. Defina o cronômetro para 0 para bloqueá-los completamente.

:::caution

Não recomendamos ativar esta opção, pois pode interferir gravemente no funcionamento de determinados sites.

:::

### Bloquear cabeçalhos ETag e If-None-Match

Remove os cabeçalhos ETag e If-None-Match das solicitações e respostas para evitar que os sites os utilizem para rastreamento.

Quando um navegador acessa uma página, o servidor atribui a ela um ETag — um identificador exclusivo usado para cachear o conteúdo da página. Em visitas subsequentes, o navegador envia o mesmo ETag de volta ao servidor. Isso permite que o servidor reconheça o visitante. Enquanto os arquivos em cache permanecerem, o ETag será transmitido a cada solicitação. Se a página também contiver elementos incorporados de outros servidores, como imagens ou iframes, esses servidores poderão usar ETags para rastrear sua atividade sem o seu conhecimento.

### Bloquear cabeçalho de autorização de terceiros

Desativa dados de autorização armazenados em cache que podem ser usados para fins de rastreamento. Pode interferir na funcionalidade de algumas extensões de navegador e sites.

O valor do cabeçalho de Autorização é armazenado em cache pelo navegador e enviado automaticamente com cada solicitação para o mesmo domínio. Como acompanha cada solicitação, pode ser usado para identificá-lo e rastreá-lo de forma semelhante ao que os Cookies fazem.

## API do navegador

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) é uma tecnologia que permite o streaming direto de dados entre navegadores e aplicativos. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Bloquear a API Push

A API Push permite que os servidores enviem mensagens para aplicativos da Web, independentemente do status da atividade do seu navegador. É por isso que você pode receber notificações de sites mesmo que seu navegador esteja oculto na bandeja ou não tenha sido iniciado. Ativar essa opção bloqueia completamente a API Push.

### Bloquear API de localização

Quando essa opção estiver ativada, o navegador deixará de enviar dados de GPS para sites. Isso os impede de determinar sua localização, alterar os resultados da pesquisa ou personalizar o conteúdo com base em onde você está.

## Rastreamento do Windows

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Desativar telemetria do Windows

Desativa o envio de dados técnicos sobre o uso do seu sistema e do aplicativo.

### Desativar Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Desativar o ID de publicidade

Desativa o ID de publicidade para bloquear o rastreamento do uso do seu aplicativo.

### Desativar relatórios automáticos pelo Microsoft Defender

Bloqueia relatórios automáticos e amostragem de malware suspeito.

### Desativar serviço de roteamento de mensagens WAP Push

Disables data collection about Windows component problems.

## Diversos

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Ocultar Referrer de terceiros

Referer é um cabeçalho HTTP incluído em solicitações de navegador para servidor. Ele contém o URL da origem da solicitação. Ao navegar de uma página para outra, o Referer salva a URL da página inicial. O servidor que hospeda a página da web de destino geralmente possui um software que analisa o Referer e extrai várias informações dele.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

Você também pode inserir um valor personalizado no campo _Referenciador Personalizado_. Para usar o Referer padrão, deixe o campo em branco.

Note que, para poder filtrar o tráfego, os aplicativos do AdGuard interceptam as solicitações do navegador para o servidor. As solicitações para servidores de anúncios, rastreamento e phishing podem ser alteradas antes de serem enviadas ao servidor ou bloqueadas completamente.

O mesmo se aplica à opção _Ocultar o referenciador de terceiros_: para filtrar o tráfego, o AdGuard intercepta as solicitações HTTP(S) e pode alterá-las ou bloqueá-las antes que cheguem ao servidor. A alteração ocorre somente depois que a solicitação sai do seu navegador. Por esse motivo, se você verificar os headers dentro do navegador (por exemplo, com as Ferramentas de Desenvolvedor do Chrome), você ainda verá o Referer original. Para confirmar que foi modificado, você pode usar ferramentas externas, como o Fiddler.

### Ocultar User-Agent

Quando você visita um site, seu navegador envia um cabeçalho chamado User-Agent como parte da solicitação HTTP. Parece ser uma linha de texto que começa com “User-Agent:”. Esta linha geralmente contém detalhes como o nome e a versão do navegador, o sistema operacional e as configurações de idioma.

Ao ativar esta opção, o AdGuard remove informações de identificação do User-Agent para que anunciantes e rastreadores não possam usá-la para criar seu perfil. Se preferir, você pode inserir um valor personalizado no campo _User-Agent Personalizado_. Para manter o valor padrão, basta deixar o campo em branco.

### Mascarar endereço IP

O AdGuard não pode ocultar completamente o seu endereço de IP real, mas pode substituí-lo por outro diferente para que os sites interpretem sua conexão como se estivesse passando por um proxy. Em alguns casos, isso ajuda a ocultar seu verdadeiro endereço IP.

Você pode inserir qualquer endereço de IP que deseja usar no campo correspondente. Para usar o endereço IP padrão, deixe o campo em branco.

### Remover cabeçalho X-Client-Data

Impede que o Google Chrome envie informações sobre sua versão e modificações nas solicitações para os domínios do Google, incluindo serviços como DoubleClick e Google Analytics.

### Proteger contra DPI

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
