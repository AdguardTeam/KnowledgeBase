---
title: Instalación de certificados en dispositivos con Android 11+
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder filtrar [el tráfico HTTPS](/general/https-filtering/what-is-https-filtering.md) (lo cual es extremadamente importante ya que la mayoría de los anuncios usan HTTPS), AdGuard necesita instalar su certificado en el almacenamiento de usuario de tu dispositivo. En versiones anteriores del sistema operativo Android, esto se hacía automáticamente, pero en Android 11 y versiones posteriores los usuarios deben instalarlo manualmente.

![Certificado *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Sigue estos pasos para instalar el certificado AdGuard:

1. Cuando veas la notificación *El filtrado HTTPS está desactivado*, toca *Habilitar*.

1. A continuación, aparecerán tres pantallas explicativas:
    - ¿Por qué filtrar el tráfico HTTPS?
    - La seguridad de este proceso de filtrado
    - La necesidad del certificado AdGuard

    Pulsa consecutivamente *Siguiente* → *Siguiente* → *Guardar certificado*.

1. Toca *Guardar* en la parte inferior de la carpeta *Descargar* abierta.

1. Después de guardar, toca *Abrir Configuración*.

1. Toca *Más configuraciones de seguridad* → *Cifrado & credenciales* → *Instalar un certificado* → *Certificado CA*.

1. Es posible que veas una advertencia. Si es así, toca *Instalar de todos modos* e ingresa tu PIN si es necesario.

1. Selecciona el archivo de certificado AdGuard. Su nombre debería verse así: *adguard_1342_020322.crt*.

¡Ya está todo listo! Una vez que el certificado se haya instalado correctamente, habrás habilitado el filtrado HTTPS.

Ten en cuenta que los pasos proporcionados se basan en el teléfono inteligente Google Pixel 7. Si está utilizando un dispositivo Android diferente, los nombres o las opciones exactas del menú pueden variar. Para facilitar la navegación, busca un certificado introduciendo "certificado" o "credenciales" en la barra de búsqueda de la configuración.

Si tienes problemas durante la instalación manual del certificado (por ejemplo, ha instalado el certificado, pero la aplicación sigue ignorándolo), puedes seguir una de las soluciones que se indican a continuación.

1. Reinicia AdGuard.
2. Intenta instalar el certificado correcto (AdGuard Personal CA) una vez más.

Si aún tienes algún problema y no puedes instalar el certificado, comunícate con nuestro equipo de soporte en support@adguard.com.
