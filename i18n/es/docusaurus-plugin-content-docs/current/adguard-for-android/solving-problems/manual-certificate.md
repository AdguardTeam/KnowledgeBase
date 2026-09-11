---
title: Instalación de certificados en dispositivos con Android 11+
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder filtrar [el tráfico HTTPS](/general/https-filtering/what-is-https-filtering.md) (lo cual es extremadamente importante ya que la mayoría de los anuncios usan HTTPS), AdGuard necesita instalar su certificado en el almacenamiento de usuario de tu dispositivo. En versiones anteriores del sistema operativo Android, esto se hacía automáticamente, pero en Android 11 y versiones posteriores los usuarios deben instalarlo manualmente.

![Certificado *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Sigue estos pasos para instalar el certificado AdGuard:

1. Abre la aplicación. En la pantalla *Inicio*, toca *El filtrado HTTPS está desactivado*.

1. A continuación, aparecerán tres pantallas explicativas:
    - ¿Por qué filtrar el tráfico HTTPS?
    - La seguridad de este proceso de filtrado
    - Certificado de AdGuard

1. Toca *Guardar* en la parte inferior de la carpeta *Descargar* abierta.

1. Después de guardar, toca *Abrir Configuración*.

1. Después de guardar, copia el texto del campo *Certificado de CA* y toca *Abrir Ajustes*.

1. Es posible que veas una advertencia. Si es así, toca *Instalar de todos modos* e ingresa tu PIN si es necesario.

1. Selecciona el archivo de certificado AdGuard. Su nombre debería verse así: *adguard_1342_020322.crt*.

1. Selecciona el archivo de certificado de AdGuard. Su nombre debería ser similar a *adguard_1342_020322.crt*.

¡Ya está todo listo! Una vez que el certificado se haya instalado correctamente, habrás habilitado el filtrado HTTPS.

Si tienes problemas durante la instalación manual del certificado (por ejemplo, ha instalado el certificado, pero la aplicación sigue ignorándolo), puedes seguir una de las soluciones que se indican a continuación.

1. Reinicia AdGuard.
1. Intenta instalar el certificado correcto (AdGuard Personal CA) una vez más.

## Advertencias de seguridad

En versiones anteriores de Android, el panel de ajustes rápidos mostraba el mensaje «Es posible que se supervise la red». Al tocarlo, se abrirá una ventana con información detallada.

A partir de Android 15, además de «Es posible que la red esté supervisada», los usuarios verán una notificación de advertencia después de instalar un certificado y de reiniciar el dispositivo: «Autoridades de certificación instaladas por un tercero desconocido». Esto significa que el sistema ha detectado certificados de terceros en el almacén de certificados del usuario. Al tocar la notificación, se abre una lista de certificados en el almacén de certificados del usuario.

A pesar de estas advertencias, tu tráfico sigue siendo seguro. Tu conexión con los servidores remotos permanece cifrada. Lo que hace AdGuard es simplemente verificar el certificado del servidor antes de decidir si filtra la conexión, de forma similar a como funciona un navegador.

[Obtén más información sobre el filtrado HTTPS y cómo funciona el certificado](/general/https-filtering/what-is-https-filtering.md).

Si el problema persiste y no puedes instalar el certificado, ponte en contacto con nuestro equipo de soporte en [support@adguard.com](mailto:support@adguard.com).
