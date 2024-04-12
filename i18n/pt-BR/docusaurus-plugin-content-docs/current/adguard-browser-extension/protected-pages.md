---
title: Páginas protegidas pelo navegador
sidebar_position: 5
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://adguard.com/download.html?auto=true)

:::

Ao usar uma extensão da web como a AdGuard Browser Extension, existem certos domínios restritos que proíbem acesso ou permissões. Como resultado, as extensões de bloqueio de anúncios não têm permissão para interagir ou modificar o conteúdo dessas páginas. Em outras palavras, eles não têm permissão para bloquear anúncios e outros elementos irritantes nessas páginas da web.

## Restrições do navegador Chromium

Navegadores baseados em Chromium, como o Google Chrome, mantêm uma lista de domínios restritos aos quais as extensões não têm permissão de acesso. Esses domínios incluem:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URLs começando com `chrome://`, `chrome-extension://` ou `https://chrome.google.com/webstore/`
- Arquivos PDF
- Páginas onde o Javascript está desativado
- Páginas de aviso de segurança
- Páginas de erro, como erros 404 e erros de rede
- URLs que começam por `view-source:` ou `data:`

## Restrições do navegador Firefox

Da mesma forma, o navegador Firefox tem seu próprio conjunto de domínios restritos onde as extensões não têm permissão para operar. Esses domínios restritos incluem:

- contas-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Modificando restrições no Firefox

Alterar as configurações avançadas pode afetar a estabilidade e a segurança do Firefox. Isso é recomendado apenas para usuários avançados. Se você está ciente do risco associado e ainda deseja ativar complementos não permitidos em uma página protegida, siga as etapas abaixo:

1. Clique no botão de menu → **Complementos e temas** → **Extensões**.
2. Clique na extensão que deseja habilitar em sites com restrições (neste caso, AdGuard).
3. Selecione **Permitir** na seção **Executar em sites com restrições**.

Como alternativa, você pode:

1. Abra uma nova aba e digite **about:config** na barra de endereço.
2. Pressione **Retornar**. Poderá surgir um aviso. Neste caso, clique em **Aceitar o risco e continuar**.
3. Procurar por `extensions.webextensions.restrictedDomains`. Se você não conseguir encontrar essa preferência, poderá criá-la. Basta selecionar o tipo **Boolean** e clicar em **+** para adicioná-lo.
4. Clique no botão de alternância próximo a esta preferência e altere seu valor para `false`.
5. Reinicie o Firefox.

Para mais informações sobre este assunto, leia [o artigo no site de suporte da Mozilla](https://mzl.la/3POXoWi).
