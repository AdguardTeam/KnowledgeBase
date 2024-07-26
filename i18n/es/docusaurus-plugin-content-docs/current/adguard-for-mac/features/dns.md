---
title: DNS
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Protección DNS

La sección _DNS_ contiene una función, _Protección DNS_, con múltiples ajustes:

- Proveedores
- Filtros
- Lista de bloqueo
- Lista de permitido

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

Si activas la _Protección DNS_, el tráfico DNS será gestionado por AdGuard.

### Proveedores

En _Proveedores_, puedes seleccionar un servidor DNS para cifrar tu tráfico DNS y bloquear anuncios y rastreadores si es necesario. Recomendamos AdGuard DNS. Para una configuración más avanzada, puedes [configurar un servidor DNS AdGuard privado](https://adguard-dns.io/welcome.html) o agregar uno personalizado haciendo clic en el ícono `+` en la esquina inferior izquierda.

### Filtros

Los filtros de DNS aplican reglas de bloqueo de anuncios a nivel de DNS. Tal filtrado es menos preciso que el bloqueo de anuncios regular, pero es particularmente útil para bloquear un dominio entero. Para agregar un filtro DNS, haz clic en `+`. Puedes encontrar más filtros DNS en [filterlists.com](https://filterlists.com/).

### Lista de bloqueo

Los dominios de esta lista serán bloqueados. Para añadir un dominio, haz clic en `+`. Puedes agregar nombres de dominio o reglas de filtrado de DNS usando una [sintaxis especial](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

Para exportar o importar una lista de bloqueo, abre el menú contextual.

### Lista de permitido

Los dominios de esta lista no se filtran. Para añadir un dominio, haz clic en `+`. Para exportar o importar una lista de permitidos, abre el menú contextual.
