---
title: Descripción general de las funciones
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Safari, que protege solo tu navegador Safari. Para proteger todo tu dispositivo, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Safari fue diseñado para cumplir con las restricciones de Apple para las extensiones de navegador que bloquean anuncios y es el bloqueador de anuncios más popular para Safari. Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## General {#general}

![Pestaña General](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

La primera pestaña es la pantalla General donde puedes configurar cosas básicas como notificaciones, intervalos de actualización e iniciar AdGuard al iniciar el sistema. También puedes optar por mostrar el icono de AdGuard en la barra de menú. Allí también puedes activar [bloqueadores de contenido](#contentblockers) para bloquear anuncios, rastreadores, elementos molestos, etc.

## Filtros {#filters}

![Pestaña de filtros](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Un filtro es una lista de reglas escritas con una sintaxis especial. Siguiendo estas reglas, los bloqueadores de contenido pueden filtrar el tráfico web, bloqueando anuncios o solicitudes a sitios web maliciosos.

Los filtros se combinan en ocho categorías temáticas: *Bloqueo de anuncios, privacidad, widgets sociales, molestias, seguridad, filtros específicos de idioma, personalizados y otros filtros*.

Más información sobre los [filtros AdGuard](/general/ad-filtering/adguard-filters) o [filtrado de anuncios en general](/general/ad-filtering/how-ad-blocking-works).

En la pestaña Filtros, puedes habilitar toda la categoría o filtros separados. Los cambios en la pestaña Filtros se reflejan en la sección Bloqueadores de contenido (ubicada en la pestaña General).

## Bloqueadores de contenido {#contentblockers}

![Pestaña Bloqueadores de contenido](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Un bloqueador de contenido es un grupo temático de filtros. Los filtros relacionados con la privacidad se incluyen en el bloqueador de contenido con el nombre correspondiente: *AdGuard - Privacidad*.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[En 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple impuso limitaciones a los bloqueadores de anuncios para Safari, permitiéndoles usar solo 50.000 reglas de filtrado simultáneamente. Como este número no era suficiente para que un bloqueador de anuncios proporcionara una buena calidad de filtrado (el filtro base de AdGuard tiene 30.000 reglas de filtrado), dividimos AdGuard para Safari en seis bloqueadores de contenido, cada uno con hasta 50.000 reglas.

[En 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple aumentó el límite de reglas de filtrado para cada bloqueador de contenido a 150.000 reglas aplicadas simultáneamente. En cuanto a AdGuard para Safari, se pueden habilitar hasta 900.000 reglas para los seis bloqueadores de contenido.

Aunque se ha aumentado el límite, la estructura de los bloqueadores de contenidos sigue siendo la misma.

En la pestaña Bloqueadores de contenido, verás qué bloqueadores de contenido están habilitados, cuántas reglas usa cada uno de ellos y qué filtros están funcionando.

:::tip

Puedes administrar los filtros activados en la pestaña Filtros. En la sección Bloqueadores de contenido, solo puedes ver la lista de filtros ya activados.

:::

### AdGuard - General {#adguard_general}

*AdGuard - General* es un bloqueador de contenido que combina los filtros más esenciales para bloquear anuncios. Recomendamos mantener siempre activado el filtro AdGuard Base.

### AdGuard - Privacidad {#adguard_privacy}

Este bloqueador de contenido es la principal herramienta contra counters y otras herramientas de analytics en la web. El *Filtro de protección de seguimiento de AdGuard* está habilitado de forma predeterminada.

### AdGuard - Redes sociales {#adguard_social}

*AdGuard - Redes sociales* contiene filtros para botones, widgets, scripts e íconos de redes sociales. También se pueden encontrar otros filtros contra elementos molestios en esta sección: filtros contra ventanas emergentes, banners de aplicaciones móviles, avisos de cookies y más. Para habilitarlos, busca *Widgets sociales* en la pestaña Filtros.

### AdGuard - Seguridad {#adguard_security}

Este bloqueador de contenidos reúne varios filtros relacionados con la seguridad. *Lista de bloqueo de dominios con malware* bloquea los dominios conocidos por propagar malware y spyware. *Spam404* te protege de los estafadores de Internet. *Lista de filtros NoCoin* interrumpe los criptomineros basados en navegador, como Coinhive.

### AdGuard - Otros {#adguard_other}

*AdGuard - Otros* contiene filtros con varias funciones. Por ejemplo, tiene un filtro que desbloquea anuncios de búsqueda y anuncios de autopromoción. En algunos casos, ayuda a encontrar exactamente lo que buscas, porque este tipo de anuncios es más relevantes y menos intrusivo que otros.

:::note Descargo de responsabilidad

We don't have any 'acceptable ads' paid by advertisers. En su lugar, ofrecemos a los usuarios la opción de ver [anuncios de búsqueda y autopromoción de sitios web](/general/ad-filtering/search-ads).

:::

### AdGuard - Personalizado {#adguard_custom}

![Pestaña Personalizado](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Si necesitas más filtros, puedes agregarlos a *AdGuard - Personalizado*. Para agregar un filtro personalizado, ingresa una URL o una ruta de archivo local en el campo correspondiente. Puedes encontrar nuevos filtros en [filterlists.com](https://filterlists.com/).

## Reglas de usuario {#userrules}

Las reglas de usuario se pueden utilizar para personalizar el bloqueo de anuncios. Pueden añadirse manualmente, importarse o crearse automáticamente al bloquear un elemento en la página. Para añadir tus propias reglas de filtrado, utiliza la [sintaxis especial](/general/ad-filtering/create-own-filters).

## Acerca de {#about}

![Pestaña Acerca de](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

En la pestaña Acerca de, verás información sobre la versión actual de tu producto y enlaces a documentos legales. También encontrarás un enlace a nuestro repositorio en GitHub. Allí, puedes monitorear el desarrollo del producto, enviar sugerencias de funcionalidad e informar errores.

:::note Importante

AdGuard para Safari se puede descargar de forma gratuita [desde la App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Encontrarás instrucciones detalladas de configuración en nuestra [base de conocimientos](../installation).

:::
