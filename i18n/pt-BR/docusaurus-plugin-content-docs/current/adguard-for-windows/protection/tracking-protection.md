---
title: Modo confidencial
sidebar_position: 2
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

Muitos sites coletam dados sobre seus visitantes, incluindo endereços de IP, informações do navegador e do sistema operacional, resolução de tela e até mesmo a página de onde você veio. Cookies podem ser usados para identificar seu navegador, lembrar suas preferências ou reconhecê-lo quando você retornar. A Proteção contra rastreamento impede que tais sistemas coletem seus dados pessoais. Saiba mais em nosso [artigo sobre Proteção contra rastreamento no AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Proteção contra rastreamento](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![Configurações gerais](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Bloquear rastreadores

Bloqueia rastreadores e análises da Web usando o filtro _AdGuard Tracking Protection_.

### Remover parâmetros de rastreamento das URLs

Remove parâmetros de rastreamento como `utm_*` e `fb_ref` dos URLs das páginas usando o filtro _AdGuard URL Tracking_.

### Ocultar suas consultas de pesquisa

Oculta consultas de sites visitados a partir de um mecanismo de pesquisa. Quando você é direcionado para um site do Google, Yahoo ou qualquer outro mecanismo de busca, esta opção oculta a consulta de pesquisa usada para encontrar esse site.

### Pedir aos sites que não te rastreiem

Envia os sinais [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita.

## Métodos de rastreamento

![Métodos de rastreamento](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Excluir cookies de terceiros

Os sites usam cookies para armazenar suas preferências — por exemplo, o idioma que você escolheu, sua localização ou os itens no seu carrinho de compras. Ao retornar, o navegador envia esses cookies de volta para que o site possa reconhecê-lo.

Cookies de terceiros funcionam da mesma maneira, mas são criados por domínios diferentes daquele que você está visitando. Por exemplo, o site cnn.com pode incluir um widget "Curtir" do Facebook que define um cookie que é lido posteriormente pelo Facebook. Os anunciantes costumam usar esses cookies para rastrear quais outros sites você visita.

Com esta opção, você pode definir um limite de tempo (em minutos) após o qual todos os cookies de terceiros serão excluídos. Se você definir o temporizador para 0, esses cookies serão bloqueados completamente.

![Tempo de vida](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

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

![API do navegador](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### Bloquear WebRTC

Bloqueia WebRTC, uma vulnerabilidade conhecida que pode vazar seu endereço de IP real mesmo se você usar um proxy ou VPN.

WebRTC (Web Real-Time Communication) é uma tecnologia que permite o streaming direto de dados entre navegadores e aplicativos. Ele pode revelar seu verdadeiro endereço de IP, mesmo se você usar um proxy ou VPN. Ative essa opção pode atrapalhar certos aplicativos de navegador, como mensageiros, chats, cinemas ou jogos.

### Bloquear a API Push

A API Push permite que os servidores enviem mensagens para aplicativos da Web, independentemente do status da atividade do seu navegador. É por isso que você pode receber notificações de sites mesmo que seu navegador esteja oculto na bandeja ou não tenha sido iniciado. Ativar essa opção bloqueia completamente a API Push.

### Bloquear API de localização

Quando essa opção estiver ativada, o navegador deixará de enviar dados de GPS para sites. Isso os impede de determinar sua localização, alterar os resultados da pesquisa ou personalizar o conteúdo com base em onde você está.

### Bloquear Flash

O plugin Flash Player está desatualizado e é altamente vulnerável a vírus e exploits. Isso também pode tornar o carregamento do site mais lento. Habilite essa opção impede que os navegadores detectem componentes Flash (como plugins ou objetos ActiveXObject), o que efetivamente desativa o suporte ao Flash.

## Rastreamento do Windows

![Rastreamento do Windows](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Desativar telemetria do Windows

Desativa o envio de dados técnicos sobre o uso do seu sistema e do aplicativo.

### Desativar o ID de publicidade

Desativa o ID de publicidade para bloquear o rastreamento do uso do seu aplicativo.

### Desativar relatórios automáticos pelo Microsoft Defender

Bloqueia relatórios automáticos e amostragem de malware suspeito.

### Desativar serviço de roteamento de mensagens WAP Push

Desativa a coleta de dados sobre problemas de componentes do Windows

## Diversos

![Diversos](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Ocultar Referrer de terceiros

Referer é um cabeçalho HTTP incluído em solicitações de navegador para servidor. Ele contém o URL da origem da solicitação. Ao navegar de uma página para outra, o Referer salva a URL da página inicial. O servidor que hospeda a página da web de destino geralmente possui um software que analisa o Referer e extrai várias informações dele.

Ativar a opção _Ocultar Referer de terceiros_ impede que sites de terceiros vejam esta informação alterando ou removendo o header.

Você também pode inserir um valor personalizado no campo _Referenciador Personalizado_. Para usar o Referer padrão, deixe o campo em branco.

Note que, para poder filtrar o tráfego, os aplicativos do AdGuard interceptam as solicitações do navegador para o servidor. As solicitações para servidores de anúncios, rastreamento e phishing podem ser alteradas antes de serem enviadas ao servidor ou bloqueadas completamente.

O mesmo se aplica à opção _Ocultar o referenciador de terceiros_: para filtrar o tráfego, o AdGuard intercepta as solicitações HTTP(S) e pode alterá-las ou bloqueá-las antes que cheguem ao servidor. A alteração ocorre somente depois que a solicitação sai do seu navegador. Por esse motivo, se você verificar os headers dentro do navegador (por exemplo, com as Ferramentas de Desenvolvedor do Chrome), você ainda verá o Referer original. Para confirmar que foi modificado, você pode usar ferramentas externas, como o Fiddler.

### Ocultar seu agente de usuário

Quando você visita um site, seu navegador envia um cabeçalho chamado User-Agent como parte da solicitação HTTP. Parece ser uma linha de texto que começa com “User-Agent:”. Esta linha geralmente contém detalhes como o nome e a versão do navegador, o sistema operacional e as configurações de idioma.

Ao ativar esta opção, o AdGuard remove informações de identificação do User-Agent para que anunciantes e rastreadores não possam usá-la para criar seu perfil. Se preferir, você pode inserir um valor personalizado no campo _User-Agent Personalizado_. Para manter o valor padrão, basta deixar o campo em branco.

### Mascarar seu endereço de IP

O AdGuard não pode ocultar completamente o seu endereço de IP real, mas pode substituí-lo por outro diferente para que os sites interpretem sua conexão como se estivesse passando por um proxy. Em alguns casos, isso ajuda a ocultar seu verdadeiro endereço IP.

Você pode inserir qualquer endereço de IP que deseja usar no campo correspondente. Para usar o endereço IP padrão, deixe o campo em branco.

### Remover cabeçalho X-Client-Data

Impede que o Google Chrome envie informações sobre sua versão e modificações nas solicitações para os domínios do Google, incluindo serviços como DoubleClick e Google Analytics.

### Proteger contra DPI

O Deep Packet Inspection é um sistema de análise profunda e filtragem de tráfego por conteúdo de pacotes, bem como de acúmulo de dados estatísticos. Usando esta tecnologia, os ISPs têm a capacidade de controlar o tráfego que passa por eles e limitar o acesso ao conteúdo para seus clientes.

Inspeção profunda de pacotes (DPI) uma tecnologia usada por alguns ISPs para analisar e filtrar o trfego com base no contedo dos pacotes. Isso permite que eles monitorem conexões, restrinjam o acesso a certos recursos e coletem estatísticas sobre usuários.

Quando esta opção está ativada, o AdGuard modifica os dados dos pacotes de saída para que não correspondam mais aos critérios de bloqueio do DPI. Isto pode ajudá-lo a contornar restrições e acessar o conteúdo que você precisa. No entanto, nem todos os sistemas de DPI podem ser contornados ainda — melhorias ainda estão em andamento.

O recurso _Proteção contra DPI_ já está implementado no AdGuard para Windows, AdGuard para Mac e AdGuard para Android.

:::caution

Se este recurso estiver ativado no AdGuard para Windows, ele pode interferir no antivírus ESET. Neste caso, o ESET não poderá filtrar o tráfego, deixando alguns sites maliciosos ou bloqueados acessíveis.

:::
