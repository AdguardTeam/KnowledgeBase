---
title: Resolución de problemas de instalación
sidebar_position: 5
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## "Error de instalación" en macOS Catalina

Durante la instalación puedes encontrarte con un error como este:

![Pantalla de error de instalación](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Sigue estas instrucciones para resolver el problema:

1. Reinicia tu Mac
2. Mientras tu Mac se reinicia, mantén presionadas las teclas *Comando(⌘) + R* inmediatamente después de escuchar el timbre de inicio. Mantén pulsadas las teclas hasta que aparezca el logotipo de Apple para que el ordenador entre en modo de recuperación.
3. Desde la barra superior, selecciona *Utilidades* → *Terminal* y ejecute este comando: `csrutil enable`
4. Reinicia el Mac y accede al perfil de administrador
5. Abre la ventana del Finder y selecciona en la barra superior *Ir* → *Ir a carpeta* y escribe `~/private/`
6. Crea una carpeta llamada *tmp* y escribe tu contraseña
7. Inicia la instalación de AdGuard

Cuando se complete la instalación, reinicia tu Mac en modo de recuperación usando las instrucciones anteriores y ejecuta el comando `csrutil enable` en el Terminal para habilitar la protección del sistema.
