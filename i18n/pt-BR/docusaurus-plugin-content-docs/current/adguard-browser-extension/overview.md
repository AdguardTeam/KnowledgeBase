---
title: Visão geral dos recursos
sidebar_position: 1
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard oferece uma variedade de produtos de software que bloqueiam anúncios e rastreadores em diferentes plataformas. Um dos produtos AdGuard mais procurados é uma extensão gratuita que funciona em cinco navegadores populares: Chrome, Firefox, Edge, Opera e Yandex Browser. As extensões do navegador incluem recursos básicos de bloqueio de anúncios, mas não podem ser comparadas com programas de computador completos, como o [AdGuard para Windows](/adguard-for-windows/overview) e o [AdGuard para Mac](/adguard-for-mac/overview).

![Extensão de navegador AdGuard para Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Disponibilidade {#br-extension}

A [extensão de navegador AdGuard](https://adguard.com/adguard-browser-extension/overview.html) está disponível para a maioria dos principais navegadores. Você pode encontrá-lo facilmente na loja online do seu navegador ou em nosso site oficial.

![Disponível para os navegadores mais populares *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

Temos uma extensão independente para Safari. Desde o lançamento do [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), a maioria das extensões de bloqueio de anúncios enfrentaram grandes problemas e muitas delas pararam de funcionar. Tivemos que desenvolver uma extensão [para o Safari](/adguard-for-safari/overview) que apresenta algumas diferenças em comparação com a extensão descrita neste artigo.

:::

**Não esqueça que a funcionalidade de cada extensão é estritamente limitada pelas capacidades do navegador.** Portanto, se você deseja obter proteção completa, considere instalar um programa independente em seu computador. Há [uma razão para isso](#comparison).

## Bloqueio de anúncios {#adblocker}

O bloqueio de anúncios é obviamente a principal funcionalidade de qualquer bloqueador de anúncios, e o AdGuard não é uma exceção. A extensão bloqueará com sucesso anúncios em qualquer página do seu navegador. O bloqueio de anúncios é baseado nas chamadas listas de filtros, ou simplesmente [filtros](/general/ad-filtering/how-ad-blocking-works). Os filtros podem ser ativados ou desativados nas configurações da sua extensão. Você pode personalizar o bloqueio de anúncios ativando filtros específicos.

### Filtros {#filters}

Em essência, as listas de filtros são conjuntos de regras escritas em uma linguagem especial. Seu bloqueador de anúncios interpreta as regras e as implementa. Como resultado, você para de ver anúncios nas páginas da web que você acessa.

![Filtros *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos os filtros são agrupados de acordo com sua função. Por exemplo, existem categorias para filtros de bloqueio de anúncios, filtros de proteção de privacidade, filtros relacionados a mídias sociais, etc. Você pode ativar filtros individuais ou um grupo de filtros de uma só vez.

![Filtros de bloqueio de anúncios *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Filtros personalizados {#custom}

Embora os recursos de outros grupos de filtros sejam mais ou menos previsíveis, existe um grupo chamado *Personalizado* que pode gerar dúvidas.

![Filtros personalizados *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Nesta aba, você pode adicionar filtros que não estão presentes na extensão por padrão. Existem muitos [filtros disponíveis para o público na Internet](https://filterlists.com). Além disso, você pode criar e adicionar seus próprios filtros. Na verdade, você pode criar qualquer conjunto de filtros e personalizar o bloqueio de anúncios da maneira que desejar.

Para adicionar um filtro, basta clicar em *Adicionar filtro personalizado*, inserir a URL ou o caminho do arquivo do filtro que deseja adicionar e clicar em *Próximo*.

![Adicionar um filtro personalizado *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Regras de usuário {#user-rules}

*Regras do usuário* é outra ferramenta que ajuda a personalizar o bloqueio de anúncios.

![Regras do usuário *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Existem várias maneiras de adicionar novas regras. A forma mais simples é apenas digitar uma regra, mas isso requer conhecimento da sua sintaxe [](/general/ad-filtering/create-own-filters).

Você também pode importar uma lista de filtros pronta para uso de um arquivo de texto. **Certifique-se de que as diferentes regras estejam separadas por quebras de linha.** Observe que a importação de uma lista de filtros pronta para uso é melhor feita na guia [Filtros personalizados](#custom).

Além disso, você pode exportar suas próprias regras de filtragem. Esta opção é boa para transferir sua lista de regras entre navegadores ou dispositivos.

Quando você adiciona um site à lista de permissões (mais sobre isso [abaixo](#allowlist)) ou usa a ferramenta Assistente para ocultar um elemento na página, uma regra correspondente também é salva nas *Regras de usuário*.

### Lista de permissões {#allowlist}

A *lista de permissões* é usada para excluir determinados sites da filtragem. As regras de bloqueio não se aplicam aos sites da lista.

![Lista de permissões *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

A *lista de permissões* também pode ser invertida: você pode desbloquear anúncios em qualquer lugar, exceto nos sites adicionados a esta lista. Para fazer isso, ative a opção *Inverter lista de permissões*.

![Inverter lista de permissões *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Você também pode importar e exportar listas de permissões existentes. Isso é útil, por exemplo, se você deseja aplicar as mesmas regras de permissão em cada um dos seus navegadores.

## Modo invisível {#stealth-mode}

O *Modo invisível* visa garantir a proteção de dados pessoais sensíveis contra rastreadores e fraudadores online.

![Modo invisível *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

No Modo invisível, você pode impedir que um site veja as consultas de pesquisa que você usou para encontrá-lo na Internet, excluir automaticamente cookies de terceiros e do próprio site etc. Um artigo [separado](/general/stealth-mode) é dedicado a todos esses recursos.

:::note

Algumas das opções do *Modo Invisível* disponíveis em aplicativos completos não estão presentes nas extensões do navegador devido a restrições técnicas.

:::

## Outros recursos e opções {#other}

Além dos grandes módulos principais da extensão do navegador AdGuard, existem vários outros recursos específicos que podem ser configurados nas abas *Geral* e nas *Configurações adicionais* das configurações da extensão.

### Geral {#general}

Na guia *Geral*, você pode permitir anúncios de pesquisa e [autopromoção de sites](/general/ad-filtering/search-ads), ativar a ativação automática de filtros específicos do idioma, indicar o intervalo de atualização dos filtros etc.

![Geral *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Além disso, aqui você pode ativar a [*Proteção contra phishing e malware*](/general/browsing-security).

Você pode salvar suas configurações clicando no botão *Exportar configurações*. As configurações serão salvas como um arquivo .json. Para carregar a configuração salva anteriormente, use a função *Importar configurações*. Você pode até usá-lo para alternar rapidamente entre diferentes perfis de configurações ou até mesmo para transferir configurações entre diferentes navegadores.

### Configurações adicionais {#misc}

A seção *Configurações adicionais* contém uma variedade de configurações relacionadas ao processo de bloqueio de anúncios e à usabilidade do aplicativo.

![Configurações adicionais *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Nessa guia, você pode ativar filtros otimizados, ativar notificações sobre atualizações de extensões, abrir o *Registro de filtragem* ou limpar as estatísticas de anúncios e rastreadores bloqueados.

Além disso, você pode optar por nos ajudar no desenvolvimento de filtros enviando estatísticas sobre as regras aplicadas: quais são acionadas, em quais sites e com que frequência. Esta opção está desativada por padrão, pois não coletamos dados do usuário sem consentimento. Mesmo que você a ative, todos os dados serão estritamente anônimos.

### Sobre {#about}

Na seção *Sobre*, você pode encontrar informações sobre a versão atual, links para o EULA e a política de privacidade e para o repositório da extensão do navegador no GitHub.

![Sobre *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Menu principal da extensão {#main-menu}

A página principal da extensão pode ser acessada clicando no ícone da extensão na barra de ferramentas do seu navegador.

![Menu principal *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

Na página principal, você pode ocultar qualquer elemento em qualquer página manualmente (uma regra correspondente será adicionada às *Regras do usuário*), abrir o *Registro de filtragem* para visualizar as informações completas sobre o tráfego do seu navegador e bloquear solicitações em movimento ou consultar o relatório de segurança de um site. Além disso, você pode enviar uma reclamação sobre qualquer site (por exemplo, se houver anúncios perdidos na página, nossos engenheiros de filtros analisarão o relatório e corrigirão o problema) e ver as estatísticas sobre as regras de bloqueio aplicadas.

Todas as solicitações web feitas pelo navegador são exibidas no *Registro de filtragem*, junto com informações detalhadas sobre cada solicitação. O *Registro de filtragem* facilita, por exemplo, o monitoramento de solicitações bloqueadas pela extensão de navegador AdGuard. Além disso, isso permite bloquear qualquer solicitação ou adicionar uma solicitação previamente bloqueada à lista de permissões em dois cliques. O *Registro de filtragem* também oferece uma ampla variedade de opções para classificar solicitações da web, o que pode ser útil ao criar suas próprias regras de filtragem. Você pode abrir o *Registro de filtragem* selecionando o item correspondente no menu principal ou na página de configurações (na guia "Configurações adicionais").

Ao clicar nos ícones no canto superior direito do menu principal da extensão, você pode abrir as configurações da extensão ou pausar a proteção.

## Extensão de navegador AdGuard vs. aplicativos independentes {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="Player de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A principal vantagem dos programas independentes do AdGuard em relação às extensões de navegador é que os programas podem bloquear anúncios em todos os navegadores e em quase todos os aplicativos. Você pode usar navegadores diferentes ao mesmo tempo, o aplicativo filtrará anúncios e ameaças online em todos eles.

A segunda diferença é que as possibilidades dos bloqueadores de anúncios baseados em extensões são muito limitadas pelas diretrizes do navegador. As extensões de navegador devem estar em conformidade com as políticas dos navegadores, onde o bloqueio de anúncios pode ser restrito. Assim, alguns tipos de regras de filtragem não são compatíveis com as extensões. A funcionalidade dos aplicativos para desktop não é limitada, por isso eles possuem uma melhor qualidade de filtragem.

Embora a extensão do navegador AdGuard seja gratuita, fácil de instalar e tenha filtros para bloquear anúncios e combater ameaças online, os aplicativos completos são mais poderosos e possuem vários recursos avançados. Veja todas as diferenças na tabela comparativa abaixo.

![Extensão vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – dentro das restrições do navegador e somente no navegador onde está instalado;

`2` – a extensão não consegue detectar solicitações de outras extensões. Se uma extensão maliciosa ou de rastreamento enviar uma solicitação ao seu servidor para mostrar anúncios ou rastrear sua atividade, a extensão de navegador AdGuard não poderá bloquear essa solicitação;

`3` – nem todos os tipos de anúncios e ameaças podem ser bloqueados por extensões devido a certas limitações do navegador. Alguns elementos podem chegar à página e retardar o processo de carregamento. Além disso, ao contrário dos bloqueadores de anúncios de extensões, o aplicativo AdGuard bloqueia anúncios antes que eles sejam carregados no navegador. Isso economiza tráfego e acelera o carregamento da página.
