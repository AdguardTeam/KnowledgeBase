---
title: Extensión de navegador AdGuard para Chrome MV3
sidebar_position: 5
---

Como las extensiones MV2 se están eliminando gradualmente de Chrome Web Store, es posible que los usuarios de Chrome necesiten cambiar a extensiones MV3 que sean compatibles con la nueva API Manifest V3 de Chrome. Nuestras opiniones sobre este tema se debaten ampliamente en [nuestro blog](https://adguard.com/es/blog/tag/manifest-v3.html).

Nuestra extensión MV3 bloquea eficazmente anuncios y rastreadores mientras administra sin problemas widgets sociales, banners y anuncios de video. La mayoría de los usuarios no notarán ninguna diferencia operativa, pero hay algunas limitaciones y cambios que conviene tener en cuenta.

## Dónde encontrar nuestras extensiones

La **versión MV3** ha reemplazado nuestra antigua extensión en [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

La **versión beta de MV3** seguirá estando disponible en [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

La antigua extensión beta cambiará de nombre a [**Bloqueador AdGuard MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) y recibirás soporte hasta que Google la elimine.

## Principales cambios en funciones y configuraciones

- **No hay actualizaciones de filtros automáticas ni manuales.** Las opciones _Actualizar filtros automáticamente_ y _Verificar actualización de filtros_ ya no están disponibles en la pestaña _Filtros_. Dado que algunas de las reglas ahora se aplican en formato DNR, no podemos actualizar los filtros a pedido, solo a través del proceso completo de actualización de la extensión junto con la revisión en las tiendas.

- **Registro de filtrado**

  ![Registro de filtrado \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Debido a las restricciones del DNR, no podemos mostrar exactamente qué regla funcionó, pero proporcionaremos una “regla asumida que se activó” según nuestro motor. Para obtener información precisa, deberás instalar la forma “descomprimida” de la extensión en tu navegador. Encontrarás instrucciones detalladas sobre cómo hacer esto en un [artículo separado](/adguard-browser-extension/solving-problems/debug-rules/).

- _Protección de seguimiento_ (antes conocida como _Modo oculto_)

  ![Protección contra el seguimiento \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  No hay una sección de _Cookies_, junto con _Autodestrucción de cookies propias_ y _Autodestrucción de cookies de terceros_, ya que no podemos establecer el TTL de las cookies mediante reglas declarativas.

- La _Protección contra phishing y malware_ ya no está disponible en la configuración general. Para protegerte de sitios web maliciosos y estafas, habilita los filtros de _Seguridad_ adecuados en la pestaña _Filtros_.

  ![Seguridad \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitaciones

### Número máximo de reglas y filtros

El manifiesto V3 impone límites a las reglas estáticas y regex por extensión. Los usuarios podrán recibir notificaciones cuando se excedan estos límites.

![Límites de reglas \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Demasiadas extensiones \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Básicamente, Manifest V3 divide las reglas en estáticas (integradas) y dinámicas, con límites estrictos establecidos.

**Reglas estáticas:** mínimo **30 000** reglas por extensión, con un límite acumulativo de **330 000** para todas las extensiones instaladas por un solo usuario.

Para las reglas de expresiones regulares, el límite se establece en **1 000 por extensión**.

El número máximo de filtros habilitados simultáneamente es **50**.

**Reglas dinámicas:** se impone un límite estricto de **5 000** reglas, que incluye un máximo de 1 000 reglas de expresiones regulares.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules, Custom filters, and finally — Quick Fixes filter.

> **Las reglas convertidas** son reglas que se han transformado
> a \[formato DNR] usando el [convertidor declarativo][github-declarative-converter].
> Durante este proceso de conversión, algunas reglas pueden sobrescribir a otras (`$badfilter`), algunas pueden combinarse (`$removeparam`),
> resultando en una lista de reglas con un orden ligeramente diferente.
>
> De esta lista de reglas convertidas, solo utilizaremos 5000 reglas. El resto se mostrarán en el editor, pero no se aplicarán.

Así es como una regla con un modificador básico se convierte en una regla declarativa:

```adblock
||example.org^$script,third-party,domain=example.com
```

se convierte a

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Puedes encontrar más ejemplos en [GitHub][github-declarative-converter-examples].

### Modificadores de reglas de red

Los modificadores de reglas de red tienen limitaciones: algunos de ellos no se pueden implementar en MV3 o solo se pueden implementar con restricciones.

Puedes encontrar más detalles sobre las limitaciones en [GitHub][github-declarative-converter].
Para más información sobre los modificadores, consulta nuestra [Base de conocimientos](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
