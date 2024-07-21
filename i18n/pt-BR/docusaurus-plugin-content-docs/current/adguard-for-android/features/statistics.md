---
title: Estatísticas
sidebar_position: 3
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O módulo _Estatísticas_ pode ser acessado tocando na aba _Estatísticas_ (quarto ícone da esquerda na parte inferior da tela). Esse recurso oferece uma visão completa do que está acontecendo com o tráfego no seu dispositivo: quantas solicitações estão sendo enviadas e para quais empresas, quantos dados estão sendo carregados e baixados, quais solicitações estão sendo bloqueadas e muito mais. Você pode optar por exibir as estatísticas do período selecionado: 24 horas, 7 dias, 30 dias ou o tempo todo.

![Estatísticas \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

As estatísticas são categorizadas em diferentes seções.

### Solicitações

Esta seção mostra o número de anúncios bloqueados, rastreadores e o número total de solicitações. Você pode filtrar solicitações por tipo de dados: dados móveis, Wi-Fi ou todos os dados combinados.

_Atividade recente_, anteriormente conhecida como _Registro de filtragem_, mostra as últimas 10.000 solicitações processadas pelo AdGuard. Toque no menu de três pontos (⋮) e depois em _Personalizar_ para filtrar solicitações por status (_normal_, _bloqueado_, _modificado_ ou _lista de permissão_) ou origem (_primária_ ou _terceiros_).

Você pode tocar em uma solicitação para visualizar seus detalhes e adicionar uma regra de bloqueio ou desbloqueio com um único toque.

### Uso de dados

Esta seção mostra a quantidade de dados baixados e carregados e o tráfego economizado para o tipo de dados selecionado (dados móveis, Wi-Fi ou todos). Toque em _salvo_, _carregado_ ou _baixado_ para visualizar o gráfico de uso de dados ao longo do tempo.

### Aplicativos

Esta seção exibe estatísticas de todos os aplicativos instalados no seu dispositivo. Você pode classificar os aplicativos pelo número de anúncios ou rastreadores bloqueados ou pelo número de solicitações enviadas.

Toque em _Ver todos os aplicativos_ para expandir a lista de seus aplicativos, classificados pelo número de anúncios, rastreadores ou solicitações.

![Lista de aplicativos \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Se você tocar em um aplicativo, poderá ver suas estatísticas completas, desde as solicitações que ele envia até os domínios e empresas que ele alcança.

### Empresas

Esta seção exibe empresas que seu dispositivo alcança. O que isso significa? O AdGuard detecta os domínios para os quais seu dispositivo envia solicitações e determina a quais empresas eles pertencem. Um banco de dados de empresas pode ser encontrado no [GitHub](https://github.com/AdguardTeam/companiesdb).

### Estatísticas de DNS

Esta seção mostra dados sobre as solicitações tratadas pela _proteção DNS_. Você pode ver o número total de solicitações enviadas e quantas foram bloqueadas pelo AdGuard em números e gráficos. Você também encontrará estatísticas sobre a quantidade de tráfego salvo e dados baixados e enviados.

### Uso da bateria

Esta seção exibe estatísticas sobre os recursos do dispositivo usados pelo AdGuard durante as últimas 24 horas. Os dados podem diferir das estatísticas exibidas nas configurações do seu dispositivo. Isso acontece porque o sistema atribui o tráfego de todos os aplicativos filtrados ao AdGuard. Assim, o dispositivo mostra que o AdGuard consome mais recursos do que realmente consome. [Leia mais sobre problemas de consumo de bateria e tráfego](/adguard-for-android/solving-problems/battery/).
