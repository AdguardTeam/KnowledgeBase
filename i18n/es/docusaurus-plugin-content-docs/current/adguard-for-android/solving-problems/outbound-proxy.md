---
title: Cómo configurar un proxy saliente
sidebar_position: 8
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

A continuación se muestra una lista de las aplicaciones más conocidas que se pueden configurar para funcionar como proxies en AdGuard.

:::note

Si tu aplicación no aparece en la lista a continuación, verifica tus configuraciones de proxy en la configuración o comunícate con tu equipo de soporte.

:::

AdGuard te permite enrutar el tráfico de tu dispositivo a través de un servidor proxy. Para acceder a la configuración del proxy, abre **Configuración** y luego proceda a **Filtrado** → **Red** → **Proxy**.

## Ejemplos de configuración de proxy

En este artículo, damos ejemplos de cómo configurar algunos de los proxies más populares para que funcionen con AdGuard.

### Cómo utilizar AdGuard con Tor

1. Abre AdGuard y ve a **Configuración** → **Filtrado** → **Red** → **Proxy**. Descarga “Orbot: Proxy con Tor” directamente desde [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) o tocando **Integrar con Tor** y luego **Instalar**.

1. Abre Orbot y presiona el botón **Iniciar** en la pantalla principal de la aplicación.

1. Regrese a la pantalla **Proxy** de AdGuard.

1. Toca el botón **Integrar con Tor**.

1. Todos los campos obligatorios se rellenarán previamente:

    | Campo            | Valor               |
    | ---------------- | ------------------- |
    | Tipo de proxy    | *SOCKS4* o *SOCKS5* |
    | Host del proxy   | *127.0.0.1*         |
    | Puerto del proxy | *9050*              |

    O puedes tocar **Servidor proxy** → **Agregar servidor proxy**, ingresar estos valores manualmente y configurar Orbot como el proxy predeterminado.

1. Habilita el conmutador Proxy principal y la protección AdGuard para enrutar el tráfico de tu dispositivo a través del proxy.

    Ahora AdGuard enrutará todo el tráfico a través de Orbot. Si desactivas Orbot, la conexión a Internet no estará disponible hasta que desactives la configuración del proxy saliente en AdGuard.

### Cómo utilizar AdGuard con PIA (Private Internet Access)

*Aquí asumimos que ya eres un cliente de PIA VPN y lo tienes instalado en tu dispositivo.*

1. Abre AdGuard y ve a **Configuración** → **Filtrado** → **Red** → **Proxy** → **Servidor proxy**.

1. Pulsa el botón **Agregar servidor proxy** e ingresa los siguientes datos:

    | Campo            | Valor                                |
    | ---------------- | ------------------------------------ |
    | Tipo de proxy    | *SOCKS5*                             |
    | Host del proxy   | *proxy-nl.privateinternetaccess.com* |
    | Puerto del proxy | *1080*                               |

