---
title: Certificate installation in a Secure folder
sidebar_position: 13
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard to [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is, the *Secure folder* has its own space where the certificates are stored. However, if you do everything according to the regular certificate installation instructions ([described here](/adguard-for-android/features/settings#https-filtering)), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. To solve this problem and install the certificate for your AdGuard for Android into the *Secure folder's* storage, please follow these instructions instead:

1. After installing the app and connecting the local VPN, tap **ENABLE** next to the *HTTPS filtering is off* message.
1. Tap **Next** → **Next** → **Save it now** → **Save certificate**.
1. Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do).
1. Después de que aparezca la ventana emergente *Instrucciones de instalación*, **NO** toca **Abrir Configuración**.
1. Minimiza la aplicación y ve a la *carpeta segura*.
1. Toca el menú de tres puntos y ve a **Configuración** →**Otras configuraciones de seguridad**.
1. Toca **Certificados de seguridad** → **Instalar desde el almacenamiento del dispositivo** → **Certificado de CA** → **Instalar**
1. Confirma la instalación con tu clave gráfica/contraseña/huella digital.
1. Busca y selecciona el certificado previamente guardado, luego toca **Listo**.
1. Regresa a la aplicación AdGuard y vuelve a la pantalla principal. Es posible que tengas que deslizar y reiniciar la aplicación para deshacerte del mensaje *El filtrado HTTPS está desactivado*.
1. ¡Listo! The certificate has been installed.
