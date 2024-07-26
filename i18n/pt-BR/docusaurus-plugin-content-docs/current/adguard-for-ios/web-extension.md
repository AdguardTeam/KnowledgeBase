---
title: Extensão para Safari
sidebar_position: 3
---

As extensões da Web adicionam funcionalidades personalizadas ao Safari. Você pode encontrar [mais informações sobre extensões aqui](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Qual é a aparência da extensão no Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

A extensão para Safari do AdGuard é uma ferramenta que aproveita os novos recursos do iOS 15. Ela serve para otimizar os recursos do AdGuard para iOS. Com ela, o AdGuard pode aplicar regras de filtragem avançadas e, como consequência, bloquear mais anúncios.

## O que ele faz

Por padrão, o Safari fornece apenas ferramentas básicas para bloqueadores de conteúdo. Essas ferramentas não permitem o nível de desempenho encontrado em bloqueadores de conteúdo em outros sistemas operacionais (Windows, Mac, Android). Por exemplo, os aplicativos AdGuard em outras plataformas podem usar armas eficazes contra anúncios, como [regras CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [seletores CSS](/general/ad-filtering/create-own-filters#extended-css-selectors) e [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Infelizmente, esses instrumentos são absolutamente necessários quando se trata de casos mais complexos, como anúncios pre-roll no YouTube, por exemplo.

A extensão para Safari do AdGuard é um complemento ao AdGuard, dando-lhe a capacidade de empregar esses tipos de regras de filtragem.

Além disso, a extensão Safari Web do AdGuard pode ser usada para gerenciar rapidamente o AdGuard para iOS diretamente do navegador. Toque no botão *Extensões* (o ícone de quebra-cabeça). Dependendo do tipo de dispositivo, ele pode estar localizado à esquerda ou à direita da barra de endereço. Encontre o **AdGuard** na lista e toque nele.

![Menu da extensão Web *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)
> Em iPads, a extensão Safari Web do AdGuard pode ser acessada diretamente tocando no ícone do AdGuard na barra de endereço do navegador.

Você verá a seguinte lista de opções:

- **Ativando/desativando a proteção no site**. Desativar a opção desativará completamente o AdGuard para o site atual e adicionará uma respectiva regra de exclusão. Ativar novamente o interruptor retomará a proteção do site e excluirá a regra. Qualquer alteração desse tipo exigirá algum tempo para entrar em vigor.

- **Bloqueando elementos na página manualmente**. Toque no botão *Bloquear elementos nesta página* para exibir um pop-up para bloqueio de elemento. Selecione qualquer elemento da página que deseja ocultar, ajuste a zona de seleção, visualize as alterações e confirme a remoção. Uma regra de filtragem correspondente será adicionada ao AdGuard (que você poderá desativar ou excluir posteriormente para reverter a alteração).

- **Relatar um problema**. Deslize para cima para exibir o botão *Reportar um problema*. Use-o para relatar um anúncio deixado para trás ou qualquer outro problema encontrado na página atual.

## Como ativar a extensão Safari Web do AdGuard

:::note

A extensão Safari Web do AdGuard requer acesso ao conteúdo das páginas da web para funcionar, mas não o utiliza para nenhum outro propósito que não seja o bloqueio de anúncios.

:::

### Nas configurações do iOS

A extensão da Web não é uma ferramenta independente e requer o AdGuard para iOS. Se você não tiver o AdGuard para iOS instalado em seu dispositivo, [instale-o primeiro](../installation) e conclua o processo de integração para prepará-lo para o trabalho.

Uma vez feito isso, abra *Configurações → Safari → Extensões*.

![Selecione "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Selecione "Extensões" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Encontre a seção **PERMITIR ESTAS EXTENSÕES** e, em seguida, encontre **AdGuard** entre as extensões disponíveis.

![Selecione "AdGuard" na seção PERMITIR ESTAS EXTENSÕES *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Toque nele e ative o interruptor. Na mesma tela, defina a permissão *Todos os sites* do AdGuard como *Permitir* ou *Perguntar*. Se você escolher *Permitir*, não será necessário dar permissão toda vez que visitar um novo site. Se você não tiver certeza, escolha *Perguntar* para conceder permissões para cada site individualmente.

![Configurações de extensão *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### No Safari

Como alternativa, você também pode ativar a extensão AdGuard no navegador Safari. Toque no botão *Extensões* (se você não o vir próximo à barra de endereço, toque no ícone `aA`).

![No Safari, toque no ícone A *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Em seguida, encontre a opção *Gerenciar extensões* na lista e toque nela. Na janela aberta, ative a chave ao lado de **AdGuard**.

![Extensões *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Extensões *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Se você usar esse método, talvez seja necessário acessar as configurações do Safari para conceder à extensão do AdGuard as permissões necessárias.

Agora você deve ser capaz de ver o AdGuard entre as extensões disponíveis. Toque nele e depois no ícone amarelo **i**. Habilite **Proteção avançada** tocando no botão *Ativar* e confirmando a ação.

:::note

Se você usar o AdGuard para iOS sem assinatura Premium, não será possível ativar **Proteção avançada**.

:::

Alternativamente, você pode ativar **Proteção avançada** diretamente do aplicativo, na guia **Proteção** (a segunda da esquerda na linha inferior do ícone).

A extensão Safari Web do AdGuard funciona apenas nas versões 15 e posteriores do iOS.
