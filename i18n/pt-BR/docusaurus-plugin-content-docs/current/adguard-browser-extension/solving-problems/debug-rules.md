---
title: Como depurar regras no AdGuard para o Chrome MV3
sidebar_position: 2
---

No [AdGuard para Chrome MV3](/adguard-browser-extension/mv3-version), o log de filtragem mostra apenas as regras aproximadas que foram aplicadas, as quais chamamos de “regras assumidas”. Isso ocorre porque o navegador não fornece detalhes sobre quais regras declarativas específicas foram usadas, a menos que a extensão esteja em um formato "descompactado". Para obter informações precisas, você precisará instalar o formato “descompactado” da extensão no seu navegador.

Estas instruções também são destinadas a casos problemáticos em que você deseja modificar as regras incluídas na extensão de forma estática. Na maioria dos casos, usar _Regras de usuário_ na extensão deve ser suficiente.

## Pré-requisitos

1. **Git:** [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Instalar Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Instalar Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Como clonar a extensão

1. Clone o repositório:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Navegue até o diretório:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Mude para a branch `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Instale as dependências:

   ```bash
   yarn install
   ```

## Como construir a extensão

1. Mude para a branch `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. Execute o seguinte comando no terminal:

   ```bash
   # yarn dev chrome-mv3
   ```

3. A extensão construída estará localizada no diretório:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Como instalar o unpacked no navegador

1. Ative o modo de desenvolvedor:

   ![Modo de desenvolvedor](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Clique em _Carregar unpacked_:

   ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Selecione o diretório da extensão e clique em `Selecionar`:

   ![Select](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Tudo pronto!

## Como depurar regras

1. Encontre e modifique a regra que você precisa no diretório `./Extension/filters/chromium-mv3`, nos arquivos `.txt`.

2. Converta as regras de txt para a forma declarativa:

   ```bash
   yarn convert-declarative
   ```

3. Faça o build da extensão novamente:

   ```bash
   # yarn dev chrome-mv3
   ```

4. Recarregue a extensão no navegador:

   ![Recarregar extensão](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
