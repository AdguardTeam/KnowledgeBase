---
title: Configurações
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Configurações_ é a seção que requer mais atenção. É aqui que você pode configurar o aplicativo para que atenda plenamente às suas necessidades: bloqueia apenas o que incomoda, usa o servidor DNS do provedor confiável, remove cookies de terceiros e assim por diante.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

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

Many websites gather information about their visitors, such as their IP addresses, browser and operating system details, screen resolution, and the webpage from which the user came or was redirected. Some websites use cookies to mark and identify your browser, save your personal settings and preferences. This allows them to “recognize” you on your next visit. Tracking protection safeguards your personal information from these data- and statistics-gathering systems.

![Tracking protection levels \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection1.png)

You can adjust the _Tracking Protection_ settings as needed. For example, you can prevent websites from receiving the search request that you used to find them on the Internet, automatically delete third- and first-party cookies, and disable location sharing in your browser, to prevent tracking of your whereabouts.

![Tracking protection custom features \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection2.png)

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Segurança da navegação

Browsing security gives strong protection against malicious and phishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module, you can:

- enable notifications to block requests to malicious and phishing sites,
- activate sound notifications,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

The module checks the contents of webpages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Assistente de navegador

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
