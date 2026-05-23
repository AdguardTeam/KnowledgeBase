---
title: Política de filtrado de AdGuard
sidebar_position: 6
---

:::note Descargo de responsabilidad

Por favor, lee cuidadosamente esta política de filtros antes de habilitar cualquier filtro.

El uso del bloqueador de anuncios AdGuard, AdGuard DNS y sus filtros puede afectar el funcionamiento de sitios web y servicios de terceros. Eres responsable de revisar y seguir las políticas y términos de cualquier sitio web o servicio que utilices.

Antes de habilitar los filtros proporcionados por terceros, aceptas revisar sus términos aplicables y tomar una decisión informada sobre su uso. AdGuard no es responsable de cómo funcionan los filtros de terceros ni de lo que contienen sus términos, y su presencia en los productos AdGuard no es una recomendación para utilizarlos.

:::

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

**Anti-adblock** is a technology used by websites or applications intended to detect ad blocking and react to it in different ways: tracking, reinjecting ads, encouraging to disable ad blocker (so-called “adblock walls”). Los anti-adblocks pueden ser de diferentes tipos:

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

### La finalidad de estos filtros

- El **Filtro base** fue diseñado para bloquear anuncios en sitios en inglés y aquellos para los cuales no hay un filtro separado. También contiene reglas generales de filtrado que se aplican a todos los sitios, independientemente del idioma
- El **Filtro de anuncios para dispositivos móviles** bloquea anuncios en versiones móviles de sitios y en teléfonos celulares y tabletas. No hay segmentación basada en el idioma
- Los **Filtros regionales** siguen la misma política que el **Filtro base**, pero están limitados a sitios en determinados idiomas

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
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- Las anti-adblock walls serán bloqueadas en los siguientes casos:
    - Insisten de forma agresiva en desactivar o eliminar el bloqueador de anuncios o en impedir efectivamente el uso del sitio
    - Presentan descripciones incorrectas y engañosas de las posibles consecuencias del uso de bloqueadores de anuncios
    - Ponen a los visitantes en riesgo de malvertising, es decir, anuncios desbloqueados que provienen de fuentes dudosas
    - They violate or negatively impact user privacy
- No bloqueamos mensajes de detección de bloqueadores de anuncios que cumplan al menos uno de los siguientes criterios:
    - Permiten el uso del sitio y no se superponen a una cantidad significativa de contenido
    - Proporcionan una alternativa a la desactivación de un bloqueador de anuncios, ya que esta opción no pone en riesgo la privacidad o la seguridad de los usuarios
    - They allow the user to proceed to the website’s content
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

Este filtro fue diseñado para bloquear avisos y solicitudes de cookies de plataformas de gestión de cookies (CMPs). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Limitaciones y Excepciones**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### Filtro de ventanas emergentes

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitaciones y Excepciones**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### Filtro de banners en aplicaciones móviles

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitaciones y Excepciones**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### Filtro de widgets de AdGuard

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitaciones y Excepciones**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### Filtro AdGuard de otros elementos molestos

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitaciones y Excepciones**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Filtros de redes sociales

### Filtros

AdGuard Social Media filters include:

- AdGuard Social Media filter

### La finalidad de estos filtros

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitaciones y Excepciones

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Otros filtros

This group contains filters that are not essential for blocking advertisements.

### Terminología

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtros

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### La finalidad de estos filtros

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitaciones y Excepciones**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitaciones y Excepciones**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitaciones y Excepciones**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
