---
title: Configuraciones de bajo nivel
sidebar_position: 6
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app AdGuard](https://agrd.io/download-kb-adblock)

:::

![Configuración de bajo nivel \*mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Para abrir la _Configuración de bajo nivel_, ve a _Configuración_ → → _General_ (habilita el _Modo avanzado_ si está desactivado) → _Configuración avanzada_ → _Configuración de bajo nivel_.

En general, es mejor no modificar los ajustes de esta sección: utilízalos sólo si estás seguro de lo que haces o si te lo ha pedido el equipo de asistencia. Pero algunas configuraciones se pueden cambiar sin ningún riesgo.

### Bloquear IPv6 {#blockipv6}

Para cualquier consulta DNS enviada para obtener una dirección IPv6, nuestra app devuelve una respuesta vacía (como si esta dirección IPv6 no existiera). Ahora existe la opción de no devolver direcciones IPv6. En este punto, la descripción de esta función se vuelve demasiado técnica: configurar o desactivar IPv6 es dominio exclusivo de usuarios avanzados. Presumiblemente, si eres uno de ellos, será bueno saber que ahora tenemos esta función, si no es así, no es necesario profundizar en ella.

### Servidores Bootstrap y Fallback {#bootstrap-fallback}

Fallback es un servidor DNS de respaldo. Si eliges un servidor DNS y algo le sucede, se necesita una segunda opción para establecer el servidor DNS de respaldo hasta que responda el servidor principal.

Con Bootstrap, es un poco más complicado. Para que AdGuard para iOS pueda utilizar un servidor DNS seguro personalizado, nuestra aplicación primero necesita obtener tu dirección IP. Para este fin, el sistema utiliza el DNS por predeterminado, pero a veces esto no es posible por diversas razones. En tales casos, Bootstrap podría usarse para obtener la dirección IP del servidor DNS seguro seleccionado. Aquí hay dos ejemplos para ilustrar cuándo un servidor personalizado de Bootstrap podría ayudar:

1. Cuando un servidor DNS predeterminado del sistema no devuelve la dirección IP de un servidor DNS seguro y no es posible utilizar uno seguro.
2. Cuando nuestra aplicación y VPN de terceros se utilizan simultáneamente y no es posible utilizar DNS del sistema como un bootstrap.
