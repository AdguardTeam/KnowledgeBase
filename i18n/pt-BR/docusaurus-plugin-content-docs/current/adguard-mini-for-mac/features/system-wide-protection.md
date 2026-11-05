---
title: Proteção em todo o sistema
sidebar_position: 9
---

A partir da versão 3.0, o AdGuard Mini para Mac apresenta a _Proteção em todo o sistema_, um recurso que bloqueia anúncios e rastreadores não apenas no Safari, mas também em outros aplicativos do Mac.

O recurso está disponível para usuários com uma licença do AdGuard. Você pode [comprar a licença agora mesmo](https://adguard.com/license.html) ou clicar em _Experimente grátis_ em _Proteção avançada_ para iniciar um período de teste gratuito de 14 dias.

:::caution

A _Proteção em todo o sistema_ é um recurso experimental. Ela pode não funcionar para todos devido a um [bug ainda não corrigido pela Apple](https://developer.apple.com/forums/thread/848364). Quando o recurso estiver estável para todos, ele passará a fazer parte dos recursos principais do AdGuard Mini.

:::

O recurso não funciona corretamente em algumas versões do macOS, incluindo a **26.7.2** e a **27.2**. Se você usa o **macOS 26.0 ou 27.0**, pode experimentar a _Proteção em todo o sistema_ normalmente. Observe que, se a _Proteção em todo o sistema_ funciona bem no seu macOS 27.0, ela provavelmente deixará de funcionar após a atualização para o macOS 27.2. Leve isso em consideração antes de atualizar o sistema.

Na versão estável, a _Proteção em todo o sistema_ fica oculta por padrão. Para exibi-la, acesse _Configurações_ → _Diversos_ e ative _Mostrar Proteção em todo o sistema (Experimental)_. A versão beta sempre exibe esse recurso.

![Opção experimental](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/swp-experimental-toggle.png)

## How it works

A _Proteção em todo o sistema_ utiliza o [**filtro de URL**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url) da Apple, uma API de filtragem do sistema usada para filtrar o tráfego em todo o sistema. Veja como funciona.

Primeiro, o macOS verifica uma URL em um filtro de Bloom — um pré-filtro armazenado no Mac que é atualizado em segundo plano. A maioria dos endereços é liberada localmente, sem que seja necessário fazer uma solicitação de rede para a verificação em si.

Se o pré-filtro encontrar uma possível correspondência, o macOS solicita uma decisão ao servidor do AdGuard usando a recuperação privada de informações (PIR). Esse método permite que o Mac solicite dados ao servidor sem revelar o endereço exato consultado. A solicitação não pode ser vinculada à sua conta ou ao seu dispositivo. Se o servidor não responder, a página será carregada normalmente.

Você pode ler [uma análise detalhada da abordagem da Apple para a filtragem em todo o sistema](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html) no nosso blog.

## Como ativar a Proteção em todo o sistema

Você encontrará a _Proteção em todo o sistema_ em _Proteção avançada_ no aplicativo AdGuard Mini. Para habilitá-la, ative a opção.

![Proteção em todo o sistema](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection.png)

Ao ativar a _Proteção em todo o sistema_ pela primeira vez, você receberá uma solicitação para instalar o filtro de URL no computador. Clique em _Instalar_. Em seguida, uma mensagem do sistema solicitará a adição de configurações de filtro. Esse é o comportamento padrão do macOS. O AdGuard não visualiza nem armazena nenhum desses dados.

![A Proteção em todo o sistema exige um filtro de URL](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

Após a instalação do filtro de URL, a _Proteção em todo o sistema_ permanecerá ativada por padrão. Se quiser desativá-la, desative a opção _Proteção em todo o sistema_ em _Proteção avançada_.

Você também pode clicar no menu de contexto no canto superior direito (⋮) e selecionar _Remover filtro de URL_. Se quiser redefinir o filtro sem excluí-lo para resolver problemas de conexão, escolha _Redefinir cache_.

Também é possível desativar o filtro de URL em _Ajustes do Sistema_ → _Rede_ → _VPN e Filtros_ → _Filtros e Proxies_ no Mac. Altere _Ativado_ para _Desativado_ no _menu Status_. O AdGuard Mini desativará a _Proteção em todo o sistema_ automaticamente.

## Níveis de proteção

Você pode escolher entre três níveis de proteção. O nível _Essencial_ é selecionado por padrão.

- _Essencial_ — bloqueia anúncios e rastreadores
- _Seguro_ — bloqueia anúncios, rastreadores, phishing e malware
- _Família_ — bloqueia anúncios, rastreadores, phishing, malware e conteúdo adulto

![Três níveis de proteção](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection.png)

## Solução de problemas

### A Proteção em todo o sistema não funciona no macOS 27.2

Isso ocorre devido a um [bug ainda não corrigido pela Apple](https://developer.apple.com/forums/thread/848364). Por esse motivo, a _Proteção em todo o sistema_ é atualmente um recurso experimental. Ela funciona no macOS 26 e 27.0, mas pode não funcionar corretamente no macOS 27.2 beta. Se você usa uma versão anterior do macOS, recomendamos permanecer nela até que a Apple corrija o bug.

### A Proteção em todo o sistema não funciona com todos os aplicativos ou navegadores

A cobertura depende de como cada aplicativo lida com as solicitações de rede, por isso alguns aplicativos podem não ser filtrados. Essa é uma limitação da Apple.

Navegadores baseados no Chromium, como Chrome, Edge, Opera e Brave, usam seu próprio código de rede em vez dos frameworks da Apple, por isso o filtro de URL não consegue verificar suas solicitações.

### A Proteção em todo o sistema não é ativada

- **Seu Mac usa uma versão antiga do macOS.** O filtro de URL da Apple exige o macOS 26 Tahoe ou posterior. Nas versões anteriores, a opção fica desativada e o aplicativo solicita que você _Atualize para o macOS Tahoe 26 ou posterior_.
- **Sua conta não é compatível.** A _Proteção em todo o sistema_ só funciona com a primeira conta de usuário criada no Mac. Se sua conta foi adicionada posteriormente, a opção fica desativada e exibe _Não compatível com esta conta do Mac_. Consulte [Posso alterar o ID de usuário da minha conta do Mac?](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id) abaixo.
- **A opção está oculta.** Na versão estável, a _Proteção em todo o sistema_ fica oculta por padrão. Acesse _Configurações_ → _Diversos_ e ative _Mostrar Proteção em todo o sistema (Experimental)_.
- **Você está usando a versão gratuita.** Para usar a _Proteção em todo o sistema_, [compre uma licença do AdGuard](https://adguard.com/license.html) ou clique em _Experimente grátis_ em _Proteção avançada_ para iniciar um período de teste gratuito de 14 dias.

### Posso alterar o ID de usuário da minha conta do Mac?

Sim. A _Proteção em todo o sistema_ só funciona com a primeira conta de usuário criada no Mac, cujo ID de usuário (UID) é 501. Se o seu Mac tiver mais de uma conta ou se você migrou sua conta de um Mac mais antigo, seu UID pode ser diferente. Siga as etapas abaixo para verificar seu UID e, se necessário, liberar o UID 501 e atribuí-lo à sua conta.

:::warning

Essa é uma operação avançada e arriscada. Faça isso apenas se não houver outra opção. Liberar o UID 501 significa excluir uma conta existente e criar uma nova pelo Terminal. Se algo der errado, isso pode causar a perda permanente de dados. Faça backup de todos os dados do seu Mac antes de prosseguir.

:::

1. **Verifique seu UID atual.** Abra o Terminal, digite `id -u` e pressione Return. Se o resultado for 501, sua conta já tem o UID correto. Você não precisa fazer mais nada.

2. **Descubra qual conta tem o UID 501.** Se o seu UID não for 501, execute este comando:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   Isso mostra o nome de usuário, o UID e o nome completo dessa conta. Verifique se não precisa de nenhum arquivo dessa conta ou faça backup dos arquivos antes de continuar.

3. **Exclua a conta com o UID 501.** Com sua própria conta de administrador conectada, abra _Ajustes do Sistema_ → _Usuários e Grupos_, selecione a conta da etapa 2 e exclua-a. Quando o macOS perguntar o que fazer com a pasta pessoal da conta, escolha _Salvar a pasta pessoal em uma imagem de disco_ — isso preserva os arquivos da conta caso você precise deles depois.

4. **Crie uma nova conta com o UID 501.** Execute o comando a seguir, substituindo `username` e `Name Surname` pelos dados desejados:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` faz com que o Terminal solicite a senha de forma interativa; `-admin` concede privilégios de administrador à nova conta.

5. **Verifique a alteração.** Entre na nova conta e confira o UID novamente: abra o Terminal, digite `id -u` e pressione Return. O resultado agora deve ser 501.
