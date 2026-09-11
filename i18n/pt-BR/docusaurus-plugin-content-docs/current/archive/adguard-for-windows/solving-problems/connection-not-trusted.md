---
title: Questões relacionadas a certificados
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

Para poder filtrar o tráfego HTTPS e bloquear anúncios e rastreadores com eficiência, o AdGuard gera um certificado root especial (e exclusivo) e o instala no armazenamento do sistema. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Normalmente, os navegadores confiam no certificado AdGuard quando ele é adicionado ao armazenamento de certificados do sistema durante o processo de instalação. Mas, em alguns casos, isso não é suficiente e você pode se deparar com avisos ou erros. Isso acontece com mais frequência em navegadores baseados no Firefox, como Mozilla Firefox, PaleMoon, Waterfox, etc., ou no Yandex.Browser.

Here are some common issues:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

As versões antigas do FireFox, bem como os navegadores baseados nelas, não confiam nos certificados do armazenamento do sistema, mas apenas nos certificados do armazenamento local. Desde a versão 68, o FireFox confia nos certificados do sistema, mas você ainda pode enfrentar o erro "Conexão não confiável". If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Se isso não ajudar, siga as instruções para adicionar manualmente o certificado AdGuard ao armazenamento do FireFox.

> Estas instruções são para o navegador Firefox. Os nomes dos botões e itens de menu podem ser diferentes em outros navegadores baseados no Firefox.

1. Execute o AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Você instalou o certificado AdGuard com sucesso. Reinicie o navegador e o erro deverá desaparecer.

## Aviso de certificado do Yandex.Browser

Se você for usuário do AdGuard para Windows e do Yandex.Browser, pode ter se deparado com este aviso:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Por que isso está acontecendo?

Tanto o AdGuard quanto o Yandex levam a segurança dos usuários na Internet muito a sério. A política atual do Yandex é avisar seus usuários sobre qualquer certificado que não seja reconhecido pelo navegador. Isso não é infundado, porque às vezes aplicativos maliciosos podem injetar seus próprios certificados e usá-los para danificar o sistema e roubar dados privados.

No entanto, o AdGuard também adiciona seu certificado aos confiáveis. Isso leva à mensagem de aviso que você encontrou.

### Como resolver o problema?

The easiest way is to click the **Go to site** button. Isso fará com que o Yandex.Browser se lembre do certificado do AdGuard como confiável, pelo menos por um tempo. Normalmente, você não precisará mais ver essa mensagem, mas não é impossível que ela apareça ocasionalmente, por qualquer motivo. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Aconselhamos fortemente que você não o faça se quiser manter a qualidade do bloqueio de anúncios alta.

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
