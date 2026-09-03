---
title: Gestión de aplicaciones
sidebar_position: 1
---

En la sección _Gestión de aplicaciones_, puedes administrar la configuración de enrutamiento y filtrado para todas las aplicaciones instaladas en tu dispositivo.

Una vez que AdGuard detecta que una aplicación se ha conectado, se añade automáticamente a _Gestión de aplicaciones_, y su tráfico se enruta a través de AdGuard.

Por defecto, AdGuard filtra todo el tráfico, pero puedes elegir qué excluir.

AdGuard también filtra el tráfico HTTPS, ya que la mayoría de los sitios web hoy en día usan HTTPS. Esto es especialmente importante para bloquear anuncios en sitios como youtube.com, facebook.com y x.com, donde es imposible eliminar anuncios sin el filtrado HTTPS.

Cuando el enrutamiento y el filtrado están habilitados para una aplicación, los íconos debajo de cada aplicación aparecerán en verde.

Puede dejar la configuración como está, desactivar tanto el filtrado como el enrutamiento, o ajustarlos manualmente para cada aplicación. También puedes acceder a las estadísticas de la aplicación.

![App stats \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Cómo funcionan el filtrado y el enrutamiento de aplicaciones en AdGuard para Windows v8.0

AdGuard para Windows v8.0 introduce una lógica actualizada para gestionar aplicaciones. Ayuda a prevenir problemas de compatibilidad mientras aún te da control sobre qué aplicaciones se filtran. Veamos cómo funciona.

Hay aplicaciones “sin problemas” y “problemáticas”. Algunas aplicaciones se consideran «problemáticas» y pueden no funcionar correctamente cuando se enrutan a través de AdGuard. Es posible que vea una advertencia como esta al intentar enrutar o filtrar todas las aplicaciones:

Para evitar que las aplicaciones se rompan de entrada, AdGuard no filtra todo de forma indiscriminada. En su lugar, se basa en una lista de compatibilidad — un conjunto de aplicaciones que se sabe que funcionan correctamente con el filtrado habilitado.

:::note

«No filtrar todo» no significa «no filtrar nada». Las aplicaciones de confianza (como los navegadores) siempre se filtran.

:::

Cada aplicación tiene tres capas de procesamiento independientes: enrutamiento del tráfico a través de AdGuard, filtrado (bloqueo de anuncios y rastreadores) y filtrado HTTPS (intercepción de tráfico cifrado).

Estos están determinados por tres fuentes:

- _Lista de compatibilidad_

  Aplicaciones que han sido probadas por nuestro equipo y se ha confirmado que funcionan correctamente con el filtrado.
  Esta lista se actualiza mediante pruebas internas e informes de usuarios en el [repositorio dedicado para listar problemas de compatibilidad de AdGuard](https://github.com/AdguardTeam/CompatibilityIssues).

- _Listas de exclusiones_

  Listas separadas para enrutamiento, filtrado y filtrado HTTPS. Estas incluyen aplicaciones conocidas por fallar cuando se aplica el filtrado.

- _Filtrar aplicaciones desconocidas_

  Esta configuración define cómo se gestionan todas las demás aplicaciones (que no están presentes en ninguna lista).

:::info

Las listas de compatibilidad se actualizan continuamente — y puedes ayudar a mejorarlas. Si notas que una aplicación no funciona correctamente con el filtrado habilitado, **repórtalo en [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** o contacta con el soporte a través de la aplicación. Tus comentarios ayudan a mejorar AdGuard para todos.

:::

## Filtrar aplicaciones desconocidas

![Filtrar aplicaciones desconocidas \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

La configuración _Filtrar aplicaciones desconocidas_ está habilitada de forma predeterminada y determina cómo AdGuard gestiona las aplicaciones nuevas que aún no están presentes en las listas de compatibilidad o exclusión

Cuando está habilitado, el tráfico de la aplicación se enruta a través de AdGuard, se aplica el filtrado regular y **el filtrado HTTPS NO se habilita automáticamente**. Esto es intencional: la interceptación HTTPS es la parte más sensible del procesamiento del tráfico y puede afectar el comportamiento de la aplicación.

Cuando está deshabilitado, AdGuard no procesa las nuevas aplicaciones — tendrás que configurar manualmente el enrutamiento para ellas.

Aquí tienes una breve descripción de cómo se comportan las diferentes categorías de aplicaciones según esta configuración:

| Categoría de la aplicación                                                                   | Activar (predeterminado)                    | Desactivar                                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Compatible o sin problemas (por ejemplo, navegadores)                     | · Enrutamiento ✅ <br /> · Filtrado ✅ <br /> · Filtrado HTTPS ✅ | Mismo comportamiento — no depende del interruptor              |
| Problemático (de listas de exclusión, el filtrado puede causar problemas) | · Enrutamiento ❌ <br /> · Filtrado ❌ <br /> · Filtrado HTTPS ❌ | Mismo comportamiento — no depende del interruptor              |
| Otros / (recién detectados, desconocidos, no en listas)                   | · Enrutamiento ✅ <br /> · Filtrado ✅ <br /> · Filtrado HTTPS ❌ | No se enruta a través de AdGuard; debe habilitarse manualmente |

:::info Qué ocurre al restablecer

Si haces clic en **Restablecer a los valores predeterminados**, ocurren dos cosas:

1. Todos los permisos específicos de la aplicación se borran (se establecen en “no configurado”).
2. Se aplican reglas predefinidas a aplicaciones seguras conocidas (como navegadores), incluido el filtrado HTTPS.

:::
