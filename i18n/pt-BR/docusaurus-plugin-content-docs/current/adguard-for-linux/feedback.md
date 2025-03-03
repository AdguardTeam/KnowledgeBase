---
title: Enviando feedback
sidebar_position: 4
---

## Relatando um problema ou sugerindo uma funcionalidade

Se você encontrou um bug no AdGuard para Linux ou deseja sugerir uma nova funcionalidade, veja como fazer isso:

- Preencha o [formulário de feedback](https://surveys.adguard.com/en/adguard_linux/form.html).
- Crie um [issue do GitHub](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Mas antes de fazer isso, verifique o [repositório](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) para problemas semelhantes.

:::note

Se você deseja oferecer suporte à implementação de um novo recurso ou correção de bug, pode votar nele no GitHub. Para votar, basta reagir com algum emoji.

:::

## Coletando e enviando logs

1. Ative o registro de depuração:

    `adguard-cli config set log_level debug`

2. Reproduza o problema e tente se lembrar da hora exata em que ocorreu.

3. Espere um momento, depois exporte os registros:

    `adguard-cli export-logs`

    O arquivo de registro arquivado será baixado para a pasta do aplicativo por padrão, e o caminho para os registros será mostrado no console.

4. Envie o arquivo de registro para <devteam@adguard.com>. Especifique a hora do erro e anexe um link ao seu GitHub ou seu número (ele aparece como #número ao lado do título). Como alternativa, você pode fazer upload do registro do arquivo para o Google Drive e compartilhá-lo com <devteam@adguard.com>. Anexe o link do arquivo ao seu problema do GitHub.

5. Alterne o nível de registro de volta para `info`:

    `adguard-cli config set log_level info`
