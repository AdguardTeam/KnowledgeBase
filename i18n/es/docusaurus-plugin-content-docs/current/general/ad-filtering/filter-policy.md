---
title: Política de filtrado de AdGuard
sidebar_position: 6
---

Aquí en AdGuard, desde hace tiempo seguimos ciertos principios para la creación de nuestros filtros, los cuales, junto con las descripciones de los filtros, se presentan a continuación como parte de nuestra política de filtrado.

## Criterios comunes

Estos criterios se aplican de manera igual a las reglas de todos los filtros.

- Las reglas para un sitio específico solo se agregarán si hay tráfico suficiente. El tráfico se determina mediante estadísticas públicas (si están disponibles) o indicadores indirectos, como el número de seguidores en las redes sociales. El tráfico de un sitio se considera suficiente si alcanza las 100 mil visitas por mes. Podemos considerar agregar una regla para un sitio que no sea tan popular, pero la decisión final la toman los desarrolladores del filtro. Los sitios con bajo tráfico, sin embargo, aún deben ser verificados en cuanto a análisis de terceros y redes de publicidad
- La decisión sobre las farms de contenido (sitios que producen grandes cantidades de contenido principalmente para alcanzar alta visibilidad en los resultados de búsqueda y generar ingresos publicitarios) la toman los desarrolladores de filtros, dependiendo de la calidad del contenido

Requisitos de calidad para las reglas de filtrado:

- Las reglas no deben impactar negativamente a los sitios en términos de rendimiento
- Las reglas de desbloqueo deben ser lo más específicas posible para evitar el desbloqueo de elementos innecesarios
- Las reglas de JavaScript deben usarse con la mayor moderación posible y solo si el bloqueo de anuncios es imposible sin ellas

## Filtros de bloqueo de anuncios

### Terminología

Un **bloqueador de anuncios** es una herramienta de software o hardware diseñada para filtrar, ocultar o bloquear anuncios y otros elementos en páginas web. Los bloqueadores de anuncios son creados para mejorar la experiencia del usuario, reducir el tiempo de carga de la página, disminuir el consumo de tráfico de Internet, bloquear anuncios, aumentar la privacidad durante la navegación en sitios y el uso de aplicaciones, así como bloquear elementos molestos.

Un **filtro** (o una **lista de filtros**) es un conjunto de reglas de filtrado diseñadas para filtrar contenido y bloquear varios tipos de anuncios y otros tipos de contenido utilizando bloqueadores de anuncios. Estos filtros generalmente operan en el navegador, en programas o en servidores DNS.

**Anti-adblock** es una tecnología utilizada por sitios web o aplicaciones para detectar el bloqueo de anuncios y reaccionar a ellos de diferentes maneras: rastreándolos, reinyectándolos o alentando a desactivar el bloqueador de anuncios (llamados "anti-adblock walls"). Los anti-adblocks pueden ser de diferentes tipos:

- Anti-adblock que bloqueia el contenido del sitio sin ofrecer alternativas: para seguir utilizando el sitio, el usuario debe desactivar el bloqueador de anuncios
- "Anti-adblock wall" con ofrecimiento de opciones alternativas, como la compra de una suscripción para seguir utilizando el bloqueador de anuncios
- Mensajes informativos que no obligan a ninguna acción: se pide a los usuarios que desactiven el bloqueador de anuncios, pero estos mensajes pueden cerrarse, permitiendo el uso del sitio sin restricciones
- Implementación de publicidad alternativa en respuesta al uso de bloqueadores de anuncios: los sitios introducen publicidad alternativa cuando se detectan bloqueadores de anuncios
- Paywall: un método de monetización de contenido en el que el contenido se oculta parcial o totalmente de los usuarios, con un mensaje solicitando que adquieran una suscripción para que se libere el acceso

### Filtros

Los filtros de bloqueo de anuncios de AdGuard incluyen:

