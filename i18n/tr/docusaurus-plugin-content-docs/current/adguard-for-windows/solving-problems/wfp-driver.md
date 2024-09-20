---
title: WFP sürücüsü
sidebar_position: 1
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Ağ trafiğini filtrelemek için AdGuard bir ağ sürücüsü kullanır. İki seçenek vardır: TDI sürücüsü ve WFP sürücüsü. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. Bu sorunlar ve sonraki hatalar her durumda çok farklı olabilir.

If you encounter a problem that you suspect might be caused by this, you can always switch to the older but more stable TDI network driver. Bunu yapmak için:

1. *Ayarlar → Ağ* öğesine gidin.

2. Disable the WFP driver as it’s done in this picture:

![WFP sürücüsü *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
