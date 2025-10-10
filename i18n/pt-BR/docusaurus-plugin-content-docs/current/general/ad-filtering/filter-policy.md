---
title: Política de filtros do AdGuard
sidebar_position: 6
---

Aqui no AdGuard, já faz tempo que seguimos certos princípios para a criação de nossos filtros, que, junto com as descrições dos filtros, são apresentados abaixo como parte de nossa política de filtragem.

## Critérios comuns

Estes critérios são aplicados igualmente às regras de todos os filtros.

- As regras para um site específico só serão adicionadas se houver tráfego suficiente. O tráfego é determinado por estatísticas públicas (se disponíveis) ou indicadores indiretos, como o número de assinantes nas redes sociais. O tráfego de um site é considerado suficiente se atingir 100 mil visitas por mês. Podemos considerar adicionar uma regra para um site que não seja tão popular, mas a decisão final cabe aos desenvolvedores do filtro. Sites com baixo tráfego, no entano, ainda assim precisam ser verificados quanto a análises de terceiros e redes de publicidade
- A decisão sobre farms de conteúdo (sites que produzem grandes quantidades de conteúdo visando principalmente alcançar alta visibilidade nos resultados de pesquisa e gerar receita publicitária) é tomada pelos desenvolvedores de filtros, dependendo da qualidade do conteúdo

Requisitos de qualidade para regras de filtragem:

- As regras não devem impactar negativamente os sites em termos de desempenho
- As regras de desbloqueio devem ser o mais específico possível para evitar o desbloqueio de algo desnecessário
- As regras de JavaScript devem ser usadas com a maior moderação possível e somente se o bloqueio de anúncios for impossível sem elas

## Filtros de bloqueio de anúncios

### Terminologia

**Bloqueador de anúncios** é uma ferramenta de software ou hardware projetada para filtrar, ocultar ou bloquear anúncios e outros elementos em páginas da web. Os bloqueadores de anúncios são criados para melhorar a experiência do usuário, reduzir o tempo de carregamento da página, diminuir o consumo de tráfego da Internet, bloquear anúncios, aumentar a privacidade durante a navegação em sites e uso de aplicativos e bloquear elementos irritantes.

Um **filtro** (ou uma **lista de filtros**) é um conjunto de regras de filtragem projetadas para filtrar conteúdo e bloquear vários tipos de anúncios e outros tipos de conteúdo usando bloqueadores de anúncios. Esses filtros geralmente operam no navegador, em programas ou servidor DNS.

**Anti-adblock** is a technology used by websites or applications intended to detect ad blocking and react to it in different ways: tracking, reinjecting ads, encouraging to disable ad blocker (so-called “adblock walls”). Os anti-adblocks podem ser de diferentes tipos:

- Anti-adblock que bloqueia o conteúdo do site sem oferecer alternativa: para continuar usando o site, o usuário deve desabilitar o bloqueador de anúncios
- “Anti-adblock wall” com oferecimento de opções alternativas, como a compra de uma assinatura para continuar usando o bloqueador de anúncios
- Mensagens informativas que não obrigam nenhuma ação: pede-se aos usuários que desativem o bloqueador de anúncios, mas essas mensagens podem ser fechadas, permitindo o uso do site sem restrições
- Implementação de publicidade alternativa em resposta ao uso de bloqueadores de anúncios: os sites introduzem publicidade alternativa quando bloqueadores de anúncios são detectados
- Paywall: um método de monetização de conteúdo em que o conteúdo é parcial ou totalmente oculto dos usuários, com uma mensagem solicitando que eles adquiram uma assinatura para que o acesso seja liberado

### Filtros

Os filtros de bloqueio de anúncios AdGuard incluem:

- Filtro base do AdGuard
- Filtro de anúncios para dispositivos móveis do AdGuard
- Filtros regionais divididos por idiomas: chinês, holandês, francês, alemão, japonês, russo, espanhol, português, turco e ucraniano

### O propósito desses filtros

- O **Filtro base** foi projetado para bloquear anúncios em sites em inglês e aqueles para os quais não há filtro separado. Ele também contém regras gerais de filtragem que se aplicam a todos os sites, independentemente do idioma
- O **Filtro de anúncios para dispositivos móveis** bloqueia anúncios em versões móveis de sites e em celulares e tablets. Não há segmentação com base no idioma
- Os **Filtros regionais** seguem a mesma política do **Filtro base**, mas são limitados a sites em determinados idiomas

O objetivo dos filtros de bloqueio de anúncios é bloquear todos os tipos de publicidade em sites, aplicativos e determinados dispositivos que podem carregar anúncios da Internet:

