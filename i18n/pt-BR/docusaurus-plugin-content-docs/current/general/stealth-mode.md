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

Referer é um cabeçalho HTTP usado em solicitações de navegador para servidor. Ele contém o URL da origem da solicitação. Ao navegar de uma página para outra, o Referer salva a URL da página inicial. O servidor que hospeda a página da web de destino geralmente possui um software que analisa o Referer e extrai várias informações dele. Ativar a configuração *Ocultar Referer de terceiros* oculta o site atual de sites de terceiros, alterando o cabeçalho HTTP.

Você também pode definir um valor arbitrário para o Referer inserindo-o no campo *Referer personalizado*. Para usar o Referer padrão, deixe o campo em branco.

Observe que, para poder filtrar o tráfego, os aplicativos AdGuard "interceptam" as solicitações do navegador para o servidor. As solicitações para servidores de anúncios, rastreamento e phishing podem ser alteradas antes de serem enviadas ao servidor ou bloqueadas completamente. O mesmo vale para a opção *Ocultar referenciador de terceiros*: o AdGuard intercepta solicitações HTTP(S), em particular para remover ou alterar o cabeçalho do referenciador se esta opção estiver habilitada. No entanto, isso só acontece depois que essas solicitações "saem" do navegador. Isso significa que, se você monitorar o Referer dentro do navegador (por exemplo, com a ajuda das Ferramentas de Desenvolvedor do Chrome), você verá o Referer original porque a solicitação ainda não chegou ao AdGuard. Você pode usar software como [Fiddler](https://www.telerik.com/fiddler) para garantir que o Referer seja alterado corretamente.

Devido à natureza de todas as extensões de navegador, a Extensão do AdGuard para navegador funciona "dentro" do navegador. Ela alterará o Referer ali mesmo, então as Ferramentas do Desenvolvedor mostrarão o Referer desejado para suas solicitações.

### Ocultar User-Agent {#useragent}

Este recurso remove informações de identificação do cabeçalho User-Agent.

Quando você visita um site, seu navegador envia suas informações para o servidor. Sua aparência é uma linha de texto que faz parte de uma solicitação HTTP que começa com "User-Agent:”. Geralmente, inclui o nome e a versão do navegador, o sistema operacional e as configurações de idioma. Impedimos que o User-Agent identifique informações para que os anunciantes não possam obtê-las.

Você também pode definir um valor arbitrário para o User-Agent inserindo-o no campo User-Agent Personalizado. Para usar o User-Agent padrão, deixe o campo em branco.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

### Mascarar endereço IP {#ip}

Este recurso faz com que os sites acreditem que você é um proxy com o endereço de IP que você especificar.

A Proteção contra rastreamento não pode ocultar seu endereço de IP. No entanto, podemos ocultá-lo para que os sites que você visita pensem que você é um proxy. Às vezes isso ajuda e os sites ignoram seu verdadeiro endereço IP.

Você pode definir um endereço IP arbitrário, que gostaria que outras pessoas considerassem seu, simplesmente inserindo-o no campo correspondente. Para usar o endereço IP padrão, deixe o campo em branco.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

### Remover cabeçalho X-Client-Data {#xclientdata}

Este recurso impede que o Google Chrome envie informações sobre sua versão e modificações para domínios do Google (incluindo DoubleClick e Google Analytics).

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows, AdGuard para macOS e Extensão de navegador AdGuard (para navegadores baseados em Chromium).

:::

### Proteger contra DPI {#dpi}

Este recurso modifica o seu tráfego de saída para que os sistemas de Inspeção profunda de pacotes do seu ISP não consigam detectar os sites que você visita. Não é possível garantir proteção completa contra todos os sistemas de Inspeção profunda de pacotes (DPI).

O Deep Packet Inspection é um sistema de análise profunda e filtragem de tráfego por conteúdo de pacotes, bem como de acúmulo de dados estatísticos. Usando esta tecnologia, os ISPs têm a capacidade de controlar o tráfego que passa por eles e limitar o acesso ao conteúdo para seus clientes.

O AdGuard pode modificar os dados do pacote de saída para que o cliente não se enquadre nos critérios de bloqueio de DPI. Isso significa que, ao habilitar esta opção, os usuários podem ter acesso ao conteúdo que desejam. Nem todos os sistemas DPI podem ser ignorados neste momento, mas estamos trabalhando constantemente para melhorar isso.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Disponível no AdGuard para Android, AdGuard para Windows e AdGuard para macOS.

:::

:::caution

Se esse recurso estiver ativado no AdGuard para Windows, ele pode interferir com o antivírus ESET. A Anti-DPI impedirá que a ESET faça a filtragem de tráfego, deixando desbloqueados os sites da lista negra e maliciosos.

:::
