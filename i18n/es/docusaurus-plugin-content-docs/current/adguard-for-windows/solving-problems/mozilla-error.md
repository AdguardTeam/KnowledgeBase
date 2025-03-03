---
title: Cómo solucionar el error `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

Algunos usuarios de AdGuard para Windows con el [Filtrado HTTPS](/general/https-filtering/what-is-https-filtering) habilitado no pueden acceder a ciertos sitios web como google.com y youtube.com. En lugar de abrir un sitio web, los navegadores con Strict Certificate Pinning mostrarían un error `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Aquí hay una lista de navegadores afectados:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Si tu navegador predeterminado es uno de estos, haz lo siguiente para resolver el problema:

1. Escribe `about:config` en la barra de direcciones de tu navegador
2. En el menú que aparece, introduce `security.cert_pinning.enforcement_level` en el campo de búsqueda.
3. Cambia el parámetro `security.cert_pinning.enforcement_level` de 2 a 1.
