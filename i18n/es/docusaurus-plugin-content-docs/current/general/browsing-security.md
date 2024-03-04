---
title: Seguridad de navegación
sidebar_position: 3
---

Cada día, decenas de miles de personas son víctimas de ataques de virus o fraudes en Internet. Hemos añadido filtros especiales a la aplicación AdGuard para protegerte de sitios web maliciosos y de phishing.

Hasta ahora, hemos categorizado más de 15 millones de sitios y nuestros filtros contienen alrededor de 1,5 millones de sitios de phishing y malware. ¡El 10% de todos los sitios conocidos pueden ser peligrosos para ti! Los usuarios inexpertos pueden convertirse fácilmente en víctimas de estafadores o hackers. Esperamos que el uso de la protección contra sitios maliciosos te ayude a evitar todos los peligros que puedas encontrar.

## ¿Cómo funciona la verificación?

El alcance y los métodos de las verificaciones dependen del producto que utilizas. En nuestras extensiones de navegador, AdGuard inspecciona solo las páginas que visitas. En AdGuard para Windows, Mac o Android te ofrecemos la mejor protección posible verificando tanto las páginas como todos los objetos cargados en ellas.

### AdGuard para Windows, Mac y Android

Usamos el protocolo [Safe Browsing API versión 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec) para nuestro trabajo con filtros. Este protocolo nos permite mantener tus datos personales absolutamente seguros. Nuestro servidor no sabe nada sobre los sitios que visitas. Usamos prefijos hash para las verificaciones, no las URL abiertas.

La siguiente figura proporciona una comprensión general de cómo funciona el módulo de seguridad de navegación, utilizando AdGuard para Windows como ejemplo.

![Algoritmo de funcionamiento del módulo de Seguridad de Navegación](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### Extensión de navegador AdGuard

Las extensiones de navegador funcionan de manera diferente, utilizando la llamada [*API de búsqueda*](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668) para verificar las páginas que visitas. Cada vez que visitas un sitio web, tu cliente local intercambia información con nuestro servidor backend en forma de hash y prefijos hash. Based on this exchange, the local client determines whether or not the site is listed in the potentially dangerous sites database. Para aquellos interesados en detalles sobre el proceso, el enlace de arriba será útil.

Te informamos que nunca obtenemos ninguna información que pueda permitirnos determinar qué sitios web visitas o utilizar esos datos de alguna manera.

En la siguiente imagen se muestra un algoritmo aproximado del funcionamiento del módulo de seguridad de navegación.

![Algoritmo de funcionamiento del módulo de Seguridad de Navegación en las extensiones de navegador AdGuard.](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png)

## Filtros de AdGuard

Actualmente mantenemos dos filtros de AdGuard. Uno protege contra phishing y sitios web fraudulentos. El otro protege contra sitios web maliciosos, cuya visita puede provocar un virus.

### Filtro de sitios de phishing

*Phishing* es un tipo de fraude en línea cuyo objetivo es obtener acceso a los datos confidenciales de los usuarios, como sus nombres de usuario y contraseñas. Si estás interesado en este tema, te sugerimos que leas [este artículo en Wikipedia](http://en.wikipedia.org/wiki/Phishing).

Además de los sitios de phishing, este filtro también cubre diferentes sitios fraudulentos, incluyendo todo tipo de estafas, venta de contenido inexistente, etc.

### Filtro de sitios maliciosos

This filter contains links to pages that could execute malicious code, leading to potential leaks, data loss, or damage to a user’s device. Code execution can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware).

## How do we add new addresses to our filters?

Most of the work is automated, so you can be sure that new malware and phishing addresses are added to our database as quickly as possible.

### Comunidad de seguridad de navegación de AdGuard

An important tool for maintaining the highest level of filtering is the *AdGuard Browsing Security Community*. Cualquier usuario de nuestros productos, ya sea AdGuard para Windows o nuestra extensión de navegador, puede convertirse en miembro de la comunidad y ayudarnos a crear los filtros de AdGuard.

In the image below, you can see an algorithm of how Browsing Security Community works:

![Cómo funciona la Comunidad de Seguridad de Navegación de AdGuard](https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png)

### ¿Quieres ayudar?

¡Aceptaremos con gusto cualquier ayuda! Si deseas enviarnos una queja sobre un sitio de phishing o malware, puedes hacerlo a través del soporte vía **support@adguard.com**.

### Falsos positivos

De vez en cuando, algunos sitios web no maliciosos se agregan a los filtros de AdGuard. Hacemos todo lo posible para reducir el porcentaje de falsos positivos, pero aún así ocurren. Si encuentras este comportamiento por parte de AdGuard, envíanos una queja sobre el falso positivo. Puedes enviar las quejas a través de nuestro soporte técnico vía **support@adguard.com**.