- Banners: anúncios exibidos como imagens em várias partes de páginas da web
- Teasers: anúncios de texto ou gráficos, muitas vezes animados, projetados para intrigar os visitantes (manchetes sensacionalistas, imagens que chamam a atenção) e levá-los a clicar no banner (clickbait)
- Anúncios de texto: publicidade em forma de texto, incluindo links
- Anúncios modais: publicidade que aparece repentinamente sobre o conteúdo atual na forma de janelas modais
- Popunders: publicidade que abre em uma janela separada da atual ao ser clicada em qualquer lugar da página
- Publicidade redirecionada: mecanismos que redirecionam automaticamente os usuários para outro site após clique
- Anúncios disfarçados de conteúdo do site, que abrem páginas com produtos promovidos ou conteúdo não relacionado após clique
- Anúncios em vídeo: vídeos publicitários incorporados ao conteúdo de vídeo ou em elementos separados em sites e aplicativos
- Anúncios interativos: anúncios com os quais os usuários podem interagir (por exemplo, jogos e pesquisas). Após a conclusão, o item anunciado é aberto
- Anúncios intersticiais: anúncios em tela cheia em dispositivos móveis que cobrem a interface do aplicativo ou navegador
- Sobras de anúncios que ocupam grandes espaços ou se destacam no plano de fundo, atraindo a atenção dos visitantes (exceto os pouco perceptíveis ou imperceptíveis)
- Publicidade anti-adblock: publicidade alternativa exibida no site quando os anúncios no site principal está bloqueado
- Bait elements that are used by multiple known adblock detection scripts to detect an ad blocker presence for different goals including changing the way ads are shown, fingerprinting, etc.
- Publicidade do próprio site, se tiver sido bloqueada pelas regras gerais de filtragem (ver *Limitações e exceções*)
- Scripts anti-adblock que impedem o uso do site (ver *Limitações e exceções*)
- Publicidade injetada por malware, desde que sejam fornecidas informações detalhadas sobre seu método de carregamento ou etapas de reprodução
- Mineração indesejada: scripts que exploram criptomoedas sem o consentimento do usuário

### Limitações e exceções

- A publicidade do próprio site não deve ser bloqueada deliberadamente. No entanto, ela não deve ser desbloqueadase o bloqueio for causado por regras gerais de filtragem
- Medidas de acesso a conteúdo, como paywalls, não são bloqueadas
- As anti-adblock walls serão bloqueadas nos seguintes casos:
    - Eles insistem de forma agressiva em desativar, remover o bloqueador de anúncios ou impedir efetivamente o uso do site
    - Eles apresentam descrições incorretas e enganosas das possíveis consequências do uso de bloqueadores de anúncios
    - Eles colocam os visitantes em risco de malvertising, ou seja, anúncios desbloqueados que vêm de fontes duvidosas
- Não bloqueamos mensagens de detecção de bloqueadores de anúncios que atendam a pelo menos um dos seguintes critérios:
    - Permitem a utilização do site e não se sobrepõem a uma quantidade significativa de conteúdo
    - Eles fornecem uma alternativa à desativação de um bloqueador de anúncios, visto que esta opção não coloca em risco a privacidade ou a segurança dos usuários
    - They allow the user to proceed to the website’s content
    - Algumas regras antigas podem continuar a bloquear mensagens que satisfaçam um ou mais destes critérios. Se identificadas, tais regras serão reformadas de acordo com esta política
- Os pools de mineração não são bloqueados se forem públicos e não forem usados exclusivamente para fins maliciosos

## Filtros de proteção contra rastreamento

### Terminologia

**Rastreamento**: processo de monitoramento e coleta de dados de usuários e suas interações com sites e aplicativos para fins de marketing, bem como para obter telemetria sobre o funcionamento de sites ou aplicativos para fins de análise de sua operação. Este processo inclui rastreamento de páginas visitadas, tempo gasto em cada visita, interação com elementos do site (por exemplo, cliques e envios de formulários) e outras métricas. Ele permite que proprietários de sites e aplicativos entendam melhor o comportamento do usuário, otimizem funcionalidades e adaptem suas estratégias de marketing. O rastreamento também é usado para monitorar desempenho, padrões de uso e identificar problemas, fornecendo aos desenvolvedores os dados necessários para melhorar a estabilidade e a qualidade do site ou aplicativo. Mesmo que os dados obtidos possibilitem a identificação de uma pessoa, tais ações ainda são consideradas rastreamento.

