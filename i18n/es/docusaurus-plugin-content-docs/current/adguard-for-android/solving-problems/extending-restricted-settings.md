---
title: Problemas causados por la ampliación de configuraciones restringidas
sidebar_position: 17
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

En un esfuerzo por mejorar la privacidad del usuario, Google ha ampliado la configuración de restricciones en Android 15. Más configuraciones, como _Acceso al uso de la aplicación_, ahora requieren un permiso adicional para ser habilitadas. Dado que las funciones _[Firewall](/adguard-for-android/features/protection/firewall)_ y _[Detectar Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ requieren que la configuración _Acceso al uso de aplicaciones_ esté habilitada para que funcionen correctamente, es posible que hayas experimentado problemas al usarlas. Para resolver estos problemas, sigue los pasos a continuación:

:::note

AdGuard tiene una estricta política de no registro, lo que significa que no recopilamos tus datos ni los enviamos a terceros. Sólo pedimos acceso a los datos sin los cuales la aplicación no puede funcionar.

:::

## Instrucciones básicas

1. En tu dispositivo Android, abre la aplicación **Configuración**.
2. Toca **Aplicaciones**.
3. Toca **AdGuard**

![AdGuard en Aplicaciones \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted1.png)

Si no lo encuentras, primero toca **Ver todas las aplicaciones** o **Información de la aplicación**.

1. Toca **Más** (⁝) → _Permitir configuraciones restringidas_.

![Permitir configuraciones restringidas \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted2.png)

Sigue las instrucciones en pantalla.

¡Todo listo! Ahora las funciones _Firewall_ y _Detectar Samsung Pay_ funcionarán correctamente.

![Configuraciones restringidas permitidas para AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted3.png)

## Para usuarios de One Ui 7.0

En los dispositivos Samsung con One Ui 7.0, la configuración de permisos de la aplicación se encuentra en una ruta diferente. Sigue estos pasos para configurar el acceso al uso de aplicaciones:

1. Abre _Ajustes del sistema_ → _Aplicaciones_

![Ajustes de aplicaciones \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/apps.jpg)

1. Toca el icono de menú (⋮) en la esquina superior derecha y, a continuación, selecciona _Acceso especial_

![Acceso especial \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/three-dots.jpg)

1. Selecciona _Acceso a datos de uso_

![Menú de acceso especial \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/special.jpg)

1. Busca y habilita _AdGuard_

![Acceso a datos de uso \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/usage_data.jpg)

¡Todo listo!
