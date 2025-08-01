---
title: Proteção contra rastreamento (anteriormente Modo oculto)
sidebar_position: 4
---

Muitos sites coletam informações sobre seus visitantes, como endereço IP, navegador instalado e sistema operacional, resolução de tela e até mesmo a página da qual o visitante foi redirecionado. Algumas páginas web utilizam cookies para marcar o seu navegador e guardar as suas configurações e preferências, ou para “reconhecê-lo” na sua próxima visita. A **Proteção contra rastreamento** protege suas informações pessoais desses sistemas de coleta de dados e estatísticas.

Você pode ajustar as configurações de proteção contra rastreamento conforme necessário. Por exemplo, você pode impedir que sites recebam consultas de mecanismos de busca que o levaram até eles. Você pode excluir automaticamente cookies primários e de terceiros. Você também pode desativar o compartilhamento de geolocalização do navegador, que pode ser usado para rastrear sua localização. Você pode ocultar seu verdadeiro endereço de IP ou substituí-lo por um arbitrário.

Abaixo, listaremos e descreveremos os principais recursos que você pode controlar nas configurações de **Proteção contra rastreamento**. Os recursos são divididos em quatro grupos: **Geral**, **Métodos de rastreamento**, **API do navegador** e **Diversos**.

:::note

Alguns recursos estão disponíveis apenas para determinados produtos devido a limitações do sistema operacional ou do navegador.

:::

## Geral {#general}

### Bloquear rastreadores {#blocktrackers}

Este recurso bloqueia rastreadores e análise da web usando o Filtro de proteção contra rastreamento do AdGuard.

### Remover parâmetros de rastreamento das URLs {#removetracking}

Se você ativar este recurso, o AdGuard usará seu filtro contra rastreamento de URL para remover parâmetros de rastreamento como `utm_*` e `fb_ref` dos URLs das páginas.

### Ocultar consultas de pesquisa {#searchqueries}

Esse recurso oculta suas consultas de pesquisa dos sites que você visita por meio dos resultados do mecanismo de pesquisa. Por exemplo, quando você abre um site por meio de um mecanismo de busca como o Google ou o Yahoo, este recurso oculta a inquirição de busca que você usou para encontrar esse site.

### Pedir aos sites que não me rastreiem {#donottrack}

