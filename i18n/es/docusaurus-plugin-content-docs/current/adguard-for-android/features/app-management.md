---
title: Gestión de aplicaciones
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder al módulo _Administración de aplicaciones_ tocando la pestaña _Administración de aplicaciones_ (tercer ícono desde la izquierda en la parte inferior de la pantalla). Esta sección te permite administrar permisos y configuraciones de filtrado para todas las aplicaciones instaladas en tu dispositivo.

![Gestión de aplicaciones \*mobile_border] (https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Al tocar una aplicación, puedes administrar su configuración:

- Enrutar su tráfico a través de AdGuard
- Bloquear anuncios y rastreadores en esta aplicación (_Filtrar contenido de la aplicación_)
- Filtrar su tráfico HTTPS (para aplicaciones que no son de navegador, requiere [instalar el certificado CA de AdGuard en el almacén del sistema](/adguard-for-android/solving-problems/https-certificate-for-rooted/), disponible en dispositivos rooteados)
- Enrútalo a través de tu servidor proxy especificado o AdGuard VPN en el modo de integración

![Gestión de aplicaciones en Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Desde el menú contextual, también puedes acceder a las estadísticas de la aplicación.

![Gestión de aplicaciones en Chrome. Menú contextual \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Aplicaciones “libres de problemas” y “problemáticas”

Most apps work correctly when filtered. Para dichas aplicaciones, su tráfico se dirige a través de AdGuard y se filtra de forma predeterminada.

Algunas aplicaciones, como el Administrador de descargas, la radio y las aplicaciones del sistema con UID 1000 y 1001 (por ejemplo, los servicios de Google Play), son "problemáticas" y pueden funcionar incorrectamente cuando se enrutan a través de AdGuard. Es por eso que es posible que veas la siguiente advertencia al intentar enrutar o filtrar todas las aplicaciones:

![Diálogo de ruta de todas las aplicaciones \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Para garantizar el funcionamiento adecuado de todas las aplicaciones instaladas en tu dispositivo, te recomendamos encarecidamente que enrutes sólo aplicaciones que no presenten problemas a través de AdGuard. Puedes ver la lista completa de aplicaciones no recomendadas para filtrar en _Configuración_ → _General_ → _Avanzado_ → _Configuración de bajo nivel_ → _Protección_ → _Aplicaciones excluidas_.
