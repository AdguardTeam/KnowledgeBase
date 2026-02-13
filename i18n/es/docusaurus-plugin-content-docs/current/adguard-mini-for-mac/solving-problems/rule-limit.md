---
title: Problemas con los límites de las reglas
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard Mini para Mac, que protege solo tu navegador Safari. Para proteger completamente tu Mac, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Límite de reglas del bloqueador de contenido de Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Actualmente, se permite un máximo de 150.000 reglas para cada extensión de bloqueo de contenido.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard - General
- AdGuard - Privacidad
- AdGuard - Redes sociales
- AdGuard - Seguridad
- AdGuard - Otros
- AdGuard - Personalizado

Esto hace un total de 900.000 reglas de filtrado.

However, **one extension can contain only up to 150,000 rules**. Si excedes este límite, algunas de las reglas no se aplicarán. Esto puede provocar un bloqueo incorrecto.

## Cómo verificar si estás excediendo el límite de la regla

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Si se activan más de 150.000 reglas en un bloqueador de contenidos, es posible que tengas que desactivar algunos filtros o reglas de usuario. Ve a _Filtros_, selecciona la categoría problemática y desactiva los filtros o reglas de usuario que no necesites.
