---
title: Extensiones
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard puede ampliar significativamente la funcionalidad del sitio web trabajando como [gestor de scripts de usuario](/general/userscripts). Los usuarios de AdGuard pueden añadir sus propios scripts, así como gestionar los existentes.

![Extensiones \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Detectar automáticamente userscripts**

Con esta opción activada, AdGuard definirá automáticamente las consultas del navegador a los userscripts y sugerirá su instalación. De lo contrario, las extensiones se pueden descargar e instalar manualmente.

Las siguientes extensiones se instalan con AdGuard:

![Scripts de usuario preinstalados \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**Asistente de AdGuard**

El Asistente de AdGuard es un asistente antiguo que puede utilizar si el [nuevo Asistente](/adguard-for-windows/browser-assistant.md) no está disponible para tu navegador. El nombre de esta extensión es bastante deliberado: en realidad ayuda al usuario a cambiar la configuración básica de AdGuard directamente en el navegador, sin la necesidad de abrir la aplicación. AdGuard Assistant funciona con todos los navegadores compatibles con Microsoft Windows. Además, el icono del Asistente de AdGuard no se mostrará en los sitios web enumerados como excepciones por el usuario y en determinadas páginas web donde existe el riesgo de que se muestre contenido incorrecto.

**AdGuard Extra**

Esta es una extensión personalizada diseñada para combatir la técnica de reinsertar anuncios bloqueados: la llamada elusión de bloqueadores de anuncios. Ambos son métodos avanzados de bloqueo de publicidad que siguen ganando popularidad entre los anunciantes.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard Popup Blocker**

Esta extensión evita que se abran ventanas emergentes cuando visualizas páginas web. Algunas ventanas emergentes se consideran útiles: pueden contener configuraciones para la administración del sitio o información de referencia adicional que se muestra al hacer clic en un enlace. Es por eso que puedes desactivar el bloqueador si es necesario. Esta extensión tampoco funciona en sitios web agregados a la lista de excepciones de AdGuard. Está desactivado de forma predeterminada, pero puedes activarlo en la configuración de la aplicación. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust te permite ver la reputación de cada sitio web en función de las opiniones de sus usuarios. El sitio se clasifica según una serie de criterios específicos: confianza, seguridad, etc. Esta extensión está desactivada de forma predeterminada, pero puedes activarla en la configuración de la aplicación. Ten en cuenta que AdGuard no es el desarrollador de esta extensión.

### Red

El penúltimo módulo está dedicado al filtrado de redes y aquí encontrarás opciones adicionales relacionadas con la red. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Estas son precauciones adicionales importantes para filtrar mejor tu espacio web. La mayoría de los sitios web utilizan ahora HTTPS y lo mismo se aplica a la publicidad. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Configuración de red \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

En este módulo, puedes marcar la casilla "Usar AdGuard como proxy HTTP" para usar AdGuard como un proxy HTTP normal que filtrará todo el tráfico que pasa a través de él. También puedes habilitar la función _Filtrar sitios web con certificados EV_. Los certificados SSL de validación extendida (EV) ofrecen una garantía de seguridad más sólida; Los propietarios de dichos sitios web deben pasar un proceso de verificación de identidad exhaustivo y estandarizado a nivel mundial definido por las directrices EV. Esta es la razón por la que algunos usuarios confían en sitios web con dichos certificados y prefieren no filtrarlos.

Por fin, hay una sección con configuración de proxy. Allí puedes especificar qué servidor proxy debe utilizar AdGuard para actualizar los filtros, obtener nuevas versiones, etc.

### AdGuard VPN

La última sección está dedicada a AdGuard VPN, una herramienta ideal que brinda seguridad y anonimato cada vez que navegas por Internet. Puedes descargarlo haciendo clic en el botón _Descargar_ o ir al sitio web de AdGuard VPN haciendo clic en el botón _Página de inicio_.

¿Cómo funciona AdGuard VPN? Sin entrar en detalles técnicos, podemos decir que la VPN crea un túnel cifrado seguro entre la computadora o dispositivo móvil del usuario y un servidor VPN remoto. De esta manera, se preserva la confidencialidad de los datos, así como el anonimato del usuario, porque un observador de un tercer partido ve la dirección IP del servidor VPN y no la dirrecion IP verdadero del usuario.

**Qué hace AdGuard VPN:**

- oculta tu paradero real y te ayuda a permanecer en el anonimato
- cambia tu dirección IP para proteger tus datos del seguimiento
- cifra tu tráfico para hacerlo ilegible para terceros
- te permite configurar dónde usar la VPN y dónde no usarla (función de exclusiones)

Para obtener más información sobre AdGuard VPN, consulta la [Base de conocimientos de AdGuard VPN] (https://adguard-vpn.com/kb/).
