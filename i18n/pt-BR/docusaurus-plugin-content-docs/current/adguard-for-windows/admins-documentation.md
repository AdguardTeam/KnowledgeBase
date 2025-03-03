---
title: Documentação para administradores
sidebar_position: 5
---

Esta página descreve os recursos e detalhes sobre a gestão central de políticas e preferências do AdGuard.

## 1. Baixe o MSI {#msi-download}

Baixe o [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)

Baixe o [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Configure as configurações da sua rede {#settings-configuring}

Em máquinas que estão associadas a um domínio do Active Directory, as configurações de política também podem ser armazenadas no registro sob `HKEY_LOCAL_MACHINE` no seguinte caminho: `Software\Policies\AdGuard\`.

A única política compatível é `LicenseKey`. Se esta política for definida, o AdGuard a preferirá em vez do que o usuário pode inserir na interface. Esta chave de licença será usada para verificar o status da licença.

## 3. Certifique-se de que os servidores do AdGuard estejam disponíveis {#servers-available}

AdGuard conecta-se a dois hosts: `api.adguard.org` e `filters.adtidy.org`. Certifique-se de que ambos os servidores estejam disponíveis.

## 4. Envie o MSI para sua rede {#msi-push}

Se você geralmente usa SMS ou outras ferramentas, use-as para implantar o AdGuard MSI assim como faria normalmente com qualquer outro pacote de instalação.

Caso contrário, você pode executar o MSI na máquina de destino diretamente (e silenciosamente) com este comando: `Msiexec /q /i AdGuard.msi`

Se você precisar implementar uma atualização, use este comando: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Você deve executar esses comandos com privilégios de administrador.

:::

Se você quiser instalar o AdGuard em um computador com Windows 7, certifique-se de que o .NET 4 Client Profile esteja instalado: https://www.microsoft.com/es/download/details.aspx?id=24872

:::note

Se você instalou o AdGuard para Windows a partir de um arquivo MSI, o AdGuard não será atualizado automaticamente. Para permitir atualizações manuais:

- Nas versões estáveis lançadas após a v7.16, exclua o parâmetro `ForbidCheckUpdates` ou defina seu valor como `NO` (sem distinção entre maiúsculas e minúsculas) no registro sob `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- Nas versões v7.16 e anteriores, defina como `SIM` (não diferencia maiúsculas de minúsculas) o parâmetro `AllowCheckUpdates` para a chave `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` no sistema operacional x86 ou a chave `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` no sistema operacional x64. Qualquer outro valor ou nenhum valor para este parâmetro desativará atualizações automáticas.

Observe que tal instalação do aplicativo e atualizações manuais não são recomendadas e podem causar problemas técnicos.

:::

## 5. Teste sua instalação {#installation-test}

Em uma máquina de destino, inicie o AdGuard. Abra a tela de licença para verificar se está usando a licença especificada. Você pode precisar clicar em "Atualizar status" para fazer com que o AdGuard valide a chave de licença.
