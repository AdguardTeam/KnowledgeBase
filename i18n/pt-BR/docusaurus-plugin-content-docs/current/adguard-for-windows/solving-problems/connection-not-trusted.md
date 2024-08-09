---
title: Questões relacionadas a certificados
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder filtrar o tráfego HTTPS e bloquear anúncios e rastreadores com eficiência, o AdGuard gera um certificado root especial (e exclusivo) e o instala no armazenamento do sistema. Você pode aprender mais sobre por que um certificado é necessário lendo [este artigo](/general/https-filtering/what-is-https-filtering).

Normalmente, os navegadores confiam no certificado AdGuard quando ele é adicionado ao armazenamento de certificados do sistema durante o processo de instalação. Mas, em alguns casos, isso não é suficiente e você pode se deparar com avisos ou erros. Isso acontece com mais frequência em navegadores baseados no Firefox, como Mozilla Firefox, PaleMoon, Waterfox, etc., ou no Yandex.Browser.

## Erro de *risco potencial de segurança* em navegadores baseados no Firefox

![Erro de risco de segurança](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

As versões antigas do FireFox, bem como os navegadores baseados nelas, não confiam nos certificados do armazenamento do sistema, mas apenas nos certificados do armazenamento local. Desde a versão 68, o FireFox confia nos certificados do sistema, mas você ainda pode enfrentar o erro "Conexão não confiável". Se isso acontecer, primeiro tente clicar no botão *Reinstalar Certificado*. Você o encontrará na aba *Rede*.

![Reinstalar certificado](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Se isso não ajudar, siga as instruções para adicionar manualmente o certificado AdGuard ao armazenamento do FireFox.

> Estas instruções são para o navegador Firefox. Os nomes dos botões e itens de menu podem ser diferentes em outros navegadores baseados no Firefox.

1. Execute o AdGuard.

1. Vá para [http://local.adguard.org/cert](http://local.adguard.org/cert) e clique no ícone *Baixar*. O navegador deve começar a baixar o arquivo **cert.cer**.

    :::note

    Você também pode abrir a página de download clicando no link através do aplicativo AdGuard em *Configurações → Rede → Filtragem HTTPS*.


:::

    ![Configurações do certificado](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Abra seu navegador e depois abra *Configurações*.

1. Vá para a aba *Privacidade & Segurança*.

1. Role para baixo até *Certificados* e clique no botão *Exibir certificados*.

    ![Veja a janela certificados](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Selecione a aba *Autoridades*.

1. Clique em *Importar...*.

    ![Configurações do certificado — importação](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Navegue pelo arquivo **cert.cer** baixado e clique em *Abrir*.

1. Marque a caixa *Confiar neste CA para identificar sites* e clique em *OK*.

    ![Configurações do certificado — caixa de seleção](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Você instalou o certificado AdGuard com sucesso. Reinicie o navegador e o erro deverá desaparecer.

## Aviso de certificado do Yandex.Browser

Se você for usuário do AdGuard para Windows e do Yandex.Browser, pode ter se deparado com este aviso:

![Aviso de certificado Yandex](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Por que isso está acontecendo?

Tanto o AdGuard quanto o Yandex levam a segurança dos usuários na Internet muito a sério. A política atual do Yandex é avisar seus usuários sobre qualquer certificado que não seja reconhecido pelo navegador. Isso não é infundado, porque às vezes aplicativos maliciosos podem injetar seus próprios certificados e usá-los para danificar o sistema e roubar dados privados.

No entanto, o AdGuard também adiciona seu certificado aos confiáveis. Isso leva à mensagem de aviso que você encontrou.

### Como resolver o problema?

A maneira mais fácil é clicar no botão **Ir para o site**. Isso fará com que o Yandex.Browser se lembre do certificado do AdGuard como confiável, pelo menos por um tempo. Normalmente, você não precisará mais ver essa mensagem, mas não é impossível que ela apareça ocasionalmente, por qualquer motivo. Nesses casos, basta pressionar o mesmo botão novamente *(certifique-se de que é o certificado do AdGuard!)*.

Desativar a filtragem HTTPS no AdGuard também impedirá que o Yandex.Browser mostre esta mensagem novamente, mas isso tem um preço alto: todos os anúncios carregados por HTTPS (incluindo **os próprios anúncios do Yandex**) aparecerão em sites como YouTube, Facebook, Instagram e muitos mais. Aconselhamos fortemente que você não o faça se quiser manter a qualidade do bloqueio de anúncios alta.