**Rastreador** - software usado em um site ou em um aplicativo, projetado para coletar informações sobre sua operação e as ações dos visitantes. Ele rastreia a interação do usuário com o site ou aplicativo, registrando dados sobre visualizações de páginas, tempo gasto na visita, cliques, envios de formulários e outros eventos. Seu objetivo é fornecer aos proprietários de sites e aplicativos uma ferramenta para analisar o comportamento do usuário, melhorar a sua experiência e otimizar conteúdo e publicidade.

**Parâmetro de rastreamento de URL**: uma parte do endereço que é adicionada aos links por sistemas analíticos ou presente em alguns links em páginas da web. Quando uma solicitação é feita, esse parâmetro de rastreamento de URL pode ser processado pelo backend de um sistema analítico ou site, que extrairá informações dele. Por exemplo, os parâmetros de rastreamento de URL podem transmitir informações sobre cliques ou campanhas publicitárias. Os parâmetros de rastreamento de URL também podem ser usados por sistemas de proteção contra fraude ou detecção de bots.

**Cookies**: arquivos que os sites enviam e armazenam em dispositivos. Esses arquivos contêm diversas informações necessárias para o funcionamento do site no dispositivo e usadas para fins analíticos. Isso inclui identificadores exclusivos usados para rastrear a atividade do visitante no site, parâmetros de publicidade e muito mais.

### Filtros

Os filtros de proteção de rastreamento AdGuard incluem:

- Filtro de proteção contra rastreamento do AdGuard
- Filtro contra rastreamento de URL do AdGuard

### O propósito desses filtros

O **filtro de proteção contra rastreamento** foi projetado para bloquear rastreadores que coletam dados pessoais dos usuários e para melhorar a sua privacidade.

O que eles bloqueiam:

- Scripts de sistemas analíticos
- Scripts de rastreamento próprios de sites e aplicativos
- Rastreadores CNAME mascarados
- Cookies de rastreamento
- Pixels de rastreamento
- APIs de rastreamento de navegadores
- Detection of the ad blocker for tracking purposes
- Funcionalidade de Sandbox de privacidade no Google Chrome e suas bifurcações usadas para rastreamento (API Google Topics, API Protected Audience)

O filtro de **rastreamento de URL** foi projetado para remover parâmetros de rastreamento de endereços da web

### Limitações e exceções

Os filtros de proteção contra rastreamento não devem bloquear um rastreador se o bloqueio prejudicar o funcionamento correto do site:

- Anti-bots e proteção contra fraudes caso interfira no uso do site. Por exemplo, com PerimeterX ou hCaptcha, o bloqueio causa problemas quando o site tenta verificar seu visitante com um captcha
- Sistemas de rastreamento de erros como Sentry ou Bugsnag não são bloqueados

## Filtro de elementos irritantes

Os filtros de elementos irritantes são projetados para melhorar a usabilidade dos sites, bloqueando elementos em páginas que não são anúncios, mas que distraem e interferem na interação do site ou no consumo de conteúdo - como várias janelas modais e formulários interativos, notificações e solicitações de consentimento de cookies, banners de aplicativos móveis, e vários widgets.

### Terminologia

**Aviso de cookies**: um formulário que descreve os tipos e o uso de cookies em um site. Um aviso de cookie aparece quando um usuário visita o site, informando ao usuário que o site utiliza cookies ou outras tecnologias de rastreamento para coletar e usar informações pessoais, e explicando por que e com quem as informações coletadas são compartilhadas.

**CMP (Consent Management Platform)**: software que ajuda os sites a cumprir as regras de uso de cookies. Os CMPs limitam o uso de cookies até que o consentimento do usuário seja obtido, proporcionando aos usuários a opção de aceitar determinados cookies e gerenciar configurações de privacidade.

**Widget**: um elemento da interface do usuário que amplia a funcionalidade de um site. Os widgets da Web são integrados às páginas da Web e podem incluir elementos interativos, como botões, formulários ou banners. Eles podem fornecer aos usuários acesso a serviços ou conteúdos específicos sem exigir navegação para outras páginas.

**Popup**: uma janela que aparece acima da página em que você está. Destina-se a exibir informações adicionais, anúncios, notificações ou formulários de insersação de dados. As pop-ups geralmente bloqueiam a visualização do conteúdo principal da página e exigem uma ação do usuário para serem fechadas, o que pode ser irritante.

### Filtros

Para melhor personalização, os filtros de incômodo são divididos por finalidade:

