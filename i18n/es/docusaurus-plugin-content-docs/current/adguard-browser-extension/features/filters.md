---
title: Filtros
sidebar_position: 1
---

:::info

Este artículo trata sobre la extensión del navegador de AdGuard, que protege solo tu navegador. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Bloquear anuncios es la funcionalidad clave de cualquier bloqueador de anuncios, y la extensión de navegador AdGuard no es una excepción. El bloqueo de anuncios se basa en filtros: conjuntos de reglas escritas en un lenguaje especial. Estas reglas indican qué elementos deben ser bloqueados y cuáles no. AdGuard interpreta las reglas y modifica las peticiones web basándose en ellas. Como resultado, dejarás de ver anuncios en tus páginas web.

![Filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos los filtros se agrupan según tu función. Por ejemplo, existen categorías para filtros de bloqueo de publicidad, filtros de protección de la privacidad, filtros relacionados con las redes sociales, etc. Puedes habilitar filtros individuales o todo el grupo a la vez.

![Filtros de bloqueo de anuncios \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtros personalizados

Si bien las características de otros grupos de filtros son más o menos predecibles, hay un grupo llamado _Personalizado_ que puede generar dudas adicionales.

![Filtros personalizados \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

En esta pestaña, puedes agregar filtros que no están presentes en la extensión de forma predeterminada. Hay muchos [filtros disponibles públicamente en Internet] (https://filterlists.com). Además, puedes crear y agregar tus propios filtros. De hecho, puedes crear cualquier conjunto de filtros y personalizar el bloqueo de anuncios a tu gusto.

Para agregar un filtro, simplemente haz clic en _Agregar filtro personalizado_, ingresa la URL o la ruta del archivo del filtro que deseas agregar y haz clic en Siguiente\*.

![Agregar un filtro personalizado \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Reglas de usuario {#user-rules}

_Reglas de usuario_ es otra herramienta que te ayuda a personalizar el bloqueo de anuncios.

![Reglas de usuario \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Hay varias formas de añadir nuevas normas. La más sencilla es simplemente escribir una regla, pero requiere cierto conocimiento de la [sintaxis reglas](/general/ad-filtering/create-own-filters).

También puedes importar una lista de filtros lista para usar desde un archivo de texto. **Asegúrate de que las diferentes reglas estén separadas por saltos de línea.** Ten en cuenta que es mejor importar una lista de filtros lista para usar en la pestaña Filtros personalizados.

Además, puedes exportar tus propias reglas de filtrado. Esta opción es buena para transferir tu lista de reglas entre navegadores o dispositivos.

Cuando agregas un sitio web a la Lista de permitidos (más sobre esto aqui) o usa la herramienta Asistente para ocultar un elemento en la página, también se guarda una regla correspondiente en _Reglas de usuario_.

## Lista de permitido

La _lista de permitidos_ se utiliza para excluir ciertos sitios web del filtrado. Las reglas de bloqueo no se aplican a los sitios web de la lista.

![Lista de permitidos \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

La _lista de permitidos_ también se puede invertir: puedes desbloquear anuncios en todas partes excepto en los sitios web agregados a esta lista. Para ello, activa la opción _Invertir lista de permitidos_.

![Invertir lista de permitidos \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

También puedes importar y exportar listas de permitidos existentes. Es útil, por ejemplo, si deseas aplicar las mismas reglas de permitidos en cada uno de tus navegadores.
