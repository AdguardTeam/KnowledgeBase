---
title: Como habilitar a filtragem de todo o sistema no AdGuard para iOS
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para iOS, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona em primeira mão, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## Sobre a filtragem em todo o sistema

A filtragem em todo o sistema permite o bloqueio de anúncios e rastreadores além do navegador Safari, ou seja, em outros aplicativos e navegadores. Este artigo explicará como ativá-lo em seu dispositivo iOS.

No iOS, a única maneira de bloquear anúncios e rastreadores em todo o sistema é usar a [Filtragem DNS](https://adguard-dns.io/kb/general/dns-filtering/).

Primeiro, você precisa ativar a proteção de DNS. Para isso:

1. Abra o *AdGuard para iOS*.
2. Toque no ícone *Proteção* (o segundo ícone na barra de menu inferior).
3. Ative a *Proteção DNS*.

![Tela de proteção DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

No entanto, se o seu objetivo é bloquear anúncios e rastreadores em todo o sistema, você tem três opções:

 1. Usar o filtro do AdGuard DNS (*Proteção* (o ícone de escudo no menu inferior) → *Proteção DNS* → *Filtragem de DNS* → *Filtros DNS* → *Filtro do AdGuard DNS*).
 2. Use o servidor do AdGuard DNS (*Proteção* (o ícone de escudo no menu inferior) → *Proteção DNS* → *Servidor DNS* → *AdGuard DNS*) ou outro servidor DNS de bloqueio de sua preferência.
 3. Adicione um arquivo de filtro/hosts DNS personalizado de acordo com sua preferência.

A primeira e a terceira opções têm várias vantagens:

- Você pode usar qualquer servidor DNS a seu critério. Você não precisa usar um servidor de bloqueio específico, pois o filtro é responsável pelo bloqueio.
- Você pode adicionar vários filtros DNS e/ou arquivos hosts (embora usar muitos possa tornar o AdGuard lento).

![Como funciona a filtragem de DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Como adicionar um arquivo de filtro/hosts de DNS personalizado

Você pode adicionar qualquer filtro DNS ou arquivo de hosts que desejar.

Para fins de exemplo, vamos adicionar a [OISD Blocklist Big](https://oisd.nl/).

1. Copie este link: `https://big.oisd.nl` (é um link para o filtro OISD Blocklist Big)
2. Abra *Proteção* (o ícone de escudo no menu inferior) → *Proteção de DNS* → *Filtragem de DNS* → *Filtros de DNS*.
3. Toque em *Adicionar um filtro*.
4. Cole o link no campo URL do filtro.
5. Toque em *Próximo* → *Adicionar*.

![Adicionando uma tela de filtro DNS *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Adicione qualquer número de outros filtros DNS da mesma maneira, colando um URL diferente na etapa 4. Você pode encontrar vários filtros e links para eles [aqui](https://filterlists.com).
