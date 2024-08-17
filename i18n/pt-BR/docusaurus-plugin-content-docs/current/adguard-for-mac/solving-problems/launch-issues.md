---
title: Problemas de inicialização no macOS
sidebar_position: 6
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Ocasionalmente, o macOS pode causar a corrupção do módulo de extensão de rede do AdGuard, tornando-o incapaz de usar o aplicativo. Neste caso, você deve seguir uma destas instruções, com base na versão do seu sistema operacional.

## Problemas de inicialização no macOS 11 e superior

Se você tiver problemas para iniciar o AdGuard para Mac nos sistemas operacionais Big Sur e Monterey, use estas instruções:

1. Reinicie o Mac e entre em [modo de recuperação](https://support.apple.com/en-us/HT201255).
1. Desative o SIP (abra o **Terminal** no menu **Utilitários** e digite `csrutil disable`).
1. Reinicie o Mac.
1. Feche o aplicativo AdGuard, abra o **Terminal** e digite `systemextensionsctl reset`.
1. Reinicie o Mac e entre no modo de recuperação.
1. Ative o SIP (Inicie o **Terminal** a partir do menu **Utilitários** e digite `csrutil enable`).
1. Inicie o aplicativo AdGuard e ative a proteção.

## Problemas de inicialização no macOS 10

Se você tiver problemas para iniciar o AdGuard para Mac nos sistemas operacionais Sierra, Mojave e Catalina, siga estas instruções:

1. Abra **Terminal** e digite o comando `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Verifique se o sinalizador `restrito` não está presente (como na captura de tela). ![Exemplo de comando *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Reinicie o seu Mac no modo de recuperação.
1. Abra **Utilitários** → **Terminal**.
1. Digite `csrutil disable`.
1. Digite a senha do administrador.
1. Reinicie o seu Mac.
1. Abra o **Terminal** e digite o seguinte comando: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reinicie o seu Mac no modo de recuperação.
1. Abra **Utilitários** → **Terminal** → Digite `csrutil enable` → Digite a senha do administrador → Reinicie o seu Mac.
1. Ative a proteção do AdGuard.
