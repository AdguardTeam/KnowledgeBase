---
title: Cómo utilizar Samsung Pay con AdGuard en Corea del Sur
sidebar_position: 16
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Varios usuarios han encontrado un problema en el que Samsung Pay no funciona mientras AdGuard se ejecuta. Este problema ocurre casi exclusivamente en dispositivos registrados en Corea del Sur.

¿Qué está causando este problema? A veces, Samsung Pay no funciona en dispositivos con servicios VPN en ejecución, y AdGuard es una de estas aplicaciones. De forma predeterminada, AdGuard utiliza una VPN local para filtrar el tráfico, lo que puede causar problemas al usar Samsung Pay.

Como consecuencia, los usuarios tuvieron que desactivar AdGuard al realizar pagos con Samsung Pay. Esto se puede evitar con la función *Detectar Samsung Pay*. Cuando esta opción está habilitada, la aplicación AdGuard se pausa cada vez que el usuario abre la aplicación Samsung Pay y se reanuda cuando se cierra la aplicación.

:::note

Esta función solo funcionará si se elige el modo de filtrado de VPN local en la configuración de AdGuard. Si se utiliza otro modo, Samsung Pay funcionará sin interrupciones.

:::

Para activar *Detectar Samsung Pay*, sigue estos pasos:

1. Ve a *Configuración* → *General* → *Avanzado*→ *Configuración de bajo nivel*.

1. Desplázate hasta *Detectar Samsung Pay* y mueve el control deslizante hacia la derecha.

1. Toca *Permitir permisos* y otorga a AdGuard acceso a la información sobre el uso de otras aplicaciones.

Necesitamos recopilar estadísticas sobre el funcionamiento de Samsung Pay para que la función *Detectar Samsung Pay* funcione.

Después de habilitar esta función, cuando cambie de Samsung Pay a AdGuard, aparecerá el siguiente mensaje como se muestra en la captura de pantalla.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternativamente, puedes desactivar el filtrado para Samsung Pay en *Administración de aplicaciones*. Simplemente ve a la pantalla *Administración de aplicaciones* (tercera pestaña desde abajo), busca Samsung Pay en la lista y desactiva *Dirigir el tráfico a través de AdGuard*.
