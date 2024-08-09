---
title: No se puede activar la protección
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Si por alguna razón no se puede activar la protección de AdGuard, sigue estos pasos:

1. Haz clic en el icono de *AdGuard* de la barra de menús y ve a *Avanzado* → *Restablecer configuración*... → *Salir de AdGuard*

2. En la búsqueda, escribe Terminal, ingresa `sudo rm -R /Library/Application\ Support/com.adguard.adguard` y ejecútalo.

3. Reinicia tu computadora.

4. Abre el Terminal nuevamente, escribe `ls -al /Library/StaggedExtensions/Library/Application\ Support/com.adguard.adguard/` y ejecútalo. Debes recibir lo siguiente: `No existe tal archivo o directorio`.

5. Inicia AdGuard e introduce tus datos de acceso cuando se te solicite.
