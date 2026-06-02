---
title: Configurações avançadas
sidebar_position: 4
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

A seção _Configurações Avançadas_ contém opções que vão além do que a maioria dos usuários geralmente precisa. O AdGuard para Windows funciona perfeitamente pronto para uso, mas estas configurações podem ser úteis em casos especiais ou para solução de problemas.

:::caution

Alterar configurações avançadas sem entendê-las pode causar problemas de desempenho, interromper sua conexão com a Internet ou afetar sua segurança e privacidade. Modifique-os apenas se você souber o que está fazendo ou se for instruído pela nossa equipe de suporte.

:::

## Exclua o aplicativo da filtragem inserindo o caminho completo

Se você quiser que o AdGuard ignore a filtragem de um aplicativo específico, insira o caminho completo do arquivo aqui. Você pode adicionar vários aplicativos separando seus caminhos com ponto e vírgula.

## Ativar notificações de pop-ups do AdGuard

Ative este recurso para ver as pop-ups de notificações do AdGuard. Elas não aparecem com muita frequência e contêm apenas informações importantes. Você também pode reabrir a notificação mais recente pelo menu da bandeja.

## Interceptar automaticamente URLs de inscrição de filtros

Quando ativado, o AdGuard detectará automaticamente links de assinatura de filtros (como `abp:subscribe`) e abrirá uma janela para ajudar você a adicioná-los aos seus filtros.

## Usar modo de redirecionamento de driver

Com essa opção ativada, o AdGuard redireciona todo o seu tráfego para um servidor proxy local para filtragem.

Se estiver desativado, o AdGuard filtra o tráfego diretamente, sem redirecioná-lo. Nesse modo, o Windows vê o AdGuard como o único aplicativo se conectando à Internet, já que todos os outros aplicativos passam por ele. Isso pode melhorar ligeiramente o desempenho, mas pode reduzir a eficácia do firewall do sistema.

## Abrir o AdGuard na inicialização do sistema

Ative esta opção para iniciar a janela do AdGuard automaticamente quando o seu PC iniciar.

## Ativar filtragem na inicialização do sistema

Desde a versão 7.12, o AdGuard não começa a filtrar o tráfego automaticamente após você iniciar o seu PC, a menos que a opção _Iniciar o AdGuard na inicialização do sistema_ esteja ativada. Em vez disso, ele opera em um modo passivo "ocioso".

Ao ativar isso, o AdGuard pode filtrar o tráfego imediatamente, mesmo que o aplicativo ainda não tenha sido aberto.

## Filtrar localhost

Ative isto para permitir que o AdGuard filtre o tráfego de loopback (localhost), que alguns aplicativos usam para se comunicar dentro do sistema. Se o AdGuard VPN estiver instalado, esta configuração estará sempre ativada, pois a VPN precisa disso para funcionar corretamente.

## Capturar HAR

Isso é apenas para depuração. Quando ativado, o AdGuard criará um arquivo HAR (formato HTTP Archive 1.2) com informações detalhadas sobre todas as solicitações filtradas. Você pode abri-lo em aplicativos como o Fiddler.

Tenha em mente: isso pode tornar sua navegação mais lenta.

## Mostrar QUIC no registro de filtragem

Quando ativado, o AdGuard incluirá o tráfego do protocolo QUIC no log de filtragem — mas apenas para requisições bloqueadas.

## Bloquear Java

Alguns sites ainda usam plug-ins do Java, que dependem de tecnologia desatualizada e insegura. Você pode desativar esses plug-ins por segurança.

Usar a opção _Bloquear Java_ não afeta o JavaScript — ele permanecerá habilitado.

## Modo de bloqueio para regras de DNS

Escolha como o AdGuard responde quando um domínio é bloqueado por uma regra de DNS baseada na [sintaxe estilo hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Retornar um erro `REFUSED`
- Retornar um erro `NXDOMAIN`
- Retornar um endereço IP personalizado

### Endereço IPv4 personalizado

Se _Endereço IP personalizado_ estiver selecionado em _Modo de bloqueio para regras de DNS_, este endereço IP será retornado em resposta a consultas do tipo A bloqueadas. Se nenhum for especificado, o AdGuard responderá com o erro REFUSED padrão.

### Endereço IPv6 personalizado

Se _Endereço IP personalizado_ estiver selecionado em _Modo de bloqueio para regras de DNS_, este endereço IP será retornado em resposta a solicitações AAAA bloqueadas. Se nenhum for especificado, o AdGuard responderá com o erro REFUSED padrão.

## Servidores Fallback

Configure servidores DNS de backup aqui. O AdGuard os usará se o servidor DNS principal não responder dentro do tempo limite que você definiu. Você pode:

- Use os servidores DNS padrão do seu sistema
- Adicionar servidores de fallback personalizados
- Ou optar por não usar servidores de fallback de forma alguma

## Tempo limite do servidor DNS

Especifique por quanto tempo (em milissegundos) o AdGuard deve aguardar uma resposta DNS antes de alternar para um servidor de fallback. Se deixado vazio ou inválido, o valor padrão é 5000 ms (5 segundos).

## Endereços de bootstrap personalizados

Um bootstrap é um servidor DNS intermediário usado para obter o endereço IP do servidor DNS seguro que você escolheu anteriormente na proteção DNS. Esse "meio-termo" é necessário ao usar protocolos que indicam o endereço do servidor por letras (como DNS-over-TLS, por exemplo). Nesse caso, o bootstrap atua como um tradutor, transformando as letras em números que o seu sistema pode entender.

Mas, se necessário, você pode especificar diferentes endereços IP aqui — eles serão tentados na ordem de cima para baixo. Se nenhum funcionar ou nada for inserido, o AdGuard recorrerá às configurações padrão do sistema.

## Exclusões de DNS

Os domínios listados aqui ignoram os servidores DNS do AdGuard. As solicitações deles passam pelo resolvedor padrão do sistema, e o AdGuard não aplica nenhuma regra de bloqueio a elas.