- Filtro base AdGuard
- Filtro de anuncios de AdGuard para dispositivos móviles
- Filtros regionales divididos por idiomas: chino, holandés, francés, alemán, japonés, ruso, español, portugués, turco y ucraniano
- Filtro AdGuard Quick Fixes

### La finalidad de estos filtros

- El **Filtro base** fue diseñado para bloquear anuncios en sitios en inglés y aquellos para los cuales no hay un filtro separado. También contiene reglas generales de filtrado que se aplican a todos los sitios, independientemente del idioma
- El **Filtro de anuncios para dispositivos móviles** bloquea anuncios en versiones móviles de sitios y en teléfonos celulares y tabletas. No hay segmentación basada en el idioma
- Los **Filtros regionales** siguen la misma política que el **Filtro base**, pero están limitados a sitios en determinados idiomas
- **Filtro Quick Filters** utilizados para resolver rápidamente problemas críticos de filtrado de contenido en sitios populares sin actualizar la extensión MV3.

El objetivo de los filtros de bloqueo de anuncios es bloquear todos los tipos de publicidad en sitios web, aplicaciones y dispositivos específicos que pueden cargar anuncios de Internet:

- Banners: anuncios mostrados como imágenes en varias partes de páginas web
- Teasers: anuncios de texto o gráficos, a menudo animados, diseñados para intrigar a los visitantes (titulares sensacionalistas, imágenes llamativas) y llevarlos a hacer clic en el banner (clickbait)
- Anuncios de texto: publicidad en forma de texto, incluyendo enlaces
- Anuncios modales: publicidad que aparece repentinamente sobre el contenido actual en forma de ventanas modales
- Popunders: publicidad que se abre en una ventana aparte al hacer clic en cualquier parte de la página actual
- Publicidad redirigida: mecanismos que redireccionan automáticamente a los usuarios a otro sitio web después de hacer clic
- Anuncios encubiertos como contenido del sitio, que abren páginas con productos promocionados o contenido no relacionado después de hacer clic
- Anuncios en vídeo: vídeos publicitarios incrustados en el contenido de vídeo o en elementos separados en sitios web y aplicaciones
- Anuncios interactivos: anuncios con los cuales los usuarios pueden interactuar (por ejemplo, juegos y encuestas). Después de completarlos, se abre el elemento anunciado
- Anuncios intersticiales: anuncios a pantalla completa en dispositivos móviles que cubren la interfaz de la aplicación o del navegador
- Restos de anuncios que ocupan grandes espacios o se destacan en el fondo, atrayendo la atención de los visitantes (excepto los poco perceptibles o imperceptibles)
- Publicidad anti-adblock: publicidad alternativa que se muestra en el sitio cuando los anuncios en el sitio principal están bloqueados
- Elementos bait que son usados por múltiples scripts de detección de bloqueadores de anuncios conocidos para detectar la presencia de un bloqueador de anuncios con diferentes objetivos, incluyendo cambiar la forma en que se muestran los anuncios, la huella digital, etc.
- Publicidad del propio sitio, si ha sido bloqueada por las reglas generales de filtrado (ver *Limitaciones y excepciones*)
- Scripts anti-adblock que impiden el uso del sitio (ver *Limitaciones y excepciones*)
- Publicidad inyectada por malware, siempre y cuando se proporcionen detalles sobre su método de carga o pasos de reproducción
- Minería no deseada: scripts que explotan criptomonedas sin el consentimiento del usuario

### Limitaciones y Excepciones

- La publicidad del propio sitio no debe ser bloqueada deliberadamente. Sin embargo, no debe ser desbloqueada si el bloqueo es causado por reglas generales de filtrado
- Las medidas de acceso al contenido, como los muros de pago, no son bloqueadas
- Las anti-adblock walls serán bloqueadas en los siguientes casos:
    - Insisten de forma agresiva en desactivar o eliminar el bloqueador de anuncios o en impedir efectivamente el uso del sitio
    - Presentan descripciones incorrectas y engañosas de las posibles consecuencias del uso de bloqueadores de anuncios
    - Ponen a los visitantes en riesgo de malvertising, es decir, anuncios desbloqueados que provienen de fuentes dudosas
