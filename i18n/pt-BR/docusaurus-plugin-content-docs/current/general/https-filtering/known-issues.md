---
title: Problemas conhecidos
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Última atualização: 17 de setembro de 2024

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

Este problema pode ser resolvido de 2 maneiras:

- Usando nosso [Assistente do AdGuard](https://adguard.com/adguard-assistant/overview.html). Esta extensão do navegador ajuda você a gerenciar a filtragem diretamente do navegador e permite que você inspecione o certificado original de qualquer site

  ![Certificado do Assistente de navegador *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Ao visitar a seção de *Atividade recente* no AdGuard para Android ou a seção de *Registro de filtragem* no AdGuard para Windows e AdGuard para macOS. Enquanto no Assistente do Navegador você só pode ver o certificado do site, em Atividade recente você pode inspecionar o certificado de qualquer servidor usado em uma solicitação ou navegador, com ou sem o Assistente de navegador. Para visualizar o certificado usando este método, siga as instruções abaixo.

#### Inspecionar certificado original no AdGuard para Android

1. Clique no ícone de estatísticas na barra de navegação.
2. Vá para *Atividade recente*.
3. Clique na solicitação cujo certificado você deseja inspecionar para abrir os detalhes da solicitação.
4. Desça até *Certificado original*. Clique para mais informações.

![Atividade recente AdGuard para Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspecione o certificado original no AdGuard para Windows

1. Vá para *Configurações* → *Bloqueador de anúncios* → *Registro de filtragem*.
2. Clique na solicitação cujo certificado você deseja inspecionar para abrir os detalhes da solicitação.
3. Na seção *TLS*, clique em *Ver certificado do site*.

![Registro de filtragem AdGuard para Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspecione o certificado original no AdGuard para macOS

1. Clique no ícone de engrenagem. No menu suspenso, vá para *Avançado* → *Registro de filtragem...*.
2. Clique na solicitação cujo certificado você deseja inspecionar para abrir os detalhes da solicitação.
3. Clique em *Ver certificado*.

![Registro de filtragem do AdGuard para Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparência do Certificado

Graças à criptografia moderna, os navegadores geralmente conseguem detectar sites maliciosos que possuem certificados SSL falsos ou falsificados. No entanto, os mecanismos criptográficos atuais não são tão bons em detectar sites maliciosos se eles forem provisionados com certificados emitidos por engano ou certificados que foram emitidos por uma autoridade de certificação (CA) que foi comprometida ou se tornou desonesta. A Transparência de Certificados visa remediar essas ameaças baseadas em certificados, tornando a emissão e a existência de certificados SSL abertas ao escrutínio de proprietários de domínio, CAs e usuários de domínio.

Os produtos AdGuard que usam [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partir da versão **1.11** implementarão uma política baseada na [Política de transparência de certificados do Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Tem comentários ou sugestões?

Se você quiser adicionar algo, relatar algum erro ou fazer uma pergunta, entre em contato conosco em: `devteam@adguard.com`.
