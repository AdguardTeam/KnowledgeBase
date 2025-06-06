---
title: Instalación, configuración y desinstalación
sidebar_position: 2
---

## Instalando AdGuard para Linux

Abre la línea de comando en tu computadora. En Linux, usa el atajo de teclado _Ctrl+Alt+T_. En Mac, escribe _Terminal_ en el campo de búsqueda.

Para instalar AdGuard, elige la versión que mejor se adapte a ti (release, beta o nightly) y introduce el comando respectivo.

**Release**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Si es necesario, introduce tu contraseña de administrador.

Presiona `y` para crear un enlace en `/usr/local/bin` al ejecutable y espera hasta que la instalación esté completa.

:::note

Puedes verificar la firma para probar que es una versión oficial de AdGuard utilizando la herramienta `gpg`. [Más información en GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Configuración inicial

AdGuard para Linux requiere una [licencia de AdGuard](https://adguard.com/license.html). Si aún no tienes una licencia, puedes iniciar sesión o crear una cuenta para obtener una prueba gratis de 14 días. Si ya tienes una licencia, inicia sesión para activarla. Para hacerlo, sigue esta guía paso a paso:

1. Después de la instalación, ingresa:

    ```sh
    adguard-cli activate
    ```

2. Luego selecciona la opción deseada:

    ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. Una vez que tengas una licencia, sigue el enlace proporcionado para continuar con la activación:

    ![Activar licencia \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. Después de la activación, puedes continuar trabajando con el programa:

    ![Activación exitosa \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. También puedes reiniciar tu licencia ingresando:

    ```sh
    adguard-cli reset-license
    ```

    o visualizar la información de la licencia ingresando

    ```sh
    adguard-cli license
    ```

6. Ahora necesitas configurar AdGuard CLI. Para ejecutar el asistente de configuración, ingresa:

    ```sh
    adguard-cli configure
    ```

    ![Configuración \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

    El asistente hará preguntas básicas necesarias para la configuración inicial.

7. Después de eso, puedes comenzar la protección de AdGuard ingresando

    ```sh
    adguard-cli start
    ```

    ![Iniciar protección \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. Puedes verificar el estado de la protección usando:

    ```sh
    adguard-cli status
    ```

    y deténlo con:

    ```sh
    adguard-cli stop
    ```

    ![Iniciar protección \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. Para comprobar la configuración actual, ingresa:

    ```sh
    adguard-cli config show
    ```

    ![Configuración actual \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

    También se mostrará la ruta al archivo de configuración, que puedes y debes editar directamente. Contiene descripciones de todas las opciones adicionales.

    Como alternativa, puedes utilizar los comandos:

    ```sh
    adguard-cli config get
    ```

    o:

    ```sh
    adguard-cli config set
    ```

    Sin embargo, están destinados principalmente a la creación de scripts.

Para restablecer tu licencia, introduce:

## Desinstalar AdGuard para Linux

Para desinstalar AdGuard, ingresa:

Release

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Si es necesario, introduce tu contraseña de administrador.