- No bloqueamos mensajes de detección de bloqueadores de anuncios que cumplan al menos uno de los siguientes criterios:
    - Permiten el uso del sitio y no se superponen a una cantidad significativa de contenido
    - Proporcionan una alternativa a la desactivación de un bloqueador de anuncios, ya que esta opción no pone en riesgo la privacidad o la seguridad de los usuarios
    - Permiten el acceso al contenido del sitio o una alternativa viable que no ponga en riesgo la privacidad o seguridad del usuario
    - Algunas reglas antiguas pueden continuar bloqueando mensajes que cumplan uno o más de estos criterios. Si se identifican, dichas reglas serán reformadas de acuerdo con esta política
- Los pools de minería no serán bloqueados si son públicos y no son utilizados exclusivamente con fines maliciosos

## Filtros de protección contra el rastreo

### Terminología

**Rastreo**: proceso de monitoreo y recopilación de datos de usuarios y sus interacciones con sitios web y aplicaciones con fines de marketing, así como para obtener telemetría sobre el funcionamiento de sitios web o aplicaciones con fines de análisis de su operación. Este proceso incluye el rastreo de páginas visitadas, el tiempo pasado en cada visita, la interacción con elementos del sitio (por ejemplo, clics y envíos de formularios) y otras métricas. Permite a los propietarios de sitios web y aplicaciones entender mejor el comportamiento del usuario, optimizar funcionalidades y adaptar sus estrategias de marketing. El rastreo también se utiliza para monitorear el rendimiento, los patrones de uso e identificar problemas, proporcionando a los desarrolladores los datos necesarios para mejorar la estabilidad y la calidad del sitio web o aplicación. Aunque los datos obtenidos permitan la identificación de una persona, dichas acciones aún se consideran rastreo.

**Rastreador** - software utilizado en un sitio web o una aplicación, diseñado para recopilar información sobre su funcionamiento y las acciones de los visitantes. Rastrea la interacción del usuario con el sitio web o la aplicación, registrando datos sobre las vistas de páginas, tiempo pasado en la visita, clics, envíos de formularios y otros eventos. Su objetivo es proporcionar a los propietarios de sitios web y aplicaciones una herramienta para analizar el comportamiento del usuario, mejorar su experiencia y optimizar contenido y publicidad.

**Parámetro de seguimiento de URL**: una parte de la dirección que se agrega a los enlaces por sistemas analíticos o está presente en algunos enlaces en páginas web. Cuando se hace una solicitud, este parámetro de seguimiento de URL puede ser procesado por el backend de un sistema analítico o sitio web, que extraerá información de él. Por ejemplo, los parámetros de seguimiento de URL pueden transmitir información sobre clics o campañas publicitarias. Los parámetros de seguimiento de URL también pueden ser utilizados por sistemas de protección contra fraudes o detección de bots.

**Cookies**: archivos que los sitios web envían y almacenan en dispositivos. Estos archivos contienen diversa información necesaria para el funcionamiento del sitio en el dispositivo y se utilizan para fines analíticos. Esto incluye identificadores únicos utilizados para rastrear la actividad del visitante en el sitio, parámetros de publicidad y mucho más.

### Filtros

Los filtros de protección de seguimiento de AdGuard incluyen:

- Filtro de protección contra rastreo
- Filtro contra rastreo de URL

### La finalidad de estos filtros

El **filtro de protección contra rastreo** fue diseñado para bloquear rastreadores que recopilan datos personales de los usuarios y para mejorar su privacidad.

Lo que bloquean:

- Scripts de sistemas analíticos
- Scripts de seguimiento propios de sitios web y aplicaciones
- Rastreadores CNAME enmascarados
- Cookies de seguimiento
- Píxeles de seguimiento
- API de seguimiento de los navegadores
- Detección del bloqueador de anuncios AdGuard para fines de seguimiento
- Funcionalidad Privacy Sandbox en Google Chrome y sus bifurcaciones utilizadas para el seguimiento (Google Topics API, Protected Audience API)

