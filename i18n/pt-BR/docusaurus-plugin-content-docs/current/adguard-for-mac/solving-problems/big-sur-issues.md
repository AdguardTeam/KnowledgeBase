---
title: Problemas de compatibilidade com diferentes versões do macOS
sidebar_position: 4
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemas existentes atualmente

Todos os anos, a Apple lança uma nova versão do macOS, apresentando soluções inovadoras e adicionando novos recursos úteis. Mas alguns deles, como a API de extensões de rede (Big Sur) ou o iCloud Private Relay (Monterey), causam alguns problemas para muitos aplicativos, não sendo o AdGuard uma exceção. Neste artigo, abordamos os problemas conhecidos específicos de cada versão do macOS e as possíveis maneiras de resolvê-los.

### Monterey 12: problemas existentes atualmente

Esses problemas ainda não foram corrigidos pela Apple ou foram corrigidos apenas parcialmente.

#### Compatibilidade com iCloud Private Relay

Atualmente, o AdGuard e o iCloud Private Relay não podem funcionar ao mesmo tempo. O AdGuard não tem capacidade de bloquear anúncios porque o iCloud Private Relay criptografa o tráfego antes que o AdGuard possa filtrar as conexões de rede. Quando o iCloud Private Relay está ativo, qualquer filtragem (incluindo filtragem local) torna-se impossível. Portanto, o AdGuard não pode filtrar o tráfego ou realizar filtragem de DNS no Safari. É por isso que, por padrão, o AdGuard usa a “rota padrão” que desativa o iCloud Private Relay.

Para uma compreensão mais profunda deste problema, leia [este artigo](../icloud-private-relay).

**Solução recomendada**

