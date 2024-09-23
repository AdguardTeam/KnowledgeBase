---
title: Cortafuegos
sidebar_position: 1
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder al módulo Firewall pulsando la pestaña _Protección_ (segundo icono de la izquierda en la parte inferior de la pantalla) y seleccionando a continuación _Firewall_.

Esta función ayuda a administrar el acceso a Internet para aplicaciones específicas instaladas en tu dispositivo y para el dispositivo en general.

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### Reglas de firewall globales

Esta sección te permite controlar el acceso a Internet para todo el dispositivo.

![Reglas globales de firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Estas reglas se aplican a todas las aplicaciones de tu dispositivo, a menos que hayas establecido reglas personalizadas para ellas.

### Reglas de firewall personalizadas

En esta sección, puedes controlar el acceso a Internet para aplicaciones específicas: restringir los permisos para aquellas que no consideres confiables o, por el contrario, desbloquear aquellas que quieras eludir las reglas globales del firewall.

1. Abre _Reglas de firewall personalizadas_. En _Aplicaciones con reglas personalizadas_, toca _Agregar aplicación_.

   ![Reglas de firewall personalizadas \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. Selecciona la aplicación para la que deseas establecer reglas individuales.

   ![Agregar una aplicación a las reglas de firewall personalizadas \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. En _Reglas personalizadas disponibles_, selecciona las que deseas configurar y toca el ícono “+”. Las reglas ahora aparecerán en _Reglas personalizadas aplicadas_.

   ![Regla agregada \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. Si necesitas bloquear un tipo específico de conexión, mueve el interruptor hacia la izquierda. Si deseas permitirlo, deja el interruptor habilitado. **Las reglas personalizadas anulan las globales**: cualquier cambio que realices en las _Reglas globales de firewall_ no afectará a esta aplicación.

Para eliminar una regla o aplicación de _Reglas personalizadas_, deslízala hacia la izquierda.

### Notifications

If enabled, this feature notifies you when an app is attempting to violate an applicable firewall rule, e.g. attempts to access mobile data from which it is blocked. You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
