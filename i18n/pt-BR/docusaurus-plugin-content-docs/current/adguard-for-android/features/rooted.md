---
title: Dispositivos enraizados
sidebar_position: 7
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

Devido às medidas de segurança do sistema operacional Android, alguns recursos do AdGuard estão disponíveis apenas em dispositivos com acesso root. Aqui está a lista deles:

- **A filtragem HTTPS na maioria dos aplicativos** requer [instalar um certificado CA no armazenamento do sistema](/adguard-for-android/features/settings#security-certificates), já que a maioria dos aplicativos não confia em certificados no armazenamento do usuário. A instalação de um certificado no armazenamento do sistema só é possível em dispositivos com acesso root
- O [**modo de roteamento proxy automático**](/adguard-for-android/features/settings#routing-mode) requer acesso root devido às restrições do Android na filtragem de tráfego em todo o sistema
- O [**modo de roteamento proxy manual**](/adguard-for-android/features/settings#routing-mode) requer acesso root no Android 10 e superior, pois não é mais possível determinar o nome do aplicativo associado a um conexão filtrada pelo AdGuard