1. También debes completar los campos **Nombre de usuario/Contraseña**. Para ello, inicia sesión en el [Panel de Control del Cliente](https://www.privateinternetaccess.com/pages/client-sign-in) en el sitio web de PIA. Toca el botón **Generar contraseña** debajo de la sección **Generar contraseña PPTP/L2TP/SOCKS**. Se mostrará un nombre de usuario que comienza con “x” y una contraseña aleatoria. Úsalos para completar los campos **Nombre de usuario de proxy** y **Contraseña de proxy** en AdGuard.

1. Toca **Guardar y seleccionar**.

1. Habilita el conmutador Proxy principal y la protección AdGuard para enrutar el tráfico de tu dispositivo a través del proxy.

### Cómo utilizar AdGuard con TorGuard

*Aquí asumimos que ya eres un cliente de TorGuard y lo tienes instalado en tu dispositivo.*

1. Abre AdGuard y ve a **Configuración** → **Filtrado** → **Red** → **Proxy** → **Servidor proxy**.

1. Pulsa el botón **Agregar servidor proxy** e ingresa los siguientes datos:

    | Campo            | Valor                                      |
    | ---------------- | ------------------------------------------ |
    | Tipo de proxy    | *SOCKS5*                                   |
    | Host del proxy   | *proxy.torguard.org* o *proxy.torguard.io* |
    | Puerto del proxy | *1080* o *1085* o *1090*                   |

1. Para los campos **Nombre de usuario** y **Contraseña**, ingresa el nombre de usuario y la contraseña de proxy que hayas elegido al registrarte en TorGuard.

1. Toca **Guardar y seleccionar**.

1. Habilita el conmutador Proxy principal y la protección AdGuard para enrutar el tráfico de tu dispositivo a través del proxy.

### Cómo utilizar AdGuard con NordVPN

1. Inicia sesión en tu cuenta de NordVPN.

1. Ve a **Servicios** → **NordVPN** → **Configuración manual** y configura tus credenciales de servicio manualmente.

1. Recibirás un código de verificación en la dirección de correo electrónico que utilices para NordVPN. Úsalo en tu cuenta de NordVPN según lo solicitado, luego toca *Aplicar* y *Aceptar* para guardar los cambios.

![Configuración manual](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Abre la aplicación AdGuard, ve a **Configuración** → **Filtrado** → **Red** → **Proxy** → **Servidor proxy** → **Agregar servidor proxy**.

1. Introduce los siguientes datos:

    | Campo            | Valor                                                                                                                                |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
    | Tipo de proxy    | *SOCKS5*                                                                                                                             |
    | Host del proxy   | Cualquier servidor de [esta lista](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Puerto del proxy | *1080*                                                                                                                               |

1. Ingresa tus credenciales de NordVPN en los campos **Nombre de usuario** y **Contraseña**.

1. Toca **Guardar y seleccionar**.

1. Habilita el conmutador Proxy principal y la protección AdGuard para enrutar el tráfico de tu dispositivo a través del proxy.

### Cómo utilizar AdGuard con Shadowsocks

*Aquí asumimos que ya has configurado un servidor Shadowsocks y un cliente en tu dispositivo.*

:::note

Debes eliminar la aplicación Shadowsocks del filtrado antes de configurar el proceso (**Administración de aplicaciones** →**Shadowsocks** → **Enrutar tráfico a través de AdGuard**) para evitar bucles y caídas infinitas.

:::

1. Abre AdGuard y ve a **Configuración** → **Filtrado** → **Red** → **Proxy** → **Servidor proxy**.

1. Toca **Agregar servidor proxy** y completa los campos:

    | Campo            | Valor       |
    | ---------------- | ----------- |
    | Tipo de proxy    | *SOCKS5*    |
    | Host del proxy   | *127.0.0.1* |
    | Puerto del proxy | *1080*      |

1. Toca **Guardar y seleccionar**.

1. Habilita el conmutador Proxy principal y la protección AdGuard para enrutar el tráfico de tu dispositivo a través del proxy.

### Cómo utilizar AdGuard con Clash

*Aquí asumimos que ya eres un cliente de Clash y lo tienes instalado en tu dispositivo.*

1. Abre Clash y ve a **Configuración** → **Red** → **Tráfico del sistema de ruta** y actívalo. Esto establecerá Clash en modo proxy.

1. Abre AdGuard y ve a **Administración de aplicaciones**. Elige **Clash para Android** y desactiva **Enrutar tráfico a través de AdGuard**. Esto eliminará los loopings de tráfico.

1. Luego ve a **Configuración** → **Filtrado** → **Red** → **Proxy** → **Servidor proxy**.

1. Toca **Agregar servidor proxy** y completa los campos:

    | Campo            | Valor       |
    | ---------------- | ----------- |
    | Tipo de proxy    | *SOCKS5*    |
    | Host del proxy   | *127.0.0.1* |
    | Puerto del proxy | *7891*      |

## Limitaciones

Sin embargo, al menos un factor puede impedir que cierto tráfico se enrute a través del proxy saliente, incluso después de configurar los ajustes del proxy AdGuard. Esto sería si la aplicación en sí no está configurada para enviar tu tráfico a través de AdGuard. Para ello, debes ir a **Gestión de aplicaciones**, elegir la aplicación y activar **Enrutar tráfico a través de AdGuard**.
