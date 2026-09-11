---
title: Extensão para Safari
sidebar_position: 3
---

As extensões da Web adicionam funcionalidades personalizadas ao Safari. Você pode encontrar [mais informações sobre extensões aqui](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Qual é a aparência da extensão no Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

A extensão para Safari do AdGuard é uma ferramenta que aproveita os novos recursos do iOS 15. Ela serve para otimizar os recursos do AdGuard para iOS. Com ela, o AdGuard pode aplicar regras de filtragem avançadas e, como consequência, bloquear mais anúncios.

## O que ele faz

Por padrão, o Safari fornece apenas ferramentas básicas para bloqueadores de conteúdo. Essas ferramentas não oferecem o nível de desempenho encontrado em bloqueadores de conteúdo em outros sistemas operacionais (Windows, Mac, Android). Por exemplo, aplicativos AdGuard em outras plataformas podem usar armas poderosas contra anúncios, como [regras CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Seletores CSS Estendidos](/general/ad-filtering/create-own-filters#extended-css-selectors) e [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Infelizmente, essas ferramentas são absolutamente necessárias quando se trata de casos mais complexos, como anúncios pre-roll no YouTube.

A extensão para Safari do AdGuard é um complemento ao AdGuard, dando-lhe a capacidade de empregar esses tipos de regras de filtragem.

Além disso, a extensão Safari Web do AdGuard pode ser usada para gerenciar rapidamente o AdGuard para iOS diretamente do navegador. Toque no botão *Extensões* (o ícone de quebra-cabeça). Dependendo do tipo de dispositivo, ele pode estar localizado à esquerda ou à direita da barra de endereço. Encontre o **AdGuard** na lista e toque nele.

![Menu da extensão Web *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Em iPads, a extensão Safari Web do AdGuard pode ser acessada diretamente tocando no ícone do AdGuard na barra de endereço do navegador.

Você verá a seguinte lista de opções:

- **Ativando/desativando a proteção no site**. Desativar a opção desativará completamente o AdGuard para o site atual e adicionará uma respectiva regra de exclusão. Ativar novamente o interruptor retomará a proteção do site e excluirá a regra. Qualquer alteração desse tipo exigirá algum tempo para entrar em vigor.

- **Bloqueando elementos na página manualmente**. Toque no botão *Bloquear elementos nesta página* para exibir um pop-up para bloqueio de elemento. Selecione qualquer elemento da página que deseja ocultar, ajuste a zona de seleção, visualize as alterações e confirme a remoção. Uma regra de filtragem correspondente será adicionada ao AdGuard (que você poderá desativar ou excluir posteriormente para reverter a alteração).

- **Relatar um problema**. Deslize para cima para exibir o botão *Reportar um problema*. Use-o para relatar um anúncio deixado para trás ou qualquer outro problema encontrado na página atual.

## Como ativar a extensão Safari Web do AdGuard

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

A extensão Safari Web do AdGuard requer acesso ao conteúdo das páginas da web para funcionar, mas não o utiliza para nenhum outro propósito que não seja o bloqueio de anúncios.

:::

### Nas configurações do iOS

A extensão da Web não é uma ferramenta independente e requer o AdGuard para iOS. Se você não tiver o AdGuard para iOS instalado em seu dispositivo, [instale-o primeiro](../installation) e conclua o processo de integração para prepará-lo para o trabalho.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### No Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
