---
title: Configuración
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Configuración_ es la sección que requiere mayor atención. Aquí es donde podrás configurar la aplicación para que cumpla plenamente con tus requisitos: bloquea sólo lo que te molesta, utiliza el servidor DNS del proveedor de confianza, elimina las cookies de terceros, etc.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Configuración general

Aquí puedes configurar el idioma y el tema (Oscuro o Claro), habilitar el inicio de AdGuard al iniciar el sistema y las actualizaciones automáticas silenciosas, elegir el canal de actualización y filtrar el intervalo de verificación de actualización. Además, configuración es el lugar al que acudir si AdGuard para Windows no funciona correctamente y el equipo de soporte te pidió que [recopiles _Logs de depuración_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

En la parte inferior de la pantalla encontrarás _Configuración avanzada_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

Este es el módulo principal de AdGuard para Windows que elimina anuncios de los sitios web que visitas y de las aplicaciones instaladas en tu dispositivo. Para filtrar publicidad y contenido que amenaza la privacidad, como banners, ventanas emergentes o rastreadores, AdGuard utiliza diferentes filtros: grupos de reglas con un propósito similar escrito con una [sintaxis especial](/general/ad-filtering/create-own-filters). Para comprender qué son los filtros y cómo funcionan, lee [este artículo](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- permitir la activación automática de filtros específicos para cada idioma,
- desactivar el bloqueo de [anuncios de búsqueda y autopromoción](/general/ad-filtering/search-ads),
- desactivar los anuncios en el menú Inicio en Windows 11,
- activar filtros preinstalados como el _Filtro AdGuard Base_,
- instalar filtros de la lista o agregar un filtro personalizado haciendo clic en el botón _Agregar un filtro_,
- realizar cambios en los grupos de reglas existentes usando el botón _Editor de filtros_,
- vea todas las solicitudes enviadas por los navegadores y las aplicaciones instaladas en tu computadora haciendo clic en el botón _Registro de filtrado_. Desde allí también puedes bloquear o desbloquear cualquier solicitud creando una regla personalizada,
- crear un filtro a partir de tus propias reglas escritas manualmente, importadas o creadas con la extensión Asistente de AdGuard.

Antes de empezar a escribir manualmente tus propias reglas, lee nuestra detallada [guía de sintaxis](/general/ad-filtering/create-own-filters).

### Tracking protection

Muchos sitios web recopilan información sobre sus visitantes, como sus direcciones IP, información sobre el navegador y el sistema operativo instalado, la resolución de la pantalla e incluso desde qué página llegó o fue redirigido el usuario. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Puedes ajustar de manera flexible el funcionamiento del modo oculto: por ejemplo, puedes prohibir que el sitio web reciba la solicitud de búsqueda que utilizaste para encontrarlo en Internet, eliminar automáticamente las cookies de terceros y del propio sitio web y deshabilitar la opción de compartir ubicación en tu navegador, que se puede utilizar para rastrear tu ubicación real.

Para aprender todo sobre el modo sigiloso y sus muchas opciones, [lee este artículo](/general/stealth-mode).

### Seguridad de navegación

La seguridad de la navegación brinda una sólida protección contra sitios web maliciosos y de phishing. No, AdGuard para Windows no es un antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Puedes encontrar más información sobre el funcionamiento de este módulo en el [artículo dedicado](/general/browsing-security).

En este módulo, podrás:

- activar notificaciones para bloquear solicitudes a sitios maliciosos y de phishing,
- activar las notificaciones sonoras,
- aceptar enviar información anónima relacionada con la seguridad al servidor AdGuard para ayudarnos a mantener actualizada la base de datos de sitios web maliciosos y de phishing.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

En caso de que desees obtener más información sobre la Seguridad de navegación, lee [este artículo](/general/browsing-security).

### Protección DNS

Hay tres razones importantes por las que es posible que desees explorar la configuración de protección DNS. Primero, para evitar ser rastreado por tu ISP. Cada vez que abres un sitio web, por ejemplo "google.com", tu navegador envía una solicitud a un servidor DNS para obtener a cambio la dirección IP del sitio web. Por lo general, el servidor DNS pertenece a tu ISP, lo que les permite rastrear tu actividad en línea. En segundo lugar, cifrar tu tráfico DNS. Y el tercero es [bloquear contenido a nivel de DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

En el módulo de protección de AdGuard DNS para Windows, puedes elegir servidores DNS de proveedores DNS conocidos, incluido AdGuard DNS, que bloquea anuncios y rastreadores; AdGuard DNS Family Protection, que además bloquea contenido para adultos; o AdGuard DNS Non-filtering, que proporciona una conexión segura y confiable, pero no filtra nada. También puedes agregar servidores y reglas DNS personalizados usando la [sintaxis de reglas DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Si es necesario, puedes agregar [filtros DNS de tu elección](https://filterlists.com).

A partir de la v7.20, también puedes añadir filtrados simplemente seleccionándolos de una lista predefinida de filtrados de confianza. Se agrupan en cuatro categorías para tu conveniencia:

- **Modo general**: bloquea anuncios y rastreadores
- **Regional**: bloquea anuncios y rastreadores en sitios web específicos del idioma
- **Seguridad**: bloquea phishing y sitios web poco fiables
- **Otro**: cubre casos de uso especiales que no se ajustan a las categorías anteriores

![Servidores DNS \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Control parental

Existen varios sitios web a los que se debe restringir el acceso desde una PC utilizada por niños. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

El módulo verifica el contenido de las páginas web abiertas en el navegador y filtra aquellas con contenido no deseado para los niños: imágenes y textos para adultos, lenguaje grosero, violencia, propaganda de drogas, etc. La configuración del Control parental está protegida con contraseña para que el niño no pueda eludir las restricciones. Este módulo no sólo bloquea direcciones a sitios no deseados sino que también puede eliminar de los resultados de búsqueda los enlaces que no son apropiados para niños.

En el módulo de _Control parental_ puedes habilitar la _Búsqueda segura_ y administrar la _lista de bloqueo_ y la _lista de permitidos_ para personalizar cómo funciona esta opción. También puedes marcar la casilla _Bloquear descarga de archivos ejecutables_ para evitar que tu hijo descargue e instale software en la computadora. Hay dos opciones más en el módulo _Control parental_: puedes seleccionar un usuario específico de Windows para que esté protegido por _Control parental_ y establecer una contraseña para proteger la configuración de AdGuard contra cambios.

### Asistente de navegador

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
