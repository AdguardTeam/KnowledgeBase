---
title: Instalação, configurações e remoção
sidebar_position: 2
---

## Instalando o AdGuard para Linux

Abra a linha de comando no seu computador. No Linux, use o atalho de teclado _Ctrl+Alt+T_. No Mac, digite _Terminal_ no campo de pesquisa.

Para instalar o AdGuard, escolha a versão que melhor se adapta a você (estável, beta ou noturna) e insira o comando respectivo.

**Versão estável**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Se necessário, digite sua senha de administrador.

Pressione `y` para criar um link em `/usr/local/bin` para o executável e aguarde até que a instalação esteja concluída.

:::note

Você pode verificar a assinatura para provar que é uma versão oficial do AdGuard usando a ferramenta `gpg`. [Leia mais no GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Configuração inicial

O AdGuard para Linux requer uma [licença do AdGuard](https://adguard.com/license.html). Se você ainda não tem uma licença, pode entrar ou criar uma conta para obter um teste gratuito de 14 dias. Se você já possui uma licença, faça login para ativá-la. Para fazer isso, siga este guia passo a passo:

1. Após a instalação, insira:

   ```sh
   adguard-cli activate
   ```

2. Em seguida, selecione a opção desejada:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/1activate.png)

3. Uma vez que você tenha uma licença, siga o link fornecido para prosseguir com a ativação:

   ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/2activate_link.png)

4. Após a ativação, você pode continuar a trabalhar com o programa:

   ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/3activate_success.png)

5. Você pode também redefinir sua licença inserindo:

   ```sh
   adguard-cli reset-license
   ```

   ou veja as informações da licença digitando

   ```sh
   adguard-cli license
   ```

6. Agora você precisa configurar o AdGuard CLI. Para executar o assistente de configuração, digite:

   ```sh
   adguard-cli configure
   ```

   ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/4configure.png)

   O assistente fará perguntas básicas obrigatórias para a configuração inicial.

7. Depois disso, você pode iniciar a proteção do AdGuard digitando

   ```sh
   adguard-cli start
   ```

   ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/5start.png)

8. Você pode verificar o status da proteção usando:

   ```sh
   adguard-cli status
   ```

   e pare com:

   ```sh
   adguard-cli stop
   ```

   ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

9. Para verificar a configuração atual, digite:

   ```sh
   adguard-cli config show
   ```

   ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

   O caminho para o arquivo de configuração também será mostrado, que você pode e deve editar diretamente. Ele contém descrições de todas as opções adicionais.

   Como alternativa, você pode usar os comandos:

   ```sh
   adguard-cli config get
   ```

   ou:

   ```sh
   adguard-cli config set
   ```

   No entanto, eles são destinados principalmente para criação de scripts.

Para redefinir sua licença, insira:

## Desinstalando o AdGuard para Linux

Para desinstalar o AdGuard, digite:

Versão estável

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Se necessário, digite sua senha de administrador.
