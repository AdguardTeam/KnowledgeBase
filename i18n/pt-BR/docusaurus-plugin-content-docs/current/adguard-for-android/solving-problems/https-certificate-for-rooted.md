---
title: Mover o certificado CA para o armazenamento do sistema em dispositivos com root
sidebar_position: 13
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

O AdGuard para Android pode [filtrar o tráfego HTTPS criptografado](/general/https-filtering/what-is-https-filtering), bloqueando assim a maioria dos anúncios e rastreadores em sites. Em dispositivos com root, o AdGuard também permite filtrar tráfego HTTPS em aplicativos. A filtragem HTTPS requer a adição do certificado CA do AdGuard à lista de certificados confiáveis.

Em dispositivos sem root, os certificados CA podem ser instalados no **armazenamento do usuário**. Apenas um subconjunto limitado de aplicativos (principalmente navegadores) confia nos certificados CA instalados no armazenamento do usuário, o que significa que a filtragem HTTPS funcionará apenas para esses aplicativos.

Em dispositivos com root, você pode instalar um certificado no **armazenamento do sistema**. Isso permitirá que o AdGuard filtre tráfego HTTPS também em outros aplicativos.

Veja como fazer isso.

## Como instalar o certificado do AdGuard no repositório do sistema

1. Abra o *AdGuard → Configurações → Filtragem → Rede → Filtragem de HTTPS → Certificados de segurança*.

1. Se você ainda não tiver nenhum certificado, **instale o AdGuard Personal CA no armazenamento do usuário**. Isso permitirá que o AdGuard filtre o tráfego HTTPS nos navegadores.

1. **Instale o AdGuard Intermediate CA no armazenamento do usuário**. Você precisará dele para executar o módulo adguardcert Magisk que permite mover certificados para o armazenamento do sistema.

    ![Instalar o certificado *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Instale a versão mais recente [do módulo Magisk **adguardcert**](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Abra *Magisk → Módulos → Instalar do armazenamento* e selecione o arquivo **adguardcert** baixado. O certificado CA pessoal do AdGuard será copiado para o armazenamento do sistema.

    ![Abra os módulos do Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Instale a partir do armazenamento *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Selecione adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Toque em **Reiniciar**.

    ![Reinicie o dispositivo *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Após a transferência, o **AdGuard Personal CA** no armazenamento do sistema permitirá que você filtre o tráfego HTTPS em aplicativos, enquanto o **AdGuard Intermediate CA** no armazenamento do usuário permitirá que você filtre o tráfego HTTPS em navegadores baseados em Chromium (veja o porquê abaixo).

## Problemas conhecidos com navegadores Chrome e baseados em Chromium

O Chrome e outros navegadores baseados no Chromium exigem logs de Transparência de Certificado (CT) para certificados localizados no armazenamento do sistema. Os registros de CT não contêm informações sobre certificados emitidos por aplicativos de filtragem de HTTPS. Portanto, o AdGuard requer um certificado adicional no armazenamento do usuário para filtrar o tráfego HTTPS nesses navegadores.

### Navegador Bromite

Além do problema acima, o Bromite não confia nos certificados no armazenamento do usuário por padrão. Para filtrar o tráfego HTTPS lá, abra o Bromite, vá para `chrome://flags`e defina *Permitir certificados de usuário* como *Ativado*. **Isso se aplica tanto a dispositivos com root quanto a dispositivos sem root**.
