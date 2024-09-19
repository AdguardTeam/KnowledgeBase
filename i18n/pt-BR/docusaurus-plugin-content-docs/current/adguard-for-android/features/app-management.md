---
title: Gerenciamento de aplicativos
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O módulo _Gerenciamento de aplicativos_ pode ser acessado tocando na guia _Gerenciamento de aplicativos_ (terceiro ícone a partir da esquerda na parte inferior da tela). Esta seção permite gerenciar permissões e configurações de filtragem para todos os aplicativos instalados no seu dispositivo.

![Gerenciamento de aplicativos \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Ao tocar em um aplicativo, você pode gerenciar suas configurações:

- Roteie seu tráfego através do AdGuard
- Bloqueie anúncios e rastreadores neste aplicativo (_Filtrar conteúdo do aplicativo_)
- Filtre o tráfego HTTPS (para aplicativos que não sejam de navegador, é necessário [instalar o certificado CA do AdGuard no armazenamento do sistema](/adguard-for-android/solving-problems/https-certificate-for-rooted/), disponível em dispositivos com acesso root
- Roteie-o através do servidor proxy especificado ou AdGuard VPN no modo de integração

![Gerenciamento de aplicativos no Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

No menu de contexto, você também pode acessar as estatísticas do aplicativo.

![Gerenciamento de aplicativos no Chrome. Menu de contexto \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Aplicativos “sem problemas” e “problemáticos”

Most apps work correctly when filtered. Para esses aplicativos, o tráfego é roteado pelo AdGuard e filtrado por padrão.

Alguns aplicativos, como Download Manager, rádio, aplicativos de sistema com UID 1000 e 1001 (por exemplo, Google Play Services), são “problemáticos” e podem funcionar incorretamente quando roteados pelo AdGuard. É por isso que você poderá ver o seguinte aviso ao tentar rotear ou filtrar todos os aplicativos:

![Caixa de diálogo Rotear todos os aplicativos \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Para garantir o funcionamento adequado de todos os aplicativos instalados no seu dispositivo, recomendamos fortemente que você roteie apenas aplicativos sem problemas através do AdGuard. Você pode ver a lista completa de aplicativos não recomendados para filtragem em _Configurações_ → _Geral_ → _Avançado_ → _Configurações de baixo nível_ → _Proteção_ → _Aplicativos excluídos_.
