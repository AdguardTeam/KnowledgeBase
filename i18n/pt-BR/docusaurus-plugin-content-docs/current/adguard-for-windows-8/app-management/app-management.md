---
title: Gerenciamento de aplicativos
sidebar_position: 1
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

![Gerenciamento de aplicativos](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/management.png)

Na seção _Gerenciamento de apps_, você pode gerenciar as configurações de roteamento e filtragem para todos os apps instalados no seu dispositivo.

Uma vez que o AdGuard detecta que um aplicativo está online, ele é automaticamente adicionado ao _Gerenciamento de aplicativos_, e seu tráfego é roteado através do AdGuard.

Por padrão, o AdGuard filtra todo o tráfego, mas você pode escolher o que excluir.

O AdGuard também filtra o tráfego HTTPS, pois a maioria dos sites hoje utiliza HTTPS. Isto é especialmente importante para bloquear anúncios em sites como youtube.com, facebook.com e x.com, onde é impossível remover anúncios sem filtragem HTTPS.

Quando o roteamento e a filtragem estão ativados para um aplicativo, os ícones abaixo de cada aplicativo aparecerão em verde.

Você pode deixar as configurações como estão, desativar tanto a filtragem quanto o roteamento, ou ajustá-los manualmente para cada aplicativo. Você também pode acessar as estatísticas do aplicativo.

![Estatísticas do aplicativo](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Aplicativos “sem problemas” e “problemáticos”

A maioria dos aplicativos funciona corretamente quando a filtragem está ativada. Alguns aplicativos são considerados "problemáticos" e podem não funcionar corretamente quando roteados pelo AdGuard. É por isso que você poderá ver o seguinte aviso ao tentar rotear ou realizar a filtragem em todos os aplicativos:

Para garantir o funcionamento adequado de todos os aplicativos instalados no seu dispositivo, recomendamos que você faça o roteamento apenas dos aplicativos sem problemas pelo AdGuard.
