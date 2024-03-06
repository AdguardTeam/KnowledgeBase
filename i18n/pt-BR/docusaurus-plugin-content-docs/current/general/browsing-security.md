---
title: Segurança da navegação
sidebar_position: 3
---

Todos os dias, dezenas de milhares de pessoas são vítimas de ataques de vírus ou fraudes na Internet. Adicionamos filtros especiais ao aplicativo AdGuard para te proteger contra sites maliciosos e de phishing.

Até agora, categorizamos mais de 15 milhões de sites e nossos filtros contêm cerca de 1,5 milhão de sites de phishing e malware. Reflita: 10% de todos os sites conhecidos podem ser perigosos para você! Usuários inexperientes podem facilmente se tornar vítimas de fraudadores ou hackers. Esperamos que o uso da proteção contra sites maliciosos ajude você a evitar todos os perigos que possa encontrar.

## Como funciona uma checagem?

O escopo e os métodos de verificação dependem do produto que você usa. Nas extensões do nosso navegador, o AdGuard inspeciona apenas as páginas que você visita. No AdGuard para Windows, Mac ou Android, oferecemos a melhor proteção possível, verificando as páginas e todos os objetos carregados nelas.

### AdGuard para Windows, Mac e Android

Usamos o protocolo [API de navegação segura versão 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec) para nosso trabalho com filtros. Este protocolo nos permite manter os seus dados pessoais absolutamente seguros. Nosso servidor não sabe nada sobre os sites que você visita. Usamos prefixos hash para verificações, não os URLs abertos.

A figura abaixo fornece uma compreensão geral de como funciona o módulo Segurança de Navegação, usando o AdGuard para Windows como exemplo.

![Algoritmo de funcionamento do módulo Segurança de Navegação](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### Extensão de navegador AdGuard

As extensões do navegador funcionam de maneira diferente, usando a chamada [*Lookup API*](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668) para verificar as páginas que você visita. Sempre que você visita um site, seu cliente local troca informações com nosso servidor de back-end na forma de hashes e prefixos de hash. Based on this exchange, the local client determines whether or not the site is listed in the potentially dangerous sites database. Para aqueles interessados nos detalhes deste processo, o link acima será útil.

Chamamos a sua atenção para o fato de nunca obtermos qualquer informação que nos permita saber os sites que você visita e utilizar esses dados de alguma forma.

Um algoritmo aproximado de funcionamento do módulo Segurança de Navegação é mostrado na figura abaixo.

![Algoritmo de funcionamento do módulo Segurança de Navegação nas extensões de navegador AdGuard.](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png)

## Filtros do AdGuard

Atualmente mantemos dois filtros AdGuard. Um deles protege contra phishing e sites fraudulentos. O outro protege contra sites maliciosos, que podem instalar vírus se visitados.

### Filtro contra sites de phishing

*Phishing* é um tipo de fraude online que visa obter acesso a dados confidenciais de usuários, como nome de usuário e senha. Se você estiver interessado neste tópico, sugerimos que leia [este artigo na Wikipedia](http://en.wikipedia.org/wiki/Phishing).

Além de sites de phishing, esse filtro também cobre diversos sites fraudulentos, incluindo todos os tipos de golpes, vendas de conteúdo inexistente e outros.

### Filtro contra sites maliciosos

This filter contains links to pages that could execute malicious code, leading to potential leaks, data loss, or damage to a user’s device. Code execution can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware).

## How do we add new addresses to our filters?

Most of the work is automated, so you can be sure that new malware and phishing addresses are added to our database as quickly as possible.

### Comunidade de segurança de navegação do AdGuard

An important tool for maintaining the highest level of filtering is the *AdGuard Browsing Security Community*. Qualquer usuário de nossos produtos, seja AdGuard para Windows ou nossa extensão de navegador, pode se tornar membro da comunidade e nos ajudar na criação de filtros AdGuard.

In the image below, you can see an algorithm of how Browsing Security Community works:

![Como funciona a Comunidade de segurança de navegação do AdGuard](https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png)

### Quer ajudar?

Toda ajuda é bem-vinda! Se quiser nos enviar uma reclamação sobre um site de phishing ou malware, basta entrar em contato com a nossa equipe de suporte técnico em **support@adguard.com**.

### Falsos positivos

Ocasionalmente, alguns sites não maliciosos são adicionados aos filtros do AdGuard. Fazemos o possível para reduzir a porcentagem de falsos positivos, mas eles ainda assim podem ocorrer. Se você se deparar com esse comportamento do AdGuard, envie-nos uma reclamação sobre o falso positivo. Você pode enviar essas reclamações por meio de nosso suporte técnico em **support@adguard.com**.
