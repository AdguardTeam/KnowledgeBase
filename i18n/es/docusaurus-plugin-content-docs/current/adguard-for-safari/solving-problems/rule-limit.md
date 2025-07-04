---
title: Problemas con los límites de las reglas
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Safari, que protege solo tu navegador Safari. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Límite de reglas del bloqueador de contenido de Safari

AdGuard para Safari utiliza la API de bloqueo de contenido para aplicar reglas de filtrado a las páginas del navegador Safari. Actualmente, se permite un máximo de 150.000 reglas para cada extensión de bloqueo de contenido.

AdGuard para Safari tiene 6 bloqueadores de contenido:

- AdGuard - General
- AdGuard - Privacidad
- AdGuard - Redes sociales
- AdGuard - Seguridad
- AdGuard - Otros
- AdGuard - Personalizado

Esto hace un total de 900.000 reglas de filtrado.

Sin embargo, **una extensión puede contener hasta 150.000 reglas**. Si excedes este límite, algunas de las reglas no se aplicarán. Esto puede provocar un bloqueo incorrecto.

## Cómo verificar si estás excediendo el límite de la regla

1. Abre la aplicación AdGuard para Safari.
2. Desplázate hacia abajo y haz clic en _Bloqueadores de contenido_.
3. Debajo de cada bloqueador de contenido, puedes ver los filtros habilitados y la cantidad de reglas activas.
    ![Bloqueadores de contenido](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Si se activan más de 150.000 reglas en un bloqueador de contenidos, es posible que tengas que desactivar algunos filtros o reglas de usuario. Ve a _Filtros_, selecciona la categoría problemática y desactiva los filtros o reglas de usuario que no necesites.
