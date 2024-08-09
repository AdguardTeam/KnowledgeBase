---
title: Problemas relacionados con los certificados
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder filtrar el tráfico HTTPS y bloquear anuncios y rastreadores de manera eficiente, AdGuard genera un certificado root especial (y único) y lo instala en el almacenamiento del sistema. Puedes obtener más información sobre por qué se requiere un certificado leyendo [este artículo](/general/https-filtering/what-is-https-filtering).

Normalmente, los navegadores confían en el certificado AdGuard una vez que se agrega al almacenamiento de certificados del sistema durante el proceso de instalación. Pero, en algunos casos, esto no es suficiente y es posible que te encuentres con advertencias o errores. Esto sucede con mayor frecuencia en navegadores basados en Firefox como Mozilla Firefox, PaleMoon, Waterfox, etc., o en Yandex.Browser.

## Error *Riesgo potencial de seguridad* en navegadores basados en Firefox

![Error de riesgo de seguridad](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Las versiones antiguas de Firefox, así como los navegadores basados en ellas, no confían en los certificados del almacenamiento del sistema, sino sólo en los del almacenamiento local. Desde la v68, Firefox confía en los certificados del sistema, pero aún puedes enfrentar el error "La conexión no es de confianza". Si sucede algo como esto, primero intenta hacer clic en el botón *Reinstalar certificado*; lo encontrarás en la pestaña *Red*.

![Reinstalar certificado](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Si eso no ayuda, sigue las instrucciones para agregar manualmente el certificado AdGuard al almacenamiento de Firefox.

> Esta instrucción es para el navegador Firefox. Los nombres de los botones y elementos del menú pueden diferir en otros navegadores basados en Firefox.

1. Ejecutar AdGuard.

1. Ve a [http://local.adguard.org/cert](http://local.adguard.org/cert) y haz clic en el botón *Descargar*. El navegador debería comenzar a descargar el archivo **cert.cer**.

    :::note

    También puedes abrir la página de descarga haciendo clic en el enlace a través de la aplicación AdGuard en *Configuración → Red → Filtrado HTTPS*.


:::

    ![Configuración del certificado](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Abre tu navegador y luego abre *Configuración*.

1. Ve a la pestaña *Privacidad & Seguridad*.

1. Desplázate hacia abajo hasta *Certificados* y haz clic en el botón *Ver certificados*.

    ![Ver ventana de certificados](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Seleccione la pestaña *Autoridades*.

1. Haz clic en *Importar...*.

    ![Configuración del certificado: importación](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Explora el archivo **cert.cer** descargado y haz clic en *Abrir*.

1. Marca la casilla *Confiar en esta CA para identificar sitios web* y luego haz clic en *OK*.

    ![Configuración del certificado: casilla de verificación](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Has instalado correctamente el certificado de AdGuard. Reinicia el navegador y el error debe desaparecer.

## Advertencia de certificado de Yandex.Browser

Si eres usuario de AdGuard para Windows y Yandex.Browser, es posible que hayas encontrado esta advertencia:

![Advertencia de certificado de Yandex](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Por qué sucede esto

Tanto AdGuard como Yandex se toman muy en serio la seguridad de los usuarios en Internet. La política actual de Yandex es advertir a sus usuarios sobre cualquier certificado que no sea reconocido por el navegador. Esto no carece de fundamento, porque a veces las aplicaciones maliciosas pueden inyectar sus propios certificados y utilizarlos para dañar el sistema y robar datos privados.

Sin embargo, AdGuard también añade su certificado a los de confianza. Esto lleva al mensaje de advertencia que has encontrado.

### Como resolver el problema

La forma más sencilla es hacer clic en el botón **Ir al sitio**. Esto le indicará a Yandex.Browser que recuerde el certificado AdGuard como confiable, al menos por un tiempo. Normalmente, ya no tendrás que ver este mensaje, pero no está fuera de la posibilidad que aparezca ocasionalmente, por cualquier motivo. En tales casos, simplemente presiona el mismo botón nuevamente *(¡asegúrate de que sea el certificado de AdGuard!)*.

Desactiva el filtrado HTTPS en AdGuard también evitará que Yandex.Browser vuelva a mostrar este mensaje, pero tiene un precio muy alto: se mostrarán todos los anuncios que se carguen por HTTPS (incluidos **los propios anuncios de Yandex**), en sitios web como YouTube, Facebook, Instagram y muchos más. Le recomendamos encarecidamente que no lo hagas si deseas mantener la alta calidad del bloqueo de anuncios.
