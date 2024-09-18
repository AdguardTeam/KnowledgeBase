---
title: Proteção contra rastreamento
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O módulo de proteção contra rastreamento pode ser acessado tocando na guia _Proteção_ (segundo ícone à esquerda na parte inferior da tela) e selecionando _Proteção contra rastreamento_.

A _proteção contra rastreamento_ (anteriormente conhecida como _Modo Stealth_) evita que sites coletem informações sobre você, como endereços IP, informações sobre seu navegador e sistema operacional, resolução de tela e a página da qual você veio ou da qual foi redirecionado. Ele também pode bloquear cookies que os sites usam para marcar seu navegador, salvar suas configurações pessoais e preferências de usuário ou reconhecê-lo em sua próxima visita.

![Proteção contra rastreamento \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

A _Proteção contra rastreamento_ tem três níveis pré-configurados de proteção de privacidade (_Padrão_, _Alto_ e _Extremo_) e um nível definido pelo usuário (_Personalizado_).

Aqui estão os recursos ativos dos níveis pré-configurados:

1. **Padrão**

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Pedir aos sites que não te rastreiem_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   c. _Remover cabeçalho X-Client-Data_. Esse recurso impede que o Google Chrome envie informações sobre sua versão e modificações para os domínios do Google (incluindo o DoubleClick e o Google Analytics)

2. **Alto**

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Remover parâmetros de rastreamento de URLs_. Este recurso usa o _filtro de rastreamento de URL do AdGuard_ para remover parâmetros de rastreamento, como `utm_*` e `fb_ref`, dos URLs das páginas

   c. _Ocultar suas consultas de pesquisa_. Esse recurso oculta as consultas de sites visitados em um mecanismo de pesquisa

   d. _Pedir aos sites que não te rastreiem_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   e. _Autodestruição de cookies de terceiros_. Este recurso limita a vida útil de cookies de terceiros a 180 minutos

   :::caution

   Este recurso exclui todos os cookies de terceiros após sua expiração forçada. Isto inclui os seus logins através de redes sociais ou outros serviços de terceiros. Pode ser necessário fazer login novamente em alguns sites periodicamente ou enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o nível de proteção _Padrão_.

   :::

   f. _Remover cabeçalho X-Client-Data_. Este recurso impede que o Google Chrome envie informações sobre sua versão e modificações para domínios do Google (incluindo DoubleClick e Google Analytics)

3. **Extremo** (anteriormente conhecido como _Ultimate_)

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Remover parâmetros de rastreamento de URLs_. Este recurso usa o _filtro de rastreamento de URL do AdGuard_ para remover parâmetros de rastreamento, como `utm_*` e `fb_ref`, dos URLs das páginas

   c. _Ocultar suas consultas de pesquisa_. Esse recurso oculta as consultas de sites visitados em um mecanismo de pesquisa

   d. _Pedir aos sites que não te rastreiem_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   e. _Autodestruição de cookies de terceiros_. Este recurso limita a vida útil de cookies de terceiros a 180 minutos

   :::cuidado

   Este recurso exclui todos os cookies de terceiros após sua expiração forçada. Isto inclui os seus logins através de redes sociais ou outros serviços de terceiros. Pode ser necessário fazer login novamente em alguns sites periodicamente ou enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o nível de proteção _Padrão_.

   :::

   f. _Bloquear WebRTC_. Este recurso bloqueia WebRTC, uma vulnerabilidade conhecida que pode vazar seu endereço IP real mesmo se você usar um proxy ou VPN

   g. _Bloquear a API Push_. Esse recurso impede que seus navegadores recebam mensagens push dos servidores

   h. _Bloquear API de localização_. Este recurso impede que os navegadores acessem seus dados de GPS e determinem sua localização

   i. _Ocultar Referrer de terceiros_. Este recurso evita que terceiros saibam quais sites você visita. Ele oculta o cabeçalho HTTP que contém o URL da página inicial e o substitui por um padrão ou personalizado definido por você

   j. _Ocultar seu User-Agent_. Este recurso remove informações de identificação do cabeçalho User-Agent, que normalmente inclui o nome e a versão do navegador, o sistema operacional e as configurações de idioma

   k. _Remover cabeçalho X-Client-Data_. Este recurso impede que o Google Chrome envie informações sobre sua versão e modificações para domínios do Google (incluindo DoubleClick e Google Analytics)

Você pode ajustar configurações individuais em _Proteção contra rastreamento_ e criar uma configuração personalizada. Cada configuração possui uma descrição que o ajudará a entender sua função. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
