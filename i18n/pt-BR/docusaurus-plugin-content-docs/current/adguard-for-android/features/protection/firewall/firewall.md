---
title: Firewall
sidebar_position: 1
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O módulo Firewall pode ser acessado tocando na guia _Proteção_ (segundo ícone à esquerda na parte inferior da tela) e selecionando _Firewall_.

Este recurso ajuda a gerenciar o acesso à Internet para aplicativos específicos instalados no seu dispositivo e para o dispositivo em geral.

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### Regras globais de firewall

Esta seção permite controlar o acesso à Internet para todo o dispositivo.

![Regras globais de firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Essas regras se aplicam a todos os aplicativos do seu dispositivo, a menos que você defina regras personalizadas para eles.

### Regras de firewall personalizadas

Nesta seção, você pode controlar o acesso à Internet para aplicativos específicos: restringir permissões para aqueles que você não considera confiáveis ou, pelo contrário, desbloquear aqueles que você deseja contornar as regras globais de firewall.

1. Abra _Regras de firewall personalizadas_. Em _Aplicativos com regras personalizadas_, toque em _Adicionar aplicativo_.

   ![Regras de firewall personalizadas \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. Selecione o aplicativo para o qual deseja definir regras individuais.

   ![Adicionando um aplicativo às regras de firewall personalizadas \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. Em _Regras personalizadas disponíveis_, selecione aquelas que deseja configurar e toque no ícone “+”. As regras agora aparecerão em _Regras personalizadas aplicadas_.

   ![Regra adicionada \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. Se você precisar bloquear um tipo específico de conexão, alterne a chave para a esquerda. Se você quiser permitir isso, deixe a chave ativada. **As regras personalizadas substituem as globais**: quaisquer alterações feitas nas _Regras globais de firewall_ não afetarão este aplicativo.

Para excluir uma regra ou aplicativo de _Regras personalizadas_, deslize-o para a esquerda.

### Notifications

If enabled, this feature notifies you when an app is attempting to violate an applicable firewall rule, e.g. attempts to access mobile data from which it is blocked. You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
