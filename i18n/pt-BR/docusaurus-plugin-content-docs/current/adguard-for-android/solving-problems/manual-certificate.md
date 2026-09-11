---
title: Instalação do certificado em dispositivos com Android 11+
sidebar_position: 11
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder [filtrar o tráfego HTTPS](/general/https-filtering/what-is-https-filtering.md) (o que é extremamente importante, pois a maioria dos anúncios usa HTTPS), o AdGuard precisa instalar seu certificado no armazenamento do usuário de seu dispositivo. Em versões mais antigas do sistema operacional Android, isso era feito automaticamente, mas no Android 11 e posteriores, os usuários precisam instalá-lo manualmente.

![Certificado *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Siga estas etapas para instalar o certificado do AdGuard:

1. Abra o aplicativo. Na tela *Início*, toque em *A filtragem de HTTPS está desativada*.

1. Em seguida, serão apresentadas três telas que explicam:
    - Por que filtrar o tráfego HTTPS
    - A segurança deste processo de filtragem
    - Certificado do AdGuard

1. Toque em *Salvar* na parte inferior da pasta aberta *Baixar*.

1. Após salvar, toque em *Abrir Configurações*.

1. Após salvar, copie o texto do campo *Certificado da CA* e toque em *Abrir Ajustes*.

1. Você poderá ver um aviso. Se sim, toque em *Instalar mesmo assim* e digite seu PIN, se necessário.

1. Selecione o arquivo de certificado do AdGuard. Seu nome deve ser semelhante a *adguard_1342_020322.crt*.

1. Selecione o arquivo de certificado do AdGuard. O nome dele deve ser semelhante a *adguard_1342_020322.crt*.

E está tudo pronto! Depois que o certificado for instalado com sucesso, você terá a filtragem HTTPS ativada.

Se você tiver problemas durante a instalação manual do certificado (por exemplo, você instalou o certificado, mas o aplicativo continua ignorando-o), você pode tentar uma das soluções abaixo.

1. Reiniciar o AdGuard.
1. Tente instalar o certificado correto (AdGuard Personal CA) mais uma vez.

## Avisos de segurança

Em versões anteriores do Android, o painel de configurações rápidas exibia a mensagem “A rede pode ser monitorada”. Ao tocar nele, uma janela com informações detalhadas será aberta.

A partir do Android 15, além de “A rede pode estar sendo monitorada”, os usuários verão uma notificação de aviso após instalar um certificado e reiniciar o dispositivo: “Autoridades certificadoras instaladas por um terceiro desconhecido.” Isso significa que o sistema detectou certificados de terceiros no repositório de certificados do usuário. Tocar na notificação abre uma lista de certificados no repositório de certificados do usuário.

Apesar desses avisos, seu tráfego permanece seguro. Sua conexão com servidores remotos permanece criptografada. O que o AdGuard faz é simplesmente verificar o certificado do servidor antes de decidir se deve filtrar a conexão — de forma semelhante ao funcionamento de um navegador.

[Saiba mais sobre a filtragem HTTPS e como o certificado funciona](/general/https-filtering/what-is-https-filtering.md).

Se você ainda tiver algum problema e não conseguir instalar o certificado, entre em contato com nossa equipe de suporte pelo e-mail [support@adguard.com](mailto:support@adguard.com).
