---
title: Dispositivos rooteados
sidebar_position: 7
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Debido a las medidas de seguridad del sistema operativo Android, algunas funciones de AdGuard solo están disponibles en dispositivos rooteados. Aquí está la lista de ellos:

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- El [**modo de enrutamiento proxy automático**](/adguard-for-android/features/settings#routing-mode) requiere acceso raíz debido a las restricciones de Android en el filtrado de tráfico en todo el sistema
- El [**modo de enrutamiento proxy manual**](/adguard-for-android/features/settings#routing-mode) requiere acceso de root en Android 10 y versiones posteriores, ya que ya no es posible determinar el nombre de la aplicación asociada con un conexión filtrada por AdGuard
