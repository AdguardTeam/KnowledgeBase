---
title: Política de filtros do AdGuard
sidebar_position: 6
---

Ao discutir os filtros de anúncios do AdGuard, uma questão sempre vem à tona: quais anúncios o AdGuard deve ou não bloquear. Ao definir as regras, seguimos critérios específicos muito semelhantes à [EasyList Policy](https://easylist.to/pages/policy.html), que consideramos corretos e adequados. No entanto, fizemos algumas alterações.

![Filtrar ou não filtrar](https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png)

## Terminologia

Ao longo deste texto, utilizamos os termos **primeiros** e **terceiros**.

Um "primeiro" é um site que um usuário visita intencionalmente e conscientemente, além de um conjunto de recursos na web operados pela mesma organização. Na prática, consideramos que os recursos pertencem à mesma parte se fizerem parte do mesmo domínio registrável: um sufixo público mais um rótulo adicional. Exemplo: `site.example`, `www.site.example`e `subsite.example` pertencem à mesma parte porque `site.example` é seu domínio registrável comum.

Um "terceiro" é qualquer parte que não se enquadre na definição acima. As interações com outras partes são consideradas terceiros, mesmo que o usuário seja temporariamente informado no contexto (por exemplo, na forma de um redirecionamento). Apenas silenciar, pausar, fechar ou passar o mouse por cima de um determinado conteúdo não constitui uma intenção de interação.

## Critérios comuns

Isso se aplica igualmente às regras em todos os filtros.

- As regras que costumam interferir no funcionamento de alguns sites serão excluídas.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## Filtros de anúncios

Esta parte descreve o filtro AdGuard Base, o filtro Mobile Ads e os seguintes filtros específicos de idioma: russo, alemão, holandês, espanhol/português, japonês, turco, chinês e francês.

**O que esses filtros devem bloquear?**

- Esses filtros bloquearão os anúncios sempre que possível.
- Os anúncios devem ser bloqueados independentemente de seus motivos e objetivos.
- Bloquearemos anúncios causados por aplicativos maliciosos ou extensões que injetam anúncios. Observe que fazemos isso apenas com a condição de que você especifique como instalar tal aplicativo ou extensão.

**Limitações e Exceções**

Se uma regra estiver sujeita à lista de limitações descrita abaixo, ela não será adicionada aos filtros principais.

- Os anúncios do próprio site não devem ser removidos de propósito. Por outro lado, eles não devem ser desbloqueados se isso puder causar o reaparecimento de anúncios de terceiros.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.
- Anti-adblock scripts will be blocked only if they limit or affect the functionality of a website.
- Anti-adblock scripts will not be blocked in cases when it is prohibited by law.
- As regras que costumam interferir no funcionamento de alguns sites serão excluídas.

## Tracking Protection filter

**What will be blocked with this filter?**

- This filter will block all trackers that collect user personal data.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it’s still tracking.

**Tracker** is an online script that has tracking as its only purpose, or as one of its purposes.

**Limitações e Exceções**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that cause problems with website functionality will be removed.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## AdGuard URL Tracking filter

**What will be blocked with this filter?**

- This filter will strip all tracking parameters from URLs.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it’s still tracking.

**Limitações e Exceções**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that would reduce user security levels will be removed.
- Rules that cause problems with website functionality will be removed.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## Social Media filter

**What will be blocked with this filter?**

- This filter will block social media widgets (on third-party websites) such as "Like" and "Share" buttons, recommendation widgets, and more.

**Limitações e Exceções**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block widgets that are a part of a website’s functionality, such as "Comments," "Embedded Post," "Surveys," or widgets that require authorization via social networks.
- Rules that block links to a website’s communities in social networks.
- Rules that cause problems with website functionality will be removed.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## Annoyances filter

**What will be blocked with this filter?**

- This filter will block obstructions on the page. These elements are not ads, but they obstruct the view and make it difficult to see the actual content of the website. Such elements include cookie notices, third-party widgets, in-page pop-ups, email subscription forms, banners with special offers, and aggressively placed social media widgets.

**Limitações e Exceções**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block elements that are essential for the website functioning (e.g. authorization forms) will not be blocked even if they satisfy other requirements.
- Rules that cause problems with website functionality will be removed.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## Filter unblocking search ads and self-promotion

Unlike other filters, this one **unblocks** certain ads. Read more about it in the [article on search ads and self-promotion](../search-ads).

**What will be unblocked with this filter?**

- Search ads (ads that you see among the results when using an online search engine).
- Website self-promotion (when an ad on a website is promoting this very website or other websites/social media/etc closely related to it).

**Limitações e Exceções**

- Rules that cause problems with website functionality will be removed.
- As regras específicas do site serão adicionadas somente se um site tiver tráfego suficiente. O tráfego é determinado por estatísticas abertas (se disponíveis) ou por outros meios, como seguidores nas redes sociais. O tráfego de um site é considerado suficiente quando ele tem 100 mil visitas por mês. Consideraremos a adição de uma regra para um site que não seja tão popular, mas a decisão final cabe ao mantenedor da lista de filtros.

## Quality requirements for filtering rules

- The rules should be as efficient as possible in terms of performance.
- Exception rules should be as specific as possible in order to avoid unnecessary unblocking.
- CSS and JS injection rules should be used as rarely as possible and only when it is impossible to block ads without them.