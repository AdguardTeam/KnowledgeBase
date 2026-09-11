---
title: '¿Qué es el filtrado HTTPS?'
sidebar_position: 1
---

### ¿Qué es HTTPS?

HTTPS (Protocolo seguro de transferencia de hipertexto) es una extensión del protocolo HTTP que admite el cifrado para aumentar la seguridad. Este protocolo se utiliza para transmitir de forma segura información valiosa, como datos personales, detalles de tarjetas de crédito, etc.

El uso de HTTPS es muy ventajoso porque el tráfico cifrado está protegido contra escuchas por parte de terceros, y esto solo puede ser positivo. La aceptación de HTTPS ha ido en aumento en los últimos años, principalmente porque [Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) lo [fomenta](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) y también debido a la aparición de la autoridad de certificación gratuita [Let's Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

El siguiente diagrama describe la diferencia entre el protocolo HTTP simple y el protocolo HTTPS seguro.

![¿Qué es HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### ¿Qué es un certificado de seguridad?

En pocas palabras, HTTPS significa cifrado de datos. Pero aún queda un problema: ¿cómo puedes estar seguro de haber establecido una conexión cifrada con el sitio web correcto? Aquí es donde entran en juego los certificados de seguridad. Un certificado sirve como prueba de que el sitio web es realmente quién o lo que dice ser. Si un sitio web no tiene dicho certificado, o si el certificado contiene información incorrecta, el navegador no te permitirá establecer una conexión segura. Es importante que el certificado que utiliza un sitio web sea emitido por una autoridad de certificación (CA) en la que tu navegador confíe. Una CA de este tipo garantiza que el certificado SSL se emite efectivamente al propietario del sitio web.

### ¿Por qué AdGuard necesita poder filtrar HTTPS?

La mayoría de los sitios web utilizan ahora HTTPS y lo mismo se aplica a la publicidad. Estos son algunos sitios web populares en los que no se pueden eliminar anuncios sin filtrado HTTPS: youtube.com, facebook.com y x.com.

### ¿Cómo funciona el filtrado HTTPS?

Si fuera fácil, HTTPS no sería tan seguro. Cuando un navegador intenta conectarse a un servidor, AdGuard establece dos conexiones seguras: una con el navegador (u otra aplicación) y otra con el servidor. El navegador debe confiar en AdGuard y en las conexiones que crea. Para ello, AdGuard genera un certificado raíz especial (y único) y lo instala en el sistema y, cuando es necesario, en algunos navegadores (por ejemplo, Firefox). AdGuard ahora puede ver los paquetes de datos dentro de la conexión segura y así realizar su trabajo: bloquear anuncios y rastreadores.

Para una mejor comprensión, hemos descrito este proceso:

![Cómo funciona el filtrado HTTPS](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### ¿Mi tráfico permanece cifrado y seguro?

¡Por supuesto! Tu conexión con un servidor remoto permanece cifrada y segura. AdGuard, al igual que un navegador, verifica el certificado del servidor antes de determinar si la conexión debe ser filtrada o no.

Sin embargo, el filtrado HTTPS tiene sus desventajas. La más importante es que oculta al navegador el certificado real del sitio web. En su lugar, el navegador ve el certificado emitido por AdGuard.

Por este motivo, hemos tomado medidas adicionales para mejorar la seguridad de la conexión.

### Sitios web financieros y sitios web con datos personales confidenciales

De forma predeterminada, AdGuard no filtra ninguna información sobre sitios web de bancos, sistemas de pago o sitios web con datos personales valiosos. Mantenemos una lista de [miles de exclusiones](https://github.com/AdguardTeam/HttpsExclusions).

Si crees que algún sitio web debería agregarse a esta lista, por favor [háganoslo saber](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certificados de Validación Extendida (EV)

AdGuard te permite desactivar el filtrado para todos los sitios web que utilizan certificados de validación extendida.

Un certificado EV ofrece un mayor nivel de seguridad y proporciona más garantías que un certificado normal, demostrando que el sitio web no es fraudulento ni falso.

### Problemas relacionados con el filtrado HTTPS

Un [estudio de 2017](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) mostró que entre el 5 y el 10% de las conexiones HTTPS se establecieron mediante aplicaciones de filtrado HTTPS. Generalmente esto lo hacen varios tipos de software antivirus. La mala noticia es que 24 de los 26 antivirus probados redujeron, de diversas maneras, el nivel de seguridad de la conexión, mientras que dos tercios crearon conexiones propensas a ser pirateadas.

Los investigadores llegaron a una conclusión simple: la comunidad de seguridad de Internet debería prestar mucha atención a las aplicaciones que filtran conexiones seguras. Y los desarrolladores de dicho software deben prestar mucha atención a la calidad de las implementaciones de filtrado.

Nos gustaría señalar que AdGuard no fue probado en el estudio mencionado anteriormente. Realizamos estimaciones de acuerdo con su conjunto de pruebas y, en el momento de la prueba, podríamos haber recibido la puntuación máxima: A\*. Sin embargo, esta puntuación no es perfecta. Durante el estudio, los investigadores identificaron algunas cuestiones que se omitieron en la evaluación final.

Aquí en AdGuard, estamos totalmente de acuerdo con esas conclusiones. Además, nos gustaría ser lo más abiertos posible con los usuarios y hablar sobre los problemas que estamos experimentando actualmente y los pasos que estamos tomando para mejorar la calidad y la seguridad del mecanismo de filtrado. La lista de estos problemas está ordenada por prioridad.

La mayoría de los problemas descubiertos en el estudio anterior están relacionados con los mecanismos de validación de certificados. Esto es en lo que queremos centrarnos primero. Estamos trabajando en una biblioteca de validación de certificados independiente. Además, queremos que sea de código abierto. Nuestro [artículo](../known-issues) enumera todos los inconvenientes conocidos del filtrado HTTPS en AdGuard y nuestros planes para solucionarlos.

#### Problemas de filtrado HTTPS en Android 7+

[A partir de Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), los desarrolladores tienen que indicar explícitamente que sus aplicaciones confían en los certificados instalados por el usuario. No todo el mundo quiere hacerlo. ¿Qué significa esto para AdGuard? AdGuard instala un certificado de usuario para poder filtrar el tráfico HTTPS. Si una aplicación no confía en este certificado, su tráfico HTTPS no se filtrará. Qué hacer?

Lo primero que vale la pena mencionar es que muchas aplicaciones (incluso las modernas) todavía confían en los certificados de usuario. Nada ha cambiado a este respecto. Casi todos los navegadores también confían en este tipo de certificados. Puede haber algunos navegadores exóticos que no lo hagan, pero son una rara excepción a la práctica común.

Por último, si tu dispositivo está rooteado, puedes mover el certificado de AdGuard al almacenamiento del sistema. De esta manera, no tendrás que preocuparte por los permisos que pueda tener o no una aplicación en particular: el tráfico HTTPS se filtrará tanto para las aplicaciones modernas como para las más antiguas. Ten en cuenta que, en este caso, se aplican algunas restricciones de seguridad adicionales (por ejemplo, HPKP o `Expect-CT`) a AdGuard.

### ¿Cómo comprobar manualmente la calidad del protocolo HTTPS?

Hay varios sitios web dedicados donde puedes comprobar la calidad de tu conexión HTTPS. Estos sitios web verifican si tu navegador (o, en nuestro caso, tu navegador más AdGuard) es susceptible a vulnerabilidades comunes. Si planeas utilizar algún programa que filtre HTTPS, no necesariamente AdGuard (por ejemplo, un antivirus), te recomendamos que verifiques la calidad de la conexión utilizando estos sitios web.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
