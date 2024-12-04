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
- AdGuard Other

Cada extensão de bloqueio de conteúdo pode incluir até 150.000 regras de filtragem ativas. O número de regras na maioria dos grupos de filtros não ultrapassa 150.000. No entanto, se você ativar muitos filtros específicos de idioma ou personalizados, poderá exceder o limite. Nesses casos, as regras aleatórias que estiverem acima do limite serão automaticamente desativadas, o que pode levar a bloqueios incorretos. **É altamente recomendável ativar apenas os filtros de que você mais precisa**.

Há também mais uma extensão responsável por outros recursos: *AdGuard para Safari*, que adiciona o ícone do AdGuard próximo à barra de pesquisa no Safari e permite o uso de regras avançadas para o bloqueio de anúncios complexos.

![Extensões para Safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Mais informações sobre cada extensão abaixo.

## Extensões de bloqueio de conteúdo

*AdGuard General* aplica regras de filtros que você pode encontrar em *Filtros* → *Bloqueio de anúncios* e *Filtros* → *Específicos de idioma*. Essa extensão se concentra no bloqueio abrangente de anúncios e inclui filtros para anúncios em idiomas específicos.

*AdGuard Privacy* aplica regras de filtros localizados em *Filtros* → *Privacidade*. Ele bloqueia mecanismos de rastreamento e garante que sua atividade de navegação permaneça privada.

O *AdGuard Social* aplica regras de filtros que podem ser encontradas em *Filtros* → *Widgets Sociais* e *Filtros* → *Elementos irritantes*. Ele bloqueia popups, botões de mídia social, janelas de assistente online e outros elementos em páginas que você considere irritantes.

O *AdGuard Security* aplica regras de filtragem em *Filtros* → *Segurança*. Essa extensão identifica e bloqueia elementos potencialmente perigosos, protegendo os usuários contra conteúdo malicioso.

O *AdGuard Other* aplica regras de filtragem que não se enquadram nas categorias mencionadas acima e que estão localizados em *Filtros* → *Outros*: *Filtro de desbloqueio de anúncios de pesquisa e autopromoção*, *Filtro AdGuard DNS* e *Filtro experimental AdGuard*.

*AdGuard Custom* aplica regras de filtros que você adiciona por conta própria a *Filtros personalizados*.

Regras de usuário e regras de lista de permissões estão incluídas em todas as extensões.

## AdGuard para Safari

*AdGuard for Safari* activates the AdGuard icon next to the search bar. It's useful if you want to quickly set up protection for a specific website or block ads manually. It also contains advanced rules that aren't converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Como gerenciar as extensões do Safari

1. Abra o Safari e clique em *Safari* no canto superior esquerdo da tela para expandir o menu.

    ![Configurações do Safari *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Click *Settings...*

1. Selecione *Extensões*.

    ![Aba Extensões](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Por que o AdGuard para Safari requer permissões

Ao ativar a extensão *AdGuard para Safari*, você poderá perceber que ela exige as permissões **acesso ao conteúdo da página da Web** e **acesso ao histórico de navegação**. Veja por que ele precisa dessas permissões:

- O acesso ao conteúdo da página da Web é necessário para que o bloqueio manual de anúncios e as regras de bloqueio avançado funcionem corretamente
- O acesso ao histórico de navegação é necessário para verificar o status da proteção nos sites e determinar quais regras avançadas devem ser aplicadas

Não utilizamos esses dados para nenhuma outra finalidade nem os compartilhamos com ninguém. Para mais informações, você pode consultar nossa [Política de privacidade](https://adguard.com/privacy.html).
