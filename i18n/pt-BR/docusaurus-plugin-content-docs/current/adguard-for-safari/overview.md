---
title: Visão geral dos recursos
sidebar_position: 1
---

:::info

Este artigo é sobre o AdGuard para Safari, que protege apenas o seu navegador Safari. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard para Safari foi projetado para estar em conformidade com as restrições da Apple para extensões de navegador de bloqueio de anúncios e é o bloqueador de anúncios mais popular para Safari. Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## Geral {#general}

![Aba Geral](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

A primeira aba é a tela Geral, onde você pode configurar itens básicos como notificações, intervalos de atualização e inicialização do AdGuard durante o início de sistema. Você também pode optar por exibir o ícone do AdGuard na barra de menu. Lá você também pode ativar os [bloqueadores de conteúdo](#contentblockers) para bloquear anúncios, rastreadores, elementos irritantes etc.

## Filtros {#filters}

![Aba Filtros](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Um filtro é uma lista de regras escritas em uma sintaxe especial. Seguindo essas regras, os bloqueadores de conteúdo podem filtrar o tráfego da web: bloqueam anúncios ou solicitações de sites maliciosos.

Os filtros são combinados em oito categorias temáticas: *Bloqueio de anúncios, Privacidade, Widgets sociais, Aborrecimentos, Segurança, Filtros específicos de idioma, Personalizados e Outros filtros*.

Leia mais sobre os [filtros do AdGuard](/general/ad-filtering/adguard-filters) ou a [filtragem de anúncios em geral](/general/ad-filtering/how-ad-blocking-works).

Na aba Filtros, você pode habilitar toda a categoria ou filtros separados. As alterações na aba Filtros são refletidas na seção Bloqueadores de conteúdo (localizada na aba Geral).

## Bloqueadores de contéudo {#contentblockers}

![Aba Bloqueadores de conteúdo](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Um bloqueador de conteúdo é um conjunto de filtros temáticos. Os filtros relacionados à privacidade estão incluídos no bloqueador de conteúdo com o nome correspondente, *AdGuard Privacy*.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[Em 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), a Apple impôs limitações aos bloqueadores de anúncios para Safari, permitindo-lhes usar apenas 50.000 regras de filtragem simultaneamente. Como esse número não é suficiente para que um bloqueador de anúncios ofereça uma filtragem de qualidade (o Filtro Base do AdGuard sozinho possui 30.000 regras de filtragem), dividimos o AdGuard para Safari em seis bloqueadores de conteúdo, cada um contendo até 50.000 regras.

[Em 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), a Apple aumentou o limite de regras de filtragem para cada bloqueador de conteúdo para 150.000 regras aplicadas simultaneamente. Em relação ao AdGuard para Safari, até 900.000 regras podem ser habilitadas para todos os seis bloqueadores de conteúdo.

Embora o limite tenha aumentado, a estrutura dos bloqueadores de conteúdo permaneceu a mesma.

Na aba Bloqueadores de conteúdo, é possível ver quais bloqueadores de conteúdo estão ativados, quantas regras cada um deles está usando e quais filtros estão funcionando.

:::tip

Você pode gerenciar os filtros ativados na aba Filtros. Na seção Bloqueadores de conteúdo, você só pode ver a lista de filtros já ativados.

:::

### AdGuard General {#adguard_general}

*AdGuard General* é um bloqueador de conteúdo que combina os filtros mais essenciais para bloquear anúncios. Recomendamos manter o AdGuard Base Filter sempre ativado.

### AdGuard Privacy {#adguard_privacy}

Este bloqueador de conteúdo é a principal ferramenta contra counters e outras ferramentas de analytics da web. O filtro *AdGuard Tracking Protection* é ativado por padrão.

### AdGuard Social {#adguard_social}

*AdGuard Social* contém filtros para botões, widgets, scripts e ícones de redes sociais. Outros filtros de elementos incômodos também podem ser encontrados nesta seção: filtros para popups, banners de aplicativos mobile, avisos de cookies e muito mais. Para ativá-los, encontre *Widgets sociais* na aba Filtros.

### AdGuard Security {#adguard_security}

Este bloqueador de conteúdo reune vários filtros relacionados à segurança. *Malware Domains Blocklist* bloqueia domínios famosos por espalhar malware e spyware. *Spam404* protege você contra fraudadores da Internet. *Lista de filtros NoCoin* interrompe criptomineradores em navegador, como o Coinhive.

### AdGuard Other {#adguard_other}

*AdGuard Outros* contém filtros com diversas funções. Por exemplo, possui um filtro que desbloqueia anúncios de busca e anúncios de autopromoção. Em alguns casos, isso ajuda a encontrar exatamente o que você está procurando, porque esses tipos de anúncios são mais relevantes e menos intrusivos do que outros.

:::note Disclaimer

We don't have any 'acceptable ads' paid by advertisers. Em vez disso, oferecemos aos usuários a opção de ver [Anúncios de pesquisa e autopromoção de sites](/general/ad-filtering/search-ads).

:::

### AdGuard Custom {#adguard_custom}

![Aba Personalizada](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Se precisar de mais filtros, você pode adicioná-los a *AdGuard Custom*. Para adicionar um filtro personalizado, insira um URL ou caminho de arquivo local no campo referente. Você pode encontrar novos filtros em [filterlists.com](https://filterlists.com/).

## Regras de usuário {#userrules}

As regras do usuário podem ser usadas para personalizar o bloqueio de anúncios. Elas podem ser adicionados manualmente, importadas ou criadas automaticamente quando você bloqueia um elemento na página. Para adicionar suas próprias regras, use uma sintaxe especial [](/general/ad-filtering/create-own-filters).

## Sobre {#about}

![Aba Sobre](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

Na aba Sobre, é possível ver informações sobre a versão atual do seu produto e links para documentos legais. Há também um link para nosso repositório no GitHub. Você pode monitorar o desenvolvimento do produto, solicitar recursos e nos informar sobre bugs.

:::note Lembrete

O AdGuard para Safari pode ser baixado gratuitamente na [App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Instruções detalhadas de configuração estão disponíveis na [Base de conhecimento](../installation).

:::
