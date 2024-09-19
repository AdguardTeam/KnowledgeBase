---
title: Extensões
sidebar_position: 3
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard pode ampliar significativamente a funcionalidade de um site funcionando como um [gerenciador de scripts de usuário](/general/userscripts). Os usuários do AdGuard podem adicionar seus próprios scripts, bem como gerenciar os existentes.

![Extensões \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Detectar automaticamente scripts de usuário**

Com esta opção habilitada, o AdGuard definirá automaticamente as consultas do navegador aos scripts do usuário e sugerirá sua instalação. Caso contrário, as extensões poderão ser baixadas e instaladas manualmente.

As seguintes extensões são instaladas com o AdGuard:

![Userscripts pré-instalados \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**Assistente AdGuard**

O Assistente AdGuard é um assistente antigo que você pode usar se o [novo assistente](/adguard-for-windows/browser-assistant.md) não estiver disponível para o seu navegador. O nome desta extensão não é coincidência: na verdade, ela auxilia o usuário a alterar as configurações básicas do AdGuard diretamente no navegador, sem a necessidade de abrir o próprio aplicativo. O Assistente AdGuard funciona com todos os navegadores compatíveis com Microsoft Windows. Além disso, o ícone do Assistente do AdGuard não será exibido em sites listados como exceções pelo usuário e em determinadas páginas da Web em que há risco de exibição de conteúdo incorreto.

**AdGuard Extra**

Esta é uma extensão personalizada projetada para combater a técnica de reinserção de anúncios bloqueados, conhecida com evasão/reinjeção de anúncios do bloqueador de anúncios. Ambos são métodos avançados de bloqueio de anúncios que continuam a crescer em popularidade entre os anunciantes.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**Bloqueador de pop-ups do AdGuard**

Esta extensão evita que janelas popup sejam abertas quando você visualiza páginas da web. Algumas popups são consideradas úteis: elas podem conter configurações para administração do site ou informações de referência adicionais demonstradas ao clicar em um link. É por isso que você pode desligar o bloqueador, se necessário. Esta extensão também não funciona em sites adicionados à lista de exceções do AdGuard. Ele está desativado por padrão, mas você pode ativá-lo nas configurações do aplicativo. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

O Web of Trust permite que você veja a reputação de cada site com base nas opiniões de seus usuários. O site é avaliado por uma série de critérios específicos: confiança, segurança, etc. Esta extensão está desativada por padrão, mas você pode ativá-la nas configurações do aplicativo. Observe que AdGuard não é o desenvolvedor desta extensão.

### Rede

O penúltimo módulo é dedicado à filtragem de rede e aqui você encontrará opções adicionais relacionadas à rede. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Estas são precauções extras importantes para filtrar melhor o seu espaço web. A maioria dos sites agora usa HTTPS, e o mesmo se aplica à publicidade. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Configurações de rede \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

Neste módulo você pode marcar a caixa de seleção "Usar AdGuard como proxy HTTP" para usar o AdGuard como um proxy HTTP regular que filtrará todo o tráfego que passa por ele. Você também pode ativar o recurso _Filtrar sites com certificados EV_. Os certificados SSL de validação estendida (EV) oferecem uma garantia de segurança mais forte; os proprietários de tais sites devem passar por um processo de verificação de identidade completo e padronizado globalmente, definido pelas diretrizes de VE. É por isso que alguns usuários confiam em sites com esses certificados e preferem não filtrá-los.

Por fim, há uma seção com configurações de proxy. Lá você pode especificar qual servidor proxy o AdGuard deve usar para atualizar filtros, obter novas versões e assim por diante.

### AdGuard VPN

A última seção é dedicada ao AdGuard VPN, uma ferramenta ideal que oferece segurança e anonimato sempre que você navega na Internet. Você pode baixá-lo clicando no botão _Download_ ou acessar o site do AdGuard VPN clicando no botão _Homepage_.

Como funciona o AdGuard VPN? Sem entrar em detalhes técnicos, podemos dizer que a VPN cria um túnel criptografado seguro entre o computador ou dispositivo móvel do usuário e um servidor VPN remoto. Desta forma, a confidencialidade dos dados é preservada, bem como o anonimato do usuário, porque um observador terceiro vê o endereço IP do servidor VPN e não o IP real do usuário.

**O que o AdGuard VPN faz:**

- esconde sua localização real e ajuda você a permanecer anônimo
- altera seu endereço IP para proteger seus dados contra rastreamento
- criptografa seu tráfego para torná-lo ilegível para terceiros
- permite que você configure onde usar e onde não usar a VPN (recurso de exclusões)

Para obter mais informações sobre o AdGuard VPN, acesse a [base de conhecimento do AdGuard VPN](https://adguard-vpn.com/kb/).
