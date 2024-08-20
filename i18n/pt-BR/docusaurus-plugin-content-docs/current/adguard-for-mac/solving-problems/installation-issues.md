---
title: Solução de problemas de instalação
sidebar_position: 5
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Erro “Falha na instalação” no macOS Catalina

Durante a instalação você pode enfrentar um erro como este:

![Tela de erro de instalação](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Siga estas instruções para resolver o problema:

1. Reinicie o seu Mac
2. Enquanto o seu Mac reinicia, pressione e mantenha pressionadas as teclas *Command(⌘) + R* imediatamente ao ouvir o sinal sonoro de inicialização. Segure as teclas até que o logotipo da Apple apareça para colocar o computador no modo de recuperação.
3. Na barra superior, selecione *Utilitários* → *Terminal* e execute este comando: `csrutil disable`
4. Reinicie o Mac e faça login no perfil do administrador
5. Abra a janela do Finder e selecione na barra superior *Ir* → *Ir para pasta* e digite `~/private/`
6. Crie uma pasta chamada *tmp* e digite sua senha
7. Inicie a instalação do AdGuard

Quando a instalação for concluída, reinicie o seu Mac no modo de recuperação usando as instruções acima e execute o comando `csrutil enable` no Terminal para ativar a proteção do sistema.
