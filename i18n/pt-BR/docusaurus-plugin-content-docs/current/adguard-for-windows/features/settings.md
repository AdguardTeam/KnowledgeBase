---
title: Configurações
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Configurações_ é a seção que requer mais atenção. É aqui que você pode configurar o aplicativo para que atenda plenamente às suas necessidades: bloqueia apenas o que incomoda, usa o servidor DNS do provedor confiável, remove cookies de terceiros e assim por diante.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Configurações gerais

Aqui você pode definir o idioma e o tema (escuro ou claro), ativar o lançamento do AdGuard na inicialização do sistema e atualizações automáticas silenciosas, escolher o canal de atualização e filtrar o intervalo de verificação de atualização. Além disso, você pode recorrer às configurações se o AdGuard para Windows não estiver funcionando corretamente e o Suporte ao cliente solicitar que você [colete _Logs de depuração_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

Na parte inferior da tela, você encontrará as _Configurações avançadas_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

Este é o módulo principal do AdGuard para Windows que remove anúncios dos sites que você visita e dos aplicativos instalados no seu dispositivo. Para filtrar publicidade e conteúdo que ameaça a privacidade como banners, pop-ups ou rastreadores, o AdGuard usa filtros diferentes, ou seja, grupos de regras com finalidade semelhante escritas com uma [sintaxe especial](/general/ad-filtering/create-own-filters). Para entender o que são filtros e como funcionam, leia [este artigo](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- permitir a ativação automática de filtros específicos de idioma,
- desativar o bloqueio de [anúncios de pesquisa e autopromoção](/general/ad-filtering/search-ads),
- desativar anúncios no menu Iniciar do Windows 11,
- ativar filtros pré-instalados, como o _Filtro AdGuard Base_,
- instalar filtros da lista ou adicione um filtro personalizado clicando no botão _Adicionar um filtro_,
- faça alterações em grupos de regras existentes usando o botão _Editor de filtros_,
- ver todas as solicitações enviadas pelos navegadores e aplicativos instalados em seu computador clicando no botão _Log de filtragem_. A partir daí você também pode bloquear ou desbloquear qualquer solicitação criando uma regra personalizada,
- compor um filtro a partir de suas próprias regras escritas manualmente, importadas ou criadas com a extensão Assistente AdGuard.

Antes de começar a escrever manualmente suas próprias regras, leia nosso [guia de sintaxe](/general/ad-filtering/create-own-filters) detalhado.

### Tracking protection

Muitos sites coletam informações sobre seus visitantes, como endereços IP, informações sobre o navegador e sistema operacional instalado, resolução de tela e até mesmo de qual página o usuário veio ou foi redirecionado. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Você pode ajustar de forma flexível o funcionamento do Modo Sigiloso: por exemplo, você pode proibir o site de receber a solicitação de pesquisa que você usou para encontrá-lo na Internet, excluir automaticamente os cookies de terceiros e do próprio site e desativar o compartilhamento de localização no seu navegador, que pode ser usado para rastrear sua localização real.

Para saber tudo sobre o Modo Sigiloso e suas diversas opções, [leia este artigo](/general/stealth-mode).

### Segurança da navegação

A segurança da navegação oferece forte proteção contra sites maliciosos e de phishing. Não, o AdGuard para Windows não é um antivírus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Você pode encontrar mais informações sobre como este módulo funciona no [nosso artigo](/general/browsing-security).

Neste módulo, você pode:

- ativar notificações para bloquear solicitações a sites maliciosos e de phishing,
- ativar notificações sonoras,
- concorda em enviar informações anônimas relacionadas à segurança ao servidor AdGuard para nos ajudar a manter o banco de dados de sites maliciosos e de phishing atualizado.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

Caso você queira saber mais sobre segurança de navegação, leia [nosso artigo](/general/browsing-security).

### Proteção DNS

Existem três razões importantes pelas quais você pode querer explorar as configurações de proteção DNS. Primeiro, para evitar ser rastreado pelo seu ISP. Cada vez que você abre um site, por exemplo `google.com`, seu navegador envia uma solicitação a um servidor DNS para obter em troca o endereço IP do site. Normalmente, o servidor DNS pertence ao seu ISP, o que permite rastrear sua atividade online. Em segundo lugar, para criptografar seu tráfego DNS. E a terceira é [bloquear conteúdo no nível de DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

No módulo de proteção de DNS do AdGuard para Windows, você pode escolher servidores DNS de provedores conhecidos, incluindo AdGuard DNS, que bloqueia anúncios e rastreadores; AdGuard DNS Family Protection, que também bloqueia conteúdo adulto; ou AdGuard DNS Non-filtering, que fornece uma conexão segura e confiável, mas não filtra nada. Você pode até adicionar servidores DNS e regras personalizados usando [sintaxe de regra DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). E se necessário, você pode adicionar [filtros DNS de sua escolha](https://filterlists.com).

A partir da versão 7.20, você também pode adicionar filtros selecionando-os a partir de uma lista de filtros confiáveis pré-construídos. Eles estão agrupados em quatro categorias para sua conveniência:

- **Modo geral**: bloqueie anúncios e rastreadores
- **Regional**: bloqueie anúncios e rastreadores em sites de idiomas específicos
- **Segurança**: bloqueie sites de phishing e não confiáveis
- **Outro**: envolve casos de uso especiais que não se encaixam nas categorias acima

![Servidores DNS \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Controle parental

Existem vários sites aos quais o acesso deve ser restringido a partir de um PC utilizado por crianças. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

O módulo verifica o conteúdo das páginas web abertas no navegador e filtra aquelas com conteúdo indesejável para crianças: imagens e textos para adultos, linguagem grosseira, violência, propaganda de drogas, etc. As configurações do Controle Parental são protegidas por senha para que a criança não consiga contornar as restrições. Este módulo não apenas bloqueia direções para sites indesejáveis, mas também pode excluir links inadequados para crianças dos resultados da pesquisa.

No módulo _Controle parental_ você pode ativar a _Pesquisa segura_ e gerenciar a _lista de bloqueio_ e a _lista de permissões_ para personalizar o funcionamento desta opção. Você também pode marcar a caixa _Bloquear download de arquivos executáveis_ para evitar que seu filho baixe e instale software no computador. Existem mais duas opções no módulo _Controle Parental_: você pode selecionar um usuário específico do Windows para ser protegido pelo _Controle Parental_ e definir uma senha para proteger as configurações do AdGuard contra alterações.

### Assistente de navegador

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
