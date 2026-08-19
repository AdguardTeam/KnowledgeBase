---
title: Configuración avanzada
sidebar_position: 4
---

:::info

Este artículo describe AdGuard para Windows v8.0, un bloqueador de anuncios integral que protege su dispositivo a nivel del sistema. Esta es una versión beta que aún está en desarrollo. Para probarlo, descarga la [versión beta de AdGuard para Windows](https://agrd.io/windows_beta).

:::

La sección de _configuración avanzada_ contiene opciones que van más allá de lo que la mayoría de los usuarios suelen necesitar. AdGuard para Windows funciona perfectamente desde el primer momento, pero estos ajustes pueden ser útiles en casos especiales o para la resolución de problemas.

:::caution

Cambiar configuraciones avanzadas sin comprenderlas puede causar problemas de rendimiento, interrumpir tu conexión a Internet o afectar tu seguridad y privacidad. Modifícalos solo si sabes lo que estás haciendo o si así lo indica nuestro equipo de soporte.

:::

## Excluye aplicaciones del filtrado ingresando la ruta completa

Si quieres que AdGuard omita el filtrado de una aplicación específica, introduce aquí la ruta completa de su archivo. Puedes agregar varias aplicaciones separando sus rutas con punto y coma.

## Habilitar notificaciones en ventanas emergentes de AdGuard

Habilita esta función para ver las notificaciones en ventanas emergentes de AdGuard. Ellas no aparecen con demasiada frecuencia y solo contienen información importante. También puedes volver a abrir la notificación más reciente desde el menú de la bandeja.

## Interceptar automáticamente las URL de suscripción a los filtros

Cuando esté habilitado, AdGuard detectará automáticamente enlaces de suscripción de filtros (como `abp:subscribe`) y abrirá una ventana para ayudar a añadirlos a tus filtros.

## Usar modo de redireccionamiento del driver

Con esta opción activada, AdGuard redirige todo tu tráfico a un servidor proxy local para filtrar.

Si está desactivado, AdGuard filtra el tráfico directamente sin redirigirlo. En este modo, Windows ve AdGuard como la única aplicación que se conecta a Internet, ya que todas las demás aplicaciones pasan por él. Esto puede mejorar ligeramente el rendimiento, pero puede reducir la efectividad del cortafuegos del sistema.

## Abrir AdGuard al iniciar el sistema

Activa esta opción para que la ventana de AdGuard se abra automáticamente cuando tu PC se inicie.

## Habilitar filtrado al iniciar el sistema

Desde la versión 7.12, AdGuard no inicia el filtrado de tráfico automáticamente después de iniciar tu PC — a menos que la opción _Iniciar AdGuard al iniciar el sistema_ esté habilitada. En cambio, funciona en un modo pasivo “inactivo”.

Al activar esto, AdGuard podrá filtrar el tráfico inmediatamente, incluso si la aplicación aún no se ha abierto.

## Filtrar localhost

Activa esto para permitir que AdGuard filtre el tráfico de loopback (localhost), que algunas aplicaciones utilizan para comunicarse dentro del sistema. Si la VPN de AdGuard está instalada, esta opción siempre está activa porque la VPN requiere que funcione correctamente.

## Capturar HAR

Esto es solo para depuración. Cuando está habilitado, AdGuard creará un archivo HAR (formato HTTP Archive 1.2) con información detallada sobre todas las solicitudes filtradas. Puedes abrirlo en apps como Fiddler.

Ten en cuenta: puede ralentizar tu navegación.

## Mostrar QUIC en el registro de filtrado

Cuando está habilitado, AdGuard incluirá el tráfico del protocolo QUIC en el registro de filtrado, pero solo para solicitudes bloqueadas.

## Bloquear Java

Algunos sitios web aún utilizan complementos de Java, que dependen de tecnología obsoleta e insegura. Puedes desactivar estos complementos por seguridad.

Usar la opción _Bloquear Java_ no afecta a JavaScript — permanecerá habilitada.

## Modo de bloqueo para reglas DNS

Elige cómo responde AdGuard cuando un dominio es bloqueado por una regla DNS basada en la sintaxis [hosts-style](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Devuelve un error `REFUSED`
- Devuelve un error 'NXDOMAIN'
- Devuelve una dirección IP personalizada

### Dirección IPv4 personalizada

Si se selecciona _Dirección IP personalizada_ en _Modo bloqueador para reglas DNS_, esta dirección IP se devolverá en respuesta a solicitudes A bloqueadas. Si no se especifica ninguno, AdGuard responderá con el error por defecto de REFUSED.

### Dirección IPv6 personalizada

Si se selecciona _Dirección IP personalizada_ en _Modo bloqueante para reglas DNS_, esta dirección IP se devolverá en respuesta a solicitudes AAAA bloqueadas. Si no se especifica ninguno, AdGuard responderá con el error por defecto de REFUSED.

## Servidores fallback

Configura aquí los servidores DNS de respaldo. AdGuard los usará si el servidor DNS principal no responde dentro del tiempo de espera que hayas marcado. Puedes:

- Utilizar los servidores DNS predeterminados de tu sistema
- Añadir servidores de respaldo personalizados
- O elegir no usar servidores de respaldo en absoluto

## Tiempo de espera del servidor DNS

Especifica cuánto tiempo (en milisegundos) debe esperar AdGuard a una respuesta DNS antes de cambiar a un servidor de respaldo. Si se deja vacío o inválido, el valor por defecto es 5000 ms (5 segundos).

## Direcciones de bootstrap personalizadas

Un bootstrap es un servidor DNS intermedio utilizado para obtener la dirección IP del servidor DNS seguro que elegiste antes en la protección DNS. Este tipo de "punto intermedio" es necesario cuando se usan protocolos que denotan la dirección del servidor con letras (como DNS-over-TLS, por ejemplo). En este caso, el bootstrap actúa como traductor, transformando las letras en números que tu sistema puede entender.

Pero si es necesario, puedes especificar diferentes direcciones IP aquí: se probarán en el orden de arriba a abajo. Si no funciona o no se introduce nada, AdGuard volverá a los valores predeterminados del sistema.

## Exclusiones del DNS

Los dominios listados aquí evitan los servidores DNS de AdGuard. Sus solicitudes pasan por el resolver predeterminado del sistema, y AdGuard no les aplica ninguna regla de bloqueo.
