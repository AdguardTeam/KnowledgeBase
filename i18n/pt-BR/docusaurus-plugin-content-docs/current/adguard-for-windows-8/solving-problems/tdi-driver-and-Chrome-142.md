---
title: Problemas de filtragem no Chrome 142+ ao usar o driver TDI
sidebar_position: 1
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

Alguns usuários do AdGuard para Windows podem notar que [o aplicativo para de filtrar o tráfego em navegadores baseados no Chromium](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). A partir do Google Chrome 142+, o tráfego do navegador simplesmente não aparece no nível do driver TDI, impedindo que o AdGuard o inspecione ou filtre.

Esse comportamento não é um bug do AdGuard, mas sim resultado de mudanças recentes na arquitetura e na segurança dos navegadores modernos.

## Por que isso acontece

Navegadores baseados em Chromium (Chrome, Edge, Brave, Vivaldi, etc.) têm fortalecido sua arquitetura de segurança. Uma mudança significativa é mover processos internos sensíveis para o [sandbox Windows AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), incluindo o Serviço de Rede, que gerencia todo o tráfego do navegador.

### O que mudou no Chrome 142

A partir do Chrome 142, o processo do Serviço de Rede agora é lançado dentro do AppContainer por padrão.

Quando isso acontece, aplicativos executados em um AppContainer não usam a interface de rede legada TDI; em vez disso, seu tráfego é roteado pelo stack WSK (Winsock Kernel) mais moderno. Como resultado, o driver TDI não pode ver, interceptar ou processar conexões que passam pelo WSK, e todo o tráfego do navegador se torna invisível para o driver TDI utilizado pelo AdGuard.

Esse comportamento é controlado inteiramente pelas políticas de sandboxing e experimentos internos (testes de campo) do Chrome, não pelas configurações do usuário.

## Por que isso afeta o AdGuard

O driver TDI é uma tecnologia do Windows obsoleta que foi descontinuada e não é mais suportada pela Microsoft há muitos anos. Não é compatível com os modelos modernos de isolamento e sandbox utilizados pelos navegadores.

Por causa disso, a visibilidade do tráfego baseada em TDI torna-se cada vez mais instável. Em alguns navegadores, ele já desapareceu completamente e, eventualmente, deixará de funcionar por completo.

O AdGuard já considera o driver TDI obsoleto e sua remoção completa está planejada conforme o produto evolui.

## Solução permanente

A partir da v8.0 RC, adicionamos suporte experimental para o driver SockFilter. Ele corrige o problema ao resolver conflitos no stack WFP. [Mais informações](/adguard-for-windows-8/settings/app-settings/network-settings/).

Para usá-lo, vá para _Configurações → Rede → Filtragem de tráfego_, ative a filtragem de tráfego e selecione _SockFilter (Experimental)_ na lista de opções disponíveis.

Por ser experimental, pode haver bugs. Se você notar algo incomum, inesperado ou simplesmente com defeito, **você pode voltar para TDI ou WFP a qualquer momento** na mesma seção.

## Solução temporária

Certas alterações no registro do Windows podem forçar o navegador a parar de usar AppContainer, fazendo com que seus processos voltem a ser executados em modo não-sandboxed. O serviço de rede para de usar a pilha WSK e recorre a um caminho de rede que o driver TDI pode enxergar. O AdGuard recupera então a capacidade de filtrar o tráfego do navegador.

### Como modificar o registro em navegadores baseados no Chromium

:::warning

Direitos de administrador são obrigatórios para editar o registro. Alterações incorretas podem afetar a estabilidade e a segurança do sistema ou do navegador. Sempre crie um backup do ramo do registro antes de modificá-lo.

Antes de prosseguir, tenha em mente que essa solução reduz a segurança do sandbox/AppContainer, tornando o navegador menos isolado. Aplica-se em todo o sistema porque modifica o `HKLM`, e deve ser usado apenas para depuração, soluções temporárias, em ambientes controlados, ou quando a interceptação de tráfego baseada em TDI for estritamente necessária.

Isso **não** deve ser aplicado de forma ampla em máquinas de usuários finais. **Proceda apenas se compreender as implicações.**

:::

Você pode aplicar as alterações de registro necessárias automaticamente usando um dos arquivos .reg pré-gerados abaixo. Cada arquivo desativa o sandboxing de AppContainer/Serviço de Rede para um navegador específico baseado em Chromium:

- [Baixar Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Baixar Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Baixar Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Baixar Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Baixar Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Baixar YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Se o seu navegador não estiver listado, siga as instruções manuais abaixo para criar as entradas necessárias no registro:

1. Determine sua filial de política verificando a documentação oficial do fornecedor ou abrindo a página de política interna. No Chrome, navegue até `chrome://policy`. Outros navegadores usam um caminho semelhante.

2. Identifique o ramo do registro correto para o seu navegador. Diferentes navegadores baseados no Chromium utilizam diferentes caminhos de política sob `HKLM`. Deve seguir o modelo `HKLM\SOFTWARE\Policies\<Vendor>\<Product>`.

3. Abra o Editor do Registro:

   - Pressione _Win + R_
   - Digite _regedit_ e pressione _Enter_
   - Aprovar o prompt UAC executando-o como administrador

4. Faça backup do ramo de Políticas:

   - No painel esquerdo, navegue até `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Clique com o botão direito em _Políticas_ → _Exportar_
   - Salvar o arquivo como _Policies_backup.reg_

   Se algo der errado, você pode restaurar o backup dando um duplo clique neste arquivo.

5. Navegue até a chave de política do seu navegador:

   - Expanda o caminho `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Políticas_.
   - Localize a pasta correspondente ao seu navegador.

Se a chave não existir, você pode criá-la manualmente. Exemplo para o Chrome:

- Clique com o botão direito em _Políticas_ → _Nova_ → _Chave_ e nomeie-a como `Google`
- Dentro do `Google`, crie outra chave chamada `Chrome`

Repita a mesma lógica para Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. Você deverá obter uma chave semelhante a `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Adicione os valores de registro necessários:

   - Na chave correta, clique no painel direito → _Novo_ → _Valor DWORD (32 bits)_

   - Dê o nome de `RendererAppContainerEnabled`

   - Clique duas vezes e defina:

     - **Valor:** 0
     - **Base:** Hexadecimal ou Decimal (pode ser qualquer um)

   - Repita o processo e crie um segundo DWORD `NetworkServiceSandboxEnabled`.

   - Defina seu valor como 0.

   Ambos os parâmetros devem ser do tipo `REG_DWORD` e ter o valor **0**.

2. Feche o navegador e aplique as configurações. Para garantir que a política seja carregada:

   - Feche completamente o navegador
   - Verifique o Gerenciador de Tarefas e certifique-se de que nenhum processo como _chrome.exe_, _msedge.exe_, _brave.exe_ continue em execução
   - Abra novamente o navegador

3. Verifique se as políticas foram aplicadas abrindo o visualizador de políticas do seu navegador.

Você deve ver as seguintes políticas ativas:

- `RendererAppContainerEnabled` — **0 / falso**
- `NetworkServiceSandboxEnabled` — **0 / falso**

Se disponível, clique em _Recarregar políticas_.

Pronto!
