---
title: Integração com AdGuard VPN
sidebar_position: 6
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard para Android cria uma VPN local para filtrar o tráfego. Assim, outros aplicativos VPN não podem ser usados enquanto o AdGuard para Android estiver em execução. No entanto, os aplicativos AdGuard e [AdGuard VPN](https://adguard-vpn.com/) têm modos integrados que permitem usá-los juntos.

Neste modo, o AdGuard VPN atua como um servidor proxy de saída pelo qual o Bloqueador de anúncios AdGuard roteia seu tráfego. Isso permite que o AdGuard crie uma interface VPN e bloqueie anúncios e rastreadores localmente, enquanto o AdGuard VPN roteia todo o tráfego por meio de um servidor remoto.

Se você desativar o AdGuard VPN, o AdGuard deixará de usá-lo como um proxy de saída. Se você desativar o AdGuard, o AdGuard VPN roteará o tráfego por meio de sua própria interface VPN.

Se você tiver o Bloqueador de anúncios do AdGuard e instalar o AdGuard VPN, o aplicativo Bloqueador de anúncios detectará e ativará _Integração com o VPN do AdGuard_ automaticamente. O mesmo acontece se você fizer o contrário. Observe que, se você tiver ativado a integração, não poderá gerenciar exclusões de aplicativos e conectar-se a servidores DNS a partir do aplicativo AdGuard VPN. Você pode especificar aplicativos a serem roteados através de seu túnel VPN em _Configurações_ → _Filtragem_ → _Rede_ → _Proxy_ → _Aplicativos operando por meio de proxy_. Para selecionar um servidor DNS, abra AdGuard → _Proteção_ → _Proteção DNS_ → _Servidor DNS_.
