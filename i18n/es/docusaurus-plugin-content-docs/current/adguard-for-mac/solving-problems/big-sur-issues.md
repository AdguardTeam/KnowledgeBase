---
title: Problemas de compatibilidad con diferentes versiones de macOS
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemas actuales

Cada año, Apple lanza una nueva versión de macOS, que presenta soluciones innovadoras y agrega nuevas funciones útiles. Pero algunas de ellas, como Network Extensions API (Big Sur) o iCloud Private Relay (Monterey), causan algunos problemas a muchas aplicaciones, y AdGuard no es una excepción. En este artículo repasamos los problemas conocidos específicos de cada versión de macOS y las posibles formas de resolverlos.

### Monterey 12: problemas existentes actualmente

Apple aún no ha solucionado estos problemas, o los ha solucionado sólo parcialmente.

#### Compatibilidad con iCloud Private Relay

Actualmente, AdGuard y iCloud Private Relay no pueden funcionar al mismo tiempo. AdGuard no tiene la capacidad de bloquear anuncios porque iCloud Private Relay cifra el tráfico antes de que AdGuard pueda filtrar las conexiones de red. Cuando iCloud Private Relay está activo, cualquier filtrado (incluido el filtrado local) se vuelve imposible. Por lo tanto, AdGuard no puede filtrar el tráfico ni realizar filtrado DNS en Safari. Es por eso que, de forma predeterminada, AdGuard utiliza la "ruta predeterminada" que desactiva la retransmisión privada de iCloud.

Para una comprensión más profunda de este problema, lee [este artículo](../icloud-private-relay).

**Solución recomendada**

