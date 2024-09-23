---
title: Configurações
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

_Configurações_ é a seção que requer mais atenção. É aqui que você pode configurar o aplicativo para que atenda plenamente às suas necessidades: bloqueia apenas o que incomoda, usa o servidor DNS do provedor confiável, remove cookies de terceiros e assim por diante.

![Configurações \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Configurações gerais

Aqui você pode definir o idioma e o tema (escuro ou claro), ativar o lançamento do AdGuard na inicialização do sistema e atualizações automáticas silenciosas, escolher o canal de atualização e filtrar o intervalo de verificação de atualização. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Configurações avançadas \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Na parte inferior da tela, você encontrará as _Configurações avançadas_. Se você não sabe ao certo o que está fazendo, a alterações dessas configurações pode causar problemas no desempenho do AdGuard, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. É por isso que sugerimos que você abra esta seção somente se tiver certeza do que está fazendo ou se nossa equipe de suporte pedir. Se você quiser saber o que pode ser configurado em _Configurações avançadas_, leia o [nosso artigo](/adguard-for-windows/solving-problems/low-level-settings.md).

### Bloqueador de anúncios

Este é o módulo principal do AdGuard para Windows que remove anúncios dos sites que você visita e dos aplicativos instalados no seu dispositivo. Para filtrar publicidade e conteúdo que ameaça a privacidade como banners, pop-ups ou rastreadores, o AdGuard usa filtros diferentes: grupos de regras com finalidade semelhante escritas com uma [sintaxe especial](/general/ad-filtering/create-own- filtros). Para entender o que são filtros e como funcionam, leia [este artigo](/general/ad-filtering/how-ad-blocking-works).

![Bloqueador de anúncios \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

No módulo Bloqueador de anuncios, você pode:

- permitir a ativação automática de filtros específicos de idioma,
- desativar o bloqueio de [anúncios de pesquisa e autopromoção](/general/ad-filtering/search-ads),
- desativar anúncios no menu Iniciar do Windows 11,
- ativar filtros pré-instalados, como o _Filtro AdGuard Base_,
- instalar filtros da lista ou adicione um filtro personalizado clicando no botão _Adicionar um filtro_,
- faça alterações em grupos de regras existentes usando o botão _Editor de filtros_,
- ver todas as solicitações enviadas pelos navegadores e aplicativos instalados em seu computador clicando no botão _Log de filtragem_. A partir daí você também pode bloquear ou desbloquear qualquer solicitação criando uma regra personalizada,
- compor um filtro a partir de suas próprias regras escritas manualmente, importadas ou criadas com a extensão Assistente AdGuard.

Antes de começar a escrever manualmente suas próprias regras, leia nosso [guia de sintaxe](/general/ad-filtering/create-own-filters) detalhado.

### Modo invisível

Muitos sites coletam informações sobre seus visitantes, como endereços IP, informações sobre o navegador e sistema operacional instalado, resolução de tela e até mesmo de qual página o usuário veio ou foi redirecionado. Algumas páginas da web usam cookies para marcar o navegador e salvar suas configurações pessoais, preferências de usuário ou “reconhecê-lo” em sua próxima visita. O Modo Sigiloso protege suas informações pessoais desses sistemas de coleta de dados e estatísticas.

![Modo sigiloso \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Você pode ajustar de forma flexível o funcionamento do Modo Sigiloso: por exemplo, você pode proibir o site de receber a solicitação de pesquisa que você usou para encontrá-lo na Internet, excluir automaticamente os cookies de terceiros e do próprio site e desativar o compartilhamento de localização no seu navegador, que pode ser usado para rastrear sua localização real.

Para saber tudo sobre o Modo Sigiloso e suas diversas opções, [leia este artigo](/general/stealth-mode).

### Segurança da navegação

A segurança da navegação oferece forte proteção contra sites maliciosos e de phishing. Não, o AdGuard para Windows não é um antivírus. Ele não interromperá o download de um vírus quando ele já estiver iniciado, nem excluirá os já existentes. Mas ele te avisará se você estiver prestes a acessar um site cujo domínio tenha sido adicionado ao nosso banco de dados de "sites não confiáveis" ou a fazer download de um arquivo desse site. Você pode encontrar mais informações sobre como este módulo funciona no [nosso artigo](/general/browsing-security).

Neste módulo você pode

- ativar notificações para bloquear solicitações a sites maliciosos e de phishing,
- ativar notificações sonoras,
- concorda em enviar informações anônimas relacionadas à segurança ao servidor AdGuard para nos ajudar a manter o banco de dados de sites maliciosos e de phishing atualizado.

![Segurança de navegação \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Caso você queira saber mais sobre segurança de navegação, leia [nosso artigo](/general/browsing-security).

### Proteção DNS

Existem três razões importantes pelas quais você pode querer explorar as configurações de proteção DNS. Primeiro, para evitar ser rastreado pelo seu ISP. Cada vez que você abre um site, por exemplo `google.com`, seu navegador envia uma solicitação a um servidor DNS para obter em troca o endereço IP do site. Normalmente, o servidor DNS pertence ao seu ISP, o que permite rastrear sua atividade online. Em segundo lugar, para criptografar seu tráfego DNS. E a terceira é [bloquear conteúdo no nível de DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Proteção DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

No módulo de proteção DNS do AdGuard para Windows, você pode selecionar os servidores DNS de provedores conhecidos, incluindo o [AdGuard DNS](https://adguard-dns.io/kb/) que bloqueia anúncios e rastreadores, AdGuard DNS Family Protection que, além disso, bloqueia conteúdo adulto ou AdGuard DNS Non-filtering que fornece uma conexão segura e confiável, mas não filtra nada. Você pode até adicionar servidores DNS personalizados. Também há uma opção para adicionar regras personalizadas usando [sintaxe de regra DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). E se necessário, você pode adicionar [filtros DNS de sua escolha](https://filterlists.com).

### Controle parental

Existem vários websites aos quais o acesso deve ser restringido a partir de um PC utilizado por crianças. Esta tarefa é realizada pelo Controle Parental.

![Controle dos pais \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

O módulo verifica o conteúdo das páginas web abertas no navegador e filtra aquelas com conteúdo indesejável para crianças: imagens e textos para adultos, linguagem grosseira, violência, propaganda de drogas, etc. As configurações do Controle Parental são protegidas por senha para que a criança não consiga contornar as restrições. Este módulo não apenas bloqueia direções para sites indesejáveis, mas também pode excluir links inadequados para crianças dos resultados da pesquisa.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Você também pode marcar a caixa _Bloquear download de arquivos executáveis_ para evitar que seu filho baixe e instale software no computador. Existem mais duas opções no módulo _Controle Parental_: você pode selecionar um usuário específico do Windows para ser protegido pelo _Controle Parental_ e definir uma senha para proteger as configurações do AdGuard contra alterações.

![Controle parental \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Assistente de navegador

![Assistente de navegador \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

A partir desta guia você pode facilmente instalar o Assistente de navegador AdGuard, cuja função principal é gerenciar a filtragem diretamente do navegador. Explicamos mais sobre como trabalhar com ele e o que fazer se não houver um Assistente de Navegador para o seu navegador no [artigo separado](/adguard-for-windows/browser-assistant.md).
