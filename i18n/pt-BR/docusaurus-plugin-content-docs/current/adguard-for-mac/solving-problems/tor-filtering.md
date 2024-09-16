---
title: Configurando a filtragem no navegador Tor
sidebar_position: 10
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Por padrão, o navegador Tor é adicionado à lista de aplicativos filtrados do AdGuard. No entanto, para filtrá-lo, o AdGuard precisa alterar as configurações de segurança do Tor. Isso fará com que o Tor confie no certificado CA do AdGuard.

Se você decidir filtrar o Tor e selecioná-lo em *Preferências* → *Rede* → *Aplicativos*, o AdGuard mostrará esta caixa de diálogo:

![Caixa de diálogo do AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Ao atualizar as configurações do Tor, o AdGuard configurará o seguinte:

`security.enterprise_roots.enabled`: true

Esta configuração fará com que o Tor confie nos certificados root. [Saiba mais](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

A fixação de chave pública é uma medida de segurança que permite aos sites garantir que a conexão entre um site e um usuário seja autêntica. Isso envolve a publicação de uma lista de chaves públicas pelo site, também conhecidas como pins, em que ele confia. Com o nível de aplicação definido como 1, os pins não são aplicados para CAs personalizados. [Saiba mais](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Para aplicar as alterações, você precisará reiniciar o navegador Tor.

Caso altere manualmente essas configurações, a filtragem do Tor será interrompida.
