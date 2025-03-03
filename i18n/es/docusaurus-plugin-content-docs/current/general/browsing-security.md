---
title: Protección contra phishing y malware
sidebar_position: 3
---

Ser víctima de phishing y malware sigue siendo un problema común. Para mejorar la seguridad digital, hemos incorporado filtros especiales en los productos AdGuard para protegerte de sitios web maliciosos y de phishing. Hasta hoy, hemos categorizado más de 15 millones de sitios y creado una base de datos de 1,5 millones de sitios web conocidos por phishing y malware. Al utilizar esta base de datos, AdGuard verifica los sitios web que visitas para protegerte de amenazas en línea.

:::note Importante

Estrictamente no recopilamos ni utilizamos ninguna información sobre los sitios web que visitas.

:::

## ¿Cómo AdGuard verifica los sitios web?

Cada vez que visitas un sitio web, tu cliente local intercambia información con nuestro servidor backend en forma de hash y prefijos hash. En base a este intercambio, el cliente local determina si el sitio web figura o no en la base de datos de sitios web potencialmente peligrosos. Hay una diferencia en el alcance de esta verificación para aplicaciones y extensiones.

### En apps

AdGuard proporciona la mejor protección posible al inspeccionar tanto las páginas, como todos los objetos cargados en ellas. AdGuard verifica las URL y los nombres de dominio utilizando prefijos hash, no las URL completas, por lo que nuestros servidores no retienen información sobre los sitios web que visitas y tu información personal está completamente segura. Nuestros servidores responden a la consulta de la app con una lista de todas las direcciones posibles que coinciden con el prefijo hash. Cuando se detecta una amenaza potencial basada en coincidencias de hash, el acceso a ese sitio web se bloquea inmediatamente.

![Advertencia de AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

Nuestras extensiones de navegador solo pueden verificar nombres de dominio, no URL completas. Tampoco pueden verificar subconsultas. Esto significa que, si hay elementos potencialmente maliciosos en la página, se cargarán incluso si la página pertenece a un dominio seguro. La extensión no podrá protegerte contra ellos. También es importante tener en cuenta que la verificación realizada es sincrónica, es decir, ocurre al mismo tiempo que se carga la página, por lo que es posible que también se cargue malware.

## Configuración de la protección contra phishing y malware en los productos AdGuard

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Protección contra phishing y malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Lo que bloqueamos

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Mantenimiento de nuestros filtros

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### ¿Quieres ayudar?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### Falsos positivos

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## ¿Sospechas de un sitio web?

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
