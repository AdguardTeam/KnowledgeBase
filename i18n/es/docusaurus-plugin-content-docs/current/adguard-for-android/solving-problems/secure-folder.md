---
title: Instalación del certificado en una carpeta segura
sidebar_position: 13
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Si instalas AdGuard en [la *carpeta segura* en tu Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (esto se aplica principalmente a los dispositivos Samsung), puedes enfrentar algunas dificultades al instalar el certificado HTTPS. El problema es que la *carpeta segura* tiene su propio espacio donde se almacenan los certificados. Sin embargo, si hace todo de acuerdo con las instrucciones de instalación del certificado normal ([descritas aquí](/adguard-for-android/features/settings#https-filtering)), el certificado se instalará en la memoria principal y no tendrá ningún papel para tu bloqueador de anuncios en la *Carpeta segura*. Para resolver este problema e instalar el certificado de tu AdGuard para Android en el almacenamiento de la *carpeta segura*, sigue estas instrucciones:

1. Después de instalar la aplicación y conectar la VPN local, toca **HABILITAR** junto al mensaje *El filtrado HTTPS está desactivado*.
1. Toca **Siguiente** → **Siguiente** → **Guardar ahora** → **Guardar certificado**.
1. Guarda el certificado (en esta etapa, puedes cambiarle el nombre para que sea más fácil localizarlo más adelante).
1. Después de que aparezca la ventana emergente *Instrucciones de instalación*, **NO** toca **Abrir Configuración**.
1. Minimiza la aplicación y ve a la *carpeta segura*.
1. Toca el menú de tres puntos y ve a **Configuración** →**Otras configuraciones de seguridad**.
1. Toca **Certificados de seguridad** → **Instalar desde el almacenamiento del dispositivo** → **Certificado de CA** → **Instalar**
1. Confirma la instalación con tu clave gráfica/contraseña/huella digital.
1. Busca y selecciona el certificado previamente guardado, luego toca **Listo**.
1. Regresa a la aplicación AdGuard y vuelve a la pantalla principal. Es posible que tengas que deslizar y reiniciar la aplicación para deshacerte del mensaje *El filtrado HTTPS está desactivado*.
1. ¡Listo! El certificado ha sido instalado.
