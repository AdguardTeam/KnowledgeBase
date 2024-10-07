---
title: How to automate AdGuard for Android
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

 `servidor:tls://dns.adguard.com` crea un nuevo servidor y cambia a él si los servidores y proveedores agregados anteriormente no contienen un servidor con la misma dirección. De lo contrario, cambia al servidor correspondiente. You can add server addresses as IP ( regular DNS), `sdns://…` (DNSCrypt or DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) or `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` creates a server with comma separated addresses and switches to it. When adding a server via `server:1.1.1.1, tls://1.1.1.1`, the previously added server is removed.

 `server:system` resets DNS settings to default system DNS servers.

 -----

`proxy_state` enables/disables the outbound proxy. Requiere una bandera extra:

`enable:true` or `enable:false` activates or deactivates the outbound proxy, accordingly.

-----

`proxy_default` sets the proxy from the list of previously added ones as default or creates a new one if server has not been added before.

You need to specify additional data:

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you can configure server parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` removes the proxy server from the list of previously added ones.

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you can configure remove parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Compulsory parameters**:

`[type]` — proxy server type:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — outbound proxy domain or IP address;

`[port]` — outbound proxy port (integer number from 1 to 65535);

- **Optional parameters**:

 `[login and password]` — only if proxy requires it. This data is ignored when setting up **SOCKS4**;

 `[udp]` applied only on **SOCKS5** server type and include option **UDP through SOCKS5**. It is necessary to set **true or false** value;

 `[trust]` applies for **HTTPS_CONNECT** server type only and include option **Trust any certificates**. It is necessary to set **true or false** value.

:::note Example

`setting by name`: server:MyServer

`manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Don't forget to include the password, package name, and class. You need to do so for every intent.**

Extra: `password:*******`

Package name: `com.adguard.android`

Class: `com.adguard.android.receiver.AutomationReceiver`

:::note

Before v4.0 the class was called `com.adguard.android.receivers.AutomationReceiver` but then we changed its name to `com.adguard.android.receiver.AutomationReceiver`. If this function is used, remember to update to the new name.

:::

### Execution without notification

To perform a task without showing a toast, add an additional EXTRA `quiet: true`

### Example

![Automation *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