El **filtro de seguimiento de URL** fue diseñado para eliminar parámetros de seguimiento de direcciones web

### Limitaciones y Excepciones

Los filtros de protección contra rastreo no deben bloquear un rastreador si el bloqueo afecta el funcionamiento correcto del sitio:

- Protección anti-bots y fraude si interfiere con el uso del sitio. Por ejemplo, con PerimeterX o hCaptcha el bloqueo causa problemas cuando el sitio intenta verificar a su visitante con un captcha
- Los sistemas de seguimiento de errores como Sentry o Bugsnag no se bloquean

## Filtros de elementos molestos

Los filtros de elementos irritantes están diseñados para mejorar la usabilidad de los sitios web, bloqueando elementos en las páginas que no son anuncios, pero que distraen e interfieren en la interacción del sitio o en el consumo de contenido, como varias ventanas modales y formularios interactivos, notificaciones y solicitudes de consentimiento de cookies, banners de aplicaciones móviles y varios widgets.

### Terminología

**Aviso de cookies**: un formulario que describe los tipos y el uso de cookies en un sitio web. Un aviso de cookies aparece cuando un usuario visita el sitio, informándole al usuario que el sitio utiliza cookies u otras tecnologías de rastreo para recopilar y usar información personal, y explicando por qué y con quién se comparten las información recopilada.

**CMP (Consent Management Platform)**: software que ayuda a los sitios web a cumplir con las reglas de uso de cookies. Los CMPs limitan el uso de cookies hasta que se obtenga el consentimiento del usuario, proporcionando a los usuarios la opción de aceptar ciertas cookies y administrar configuraciones de privacidad.

**Widget**: un elemento de la interfaz de usuario que amplía la funcionalidad de un sitio web. Los widgets web se integran en las páginas web y pueden incluir elementos interactivos como botones, formularios o banners. Pueden proporcionar a los usuarios acceso a servicios o contenido específico sin necesidad de navegar a otras páginas.

**Popup**: una ventana que aparece encima de la página en la que te encuentras. Se destina a mostrar información adicional, anuncios, notificaciones o formularios de inserción de datos. Las pop-ups generalmente bloquean la visualización del contenido principal de la página y requieren una acción del usuario para ser cerradas, lo cual puede resultar irritante.

### Filtros

Para una mejor personalización, los filtros de molestias se dividen según su finalidad:

- Filtro de avisos de cookies
- Filtro de ventanas emergentes
- Filtro de banners en aplicaciones móviles
- Filtro de widgets de AdGuard
- Filtro AdGuard de otros elementos molestos
- Filtro contra elementos irritantes de AdGuard: un filtro combinado que incluye todos los 5 filtros especializados contra elementos irritantes

### La finalidad de estos filtros

#### Filtro de avisos de cookies

Este filtro fue diseñado para bloquear avisos y solicitudes de cookies de plataformas de gestión de cookies (CMPs). Se pueden aplicar varios métodos a los avisos de cookies y CMPs. En la mayoría de los casos, basta con ocultar o bloquear los scripts correspondientes. Sin embargo, cuando la funcionalidad del sitio y la visualización de contenido de terceros requieren el consentimiento de las cookies, se aplican los siguientes métodos:

- Los scriptlets se utilizan para evitar la solicitud de consentimiento (prácticamente no aplicable en sitios con restricciones sobre la carga de contenido de terceros hasta que se tome una decisión)
- Definir una cookie o clave en el almacenamiento local del sitio para que el script considere que el usuario ha tomado una decisión
- Simular la acción del usuario utilizando una regla que hace clic en un botón específico y detiene su ejecución 10 segundos después de la carga. Dos opciones son posibles:
    - Rechazar (excepto cookies funcionales, dependiendo del sistema CMP): la opción preferida, ya que hay menos probabilidades de cargar herramientas analíticas adicionales
    - Aceptar: esta opción se utiliza como último recurso si otros métodos fallan. En este caso, el sitio también es verificado para el uso de herramientas de análisis, las cuales son luego bloqueadas por el **Filtro de protección contra rastreo de AdGuard**

