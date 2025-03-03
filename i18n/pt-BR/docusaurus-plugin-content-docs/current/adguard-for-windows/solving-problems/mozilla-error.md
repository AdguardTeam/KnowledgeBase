---
title: Como corrigir o erro `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

Alguns usuários do AdGuard para Windows com a [Filtragem HTTPS](/general/https-filtering/what-is-https-filtering) ativada não conseguem acessar certos sites como google.com e youtube.com. Em vez de abrir um site, navegadores com Strict Certificate Pinning exibiriam um erro `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Aqui está uma lista de navegadores impactados:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Se o seu navegador padrão for um destes, faça o seguinte para resolver o problema:

1. Digite `about:config` na barra de endereços do seu navegador
2. No menu que aparece, insira `security.cert_pinning.enforcement_level` no campo de pesquisa.
3. Altere o parâmetro `security.cert_pinning.enforcement_level` de 2 para 1.
