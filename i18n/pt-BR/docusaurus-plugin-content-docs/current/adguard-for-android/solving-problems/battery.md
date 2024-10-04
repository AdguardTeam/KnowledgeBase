---
title: Problemas de consumo de bateria e tráfego
sidebar_position: 1
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Devido aos processos estatísticos integrados, o alto consumo de dados e/ou bateria era frequentemente atribuído ao AdGuard no Android 6 e versões anteriores. Isso ocorreu porque o AdGuard contabilizou todo o tráfego filtrado de vários aplicativos. Como resultado, a participação do AdGuard no uso total de dados e bateria foi exagerada, enquanto outros aplicativos foram subestimados.

No entanto, com o Android 7 esse cenário melhorou. Agora, os dados refletidos nas estatísticas de uso de dados integradas do Android estão muito próximos da realidade, embora haja pequenas discrepâncias nos dados de uso da bateria.

No entanto, os usuários do AdGuard podem ter uma visão real da situação sempre que quiserem na tela *Uso da bateria*.

### Tela de estatísticas da bateria

Acesse-a ao navegar até *Estatísticas* → *Uso da bateria*.

![Estatísticas da bateria *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Dentro dele, você encontrará um gráfico que mostra o consumo de recursos da bateria do AdGuard nas últimas 24 horas, com uma opção para obter dados mais detalhados de hora em hora tocando no gráfico. Além disso, há também uma análise numérica dos dados relevantes e uma breve explicação técnica.

### Quanto da bateria o AdGuard realmente consome?

Primeiro, vamos estabelecer um pouco de teoria e links com os dados necessários.

1. O Android deriva o consumo de tráfego julgando o chamado Power Profile fornecido por cada fabricante: <https://source.android.com/devices/tech/power/values.html>

1. A principal parte do Power Profile é um conjunto de valores em mAh que define o consumo da bateria para cada componente do dispositivo: <https://source.android.com/devices/tech/power/values.html>

    Por exemplo, da tabela acima:

    *wifi.active=* Consumo adicional de 31 mA em mAh causado pela troca de dados WiFi.

    *radio.active=* Consumo adicional de 100-300 mA em mAh causado pela troca de dados pela rede móvel.

    *cpu.active=* 100-200mA consumo adicional em mAh causado pela carga da CPU.

1. O AdGuard por si só quase não consome tráfego, então, para avaliar o consumo de energia, vamos nos livrar dos "Pacotes móveis/Wi-Fi" e nos ater à "CPU".

    Fórmula usada para calcular o consumo:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    Vamos colocar números reais nesta fórmula.

    Vamos pegar *o total da CPU* da segunda captura de tela e converter em milissegundos: 506000

    Um coeficiente *cpu.active* para 2 Ghz será aproximadamente igual a 225mAh

    Resultado final:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Conclusão

O real consumo é **bem menor** do que o exibido nas estatísticas do Android. Ao invés de 200mAh, este deve estar em torno de 31-40mAh. Por outro lado, o consumo do navegador não deve ser de 66mAh, mas sim de ~200mAh.
