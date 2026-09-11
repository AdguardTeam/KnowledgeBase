---
title: Configurações de baixo nível
sidebar_position: 6
---

:::info

Este artigo é sobre o AdGuard para iOS, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

![Configurações de baixo nível \*mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Para abrir as _Configurações de baixo nível_, vá para _Configurações_ → _Geral_ → (Ative o _Modo avançado_ se estiver desligado) → _Configurações avançadas_ → _Configurações de baixo nível_.

Na maioria das vezes, é melhor deixar as configurações nesta seção intactas: use-as apenas se tiver certeza do que está fazendo ou se a equipe de suporte as solicitar. Mas algumas configurações podem ser alteradas sem qualquer risco.

### Bloquear IPv6 {#blockipv6}

Para qualquer consulta de DNS enviada para obter um endereço IPv6, nosso aplicativo retorna uma resposta vazia (como se esse endereço IPv6 não existisse). Agora existe a opção de não retornar endereços IPv6. Neste ponto, a descrição desta função é muito técnica: configurar ou desactivar o IPv6 é uma função exclusiva para usuários avançados. Se você for um deles, é interessante saber que agora temos esse recurso; se não for, não há necessidade de se aprofundar nele.

### Servidores Bootstrap e Fallback {#bootstrap-fallback}

Fallback é um servidor DNS de backup. Se você escolheu um servidor DNS e algo aconteceu com ele, será necessário um substituto para configurar o servidor DNS de backup até que o servidor principal responda.

Com o Bootstrap é um pouco mais complicado. Para que o AdGuard para iOS use um servidor DNS seguro personalizado, nosso aplicativo precisa primeiro obter seu endereço IP. Para isso, o DNS do sistema é usado por padrão, mas isso nem sempre é possível por vários motivos. Nesses casos, o Bootstrap pode ser usado para obter o endereço IP do servidor DNS seguro selecionado. Aqui estão dois exemplos para ilustrar quando um servidor Bootstrap personalizado pode ajudar:

1. Quando um servidor DNS padrão do sistema não retorna o endereço IP de um servidor DNS seguro e não é possível usar um servidor seguro.
2. Quando nosso aplicativo e VPN de terceiros são usados simultaneamente e não é possível usar o DNS do sistema como Bootstrap.
