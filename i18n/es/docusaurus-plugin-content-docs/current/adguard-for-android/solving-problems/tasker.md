---
title: Cómo automatizar AdGuard para Android
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Muchas personas eligen Android porque les gusta personalizar la configuración y quieren controlar su dispositivo por completo. Y es totalmente normal que algunos usuarios de AdGuard no estén satisfechos con su comportamiento predeterminado. Digamos que deseas que la protección se detenga cuando se inicia una determinada aplicación y luego se reinicie nuevamente cuando se cierre la aplicación. Este es un trabajo para la aplicación Tasker.

## Interfaz de AdGuard

Hay muchas aplicaciones de tareas disponibles, por ejemplo: [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess), etc. AdGuard proporciona una interfaz que permite a estas aplicaciones configurar varias reglas de automatización.

![Automatización *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Gracias a esta interfaz, cualquier aplicación puede enviar un mensaje especial (llamado “intención”) que contiene el nombre de la acción y algunos datos adicionales, si es necesario. AdGuard analizará esta intención y realizará las acciones necesarias.

### Cuestiones de seguridad

¿No es peligroso dejar que algunas aplicaciones aleatorias administren lo que hace AdGuard? Lo es, y es por eso que se envía una contraseña junto con la intención. AdGuard generará esta contraseña automáticamente, pero, por supuesto, podrás cambiarla en cualquier momento.

### Acciones disponibles

A continuación se muestran las acciones que, cuando se incluyen en la intención, serán entendidas por AdGuard:

`start` inicia la protección, no se necesitan datos adicionales;

`stop` detiene la protección, no se requieren datos adicionales;

`pause` pausa la protección. La diferencia entre esto y `stop` es que aparecerá una notificación que reinicia la protección cuando la toques. No se requieren datos adicionales;

`update` verifica si hay actualizaciones disponibles de filtros y aplicaciones. No se necesitan datos adicionales;

-----

`dns_filtering` activa y desactiva el filtrado de DNS. Requiere una bandera extra:

`enable:true` o `enable:false` habilita o deshabilita el filtrado de DNS, según corresponda.

`fake_dns` permite resolver peticiones de DNS en el servidor proxy especificado. Esto requiere una bandera adicional:

`enable:true` o `enable:false` activa o desactiva la opción *Usar FakeDNS*, respectivamente.

:::note

Cuando la configuración *Usar FakeDNS* está habilitada, *Protección DNS* se deshabilitará automáticamente. Las peticiones DNS no se filtrarán localmente.

:::

-----

`dns_server` cambia entre servidores DNS, debe incluir datos adicionales:

 `server:adguard dns` cambia al servidor DNS de AdGuard;

:::note

La lista completa de nombres de proveedores admitidos se puede encontrar en nuestra lista de [proveedores de DNS conocidos](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` cambia al servidor previamente añadido llamado `custom`;

 `servidor:tls://dns.adguard.com` crea un nuevo servidor y cambia a él si los servidores y proveedores agregados anteriormente no contienen un servidor con la misma dirección. De lo contrario, cambia al servidor correspondiente. Puedes agregar direcciones de servidor como IP (DNS normal), `sdns://…` (DNSCrypt o DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) o `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` crea un servidor con direcciones separadas por comas y conmuta a él. Al agregar un servidor a través de `server:1.1.1.1, tls://1.1.1.1`, se elimina el servidor agregado anteriormente.

 `servidor:sistema` restablece la configuración de DNS a los servidores DNS del sistema predeterminados.

 -----

`proxy_state` habilita/deshabilita el proxy saliente. Requiere una bandera extra:

`enable:true` o `enable:false` activa o desactiva el proxy saliente, según corresponda.

-----

`proxy_default` establece el proxy de la lista de los agregados previamente como predeterminado o crea uno nuevo si no se ha agregado ningún servidor antes.

Es necesario especificar datos adicionales:

`server:[name]` donde `[nombre]` es el nombre del proxy saliente de la lista.

O puedes configurar los parámetros del servidor manualmente:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` elimina el servidor proxy de la lista de los agregados previamente.

`server:[name]` donde `[name]` es el nombre del proxy saliente de la lista.

También puedes configurar manualmente los parámetros de eliminación:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Parámetros obligatorios**:

`[type]` — tipo de servidor proxy:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — dominio proxy saliente o dirección IP;

`[port]` — puerto proxy de salida (número entero de 1 a 65535);

- **Parámetros opcionales**:

 `[login and password]` — solo si el proxy lo requiere. Estos datos se ignoran al configurar **SOCKS4**;

 `[udp]` se aplica solo en el tipo de servidor **SOCKS5** e incluye la opción **UDP a través de SOCKS5**. Es necesario establecer el valor **true o false**;

 `[trust]` se aplica solo al tipo de servidor **HTTPS_CONNECT** e incluye la opción **Confiar en cualquier certificado**. Es necesario establecer el valor **true o false**.

:::note Ejemplo

`configuración por nombre`: servidor:MyServer

`manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**No olvides incluir la contraseña, el nombre del paquete y la clase. Debes hacer lo mismo para cada intención.**

Extra: `contraseña:*******`

Nombre del paquete: `com.adguard.android`

Clase: `com.adguard.android.receiver.AutomationReceiver`

:::note

Antes de la v4.0 la clase se llamaba `com.adguard.android.receivers.AutomationReceiver` pero luego cambiamos su nombre a `com.adguard.android.receiver.AutomationReceiver`. Si se utiliza esta función, recuerda actualizar al nuevo nombre.

:::

### Ejecución sin notificación

Para realizar una tarea sin mostrar un mensaje, agrega un EXTRA adicional `quiet: true`

### Ejemplo

![Automatización *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
