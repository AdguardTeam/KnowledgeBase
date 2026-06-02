---
title: Configurações de rede
sidebar_position: 3
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

Esta seção permite que você gerencie como o AdGuard filtra seu tráfego na Internet e oferece ferramentas adicionais para controlar recursos relacionados à rede.

![Configurações de rede](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Use AdGuard como um proxy HTTP

Ative esta opção para fazer o AdGuard funcionar como um proxy HTTP. Todo o tráfego que passar por ele será filtrado — não apenas no seu computador, mas também em outros dispositivos na sua rede doméstica.

Para filtrar o tráfego em outros dispositivos, instale o certificado raiz do AdGuard neles e configure o proxy manualmente.

Outras configurações são ativadas por padrão.

## Filtragem HTTPS

A maioria dos sites utiliza criptografia HTTPS hoje em dia. Sem filtragem HTTPS, o AdGuard não pode bloquear anúncios em sites como YouTube, Facebook ou X (Twitter).

Recomendamos manter a opção _Filtrar HTTPS_ ativada, a menos que você tenha um motivo específico para desativá-la.

Com esta opção você pode:

- Reinstalar ou baixar o certificado AdGuard

- Adicionar sites a uma lista que não será filtrada

- Escolher se deve filtrar sites com certificados EV (Validação Estendida)

## Proxy para atualizações de aplicativos e filtros

Aqui você pode escolher qual proxy o AdGuard deve usar para baixar atualizações de filtro ou novas versões de aplicativos — o proxy do sistema, um proxy personalizado ou nenhum proxy.

![Configurações de proxy](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Usar o driver SockFilter

Ative esta opção para usar o driver SockFilter, que ajuda a bloquear anúncios e rastreadores em aplicativos no Windows 8 e versões posteriores. Se essa opção estiver desativada, o AdGuard passará a usar o driver WFP mais antigo.

SockFilter foi introduzido pela primeira vez na versão v8.0 RC. É um driver de rede em modo kernel _experimental_ e leve que funciona no nível de socket (TCP/UDP). Em vez de inspecionar ou modificar pacotes enquanto eles percorrem toda a pilha de rede do Windows, um filtro de soquete intercepta chamadas de socket (por exemplo, connect, send, receive, bind) em um nível de abstração mais alto e mais estável. Isso o torna ideal para aplicações que precisam monitorar ou controlar a atividade de rede sem processamento profundo de pacotes.

Quando totalmente testado e implementado, o SockFilter tem o potencial de trazer várias vantagens em relação a outros drivers:

- **Ele opera em um nível mais alto, no nível de soquete**: o SockFilter trabalha com operações de soquete em vez de pacotes brutos, tornando-o menos complexo e mais estável do que a filtragem de pacotes de baixo nível do WFP.
- **Sem interferência com outros drivers de rede**: Como fica acima dos filtros WFP de VPN, firewall e antivírus, evita problemas de ordenação de filtros e conflitos de compatibilidade comuns na stack WFP.
- **Risco de BSODs relacionados ao NETIO drasticamente reduzido**: o SockFilter não é executado dentro do pipeline de pacotes do NETIO, portanto evita os cenários típicos de falha causados por callouts do WFP que manipulam incorretamente buffers, resultados de classificação ou memória de pacotes.

Quando se trata de desvantagens, o driver SockFilter vê apenas operações no nível de soquete e não captura o tráfego gerado por outros drivers de kernel ou componentes que ignoram a API Winsock padrão. Do ponto de vista de rede de baixo nível, isso pode ser visto como uma limitação, pois o driver não pode acessar pacotes brutos nem inspecionar tráfego não relacionado a sockets. No entanto, para um aplicativo de bloqueio de anúncios, esse comportamento não é apenas aceitável, mas ideal. Todo o tráfego relevante de navegadores e aplicativos em modo de usuário passa por soquetes padrão, e é exatamente isso que precisamos controlar. Ao mesmo tempo, ignorar o tráfego de drivers de baixo nível remove complexidade desnecessária, evita problemas de compatibilidade e mantém o sistema estável.
