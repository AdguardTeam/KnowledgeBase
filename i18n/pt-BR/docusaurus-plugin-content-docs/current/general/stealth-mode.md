---
title: Modo invisível
sidebar_position: 4
---

Muitos sites coletam informações sobre seus visitantes, como endereço IP, navegador instalado e sistema operacional, resolução de tela e até mesmo a página da qual o visitante foi redirecionado. Algumas páginas web utilizam cookies para marcar o seu navegador e guardar as suas configurações e preferências pessoais, ou para “reconhecê-lo” na sua próxima visita. O Modo Sigiloso protege suas informações pessoais desses sistemas de coleta de dados e estatísticas.

Você pode ajustar de forma flexível o funcionamento do Modo Sigiloso: por exemplo, você pode proibir o site de receber a solicitação de pesquisa que você usou para encontrá-lo na Internet, excluir automaticamente os cookies de terceiros e do próprio site, desativar o compartilhamento de geolocalização do navegador que pode ser usado para rastrear seu paradeiro e ocultar seu verdadeiro endereço IP ou até mesmo substituí-lo por um aleatório.

Abaixo, listaremos e descreveremos os principais recursos e opções que você pode controlar nas configurações do **Modo Sigiloso**. Eles são divididos em quatro grupos: **Geral**, **Métodos de rastreamento**, **API do navegador** e **Diversos**.

:::note

Algumas opções podem não estar disponíveis dependendo do produto específico devido ao sistema operacional ou outras limitações.

:::

## Geral {#general}

### Ocultar suas consultas de pesquisa {#searchqueries}

Quando você é direcionado para um site do Google, Yahoo ou qualquer outro mecanismo de busca, esta opção oculta a consulta de pesquisa usada para encontrar esse site.

### Pedir aos sites que não te rastreiem {#donottrack}

