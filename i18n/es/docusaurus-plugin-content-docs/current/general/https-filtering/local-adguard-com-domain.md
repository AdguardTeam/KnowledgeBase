---
title: Dominio local.adguard.org
sidebar_position: 3
---

Los usuarios de AdGuard para Windows, Mac y Android pueden notar que AdGuard agrega un pequeño script a cada página web que se carga desde el dominio `local.adguard.org`.

Antes que nada, no te preocupes, este no es un dominio real y, en realidad, no existe ningún servidor real con ese nombre. Este dominio se utiliza para aplicar filtros cosméticos a las páginas web, pero todo se hace localmente directamente en tu dispositivo sin conectarse a ningún servidor.

### Explicación técnica

Pero, ¿qué ocurre y por qué se hace? Por favor, lee la explicación técnica a continuación.

1. AdGuard es un bloqueador de contenido a nivel de red, por lo que no puede simplemente agregar JavaScript y CSS personalizados a las páginas web como lo hacen las extensiones del navegador. Sin embargo, hacer esto es crucial para un mejor bloqueo de contenido.
2. Para ello, AdGuard inyecta un "script de contenido" con el siguiente aspecto: `<script src="https://local.adguard.org/.../content-script.js">`. Este "script de contenido" se encarga del filtrado cosmético, oculta o elimina el contenido publicitario de las páginas web.
3. Las conexiones a la dirección IP del dominio `local.adguard.org` son interceptadas por AdGuard en el nivel de red y **procesadas localmente**. Por eso ese dominio tiene una dirección IP "estática" que no cambia en años.

**¿Por qué necesitamos usar una dirección IP real para eso?**

- No podemos usar `127.0.0.1` porque los navegadores no lo aceptan.
- Es posible utilizar algunas direcciones IP de las subredes privadas, pero esta solución tiene dos desventajas.
    - En primer lugar, existe una pequeña posibilidad de intersectar con un servicio de intranet existente y romper el acceso a él.
    - En segundo lugar, algunos servidores DNS pueden considerar esto como un ataque de revinculación de DNS y negarse a responder a `local.adguard.org`.

### Verificación

Esto es fácil de verificar. Si desactivas AdGuard, verás que es simplemente imposible establecer conexión a `local.adguard.org` ya que no hay ningún servidor con esa dirección. Simplemente intenta abrirlo en tu navegador cuando AdGuard esté deshabilitado.
