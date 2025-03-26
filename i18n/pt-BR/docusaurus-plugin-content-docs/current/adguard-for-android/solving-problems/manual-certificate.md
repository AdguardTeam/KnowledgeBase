---
title: Instalação do certificado em dispositivos com Android 11+
sidebar_position: 11
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder [filtrar o tráfego HTTPS](/general/https-filtering/what-is-https-filtering.md) (o que é extremamente importante, pois a maioria dos anúncios usa HTTPS), o AdGuard precisa instalar seu certificado no armazenamento do usuário de seu dispositivo. Em versões mais antigas do sistema operacional Android, isso era feito automaticamente, mas no Android 11 e posteriores, os usuários precisam instalá-lo manualmente.

![Certificado *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Siga estas etapas para instalar o certificado do AdGuard:

1. Quando você vir a notificação *A filtragem HTTPS está desativada*, toque em *Ativar*.

1. Em seguida, serão apresentadas três telas que explicam:
    - Por que filtrar o tráfego HTTPS
    - A segurança deste processo de filtragem
    - A necessidade do certificado AdGuard

    Toque consecutivamente em *Próximo* → *Próximo* → *Salvar certificado*.

1. Toque em *Salvar* na parte inferior da pasta aberta *Baixar*.

1. Após salvar, toque em *Abrir Configurações*.

1. Toque em *Mais configurações de segurança* → *Credenciais de & criptografia* → *Instalar um certificado* → *Certificado CA*.

1. Você poderá ver um aviso. Se sim, toque em *Instalar mesmo assim* e digite seu PIN, se necessário.

1. Selecione o arquivo de certificado do AdGuard. Seu nome deve ser semelhante a *adguard_1342_020322.crt*.

E está tudo pronto! Depois que o certificado for instalado com sucesso, você terá a filtragem HTTPS ativada.

Observe que as etapas fornecidas são baseadas no smartphone Google Pixel 7. Se você estiver usando um dispositivo Android diferente, os nomes exatos do menu ou as opções podem variar. Para facilitar a navegação, considere pesquisar um certificado digitando “certificado” ou “credenciais” na barra de pesquisa de configurações.

Se você tiver problemas durante a instalação manual do certificado (por exemplo, você instalou o certificado, mas o aplicativo continua ignorando-o), você pode tentar uma das soluções abaixo.

1. Reiniciar o AdGuard.
2. Tente instalar o certificado correto (AdGuard Personal CA) mais uma vez.

Se você ainda encontrar um problema e não conseguir instalar o certificado, entre em contato com nossa equipe de suporte em support@adguard.com.