Envia os sinais [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita.

### Retirar parâmetros de rastreamento de URLs

Se você ativar esta opção, o AdGuard removerá parâmetros de rastreamento como `utm_*` e `fb_ref` dos URLs das páginas.

### Métodos de rastreamento {#tracking-methods}

### Autodestruição de cookies de terceiros {#3p-cookie}

Os sites usam cookies para armazenar suas informações e preferências, como o idioma selecionado, sua localização ou a lista de itens em seu carrinho de compras. Quando você retorna a um site, seu navegador envia de volta os cookies pertencentes a esse site, o que permite “lembrar” seus dados.

Cookies de terceiros são aqueles implementados por um site diferente daquele que você está navegando atualmente. Por exemplo, cnn.com pode ter um widget “Curtir” do Facebook em sua página inicial. Este widget implementará um cookie que poderá ser lido posteriormente pelo Facebook. Alguns anunciantes usam esses cookies para rastrear outros sites que você visita e onde seus anúncios são mostrados.

Defina um período de tempo (em minutos) ao final do qual todos os cookies de terceiros serão destruídos. Defina o cronômetro para 0 para bloqueá-los completamente.

:::cuidado

Esta configuração exclui todos os cookies de terceiros, incluindo as informações de seus logins através de redes sociais ou outros serviços de terceiros. Talvez você precise fazer login novamente em alguns sites periodicamente e enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o [*Filtro de proteção contra rastreamento do AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Autodestruição de cookies primários {#1p-cookie}

Defina um período de tempo (em minutos) ao final do qual todos os cookies serão destruídos. Defina o cronômetro para 0 para bloqueá-los completamente.

:::cuidado

Não recomendamos ativar esta opção, pois pode interferir gravemente no funcionamento de determinados sites.

:::

### Desativar cache para solicitações de terceiros {#3p-cache}

Quando um navegador acessa uma página, o servidor atribui uma ETag a essa página. Esta ETag é usada pelo navegador para armazenar em cache o conteúdo da página. Nas solicitações subsequentes, o navegador envia a ETag ao servidor correspondente, permitindo assim que o servidor conheça a identidade do visitante. Enquanto os arquivos do site estiverem armazenados em cache, a ETag será enviada sempre que seu navegador acessar este site. Se o site tiver conteúdo incorporado de outro servidor (como uma imagem ou iframe), esse servidor poderá rastrear suas atividades sem o seu conhecimento.

### Bloquear cabeçalho para autorização de terceiros {#3p-auth}

O valor do cabeçalho "Authorization" é armazenado em cache pelo navegador e, em seguida, é enviado junto com cada solicitação para esse domínio. Isso significa que ele pode ser usado para fins de rastreamento, assim como os cookies.

## API do navegador {#browser-api}

### Bloquear WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) é uma tecnologia que permite streaming direto de dados entre navegadores e aplicativos. Ele pode permitir que outras pessoas saibam seu verdadeiro endereço IP, mesmo se você usar um proxy ou VPN. Ativar esta opção pode atrapalhar o funcionamento de determinados aplicativos do navegador, como mensageiros, bate-papos, cinemas ou jogos.

### Bloquear a API Push {#push}

A API Push permite que os servidores enviem mensagens para aplicativos da web, independentemente do status da atividade do seu navegador. Assim, você poderá ver notificações de vários sites, mesmo que seu navegador esteja oculto na bandeja ou não iniciado. Ative essa opção para bloquear completamente a API Push do navegador.

### Bloquear API de localização {#location}

Ativar esta opção impedirá que o navegador envie dados de GPS que possam ser usados para determinar sua localização, modificar seus resultados de pesquisa ou influenciar de outra forma sua experiência na web.

### Bloquear Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. Ativar essa configuração faz com que o AdGuard bloqueie a capacidade dos navegadores de detectar componentes (como plug-ins e objetos ActiveXObject) que permitem que o Flash exiba conteúdo. Na prática, isso implica que os navegadores não suportem Flash.

### Bloquear Java {#java}

Alguns sites e serviços web ainda usam a tecnologia antiga para oferecer suporte a plug-ins Java. A API do plugin Java, que é a base dos plugins de Java, apresenta sérias falhas de segurança. Por motivos de segurança, você pode desativar esses plug-ins. No entanto, mesmo que você decida usar a opção “Bloquear Java”, o JavaScript ainda estará habilitado.

## Diversos {#miscellaneous}

### Ocultar Referrer de terceiros {#referer}

Referer é um cabeçalho HTTP usado em solicitações de navegador para servidor. Ele contém o URL da origem da solicitação. Ao navegar de uma página para outra, o Referer salva a URL da página inicial. O servidor que hospeda a página da web de destino geralmente possui um software que analisa o Referer e extrai várias informações dele. Ativar a opção *Ocultar referenciador de terceiros* oculta o site atual de sites de terceiros, alterando o cabeçalho HTTP.

Você também pode definir um valor arbitrário para o Referer inserindo-o no campo *Referer personalizado*. Para usar o Referer padrão, deixe o campo em branco.

Observe que, para poder filtrar o tráfego, os aplicativos AdGuard "interceptam" as solicitações do navegador para o servidor. As solicitações para servidores de anúncios, rastreamento e phishing podem ser alteradas antes de serem enviadas ao servidor ou bloqueadas completamente. O mesmo vale para a opção *Ocultar referenciador de terceiros*: o AdGuard intercepta solicitações HTTP(S), em particular para remover ou alterar o cabeçalho do referenciador se esta opção estiver habilitada. No entanto, isso só acontece depois que essas solicitações "saem" do navegador. Isso significa que, se você monitorar o Referer dentro do navegador (por exemplo, com a ajuda das Ferramentas de Desenvolvedor do Chrome), você verá o Referer original porque a solicitação ainda não chegou ao AdGuard. Você pode usar software como [Fiddler](https://www.telerik.com/fiddler) para garantir que o Referer seja alterado corretamente.

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. Ela alterará o Referer ali mesmo, então as Ferramentas do Desenvolvedor mostrarão o Referer desejado para suas solicitações.

### Ocultar seu agente de usuário {#useragent}

Quando você visita um site, seu navegador envia suas informações para o servidor. Sua aparência é uma linha de texto que faz parte de uma solicitação HTTP que começa com "User-Agent:". Geralmente, inclui o nome e a versão do navegador, o sistema operacional e as configurações de idioma. Impedimos que o User-Agent identifique informações para que os anunciantes não possam obtê-las.

Você também pode definir um valor arbitrário para o User-Agent inserindo-o no campo User-Agent Personalizado. Para usar o User-Agent padrão, deixe o campo em branco.

### Ocultar seu endereço de IP {#ip}

O modo furtivo não pode ocultar seu endereço IP. No entanto, podemos ocultá-lo para que os sites que você visita pensem que você é um proxy. Às vezes isso ajuda e os sites ignoram seu verdadeiro endereço IP.

Você pode definir um endereço IP arbitrário, que gostaria que outras pessoas considerassem seu, simplesmente inserindo-o no campo correspondente. Para usar o endereço IP padrão, deixe o campo em branco.

### Remover cabeçalho X-Client-Data de solicitações HTTP {#xclientdata}

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

### Proteger de DPI {#dpi}

O Deep Packet Inspection é um sistema de análise profunda e filtragem de tráfego por conteúdo de pacotes, bem como de acúmulo de dados estatísticos. Usando esta tecnologia, os ISPs têm a capacidade de controlar o tráfego que passa por eles e limitar o acesso ao conteúdo para seus clientes.

O AdGuard pode modificar os dados do pacote de saída para que o cliente não se enquadre nos critérios de bloqueio de DPI. Isso significa que, ao habilitar esta opção, os usuários podem ter acesso ao conteúdo que desejam. Nem todos os sistemas DPI podem ser ignorados neste momento, mas estamos trabalhando constantemente para melhorar isso.

O recurso "Proteger contra DPI" já está implementado no AdGuard para Windows, AdGuard para Mac e AdGuard para Android.

:::cuidado

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
