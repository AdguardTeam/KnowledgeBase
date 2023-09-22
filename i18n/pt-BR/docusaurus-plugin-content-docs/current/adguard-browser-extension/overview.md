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

Besides, you can export your own filtering rules. This option is good for transferring your list of rules between browsers or devices.

When you add a website to the Allowlist (more on that [below](#allowlist)) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in *User rules*.

### Allowlist {#allowlist}

The *allowlist* is used to exclude certain websites from filtering. Blocking rules are not applied to the websites on the list.

![Allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The *allowlist* can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the *Invert allowlist* option.

![Invert allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

You can also import and export existing allowlists. It is useful, for instance, if you want to apply the same allowing rules in each of your browsers.

## Stealth Mode {#stealth-mode}

*Stealth Mode* aims to ensure the protection of sensitive personal data from online trackers and fraudsters.

![Stealth Mode *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

In Stealth Mode, you can prevent a website from seeing the search queries from you used to find it on the Internet, automatically delete third-party and website’s own cookies, etc. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Some of the *Stealth Mode* options available in full-fledged apps are not present in the browser extensions due to technical restrictions.

:::

## Other features and options {#other}

Apart from the large key modules of AdGuard Browser Extension, there are several more specific features that can be configured in the *General* and *Additional settings* tabs of the extension settings.

### Geral {#general}

In the *General* tab, you can allow search ads and the [self-promotion of websites](/general/ad-filtering/search-ads), enable the automatic activation of language-specific filters, indicate the filters update interval, etc.

![General *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Besides, here you can enable [*Phishing and malware protection*](/general/browsing-security).

You can save your settings configuration by clicking the *Export settings* button. The settings will be saved as a .json file. To upload the previously saved settings configuration, use the *Import settings* function. You can even use it to quickly switch between different settings profiles or even to transfer settings configurations between different browsers.

### Additional settings {#misc}

The *Additional settings* section contains a range of various settings that are related to the ad blocking process and application usability.

![Additional settings *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

From this tab, you can activate optimized filters, enable notifications about extension updates, open the *Filtering log*, or clear the statistics of blocked ads and trackers.

Besides, you can opt to help us with the development of filters by sending the statistics on applied rules: which ones are triggered, on which websites, and how often. This option is disabled by default as we do not collect user data without consent. Yet, if you enable it, all data will be strictly anonymized.

### Sobre {#about}

In the *About* section, you can find infos about the current version, links to the EULA and Privacy policy, and to the repository of the Browser extension on GitHub.

![About *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Extension’s main menu {#main-menu}

The extension's main page can be accessed by clicking on the extension's icon on the toolbar of your browser.

![Main menu *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

On the main page, you can hide any element on any page manually (a corresponding rule will be added to the *User rules*), open the *Filtering log* to view the complete information about your browser's traffic and block requests on the go, or look at a website’s security report. Besides, you can submit a complaint about any website (for example, if there are missed ads on the page, our filter engineers will review the report and fix the problem) and see the statistics on applied blocking rules.

All web requests made by the browser are displayed in the *Filtering log*, along with detailed information about each request. The *Filtering log* makes it easy, for example, to monitor requests blocked by AdGuard Browser Extension. Besides, it allows you to block any request or add a previously blocked request to Allowlist in two clicks. The *Filtering log* also offers you a wide variety of options for sorting web requests, which can be helpful when creating your own filtering rules. You can open the *Filtering log* by selecting the corresponding item in the main menu, or from the settings page (in the "Additional settings" tab).

By clicking the icons in the top right corner of the extension's main menu, you can open the extension settings or pause the protection.

## AdGuard Browser Extension vs. standalone apps {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The main advantage of AdGuard standalone programs over browser extensions is that the programs can block ads in every browser and in almost all apps. Você pode usar navegadores diferentes ao mesmo tempo, o aplicativo filtrará anúncios e ameaças online em todos eles.

A segunda diferença é que as possibilidades dos bloqueadores de anúncios baseados em extensões são muito limitadas pelas diretrizes do navegador. As extensões de navegador devem estar em conformidade com as políticas dos navegadores, onde o bloqueio de anúncios pode ser restrito. Assim, alguns tipos de regras de filtragem não são compatíveis com as extensões. A funcionalidade dos aplicativos para desktop não é limitada, por isso eles possuem uma melhor qualidade de filtragem.

Embora a extensão do navegador AdGuard seja gratuita, fácil de instalar e tenha filtros para bloquear anúncios e combater ameaças online, os aplicativos completos são mais poderosos e possuem vários recursos avançados. See all the differences in the comparative table below.

![Extension vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – within browser restrictions and only in the browser where it is installed;

`2` – the extension is unable to detect requests from other extensions. If a malicious or tracking extension sends a request to its server to show you ads or track your activity, AdGuard Browser Extension will not be able to block that request;

`3` – not all types of ads and threats can be blocked by browser extensions due to certain browser limitations. Some elements may get to the page and slow down the loading process. Besides, unlike browser-based ad blockers, the AdGuard app blocks ads before they are loaded to the browser. This saves traffic and speeds up page loading.
