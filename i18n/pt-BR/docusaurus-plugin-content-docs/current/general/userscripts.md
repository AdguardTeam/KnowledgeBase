---
title: Userscripts
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Eles modificam ou ampliam a funcionalidade de um ou mais websites. Muitos usuários do AdGuard já podem estar familiarizados com scripts de usuário como o Assistente AdGuard, o Bloqueador de pop-ups e o AdGuard Extra.

:::note Aplicativos compatíveis

O AdGuard pode ampliar significativamente a funcionalidade de sites, agindo como um gerenciador de userscripts. Você pode adicionar seus scripts personalizados ou gerenciar os existentes em nossos três produtos: [AdGuard para Windows](/adguard-for-windows/features/extensions), [AdGuard para Android](/adguard-for-android/features/settings#userscripts) e [AdGuard para Mac](/adguard-for-mac/features/extensions).

:::

## Scripts recomendados do AdGuard

Esses scripts de usuário vêm diretamente dos desenvolvedores do AdGuard e podemos garantir que são eficazes e seguros. Para alguns dos scripts de usuário desenvolvidos por terceiros que consideramos bons e confiáveis, [role para baixo até a próxima seção](#top-picks). Você também pode encontrar alguns dos [sites populares com scripts](#more-userscripts) abaixo, mas lembre-se de que sempre que você baixa um userscript de uma fonte desconhecida, você se expõe a um certo risco, pois alguns scripts podem ser prejudiciais para o seu computador.

### AdGuard Extra

Uma extensão que bloqueia anúncios em casos difíceis, quando a abordagem usual baseada em filtros não é suficiente. O AdGuard Extra vem pré-instalado com todas as versões premium do AdGuard, então você não precisa fazer nada para ativá-lo. No entanto, se quiser usá-lo junto com a extensão do navegador AdGuard ou qualquer outro bloqueador de anúncios, você precisará usar uma extensão adicional. Saiba mais sobre este userscript e como instalá-lo no [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### Bloqueador de pop-ups do AdGuard

O nome fala por si: ele bloqueia pop-ups, um dos tipos de anúncios mais irritantes em páginas da web. Saiba mais sobre este userscript, seus principais recursos e como instalá-lo no [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Bloqueador de pop-ups do AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### Assistente AdGuard (versão antiga)

Esta extensão personalizada foi projetada para controlar a filtragem diretamente da página do navegador (bloqueio manual, exclusão do site, etc.).

:::note

Essa versão do Assistant é antiga e não faz sentido usá-la em novos sistemas, pois foi substituída pelo [Assistente de navegador](https://adguard.com/adguard-assistant/overview.html). Mas o Assistente antigo pode ser útil se não houver um Assistente de Navegador para o seu navegador. Se este for o seu caso, você pode aprender como instalar o Assistente AdGuard no [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Desativar AMP

Um script pré-instalado apenas no AdGuard para Android. Ele desativa o AMP (Accelerated Mobile Pages) na página de resultados de pesquisa do Google. Saiba mais sobre este userscript e como instalá-lo no [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Desativar AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Principais opções fora do AdGuard{#top-picks}

Esses scripts de usuário não são desenvolvidos pela AdGuard e, portanto, não podemos dar 100% de garantia de que eles são seguros e/ou funcionam em todos os momentos. No entanto, de acordo com a nossa experiência, eles merecem uma recomendação, pois todos conquistaram a sua boa reputação.

### Don't track me Google

Este script remove o recurso de rastreamento do Google dos links nos resultados de pesquisa do Google. Ele acelera o carregamento dos resultados da pesquisa e permite clicar com o botão direito ou tocar para copiar o link do URL.

Seu código fonte está [disponível no GitHub](https://github.com/Rob--W/dont-track-me-google). Este userscript pode ser baixado de [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e instalado em qualquer aplicativo baseado em no CoreLibs do AdGuard.

### microShield

Um userscript para pessoas que visitam sites coreanos e alguns sites internacionais. O userscript do microShield bloqueia anúncios e anti-adblock do Ad-Shield. Seu código-fonte original está disponível em [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) e [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Este userscript pode ser instalado em aplicativos baseados no CoreLibs do AdGuard, Violentmonkey, Tampermonkey e [quoid/userscripts](https://github.com/quoid/userscripts). Saiba mais sobre o microShield e como instalá-lo no [GitHub](https://github.com/List-KR/microShield).

## Onde obter mais userscripts?{#more-userscripts}

Como os userscripts são criados principalmente por entusiastas, você deve ter cuidado ao instalá-los. Qualquer script de fonte desconhecida acarreta um risco potencial. No entanto, há uma grande variedade de scripts interessantes que, se instalados com cuidado e responsabilidade, podem realmente tornar o uso de alguns sites mais conveniente.

Aqui descreveremos alguns dos catálogos de userscript mais populares.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) é um catálogo de userscripts dos criadores do Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) é um catálogo de userscripts de código aberto escrito em nodeJS. Ele não tem moderação, portanto, fique atento a qualquer script suspeito.

### Comunidade

Se você gosta da ideia de personalizar seu navegador com a ajuda de userscripts e tem alguma dúvida, pode perguntar em um destes sites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Desenvolvimento

### Solicitar licença

Se você estiver desenvolvendo seu próprio script personalizado e quiser testar como ele funciona com o AdGuard, solicite uma chave de licença beta para o aplicativo.

Para obtê-la, envie um email para devteam@adguard.com com as seguintes informações:

**Assunto:** Solicitação de licença de autor do Userscript

**Corpo da mensagem:** Por favor, conte-nos sobre os userscripts nos quais você está trabalhando.

Aqui está um [link mailto](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Compatibilidade

#### Bloqueio de metadados

##### Propriedades compatíveis

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

##### Propriedades não compatíveis

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Funções GM compatíveis

O AdGuard oferece suporte às antigas funções GM\_ e à nova API GM4 que usa o objeto GM.

##### Valores

:::note

Todas as funções antigas do Greasemonkey listadas estão obsoletas, mas ainda são suportadas.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Aqui](https://wiki.greasespot.net/GM.info) você pode encontrar mais informações sobre a API Greasemonkey.

### Exemplo

```javascript
// ==UserScript==
// @name            Name as shown to the user when locale is english or unknown
// @name:ru         Name as shown to the user when locale is russian
// @description     Description as shown to the user when locale is english or unknown
// @description:ru  Description as shown to the user when locale is russian
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```
