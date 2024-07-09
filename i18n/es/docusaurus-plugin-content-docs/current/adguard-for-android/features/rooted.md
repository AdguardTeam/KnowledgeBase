---
title: Dispositivos rooteados
sidebar_position: 7
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Debido a las medidas de seguridad del sistema operativo Android, algunas funciones de AdGuard solo están disponibles en dispositivos rooteados. Aquí está la lista de ellos:

- El **filtrado HTTPS en la mayoría de las aplicaciones** requiere [instalar un certificado CA en el almacén del sistema](/adguard-for-android/features/settings#security-certificates), ya que la mayoría de las aplicaciones no confían en los certificados del almacén del usuario. La instalación de un certificado en el almacén del sistema solo es posible en dispositivos rooteados
- El [**modo de enrutamiento proxy automático**](/adguard-for-android/features/settings#routing-mode) requiere acceso raíz debido a las restricciones de Android en el filtrado de tráfico en todo el sistema
- El [**modo de enrutamiento proxy manual**](/adguard-for-android/features/settings#routing-mode) requiere acceso de root en Android 10 y versiones posteriores, ya que ya no es posible determinar el nombre de la aplicación asociada con un conexión filtrada por AdGuard
