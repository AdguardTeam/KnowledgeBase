---
title: Cómo depurar reglas en AdGuard para Chrome MV3
sidebar_position: 2
---

En [AdGuard para Chrome MV3](/adguard-browser-extension/mv3-version), el registro de filtrado solo muestra las reglas aproximadamente aplicadas, las cuales llamamos “reglas supuestas”. Esto se debe a que el navegador no proporciona detalles sobre qué reglas declarativas específicas se utilizaron a menos que la extensión esté en un formato "descomprimido". Para obtener información precisa, deberás instalar la forma “descomprimida” de la extensión en tu navegador.

Estas instrucciones también están destinadas a casos problemáticos donde deseas modificar las reglas que están agrupadas con la extensión de forma estática. En la mayoría de los casos, utilizar _Reglas del usuario_ en la extensión debería ser suficiente.

## Requisitos previos

1. **Git:** [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Nodo:** [Instalar Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Instalar Yarn](https://classic.yarnpkg.com/lang/es/docs/install)

## Cómo clonar la extensión

1. Clona el repositorio:

    ```bash
    git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
    ```

2. Navegue até o diretório:

    ```bash
    cd AdguardBrowserExtension
    ```

3. Cambia a la branch `v5.0`:

    ```bash
    git checkout v5.0
    ```

4. Instala las dependencias:

    ```bash
    yarn install
    ```

## Cómo construir la extensión

1. Cambia a la branch `v5.0`:

    ```bash
    git checkout v5.0
    ```

2. Ejecuta el siguiente comando en la terminal:

    ```bash
    yarn dev chrome-mv3
    ```

3. La extensión construida estará ubicada en el directorio:

    ```bash
    ./build/dev/chrome-mv3
    ```

## Cómo instalar la extensión descomprimida en el navegador

1. Activa el modo de desarrollador:

    ![Modo de desarrollador](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Haz clic en _Cargar descomprimido_:

    ![Cargar deescomprimido](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Selecciona el directorio de la extensión y haz clic en `Seleccionar`:

    ![Seleccionar](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

¡Eso es todo!

## Cómo depurar reglas

1. Encuentra y modifica la regla que necesitas en el directorio `./Extensión/filtrado/chromium-mv3` en los archivos `.txt`.

2. Convierte las reglas de txt a su forma declarativa:

    ```bash
    yarn convert-declarative
    ```

3. Haz el build de la extensión de nuevo:

    ```bash
    yarn dev chrome-mv3
    ```

4. Recarga la extensión en el navegador:

    ![Recargar la extensión](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
