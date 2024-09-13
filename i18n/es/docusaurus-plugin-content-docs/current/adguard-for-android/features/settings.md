---
title: Configuración
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder a la pestaña _Configuración_ tocando el ícono más a la derecha en la parte inferior de la pantalla. Esta sección contiene varias configuraciones, información sobre tu aplicación, licencia y suscripción, y varios recursos de soporte.

## General

Esta sección te ayuda a administrar la apariencia y el comportamiento de la aplicación: puedes configurar el tema de color y el idioma, administrar notificaciones y más. Si deseas ayudar al equipo de AdGuard a detectar fallas de la aplicación e investigar la usabilidad, puedes habilitar _Informar automáticamente fallas_ y _Enviar datos técnicos y de interacción_.

![General \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

En _Actualizaciones de aplicaciones y filtros_, puedes configurar actualizaciones automáticas de filtros y seleccionar un canal de actualización de aplicaciones. Elige _Release_ para una mayor estabilidad y _Beta_ o _Nightly_ para acceder antes a las nuevas funciones.

Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Configuración avanzada

_Automatización_ te permite administrar AdGuard a través de aplicaciones de tareas.

_Watchdog_ ayuda a proteger AdGuard para que no sea desactivado por el sistema ([leer más sobre el modo de ahorro de batería de Android](/adguard-for-android/solving-problems/background-work/)). El valor que ingreses será el intervalo en segundos entre verificaciones del watchdog.

_Nivel de registro_ define qué datos sobre el funcionamiento de la aplicación deben registrarse. De forma predeterminada, la aplicación recopila datos sobre sus eventos. El nivel _Debug_ registra más eventos; habilítalo si el equipo de AdGuard lo solicita para ayudarlos a comprender mejor el problema. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Avanzado \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

La sección _Configuración de bajo nivel_ es para usuarios expertos. [Más información sobre la configuración de bajo nivel](/adguard-for-android/solving-problems/low-level-settings/)

Configuración de bajo nivel \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrado

Esta sección te permite administrar la configuración de filtrado HTTPS, los filtros y las secuencias de comandos de usuario, y configurar un servidor proxy.

![Filtrado \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtros

AdGuard bloquea anuncios, rastreadores y molestias aplicando reglas de sus filtros. La mayoría de las funciones de la sección _Protección_ funcionan con [filtros AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Si habilitas la _Protección básica_, se activará automáticamente el filtro AdGuard Base y el filtro AdGuard Mobile Ads. Y viceversa: si desactivas ambos filtros, la _Protección básica_ también se desactivará.

![Filtros \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Los filtros habilitados de forma predeterminada son suficientes para el funcionamiento normal de AdGuard. Sin embargo, si deseas personalizar el bloqueo de anuncios, puedes utilizar otros filtros de AdGuard o de terceros. Para ello, selecciona una categoría y activa los filtros que desees. Para agregar un filtro personalizado, toca _Filtros personalizados_ → _Agregar filtro personalizado_ e ingresa tu URL o ruta de archivo.

:::note

Si activas demasiados filtros, es posible que algunos sitios web funcionen incorrectamente.

:::

[Más información sobre filtros](https://adguard.com/en/blog/what-are-filters.html)

### Userscripts

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. Para instalar scripts de usuario, necesitas un administrador de userscripts especial. AdGuard tiene una funcionalidad de este tipo y te permite añadir usercripts por URL o desde un archivo.

![Userscripts \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra es un userscript personalizado que bloquea anuncios complejos y mecanismos que reinyectan anuncios en sitios web.

#### Deshabilitar AMP

Deshabilitar AMP es un userscript que deshabilita [páginas móviles aceleradas](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) en la página de resultados de búsqueda de Google.

### Red

#### Filtrado HTTPS

Para bloquear anuncios y rastreadores en la mayoría de los sitios web y en la mayoría de las aplicaciones, AdGuard necesita filtrar su tráfico HTTPS. [Más información sobre el filtrado HTTPS](/general/https-filtering/what-is-https-filtering)

##### Certificados de seguridad

Para gestionar el tráfico cifrado, AdGuard instala su certificado CA en tu dispositivo. Es seguro: el tráfico se filtra localmente y AdGuard verifica la seguridad de la conexión.

En versiones anteriores de Android, el certificado se instala automáticamente. En Android 11 y versiones posteriores, debes instalarlo manualmente. [Instrucciones de instalación](/adguard-for-android/solving-problems/manual-certificate/)

El certificado CA en la tienda de usuarios es suficiente para filtrar el tráfico HTTPS en navegadores y algunas aplicaciones. Sin embargo, hay aplicaciones que sólo confían en los certificados del almacén del sistema. Para filtrar el tráfico HTTPS allí, debes instalar el certificado CA de AdGuard en el almacén del sistema. [Instrucciones](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Aplicaciones filtradas por HTTPS

Esta sección contiene la lista de aplicaciones para las que AdGuard filtra el tráfico HTTPS. Ten en cuenta que la configuración se puede aplicar a todas las aplicaciones solo si tienes certificados de CA tanto en la tienda de usuarios como en la del sistema.

##### Sitios web filtrados por HTTPS

Esta configuración te permite administrar sitios web para los cuales AdGuard debe filtrar el tráfico HTTPS.

El filtrado HTTPS permite a AdGuard filtrar el contenido de las solicitudes y respuestas, pero nunca recopilamos ni almacenamos estos datos. Sin embargo, para aumentar la seguridad, [excluimos del filtrado HTTPS los sitios web que contienen información potencialmente confidencial](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

También podrás añadir a exclusiones los sitios web que consideres necesarios seleccionando una de las modalidades:

- Excluir sitios web específicos del filtrado HTTPS
- Filtrar el tráfico HTTPS solo en los sitios web agregados a las exclusiones

De forma predeterminada, tampoco filtramos sitios web con certificados de Validación Extendida (EV), como los sitios web financieros. Si es necesario, puedes habilitar la opción _Filtrar sitios web con certificados EV_.

#### Proxy

Puedes configurar AdGuard para enrutar todo el tráfico de tu dispositivo a través de tu servidor proxy. [Cómo configurar un proxy saliente](/adguard-for-android/solving-problems/outbound-proxy)

En esta sección, también puedes configurar una VPN de terceros para que funcione con AdGuard, si tu proveedor de VPN lo permite.

En _Aplicaciones que funcionan a través de proxy_, puedes seleccionar aplicaciones que enrutarán tu tráfico a través de tu proxy especificado. Si tienes habilitada la _Integración con AdGuard VPN_, esta configuración desempeña el papel de exclusiones de aplicaciones de AdGuard VPN: te permite especificar aplicaciones que se enrutarán a través del túnel de AdGuard VPN.

#### Modo de enrutamiento

Esta sección te permite seleccionar el método de filtrado de tráfico.

- _VPN local_ filtra el tráfico a través de una VPN creada localmente. Este es el modo más confiable. Debido a las restricciones de Android, también es el único método de filtrado de tráfico en todo el sistema disponible en dispositivos no rooteados.

:::note

El modo _VPN local_ no permite utilizar AdGuard simultáneamente con otras VPN. Para usar otra VPN con AdGuard, debes reconfigurarla para que funcione en modo proxy y configurar un proxy saliente en AdGuard. Para AdGuard VPN, esto se hace automáticamente con la ayuda del [_modo integrado_](/adguard-for-android/features/integration-with-vpn).

:::

- _Proxy automático_ es un método de enrutamiento de tráfico alternativo que no requiere el uso de una VPN. Una ventaja importante es que se puede ejecutar en paralelo con una VPN. Este modo requiere acceso root.

- _Proxy manual_ implica configurar un servidor proxy en un puerto específico, que luego se puede configurar en la configuración de Wi-Fi. Este modo requiere acceso de root para Android 10 y superior.

## Licencia

En esta sección podrás encontrar información sobre tu licencia y gestionarla:

- Compra una licencia de AdGuard para activar [las funciones de la versión completa](/adguard-for-android/features/free-vs-full)
- Inicia sesión en tu cuenta AdGuard o ingresa la clave de licencia para activar tu licencia
- Regístrate para activar tu período de prueba de 7 días si aún no lo has usado
- Refresh the license status from the three-dots menu (⋮)
- Abre la cuenta AdGuard para administrar tu licencia allí
- Restablece tu licencia. Por ejemplo, si has alcanzado el límite de dispositivos para esta licencia y deseas aplicar otra

![Pantalla de licencia \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Asistencia técnica

Utiliza esta sección si tienes alguna pregunta o sugerencia sobre AdGuard para Android. Recomendamos consultar el _[FAQ](https://adguard.com/support/adguard_for_android.html)_ o esta base de conocimientos antes de contactar al soporte.

![Soporte \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Si notas un anuncio perdido, infórmalo a través de _Informar bloqueo incorrecto_.

Para un comportamiento inesperado de la aplicación, selecciona _Informar un error_. Si es posible, describe tu problema en detalle y agrega registros de aplicaciones. [Cómo describir un problema](/guides/report-bugs/#how-to-describe-a-problem)

Para tus sugerencias, utiliza _Solicitar una función_.

:::note

O GitHub es una forma alternativa de informar errores y sugerir nuevas funciones. [Instrucciones y enlaces al repositorio](/guides/report-bugs/#adguard-for-android)

:::
