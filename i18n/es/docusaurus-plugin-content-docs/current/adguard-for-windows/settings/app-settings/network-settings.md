---
title: Configuración de red
sidebar_position: 3
---

:::info

Este artículo describe AdGuard para Windows v8.0, un bloqueador de anuncios integral que protege su dispositivo a nivel del sistema. Esta es una versión beta que aún está en desarrollo. Para probarlo, descarga la [versión beta de AdGuard para Windows](https://agrd.io/windows_beta).

:::

Esta sección te permite gestionar cómo AdGuard filtra tu tráfico de Internet y proporciona herramientas adicionales para controlar las funciones relacionadas con la red.

![Configuración de red](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Usa AdGuard como proxy HTTP

Activa esta opción para que AdGuard funcione como un proxy HTTP. Todo el tráfico que pase por ella será filtrado, no solo en tu ordenador, sino también en otros dispositivos de tu red doméstica.

Para filtrar el tráfico en otros dispositivos, instale el certificado raíz de AdGuard en ellos y configure el proxy manualmente.

Otros ajustes están habilitados de forma predeterminada.

## Filtrado HTTPS

La mayoría de los sitios web utilizan cifrado HTTPS hoy en día. Sin el filtrado HTTPS, AdGuard no puede bloquear anuncios en sitios web como YouTube, Facebook o X (Twitter).

Recomendamos mantener activada la opción _Filtrar HTTPS_ a menos que tenga un motivo específico para desactivarla.

Con esta opción, puedes:

- Reinstalar o descargar el certificado de AdGuard

- Añadir sitios web a una lista que no se filtrará

- Eligir si filtrar sitios web con certificados EV (Validación Extendida)

## Proxy para la app y actualizaciones de filtros

Aquí puedes elegir qué proxy debe usar AdGuard para descargar actualizaciones de filtros o nuevas versiones de la app — el proxy del sistema, un proxy personalizado o ningún proxy.

![Configuración de proxy](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Usar el controlador SockFilter

Habilita esta opción para usar el controlador SockFilter, que ayuda a bloquear anuncios y rastreadores en aplicaciones en Windows 8 y posteriores. Si esta opción está desactivada, AdGuard cambiará al controlador WFP más antiguo.

SockFilter se introdujo por primera vez en v8.0 RC. Es un controlador de red en modo kernel _experimental_, ligero, que funciona a nivel de socket (TCP/UDP). En lugar de inspeccionar o modificar paquetes mientras atraviesan toda la pila de red de Windows, un filtro de sockets intercepta las llamadas de socket (p. ej., connect, send, receive, bind) en un nivel de abstracción más alto y más estable. Esto lo hace ideal para aplicaciones que necesitan supervisar o controlar la actividad de la red sin procesamiento profundo de paquetes.

Cuando esté completamente probado e implementado, SockFilter tiene el potencial de aportar varias ventajas sobre otros controladores:

- **Opera en una capa superior, a nivel de socket**: SockFilter trabaja con operaciones de socket en lugar de paquetes sin procesar, lo que lo hace menos complejo y más estable que el filtrado de paquetes de bajo nivel de WFP.
- **Sin interferencias con otros controladores de red**: Debido a que se sitúa por encima de los filtros WFP de VPN, firewall y antivirus, evita problemas de orden de filtros y conflictos de compatibilidad comunes en la pila WFP.
- **Riesgo de BSOD relacionados con NETIO considerablemente reducido**: SockFilter no se ejecuta dentro del pipeline de paquetes de NETIO, por lo que evita los escenarios típicos de fallos causados por callouts de WFP que manejan incorrectamente los búferes, los resultados de clasificación o la memoria de paquetes.

En cuanto a desventajas, el controlador SockFilter solo detecta operaciones a nivel de socket y no captura tráfico generado por otros controladores del kernel o componentes que eluden la API estándar de Winsock. Desde una perspectiva de red de bajo nivel, esto puede considerarse una limitación, ya que el controlador no puede acceder a paquetes en bruto ni inspeccionar tráfico no basado en sockets. Sin embargo, para una aplicación de bloqueo de anuncios, este comportamiento no solo es aceptable sino óptimo. Todo el tráfico relevante de los navegadores y aplicaciones en modo usuario pasa por sockets estándar, y eso es exactamente lo que necesitamos controlar. Al mismo tiempo, ignorar el tráfico de controladores de bajo nivel elimina la complejidad innecesaria, evita problemas de compatibilidad y mantiene el sistema estable.
