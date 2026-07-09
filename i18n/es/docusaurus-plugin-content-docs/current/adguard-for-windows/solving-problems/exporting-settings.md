---
title: Cómo volver a la versión anterior después de actualizar a v8.0
sidebar_position: 12
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

Los cambios en AdGuard para Windows v8.0 son significativos y esperamos que te guste la nueva versión. Sin embargo, es posible que algo no salga como esperabas. La versión 8.0 es muy diferente, es la primera versión nightly. Si la interfaz v8.0 te resulta incómoda o has encontrado demasiados problemas de funcionalidad o estabilidad, puedes restaurar la versión anterior junto con su configuración.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

Como alternativa, también está disponible el siguiente método:

1. Después de actualizar a la versión 8, abre la carpeta `C:\ProgramData\Adguard\Backups` y busca un archivo ZIP con un nombre similar a `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. Desinstala la versión 8.0 con la opción **eliminación de configuración** activada.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Sale de la versión 7 de la bandeja del sistema para detener el filtrado.
6. Extrae el contenido del archivo ZIP del primer paso y reemplaza los siguientes archivos:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` y `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Inicia AdGuard.

¡Listo!
