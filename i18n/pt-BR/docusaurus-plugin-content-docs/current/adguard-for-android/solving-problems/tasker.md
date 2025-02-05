---
title: Como automatizar o AdGuard para Android
sidebar_position: 3
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Muitas pessoas escolhem o Android porque gostam de personalizar as configurações e querem controlar completamente o dispositivo. E é totalmente normal que alguns usuários do AdGuard não fiquem satisfeitos com seu comportamento padrão. Digamos que você queira que a proteção pare quando um determinado aplicativo for iniciado e reinicie-a novamente quando o aplicativo for fechado. Este é um trabalho para o aplicativo Tasker.

## Interface do AdGuard

Existem muitos aplicativos de tarefas por aí, por exemplo [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) etc. O AdGuard fornece uma interface que permite que esses aplicativos configurem várias regras de automação.

![Automação *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Graças a essa interface, qualquer aplicativo pode enviar uma mensagem especial (chamada “intent”) que contém o nome da ação e alguns dados adicionais, se necessário. O AdGuard analisará essa intenção e executará as ações necessárias.

### Preocupações com a segurança

Não é perigoso deixar que alguns aplicativos aleatórios gerenciem o que o AdGuard faz? Sim, e é por isso que uma senha é enviada junto com a intenção. Essa senha será gerada automaticamente pelo AdGuard, mas você pode, é claro, alterá-la a qualquer momento.

### Ações disponíveis

Aqui estão as ações que, quando incluídas na intenção, serão compreendidas pelo AdGuard:

`start` inicia a proteção, nenhum dado extra é necessário;

`stop` interrompe a proteção, sem necessidade de dados extras;

`pause` interrompe a proteção. A diferença entre isso e `parar` é que uma notificação aparecerá reiniciando a proteção quando você tocar nela. Não são necessários dados adicionais;

`update` verifica se há atualizações de filtros e aplicativos disponíveis, nenhum dado adicional é necessário;

-----

`dns_filtering` liga e desliga a filtragem de DNS. Requer um sinalizador extra:

`enable:true` ou `enable:false` habilita ou desabilita a filtragem de DNS, conforme necessário.

`fake_dns` permite resolver solicitações de DNS no servidor proxy especificado. Isso requer um sinalizador extra:

`enable:true` ou `enable:false` ativa ou desativa a configuração *Usar FakeDNS*, respectivamente.

:::note

Quando a configuração *Usar FakeDNS* estiver ativada, *Proteção DNS* será desatiavda automaticamente. As solicitações de DNS não serão filtradas localmente.

:::

-----

`dns_server` alterna entre servidores DNS. Você precisa incluir dados adicionais:

 `server:adguard dns` alterna para o servidor DNS do AdGuard;

:::note

A lista completa de nomes de provedores compatíveis pode ser encontrada em nossa lista de [provedores DNS conhecidos](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` alterna para o servidor adicionado anteriormente chamado `custom`;

 `server:tls://dns.adguard.com` cria um novo servidor e alterna para ele se os servidores e provedores adicionados anteriormente não contiverem um servidor com o mesmo endereço. Caso contrário, ele alterna para o respectivo servidor. Você pode adicionar endereços de servidor como IP (DNS regular), `sdns://…` (DNSCrypt ou DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) ou `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` cria um servidor com endereços separados por vírgulas e alterna para ele. Ao adicionar um servidor via `server:1.1.1.1, tls://1.1.1.1`, o servidor adicionado anteriormente é removido.

 `server:system` redefine as configurações de DNS para os servidores DNS padrão do sistema.

 -----

`proxy_state` ativa/desativa o proxy de saída. Requer um sinalizador extra:

`enable:true` ou `enable:false` ativa ou desativa o proxy de saída, conforme necessário.

-----

`proxy_default` define o proxy da lista de adicionados anteriormente como padrão ou cria um novo se o servidor não tiver sido adicionado antes.

Você precisa especificar dados adicionais:

`servidor:[nome]` onde `[nome]` é o nome do proxy de saída da lista.

Ou você pode configurar os parâmetros do servidor manualmente:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` remove o servidor proxy da lista de servidores adicionados anteriormente.

`servidor:[nome]` onde `[nome]` é o nome do proxy de saída da lista.

Ou você pode configurar os parâmetros de remoção manualmente:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Parâmetros obrigatórios**:

`[type]` — tipo de servidor proxy:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — domínio proxy de saída ou endereço IP;

`[port]` — porta do proxy de saída (número inteiro de 1 a 65535);

- **Parâmetros opcionais**:

 `[login and password]` — somente se o proxy exigir. Esses dados são ignorados ao configurar **SOCKS4**;

 `[udp]` aplicado somente no tipo de servidor **SOCKS5** e inclui a opção **UDP através de SOCKS5**. É necessário definir o valor **verdadeiro ou falso**;

 `[trust]` aplica-se apenas ao tipo de servidor **HTTPS_CONNECT** e inclui a opção **Confiar em qualquer certificado**. É necessário definir o valor **verdadeiro ou falso**.

:::note Exemplo

`setting by name`: server:MyServer

`manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Não se esqueça de incluir a senha, o nome do pacote e a classe. Você precisa fazer isso para cada intenção.**

Extra: `password:*******`

Nome do pacote: `com.adguard.android`

Classe: `com.adguard.android.receiver.AutomationReceiver`

:::note

Antes da v4.0, a classe era chamada `com.adguard.android.receivers.AutomationReceiver`, mas depois mudamos seu nome para `com.adguard.android.receiver.AutomationReceiver`. Se esta função for usada, lembre-se de atualizar para o novo nome.

:::

### Execução sem notificação

Para executar uma tarefa sem mostrar um toast, adicione um EXTRA adicional `quiet: true`

### Exemplo

![Automação *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
