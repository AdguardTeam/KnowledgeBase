---
title: Como gerar arquivos HAR
sidebar_position: 5
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Os arquivos HAR são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

## O que são arquivos HAR?

O formato HAR (arquivo HTTP) é um arquivo compactado em JSON para registrar a interação de um navegador da web com um site. As especificações do formato HAR definem dados de arquivamento para transações HTTP que um navegador usa para exportar informações detalhadas sobre as páginas da web que ele carrega. Uma descrição mais detalhada do formato de arquivo HAR e suas especificações pode ser encontrada no site [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Como gerar arquivos HAR

Às vezes, precisamos analisá-lo para bloquear anúncios específicos que, por algum motivo, são difíceis de reproduzir. Para obter arquivos HAR, siga estas etapas:

1. Abra o AdGuard e vá em **Configurações** (ícone ⚙ no canto inferior direito).
2. Toque em **Geral** →**Avançado** → **Configurações de baixo nível**.
3. Role para baixo e ative **Capturar HAR** na seção Filtragem.
4. Abra o aplicativo e execute as ações necessárias para reproduzir o problema.
5. Desligue **Captura HAR**.
6. Volte para **Avançado**.
7. Toque em **Exportar logs e informações do sistema** → **Permitir** (se necessário) → **Salvar**.

**Envie o arquivo gerado com os logs para o serviço de suporte do AdGuard.**

:::note

Nossa equipe de suporte processará seu tíquete muito mais rápido se você especificar o número do tíquete do HelpDesk ou o número do problema do GitHub em sua mensagem.

:::

## Como analisar arquivos HAR

Aqui estão algumas fontes que podemos recomendar para analisar arquivos HAR:

- [O HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) é uma ferramenta de análise HAR que visualiza arquivos de log do HTTP Archive (HAR) criados por ferramentas de rastreamento HTTP.
- O [Fiddler](https://www.telerik.com/fiddler) é um proxy de depuração web que permite capturar, inspecionar e monitorar todo o tráfego HTTP(S) entre seu computador e a Internet, simular solicitações e diagnosticar problemas de rede.
