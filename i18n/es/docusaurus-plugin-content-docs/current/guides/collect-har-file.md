---
title: Cómo recopilar un archivo HAR
sidebar_position: 1
---

Los archivos HAR ayudan a nuestros equipos de soporte técnico a solucionar problemas complejos. Para crear estos archivos, recomendamos usar Chrome o Firefox. Sin embargo, IE 11, Edge y Safari también brindan capacidad de exportación y generación de archivos `.har`.

## Chrome {#chrome}

Para crear un archivo HAR en Chrome:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Abre ***Herramientas de desarrollo***:

- Desde el menú: ***Menú → Más herramientas → Herramientas de desarrollador***.
- Teclado: ***Ctrl+Shift+C***, o ***Ctrl+Alt+I***, o ***⌥+⌘+I para Mac***.

3. Haz clic en la pestaña ***Red***.

4. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

5. Utiliza el botón ***borrar*** (el botón circular con una línea que lo atraviesa junto al botón de grabación) para borrar toda la actividad anterior.

6. Selecciona la casilla de verificación ***Conservar registro*** en la pestaña Red.

7. Marca la casilla de verificación ***Desactivar caché***.

![chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reproduce los pasos que crean el problema.

9. Guarda la sesión como archivo .har haciendo clic con el botón derecho en la cuadrícula y seleccionando ***Guardar como HAR con contenido***.

10. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Edge {#edge}

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Abre ***Herramientas de desarrollo***:

- Desde el menú: ***Menú → Más herramientas → Herramientas de desarrollador***.
- Teclado: ***Ctrl+Shift+C***, o ***Ctrl+Alt+I***, o ***⌥+⌘+I para Mac***.

3. Haz clic en la pestaña ***Red***.

4. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

5. Utiliza el botón ***borrar*** (el botón circular con una línea que lo atraviesa junto al botón de grabación) para borrar toda la actividad anterior.

6. Selecciona la casilla de verificación ***Conservar registro*** en la pestaña Red.

7. Marca la casilla de verificación ***Desactivar caché***.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reproduce los pasos que crean el problema.

9. Guarda la sesión como archivo .har haciendo clic con el botón derecho en la cuadrícula y seleccionando ***Guardar como HAR con contenido***.

10. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Firefox {#firefox}

Para crear un archivo HAR en Firefox:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Abre las herramientas de desarrollo en el modo ***Red***:
- Desde el menú: ***Menú→Desarrollador web→Red***.
- Teclado: ***Ctrl+Shift+C***, o **⌥+⌘+E (Mac)**.

3. Ten en cuenta el botón ***reproducir/pausar*** en la parte superior izquierda de la pestaña Red.
- El botón debe estar en modo de reproducción.

4. Si actualmente se muestra alguna información en la cuadrícula, bórrala haciendo clic en el botón ***eliminar papelera*** junto al botón reproducir/pausar.

5. Selecciona la opción ***Conservar registros*** en la ficha Red.

6. Marca la casilla de verificación ***Desactivar caché***.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reproduce los pasos que crean el problema.

8. Guarde la sesión como archivo .har haciendo clic con el botón derecho en la cuadrícula y seleccionando ***Guardar todo como HAR***.

9. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Internet Explorer 11 {#ie11}

Para crear un archivo HAR en Internet Explorer 11:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Abre las herramientas de desarrollo en el modo ***Red***:
- En el menú Herramientas: ***Herramientas de desarrollo*** → ***Pestaña de red***.
- Teclado: ***F12→Pestaña Red***.

3. Ten en cuenta que para iniciar la sesión de generación de perfiles, haz clic en ***Play*** y para detener la generación de perfiles, haz clic en ***Parar*** en la parte superior izquierda de la pestaña Red.
- El botón Reproducir estará gris cuando se esté grabando y el botón Detener estará rojo. Poner en modo ***Play***.

4. Borra cualquier información de sesión que aparezca en la cuadrícula inferior con el botón ***Borrar sesión*** en la pestaña Red. Pasa el cursor sobre los iconos para ver los nombres.
- ***Borrar sesión*** El botón es un icono de tres líneas con una x.

5. Marca la casilla de verificación ***Desactivar caché***.

6. Reproduce los pasos que crean el problema.

7. Guarda la sesión como un archivo .har haciendo clic en el botón ***Guardar disco*** (Exportar como HAR) en la pestaña Red.

8. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Safari {#safari}

Para crear un archivo HAR en Chrome:

1. Consulta la barra de menú de Safari en la parte superior de la pantalla para ver el menú ***Desarrollar***. Marca la casilla de verificación en la parte inferior junto a ***Mostrar el menú Desarrollar en la barra de menú***.
- Si no está visible, actívalo yendo a ***Safari→Preferencias→Avanzado***.

2. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

3. Abre la pestaña ***Red*** en Web Inspector:
- Desde el menú: ***Desarrollar→Mostrar Web Inspector→Red***.
- Teclado: ***⌥+⌘+I→Red***

4. Marca la casilla de verificación ***Conservar registro*** en el lado derecho de las pestañas Red.

5. Borra los elementos de red actuales haciendo clic en el ícono ***eliminar Papelera*** en el extremo derecho de las pestañas de red.

6. Marca la casilla de verificación ***Desactivar caché***.

7. Reproduce los pasos que crean el problema.

8. Guarda la sesión como un archivo .har haciendo clic en el icono ***Exportar*** junto a ***Conservar registro***.

9. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Android {#android}

Para obtener archivos HAR, sigue estos pasos:

1. Abra AdGuard y ve a ***Configuración***.

2. Elige ***Avanzado*** en el menú.

3. Elige ***Ajustes de bajo nivel***

4. Activa `pref.har.capture` (tendrás que reiniciar la protección).

5. Ahora reproduce el problema: abre la aplicación y realiza las acciones necesarias para que aparezca el anuncio.

6. Ahora desactiva `pref.har.capture` de nuevo.

7. Vuelve atrás y toca ***Exportar registros e información del sistema*** → ***Salvar***.

## Windows {#windows}

1. Abre ***Configuración*** → ***Configuración general*** → ***Configuración avanzada** y desplázate hacia abajo.

2. Marca la casilla ***Habilitar escrita HAR***.

3. Reproducir el problema.

4. Vete a ***Configuración general*** → Haz clic en ***Exportar registros*** → ***Salvar***.

5. Deshabilita la escritura HAR desmarcando la casilla correspondiente.
