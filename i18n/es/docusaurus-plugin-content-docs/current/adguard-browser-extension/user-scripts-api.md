---
title: API de scripts de usuario
sidebar_position: 8
---

:::info

Este artículo trata sobre la extensión de navegador AdGuard, que protege solo tu navegador. Para proteger todo tu dispositivo, [descarga la aplicación AdGuard](https://adguard.com/download.html?auto=true).

:::

Al agregar un filtro personalizado o una regla de usuario, aparecerá una notificación solicitándole que habilite el modo de desarrollador para usar estas características en la extensión.

![Notificación \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

A partir de la versión 5.2, la extensión de navegador AdGuard utiliza la API de scripts de usuario. Chrome requiere esta nueva API para cumplir con las mejores prácticas de seguridad del usuario.

## ¿Qué es la API de scripts de usuario?

La API de User Scripts es una herramienta que permite a las extensiones ejecutar scripts de JavaScript personalizados en páginas web. Estas herramientas se utilizan a menudo para modificar o mejorar sitios web de maneras que no están contempladas originalmente en el propio sitio web.

Con el cambio al manifiesto V3 de Chrome, muchos métodos antiguos para inyectar scripts se ven limitados o retrasados. Sin embargo, existe una excepción para la API de scripts de usuario.

Obtén más información sobre los impactos de las políticas MV3 en nuestra [publicación de blog](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Cómo habilitar el modo de desarrollador

Para utilizar filtros personalizados y reglas de JavaScript en la pestaña _Reglas de usuario_, primero debes configurar tu navegador. Esto proporcionará a la extensión un método fiable y seguro para inyectar scripts en las páginas web en el momento óptimo. Sigue las instrucciones que aparecen a continuación, según tu versión de Chrome.

### Para versiones de Chrome anteriores a 138

Debe habilitar el modo de desarrollador para las extensiones. Para ello, abre el menú de Chrome haciendo clic en los tres puntos de la esquina superior derecha, ve a _Extensiones_ ⭢ _Administrar extensiones_ y activa el interruptor _Modo desarrollador_.

![Administrar extensiones \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Para Chrome versión 138 y posteriores

Debes habilitar la opción _Permitir scripts de usuario_. Para ello, abre el menú de Chrome haciendo clic en los tres puntos de la esquina superior derecha, ve a _Extensiones_ ⭢ _Administrar extensiones_, accede a _Detalles_ de la extensión de navegador AdGuard y activa el interruptor _Permitir scripts de usuario_.

![Administrar extensiones \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
