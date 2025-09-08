---
title: Problemas conhecidos do AdGuard para Windows
sidebar_position: 11
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemas de compatibilidade do AdGuard para Windows e AdGuard VPN para Windows

Depois de instalar o AdGuard para Windows e o AdGuard VPN para Windows, eles simplesmente começarão a trabalhar juntos sem nenhum esforço de sua parte. No entanto, alterar algumas de suas configurações padrão pode fazer com que os aplicativos funcionem incorretamente quando executados ao mesmo tempo.

Existem duas configurações específicas no AdGuard para Windows: *Usar modo de driver de redirecionamento* e *Filtrar localhost*. Por padrão, o primeiro está desativado e o segundo está ativado. A alteração de qualquer uma dessas configurações interromperá inevitavelmente a filtragem do AdGuard se o AdGuard Ad Blocker e o AdGuard VPN estiverem ativados no seu dispositivo.

A alteração dessas configurações só é necessária para resolver problemas relacionados à operação simultânea do bloqueador de anúncios AdGuard e de aplicativos de nível de rede, como antivírus, VPNs e filtros de rede. Se você se deparar com uma situação em que precisa alterar o estado padrão das configurações acima e ainda quiser que o bloqueador de an[uncios AdGuard e o AdGuard VPN funcionem simultaneamente e corretamente, [crie um problema no GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) para que possamos ajudá-lo pessoalmente.

No momento, estamos trabalhando para superar as limitações referentes ao funcionamento simultâneo de nossos aplicativos mencionadas acima.
