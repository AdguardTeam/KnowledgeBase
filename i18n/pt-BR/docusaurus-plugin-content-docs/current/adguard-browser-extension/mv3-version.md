---
title: Extensão de navegador AdGuard para Chrome MV3
sidebar_position: 5
---

Como as extensões MV2 estão sendo eliminadas gradualmente na Chrome Web Store, os usuários do Chrome talvez precisem mudar para extensões MV3 compatíveis com a nova API do Manifest V3 do Chrome. Nossos pensamentos sobre esse tópico são amplamente discutidos em [nosso blog](https://adguard.com/pt_br/blog/tag/manifest-v3.html).

Nossa extensão MV3 bloqueia anúncios e rastreadores de forma eficaz, além de gerenciar perfeitamente widgets sociais, banners e anúncios em vídeo. A maioria dos usuários não notará nenhuma diferença operacional, mas há algumas limitações e mudanças que você precisa conhecer.

## Onde encontrar nossas extensões

A **versão MV3** substituiu nossa antiga extensão na [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

A **versão beta do MV3** ainda estará disponível na [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

A antiga extensão beta será renomeada para [**Bloqueador de anúncios AdGuard MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) e terá suporte até que o Google a desative.

## Principais alterações nos recursos e configurações

- **Nenhuma atualização automática ou manual de filtros.** As opções _Atualizar filtros automaticamente_ e _Verificar atualização de filtros_ não estão mais disponíveis na aba _Filtros_. Como algumas das regras agora são aplicadas na forma de DNR, não podemos atualizar os filtros por solicitação, somente por meio do processo completo de atualização da extensão junto com a revisão nas lojas.

- **Registro de filtragem**

  ![Registro de filtragem \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Devido às restrições do DNR, não podemos mostrar exatamente qual regra funcionou, mas forneceremos uma “regra presumida que foi acionada” com base em nosso mecanismo. Para obter informações precisas, você precisará instalar o formato “descompactado” da extensão no seu navegador. Você encontrará instruções detalhadas sobre como fazer isso em um [artigo separado](/adguard-browser-extension/solving-problems/debug-rules/).

- _Proteção de rastreamento_ (anteriormente conhecido como _Modo furtivo_)

  ![Proteção contra rastreamento \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  Não há nenhuma seção _Cookies_, juntamente com _Autodestruição de cookies primários_ e _Autodestruição de cookies de terceiros_, pois não podemos definir o TTL dos cookies usando regras declarativas.

- _Proteção contra phishing e malware_ não está mais disponível nas configurações gerais. Para se proteger de sites maliciosos e golpes, ative os filtros de _Segurança_ apropriados na aba _Filtros_.

  ![Segurança \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitações

### Número máximo de regras e filtros

O Manifest V3 impõe limites em regras estáticas e regex por extensão. Os usuários podem receber notificações quando esses limites forem excedidos.

![Limites de regras \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Muitas extensões \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Basicamente, o Manifest V3 divide as regras em estáticas (integradas) e dinâmicas, com limites rígidos.

**Regras estáticas:** mínimo de **30.000** regras por extensão, com um limite cumulativo de **330.000** para todas as extensões instaladas por um único usuário.

Para regras regex, o limite é definido como **1.000 por extensão**.

O número máximo de filtros ativados simultaneamente é **50**.

**Regras dinâmicas:** é imposto um limite estrito de **5.000** regras, que inclui um máximo de 1.000 regras regex.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules and finally Custom filters.

> **Regras convertidas** são regras que foram transformadas
> para o \[formato DNR] usando o [conversor declarativo][github-declarative-converter].
> Durante esse processo de conversão, algumas regras podem substituir outras (`$badfilter`), algumas podem ser combinadas (`$removeparam`),
> resultando em uma lista de regras com uma ordem ligeiramente diferente.
>
> Dessa lista de regras convertidas, usaremos apenas 5.000 regras. Os demais serão exibidos no editor, mas não serão aplicados.

Veja como uma regra com um modificador básico é convertida em uma regra declarativa:

```adblock
||example.org^$script,third-party,domain=example.com
```

é convertido para

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Mais exemplos podem ser encontrados no [GitHub][github-declarative-converter-examples].

### Modificadores de regras de rede

Os modificadores de regras de rede têm limitações: alguns deles não podem ser implementados no MV3 ou só podem ser implementados com restrições.

Mais detalhes sobre as limitações podem ser encontrados no [GitHub][github-declarative-converter].
Para obter mais informações sobre modificadores, consulte nossa [Base de conhecimento](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
