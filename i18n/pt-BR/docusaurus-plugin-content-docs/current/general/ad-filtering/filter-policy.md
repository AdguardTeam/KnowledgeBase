---
title: Política de filtros do AdGuard
sidebar_position: 6
---

:::note Disclaimer

Por favor, leia atentamente esta política de filtros antes de ativar qualquer filtro.

O uso do bloqueador de anúncios AdGuard, do DNS AdGuard e de seus filtros pode afetar o funcionamento de sites e serviços de terceiros. É sua responsabilidade revisar e seguir as políticas e os termos de quaisquer sites ou serviços que você utilize.

Antes de ativar filtros fornecidos por terceiros, você concorda em revisar os termos aplicáveis e tomar uma decisão informada sobre o uso deles. O AdGuard não se responsabiliza pela forma como os filtros de terceiros operam ou pelo conteúdo dos seus termos, e a presença deles nos produtos AdGuard não é uma recomendação para usá-los.

:::

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
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- As anti-adblock walls serão bloqueadas nos seguintes casos:
    - Eles insistem de forma agressiva em desativar, remover o bloqueador de anúncios ou impedir efetivamente o uso do site
    - Eles apresentam descrições incorretas e enganosas das possíveis consequências do uso de bloqueadores de anúncios
    - Eles colocam os visitantes em risco de malvertising, ou seja, anúncios desbloqueados que vêm de fontes duvidosas
    - They violate or negatively impact user privacy
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

Este filtro foi projetado para bloquear avisos e solicitações de cookies de plataformas de gerenciamento de cookies (CMPs). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Limitações e exceções**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### Filtro de pop-ups do AdGuard

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitações e exceções**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### Filtro de banners para aplicativos móveis do AdGuard

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitações e exceções**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### Filtro de widgets do AdGuard

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitações e exceções**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### Filtro do AdGuard contra outros aborrecimentos

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitações e exceções**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Filtros de redes sociais

### Filtros

AdGuard Social Media filters include:

- AdGuard Social Media filter

### O propósito desses filtros

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitações e exceções

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Outros filtros

This group contains filters that are not essential for blocking advertisements.

### Terminologia

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtros

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### O propósito desses filtros

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitações e exceções**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitações e exceções**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitações e exceções**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
