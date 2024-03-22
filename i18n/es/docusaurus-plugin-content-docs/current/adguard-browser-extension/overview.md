---
title: Resumen de funciones
sidebar_position: 1
---

:::info

Este artículo trata sobre la extensión del navegador de AdGuard, que protege solo tu navegador. Para proteger todo tu dispositivo, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard ofrece una gama de productos de software que bloquean anuncios y rastreadores en diferentes plataformas. Uno de los productos AdGuard más populares es una extensión gratuita que funciona en cinco navegadores populares: Chrome, Firefox, Edge, Opera y Yandex Browser. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/features/home-screen) and [AdGuard for Mac](/adguard-for-mac/overview).

![Extensión de navegador AdGuard para Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Disponibilidad {#br-extension}

La [extensión de navegador AdGuard](https://adguard.com/adguard-browser-extension/overview.html) está disponible para la mayoría de los principales navegadores. Puedes encontrarla fácilmente en la tienda en línea de tu navegador o en nuestro sitio web oficial.

![Disponible para los navegadores más populares *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

Tenemos una extensión independiente para Safari. Desde el lanzamiento de [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), la mayoría de las extensiones de bloqueo de anuncios han experimentado grandes problemas y muchas de ellas dejaron de funcionar. Tuvimos que desarrollar una extensión [para Safari](/adguard-for-safari/overview) que tiene algunas diferencias en comparación con la extensión descrita en este artículo.

:::

**No olvides que la funcionalidad de cada extensión está estrictamente limitada por las capacidades del navegador.** Entonces, si deseas obtener una protección completa, considera instalar un programa independiente para tu computadora. Hay [una razón para ello](#comparison).

## Bloqueo de anuncios {#adblocker}

El bloqueo de anuncios es claramente la funcionalidad clave de cualquier bloqueador de anuncios y AdGuard no es una excepción. La extensión bloqueará con éxito los anuncios en cualquier página de tu navegador. El bloqueo de anuncios se basa en las listas de filtros, o simplemente [filtros](/general/ad-filtering/how-ad-blocking-works). Los filtros se pueden habilitar o deshabilitar en la configuración de tu extensión. Puedes personalizar el bloqueo de anuncios activando filtros específicos.

### Filtros {#filters}

En esencia, las listas de filtros son conjuntos de reglas escritas en un lenguaje especial. Tu bloqueador de anuncios interpreta las reglas y las implementa. Como resultado, dejarás de ver anuncios en tus páginas web.

![Filtros *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos los filtros se agrupan según tu función. Por ejemplo, existen categorías para filtros de bloqueo de publicidad, filtros de protección de la privacidad, filtros relacionados con las redes sociales, etc. Puedes habilitar filtros individuales o todo el grupo a la vez.

![Filtros de bloqueo de anuncios *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Filtros personalizados {#custom}

Si bien las características de otros grupos de filtros son más o menos predecibles, hay un grupo llamado *Personalizado* que puede generar dudas adicionales.

![Filtros personalizados *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

En esta pestaña, puedes agregar filtros que no están presentes en la extensión de forma predeterminada. Hay muchos [filtros disponibles públicamente en Internet](https://filterlists.com). Además, puedes crear y agregar tus propios filtros. De hecho, puedes crear cualquier conjunto de filtros y personalizar el bloqueo de anuncios a tu gusto.

Para agregar un filtro, simplemente haz clic en *Agregar filtro personalizado*, ingresa la URL o la ruta del archivo del filtro que deseas agregar y haz clic en *Siguiente*.

![Añadir un filtro personalizado *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Reglas de usuario {#user-rules}

*Reglas de usuario* es otra herramienta que te ayuda a personalizar el bloqueo de anuncios.

![Reglas de usuario *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Hay varias formas de añadir nuevas normas. La más sencilla es simplemente escribir una regla, pero requiere cierto conocimiento de la [sintaxis de reglas](/general/ad-filtering/create-own-filters).

También puedes importar una lista de filtros lista para usar desde un archivo de texto. **Asegúrate de que las diferentes reglas estén separadas por saltos de línea.** Ten en cuenta que es mejor importar una lista de filtros lista para usar en la pestaña [Filtros personalizados](#custom).

Además, puedes exportar tus propias reglas de filtrado. Esta opción es buena para transferir tu lista de reglas entre navegadores o dispositivos.

Cuando agregas un sitio web a la Lista de permitidos (más sobre esto [aqui](#allowlist)) o usa la herramienta Asistente para ocultar un elemento en la página, también se guarda una regla correspondiente en *Reglas de usuario*.

### Lista de permitido {#allowlist}

La *lista de permitidos* se utiliza para excluir ciertos sitios web del filtrado. Las reglas de bloqueo no se aplican a los sitios web de la lista.

![Lista de permitidos *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

La *lista de permitidos* también se puede invertir: puedes desbloquear anuncios en todas partes excepto en los sitios web agregados a esta lista. Para ello, activa la opción *Invertir lista de permitidos* .

![Invertir lista de permitidos *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

También puedes importar y exportar listas de permitidos existentes. Es útil, por ejemplo, si deseas aplicar las mismas reglas de permitidos en cada uno de tus navegadores.

## Modo sigiloso {#stealth-mode}

El *Modo Sigiloso* tiene como objetivo garantizar la protección de datos personales confidenciales contra rastreadores y estafadores en línea.

![Modo Sigiloso *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

En el modo sigiloso, puedes evitar que un sitio web vea las consultas de búsqueda que utilizaste para encontrarlo en Internet, eliminar automáticamente las cookies de terceros y del propio sitio web, etc. Un [artículo](/general/stealth-mode) fue dedicado a todas estas funciones.

:::note

Algunas de las opciones del *Modo Sigiloso* disponibles en aplicaciones completas no están presentes en las extensiones del navegador debido a restricciones técnicas.

:::

## Otras funciones y opciones {#other}

Además de los grandes módulos clave de la extensión de navegador AdGuard, hay varias funciones más específicas que se pueden configurar en las pestañas *General* y *Configuración adicional* de la extensión.

### General {#general}

En la pestaña *General*, puedes permitir los anuncios de búsqueda y la [autopromoción de sitios web](/general/ad-filtering/search-ads), habilitar la activación automática de filtros específicos de idioma, indicar el intervalo de actualización de los filtros, etc.

![General *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Además, aquí puedes habilitar la [*Protección contra phishing y malware*](/general/browsing-security).

Puedes guardar tu configuración haciendo clic en el botón *Exportar configuración*. La configuración se guardará como un archivo .json. Para subir la configuración previamente guardada, utiliza la función *Importar configuración*. Incluso puedes usarlo para cambiar rápidamente entre diferentes perfiles de configuración o incluso para transferir configuraciones entre diferentes navegadores.

### Configuración adicional {#misc}

La sección *Configuraciones adicionales* contiene una variedad de configuraciones relacionadas con el proceso de bloqueo de anuncios y la usabilidad de la aplicación.

![Configuraciones adicionales *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Desde esta pestaña, puedes activar filtros optimizados, habilitar notificaciones sobre actualizaciones de extensiones, abrir el *Registro de filtrado*o borrar las estadísticas de anuncios y rastreadores bloqueados.

Además, puedes optar por ayudarnos con el desarrollo de filtros enviándonos estadísticas sobre las reglas aplicadas: cuáles se activan, en qué sitios web y con qué frecuencia. Esta opción está deshabilitada de forma predeterminada ya que no recopilamos datos del usuario sin su consentimiento. Sin embargo, si lo habilitas, todos los datos serán estrictamente anónimos.

### Acerca de {#about}

En la sección *Acerca de*, puede encontrar información sobre la versión actual, enlaces al EULA y la política de privacidad, y al repositorio de la extensión del navegador en GitHub.

![Acerca de *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Menú principal de la extensión {#main-menu}

Puedes acceder a la página principal de la extensión haciendo clic en el icono de la extensión en la barra de herramientas de tu navegador.

![Menú principal *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

En la página principal, puedes ocultar cualquier elemento en cualquier página manualmente (se agregará una regla correspondiente a las *Reglas de usuario*), abrir el *Registro de filtrado* para ver la información completa sobre el tráfico de tu navegador y bloquear solicitudes sobre el tráfego de tu navegador o consultar el informe de seguridad de un sitio web. Además, puedes enviar una queja sobre cualquier sitio web (por ejemplo, si quedan anuncios en la página, nuestros ingenieros de filtrado revisarán el informe y solucionarán el problema) y ver las estadísticas sobre las reglas de bloqueo aplicadas.

Todas las solicitudes web realizadas por el navegador se muestran en el *Registro de filtrado*, junto con información detallada sobre cada solicitud. El *registro de filtrado* facilita, por ejemplo, el seguimiento de las solicitudes bloqueadas por la extensión de navegador AdGuard. Además, te permite bloquear cualquier solicitud o agregar una solicitud previamente bloqueada a la Lista de permitidos con dos clics. El *registro de filtrado* también te ofrece una amplia variedad de opciones para ordenar solicitudes web, lo que puede resultar útil a la hora de crear tus propias reglas de filtrado. Puedes abrir el *registro de filtrado* seleccionando el elemento correspondiente en el menú principal o desde la página de configuración (en la pestaña "Configuración adicional").

Al hacer clic en los íconos en la esquina superior derecha del menú principal de la extensión, puedes abrir la configuración de la extensión o pausar la protección.

## Extensión de navegador AdGuard vs. aplicaciones independientes {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

La principal ventaja de los programas independientes AdGuard sobre las extensiones de navegador es que los programas pueden bloquear anuncios en todos los navegadores y en casi todas las aplicaciones. Puedes utilizar diferentes navegadores al mismo tiempo, la aplicación filtrará anuncios y amenazas online en todos ellos igualmente bien.

La segunda diferencia es que las posibilidades de los bloqueadores de anuncios basados en extensiones están estrictamente limitadas por las directrices del navegador. Las extensiones del navegador deben ajustarse a las políticas de los navegadores, donde el bloqueo de anuncios puede estar restringido. Por lo tanto, las extensiones no admiten algunos tipos de reglas de filtrado. La funcionalidad de las aplicaciones de escritorio no está limitada, por lo que tienen una mejor calidad de filtrado.

Mientras que la extensión de navegador AdGuard es gratuito y fácil de instalar, y tiene filtros para bloquear anuncios y combatir amenazas en línea, las aplicaciones completas son más potentes y tienen una lista de funciones avanzadas. Consulta todas las diferencias en el cuadro comparativo que figura a continuación.

![Extensión vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – dentro de las restricciones del navegador y sólo en el navegador donde está instalado;

`2`: la extensión no puede detectar solicitudes de otras extensiones. Si una extensión maliciosa o de seguimiento envía una solicitud a tu servidor para mostrarte anuncios o realizar un seguimiento de tu actividad, la extensión de navegador AdGuard no podrá bloquear esa solicitud;

`3`: las extensiones de navegador no pueden bloquear todos los tipos de anuncios y amenazas debido a ciertas limitaciones del navegador. Algunos elementos pueden llegar a la página y ralentizar el proceso de carga. Además, a diferencia de los bloqueadores de anuncios para navegador, la aplicación AdGuard bloquea los anuncios antes de que se carguen en el navegador. Esto ahorra tráfico y acelera la carga de la página.
