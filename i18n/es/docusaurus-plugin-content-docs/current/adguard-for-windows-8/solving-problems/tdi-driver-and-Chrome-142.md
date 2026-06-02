---
title: Problemas de filtrado en Chrome 142+ al usar el controlador TDI
sidebar_position: 1
---

:::info

Este artículo describe AdGuard para Windows v8.0, un bloqueador de anuncios integral que protege su dispositivo a nivel del sistema. Esta es una versión beta que aún está en desarrollo. Para probarlo, descarga la [versión beta de AdGuard para Windows](https://agrd.io/windows_beta).

:::

Algunos usuarios de AdGuard para Windows pueden notar que [la aplicación deja de filtrar el tráfico en navegadores basados en Chromium](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). A partir de Google Chrome 142+, el tráfico del navegador simplemente no aparece a nivel del controlador TDI, lo que impide que AdGuard lo inspeccione o lo filtre.

Este comportamiento no es un error en AdGuard, sino el resultado de cambios recientes en la arquitectura y la seguridad de los navegadores modernos.

## Por qué sucede esto

Navegadores basados en Chromium (Chrome, Edge, Brave, Vivaldi, etc.) han estado fortaleciendo su arquitectura de seguridad. Un cambio significativo es trasladar los procesos internos sensibles al [sandbox de Windows AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), incluido el Network Service, que gestiona todo el tráfico del navegador.

### Qué cambió en Chrome 142

A partir de Chrome 142, el proceso Network Service ahora se inicia dentro de AppContainer de forma predeterminada.

Cuando esto ocurre, las aplicaciones que se ejecutan en un AppContainer no utilizan la interfaz de red TDI heredada; en su lugar, su tráfico se enruta a través de la pila más moderna WSK (Winsock Kernel). Como resultado, el controlador TDI no puede ver, interceptar ni procesar las conexiones que pasan por WSK, y todo el tráfico del navegador se vuelve invisible para el controlador TDI utilizado por AdGuard.

Este comportamiento está controlado completamente por las políticas de aislamiento (sandboxing) de Chrome y los experimentos internos (pruebas de campo), no por la configuración del usuario.

## Por qué esto afecta a AdGuard

El controlador TDI es una tecnología de Windows obsoleta que ha sido descontinuada y no es compatible por Microsoft desde hace muchos años. No es compatible con los modelos modernos de aislamiento y sandboxing utilizados por los navegadores.

Debido a esto, la visibilidad del tráfico basada en TDI se vuelve cada vez más inestable. En algunos navegadores, ya ha desaparecido por completo, y eventualmente dejará de funcionar por completo.

AdGuard ya considera obsoleto el controlador TDI, y su eliminación completa está prevista a medida que el producto evoluciona.

## Solución permanente

Desde la versión 8.0 RC, hemos añadido soporte experimental para el controlador SockFilter. Soluciona el problema al resolver conflictos en la stack WFP. [Más información](/adguard-for-windows-8/settings/app-settings/network-settings/).

Para usarlo, ve a _Configuración → Red → Filtrado de tráfico_, habilita el filtrado de tráfico y selecciona _SockFilter (Experimental)_ de la lista de opciones disponibles.

Como es experimental, puede haber errores. Si notas algo inusual, inesperado o simplemente roto, **puedes volver a TDI o WFP en cualquier momento** en la misma sección.

## Solución temporal

Ciertos cambios en el registro de Windows pueden obligar al navegador a dejar de usar AppContainer, provocando que sus procesos vuelvan a ejecutarse en un modo sin sandbox. El Servicio de red deja de usar la pila WSK y recurre a una ruta de red que el controlador TDI puede ver. AdGuard vuelve a tener la capacidad de filtrar el tráfico del navegador.

### Cómo modificar el registro en navegadores basados en Chromium

:::warning

Se requieren derechos de administrador para editar el registro. Los cambios incorrectos pueden afectar la estabilidad y la seguridad del sistema o del navegador. Siempre cree una copia de seguridad de la rama del registro antes de modificarla.

Antes de continuar, ten en cuenta que esta solución reduce la seguridad del sandbox/AppContainer, haciendo que el navegador esté menos aislado. Se aplica a todo el sistema porque modifica `HKLM`, y solo debe usarse para depuración, soluciones temporales, en entornos controlados o cuando la interceptación de tráfico basada en TDI sea estrictamente necesaria.

**No** debería aplicarse de forma generalizada en las máquinas de usuarios finales. **Continúa solo si entiendes las implicaciones.**

:::

Puedes aplicar automáticamente los cambios necesarios en el registro usando uno de los archivos de .reg pregenerados que aparecen a continuación. Cada archivo desactiva el sandboxing de AppContainer/Network Service para un navegador específico basado en Chromium:

- [Descargar Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Descargar Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Descargar Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Descargar Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Descargar Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Descargar YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Si tu navegador no está listado, sigue las instrucciones del manual a continuación para crear las entradas necesarias en el registro:

1. Determina su rama de política consultando la documentación oficial del proveedor o abriendo la página interna de políticas. En Chrome, navega hasta 'chrome://policy'. Otros navegadores usan un camino similar.

2. Identifica la rama correcta del registro para tu navegador. Diferentes navegadores basados en Chromium utilizan distintas rutas de política bajo 'HKLM'. Debe seguir el modelo 'HKLM\SOFTWARE\Políticas\<Vendor>\<Product>\`.

3. Abre el editor del registro:

   - Pulsa _Win + R_
   - Escribe _regedit_ y pulsa _Enter_
   - Aprueba el aviso UAC ejecutándolo como administrador

4. Haz una copia de seguridad de la rama Policies:

   - En el panel izquierdo, navega hasta 'HKEY_LOCAL_MACHINE\SOFTWARE\Políticas'
   - Haz clic derecho en _Políticas_ → _Exportar_
   - Guarda el archivo como _Policies_backup.reg_

   Si algo sale mal, puedes restaurar la copia de seguridad haciendo doble clic en este archivo.

5. Navega hasta la clave de política de tu navegador:

   - Amplía el camino 'HKEY_LOCAL_MACHINE' → _SOFTWARE_ → _Políticas_.
   - Localiza la carpeta correspondiente a tu navegador.

Si la clave no existe, puedes crearla manualmente. Ejemplo para Chrome:

- Haz clic derecho en _Políticas_ → _Nuevo_ → _Clave_ y ponle el nombre 'Google'
- Dentro de 'Google', crea otra clave llamada 'Chrome'

Repite la misma lógica para Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. Deberías acabar con una clave que se parezca a 'HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>\`.

1. Añade los valores del registro requeridos:

   - En la clave correcta, haz clic en el panel derecho → _Nuevo_ → _Valor DWORD (32 bits)_

   - Llámalo 'RendererAppContainerEnabled'

   - Haz doble clic y pon:

     - **Value:** 0
     - **Base:** Hexadecimal o Decimal (cualquiera de las dos está bien)

   - Repite el proceso y crea un segundo DWORD 'NetworkServiceSandboxEnabled'.

   - Ponle su valor a 0.

   Ambos parámetros deben ser 'REG_DWORD' y tener el valor **0**.

2. Cierra el navegador y aplica la configuración. Para asegurar que la política esté cargada:

   - Cierra completamente el navegador
   - Revisa el Administrador de tareas y asegúrate de que ningún proceso como _chrome.exe_, _msedge.exe_, _brave.exe_ siga ejecutándose
   - Vuelve a abrir el navegador

3. Verifica que las políticas se hayan aplicado abriendo el visor de políticas en tu navegador.

Deberías ver activas las siguientes políticas:

- 'RendererAppContainerEnabled' — **0 / false**
- 'NetworkServiceSandboxEnabled' — **0 / false**

Si está disponible, haz clic en _Recargar políticas_.

¡Listo!
