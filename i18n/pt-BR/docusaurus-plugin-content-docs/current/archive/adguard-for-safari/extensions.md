---
title: Extensões para Safari
sidebar_position: 3
---

:::info

Este artigo é sobre o AdGuard para Safari, que protege apenas o seu navegador Safari. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## O que são extensões para Safari

As extensões para Safari são pequenos programas de software que adicionam funcionalidade ao navegador Safari. Eles permitem que os usuários personalizem e aprimorem sua experiência de navegação adicionando recursos que não estão nativamente integrados ao navegador. O AdGuard para Safari usa estas extensões principalmente para aplicar regras de filtragem em sites abertos no Safari.

## Como funciona

Para bloquear anúncios, rastreadores e incômodos em sites, o AdGuard usa regras de filtragem. As regras do AdGuard e seus filtros personalizados são convertidos em regras que o Safari é capaz de interpretar, integradas em 6 extensões do navegador:

- AdGuard Custom
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Custom
- AdGuard Other

Cada extensão de bloqueio de conteúdo pode incluir até 150.000 regras de filtragem ativas. O número de regras na maioria dos grupos de filtros não ultrapassa 150.000. No entanto, se você ativar muitos filtros específicos de idioma ou personalizados, poderá exceder o limite. Nesses casos, as regras aleatórias que estiverem acima do limite serão automaticamente desativadas, o que pode levar a bloqueios incorretos. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Mais informações sobre cada extensão abaixo.

## Extensões de bloqueio de conteúdo

_AdGuard General_ applies rules from filters that you can find in _Filters_ → _Ad blocking_ and _Filters_ → _Language-specific_. Essa extensão se concentra no bloqueio abrangente de anúncios e inclui filtros para anúncios em idiomas específicos.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Ele bloqueia mecanismos de rastreamento e garante que sua atividade de navegação permaneça privada.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. Ele bloqueia popups, botões de mídia social, janelas de assistente online e outros elementos em páginas que você considere irritantes.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Essa extensão identifica e bloqueia elementos potencialmente perigosos, protegendo os usuários contra conteúdo malicioso.

_AdGuard Other_ applies rules from filters that that don't fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

Regras de usuário e regras de lista de permissões estão incluídas em todas as extensões.

## AdGuard para Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. Pode ser útil se você desejar configurar rapidamente a proteção em um site específico ou bloquear anúncios manualmente. Ele também contém regras avançadas que não são convertidas para o formato compatível com o Safari. Isso inclui [regras CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [seletores CSS Estendidos](/general/ad-filtering/create-own-filters#extended-css-selectors) e [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), que permitem que o AdGuard bloqueie anúncios complexos, como aqueles no YouTube.

## Como gerenciar as extensões do Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Por que o AdGuard para Safari requer permissões

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to web page content** and **access to browsing history**. Veja por que ele precisa dessas permissões:

- O acesso ao conteúdo da página da Web é necessário para que o bloqueio manual de anúncios e as regras de bloqueio avançado funcionem corretamente
- O acesso ao histórico de navegação é necessário para verificar o status da proteção nos sites e determinar quais regras avançadas devem ser aplicadas

Não utilizamos esses dados para nenhuma outra finalidade nem os compartilhamos com ninguém. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
