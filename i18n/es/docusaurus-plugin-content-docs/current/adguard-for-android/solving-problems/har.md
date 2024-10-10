---
title: Cómo generar archivos HAR
sidebar_position: 5
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Los archivos HAR se procesan de acuerdo con la [Política de privacidad de AdGuard](https://adguard.com/en/privacy.html).

:::

## ¿Qué son los archivos HAR?

El formato HAR (HTTP ARchive) es un archivo de almacenamiento con formato JSON para registrar la interacción de un navegador web con un sitio. Las especificaciones del formato HAR definen datos de archivo para las transacciones HTTP que un navegador utiliza para exportar información detallada sobre las páginas web que carga. Puedes encontrar una descripción más detallada del formato de archivo HAR y su especificación en el sitio web [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Cómo generar archivos HAR

A veces necesitamos analizarlo para bloquear anuncios específicos que son difíciles de reproducir por algún motivo. Para obtener archivos HAR, sigue estos pasos:

1. Abre AdGuard y ve a **Configuración** (ícono ⚙ en la esquina inferior derecha).
2. Toca **General** →**Avanzado** → **Configuración de bajo nivel**.
3. Desplázate hacia abajo y activa **Capturar HAR** en la sección Filtrado.
4. Abre la aplicación y realiza las acciones necesarias para reproducir el problema.
5. Desactive **Capturar HAR**.
6. Regresa a **Avanzado**.
7. Toca **Exportar registros e información del sistema** → **Permitir** (si es necesario) → **Guardar**.

**Envía el archivo generado con los registros al servicio de soporte de AdGuard.**

:::note

Nuestro equipo de soporte procesará tu ticket mucho más rápido si especificas el número de ticket de HelpDesk o el número de problema de GitHub en tu mensaje.

:::

## Cómo analizar archivos HAR

Aquí hay algunas fuentes que podemos recomendar para analizar archivos HAR:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) es una herramienta analizadora HAR que visualiza archivos de registro HTTP Archive (HAR) creados por herramientas de seguimiento HTTP.
- [Fiddler](https://www.telerik.com/fiddler) es un proxy de depuración web que le permite capturar, inspeccionar y monitorear todo el tráfico HTTP(S) entre tu computadora e Internet, simular solicitudes y diagnosticar problemas de red.
