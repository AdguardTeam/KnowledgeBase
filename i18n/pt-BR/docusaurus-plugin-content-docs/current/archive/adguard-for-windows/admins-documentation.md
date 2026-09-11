---
title: Documentação para administradores
sidebar_position: 5
---

Esta página descreve os recursos e detalhes sobre a gestão central de políticas e preferências do AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Se esta política for definida, o AdGuard a preferirá em vez do que o usuário pode inserir na interface. Esta chave de licença será usada para verificar o status da licença.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Certifique-se de que ambos os servidores estejam disponíveis.

## 4. Push the MSI out to your network {#msi-push}

Se você geralmente usa SMS ou outras ferramentas, use-as para implantar o AdGuard MSI assim como faria normalmente com qualquer outro pacote de instalação.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Você deve executar esses comandos com privilégios de administrador.

:::

Se você quiser instalar o AdGuard em um computador com Windows 7, certifique-se de que o .NET 4 Client Profile esteja instalado: https://www.microsoft.com/es/download/details.aspx?id=24872

:::note

Se você instalou o AdGuard para Windows a partir de um arquivo MSI, o AdGuard não será atualizado automaticamente. Para permitir atualizações manuais:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Qualquer outro valor ou nenhum valor para este parâmetro desativará atualizações automáticas.

Observe que tal instalação do aplicativo e atualizações manuais não são recomendadas e podem causar problemas técnicos.

:::

## 5. Test your installation {#installation-test}

Em uma máquina de destino, inicie o AdGuard. Abra a tela de licença para verificar se está usando a licença especificada. Você pode precisar clicar em "Atualizar status" para fazer com que o AdGuard valide a chave de licença.