**Limitaciones y Excepciones**

En algunos casos, la decisión de agregar reglas es tomada de forma independiente por los desarrolladores del filtro; principalmente cuando la elección realizada al simular acciones afectaría la funcionalidad del sitio (por ejemplo, el historial puede no funcionar o las configuraciones del usuario pueden no guardarse en ese sitio).

#### Filtro de ventanas emergentes

Este es un filtro que bloquea varias ventanas emergentes innecesarias para el uso normal del sitio, incluyendo, pero sin limitarse a:

- Solicitudes de permiso para recibir notificaciones push
- Ventanas emergentes y formularios para suscribirse a noticias, promociones y eventos diversos, incluyendo canales de terceros para recibir (como Google News, Telegram)
- Ventanas emergentes que incentivan a los usuarios a desactivar el bloqueador de anuncios y violan la privacidad del usuario (a criterio de los desarrolladores del filtro)
- Otros tipos de ventanas emergentes que pueden molestar a los usuarios (a discreción de los desarrolladores del filtro)

**Limitaciones y Excepciones**

- Las notificaciones push se bloquean solo en sitios donde no se utilizan para fines prácticos. Por ejemplo, en clientes de correo electrónico o herramientas utilizadas para fines laborales, tales notificaciones no serán bloqueadas
- Algunas ventanas emergentes que no se ajustan a las categorías descritas anteriormente, pero que aún interfieren en la experiencia del usuario, también podrán ser bloqueadas. Por ejemplo, solicitudes de registro en un sitio web o ventanas emergentes que presentan las características del sitio. La decisión es tomada por los desarrolladores de filtros
- Las medidas de acceso al contenido que requieren que el usuario pague para acceder al contenido no deben ser eludidas

#### Filtro de banners en aplicaciones móviles

Este es un filtro que bloquea banners y ventanas emergentes que incentivan a los visitantes a instalar aplicaciones móviles.

**Limitaciones y Excepciones**

Los banners ubicados en los encabezados o menús de los sitios no son bloqueados si no son animados y no ocupan una parte significativa del espacio utilizable. Si un banner está ubicado en el pie de página, la decisión es tomada por los desarrolladores del filtro caso por caso. Normalmente, los banners en el pie de página no se destacan de otros elementos y no distraen.

#### Filtro de widgets de AdGuard

Este es un filtro que bloquea varios widgets no esenciales para el funcionamiento del sitio o para la interacción con él:

- Widgets para recomendaciones de contenido: artículos relacionados, sitios similares, diversas recomendaciones personalizadas
- Widgets de chat que no están integrados al contenido y no son el contenido principal de la página
- Widgets de marketing:
    - Chats para comunicación con asistentes o bots
    - Widgets con recomendaciones de productos que se muestran al usuario
    - Formularios de llamada
- Otros widgets que no tienen una categoría separada pero que pueden saturar visualmente la página. Por ejemplo, widgets meteorológicos, tipos de cambio, ofertas de trabajo y donaciones

**Limitaciones y Excepciones**

Este filtro no bloquea:

- Widgets relacionados al contenido de la página, como secciones de comentarios, transmisiones de chat en vivo, con excepción de chats no moderados en sitios con transmisiones no oficiales, que suelen estar llenos de spam y contenido similar
- Widgets para autopromoción y actividades promocionales específicas del sitio
- Widgets de donación, excepto en los casos en que ocupen una parte significativa de la página y se destaquen en el contenido. La decisión de bloquear la toman los desarrolladores de filtros

#### Filtro AdGuard de otros elementos molestos

Este filtro fue diseñado para bloquear elementos irritantes que no están incluidos en otros filtros, así como para aplicar varios ajustes. Su propósito es:

