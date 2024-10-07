---
title: Problemas conhecidos
sidebar_position: 2
---

Última atualização: 20 de setembro de 2022

Entender este artigo pode exigir algum conhecimento básico sobre criptografia, TLS e HTTPS.

Primeiro, observe este diagrama simples que mostra a estrutura geral do protocolo HTTPS:

![O que é filtragem HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

O AdGuard copia as propriedades da conexão TLS que seu navegador usa:

- O AdGuard usa a mesma versão TLS
- O AdGuard usa os mesmos métodos de criptografia (cifras) do seu navegador

Efetivamente, isso significa que se você usar um navegador moderno e seguro, ele levará em consideração todos os problemas conhecidos de TLS e não tentará usar cifras inseguras.

**O que o AdGuard faz quando há dúvidas sobre a validade do certificado?** Nesses casos, o AdGuard interrompe completamente a filtragem de todas as conexões com esse domínio e deixa o navegador responsável por todas as decisões.

## Problemas conhecidos

A filtragem HTTPS no AdGuard tem suas desvantagens. Quase todos eles estão programados para serem eliminados nas próximas versões do AdGuard.

Todos os problemas que conhecemos e as estimativas de suas correções estão listados abaixo.

### Inspecionando o certificado original

A desvantagem mais importante do mecanismo de filtragem HTTPS é que ele oculta o certificado real de um site. Você não pode simplesmente verificar o certificado original porque só pode ver o emitido pelo AdGuard.

Este problema é resolvido no [Assistente do navegador](https://adguard.com/adguard-assistant/overview.html). Esta extensão do navegador ajuda você a gerenciar a filtragem diretamente do navegador e permite que você inspecione o certificado original de qualquer site.

### Transparência do Certificado

Graças à criptografia moderna, os navegadores geralmente conseguem detectar sites maliciosos que possuem certificados SSL falsos ou falsificados. No entanto, os mecanismos criptográficos atuais não são tão bons em detectar sites maliciosos se eles forem provisionados com certificados emitidos por engano ou certificados que foram emitidos por uma autoridade de certificação (CA) que foi comprometida ou se tornou desonesta. A Transparência de Certificados visa remediar essas ameaças baseadas em certificados, tornando a emissão e a existência de certificados SSL abertas ao escrutínio de proprietários de domínio, CAs e usuários de domínio.

Os produtos AdGuard que usam [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partir da versão **1.11** implementarão uma política baseada na [Política de transparência de certificados do Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Tem comentários ou sugestões?

Se você quiser adicionar algo, relatar algum erro ou fazer uma pergunta, entre em contato conosco em: `devteam@adguard.com`.
