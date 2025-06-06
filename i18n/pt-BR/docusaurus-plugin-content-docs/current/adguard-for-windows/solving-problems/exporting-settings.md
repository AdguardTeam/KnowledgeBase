---
title: Como voltar para a versão anterior após atualizar para a v8.0
sidebar_position: 11
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

As mudanças no AdGuard para Windows v8.0 são significativas e esperamos que você goste da nova versão. No entanto, é provável que algo não saia como você esperava. A versão 8.0 é muito diferente; afinal, é a primeira nightly. Se você achar a interface da versão 8.0 desconfortável ou tiver encontrado muitos problemas de funcionalidade/estabilidade, é possível restaurar a versão anterior junto com suas configurações.

Para garantir que suas configurações sejam preservadas durante todo o processo, é recomendável exportá-las antes de atualizar para a v8.0; assim, se necessário, você poderá reinstalar a versão 7 e importar novamente suas configurações salvas.

Como alternativa, o seguinte método também está disponível:

1. Após atualizar para a versão 8, abra a pasta `C:\ProgramData\Adguard\Backups` e encontre um arquivo ZIP com um nome semelhante a `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copie este arquivo zip para algum lugar fora de `C:\ProgramData\Adguard`, por exemplo, para a área de trabalho (isso é importante porque ele será excluído na próxima etapa).
3. Desinstale a versão 8.0 com a opção **remoção de configuração** ativada.
4. Instale a versão 7 instalada antes da atualização.
5. Saia da versão 7 a partir da bandeja do sistema para interromper a filtragem.
6. Extraia o conteúdo do arquivo ZIP do primeiro passo e substitua os seguintes arquivos:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` e `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Inicie o AdGuard.

Tudo pronto!
