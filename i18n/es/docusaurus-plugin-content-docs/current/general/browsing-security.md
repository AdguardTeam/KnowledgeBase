---
title: Protección contra phishing y malware
sidebar_position: 3
---

Ser víctima de phishing y malware sigue siendo un problema común. Para mejorar la seguridad digital, hemos incorporado filtros especiales en los productos AdGuard para protegerte de sitios web maliciosos y de phishing. Hasta hoy, hemos categorizado más de 15 millones de sitios y creado una base de datos de 1,5 millones de sitios web conocidos por phishing y malware. Al utilizar esta base de datos, AdGuard verifica los sitios web que visitas para protegerte de amenazas en línea.

:::note

Estrictamente no recopilamos ni utilizamos ninguna información sobre los sitios web que visitas.

:::

## How does AdGuard check websites?

Cada vez que visitas un sitio web, tu cliente local intercambia información con nuestro servidor backend en forma de hash y prefijos hash. En base a este intercambio, el cliente local determina si el sitio web figura o no en la base de datos de sitios web potencialmente peligrosos. Hay una diferencia en el alcance de esta verificación para aplicaciones y extensiones.

### En apps

AdGuard proporciona la mejor protección posible al inspeccionar tanto las páginas, como todos los objetos cargados en ellas. AdGuard verifica las URL y los nombres de dominio utilizando prefijos hash, no las URL completas, por lo que nuestros servidores no retienen información sobre los sitios web que visitas y tu información personal está completamente segura. Nuestros servidores responden a la consulta de la app con una lista de todas las direcciones posibles que coinciden con el prefijo hash. Cuando se detecta una amenaza potencial basada en coincidencias de hash, el acceso a ese sitio web se bloquea inmediatamente.

![Advertencia de DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### En las extensiones de navegador

Nuestras extensiones de navegador solo pueden verificar nombres de dominio, no URL completas. Tampoco pueden verificar subconsultas. Esto significa que, si hay elementos potencialmente maliciosos en la página, se cargarán incluso si la página pertenece a un dominio seguro. La extensión no podrá protegerte contra ellos. También es importante tener en cuenta que la verificación realizada es sincrónica, es decir, ocurre al mismo tiempo que se carga la página, por lo que es posible que también se cargue malware.

## Configuración de la protección contra phishing y malware en los productos AdGuard

- **Para Windows**: activa el módulo *Seguridad de navegación* en el menú *Configuración*

![Seguridad de navegación en Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Para Mac**: habilitq el módulo *Seguridad* en *Preferencias*

![Seguridad en Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Para Android**: activa *Seguridad de navegación* en la pestaña *Protección*

![Seguridad de navegación en Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Para iOS**: Aunque no existe un módulo independiente, puedes ir a *Protección* → *Filtros* → *Seguridad* de *Safari* y activar los filtros disponibles. Además, habilita *Protección DNS* y selecciona uno de los servidores DNS de AdGuard

![Seguridad en iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Para extensiones de navegador**: habilita *Protección contra phishing y malware* en la pestaña *Configuración*. Para una protección mejorada, ve a *Filtros* → *Seguridad* y activa los filtros disponibles

![Protección contra phishing y malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Para DNS privado de AdGuard:** Habilita la protección contra malware en *Configuración del servidor* en *Seguridad*

![Seguridad en DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Lo que bloqueamos

Mantenemos dos filtros principales: uno que protege contra phishing y sitios web fraudulentos que intentan robar las credenciales de los usuarios, y otro que bloquea el acceso a sitios web conocidos por distribuir malware, lo que podría provocar pérdida de datos, fugas de información o daños a tu dispositivo. Estos filtros también te protegen de sitios web con diversas estafas y esquemas fraudulentos. Para obtener información más detallada, consulta este [artículo de Wikipedia](https://en.wikipedia.org/wiki/Phishing).

## Mantenimiento de nuestros filtros

AdGuard mantiene una extensa base de datos de sitios web de phishing y malware, y se actualiza de forma periódica y automática a medida que se descubren nuevas amenazas. Recopilamos información de una variedad de fuentes confiables y de alta calidad, tanto públicas como de otras empresas, y la agregamos a una base de datos común de sitios peligrosos.

Analizamos automáticamente las quejas sobre sitios sospechosos y dedicamos mucho tiempo a mantener actualizada la base de datos, limpiando falsos positivos e implementando mecanismos para prevenirlos en el futuro.

### Want to help?

¡Toda ayuda es bienvenida! Si encuentras un sitio web de phishing o malware, infórmalo a <support@adguard.com>.

### False-positive responses

Ocasionalmente, se agregan algunos sitios web no maliciosos a los filtros de AdGuard. Hacemos todo lo posible para reducir el porcentaje de falsos positivos, pero aún así ocurren. Si encuentras este comportamiento de AdGuard, por favor reporta el falso positivo a nuestro soporte técnico en <support@adguard.com>.

## ¿Sospechas de un sitio web?

Si sospechas que un determinado sitio web puede ser peligroso, verifícalo primero utilizando nuestra [herramienta de control de seguridad](https://reports.adguard.com/welcome.html).

![Control de seguridad](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
