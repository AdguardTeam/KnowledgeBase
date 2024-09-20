---
title: Possíveis vazamentos de DNS
sidebar_position: 9
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard para Windows permite que os usuários especifiquem um endereço de servidor DNS para resolver consultas em vez do servidor DNS do sistema, que é fornecido pelo seu ISP se não for substituído nas configurações do sistema. Usar um servidor DNS não padrão pode proteger seu tráfego DNS contra interceptação do ISP. Além disso, ao escolher um servidor DNS criptografado e/ou filtrante, você obtém outra camada de proteção contra ameaças e anúncios irritantes.

Muitos usuários do AdGuard para Windows gostam do recurso de proteção DNS. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. Neste artigo, explicaremos por que isso acontece e como evitá-lo.

## Endereço DNS de bootstrap

Os endereços dos servidores DNS podem ser escritos como IPs ou nomes de domínio. No caso dos endereços IP não há dificuldades: o AdGuard encaminha a solicitação DNS diretamente para o servidor especificado no módulo de proteção DNS. No entanto, endereços de servidores DNS criptografados, como DoT ou DoH, são geralmente escritos como nomes de domínio. Neste caso, para primeiro resolver o endereço do servidor DNS criptografado, o AdGuard envia uma consulta DNS para o endereço de inicialização, que é por padrão um servidor DNS do sistema. Essa conexão é o que os serviços de verificação consideram um vazamento.

**Para eliminar esse vazamento:**

- vá para *Configurações avançadas*
- role para baixo até a seção *Lista de endereços de bootstrap personalizados*
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- clique em *Salvar*

## Servidor DNS fallback

Pode ser que o AdGuard não consiga acessar o servidor especificado devido a uma conexão de Internet fraca, à expiração do tempo limite definido por padrão ou a alguns problemas relacionados ao servidor. Neste caso, ele se conectará ao servidor substituto, que por padrão é um servidor DNS do sistema. Esta conexão também será considerada pelo serviço de verificação como vazamento.

**Para eliminar esse vazamento:**

- vá para *Configurações avançadas*
- role para baixo até a seção *Servidores de fallback*
- marque a opção *Usar servidores personalizados*
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

ou

- vá para *Configurações avançadas*
- role para baixo até a seção *Servidores de fallback*
- marque a opção *Não usar servidores substitutos*

ou

- vá para *Configurações avançadas*
- role para baixo até a seção *Período de tempo limite do servidor DNS*
- insira um número grande arbitrário
