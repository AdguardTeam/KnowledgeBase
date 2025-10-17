---
title: Proteção contra rastreamento
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Ele também pode bloquear cookies que os sites usam para marcar seu navegador, salvar suas configurações pessoais e preferências de usuário ou reconhecê-lo em sua próxima visita.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Aqui estão os recursos ativos dos níveis pré-configurados:

1. **Padrão**

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Ask websites not to track me_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   c. _Remover cabeçalho X-Client-Data_. Esse recurso impede que o Google Chrome envie informações sobre sua versão e modificações para os domínios do Google (incluindo o DoubleClick e o Google Analytics)

2. **Alto**

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Remover parâmetros de rastreamento de URLs_. Este recurso usa o _filtro de rastreamento de URL do AdGuard_ para remover parâmetros de rastreamento, como `utm_*` e `fb_ref`, dos URLs das páginas

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Este recurso exclui todos os cookies de terceiros após sua expiração forçada. Isto inclui os seus logins através de redes sociais ou outros serviços de terceiros. Pode ser necessário fazer login novamente em alguns sites periodicamente ou enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o nível de proteção _Padrão_.

   :::

   f. _Remover cabeçalho X-Client-Data_. Este recurso impede que o Google Chrome envie informações sobre sua versão e modificações para domínios do Google (incluindo DoubleClick e Google Analytics)

3. **Extremo** (anteriormente conhecido como _Ultimate_)

   a. _Bloquear rastreadores_. Este recurso utiliza o _Filtro de proteção contra rastreamento do AdGuard_ para protegê-lo de contadores online e ferramentas de web analytics

   b. _Remover parâmetros de rastreamento de URLs_. Este recurso usa o _filtro de rastreamento de URL do AdGuard_ para remover parâmetros de rastreamento, como `utm_*` e `fb_ref`, dos URLs das páginas

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Esse recurso envia os sinais [Global Privacy Control] (https://globalprivacycontrol.org/) e [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) para os sites que você visita, solicitando que os aplicativos da Web desativem o rastreamento de sua atividade

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::cuidado

   Este recurso exclui todos os cookies de terceiros após sua expiração forçada. Isto inclui os seus logins através de redes sociais ou outros serviços de terceiros. Pode ser necessário fazer login novamente em alguns sites periodicamente ou enfrentar outros problemas relacionados a cookies. Para bloquear apenas cookies de rastreamento, use o nível de proteção _Padrão_.

   :::

   f. _Bloquear WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Bloquear a API Push_. This feature blocks push notifications from websites

   h. _Bloquear API de localização_. Este recurso impede que os navegadores acessem seus dados de GPS e determinem sua localização

   i. _Ocultar Referrer de terceiros_. Este recurso evita que terceiros saibam quais sites você visita. Ele oculta o cabeçalho HTTP que contém o URL da página inicial e o substitui por um padrão ou personalizado definido por você

   j. _Hide User-Agent_. Este recurso remove informações de identificação do cabeçalho User-Agent, que normalmente inclui o nome e a versão do navegador, o sistema operacional e as configurações de idioma

   k. _Remover cabeçalho X-Client-Data_. Este recurso impede que o Google Chrome envie informações sobre sua versão e modificações para domínios do Google (incluindo DoubleClick e Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
