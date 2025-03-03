---
title: Red
sidebar_position: 10
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app AdGuard](https://agrd.io/download-kb-adblock)

:::

## General

![Red](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtrar aplicaciones automáticamente

De forma predeterminada, AdGuard bloquea los anuncios y los rastreadores en la mayoría de los navegadores ([Tor Browser es una excepción](/adguard-for-mac/solving-problems/tor-filtering)). Esta configuración permite a AdGuard bloquear también los anuncios de las aplicaciones.

Para gestionar las aplicaciones filtradas, haz clic en _Aplicaciones_.

### Filtrar protocolo HTTPS

Esta configuración permite a AdGuard filtrar el protocolo HTTPS seguro, que actualmente utilizan la mayoría de los sitios web y aplicaciones. De forma predeterminada, los sitios web con información potencialmente confidencial, como servicios bancarios, no se filtran. Para administrar las exclusiones HTTPS, haz clic en _Exclusiones_.

De forma predeterminada, AdGuard no filtra sitios web con certificados de validación extendida (EV). Si es necesario, puedes habilitar la opción _Filtrar sitios web con certificados EV_.

## Proxy saliente

Puedes configurar AdGuard para enrutar todo el tráfico de tu dispositivo a través de tu servidor proxy.

## Proxy HTTP

Puedes usar AdGuard como un servidor proxy HTTP. Esto te permitirá filtrar el tráfico en otros dispositivos conectados al proxy.

Asegúrate de que tu Mac y tu otro dispositivo estén conectados a la misma red e introduce el puerto de proxy en el dispositivo que desees enrutar a través de tu servidor proxy (por lo general, en la configuración de red). Para filtrar también el tráfico HTTPS, [transfiere el certificado de proxy de AdGuard](http://local.adguard.org/cert) a este dispositivo. [Obtén más información sobre cómo instalar un certificado de proxy](/guides/proxy-certificate)
