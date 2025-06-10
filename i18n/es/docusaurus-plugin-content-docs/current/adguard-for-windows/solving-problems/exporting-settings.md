---
title: Cómo volver a la versión anterior después de actualizar a v8.0
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

Los cambios en AdGuard para Windows v8.0 son significativos y esperamos que te guste la nueva versión. Sin embargo, es posible que algo no salga como esperabas. La versión 8.0 es muy diferente, es la primera versión nightly. Si la interfaz v8.0 te resulta incómoda o has encontrado demasiados problemas de funcionalidad o estabilidad, puedes restaurar la versión anterior junto con su configuración.

Para garantizar que tus configuraciones se conserven durante todo el proceso, se recomienda exportarlas antes de actualizar a v8.0, de modo que, si es necesario, puedas reinstalar la versión 7 e importar nuevamente tus configuraciones guardadas.

Como alternativa, también está disponible el siguiente método:

1. Después de actualizar a la versión 8, abre la carpeta `C:\ProgramData\Adguard\Backups` y busca un archivo ZIP con un nombre similar a `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copia este archivo zip en algún lugar fuera de `C:\ProgramData\Adguard`, por ejemplo, en el escritorio (esto es importante porque se eliminará en el siguiente paso).
3. Desinstala la versión 8.0 con la opción **eliminación de configuración** activada.
4. Instala la versión 7 que se instaló antes de la actualización.
5. Sale de la versión 7 de la bandeja del sistema para detener el filtrado.
6. Extrae el contenido del archivo ZIP del primer paso y reemplaza los siguientes archivos:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` y `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Inicia AdGuard.

¡Listo!
