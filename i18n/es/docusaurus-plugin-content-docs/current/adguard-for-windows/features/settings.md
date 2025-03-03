---
title: Configuración
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

_Configuración_ es la sección que requiere mayor atención. Aquí es donde podrás configurar la aplicación para que cumpla plenamente con tus requisitos: bloquea sólo lo que te molesta, utiliza el servidor DNS del proveedor de confianza, elimina las cookies de terceros, etc.

![Configuración \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Configuración general

Aquí puedes configurar el idioma y el tema (Oscuro o Claro), habilitar el inicio de AdGuard al iniciar el sistema y las actualizaciones automáticas silenciosas, elegir el canal de actualización y filtrar el intervalo de verificación de actualización. Además, configuración es el lugar al que acudir si AdGuard para Windows no funciona correctamente y el equipo de soporte te pidió que [recopiles _Logs de depuración_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Configuración avanzada \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

En la parte inferior de la pantalla encontrarás _Configuración avanzada_. Cambiar algunos de ellos sin pensar puede causar problemas con el rendimiento de AdGuard, interrumpir la conexión a Internet o comprometer ttu seguridad y privacidad. Por ello, te sugerimos que abras esta sección sólo si estás seguro de lo que haces o si nuestro equipo de asistencia te ha preguntado al respecto. Si deseas saber qué se puede configurar en _Configuración avanzada_, lee el [artículo dedicado](/adguard-for-windows/solving-problems/low-level-settings.md).

### Bloqueador de anuncios

Este es el módulo principal de AdGuard para Windows que elimina anuncios de los sitios web que visitas y de las aplicaciones instaladas en tu dispositivo. Para filtrar publicidad y contenido que amenaza la privacidad, como banners, ventanas emergentes o rastreadores, AdGuard utiliza diferentes filtros: grupos de reglas con un propósito similar escrito con una [sintaxis especial](/general/ad-filtering/create-own-filters). Para comprender qué son los filtros y cómo funcionan, lee [este artículo](/general/ad-filtering/how-ad-blocking-works).

![Bloqueador de anuncios \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

En el módulo Bloqueador de anuncios, podrás:

- permitir la activación automática de filtros específicos para cada idioma,
- desactivar el bloqueo de [anuncios de búsqueda y autopromoción](/general/ad-filtering/search-ads),
- desactivar los anuncios en el menú Inicio en Windows 11,
- activar filtros preinstalados como el _Filtro AdGuard Base_,
- instalar filtros de la lista o agregar un filtro personalizado haciendo clic en el botón _Agregar un filtro_,
- realizar cambios en los grupos de reglas existentes usando el botón _Editor de filtros_,
- vea todas las solicitudes enviadas por los navegadores y las aplicaciones instaladas en tu computadora haciendo clic en el botón _Registro de filtrado_. Desde allí también puedes bloquear o desbloquear cualquier solicitud creando una regla personalizada,
- crear un filtro a partir de tus propias reglas escritas manualmente, importadas o creadas con la extensión Asistente de AdGuard.

Antes de empezar a escribir manualmente tus propias reglas, lee nuestra detallada [guía de sintaxis](/general/ad-filtering/create-own-filters).

### Modo Stealth

Muchos sitios web recopilan información sobre sus visitantes, como sus direcciones IP, información sobre el navegador y el sistema operativo instalado, la resolución de la pantalla e incluso desde qué página llegó o fue redirigido el usuario. Algunas páginas web utilizan cookies para marcar el navegador y guardar tu configuración personal, preferencias de usuario o "reconocerte" en tu próxima visita. El modo oculto protege tu información personal de dichos sistemas de recopilación de datos y estadísticas.

![Modo oculto \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Puedes ajustar de manera flexible el funcionamiento del modo oculto: por ejemplo, puedes prohibir que el sitio web reciba la solicitud de búsqueda que utilizaste para encontrarlo en Internet, eliminar automáticamente las cookies de terceros y del propio sitio web y deshabilitar la opción de compartir ubicación en tu navegador, que se puede utilizar para rastrear tu ubicación real.

Para aprender todo sobre el modo sigiloso y sus muchas opciones, [lee este artículo](/general/stealth-mode).

### Seguridad de navegación

La seguridad de la navegación brinda una sólida protección contra sitios web maliciosos y de phishing. No, AdGuard para Windows no es un antivirus. No detendrá la descarga de un virus cuando ya esté iniciado ni eliminará los ya existentes. Pero te avisará si estás a punto de acceder a un sitio web cuyo dominio se ha agregado a nuestra base de datos de "sitios no confiables" o de descargar un archivo del dicho sitio web. Puedes encontrar más información sobre el funcionamiento de este módulo en el [artículo dedicado](/general/browsing-security).

En este módulo podrás

- activar notificaciones para bloquear solicitudes a sitios maliciosos y de phishing,
- activar las notificaciones sonoras,
- aceptar enviar información anónima relacionada con la seguridad al servidor AdGuard para ayudarnos a mantener actualizada la base de datos de sitios web maliciosos y de phishing.

![Seguridad de navegación \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

En caso de que desees obtener más información sobre la Seguridad de navegación, lee [este artículo](/general/browsing-security).

### Protección DNS

Hay tres razones importantes por las que es posible que desees explorar la configuración de protección DNS. Primero, para evitar ser rastreado por tu ISP. Cada vez que abres un sitio web, por ejemplo "google.com", tu navegador envía una solicitud a un servidor DNS para obtener a cambio la dirección IP del sitio web. Por lo general, el servidor DNS pertenece a tu ISP, lo que les permite rastrear tu actividad en línea. En segundo lugar, cifrar tu tráfico DNS. Y el tercero es [bloquear contenido a nivel de DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Protección DNS \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Asistente de navegador

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
