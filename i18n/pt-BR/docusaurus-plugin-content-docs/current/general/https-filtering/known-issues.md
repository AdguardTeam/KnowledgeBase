---
title: Problemas conhecidos
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

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

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparência do Certificado

Graças à criptografia moderna, os navegadores geralmente conseguem detectar sites maliciosos que possuem certificados SSL falsos ou falsificados. No entanto, os mecanismos criptográficos atuais não são tão bons em detectar sites maliciosos se eles forem provisionados com certificados emitidos por engano ou certificados que foram emitidos por uma autoridade de certificação (CA) que foi comprometida ou se tornou desonesta. A Transparência de Certificados visa remediar essas ameaças baseadas em certificados, tornando a emissão e a existência de certificados SSL abertas ao escrutínio de proprietários de domínio, CAs e usuários de domínio.

Os produtos AdGuard que usam [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partir da versão **1.11** implementarão uma política baseada na [Política de transparência de certificados do Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Tem comentários ou sugestões?

Se você quiser adicionar algo, relatar algum erro ou fazer uma pergunta, entre em contato conosco em: `devteam@adguard.com`.
