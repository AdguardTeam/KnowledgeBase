---
title: Como voltar para a versão anterior após atualizar para a v8.0
sidebar_position: 12
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

As mudanças no AdGuard para Windows v8.0 são significativas e esperamos que você goste da nova versão. No entanto, é provável que algo não saia como você esperava. A versão 8.0 é muito diferente; afinal, é a primeira nightly. Se você achar a interface da versão 8.0 desconfortável ou tiver encontrado muitos problemas de funcionalidade/estabilidade, é possível restaurar a versão anterior junto com suas configurações.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

Como alternativa, o seguinte método também está disponível:

1. Após atualizar para a versão 8, abra a pasta `C:\ProgramData\Adguard\Backups` e encontre um arquivo ZIP com um nome semelhante a `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. Desinstale a versão 8.0 com a opção **remoção de configuração** ativada.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Saia da versão 7 a partir da bandeja do sistema para interromper a filtragem.
6. Extraia o conteúdo do arquivo ZIP do primeiro passo e substitua os seguintes arquivos:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` e `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Inicie o AdGuard.

Tudo pronto!
