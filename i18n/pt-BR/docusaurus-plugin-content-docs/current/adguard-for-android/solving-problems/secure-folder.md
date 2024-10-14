---
title: Instalação do certificado em uma pasta segura
sidebar_position: 13
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Se você instalar o AdGuard em [a *pasta Segura* no seu Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (isso se aplica principalmente a dispositivos Samsung), você poderá enfrentar algumas dificuldades ao instalar o certificado HTTPS. O problema é que a *pasta segura* tem seu próprio espaço onde os certificados são armazenados. No entanto, se você fizer tudo de acordo com as instruções normais de instalação do certificado[(descritas aqui](/adguard-for-android/features/settings#https-filtering)), o certificado será instalado na memória principal e não desempenhará nenhuma função para o seu bloqueador de anúncios na *pasta segura*. Para resolver esse problema e instalar o certificado do seu AdGuard para Android no armazenamento *da pasta Secure*, siga estas instruções:

1. Após instalar o aplicativo e conectar a VPN local, toque em **ATIVAR** ao lado da mensagem *A filtragem HTTPS está desativada*.
1. Toque em **Próximo** → **Próximo** → **Salvar agora** → **Salvar certificado**.
1. Salve o certificado (nessa etapa, você pode renomeá-lo para facilitar sua localização mais tarde, o que será necessário fazer).
1. Após o pop-up *Instruções de instalação* aparecer, **NÃO** toque em **Abra Configurações**.
1. Minimize o aplicativo e vá para a *pasta segura*.
1. Toque no menu de três pontos e vá para **Configurações** →**Outras configurações de segurança**.
1. Toque em **Certificados de segurança** → **Instalar do armazenamento do dispositivo** → **Certificado CA** → **Instalar mesmo assim**
1. Confirme a instalação com sua chave gráfica/senha/impressão digital.
1. Localize e selecione o certificado salvo anteriormente e toque em **Concluído**.
1. Retorne ao aplicativo AdGuard e navegue de volta para a tela principal. Talvez seja necessário deslizar e reiniciar o aplicativo para se livrar da mensagem *A filtragem HTTPS está desativada*.
1. Pronto! O certificado foi instalado.