- Bloquear la autopromoción de sitios (cualquier tipo de publicidad que promueva bienes o servicios propiedad del propietario del sitio, sin recibir compensación comercial de terceros), si se considera un elemento irritante
- Bloquear elementos molestos que no están incluidos en otras categorías
- Desbloquear acciones en la página, como abrir el menú, seleccionar y copiar texto, en caso de que estén bloqueadas
- Acelerar la cuenta regresiva al cargar archivos de sitios web, en caso de que la verificación no sea controlada por el servidor o no se vea perjudicada
- Aplicar varias reglas que pueden ser útiles para los desarrolladores de filtros. Por ejemplo, bloquear la detección del depurador web

**Limitaciones y Excepciones**

Este filtro puede contener reglas que no son adecuadas para todos los usuarios. En algunos casos, se recomienda desactivarlo. Las decisiones de agregar reglas a este filtro son tomadas por los desarrolladores de filtros, una por una.

## Filtros de redes sociales

### Filtros

Los filtros de redes sociales de AdGuard incluyen:

- Filtro de redes sociales AdGuard

### La finalidad de estos filtros

Este filtro bloqueará widgets de redes sociales en sitios de terceros, como botones "Me gusta" y "Compartir", widgets de grupo, recomendaciones y widgets similares.

### Limitaciones y Excepciones

Los widgets que forman parte de la funcionalidad o contenido del sitio, como secciones de comentarios, publicaciones incrustadas y encuestas, así como widgets de inicio de sesión en redes sociales, no son bloqueados. Los enlaces a las páginas de redes sociales del sitio web tampoco se bloquearán.

## Otros filtros

Este grupo contiene filtros que esenciales para bloquear anuncios.

### Terminología

**Publicidad contextual** es un tipo de publicidad en Internet en la que el anuncio se muestra en función del contenido, público seleccionado, ubicación, hora u otro contexto del acceso a las páginas de Internet.

**Publicidad de búsqueda** es una subclase de publicidad contextual en la que los anuncios se muestran en función de la consulta de búsqueda del visitante.

**Autopromoción de sitios** se refiere a los banners que promueven bienes y servicios propiedad del propietario del sitio, por los cuales no reciben remuneración de terceros.

Para obtener más detalles sobre estos tipos de publicidad, consulta el artículo [ sobre anuncios de búsqueda](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtros

- Filtro para desbloquear anuncios de búsqueda y autopromoción
- Filtro de AdGuard DNS
- Filtro experimental AdGuard

### La finalidad de estos filtros

#### Filtro para desbloquear anuncios de búsqueda y autopromoción

Este filtro desbloquea:

- Publicidad contextual en los resultados de búsqueda al utilizar motores de búsqueda (como Google, Bing, Yandex, DuckDuckGo)
- Autopromoción de sitios web

**Limitaciones y Excepciones**

- La publicidad de búsqueda solo se desbloquea si coincide con la consulta de búsqueda del usuario, ya que es contextual. En caso contrario, la publicidad queda bloqueada
- La autopromoción solo se desbloquea si cumple con la política de filtros. Los desarrolladores de filtros pueden rechazar una solicitud de desbloqueo
- Cualquier otra publicidad no será desbloqueada

#### Filtro de AdGuard DNS

Este filtro se utiliza en AdGuard DNS. No reemplaza los filtros de bloqueo de publicidad.

**Limitaciones y Excepciones**

Lo mismo que para los filtros de bloqueo de publicidad.

#### Filtro experimental AdGuard

Este filtro está destinado a probar y depurar reglas que pueden afectar la funcionalidad de los sitios. Las reglas son agregadas por los desarrolladores de filtros cuando hay necesidad de probar una solución específica. Como el filtro fue diseñado para propósitos de depuración, sus limitaciones son mínimas.

**Limitaciones y Excepciones**

- Las reglas no deben violar intencionalmente la funcionalidad de los sitios web
- Las reglas no deben desbloquear anuncios ni violar la política de ninguna otra forma
