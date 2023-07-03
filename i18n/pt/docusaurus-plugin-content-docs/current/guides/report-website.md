---
title: Como reportar um site
sidebar_position: 3
---


Ao usar bloqueadores de anúncios, você pode enfrentar o trabalho incorreto de determinados sites ou elementos de página quebrados. Esses problemas podem surgir devido a uma variedade de fatores:

* Regras de usuário incorretas;
* Algoritmos modificados para adicionar anúncios;
* Filtros/extensões de desenvolvedores terceirizados adicionados;
* Os autores de um dos filtros cometeram um erro ao criar a regra;
* Reinserção publicitária. Descubra mais sobre este método em nosso [blog](https://adguard.com/blog/ad-reinsertion.html).

Você pode nos ajudar preenchendo um formulário de inscrição com exemplos de anúncios que você encontrou. Para fazer isso, por favor, siga as instruções para o seu sistema operacional.

## Reportar um site {#report}

:::note

When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Com exceção das capturas de tela, você mesmo terá que criá-las e anexá-las. Se você estiver usando um link direto [](https://reports.adguard.com/new_issue.html), precisará inserir os dados manualmente.

:::

Para denunciar a reinserção de um anúncio ou exibição incorreta de um site, você precisa:

### Extensão para navegador {#extension}

* Abra as configurações de extensão do navegador clicando no ícone correspondente;
* Clique em **Relatar um problema**:

![extensão *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png)

* Depois de preencher o formulário, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Windows {#windows}

* Abra o [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) e clique em **Relate um problema**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

* Preencha o formulário para reportar uma reclamação;
* Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Android {#android}

* Abra as configurações do AdGuard;
* Escolha **Suporte**e depois **Enviar feedback** → **Anúncio perdido**Bloqueio****:

![android *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png)

* Depois de preencher o formulário, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Mac {#mac}

* Abra o [AdGuard Browser Assistant](/adguard-for-mac/browser-assistant) e clique em **Relatar um problema**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

* Preencha o formulário para reportar uma reclamação;
* Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### iOS {#ios}

* Abra as configurações do AdGuard;
* Selecione **Suporte**, depois **Relatar bloqueio incorreto**:

![ios *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png)

* Preencha o formulário para reportar uma reclamação;
* Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

## Preenchendo o formulário {#form}

:::note

When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Com exceção das capturas de tela, você mesmo terá que criá-las e anexá-las. Se você estiver usando um link direto [](https://reports.adguard.com/en/new_issue.html), precisará inserir os dados manualmente.

:::

1. O preenchimento do formulário começa com o detalhamento do tipo e versão de um produto;

![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Especifique o tipo de problema e informações adicionais sobre o uso de software de terceiros (antivírus, VPN);

![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Insira o endereço da página e o navegador (ou o link de download no caso de um app) onde encontrou o problema;

![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. A configuração do aplicativo deve ser especificada:
* Filtros que você usa;
* Definições do modo Stealth, se esta função estiver ativada.

![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Forneça uma captura de tela](../take-screenshot) que capture a essência do problema;

* **Importante**: Oculte suas informações pessoais (e-mail, número de telefone, etc.) porque as capturas de tela ficarão disponíveis publicamente.

![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Forneça informações adicionais que ajudarão os desenvolvedores de filtro a entender a situação;

Insira também sua conta no **GitHub**, se disponível (é necessário que os desenvolvedores possam entrar em contato com você caso precisem de alguns detalhes adicionais);

![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Verifique cada etapa antes de enviar o formulário;

![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. Você receberá um link para acompanhar o andamento de sua tarefa.

![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnóstico de um problema {#issue}

Esta opção é adequada para quem não tem medo de dificuldades e não se importa em tentar encontrar o problema por conta própria. Isso não requer nenhuma habilidade especial ou conhecimento profundo de HTML e CSS.

Por exemplo, você se depara com uma situação em que seu site favorito não abre, a autorização foi interrompida ou alguns elementos da página são exibidos incorretamente. A causa pode estar usando uma configuração específica de filtro/extensão/modo Stealth. Para diagnosticar esses problemas, você precisa fazer o seguinte:

### **Filtros**

1. Desative o **Bloqueador de anúncios**;
2. Se resolveu o problema, reative o módulo e desative os filtros um a um. Isso é feito para identificar os filtros que "quebram" a página;
3. Se você conseguiu descobrir qual filtro "quebra" uma página, informe os desenvolvedores ao preencher o formulário (veja acima). Neste caso, é desejável retornar às configurações iniciais;
4. Se desligar todos os filtros não produziu nenhum resultado, aplique a regra **@@||example.com^$document,extension**; onde **exemplo.com** é um exemplo de nome de site que precisa ser substituído por sua própria opção;
5. Em caso de falha (problema não resolvido), vá para a seção **Stealth Mode**.

### **Modo Stealth**

1. Desabilitar o **Modo Stealth**;
2. Se isso resolver o problema, ligue o módulo e desligue as opções **Stealth Mode** uma a uma. Isso é feito para detectar quais filtros estão "quebrando" a página;
3. Se você conseguiu detectar qual configuração "quebra" uma página, você deve informar os desenvolvedores ao preencher o formulário (veja acima). Neste caso, é desejável retornar às configurações iniciais;
4. Em caso de falha (problema não resolvido), vá para a seção **Extensões**.

### **Extensões**

1. Desabilitar **Extensões**;
2. Se isso resolver o problema, ligue o módulo e desative as configurações de **Extensões** uma a uma. Isso é feito para descobrir qual configuração "quebra" a página;
3. Se você conseguiu detectar qual configuração "quebra" uma página, informe os desenvolvedores ao preencher o formulário (veja acima). Neste caso, é desejável retornar às configurações iniciais.

### **Bloqueadores de terceiros**
Alguns navegadores e programas antivírus (como Yandex Browser, Kaspersky, etc.) possuem bloqueadores de anúncios integrados. Eles podem afetar e causar problemas no funcionamento dos sites. Se você usar esses programas, verifique se o problema está no **AdGuard**: desative a filtragem **AdGuard** e tente ver se ele se repete. Se persistir, significa que o problema é causado por outro aplicativo ou navegador. Se o problema for causado pelo **AdGuard**, siga as etapas descritas nos parágrafos anteriores.
