---
title: Domínio local.adguard.org
sidebar_position: 3
---

Usuários do AdGuard para Windows, Mac e Android podem notar que o AdGuard adiciona um pequeno script a cada página da web, que é carregado do domínio `local.adguard.org`.

Primeiro, não se preocupe, este não é um domínio real e, na verdade, não há nenhum servidor real com esse nome. Este domínio é usado para aplicar filtragem cosmética a páginas da web, mas tudo é feito localmente no seu dispositivo, sem conexão a nenhum servidor.

### Explicação técnica

Mas o que está acontecendo e por que isso é feito? Leia a explicação técnica abaixo.

1. O AdGuard é um bloqueador de conteúdo em nível de rede, portanto, ele não é capaz de simplesmente adicionar JavaScript e CSS personalizados a páginas da web como as extensões do navegador fazem. No entanto, isso é crucial para bloquear conteúdo com qualidade.
2. Para isso, o AdGuard injeta um "script de conteúdo" parecido com este: `<script src="https://local.adguard.org/.../content-script.js">`. Este "script de conteúdo" cuida da filtragem cosmética, ocultando ou removendo conteúdo de anúncios das páginas da web.
3. As conexões com o endereço IP do domínio `local.adguard.org` são interceptadas pelo AdGuard no nível de rede e **processadas localmente**. É por isso que esse domínio tem um endereço IP "estático" que não muda por anos.

**Por que precisamos usar um endereço IP real para isso?**

- Não podemos usar `127.0.0.1` porque os navegadores não o aceitarão.
- É possível usar alguns endereços IP de sub-redes privadas, mas essa solução tem duas desvantagens.
    - Primeiro, há uma pequena chance de intersecção com um serviço de intranet existente e interromper o acesso a ele.
    - Em segundo lugar, alguns servidores DNS podem considerar isso um ataque de revinculação de DNS e se recusar a responder a `local.adguard.org`.

### Verificação

Isso é fácil de verificar. Se você desabilitar o AdGuard, verá que é simplesmente impossível estabelecer conexão com `local.adguard.org`, pois não há servidor com esse endereço. Tente abri-lo no seu navegador quando o AdGuard estiver desativado.
