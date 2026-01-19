---
title: Extensões para Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## O que são extensões para Safari

As extensões para Safari são pequenos programas de software que adicionam funcionalidade ao navegador Safari. Eles permitem que os usuários personalizem e aprimorem sua experiência de navegação adicionando recursos que não estão nativamente integrados ao navegador. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Como funciona

Para bloquear anúncios, rastreadores e incômodos em sites, o AdGuard usa regras de filtragem. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Custom
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Custom
- AdGuard Other

Cada extensão de bloqueio de conteúdo pode incluir até 150.000 regras de filtragem ativas. O número de regras na maioria dos grupos de filtros não ultrapassa 150.000. No entanto, se você ativar muitos filtros específicos de idioma ou personalizados, poderá exceder o limite. Nesses casos, as regras aleatórias que estiverem acima do limite serão automaticamente desativadas, o que pode levar a bloqueios incorretos. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mais informações sobre cada extensão abaixo.

## Extensões de bloqueio de conteúdo

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Essa extensão se concentra no bloqueio abrangente de anúncios e inclui filtros para anúncios em idiomas específicos.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Ele bloqueia mecanismos de rastreamento e garante que sua atividade de navegação permaneça privada.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Essa extensão identifica e bloqueia elementos potencialmente perigosos, protegendo os usuários contra conteúdo malicioso.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard para Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Como gerenciar as extensões do Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Por que o AdGuard para Safari requer permissões

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- O acesso ao histórico de navegação é necessário para verificar o status da proteção nos sites e determinar quais regras avançadas devem ser aplicadas

Não utilizamos esses dados para nenhuma outra finalidade nem os compartilhamos com ninguém. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
