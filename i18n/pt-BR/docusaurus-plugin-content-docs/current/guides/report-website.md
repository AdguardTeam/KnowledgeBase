---
title: Como reportar um site
sidebar_position: 3
---


Ao usar bloqueadores de anúncios, você pode enfrentar o trabalho incorreto de determinados sites ou elementos de página quebrados. Esses problemas podem surgir devido a uma variedade de fatores:

- Regras de usuário incorretas;
- Algoritmos modificados para adicionar anúncios;
- Filtros/extensões de desenvolvedores terceirizados adicionados;
- Os autores de um dos filtros cometeram um erro ao criar a regra;
- Reinserção publicitária. Find more about this method in our [blog](https://adguard.com/en/blog/ad-reinsertion.html).

Você pode nos ajudar preenchendo um formulário de inscrição com exemplos de anúncios que você encontrou. Para fazer isso, por favor, siga as instruções para o seu sistema operacional.

## Reportar um site {#report}

:::note

When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Com exceção das capturas de tela, você mesmo terá que criá-las e anexá-las. Se você estiver usando um link direto [](https://reports.adguard.com/new_issue.html), precisará inserir os dados manualmente.

:::

Para denunciar a reinserção de um anúncio ou exibição incorreta de um site, você precisa:

### Extensão para navegador {#extension}

- Abra as configurações de extensão do navegador clicando no ícone correspondente;
- Clique em **Relatar um problema**:

![extensão *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png)

- Depois de preencher o formulário, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Windows {#windows}

- Abra o [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) e clique em **Relate um problema**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Preencha o formulário para reportar uma reclamação;
- Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Android {#android}

- Abra as configurações do AdGuard;
- Choose **Support**, then **Send Feedback** → **Missed ad**/**Incorrect blocking**:

![android *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png)

- Depois de preencher o formulário, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### Mac {#mac}

- Abra o [AdGuard Browser Assistant](/adguard-for-mac/browser-assistant) e clique em **Relatar um problema**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Preencha o formulário para reportar uma reclamação;
- Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

### iOS {#ios}

- Abra as configurações do AdGuard;
- Selecione **Suporte**, depois **Relatar bloqueio incorreto**:

![ios *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png)

- Preencha o formulário para reportar uma reclamação;
- Depois de fazer isso, um problema no [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) será criado automaticamente. Haverá também um link para monitorar o andamento da solução do seu problema.

## Preenchendo o formulário {#form}

:::note

When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Com exceção das capturas de tela, você mesmo terá que criá-las e anexá-las. Se você estiver usando um link direto [](https://reports.adguard.com/new_issue.html), precisará inserir os dados manualmente.

:::

1. Filling in the form starts with detailing the type and version of a product;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. Application configuration must be specified:

    - Filtros que você usa;
    - Stealth mode settings, if this function is enabled.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Provide a screenshot](../take-screenshot) that captures the essence of a problem;

    - **Important**: Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Provide additional information that will help filter developers understand the situation;

    Also enter your account on **GitHub**, if available (it's necessary for developers to be able to reach you in case they need some additional details);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Check each step before sending the form;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. You'll be provided with a link to track progress on your task.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnóstico de um problema {#issue}

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **Filtros**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. If turning off all the filters hasn't produced any results, apply rule **@@||example.com^$document,extension**; where **example.com** is an example site name that needs to be replaced by your own option;
5. In case of failure (issue not solved), turn to section **Stealth Mode**.

### **Modo Stealth**

1. Disable **Stealth Mode**;
2. If this solved the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3. If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. In case of failure (issue not solved), turn to section **Extensions**.

### **Extensões**

1. Disable **Extensions**;
2. If this solved the problem, turn on the module and turn off **Extensions** settings one by one. This is done to find out which setting "breaks" the page;
3. If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.

### **Bloqueadores de terceiros**

Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites. If you use such programs, make sure that the problem is on the side of **AdGuard**: disable **AdGuard** filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser. If the problem is caused by **AdGuard**, follow the steps described in the previous paragraphs.
