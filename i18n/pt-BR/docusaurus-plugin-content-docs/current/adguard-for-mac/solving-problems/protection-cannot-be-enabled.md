---
title: A proteção não pode ser ativada
sidebar_position: 2
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Se a Proteção AdGuard não puder ser ativada por algum motivo, execute as seguintes etapas:

1. Clique no ícone do AdGuard na barra de menus e vá para *Avançado* → *Redefinir configurações...*. → *Sair do AdGuard...*

2. Na pesquisa do Spotlight, digite Terminal, insira `sudo rm -R /Library/Application\ Support/com.adguard.adguard` e execute.

3. Reinicie o computador.

4. Abra o Terminal novamente, digite `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` e execute. Você deverá receber o seguinte: `No such file or directory`.

5. Inicie o AdGuard e insira suas informações de login quando solicitado.