Recomendamos usar o AdGuard junto com um serviço VPN mais tradicional, como o [AdGuard VPN](https://adguard-vpn.com/).

**Solução alternativa**

Você pode impedir que o AdGuard use a "rota padrão" desativando-a. Isso pode ser feito em Configurações avançadas → `network.extension.monterey.force.split.tunnel`. Observe que ativar essa configuração causará os problemas descritos acima.

![Configurações Avançadas *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Compatibilidade com a atividade do Protect Mail

O aplicativo Apple Mail agora usa um proxy para ocultar o endereço IP de um usuário ao baixar imagens de e-mails. No entanto, isso não funcionará se houver uma conexão VPN ativa. Como ele trata o AdGuard como uma VPN, ele não pré-carrega imagens automaticamente.

Para uma compreensão mais profunda deste problema, leia [este artigo](../protect-mail-activity).

**Solução recomendada**

Neste ponto, recomendamos o uso de um serviço VPN mais tradicional, como [AdGuard VPN](https://adguard-vpn.com/), em vez dos recursos de privacidade mais recentes da Apple.

### Monterey 12, Big Sur 11.6 e posterior: problemas existentes atualmente

Esses problemas ainda não foram corrigidos pela Apple ou foram corrigidos apenas parcialmente.

#### Compatibilidade com o Cisco AnyConnect

O AdGuard não funcionará junto com o Cisco AnyConnect enquanto estiver no modo de *Extensão de Rede*. Você precisa mudar o AdGuard para o modo *Proxy Automático*. Para isso, siga [estas instruções](#automatic-proxy).

#### Compatibilidade com o Flutter

Esse problema foi resolvido no Flutter 2.2, lançado em junho de 2021. Mas para corrigir isso em aplicativos desenvolvidos em Flutter, é necessário aguardar atualizações.

Se você usar o Flutter junto com o AdGuard no modo "Extensão de rede" (ou qualquer outro aplicativo do tipo "Proxy transparente") no Monterey ou no Big Sur, você terá problemas: os projetos não abrirão e o Flutter será efetivamente quebrado. Já relatamos esse bug à Apple. Enquanto isso, você pode usar estas soluções temporárias:

1. Use o AdGuard no modo [Proxy Automático](#automatic-proxy).

1. Desative o SIP e mude o AdGuard para o modo Kernel Extension conforme explicado [aqui](#kernel-extension).

#### Aplicativos VPN com API antiga

Apesar do AdGuard ser exibido como VPN nas configurações do sistema, ele não deve causar conflitos ao trabalhar com outros aplicativos baseados em VPN. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Abra o menu do AdGuard.
1. Selecione *Preferências...*.
1. Alterne para a guia *Rede*.
1. Clique no botão *Aplicativos...*.
1. Encontre o aplicativo que deseja excluir e desmarque a caixa de seleção ao lado dele.

![Aplicativos filtrados](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Problemas já corrigidos

Esses problemas já foram corrigidos pela Apple, mas podem ser encontrados nas versões mais antigas do macOS Big Sur.

### Compatibilidade com o Little Snitch 5

No momento, o modo de extensão de rede no AdGuard não é compatível com o [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Esse problema é causado diretamente por um bug no Big Sur, e já informamos a Apple sobre isso. Isso nos leva a acreditar que esse problema será resolvido em uma das próximas atualizações.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Recomendamos mudar para o modo de filtragem [**Automatic Proxy**](#automatic-proxy) ao executar o AdGuard junto com Little Snitch no Big Sur, pelo menos até que a Apple corrija o bug.

### Compatibilidade com proxies locais

:::note

Agora o AdGuard pode filtrar proxies locais (em sua maioria) sem problemas. Se você encontrar algum problema nas versões 11.1+ do sistema operacional ou se estiver usando o Big Sur 11.0, remova o proxy local das configurações do sistema e configure um proxy upstream no AdGuard seguindo as instruções abaixo.

:::

Para configurar um proxy upstream no AdGuard para Mac em Big Sur:

1. Abra as configurações do AdGuard*Preferências → Rede → Proxy de saída*.
2. Escolha HTTP, HTTPS, SOCKS4 ou SOCKS5, dependendo do seu tipo de proxy.
3. Preencha os campos:
    - `host` é o endereço IP do seu servidor proxy,
    - `port`é o número da porta desejada a ser usada pelo servidor proxy,
    - `user` e `password` são o nome de usuário e a senha correspondentes do seu proxy (se necessário). Ignore um ou ambos quando não for aplicável.

Se você tiver algum problema, entre em contato com nosso suporte técnico em support@adguard.com.

#### Exemplo 1: configurando um proxy Shadowsocks upstream

Aqui está um exemplo de como configurar um proxy upstream para [Shadowsocks](https://shadowsocks.org).

Em primeiro lugar, você precisa de um servidor funcional para o seu proxy. Provavelmente, para configurá-lo, você usaria um arquivo JSON como este (os valores`server` e `password` foram escolhidos aleatoriamente aqui):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Então você teria que instalar o cliente Shadowsocks no seu Mac. Certifique-se de selecionar 'Modo Manual' ou 'Modo Automático' em suas configurações! A configuração não funcionará se você selecionar 'Modo Global' (ou 'Modo Automático' nas versões Big Sur anteriores a 11.1).

![Selecione Modo Manual ou Modo Automático nas configurações *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Agora, acesse o *Menu AdGuard → Avançado → Configurações avançadas...*.. e defina o campo *Value* da configuração `upstream.proxy` como `socks5://localhost:1080`. Observe que você precisa usar o valor "local_port" do arquivo JSON aqui.

Como Shadowsocks usa SOCKS5, você também precisa definir o valor da configuração `upstream.proxy.socks5udp` nas configurações avançadas do AdGuard como `true` para fazer a rota do AdGuard Tráfego UDP para o servidor proxy.

#### Exemplo 2: configurando um proxy Surge upstream

No Big Sur v11.1+, não há conflitos conhecidos entre o AdGuard e o proxy Surge. Se você estiver usando uma versão mais antiga do Big Sur (anterior a 11.1), verifique se **Proxy do sistema** no canto inferior direito está desativado. Caso contrário, o Surge não funcionará com o AdGuard. Por outro lado, o **o Modo Avançado** pode ser ativado sem causar conflitos em qualquer versão do Big Sur.

![Configurando um proxy Surge upstream *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Agora vá para *Preferências → Rede → Proxy de saída* e preencha os campos. Para o tipo de proxy SOCKS5:

- `host`: localhost
- `porta`: 6153 Para tipo de proxy HTTP:
- `host`: localhost
- `porta`: 6152

## Alternativas ao uso de uma extensão de rede

É impossível prever todos os possíveis problemas que podem surgir em Big Sur ou Monterey, existem inúmeras configurações de hardware/software e configurações. Se você enfrentar algum problema de compatibilidade, entre em contato com nossa equipe de suporte, mas sinta-se à vontade para tentar primeiro uma dessas soluções alternativas.

### Usando o modo de filtragem "Proxy automático" {#automatic-proxy}

Se você enfrentar problemas em Big Sur ou Monterey que não podem ser resolvidos por nenhum dos métodos acima, você pode tentar mudar o AdGuard para o modo *Proxy automático*.

1. Abra o menu do AdGuard.
1. Selecione *Preferências...*.
1. Alterne para a guia *Rede*.
1. Clique no botão *Selecionar modo...*.
1. Selecione *Proxy Automático*.

![Mude o AdGuard para o modo proxy automático](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Agora o AdGuard adicionou automaticamente um arquivo **.pac** às configurações de rede do seu Mac, para que o sistema considere o AdGuard um proxy e tente enviar todo o tráfego através do AdGuard.

:::note

Alguns aplicativos podem ignorar esta configuração do sistema e seu tráfego não será filtrado.

:::

### Ativando a extensão de kernel no Big Sur e Monterey {#kernel-extension}

Por padrão, o AdGuard usa a estrutura Network Extension no Big Sur e no Monterey, já que a antiga estrutura Kernel Extension está desativada. Isso pode causar alguns problemas de compatibilidade, mas para reativar a extensão do kernel, você precisa primeiro desabilitar a Proteção de Integridade do Sistema (SIP). Para desativar o SIP, siga estas instruções:

1. Clique no *símbolo da Apple* na barra de menu.
1. Clique em *Reiniciar…*
1. Mantenha pressionado *Command-R* para reiniciar no modo de recuperação.
1. Clique em *Utilitários*.
1. Selecione *Terminal*.
1. Digite `csrutil disable`.
1. Pressione *Retornar* ou *Entrar* no teclado.
1. Clique no *símbolo da Apple* na barra de menu.
1. Clique em *Reiniciar…*

Agora que o SIP está desabilitado, é assim que você habilita a extensão do kernel:

![Ative a extensão do kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Abra o menu do AdGuard.
1. Selecione *Preferências...*.
1. Alterne para a guia *Rede*.
1. Clique no botão *Selecionar modo...*.
1. Selecione *Extensão do Kernel*.
1. Confirme que deseja mudar para a extensão Kernel.

:::cuidado

No entanto, só recomendamos usar este método se tudo mais falhar, pois isso pode levar a problemas inesperados.

:::
