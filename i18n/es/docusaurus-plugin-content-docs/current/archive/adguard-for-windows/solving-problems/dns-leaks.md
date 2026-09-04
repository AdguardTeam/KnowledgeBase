---
title: Posibles fugas de DNS
sidebar_position: 11
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Windows permite a los usuarios especificar una dirección de servidor DNS para resolver consultas en lugar del servidor DNS del sistema, que proporciona tu ISP si no se anula en la configuración del sistema. El uso de un servidor DNS no predeterminado puede proteger tu tráfico DNS de la interceptación del ISP. Además, al elegir un servidor DNS cifrado y/o filtrado, obtienes otra capa de protección contra malos actores y anuncios molestos.

Muchos usuarios de AdGuard para Windows aprecian la función de protección DNS. Pero algunos de ellos se encuentran con el siguiente problema: una verificación en un sitio web como https://ipleak.net/ muestra que las Peticiones son gestionadas por el servidor DNS predeterminado en lugar del seleccionado. En este artículo, te contamos por qué ocurre esto y cómo evitarlo.

## Dirección DNS Bootstrap

Las direcciones del servidor DNS pueden escribirse como IP o como nombres de dominio.
En el caso de las direcciones IP no hay dificultades: AdGuard reenvía la solicitud DNS directamente al servidor especificado en el módulo de protección DNS. Sin embargo, las direcciones de servidor DNS cifradas, como DoT o DoH, suelen escribirse como nombres de dominio. En este caso, para resolver primero la dirección del servidor DNS cifrado, AdGuard envía una consulta DNS a la dirección de arranque, que es de forma predeterminada un servidor DNS del sistema. Esta conexión es lo que los servicios de control perciben como una fuga.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Servidor DNS fallback

Puede ocurrir que AdGuard no pueda llegar al servidor especificado debido a una conexión a Internet débil, a que haya expirado el tiempo de espera establecido por defecto o a algún problema relacionado con el servidor. En este caso, se conectará al servidor fallback, que de forma predeterminada es un servidor DNS del sistema. Esta conexión también será considerada por el servicio de control como una fuga.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

o

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

o

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- introduce un número grande arbitrario
