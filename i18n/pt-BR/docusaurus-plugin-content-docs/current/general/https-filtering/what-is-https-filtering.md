---
title: O que é filtragem HTTPS
sidebar_position: 1
---

### O que é HTTPS?

HTTPS (HyperText Transfer Protocol Secure) é uma extensão do protocolo HTTP que suporta criptografia para aumentar a segurança. Este protocolo é usado para transmitir com segurança informações valiosas, como dados pessoais, detalhes de cartão de crédito, etc.

Usar HTTPS é altamente vantajoso porque o tráfego criptografado é protegido contra espionagem por terceiros. A aceitação do HTTPS vem crescendo nos últimos anos, principalmente porque é [incentivado pelo Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) e também devido ao surgimento da autoridade de certificação gratuita [Let's Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

O diagrama abaixo descreve a diferença entre o protocolo HTTP simples e o protocolo HTTPS seguro.

![O que é HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### O que é um certificado de segurança?

Simplificando, HTTPS significa criptografia de dados. Mas ainda há um problema: como ter certeza de que você estabeleceu uma conexão criptografada com o site certo? É aí que os certificados de segurança entram em jogo. Um certificado serve como prova de que o site é realmente quem ou o que afirma ser. Se um site não tiver esse certificado ou se o certificado contiver informações incorretas, o navegador não permitirá que você estabeleça uma conexão segura. É importante que o certificado usado por um site seja emitido por uma autoridade de certificação (CA) confiável para seu navegador. Essa CA garante que o certificado SSL foi, de fato, emitido para o proprietário do site.

### Por que o AdGuard precisa filtrar HTTPS?

A maioria dos sites agora usa HTTPS, e o mesmo se aplica à publicidade. Aqui estão alguns sites populares onde você não pode remover anúncios sem filtragem HTTPS: youtube.com, facebook.com e x.com.

### Como funciona a filtragem HTTPS?

Se fosse fácil, o HTTPS não seria tão seguro. Quando um navegador tenta se conectar a um servidor, o AdGuard estabelece duas conexões seguras: uma com o navegador (ou outro aplicativo) e a outra com o servidor. O navegador deve confiar no AdGuard e nas conexões que ele cria. Para isso, o AdGuard gera um certificado raiz especial (e único) e o instala no sistema e, quando necessário, em alguns navegadores (por exemplo, Firefox). O AdGuard agora pode ver os pacotes de dados dentro da conexão segura e, assim, fazer seu trabalho: bloquear anúncios e rastreadores.

Para melhor compreensão, descrevemos este processo:

![Como funciona a filtragem HTTPS](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Meu tráfego permanece criptografado e seguro?

Claro! Sua conexão com um servidor remoto permanece criptografada e segura. O AdGuard, assim como um navegador, verifica o certificado do servidor antes de determinar se a conexão deve ou não ser filtrada.

No entanto, a filtragem HTTPS tem suas desvantagens. O mais importante é que ele oculta o certificado real do site do navegador. Em vez disso, o navegador vê o certificado emitido pelo AdGuard.

Por isso, tomamos medidas adicionais para melhorar a segurança da conexão.

### Sites financeiros e sites com dados pessoais sensíveis

Por padrão, o AdGuard não filtra nenhuma informação em sites de bancos, sistemas de pagamento ou sites com dados pessoais valiosos. Mantemos uma lista de [milhares de exclusões](https://github.com/AdguardTeam/HttpsExclusions).

Se você acredita que algum site deve ser adicionado a esta lista, por favor [nos avise](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certificados de Validação Estendida (EV)

O AdGuard permite que você desative a filtragem de todos os sites que usam certificados de validação estendida.

Um certificado EV oferece um nível maior de segurança e fornece mais garantias do que um certificado comum, provando que o site não é fraudulento ou falso.

### Problemas relacionados à filtragem HTTPS

Um [estudo de 2017](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) mostrou que 5 a 10% das conexões HTTPS foram estabelecidas por aplicativos de filtragem HTTPS. Geralmente isso é feito por vários tipos de software antivírus. A má notícia é que 24 dos 26 antivírus testados reduziram, de várias maneiras, o nível de segurança da conexão, enquanto dois terços criaram conexões propensas a hackers.

Os pesquisadores chegaram a uma conclusão simples: a comunidade de segurança da Internet deve prestar muita atenção aos aplicativos que filtram conexões seguras. E os desenvolvedores desse software devem prestar muita atenção à qualidade das implementações de filtragem.

Gostaríamos de observar que o AdGuard não foi testado no estudo acima. Fizemos estimativas de acordo com o conjunto de testes deles e, no momento do teste, poderíamos ter recebido a pontuação máxima — A\*. Entretanto, essa pontuação não é perfeita. Durante o estudo, os pesquisadores identificaram algumas questões que foram omitidas na avaliação final.

Aqui no AdGuard, concordamos plenamente com essas conclusões. Além disso, gostaríamos de ser o mais abertos possível com os usuários e falar sobre os problemas que estamos enfrentando atualmente e as medidas que estamos tomando para melhorar a qualidade e a segurança do mecanismo de filtragem. A lista desses problemas é classificada por prioridade.

A maioria dos problemas descobertos no estudo acima estão relacionados aos mecanismos de validação de certificados. É nisso que queremos focar primeiro. Estamos trabalhando em uma biblioteca separada de validação de certificados. Além disso, queremos torná-lo de código aberto. Um [artigo separado](../known-issues) lista todas as desvantagens conhecidas da filtragem HTTPS no AdGuard e nossos planos para corrigi-las.

#### Problemas de filtragem HTTPS no Android 7+

[A partir do Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), os desenvolvedores precisam indicar explicitamente que seus aplicativos confiam em certificados instalados pelo usuário. Nem todo mundo quer ou se importa com isso. O que isso significa para o AdGuard? O AdGuard instala um certificado de usuário para poder filtrar o tráfego HTTPS. Se um aplicativo não confiar neste certificado, seu tráfego HTTPS não será filtrado. O que fazer?

A primeira coisa que vale a pena mencionar é que muitos aplicativos (mesmo os modernos) ainda confiam nos certificados do usuário. Nada mudou com relação a isso. Quase todos os navegadores também confiam nesses certificados. Pode haver alguns navegadores que não o fazem, mas eles são uma rara exceção à prática comum.

Por fim, se o seu dispositivo estiver enraizado, você pode mover o certificado do AdGuard para o armazenamento do sistema. Dessa forma, você não precisa se preocupar com permissões que um aplicativo específico pode ou não ter — o tráfego HTTPS será filtrado para aplicativos modernos e também para os mais antigos. Tenha em mente que, neste caso, algumas restrições de segurança adicionais (por exemplo, HPKP ou `Expect-CT`) se aplicam ao AdGuard.

### Como verificar manualmente a qualidade do HTTPS?

Existem vários sites dedicados onde você pode verificar a qualidade da sua conexão HTTPS. Esses sites verificam se seu navegador (ou, no nosso caso, seu navegador mais o AdGuard) é suscetível a vulnerabilidades comuns. Se você planeja usar qualquer programa que filtre HTTPS, não necessariamente o AdGuard (por exemplo, um antivírus), recomendamos que verifique a qualidade da conexão usando esses sites.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
