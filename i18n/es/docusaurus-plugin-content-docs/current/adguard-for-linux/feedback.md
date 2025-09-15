---
title: Enviando feedback
sidebar_position: 4
---

## Cómo reportar un problema o sugerir una funcionalidad

Si has encontrado un error en AdGuard para Linux o te gustaría sugerir una nueva funcionalidad, así es como hacerlo:

- Completa el [formulario de feedback](https://surveys.adguard.com/en/adguard_linux/form.html).
- Crea un [issue en GitHub](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Pero antes de hacerlo, consulta el [repositorio](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) para problemas similares.

:::note

Si deseas apoyar la implementación de una nueva función o corrección de errores, puedes votar por ello en GitHub. Para votar, basta con reaccionar con algún emoji.

:::

## Cómo recopilar y enviar registros

1. Habilita el registro de depuración:

   `adguard-cli config set log_level debug`

2. Reproduzca el problema e intenta recordar la hora exacta en que ocurrió.

3. Espera un momento, luego exporta los registros:

   `adguard-cli export-logs`

   El archivo de registro archivado se descargará en la carpeta de la app por predeterminado, y la ruta a los registros se escribirá en la consola.

4. Envia el archivo de registro a <devteam@adguard.com>. Incluye la hora del error y adjunta un enlace a tu issue de GitHub o su número (aparece como #número junto cerca del título). Alternativamente, puedes transferir el archivo de registro en Google Drive y compartirlo con <devteam@adguard.com>. Agrega el enlace del archivo a tu problema de GitHub.

5. Vuelve a cambiar el modo de registro a `info`:

   `adguard-cli config set log_level info`
