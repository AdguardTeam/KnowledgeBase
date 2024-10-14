---
title: Problemas de consumo de batería y tráfico
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Debido a los procesos de estadísticas integrados, el alto consumo de datos y/o batería a menudo se atribuía a AdGuard en Android 6 y versiones anteriores. Esto se debía a que AdGuard contabilizaba todo el tráfico que filtraba de varias aplicaciones. Como resultado, la participación de AdGuard en el uso total de datos y batería fue exagerada, mientras que la de otras aplicaciones fue subestimada.

Sin embargo, con Android 7 este escenario ha mejorado. Ahora los datos reflejados en las estadísticas de uso de datos integradas de Android son muy cercanos a la realidad, aunque hay pequeñas discrepancias en los datos de uso de la batería.

Sin embargo, los usuarios de AdGuard siempre pueden obtener una imagen real de la situación en la pantalla *Uso de batería*.

### Pantalla propia de estadísticas de uso de la batería

Puedes acceder navegando a *Estadísticas* → *Uso de batería*.

![Estadísticas de batería *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

En su interior, encontrarás un gráfico que muestra el consumo de recursos de la batería de AdGuard en las últimas 24 horas, con una opción para obtener datos más detallados hora a hora tocando el gráfico. Además de eso, también hay información numérica de los datos relevantes y una breve explicación técnica.

### ¿Cuánta batería consume realmente AdGuard?

Primero, expongamos un poco de teoría y vínculos con los datos necesarios.

1. Android obtiene el consumo de tráfico a partir del llamado Perfil de potencia, que proporciona cada fabricante: <https://source.android.com/devices/tech/power/values.html>

1. La parte principal del perfil de energía es un conjunto de valores en mAh que definen el consumo de batería para cada componente del dispositivo: <https://source.android.com/devices/tech/power/values.html>

    Por ejemplo, en la tabla anterior:

    *wifi.active=* 31mA de consumo adicional en mAh causado por el intercambio de datos WiFi.

    *radio.active=* 100-300 mA de consumo adicional en mAh causado por el intercambio de datos a través de la red móvil.

    *cpu.active=* 100-200 mA de consumo adicional en mAh causado por la carga de la CPU.

1. AdGuard por sí solo casi no consume tráfico, por lo que para evaluar el consumo de energía eliminaremos los "paquetes móviles/Wi-Fi" y nos limitaremos a "CPU".

    Fórmula para calcular el consumo:

    > “TIEMPO DE CPU (ms)” X “cpu.active” / (60 *60* 1000) = “USO DE ENERGÍA mAh”

    Pongamos números reales en esta fórmula.

    Tomemos *total de CPU* de la segunda captura de pantalla y convirtámoslo a milisegundos: 506000

    Un coeficiente *cpu.active* para 2GHz será aproximadamente igual a 225mAh

    Resultado final:

    > 506000 *225 / (60* 60 * 1000) = 31,625 mAh

### Conclusión

El consumo real es **varias veces menor** de lo que se muestra en las estadísticas de Android. En lugar de 220 mAh, debería rondar los 31-40 mAh. Por otro lado, el consumo del navegador no debería ser de 66 mAh, sino de ~200 mAh.