- Filtro de avisos de cookies do AdGuard
- Filtro de pop-ups do AdGuard
- Filtro de banners para aplicativos móveis do AdGuard
- Filtro de widgets do AdGuard
- Filtro de outros aborrecimentos do AdGuard
- Filtro contra elementos irritantes do AdGuard: um filtro combinado que inclui todos os 5 filtros especializados contra elementos irritantes

### O propósito desses filtros

#### Filtro de avisos de cookies do AdGuard

Este filtro foi projetado para bloquear avisos e solicitações de cookies de plataformas de gerenciamento de cookies (CMPs). Vários métodos podem ser aplicados a avisos de cookies e CMPs. Na maioria dos casos, basta ocultar ou bloquear os scripts correspondentes. No entanto, quando a funcionalidade do site e a exibição de conteúdo de terceiros exigem o consentimento dos cookies, são aplicados os seguintes métodos:

- Scriptlets são usados para contornar a solicitação de consentimento (praticamente não aplicável em sites com restrições ao carregamento de conteúdo de terceiros até que uma decisão seja tomada)
- Definir um cookie ou chave no armazenamento local do site de forma que o script considere que o usuário fez uma escolha
- Simular a ação do usuário usando uma regra que clica em um botão específico e interrompe sua execução 10 segundos após o carregamento. Duas opções são possíveis:
    - Rejeitar (exceto cookies funcionais, dependendo do sistema CMP): a opção preferida, pois há menos chance de carregar ferramentas analíticas adicionais
    - Aceitar: esta opção é usada como último recurso se outros métodos falharem. Neste caso, o site é adicionalmente verificado para o uso de ferramentas de análise, que são então bloqueadas pelo **Filtro de proteção contra rastreamento do AdGuard**

**Limitações e exceções**

Em alguns casos, a decisão de adicionar regras é tomada de forma independente pelos desenvolvedores do filtro; principalmente, quando a escolha feita ao simular ações afetaria a funcionalidade do site (por exemplo, o histórico pode não funcionar ou as configurações do usuário podem não ser salvas nesse site).

#### Filtro de pop-ups do AdGuard

Este é um filtro que bloqueia várias pop-ups não necessárias para o uso normal do site, incluindo, mas não se limitando a:

- Solicitações de permissão para receber notificações push
- Pop-ups e formulários para assinatura de notícias, promoções e eventos diversos, incluindo canais de terceiros para recebimento (como Google News, Telegram)
- Pop-ups que incentivam os usuários a desativar o bloqueador de anúncios e violam a privacidade do usuário (a critério dos desenvolvedores do filtro)
- Outros tipos de pop-ups que podem incomodar os usuários (a critério dos desenvolvedores do filtro)

**Limitações e exceções**

- As notificações push são bloqueadas apenas em sites onde não são utilizadas para fins práticos. Por exemplo, em clientes de e-mail ou ferramentas utilizadas para fins de trabalho, tais notificações não serão bloqueadas
- Algumas pop-ups que não se enquadram nas categorias descritas acima, mas que ainda interferem na experiência do usuário, também poderão ser bloqueadas. Por exemplo, solicitações de registro em um site ou pop-ups que apresentam os recursos do site. A decisão é tomada pelos desenvolvedores de filtros
- As medidas de acesso ao conteúdo que exigem que o usuário pague para acessar o conteúdo não devem ser contornadas

#### Filtro de banners para aplicativos móveis do AdGuard

Este é um filtro que bloqueia banners e pop-ups que incentivam os visitantes a instalar aplicativos móveis.

**Limitações e exceções**

Os banners localizados nos cabeçalhos ou nos menus dos sites não são bloqueados se não forem animados e não ocuparem uma parcela significativa do espaço utilizável. Se um banner estiver localizado no rodapé, a decisão é tomada pelos desenvolvedores do filtro caso a caso. Normalmente, os banners no rodapé não se destacam de outros elementos e não distraem.

#### Filtro de widgets do AdGuard

Este é um filtro que bloqueia diversos widgets não essenciais para o funcionamento do site ou para a interação com ele:

- Widgets para recomendações de conteúdo: artigos relacionados, sites semelhantes, diversas recomendações personalizadas
- Widgets de bate-papo que não estão integrados ao conteúdo e não são o conteúdo principal da página
- Widgets de marketing:
    - Bate-papos para comunicação com assistentes ou bots
    - Widgets com recomendações de produtos mostrados ao usuário
    - Formulários de retorno
- Outros widgets que não possuem uma categoria separada, mas podem sobrecarregar visualmente a página. Por exemplo, widgets meteorológicos, taxas de câmbio, listas de empregos e doações

**Limitações e exceções**

