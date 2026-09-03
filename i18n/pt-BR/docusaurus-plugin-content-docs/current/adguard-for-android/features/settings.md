---
title: Configurações
sidebar_position: 4
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

A guia _Configurações_ pode ser acessada tocando no ícone mais à direita na parte inferior da tela. Esta seção contém várias configurações, informações sobre seu aplicativo, licença e assinatura e vários recursos de suporte.

## Geral

Esta seção ajuda você a gerenciar a aparência e o comportamento do aplicativo: você pode definir o tema de cores e o idioma, gerenciar notificações e muito mais. Se quiser ajudar a equipe do AdGuard a detectar falhas no aplicativo e pesquisar a usabilidade, você pode ativar _Informar falhas automaticamente_ e _Enviar dados técnicos e de interação_.

![Geral \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Em _Atualizações de aplicativos e filtros_, você pode configurar atualizações automáticas de filtros e selecionar um canal de atualização de aplicativos. Escolha _Release_ para obter mais estabilidade e _Beta_ ou _Nightly_ para acesso antecipado a novos recursos.

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Configurações avançadas

_Automação_ permite que você gerencie o AdGuard por meio de aplicativos de tarefas.

_Watchdog_ ajuda a proteger o AdGuard contra desativação do sistema ([leia mais sobre o modo de economia de bateria do Android](/adguard-for-android/solving-problems/background-work/)). O valor inserido será o intervalo em segundos entre as verificações de watchdog.

_Nível de registro_ define quais dados sobre a operação do aplicativo devem ser registrados. Por padrão, o aplicativo coleta dados sobre seus próprios eventos. O nível _Debug_ registra mais eventos. Ative-o se solicitado pela equipe do AdGuard para ajudá-los a entender melhor o problema. [Leia mais sobre como coletar e enviar registros](/adguard-for-android/solving-problems/log/)

![Avançado \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

A seção _Configurações de baixo nível_ é para usuários experientes. [Leia mais sobre configurações de baixo nível](/adguard-for-android/features/low-level-settings/)

![Configurações de baixo nível \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtragem

Esta seção permite gerenciar configurações de filtragem HTTPS, filtros e scripts de usuário e configurar um servidor proxy.

![Filtragem \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

![Filtragem \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.png)

### Filtros

O AdGuard bloqueia anúncios, rastreadores e incômodos aplicando regras de seus filtros. A maioria dos recursos da seção _Proteção_ são alimentados pelos [filtros AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Se você ativar a _Proteção básica_, o filtro AdGuard Base e o filtro AdGuard Mobile Ads serão ativados automaticamente. E vice-versa: se você desligar ambos os filtros, a _Proteção básica_ também será desativada.

![Filtros \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Os filtros habilitados por padrão são suficientes para a operação normal do AdGuard. No entanto, se quiser personalizar o bloqueio de anúncios, você pode usar outros filtros do AdGuard ou de terceiros. Para isso, selecione uma categoria e habilite os filtros desejados. Para adicionar um filtro personalizado, toque em _Filtros personalizados_ → _Adicionar filtro personalizado_ e insira seu URL ou caminho de arquivo.

:::note

Se você ativar muitos filtros, alguns sites poderão funcionar incorretamente.

:::

[Leia mais sobre filtros](https://adguard.com/en/blog/what-are-filters.html)

### Extensões

As extensões permitem adicionar scripts de usuário e estilos de usuário.

![Userscripts \*mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

Userscripts são miniprogramas escritos em JavaScript que estendem a funcionalidade de um ou mais sites. Para instalar userscripts, você precisa de um gerenciador de userscript especial. O AdGuard tem essa funcionalidade e permite que você adicione scripts de usuário por URL ou a partir de um arquivo.

Os estilos de usuário são como scripts de usuário que permitem alterar a aparência das páginas da web no navegador sem modificar o conteúdo delas. Eles funcionam adicionando estilos CSS aos estilos existentes do site. Por exemplo, se você quiser um tema escuro em um site que não oferece essa opção, poderá usar um estilo de usuário para fazer isso.

Para adicionar um estilo de usuário, acesse _Configurações_ → _Filtragem_ → _Extensões_ → _Adicionar extensão_ → _Importar de arquivo ou URL_. Você pode encontrar estilos de usuário prontos [online](https://userstyles.world/).

Para criar seu próprio estilo, toque em _Adicionar extensão_ → _Criar estilo de usuário_.

#### AdGuard Extra

AdGuard Extra é um script de usuário personalizado que bloqueia anúncios complexos e mecanismos que reinjetam anúncios em sites.

#### Desativar AMP

Desativar AMP é um script de usuário que desativa [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) na página de resultados de pesquisa do Google.

### Rede

#### Filtragem HTTPS

Para bloquear anúncios e rastreadores na maioria dos sites e aplicativos, o AdGuard precisa filtrar o tráfego HTTPS. [Leia mais sobre filtragem HTTPS](/general/https-filtering/what-is-https-filtering)

##### Certificados de segurança

Para gerenciar o tráfego criptografado, o AdGuard instala seu certificado CA no seu dispositivo. É seguro: o tráfego é filtrado localmente e o AdGuard verifica a segurança da conexão.

Nas versões mais antigas do Android, o certificado é instalado automaticamente. No Android 11 e posterior, você precisa instalá-lo manualmente. [Instruções de instalação](/adguard-for-android/solving-problems/manual-certificate/)

O certificado CA no armazenamento do usuário é suficiente para filtrar o tráfego HTTPS em navegadores e alguns aplicativos. No entanto, existem aplicativos que confiam apenas nos certificados do armazenamento do sistema. Para filtrar o tráfego HTTPS lá, você precisa instalar o certificado CA do AdGuard no armazenamento do sistema. [Instruções](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Aplicativos filtrados por HTTPS

Esta seção contém a lista de aplicativos para os quais o AdGuard filtra o tráfego HTTPS. Observe que a configuração só pode ser aplicada a todos os aplicativos se você tiver certificados CA no armazenamento do usuário e no armazenamento do sistema.

##### Sites filtrados por HTTPS

Esta configuração permite gerenciar sites para os quais o AdGuard deve filtrar o tráfego HTTPS.

A filtragem HTTPS permite que o AdGuard filtre o conteúdo de solicitações e respostas, mas nunca coletamos ou armazenamos esses dados. No entanto, para aumentar a segurança, [excluímos sites que contêm informações potencialmente confidenciais da filtragem HTTPS](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Você também pode adicionar sites que considere necessários às exclusões, selecionando um dos modos:

- Excluir sites específicos da filtragem HTTPS
- Filtre o tráfego HTTPS apenas nos sites adicionados às exclusões

Por padrão, também não filtramos sites com certificados de Validação Estendida (EV), como sites financeiros. Se necessário, você pode ativar a opção _Filtrar sites com certificados EV_.

#### Proxy

Você pode configurar o AdGuard para rotear todo o tráfego do seu dispositivo através do seu servidor proxy. [Como configurar um proxy de saída](/adguard-for-android/solving-problems/outbound-proxy)

Nesta seção, você também pode configurar uma VPN de terceiros para aue funcione com o AdGuard, se o seu provedor de VPN permitir.

Em _Aplicativos que operam por meio de proxy_, você pode selecionar aplicativos que encaminharão o tráfego por meio do proxy especificado. Se você tiver a _Integração com AdGuard VPN_ ativada, esta configuração desempenha o papel das exclusões de aplicativos do AdGuard VPN: permite que você especifique aplicativos a serem roteados através do túnel AdGuard VPN.

#### Modo de roteamento

Esta seção permite selecionar o método de filtragem de tráfego.

- _VPN local_ filtra o tráfego por meio de uma VPN criada localmente. Este é o modo mais confiável. Devido às restrições do Android, é também o único método de filtragem de tráfego em todo o sistema disponível em dispositivos sem acesso root.

:::note

O modo _VPN local_ não permite que o AdGuard seja usado simultaneamente com outras VPNs. Para usar outra VPN com AdGuard, você precisa reconfigurá-la para funcionar em modo proxy e configurar um proxy de saída no AdGuard. Para AdGuard VPN, isso é feito automaticamente com a ajuda do [_modo integrado_](/adguard-for-android/features/integration-with-vpn).

:::

- _Proxy automático_ é um método alternativo de roteamento de tráfego que não requer o uso de VPN. Uma vantagem significativa é que ele pode ser executado em paralelo com uma VPN. Este modo requer acesso root.

:::note

Observe que a filtragem de DNS ainda estará ativa no modo de roteamento _Proxy automático_, e talvez seu dispositivo não consiga filtrar solicitações de DNS de aplicativos específicos. No modo de roteamento _VPN_, os aplicativos são excluídos da VPN local por meio do sistema. Portanto, o resolvedor do sistema identifica quais aplicativos estão incluídos na VPN e quais não estão. Isso permite que eles acessem a VPN local ou a contornem. No entanto, as solicitações de DNS vêm do resolvedor do sistema, não do aplicativo. No modo _Proxy automático_, só é possível excluir o tráfego de aplicativos, não as consultas DNS deles, pois o AdGuard as identifica como consultas do sistema.

:::

- _Proxy manual_ envolve a configuração de um servidor proxy em uma porta específica, que pode então ser configurada nas configurações de Wi-Fi. Este modo requer acesso root para Android 10 e superior.

## Licença

Nesta seção você pode encontrar informações sobre sua licença e gerenciá-la:

- Compre uma licença do AdGuard para ativar [os recursos da versão completa](/adguard-for-android/features/free-vs-full)
- Faça login em sua conta AdGuard ou insira a chave de licença para ativar sua licença
- Cadastre-se para ativar seu período de avaliação de 14 dias. O código de ativação pode ser usado em diferentes dispositivos e plataformas
- Atualize o status da licença no menu de três pontos (⋮)
- Abra a conta AdGuard para gerenciar sua licença lá
- Redefina sua licença. Por exemplo, se você atingiu o limite de dispositivos para esta licença e deseja aplicar outra

![Tela de licença \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Suporte

Use esta seção se tiver dúvidas ou sugestões sobre o AdGuard para Android. Recomendamos consultar o _[FAQ](https://adguard.com/support/adguard_for_android.html)_ ou esta base de conhecimento antes de entrar em contato com o suporte.

![Suporte \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Se você notar um anúncio perdido, denuncie-o por meio de _Relatar bloqueio incorreto_.

Em caso de comportamento inesperado do aplicativo, selecione _Reportar um bug_. Se possível, descreva seu problema detalhadamente e adicione logs de aplicativos. [Como descrever um problema](/guides/report-bugs/#how-to-describe-a-problem)

Para dar sugestões, use _Solicitar um recurso_.

:::note

O GitHub é uma forma alternativa de relatar bugs e sugerir novos recursos. [Instruções e links de repositório](/guides/report-bugs/#adguard-for-android)

:::
