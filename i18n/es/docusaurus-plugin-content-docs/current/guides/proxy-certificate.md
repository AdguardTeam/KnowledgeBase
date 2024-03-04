---
title: Cómo instalar un certificado proxy
sidebar_position: 2
---

Las aplicaciones de escritorio de AdGuard (AdGuard para Windows y AdGuard para Mac) se pueden usar como proxy. Esto significa que puedes enrutar el tráfico de otros dispositivos a través de AdGuard (totalmente o el tráfico de aplicaciones/navegadores específicos).

:::note

Estos dispositivos deben estar en la misma red que el PC o Mac en el que está instalado AdGuard.

:::

El tráfico HTTP se filtrará en cualquier caso, pero para que AdGuard pueda filtrar el tráfico HTTPS, debes instalar manualmente el certificado de AdGuard en el dispositivo conectado.

## Cómo descargar e instalar el certificado

Según el sistema operativo de tu dispositivo (Windows/Mac/Android/iOS), sigue una de estas instrucciones:

### Windows {#windows}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

2. Asegúrate de que la protección AdGuard esté habilitada. Luego marca la casilla **Usar AdGuard como un proxy HTTP** en la pestaña **Red** de la configuración.

3. En el mismo dispositivo con AdGuard, sigue este enlace usando cualquier navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Haz clic en el botón **Descargar**.

5. Transfiere el archivo **cert.cer** descargado al dispositivo cuyo tráfico deseas enrutar a través de AdGuard.

6. En ese dispositivo, presiona el botón **Win**, escribe `Administrar certificados informáticos` y presiona **Enter**.

7. En la página *Certificados - Computadora local*, busca la carpeta *Autoridades confiables de certificación root* → *Certificados*.

8. Haz clic con el botón derecho del ratón en la carpeta *Certificados* y haz clic en **Todas las tareas** → **Importar**.

9. En la página *Asistente de importación de certificados*, haz clic en **Siguiente**.

10. Haz clic en **Navegar** para importar el certificado.

11. Desplázate hasta el **cert.cer** Archivo de certificado, selecciónalo y, a continuación, haz clic en **Abrir**.

12. Haz clic en **Siguiente**.

13. Selecciona la opción **Colocar todos los certificados en el siguiente repositorio**.

14. Asegúrate de que el campo *Repositorio de certificados* muestre *Autoridades de certificación raíz de confianza* y haz clic en **Siguiente**.

15. Haz clic en **Finalizar**.

16. Presiona la tecla **Win**, luego abre **Configuración**.

17. Selecciona **Red & Internet** → **Proxy**.

18. Alternar *Detectar configuraciones automáticamente* para desactivado.

19. Haz clic en **Configurar** en la pestaña *Usar un servidor proxy*.

20. Activa el interruptor. Para **Dirección IP de proxy**, ingresa la dirección IP anotada de tu computadora (paso 1). Para **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación AdGuard.

21. Haz clic en **Guardar**.

### Mac {#mac}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

2. Asegúrate de que la protección AdGuard esté habilitada. Luego ve a **Configuración** → **Red** → **Proxy HTTP** y marca la casilla **Usar AdGuard como proxy HTTP**.

3. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Haz clic en el botón **Descargar**.

5. Transfiere el archivo **cert.cer** descargado al dispositivo cuyo tráfico deseas enrutar a través de AdGuard.

6. Haz doble clic en el archivo de certificado descargado.

7. Ingresa la contraseña de administrador y luego haz clic en **Modificar Keychain**.

8. Ve a **Spotlight** (el ícono de búsqueda en la esquina superior derecha), escribe "Acceso Keychain" y luego selecciona **Acceso Keychain** de los resultados de búsqueda.

9. En *Sistema*, resalta el certificado que agregaste.

10. Haz clic con el botón derecho y elige **Obtener información** en el menú contextual.

11. Expande *Confianza* para mostrar las políticas de confianza para el certificado.

12. En *Capas de sockets seguros (SSL)*, selecciona **Confiar siempre**.

13. Abre **Preferencias del sistema** → **Red** y elige la conexión activa superior.

14. Haz clic en **Detalles...** y ve a la pestaña **Proxies**.

15. Marca dos casillas de verificación: *Proxy web (HTTP)* y *Proxy web seguro (HTTPS)*. En el campo **Servidor**, ingresa la dirección IP anotada de tu computadora (paso 1). En el campo **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### Android {#android}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

2. Asegúrate de que la protección AdGuard esté habilitada. Luego marca la casilla **Usar AdGuard como un proxy HTTP** en la pestaña **Red** de la configuración.

3. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Haz clic en el botón **Descargar**.

5. Transfiere el archivo **cert.cer** descargado al dispositivo cuyo tráfico deseas enrutar a través de AdGuard.

6. Localiza y pulsa el certificado **cert.cer** previamente descargado para abrir el archivo.

7. En algunos teléfonos, es posible que se te solicite que ingreses la contraseña de tu dispositivo. Hazlo y, a continuación, pulsa **OK**. El certificado ya está instalado.

8. Abre la configuración avanzada de la red Wi-Fi activa.

9. Cambia el **Tipo de proxy** a **Manual**. Para **Nombre de host de proxy**, ingresa la dirección IP anotada de tu computadora (paso 1). Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### iOS {#ios}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

2. Asegúrate de que la protección AdGuard esté habilitada. Luego marca la casilla **Usar AdGuard como un proxy HTTP** en la pestaña **Red** de la configuración.

3. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Haz clic en el botón **Descargar**.

5. Transfiere el archivo **cert.cer** descargado al dispositivo cuyo tráfico deseas enrutar a través de AdGuard.

6. Abre **Configuración** → **Seguridad** → **Cifrado & Credenciales** → **Instalar un certificado**. Los dispositivos Android no confían en los certificados de forma predeterminada, por lo que aparecerá una advertencia cuando elijas **certificado CA**. Toca **Instalar aun así**.

7. Abre **Configuración** → **Perfil descargado** y toca **Instalar** en la esquina superior derecha. Introduce tu contraseña y confirma la instalación. Presiona **Listo**.

8. Vete a **Configuración** → **General** → **Acerca de** → **Configuración de confianza de certificados**. Habilita el interruptor junto a *Adguard Personal CA*. El certificado ya está instalado.

9. En ese dispositivo, abre la configuración avanzada de la red Wi-Fi activa.

10. Cambia el **Tipo de proxy** a **Manual**. Para **Nombre de host de proxy**, ingresa la dirección IP anotada de tu computadora (paso 1). Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.
