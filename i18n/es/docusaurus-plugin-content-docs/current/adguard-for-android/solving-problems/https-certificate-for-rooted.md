---
title: Trasladar el certificado de CA al almacenamiento del sistema en dispositivos rooteados
sidebar_position: 14
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Android puede [filtrar el tráfico HTTPS cifrado](/general/https-filtering/what-is-https-filtering), bloqueando así la mayoría de los anuncios y rastreadores en los sitios web. En dispositivos rooteados, AdGuard también te permite filtrar el tráfico HTTPS en las aplicaciones. El filtrado HTTPS requiere agregar el certificado CA de AdGuard a la lista de certificados confiables.

En dispositivos no rooteados, los certificados CA se pueden instalar en el **almacenamineto de usuario**. Solo un subconjunto limitado de aplicaciones (principalmente navegadores) confían en los certificados CA instalados en la tienda del usuario, lo que significa que el filtrado HTTPS funcionará solo para dichas aplicaciones.

En dispositivos rooteados, puedes instalar un certificado en el **almacenamiento del sistema**. Esto permitirá que AdGuard filtre el tráfico HTTPS en otras aplicaciones también.

Aquí te explicamos cómo hacerlo.

## Cómo instalar el certificado de AdGuard en el sistema

1. Abra *AdGuard → Configuración → Filtrado → Red → Filtrado HTTPS → Certificados de seguridad*.

1. Si aún no tienes ningún certificado, **instala AdGuard Personal CA en el almacenamiento de usuarios**. Esto permitirá que AdGuard filtre el tráfico HTTPS en los navegadores.

1. **Instala el CA intermedio de AdGuard en el almacenamiento de usuarios**. Lo necesitarás para ejecutar el módulo Magisk adguardcert que te permite mover certificados al almacenamiento del sistema.

    ![Instala el certificado *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Instale la última versión del [ módulo Magisk **adguardcert**](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Abre *Magisk → Módulos → Instalar desde el almacenamiento* y selecciona el archivo **adguardcert** descargado. El certificado CA personal de AdGuard se copiará al almacén del sistema.

    ![Abre los módulos Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Instala desde el almacenamiento *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Selecciona adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Toca **Reiniciar**.

    ![Reinicia el dispositivo *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Después de la transferencia, el **CA personal de AdGuard ** en el almacenamiento del sistema te permitirá filtrar el tráfico HTTPS en las aplicaciones, mientras que el **CA Intermedio de AdGuard** en la tienda del usuario te permitirá filtrar el tráfico HTTPS en los navegadores basados en Chromium (entiende por qué a continuación).

## Problemas conocidos con Chrome y los navegadores basados en Chromium

Chrome y otros navegadores basados en Chromium requieren registros de Transparencia de certificados (CT) para los certificados ubicados en la tienda del sistema. Los registros CT no contienen información sobre los certificados emitidos por aplicaciones de filtrado HTTPS. Por lo tanto, AdGuard requiere un certificado adicional en el almacenamiento de usuarios para filtrar el tráfico HTTPS en estos navegadores.

### Navegador Bromite

Además del problema mencionado anteriormente, Bromite no confía en los certificados del almacenamiento de usuarios de forma predeterminada. Para filtrar el tráfico HTTPS allí, abre Bromite, ve a `chrome://flags`y configura *Permitir certificados de usuario* en *Habilitado*. **Esto se aplica tanto a dispositivos rooteados como a no rooteados**.
