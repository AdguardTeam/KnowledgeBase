---
title: Gerenciamento de aplicativos
sidebar_position: 1
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

Na seção _Gerenciamento de apps_, você pode gerenciar as configurações de roteamento e filtragem para todos os apps instalados no seu dispositivo.

Uma vez que o AdGuard detecta que um aplicativo está online, ele é automaticamente adicionado ao _Gerenciamento de aplicativos_, e seu tráfego é roteado através do AdGuard.

Por padrão, o AdGuard filtra todo o tráfego, mas você pode escolher o que excluir.

O AdGuard também filtra o tráfego HTTPS, pois a maioria dos sites hoje utiliza HTTPS. Isto é especialmente importante para bloquear anúncios em sites como youtube.com, facebook.com e x.com, onde é impossível remover anúncios sem filtragem HTTPS.

Quando o roteamento e a filtragem estão ativados para um aplicativo, os ícones abaixo de cada aplicativo aparecerão em verde.

Você pode deixar as configurações como estão, desativar tanto a filtragem quanto o roteamento, ou ajustá-los manualmente para cada aplicativo. Você também pode acessar as estatísticas do aplicativo.

![Estatísticas do aplicativo](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Como funcionam a filtragem e o roteamento de aplicativos no AdGuard para Windows v8.0

O AdGuard para Windows v8.0 introduz lógica atualizada para gerenciamento de aplicativos. Isso ajuda a evitar problemas de compatibilidade, ao mesmo tempo que oferece controle sobre quais aplicativos são filtrados. Vamos detalhar como isso funciona.

Existem aplicativos “sem problemas” e “problemáticos”. Alguns aplicativos são considerados "problemáticos" e podem não funcionar corretamente quando roteados pelo AdGuard. É por isso que você poderá ver o seguinte aviso ao tentar rotear ou realizar a filtragem em todos os aplicativos:

Para evitar que aplicativos parem de funcionar logo de início, o AdGuard não filtra tudo indiscriminadamente. Em vez disso, ele depende de uma lista de compatibilidade — um conjunto de aplicativos que são conhecidos por funcionar corretamente com a filtragem ativada.

:::note

“Não filtrar tudo” não significa “não filtrar nada.” Aplicativos confiáveis (como navegadores) são sempre filtrados.

:::

Cada aplicativo possui três camadas de processamento independentes: roteamento de tráfego pelo AdGuard, filtragem (bloqueio de anúncios e rastreadores) e filtragem HTTPS (interceptação de tráfego criptografado).

Eles são determinados por três fontes:

- _Lista de compatibilidade_

  Aplicativos que foram testados pela nossa equipe e confirmados como funcionando corretamente com a filtragem.
  Esta lista é atualizada por meio de testes internos e relatórios de usuários no [repositório dedicado para listar problemas de compatibilidade do AdGuard](https://github.com/AdguardTeam/CompatibilityIssues).

- _Listas de exclusões_

  Listas separadas para roteamento, filtragem e filtragem de HTTPS. Isso inclui aplicativos conhecidos por falharem quando a filtragem é aplicada.

- _Filtrar aplicativos desconhecidos_

  Esta configuração define como todos os outros aplicativos (não presentes em nenhuma lista) são tratados.

:::info

As listas de compatibilidade são continuamente atualizadas, e você pode ajudar a melhorá-las. Se você perceber que um aplicativo não funciona corretamente com a filtragem ativada, **relate isso no [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** ou entre em contato com o suporte pelo aplicativo. Seu feedback ajuda a melhorar o AdGuard para todos.

:::

## Filtrar aplicativos desconhecidos

![Filtrar aplicativos desconhecidos \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

A configuração _Filtrar apps desconhecidos_ está ativada por padrão e determina como o AdGuard lida com novos apps que ainda não estão presentes nas listas de compatibilidade ou de exclusão

Quando ativado, o tráfego do aplicativo é roteado pelo AdGuard, a filtragem regular é aplicada e **a filtragem HTTPS NÃO é ativada automaticamente**. Isso é intencional: a interceptação HTTPS é a parte mais sensível do processamento de tráfego e pode afetar o comportamento do aplicativo.

Quando desativado, novos aplicativos não são processados pelo AdGuard — você precisará configurar manualmente o roteamento para eles.

Aqui está uma visão geral rápida de como diferentes categorias de aplicativos se comportam dependendo desta configuração:

| Categoria do aplicativo                                                                    | Ativar (padrão)                             | Desativar                                                 |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------- |
| Compatível, ou sem problemas (por exemplo, navegadores)                 | · Roteamento ✅ <br /> · Filtragem ✅ <br /> · Filtragem HTTPS ✅ | Mesmo comportamento — não depende de alternar             |
| Problemático (de listas de exclusão, a filtragem pode causar problemas) | · Roteamento ❌ <br /> · Filtragem ❌ <br /> · Filtragem HTTPS ❌ | Mesmo comportamento — não depende de alternar             |
| Outros / (recém-detectados, desconhecidos, não presentes nas listas)    | · Roteamento ✅ <br /> · Filtragem ✅ <br /> · Filtragem HTTPS ❌ | Não roteado pelo AdGuard, deve ser habilitado manualmente |

:::info O que acontece ao redefinir

Se você clicar em **Redefinir para o padrão**, duas coisas acontecem:

1. Todas as permissões específicas do aplicativo são limpas (definidas como “não configurado”).
2. Regras predefinidas são aplicadas a aplicativos conhecidos como seguros (como navegadores), incluindo filtragem de HTTPS.

:::
