---
title: Filtros
sidebar_position: 1
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O bloqueio de anúncios é a principal funcionalidade de qualquer bloqueador de anúncios, e a extensão de navegador AdGuard não é uma exceção. O bloqueio de anúncios é baseado em filtros, ou seja, em conjuntos de regras escritas em uma linguagem especial. Estas regras indicam quais elementos devem ser bloqueados ou não. O AdGuard interpreta as regras e modifica as solicitações da web com base nelas. Como resultado, você para de ver anúncios nas páginas da web que você acessa.

![Filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos os filtros são agrupados de acordo com sua função. Por exemplo, existem categorias para filtros de bloqueio de anúncios, filtros de proteção de privacidade, filtros relacionados a mídias sociais, etc. Você pode ativar filtros individuais ou um grupo de filtros de uma só vez.

![Filtros de bloqueio de anúncios \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtros personalizados

Embora os recursos de outros grupos de filtros sejam mais ou menos previsíveis, existe um grupo chamado _Personalizado_ que pode gerar dúvidas.

![Filtros personalizados \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Nesta aba, você pode adicionar filtros que não estão presentes na extensão por padrão. Existem muitos [filtros disponíveis ao público na Internet](https://filterlists.com). Além disso, você pode criar e adicionar seus próprios filtros. Na verdade, você pode criar qualquer conjunto de filtros e personalizar o bloqueio de anúncios da maneira que desejar.

Para adicionar um filtro, basta clicar em _Adicionar filtro personalizado_, inserir a URL ou o caminho do arquivo do filtro que deseja adicionar e clicar em _Próximo_.

![Adicionando um filtro personalizado \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Regras do usuário {#user-rules}

_Regras do usuário_ é outra ferramenta que ajuda a personalizar o bloqueio de anúncios.

![Regras de usuário \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Existem várias maneiras de adicionar novas regras. O mais simples é apenas digitar uma regra, mas isso requer um pouco de conhecimento da [sintaxe da regra](/general/ad-filtering/create-own-filters).

Você também pode importar uma lista de filtros pronta para uso de um arquivo de texto. **Certifique-se de que as diferentes regras estejam separadas por quebras de linha.** Observe que a importação de uma lista de filtros pronta para uso é melhor feita na guia _Filtros personalizados_.

Além disso, você pode exportar suas próprias regras de filtragem. Esta opção é boa para transferir sua lista de regras entre navegadores ou dispositivos.

Quando você adiciona um site à lista de permissões (mais sobre isso abaixo) ou usa a ferramenta Assistente para ocultar um elemento na página, uma regra correspondente também é salva nas _Regras de usuário_.

## Lista de permissões

A _lista de permissões_ é usada para excluir determinados sites da filtragem. As regras de bloqueio não se aplicam aos sites da lista.

![Lista de permissões \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

A _lista de permissões_ também pode ser invertida: você pode desbloquear anúncios em qualquer lugar, exceto nos sites adicionados a esta lista. Para fazer isso, ative a opção _Inverter lista de permissões_.

![Inverter lista de permissões \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Você também pode importar e exportar listas de permissões existentes. Isso é útil, por exemplo, se você deseja aplicar as mesmas regras de permissão em cada um dos seus navegadores.