Recomendamos utilizar AdGuard junto con un servicio VPN más tradicional como [AdGuard VPN](https://adguard-vpn.com/).

**Solución alternativa**

Puedes evitar que AdGuard utilice la "ruta por defecto" desactivándola. Se puede hacer a través de Configuración avanzada → `network.extension.monterey.force.split.tunnel`. Ten en cuenta que habilitar esta configuración causará los problemas descritos anteriormente.

![Configuración avanzada *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Compatibilidad con Protect Mail Activity

La aplicación de correo de Apple ahora utiliza un proxy para ocultar la dirección IP de un usuario al descargar imágenes de correos electrónicos. Sin embargo, no funcionará si hay una conexión VPN activa. Como trata a AdGuard como una VPN, no precargará imágenes automáticamente.

Para una comprensión más profunda de este problema, lee [este artículo](../protect-mail-activity).

**Solución recomendada**

En este punto, recomendamos utilizar un servicio VPN más tradicional, como [AdGuard VPN](https://adguard-vpn.com/), en lugar de las funciones de privacidad más nuevas de Apple.

### Monterey 12, Big Sur 11.6 y posteriores: problemas existentes actualmente

Apple aún no ha solucionado estos problemas, o los ha solucionado sólo parcialmente.

#### Compatibilidad con Cisco AnyConnect

AdGuard no funcionará junto con Cisco AnyConnect mientras esté en el modo *Extensión de red*. Tienes que cambiar AdGuard al modo *Proxy automático*. Para ello, sigue [estas instrucciones](#automatic-proxy).

#### Compatibilidad con Flutter

Este problema se resuelve en Flutter 2.2, lanzado en junio de 2021. Pero para solucionarlo en las aplicaciones desarrolladas en Flutter, es necesario esperar las actualizaciones.

Si usas Flutter junto con AdGuard en el modo "Extensión de red" (o cualquier otra aplicación de tipo "Proxy transparente") en Monterey o Big Sur, tendrás problemas: los proyectos no se abrirán y Flutter se romperá efectivamente. Ya hemos informado a Apple de este error. Mientras tanto, puedes utilizar estas soluciones temporales:

1. Utiliza AdGuard en modo [Proxy automático](#automatic-proxy).

1. Desactiva SIP y cambia AdGuard al modo Kernel Extension como se explica [aquí](#kernel-extension).

#### Aplicaciones VPN con API antigua

A pesar de que AdGuard se muestra como una VPN en la configuración del sistema, no debería causar ningún conflicto al trabajar junto con otras aplicaciones basadas en VPN. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Abre el menú de AdGuard.
1. Selecciona *Preferencias...*.
1. Cambia a la pestaña *Red*.
1. Haz clic en el botón *Aplicaciones...*.
1. Busca la aplicación que deseas excluir y desmarca la casilla de verificación junto a ella.

![Aplicaciones filtradas](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Problemas ya solucionados

Apple ya ha solucionado estos problemas, pero se pueden encontrar en las versiones anteriores de macOS Big Sur.

### Compatibilidad con Little Snitch 5

En este momento, el modo de extensión de red en AdGuard no es compatible con [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Este problema está causado directamente por un error en Big Sur y ya le hemos informado a Apple al respecto. Esto nos hace creer que este problema se resolverá en una de las próximas actualizaciones.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Recomendamos cambiar al modo de filtrado [**Proxy automático**](#automatic-proxy) cuando se ejecuta AdGuard junto con Little Snitch en Big Sur, al menos hasta que Apple solucione el error.

### Compatibilidad con proxies locales

:::note

Ahora AdGuard puede filtrar servidores proxy locales (en su mayoría) sin ningún problema. Si encuentras algún problema en las versiones 11.1+ del sistema operativo, o si estás utilizando Big Sur 11.0, elimina el proxy local de la configuración del sistema y configura un proxy ascendente en AdGuard siguiendo las instrucciones a continuación.

:::

Para configurar un proxy ascendente en AdGuard para Mac en Big Sur:

1. Abre la configuración de AdGuard*Preferencias → Red → Proxy saliente*.
2. Elige HTTP, HTTPS, SOCKS4 o SOCKS5, según tu tipo de proxy.
3. Rellena los campos:
    - `host` es la dirección IP de tu servidor proxy,
    - `puerto` es el número de puerto deseado que utilizará el servidor proxy,
    - `usuario` y `contraseña` son el nombre de usuario y la contraseña correspondientes de tu proxy (si es necesario). Ignora uno o ambos cuando no proceda.

Si tienes algún problema, comunícate con nuestro soporte técnico en support@adguard.com.

#### Ejemplo 1: configuración de un proxy Shadowsocks upstream

Aquí hay un ejemplo de cómo configurar un proxy upstream para [Shadowsocks](https://shadowsocks.org).

En primer lugar, necesitas un servidor que funcione para tu proxy. Lo más probable es que, para configurarlo, utilices un archivo JSON como este (los valores de`servidor` y `contraseña` se eligieron al azar aquí):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Entonces tendrías que instalar el cliente Shadowsocks en tu Mac. ¡Asegúrate de seleccionar "Modo manual" o "Modo automático" en tu configuración! La configuración no funcionará si seleccionas el "Modo global" (o "Modo automático" en versiones de Big Sur anteriores a 11.1).

![Selecciona el Modo manual o Modo automático en la configuración *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Ahora ve a *Menú de AdGuard → Configuración avanzada → avanzada...* y establece el parámetro *Valor* de la configuración `upstream.proxy` a `calcetines5://localhost:1080`. Ten en cuenta que aquí debes utilizar el valor "local_port" del archivo JSON.

Debido a que Shadowsocks usa SOCKS5, también debes establecer el valor de la configuración `upstream.proxy.socks5udp` en la configuración avanzada de AdGuard en `true` para hacer AdGuard enrutar el tráfico UDP al servidor proxy.

#### Ejemplo 2: configuración de un proxy Surge upstream

En Big Sur v11.1+, no se conocen conflictos entre AdGuard y el proxy Surge. Si estás utilizando una versión anterior de Big Sur (anterior a 11.1), verifica que **System Proxy** en la esquina inferior derecha esté deshabilitado. De lo contrario, Surge no funcionará con AdGuard. Por otro lado, el **Modo mejorado** se puede habilitar sin causar conflictos en ninguna versión de Big Sur.

![Configuración de un proxy Surge upstream *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Ahora ve a *Preferencias → Red → Proxy outbound* y completa los campos. Para el tipo de proxy SOCKS5:

- `host`: localhost
- `port`: 6153 Para o tipo de proxy HTTP:
- `host`: localhost
- `puerto`: 6152

## Alternativas al uso de una extensión de red

Es imposible prever todos y cada uno de los posibles problemas que pueden surgir en Big Sur o Monterey, existen innumerables configuraciones diferentes de hardware/software y configuraciones. Si tienes algún problema de compatibilidad, comunícate con nuestro equipo de soporte, pero no dudes en probar una de estas soluciones primero.

### Uso del modo de filtrado "Proxy automático" {#automatic-proxy}

Si tienes problemas en Big Sur o Monterey que no se pueden resolver con ninguno de los métodos anteriores, puedes intentar cambiar AdGuard al modo *Proxy automático*.

1. Abre el menú de AdGuard.
1. Selecciona *Preferencias...*.
1. Cambia a la pestaña *Red*.
1. Haz clic en el botón *Seleccionar modo...*.
1. Selecciona *Proxy automático*.

![Cambia AdGuard al modo proxy automático](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Ahora, AdGuard ha agregado automáticamente un archivo **.pac** a la configuración de red de tu Mac, de modo que el sistema considerará a AdGuard como un proxy e intentará enviar todo el tráfico a través de AdGuard.

:::note

Es posible que algunas aplicaciones ignoren esta configuración del sistema y tu tráfico no se filtrará.

:::

### Habilitación de la extensión del kernel en Big Sur y Monterey {#kernel-extension}

De forma predeterminada, AdGuard utiliza el marco de extensión de red en Big Sur y Monterey, ya que el antiguo marco de extensión del kernel está deshabilitado allí. Esto puede causar algunos problemas de compatibilidad, pero para volver a habilitar la extensión del kernel, primero debes deshabilitar la protección de integridad del sistema (SIP). Para desactivar SIP, sigue estas instrucciones:

1. Haz clic en el *símbolo de Apple* en la barra de menú.
1. Haz clic en *Reiniciar…*
1. Mantén pulsado *Comando-R* para reiniciar en Modo de Recuperación.
1. Haz clic en *Utilidades*.
1. Selecciona *Terminal*.
1. Escribe `csrutil disable`.
1. Pulsa *Return* o *Enter* en tu teclado.
1. Haz clic en el *símbolo de Apple* en la barra de menú.
1. Haz clic en *Reiniciar…*

Ahora que SIP está deshabilitado, así es como habilitas la extensión del kernel:

![Habilita la extensión del kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Abre el menú de AdGuard.
1. Selecciona *Preferencias...*.
1. Cambia a la pestaña *Red*.
1. Haz clic en el botón *Seleccionar modo...*.
1. Selecciona *Extensión del kernel*.
1. Confirma que deseas cambiar a la extensión del kernel.

:::caution

Sin embargo, sólo recomendamos utilizar este método si todo lo demás falla, ya que esto puede provocar problemas inesperados.

:::