Envia os sinais [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita.

### Outros filtros de privacidade {#otherprivacyfilters}

Esse recurso exibe outros filtros de privacidade ativados em **Filtros**.

:::note

Disponível no AdGuard para Android e AdGuard para Windows.

:::

## Métodos de rastreamento {#tracking-methods}

### Excluir cookies de terceiros {#3p-cookie}

Este recurso impede que os anunciantes rastreiem seu comportamento em várias páginas, limitando a vida útil dos cookies de terceiros.

Os sites usam cookies para armazenar suas informações e preferências, como o idioma selecionado, sua localização ou a lista de itens em seu carrinho de compras. Quando você retorna a um site, seu navegador Enviar ao site os Cookie pertencentes ao site, permitindo que ele “lembre” seus data.

Cookies de terceiros são implementados por um site diferente daquele que você está navegando atualmente. Por exemplo, cnn.com pode ter um widget “Curtir” do Facebook em sua página inicial. Este widget instala um cookie que o Facebook pode ler posteriormente. Alguns anunciantes usam esses cookies para rastrear quais outros sites você visita que possuem seus anúncios.

Defina um período de tempo (em minutos) após o qual todos os cookies de terceiros serão excluídos. Para bloquear esses cookies, defina o tempo de vida deles como 0.

:::caution

Esta configuração exclui todos os cookies de terceiros, incluindo as informações de seus logins através de redes sociais ou outros serviços de terceiros. Talvez você precise fazer login novamente em alguns sites periodicamente e enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o [*Filtro de proteção contra rastreamento do AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Disponível no AdGuard para Android, AdGuard para Windows, AdGuard para macOS e Extensão do AdGuard para navegador (para navegadores baseados em MV2).

:::

### Excluir cookies primários (não recomendado) {#1p-cookie}

Este recurso impede que sites se lembrem dos seus dados, como suas credenciais de login e preferências de idioma, limitando o tempo de vida do cookie primário.

Defina um período de tempo (em minutos) após o qual todos os cookies serão excluídos. Para bloquear esses cookies, defina o tempo de vida deles como 0.

:::caution

Não recomendamos ativar esta opção, pois pode interferir gravemente no funcionamento de determinados sites. Se você bloquear esses cookies, alguns sites podem apresentar falhas ou parar de funcionar.

:::

:::note

Disponível no AdGuard para Android, AdGuard para Windows, AdGuard para macOS e Extensão do AdGuard para navegador (para navegadores baseados em MV2).

:::

### Bloquear cabeçalhos ETag e If-None-Match {#3p-cache}

Este recurso remove os cabeçalhos ETag e If-None-Match das solicitações e respostas para impedir o rastreamento através deles.

Quando um navegador acessa uma página, o servidor atribui uma ETag a essa página. Esta ETag é usada pelo navegador para armazenar em cache o conteúdo da página. Nas solicitações subsequentes, o navegador envia a ETag ao servidor correspondente, permitindo assim que o servidor conheça a identidade do visitante. Enquanto os arquivos do site estiverem armazenados em cache, a ETag será enviada sempre que seu navegador acessar este site. Se o site tiver conteúdo incorporado de outro servidor (como uma imagem ou iframe), esse servidor poderá rastrear suas atividades sem o seu conhecimento.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

### Bloquear cabeçalho de autorização de terceiros {#3p-auth}

Este recurso desativa dados de autorização armazenados em cache que podem ser usados para rastreamento. Pode interferir na funcionalidade de algumas extensões de navegador e sites.

O valor do cabeçalho “Autorização” é armazenado em cache pelo navegador e enviado junto com cada solicitação para esse domínio. Isso significa que pode ser usado para fins de rastreamento, assim como cookies.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

## API do navegador {#browser-api}

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Apenas o recurso **Bloquear WebRTC** está disponível para a Extensão de navegador AdGuard. Você pode encontrá-lo na seção **Diversos**.

:::

### Bloquear WebRTC {#webrtc}

Este recurso bloqueia o WebRTC, que pode vazar seu endereço de IP real mesmo se você usar um proxy ou VPN.

WebRTC (Web Real-Time Communication) é uma tecnologia que permite o streaming direto de data entre navegadores e aplicativos. No entanto, ele pode permitir que outras pessoas saibam seu verdadeiro endereço de IP, mesmo ao usar um proxy ou VPN.

:::caution

Ativar esta opção pode atrapalhar o funcionamento de determinados aplicativos do navegador, como mensageiros, plataformas de streaming, bate-papos ou jogos.

:::

### Bloquear a API Push {#push}

Este recurso bloqueia notificações push de sites.

A API Push permite que os servidores enviem mensagens para aplicativos da web, independentemente do status da atividade do seu navegador. Isso significa que você pode ver notificações de vários sites mesmo quando seu navegador está minimizado ou fechado. Habilite esta opção para bloquear completamente a API Push do navegador.

### Bloquear API de localização {#location}

Este recurso impede que sites detectem sua localização.

Ativar esta opção impedirá que o navegador envie dados de GPS que possam ser usados para determinar sua localização, modificar seus resultados de pesquisa ou influenciar de outra forma sua experiência na web.

### Bloquear Flash {#flash}

Este recurso aumenta a proteção e acelera o carregamento do site bloqueando o suporte do Flash Player nos navegadores.

O plugin Flash Player tornou-se cada vez mais vulnerável a ameaças online como vírus e hackers; também pode aumentar significativamente o tempo de carregamento do site. Ativar essa configuração faz com que o AdGuard bloqueie a capacidade dos navegadores de detectar componentes (como plug-ins e objetos ActiveXObject) que permitem que o Flash exiba conteúdo. Na prática, isso implica que os navegadores não suportem Flash.

### Bloquear Java {#java}

Este recurso desabilita plugins Java em sites e serviços web porque a API tem sérios problemas de segurança. Não desabilita o JavaScript.

Alguns sites e serviços web ainda usam a tecnologia antiga para oferecer suporte a plug-ins Java. A API do plugin Java, que é a base dos plugins de Java, apresenta sérias falhas de segurança. Por motivos de segurança, você pode desativar esses plug-ins. No entanto, mesmo que você decida usar a opção “Bloquear Java”, o JavaScript ainda estará habilitado.

## Rastreamento do Windows {#windowstracking}

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Esses recursos estão disponíveis apenas no AdGuard para Windows.

:::

### Desativar telemetria do Windows {#windowstelemetry}

Este recurso desativa o envio de data técnica sobre o seu sistema e o uso do aplicativo.

### Desativar Windows Recall {#windowsrecall}

Este recurso impede que o Windows faça e analise capturas de tela de sua atividade na área de trabalho.

### Desativar o ID de publicidade {#advertisingid}

Este recurso desativa o ID de publicidade para bloquear o rastreamento do uso do seu aplicativo.

### Desativar relatórios automáticos pelo Microsoft Defender {#windowsautoreport}

Este recurso bloqueia relatórios automáticos e amostragem de malware suspeito.

### Desativar serviço de roteamento de mensagens WAP Push {#wappushrouting}

Este recurso desativa a coleta de dados sobre problemas de componentes do Windows.

## Diversos {#miscellaneous}

### Ocultar Referrer de terceiros {#referer}

Este recurso evita que terceiros saibam quais sites você visita.

Referer é um cabeçalho HTTP usado em solicitações de navegador para servidor. It contains the URL of the request source. When you navigate from one page to another, Referer saves the URL of the initial page. The server that hosts the destination web page often has software that parses Referer and extracts various pieces of information from it. Enabling the *Hide Referer from third parties* setting hides the current website from third-party websites by altering the HTTP header.

You can also set an arbitrary value for Referer by entering it into the *Custom Referer* field. To use default Referer, leave the field blank.

Note that to be able to filter traffic, AdGuard applications 'intercept' browser-to-server requests. Requests to ad, tracking, and phishing servers may be altered before sending them to the server or blocked completely. Same goes for the *Hide Referer from third parties* option: AdGuard intercepts HTTP(S) requests, in particular to remove or change the Referer header if this option is enabled. However, it happens only after these requests “leave” the browser. This means that if you monitor Referer inside the browser (for example, with the help of Chrome's Developer Tools), you will see the original Referer because the request hasn't reached AdGuard yet. You can use software like [Fiddler](https://www.telerik.com/fiddler) to make sure that Referer gets altered correctly.

Due to the nature of all web browser extensions, AdGuard Browser Extension instead works 'inside' the web browser. It will alter the Referer right then and there, so Developer Tools will show the desired Referer for your requests.

### Hide User-Agent {#useragent}

This feature removes identifying information from the User-Agent header.

When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with “User-Agent:”. It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.

You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

### Mask IP address {#ip}

This feature tricks websites into believing you are a proxy with the IP address you specify.

Tracking protection cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address.

You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

### Remove X-Client-Data header {#xclientdata}

This feature blocks Google Chrome from sending its version and modifications information to Google domains (including Double Click and Google Analytics).

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Available in AdGuard for Android, AdGuard for Windows, AdGuard for Mac, and AdGuard Browser Extension (Chromium-based browsers).

:::

### Protect against DPI {#dpi}

This feature modifies your outgoing traffic so that your ISP’s Deep Packet Inspection systems can’t detect the websites you visit. Can’t guarantee complete protection against all DPI systems.

The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients.

AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

:::caution

Se esse recurso estiver ativado no AdGuard para Windows, ele pode interferir com o antivírus ESET. A Anti-DPI impedirá que a ESET faça a filtragem de tráfego, deixando desbloqueados os sites da lista negra e maliciosos.

:::
