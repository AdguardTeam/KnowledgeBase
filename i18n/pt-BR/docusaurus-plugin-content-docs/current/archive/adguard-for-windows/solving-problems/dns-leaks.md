---
title: Possíveis vazamentos de DNS
sidebar_position: 10
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard para Windows permite que os usuários especifiquem um endereço de servidor DNS para resolver consultas em vez do servidor DNS do sistema, que é fornecido pelo seu ISP se não for substituído nas configurações do sistema. Usar um servidor DNS não padrão pode proteger seu tráfego DNS contra interceptação do ISP. Além disso, ao escolher um servidor DNS criptografado e/ou filtrante, você obtém outra camada de proteção contra ameaças e anúncios irritantes.

Muitos usuários do AdGuard para Windows gostam do recurso de proteção DNS. Mas alguns deles encontram o seguinte problema: uma verificação em um site como https://ipleak.net/ mostra que as solicitações são tratadas pelo servidor DNS padrão em vez do servidor selecionado. Neste artigo, explicaremos por que isso acontece e como evitá-lo.

## Endereço DNS de bootstrap

Os endereços dos servidores DNS podem ser escritos como IPs ou nomes de domínio.
No caso dos endereços IP não há dificuldades: o AdGuard encaminha a solicitação DNS diretamente para o servidor especificado no módulo de proteção DNS. No entanto, endereços de servidores DNS criptografados, como DoT ou DoH, são geralmente escritos como nomes de domínio. Neste caso, para primeiro resolver o endereço do servidor DNS criptografado, o AdGuard envia uma consulta DNS para o endereço de inicialização, que é por padrão um servidor DNS do sistema. Essa conexão é o que os serviços de verificação consideram um vazamento.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Servidor DNS fallback

Pode ser que o AdGuard não consiga acessar o servidor especificado devido a uma conexão de Internet fraca, à expiração do tempo limite definido por padrão ou a alguns problemas relacionados ao servidor. Neste caso, ele se conectará ao servidor substituto, que por padrão é um servidor DNS do sistema. Esta conexão também será considerada pelo serviço de verificação como vazamento.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

ou

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

ou

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- insira um número grande arbitrário
