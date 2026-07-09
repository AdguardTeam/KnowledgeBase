---
title: Estadísticas
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder al módulo _Estadísticas_ tocando la pestaña _Estadísticas_ (cuarto icono desde la izquierda en la parte inferior de la pantalla). Esta función te brinda una imagen completa de lo que sucede con el tráfico en tu dispositivo: cuántas solicitudes se envían y a qué empresas, cuántos datos se cargan y descargan, qué solicitudes se bloquean y más. Puedes optar por mostrar las estadísticas para el período de tiempo seleccionado: 24 horas, 7 días, 30 días o todo el tiempo.

![Estadísticas \*mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Las estadísticas se clasifican en diferentes secciones.

### Peticiones

Esta sección muestra la cantidad de anuncios bloqueados, rastreadores y la cantidad total de solicitudes. Puedes filtrar las solicitudes por tipo de datos: datos móviles, Wi-Fi o todos los datos combinados.

_Actividad reciente_, anteriormente conocida como _Registro de filtrado_, muestra las últimas 10 000 solicitudes procesadas por AdGuard. Toca el menú de tres puntos (⋮) y luego _Personalizar_ para filtrar las solicitudes por estado (_regular_, _bloqueada_, _modificada_ o _lista de permitidos_) u origen (_propio_ o _tercero_).

Puedes tocar una solicitud para ver tus detalles y agregar una regla de bloqueo o desbloqueo con un solo toque.

### Uso de datos

Esta sección muestra la cantidad de datos descargados y cargados y el tráfico guardado para el tipo de datos seleccionado (datos móviles, Wi-Fi o todos). Toca _ahorrado_, _cargado_ o _descargado_ para ver el gráfico del uso de datos a lo largo del tiempo.

### Apps

Esta sección muestra estadísticas de todas las aplicaciones instaladas en tu dispositivo. Puedes ordenar las aplicaciones por la cantidad de anuncios o rastreadores bloqueados o por la cantidad de solicitudes enviadas.

Toca _Ver todas las aplicaciones_ para expandir la lista de tus aplicaciones ordenadas por cantidad de anuncios, rastreadores o solicitudes.

![Lista de aplicaciones \*mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Si tocas una aplicación, puedes ver tus estadísticas completas: las solicitudes que envías y los dominios y empresas a los que llegan.

### Empresas

Esta sección muestra las empresas con las que se comunica su dispositivo. Pero, ¿qué significa? AdGuard detecta los dominios a los que tu dispositivo envía solicitudes y determina a qué empresas pertenecen. Puedes encontrar una base de datos de empresas en [GitHub](https://github.com/AdguardTeam/companiesdb).

### Estadísticas de DNS

Esta sección muestra datos sobre las solicitudes manejadas por la _protección DNS_. Puedes ver el número total de solicitudes enviadas y cuántas fueron bloqueadas por AdGuard en cifras y gráficos. También encontrarás estadísticas sobre la cantidad de tráfico guardado y los datos descargados y cargados.

### Uso de la batería

Esta sección muestra estadísticas sobre los recursos del dispositivo utilizados por AdGuard durante las últimas 24 horas. Los datos pueden diferir de las estadísticas que se muestran en la configuración de tu dispositivo. Esto sucede porque el sistema atribuye el tráfico de todas las aplicaciones filtradas a AdGuard. Así, el dispositivo muestra que AdGuard consume más recursos de los que realmente consume. [Más información sobre problemas de consumo de batería y tráfico](/adguard-for-android/solving-problems/battery/).
