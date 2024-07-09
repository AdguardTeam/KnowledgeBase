---
title: Proteção do Safari
sidebar_position: 1
---

:::info

Este artigo é sobre o AdGuard para iOS, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

### Bloqueadores de conteúdo {#content-blockers}

Os bloqueadores de conteúdo servem como "armazenamento" para regras de filtragem que realizam o trabalho real de bloqueio de anúncios e rastreamento. O AdGuard para iOS contém seis bloqueadores de conteúdo: Geral, Privacidade, Social, Segurança, Personalizado e Outros. Anteriormente, a Apple permitia apenas que cada bloqueador de conteúdo contivesse no máximo 50 mil regras de filtragem, mas com o lançamento do iOS 15 o limite superior passou para 150 mil regras.

Informações sobre todos os bloqueadores de conteúdo, seus status, quais filtros temáticos eles incluem no momento e o número total de regras de filtragem usadas podem ser encontrados na respectiva tela em _Configurações avançadas_ (toque no ícone de engrenagem no canto inferior direito → _Geral_ → _Configurações avançadas_ → _Bloqueadores de conteúdo_).

![Bloqueadores de conteúdo \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Mantenha todos os bloqueadores de conteúdo ativados para obter a melhor qualidade de filtragem.

:::

### Filtros {#filters}

O trabalho dos bloqueadores de conteúdo é baseado em filtros, também chamados de listas de filtros. Cada filtro é uma lista de regras de filtragem. Se você tiver um bloqueador de anúncios ativado durante a navegação, ele verifica constantemente as páginas visitadas e os elementos nelas contidos em relação a essas regras de filtragem e bloqueia tudo o que for relevante. As regras são desenvolvidas para bloquear anúncios, rastreadores e muito mais.

Todos os filtros estão agrupados em categorias temáticas. Para ver a lista completa dessas categorias (não confundir com bloqueadores de conteúdo), abra a seção _Proteção_ tocando no ícone de escudo e vá para _Proteção Safari_ → _Filtros_.

! [Grupos de filtros \*mobile_border] (https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Há oito delas, cada categoria reúne vários filtros que servem e compartilham uma finalidade comum, ou seja, bloquear anúncios, widgets de mídia social, avisos de cookies e proteger o usuário contra fraudes online. Para decidir quais filtros atendem às suas necessidades, leia suas descrições e navegue pelas tags (`anúncios`, `privacidade`, `recomendado`, etc.).

:::note

Mais filtros habilitados não garantem que haverá menos anúncios. Um grande número de filtros ativados simultaneamente reduz a qualidade do bloqueio de anúncios.

:::

A categoria de filtros personalizados fica vazia por padrão para que os usuários adicionem seus filtros por URL. Você pode encontrar filtros na Internet ou até mesmo tentar [criar um você mesmo](/general/ad-filtering/create-own-filters).

### Regras de usuário {#user-rules}

Aqui você pode adicionar novas regras, inserindo-as manualmente ou usando [a ferramenta de bloqueio manual do AdGuard no Safari](#assistant). Use esta ferramenta para personalizar a filtragem do Safari sem adicionar uma lista inteira de filtros.

Aprenda a [criar seus próprios filtros de anúncios](/general/ad-filtering/create-own-filters). Mas observe que muitos deles não funcionam no Safari no iOS.

![Tela de regras do usuário \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Lista de permissões {#allowlist}

A terceira seção da tela _Proteção Safari_. Se você deseja desativar o bloqueio de anúncios em um determinado site, a lista de permissões será útil. Ele permite adicionar domínios e subdomínios às exclusões. O AdGuard para iOS possui um recurso de importação/exportação para que a lista de permissões de um dispositivo possa ser facilmente transferida para outro.
