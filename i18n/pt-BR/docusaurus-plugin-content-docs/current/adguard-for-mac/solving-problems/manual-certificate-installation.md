---
title: Instalação manual do certificado
sidebar_position: 1
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard para Mac precisa instalar o certificado root no armazenamento de certificados para poder [filtrar o tráfego HTTPS](/general/https-filtering/what-is-https-filtering). Esta ação é executada automaticamente na maioria dos casos quando você executa o aplicativo pela primeira vez, mas os usuários de navegadores baseados em Gecko (Firefox, Waterfox etc.) que possuem uma senha mestra configurada para seu navegador podem ser obrigados a realizar etapas adicionais (porque esses navegadores usam seu próprio armazenamento de certificados em vez do armazenamento do sistema). Eles precisam inserir a senha mestra quando solicitado (para conceder o acesso do AdGuard ao armazenamento do certificado) ou instalar manualmente o certificado.

Para instalar manualmente o certificado num navegador semelhante ao Firefox:

  1. Abra *Preferências*

  2. Vá para *Privacidade & Segurança* → *Certificados*

  3. Clique em *Ver Certificados*

  4. Navegue até a guia *Autoridades* e clique no botão *Importar...*

  5. Selecione o arquivo `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` ou baixe-o em http://local.adguard.org/cert usando um navegador baseado em Chromium (ex.: Google Chrome ou o novo Microsoft Edge) e com uma filtragem HTTPS em execução no AdGuard

As ações exatas necessárias para diferentes navegadores baseados em Gecko podem variar, mas a sequência geral e o caminho para o arquivo `AdGuard Personal CA.cer` serão os mesmos.
