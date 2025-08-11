---
title: Instalación del certificado en una carpeta segura
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Guarda el certificado (en esta etapa, puedes cambiarle el nombre para que sea más fácil localizarlo más adelante).
1. Después de que aparezca la ventana emergente *Instrucciones de instalación*, **NO** toca **Abrir Configuración**.
1. Minimiza la aplicación y ve a la *carpeta segura*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Confirma la instalación con tu clave gráfica/contraseña/huella digital.
1. Busca y selecciona el certificado previamente guardado, luego toca **Listo**.
1. Return to the AdGuard app and navigate back to the main screen.
1. ¡Listo! El certificado ha sido instalado.
