---
title: Protección para Safari
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

### Bloqueadores de contenido {#content-blockers}

Los bloqueadores de contenido sirven como 'contenedores' para reglas de filtrado que hacen el trabajo real de bloquear anuncios y rastreo. AdGuard para iOS contiene seis bloqueadores de contenido: General, Privacidad, Social, Seguridad, Personalizado y Otros. Anteriormente, Apple solo permitía que cada bloqueador de contenido contuviera un máximo de 50K reglas de filtrado, pero con la salida de iOS 15, el límite máximo se ha aumentado a 150K reglas.

Todos los bloqueadores de contenido, sus estados, qué filtros temáticos incluyen actualmente y el total de reglas de filtrado utilizadas se pueden encontrar en la pantalla respectiva en _Configuración avanzada_ (tocar el icono de engranaje en la esquina inferior derecha → _General_ → _Configuración avanzada_ → _Bloqueadores de contenido_).

![Bloqueadores de contenido \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Mantén todos los bloqueadores de contenido habilitados para la mejor calidad de filtrado.

:::

### Filtros {#filters}

El trabajo de los bloqueadores de contenido se basa en filtros, a veces también conocidos como listas de filtros. Cada filtro es una lista de reglas de filtrado. Si tienes un bloqueador de anuncios habilitado al navegar, verifica constantemente las páginas visitadas y los elementos en ellos con respecto a estas reglas de filtrado, y bloquea cualquier elemento que coincida. Las reglas se desarrollan para bloquear anuncios, rastreadores y más.

Todos los filtros se agrupan en categorías temáticas. Para ver la lista completa de estas categorías (no confundir con bloqueadores de contenido), abre la sección de _Protección_ tocando el icono del escudo, luego ve a _Protección de Safari_ → _Filtros_.

![Grupos de filtrado \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Hay ocho de ellos, cada categoría une varios filtros que sirven y comparten un propósito común: bloquear anuncios, widgets de redes sociales, anuncios de cookies, protegiendo al usuario de estafas en línea. Para decidir qué filtros se adaptan a tus necesidades, lee sus descripciones y navega por las etiquetas (`anuncios`, `privacidad`, `recomendado`, etc.).

:::note

Un mayor número de filtros activados no garantiza que haya menos anuncios. Un gran número de varios filtros habilitados simultáneamente reduce la calidad del bloqueo de anuncios.

:::

La categoría de filtros personalizados está vacía de forma predeterminada para que los usuarios añadan sus filtros mediante URL. Puedes encontrar filtros en Internet o incluso intentar [crear uno por ti mismo](/general/ad-filtering/create-own-filters).

### Reglas de usuario {#user-rules}

Aquí puedes añadir nuevas reglas, ya sea ingresándolas manualmente o usando [la herramienta de bloqueo manual de AdGuard en Safari](#assistant). Utiliza esta herramienta para personalizar el filtrado de Safari sin agregar una lista completa de filtros.

Aprenda [cómo crear tus propios filtros de anuncios](/general/ad-filtering/create-own-filters). Pero ten en cuenta que muchos de ellos no funcionarán en Safari en iOS.

![Pantalla de Reglas de usuario \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Lista de permisos {#allowlist}

La tercera sección de la pantalla _Protección Safari_. Si deseas deshabilitar el bloqueo de anuncios en un sitio web específico, la Lista de permitidos será de ayuda. Te permite añadir dominios y subdominios a exclusiones. AdGuard para iOS cuenta con una función de Importar/Exportar, por lo que la lista blanca de un dispositivo puede transferirse fácilmente a otro.
