---
title: Autenticación de dos factores
sidebar_position: 3
---

La autenticación de dos factores (o 2FA) es un método de autenticación que requiere una prueba adicional del usuario para iniciar sesión, además del par habitual de nombre de usuario y contraseña. Esto se hace por seguridad. Los sitios web generalmente ofrecen métodos 2FA como un código enviado por SMS o una aplicación de autenticación especial.

Vemos la adición de una opción 2FA como un beneficio. También entendemos que su aplicación puede irritar a algunos usuarios. Por ello, lo hemos hecho opcional para tu cuenta personal en adguard.com y 2FA está desactivado cuando registras una nueva cuenta. Puedes habilitarlo manualmente en la configuración. En cuanto a los métodos de autenticación disponibles actualmente, utilizamos uno probado: una aplicación de autenticación para Android o iOS. Puedes utilizar casi cualquier aplicación de este tipo y hay muchas.

Recomendamos configurar la autenticación de dos factores para tu cuenta AdGuard. No te llevará mucho tiempo, pero te ayudará a proteger tus claves de licencia, suscripciones y, lo más importante, cualquier información personal asociada a tu cuenta.

## Cómo configurarlo

1. Log into your [AdGuard account](https://auth.adguardaccount.com/login.html) and go to the *Settings* tab:

 ![Configuración de la cuenta de AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Desplázate hacia abajo hasta *Autenticación de dos factores* y habilítalo:

 ![Alternar la autenticación de dos factores *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. Se enviará un código a la dirección de correo electrónico asociada con tu cuenta de AdGuard. Para habilitar la 2FA, ingresa el código y haz clic en *Habilitar*.

 ![El código de verificación *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

Después de habilitar la autenticación de dos factores, tienes dos opciones para elegir:

- *Código de un solo uso para correo electrónico*: cuando inicies sesión, te pediremos que introduzcas el código que te enviamos a tu correo electrónico

- *Código de la app de autenticator*: cuando inicies sesión, te pediremos un código de tu app de autenticator

![Opciones de 2FA *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

Si usas la app de autenticador, asegúrate de guardar la **clave de configuración** en algún lugar. Será necesario para recuperar tu cuenta en caso de que tu móvil se pierda o sea robado.

![La clave de configuración en la app de autenticación *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

Si todo se ha hecho correctamente, lo verás la próxima vez que accedas a tu cuenta:

![El resultado *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

Si recibes un error de autenticación, verifica el reloj de tu teléfono. Ajústalo si es necesario, ya que un reloj no sincronizado puede ser la causa del error.

:::
