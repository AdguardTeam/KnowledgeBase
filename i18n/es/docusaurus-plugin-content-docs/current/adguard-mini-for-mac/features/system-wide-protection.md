---
title: Protección de todo el sistema
sidebar_position: 9
---

A partir de la versión 3.0, AdGuard Mini para Mac incorpora la _Protección de todo el sistema_, una función que bloquea anuncios y rastreadores no solo en Safari, sino también en otras aplicaciones de tu Mac.

La función está disponible para los usuarios con una licencia de AdGuard. Puedes [comprar la licencia ahora mismo](https://adguard.com/license.html) o hacer clic en _Probar gratis_ en _Protección avanzada_ para iniciar una prueba gratuita de 14 días.

:::caution

La _Protección de todo el sistema_ es una función experimental. Es posible que no funcione para todos los usuarios debido a un [error de Apple aún sin resolver](https://developer.apple.com/forums/thread/848364). Cuando la función sea estable para todos los usuarios, la convertiremos en una parte fundamental de AdGuard Mini.

:::

La función no funciona correctamente en algunas versiones de macOS, incluidas **26.7.2** y **27.2**. Si usas **macOS 26.0 o 27.0**, puedes probar la _Protección de todo el sistema_ como de costumbre. Ten en cuenta que, si la _Protección de todo el sistema_ funciona bien en macOS 27.0, lo más probable es que deje de funcionar tras actualizar a macOS 27.2. Tenlo en cuenta antes de actualizar el sistema.

En la versión estable, la _Protección de todo el sistema_ está oculta de forma predeterminada. Para mostrarla, ve a _Configuración_ → _Varios_ y activa _Mostrar Protección de todo el sistema (Experimental)_. La versión beta siempre muestra esta función.

![Opción experimental](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/swp-experimental-toggle.png)

## Cómo funciona

La _Protección de todo el sistema_ se basa en el [**filtro de URL**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url) de Apple, una API de filtrado del sistema que se utiliza para filtrar el tráfico de todo el sistema. Así es como funciona.

Primero, macOS comprueba una URL mediante un filtro de Bloom: un prefiltro almacenado en tu Mac que se actualiza en segundo plano. La mayoría de las direcciones se permiten localmente, sin necesidad de realizar una solicitud de red para la propia comprobación.

Si el prefiltro encuentra una posible coincidencia, macOS solicita un veredicto al servidor de AdGuard mediante la recuperación privada de información (PIR). Este método permite que tu Mac solicite datos al servidor sin revelar la dirección exacta que ha consultado. La solicitud no se puede vincular a tu cuenta ni a tu dispositivo. Si el servidor no responde, la página se carga con normalidad.

Puedes leer [un análisis detallado del enfoque de Apple para el filtrado de todo el sistema](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html) en nuestro blog.

## Cómo activar la Protección de todo el sistema

Encontrarás la _Protección de todo el sistema_ en _Protección avanzada_ dentro de la aplicación AdGuard Mini. Para habilitarla, activa el interruptor.

![Protección de todo el sistema](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection.png)

Cuando actives la _Protección de todo el sistema_ por primera vez, recibirás una solicitud para instalar el filtro de URL en tu ordenador. Haz clic en _Instalar_. A continuación, aparecerá un mensaje del sistema solicitando añadir configuraciones de filtro. Este es el comportamiento habitual de macOS. AdGuard no ve ni almacena ninguno de estos datos.

![La Protección de todo el sistema requiere un filtro de URL](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

Después de instalar el filtro de URL, la _Protección de todo el sistema_ permanecerá activada de forma predeterminada. Si quieres desactivarla, desactiva el interruptor de _Protección de todo el sistema_ en _Protección avanzada_.

También puedes hacer clic en el menú contextual de la esquina superior derecha (⋮) y seleccionar _Eliminar filtro de URL_. Si quieres restablecer el filtro sin eliminarlo para solucionar problemas de conexión, elige _Restablecer caché_.

También puedes desactivar el filtro de URL en _Ajustes del Sistema_ → _Red_ → _VPN y filtros_ → _Filtros y proxies_ de tu Mac. Cambia _Activado_ por _Desactivado_ en el _menú Estado_. AdGuard Mini desactivará la _Protección de todo el sistema_ automáticamente.

## Niveles de protección

Puedes elegir entre tres niveles de protección. El nivel _Esencial_ está seleccionado de forma predeterminada.

- _Esencial_ — bloquea anuncios y rastreadores
- _Seguro_ — bloquea anuncios, rastreadores, phishing y malware
- _Familiar_ — bloquea anuncios, rastreadores, phishing, malware y contenido para adultos

![Tres niveles de protección](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection.png)

## Solución de problemas

### La Protección de todo el sistema no funciona en macOS 27.2

Esto se debe a un [error de Apple aún sin resolver](https://developer.apple.com/forums/thread/848364). Por este motivo, la _Protección de todo el sistema_ es actualmente una función experimental. Funciona en macOS 26 y 27.0, pero es posible que no funcione correctamente en macOS 27.2 beta. Si usas una versión anterior de macOS, te recomendamos seguir usándola hasta que Apple corrija el error.

### La Protección de todo el sistema no funciona con todas las aplicaciones o navegadores

La cobertura depende de cómo gestione cada aplicación las solicitudes de red, por lo que es posible que algunas aplicaciones no se filtren. Esta es una limitación de Apple.

Los navegadores basados en Chromium, como Chrome, Edge, Opera y Brave, utilizan su propio código de red en lugar de los frameworks de Apple, por lo que el filtro de URL no puede comprobar sus solicitudes.

### La Protección de todo el sistema no se activa

- **Tu Mac utiliza una versión antigua de macOS.** El filtro de URL de Apple requiere macOS 26 Tahoe o posterior. En las versiones anteriores, la opción está desactivada y la aplicación te pide que _Actualices a macOS Tahoe 26 o posterior_.
- **Tu cuenta no es compatible.** La _Protección de todo el sistema_ solo funciona con la primera cuenta de usuario creada en un Mac. Si tu cuenta se añadió después, la opción está desactivada y muestra _No compatible con esta cuenta del Mac_. Consulta [¿Puedo cambiar el ID de usuario de mi cuenta del Mac?](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id) más abajo.
- **La opción está oculta.** En la versión estable, la _Protección de todo el sistema_ está oculta de forma predeterminada. Ve a _Configuración_ → _Varios_ y activa _Mostrar Protección de todo el sistema (Experimental)_.
- **Estás usando la versión gratuita.** Para usar la _Protección de todo el sistema_, [compra una licencia de AdGuard](https://adguard.com/license.html) o haz clic en _Probar gratis_ en _Protección avanzada_ para iniciar una prueba gratuita de 14 días.

### ¿Puedo cambiar el ID de usuario de mi cuenta del Mac?

Sí. La _Protección de todo el sistema_ solo funciona con la primera cuenta de usuario creada en un Mac, cuyo ID de usuario (UID) es 501. Si tu Mac tiene más de una cuenta o si has migrado tu cuenta desde un Mac antiguo, es posible que tu UID sea diferente. Sigue los pasos que se indican a continuación para comprobar tu UID y, si es necesario, liberar el UID 501 y asignarlo a tu cuenta.

:::warning

Esta es una operación avanzada y arriesgada. Hazlo solo si no tienes otra opción. Liberar el UID 501 implica eliminar una cuenta existente y crear una nueva desde Terminal. Si algo sale mal, esto puede provocar una pérdida permanente de datos. Haz una copia de seguridad de todos los datos de tu Mac antes de continuar.

:::

1. **Comprueba tu UID actual.** Abre Terminal, escribe `id -u` y pulsa Retorno. Si el resultado es 501, tu cuenta ya tiene el UID correcto. No necesitas hacer nada más.

2. **Averigua qué cuenta tiene el UID 501.** Si tu UID no es 501, ejecuta este comando:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   Esto muestra el nombre de usuario, el UID y el nombre completo de esa cuenta. Asegúrate de que no necesitas ningún archivo de esa cuenta o haz una copia de seguridad de sus archivos antes de continuar.

3. **Elimina la cuenta con el UID 501.** Con la sesión iniciada en tu propia cuenta de administrador, abre _Ajustes del Sistema_ → _Usuarios y grupos_, selecciona la cuenta del paso 2 y elimínala. Cuando macOS te pregunte qué hacer con la carpeta de inicio de la cuenta, elige _Guardar la carpeta de inicio en una imagen de disco_: así se conservarán los archivos de la cuenta por si los necesitas más adelante.

4. **Crea una nueva cuenta con el UID 501.** Ejecuta el siguiente comando, sustituyendo `username` y `Name Surname` por los datos que quieras:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` hace que Terminal te solicite la contraseña de forma interactiva; `-admin` otorga permisos de administrador a la nueva cuenta.

5. **Verifica el cambio.** Inicia sesión en la nueva cuenta y comprueba de nuevo el UID: abre Terminal, escribe `id -u` y pulsa Retorno. El resultado ahora debería ser 501.
