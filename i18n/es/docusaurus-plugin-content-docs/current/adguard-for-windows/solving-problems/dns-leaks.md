---
title: Posibles fugas de DNS
sidebar_position: 9
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Windows permite a los usuarios especificar una dirección de servidor DNS para resolver consultas en lugar del servidor DNS del sistema, que proporciona tu ISP si no se anula en la configuración del sistema. El uso de un servidor DNS no predeterminado puede proteger tu tráfico DNS de la interceptación del ISP. Además, al elegir un servidor DNS cifrado y/o filtrado, obtienes otra capa de protección contra malos actores y anuncios molestos.

Muchos usuarios de AdGuard para Windows aprecian la función de protección DNS. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. En este artículo, te contamos por qué ocurre esto y cómo evitarlo.

## Dirección DNS Bootstrap

Las direcciones del servidor DNS pueden escribirse como IP o como nombres de dominio. En el caso de las direcciones IP no hay dificultades: AdGuard reenvía la solicitud DNS directamente al servidor especificado en el módulo de protección DNS. Sin embargo, las direcciones de servidor DNS cifradas, como DoT o DoH, suelen escribirse como nombres de dominio. En este caso, para resolver primero la dirección del servidor DNS cifrado, AdGuard envía una consulta DNS a la dirección de arranque, que es de forma predeterminada un servidor DNS del sistema. Esta conexión es lo que los servicios de control perciben como una fuga.

**Para eliminar esta fuga:**

- ve a *Configuración avanzada*
- desplázate hacia abajo hasta la sección *Lista de direcciones de arranque personalizadas*
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- haz clic en *Guardar*

## Servidor DNS fallback

Puede ocurrir que AdGuard no pueda llegar al servidor especificado debido a una conexión a Internet débil, a que haya expirado el tiempo de espera establecido por defecto o a algún problema relacionado con el servidor. En este caso, se conectará al servidor fallback, que de forma predeterminada es un servidor DNS del sistema. Esta conexión también será considerada por el servicio de control como una fuga.

**Para eliminar esta fuga:**

- ve a *Configuración avanzada*
- desplázate hacia abajo hasta la sección *Servidores fallback*
- marca la opción *Usar servidores personalizados*
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

o

- ve a *Configuración avanzada*
- desplázate hacia abajo hasta la sección *Servidores fallback*
- marca la opción *No usar servidores alternativos*

o

- ve a *Configuración avanzada*
- desplázate hacia abajo hasta la sección *Período de tiempo de espera del servidor DNS*
- introduce un número grande arbitrario
