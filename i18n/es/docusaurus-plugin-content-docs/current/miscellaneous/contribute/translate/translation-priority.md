---
title: Cómo dar prioridad a las traducciones de archivos Crowdin
sidebar_position: 5
---

There are five major AdGuard projects on Crowdin — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), and [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

No tenemos pautas claras sobre con qué archivos o productos del proyecto *AdGuard Applications* comenzar. Simplemente elige cualquier producto que desees.

Solo hay un par de cosas que queremos mencionar:

- The app is only available to users in those languages for which all translations have been completed on Crowdin;
- Recomendamos traducir las descripciones de las tiendas de aplicaciones en segundo lugar, porque sin la traducción de los productos en sí, las descripciones no serán necesarias.

La situación es diferente en el proyecto *AdGuard Websites*. Se pueden agregar idiomas al sitio incluso si no está disponible un conjunto completo de traducciones. Sin embargo, esto depende de qué archivos ya se han traducido. Es por eso que te recomendamos que comiences con los archivos más importantes, que se enumeran a continuación:

[Sitio web del bloqueador de anuncios AdGuard](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[Sitio web de AdGuard VPN](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[Sitio web de AdGuard DNS](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

La adición de nuevos strings, así como la actualización de las existentes en estos archivos, requiere una atención especial por parte de los traductores y revisores del proyecto.

Además de los sitios web, hay un archivo para traducir [correos transaccionales](https://crowdin.com/project/adguard-websites/en#/emails) en el proyecto de sitios web de AdGuard. Los strings recién agregados en este archivo también tienen una alta prioridad de traducción.
