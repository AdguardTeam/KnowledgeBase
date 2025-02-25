---
title: Instalação, configurações e remoção
sidebar_position: 2
---

## Instalando o AdGuard para Linux

Para instalar o AdGuard, digite:

Versão estável

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Se necessário, digite sua senha de administrador.

Pressione `y` para criar um link em `/usr/local/bin` para o executável e aguarde até que a instalação esteja concluída.

:::note

Você pode verificar a assinatura para provar que é uma versão oficial do AdGuard usando a ferramenta `gpg`. [Leia mais no GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Ativar licença

O AdGuard para Linux requer uma [licença do AdGuard](https://adguard.com/license.html). Se você ainda não tem uma licença, pode registrar-se ou criar uma conta para obter um teste gratuito de 14 dias. Se você já possui uma licença, faça login para ativá-la.

Para fazer login ou criar uma conta, digite:

```
adguard-cli activate
```

Para redefinir sua licença, insira:

```
adguard-cli reset-license
```

Para visualizar as informações da licença, digite:

```
adguard-cli license
```

## Configuração inicial

Para colocar o AdGuard em funcionamento, conclua as configurações iniciais. Isso inclui a instalação do Certificado CA do AdGuard, a ativação dos filtros necessários e a seleção do modo proxy.

Para executar o assistente de configuração, digite:

```
adguard-cli configure
```

## Desinstalando o AdGuard para Linux

Para desinstalar o AdGuard, digite:

Versão estável

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Se necessário, digite sua senha de administrador.