Este filtro não bloqueia:

- Widgets relacionados ao conteúdo da página, como seções de comentários, transmissões de bate-papo ao vivo, com exceção de bate-papos não moderados em sites com streaming não oficiais, que geralmente estão cheios de spam e conteúdo semelhante
- Widgets para autopromoção e atividades promocionais específicas do site
- Widgets de doação, exceto nos casos em que ocupam parte significativa da página e se destacam no conteúdo. A decisão de bloquear é tomada pelos desenvolvedores do filtro

#### Filtro do AdGuard contra outros aborrecimentos

Este filtro foi projetado para bloquear elementos irritantes que não estão incluídos em outros filtros, bem como para aplicar vários ajustes. Seu objetivo é:

- Bloquear a autopromoção de sites (qualquer tipo de publicidade que promova bens ou serviços de propriedade do proprietário do site, sem receber compensação comercial de terceiros), se for considerada um elemento irritante
- Bloquear elementos incômodos que não estão incluídos em outras categorias
- Desbloquear ações na página, como abrir o menu, selecionar e copiar texto, caso estejam bloqueados
- Acelerar a contagem regressiva ao carregar arquivos de sites, caso a verificação não seja controlada pelo servidor ou não seja prejudicada
- Aplicar várias regras que podem ser úteis para os desenvolvedores de filtros. Por exemplo, o bloqueio da detecção do depurador da Web

**Limitações e exceções**

Este filtro pode conter regras que não são adequadas para todos os usuários. Em alguns casos, é recomendado que seja desativado. As decisões de adicionar regras a esse filtro são tomadas pelos desenvolvedores de filtros, uma a uma.

## Filtros de redes sociais

### Filtros

Os filtros de redes sociais do AdGuard incluem:

- Filtro do AdGuard de redes sociais

### O propósito desses filtros

Este filtro bloqueará widgets de redes sociais em sites de terceiros, como botões “Curtir” e “Compartilhar”, widgets de grupo, recomendações e widgets semelhantes.

### Limitações e exceções

Os widgets que fazem parte da funcionalidade ou conteúdo do site, como seção de comentários, postagens incorporadas e enquetes, bem como widgets de login em redes sociais não são bloqueados. Links para páginas de redes sociais do site também não são bloqueados.

## Outros filtros

Este grupo contém filtros não essenciais para bloquear anúncios.

### Terminologia

**Publicidade contextual** é um tipo de publicidade na Internet em que o anúncio é exibido com base no conteúdo, público selecionado, local, horário ou outro contexto do acesso às páginas da Internet.

**Publicidade de pesquisa** é uma subclasse de publicidade contextual em que os anúncios são exibidos com base na consulta de pesquisa do visitante.

**Autopromoção de sites** refere-se aos banners que promovem bens e serviços de propriedade do proprietário do site, pelos quais não recebem remuneração de terceiros.

Para mais detalhes sobre esses tipos de publicidade, consulte o artigo [sobre anúncios de pesquisa](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtros

- Filtro para desbloquear anúncios úteis e de autopromoção
- Filtro do AdGuard DNS
- Filtro experimental do AdGuard

### O propósito desses filtros

#### Filtro para desbloquear anúncios úteis e de autopromoção

Este filtro desbloqueia:

- Publicidade contextual nos resultados de pesquisa ao usar mecanismos de busca (como Google, Bing, Yandex, DuckDuckGo)
- Autopromoção de sites

**Limitações e exceções**

- A publicidade de pesquisa só é desbloqueada se corresponder à consulta de busca do usuário, pois é contextual. Caso contrário, a publicidade permanece bloqueada
- A autopromoção só é desbloqueada se estiver em conformidade com a política de filtros. Uma solicitação de desbloqueio pode ser rejeitada pelos desenvolvedores de filtros
- Qualquer outra publicidade não será desbloqueada

#### Filtro do AdGuard DNS

Este filtro é usado no AdGuard DNS. Ele não substitui filtros de bloqueio de anúncios.

**Limitações e exceções**

As mesmas dos filtros de bloqueio de anúncios.

#### Filtro experimental do AdGuard

Este filtro destina-se a testar e depurar regras que podem prejudicar a funcionalidade dos sites. As regras são adicionadas pelos desenvolvedores de filtros quando há necessidade de testar uma solução específica. Como o filtro foi projetado para fins de depuração, suas limitações são mínimas.

**Limitações e exceções**

- As regras não devem quebrar a funcionalidade dos sites de maneira intencional
- As regras não devem desbloquear anúncios ou violar a Política de qualquer outra forma
