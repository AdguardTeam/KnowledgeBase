---
title: Instalación manual de certificados
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Mac necesita instalar el certificado root en el almacenamiento de certificados para poder [filtrar el tráfico HTTPS](/general/https-filtering/what-is-https-filtering). Esta acción se realiza automáticamente en la mayoría de los casos cuando ejecutas la aplicación por primera vez, pero es posible que los usuarios de navegadores basados en Gecko (Firefox, Waterfox, etc.) que tienen una contraseña maestra configurada para tu navegador deban realizar pasos adicionales (porque estos navegadores utilizan su propio almacenamiento de certificados en lugar del del sistema). Deben ingresar la contraseña maestra cuando se les solicite (para otorgar acceso a AdGuard al almacenamiento de certificados) o instalar manualmente el certificado.

Para instalar manualmente el certificado en un navegador tipo Firefox:

  1. Abre *Preferencias*

  2. Ve a *Privacidad & Seguridad* → *Certificados*

  3. Haz clic en *Ver certificados*

  4. Navega hasta la pestaña *Autoridades* y haz clic en el botón *Importar...*

  5. Select file `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` or just download it from https://local.adguard.org/cert using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard

Las acciones exactas requeridas para diferentes navegadores basados en Gecko pueden variar, pero la secuencia general y la ruta al archivo `AdGuard Personal CA.cer` serán las mismas.
