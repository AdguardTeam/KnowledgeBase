---
title: Cómo recopilar un archivo HAR
sidebar_position: 1
---

Los archivos HAR ayudan a nuestros equipos de soporte técnico a solucionar problemas complejos. Para crear estos archivos, recomendamos usar Chrome o Firefox. Sin embargo, IE 11, Edge y Safari también brindan capacidad de exportación y generación de archivos `.har`.

## Chrome {#chrome}

Para crear un archivo HAR en Chrome:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reproduce los pasos que crean el problema.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Edge {#edge}

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reproduce los pasos que crean el problema.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Firefox {#firefox}

Para crear un archivo HAR en Firefox:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Open Developer Tools in **Network** mode:
- From menu: **Menu → Web Developer → Network**.
- Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

3. Note the **Play/Pause** button at the top left of the Network tab.
- El botón debe estar en modo de reproducción.

4. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

5. Select the **Persist Logs** check box on the Network tab.

6. Check the **Disable cache** check box.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reproduce los pasos que crean el problema.

8. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

9. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Internet Explorer 11 {#ie11}

Para crear un archivo HAR en Internet Explorer 11:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

2. Open Developer Tools in **Network** mode:
- From Tools cog wheel menu: **Developer Tools** → **Network tab**.
- Keyboard: **F12 → Network** tab.

3. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.
- El botón Reproducir estará gris cuando se esté grabando y el botón Detener estará rojo. Put in **Play** mode.

4. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Pasa el cursor sobre los iconos para ver los nombres.
- **Clear session** button is a three line icon with an x on it.

5. Check the **Disable cache** check box.

6. Reproduce los pasos que crean el problema.

7. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

8. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Safari {#safari}

Para crear un archivo HAR en Chrome:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.
- If not visible, turn it on by going to **Safari → Settings → Advanced**.
- Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

2. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

3. Open **Network** tab in Web Inspector:
- From menu: **Develop → Show Web Inspector → Network**.
- Keyboard: **⌥+⌘+I→Network**

4. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

5. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.
- Keyboard: **⌘+K**

6. Check the **Disable caches** check box.

7. Reproduce los pasos que crean el problema.

8. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

9. Reenvíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Android {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

2. Choose **Advanced** in the menu.

3. Choose **Low Level Settings**

4. Activa `pref.har.capture` (tendrás que reiniciar la protección).

5. Ahora reproduce el problema: abre la aplicación y realiza las acciones necesarias para que aparezca el anuncio.

6. Ahora desactiva `pref.har.capture` de nuevo.

7. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

2. Check the **Enable HAR writing** box.

3. Reproducir el problema.

4. Go to **General settings** → Click **Export logs** → **Save**.

5. Deshabilita la escritura HAR desmarcando la casilla correspondiente.
