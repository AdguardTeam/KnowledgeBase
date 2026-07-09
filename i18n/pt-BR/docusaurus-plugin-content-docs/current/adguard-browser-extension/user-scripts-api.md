---
title: API de Scripts de Usuário
sidebar_position: 8
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://adguard.com/download.html?auto=true).

:::

Ao adicionar um filtro personalizado ou uma regra de usuário, uma notificação aparecerá solicitando que você ative o modo do Desenvolvedor para usar esses recursos na extensão.

![Notificação \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

A partir da versão 5.2, a Extensão do AdGuard para navegador usa a API de User Scripts. O Chrome exige essa nova API para seguir melhores práticas de segurança do usuário.

## O que é a API de Scripts de Usuário?

A API de Scripts de Usuário é uma ferramenta que permite que extensões executem scripts JavaScript personalizados em páginas da web. Essas ferramentas são frequentemente usadas para modificar ou aprimorar sites de maneiras que não são originalmente oferecidas pelo próprio site.

Com a mudança para o Manifest V3 do Chrome, muitos métodos antigos de injeção de scripts ficaram limitados ou sofreram atrasos. No entanto, há uma exceção para a API de Scripts de Usuário.

Saiba mais sobre os impactos das políticas MV3 em nosso [post de blog](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Como ativar o modo de desenvolvedor

Para usar filtros personalizados e regras JavaScript na guia _Regras do Usuário_, você precisa configurar seu navegador primeiro. Isso proporcionará à extensão um método confiável e seguro de injetar scripts em páginas da web no momento ideal. Siga as instruções abaixo, dependendo da sua versão do Chrome.

### Para versões do Chrome anteriores à 138

Você precisa ativar o modo de desenvolvedor para as extensões. Para isso, abra o menu do Chrome clicando nos três pontos no canto superior direito, vá para _Extensões_ ⭢ _Gerenciar extensões_ e ative a opção _Modo de desenvolvedor_.

![Gerenciar extensões \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Para o Chrome versão 138 e posterior

Você precisa ativar a opção _Permitir scripts de usuário_. Para isso, abra o menu do Chrome clicando nos três pontos no canto superior direito, vá para _Extensões_ ⭢ _Gerenciar extensões_, acesse os _Detalhes_ da extensão AdGuard Browser Extension e ative a opção _Permitir scripts de usuário_.

![Gerenciar extensões \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
