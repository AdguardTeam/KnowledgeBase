---
title: Como usar o Samsung Pay com o AdGuard na Coreia do Sul
sidebar_position: 16
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Vários usuários encontraram um problema em que o Samsung Pay não funciona enquanto o AdGuard está em execução. Esse problema ocorre quase exclusivamente em dispositivos registrados na Coreia do Sul.

O que está causando esse problema? Às vezes, o Samsung Pay não funciona em dispositivos com serviços VPN em execução, e o AdGuard é um desses aplicativos. Por padrão, o AdGuard usa uma VPN local para filtrar o tráfego, o que pode causar problemas ao usar o Samsung Pay.

Como consequência, os usuários tiveram que desabilitar o AdGuard ao fazer pagamentos com o Samsung Pay. Isso pode ser evitado com o recurso *Detectar Samsung Pay*. Quando esta opção está ativada, o aplicativo AdGuard é pausado sempre que o usuário abre o aplicativo Samsung Pay e retoma quando o aplicativo é fechado.

:::note

Este recurso funcionará somente se o modo de filtragem de VPN local for escolhido nas configurações do AdGuard. Se outro modo estiver sendo usado, o Samsung Pay funcionará sem interrupções.

:::

Para habilitar *Detectar Samsung Pay*, siga estas etapas:

1. Vá para *Configurações* → *Geral* → *Avançado*→ *Configurações de baixo nível*.

1. Role até *Detectar Samsung Pay* e mova o controle deslizante para a direita.

1. Toque em *Permitir permissões* e dê ao AdGuard acesso a informações sobre o uso de outros aplicativos.

Precisamos dele para coletar estatísticas sobre a operação do Samsung Pay para que o recurso *Detectar Samsung Pay* funcione.

Após habilitar esse recurso, ao alternar do Samsung Pay para o AdGuard, a seguinte mensagem aparecerá, conforme mostrado na captura de tela.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Como alternativa, você pode desabilitar a filtragem do Samsung Pay em *Gerenciamento de aplicativos*. Basta acessar a tela *Gerenciamento de aplicativos* (terceira guia a partir da parte inferior), localizar o Samsung Pay na lista e desativar o botão em *Rotear tráfego por meio do AdGuard*.
