---
title: Como instalar o AdGuard para Android TV
sidebar_position: 15
---

:::info

Este artigo é sobre o AdGuard para Android TV, um bloqueador de anúncios que protege sua TV ao nível do sistema. Para ver como funciona, [faça o download do aplicativo AdGuard TV] (https://agrd.io/tvapk)

:::

Geralmente, os navegadores padrão não podem instalar um arquivo na TV, mas você pode baixar um navegador da loja Google Play que tenha essa funcionalidade. Em nosso guia, consideraremos um exemplo de instalação usando o navegador para TV Bro, mas há outras opções e você pode escolher a que melhor atenda às suas necessidades. Como alternativa, você pode usar o aplicativo [Downloader] (https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Instalando o AdGuard para Android TV via navegador

1. Instale o navegador para TV [Bro] (https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) em sua Android TV.

2. Baixe e instale o AdGuard para Android TV:

- Abra o navegador para TV Bro instalado em sua Android TV.
- Na barra de endereço do navegador, digite ’https://agrd.io/tvapk’ e pressione _Enter_ ou siga o link.
- O navegador começará a baixar o arquivo de instalação do AdGuard para Android TV automaticamente.
- Quando o download for concluído, selecione _Downloads_ na barra de controle do navegador e, em seguida, selecione o arquivo baixado.
- Em uma mensagem de aviso, permita a instalação de arquivos do navegador.
- Volte ao navegador, abra _Downloads_ e clique no arquivo baixado.
- Na janela do sistema que aparecerá, clique em _Instalar_ e depois em _Concluído_ ou _Abrir_.

Pronto, o AdGuard para Android TV está instalado.

1. Inicie o AdGuard para Android TV:

- Após a conclusão da instalação, encontre o aplicativo AdGuard na lista de aplicativos instalados em sua Android TV.
- Clique no ícone do AdGuard para iniciar o aplicativo.
- Siga as instruções na tela para concluir as configurações.

## Instalando AdGuard para Android TV via ADB

1. Certifique-se de que o Android Debug Bridge (ADB) esteja instalado em seu computador. Caso contrário, você pode seguir as instruções no XDA Developers: [Guia de instalação do ADB](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Faça o download do [AdGuard para Android TV] (https://agrd.io/tvapk).

3. Nas configurações da sua TV, vá para _Sistema_ → _Sobre_ e pressione o número da versão sete vezes para desbloquear as opções de desenvolvedor. Ative a _depuração USB_.

4. Anote o endereço IP da sua Android TV:

   - Em sua Android TV, navegue até Configurações.
   - Selecione _Sistema_ → _Sobre_.
   - Encontre _Rede_ e selecione _Wi-Fi_ ou _Ethernet_, dependendo do seu tipo de conexão.
   - Vá para a seção de rede e encontre _Endereço de IP_. Anote este endereço de IP.

5. Conecte-se à Android TV via ADB:

   - Abra o terminal ou prompt de comando no seu computador.
   - Digite o comando ’adb connect’ e cole o endereço IP da sua TV.
   - A conexão será estabelecida.

6. Instale o AdGuard para Android TV via ADB:

   - No terminal, digite o comando ’adb install Downloads/adguard_tv.apk’. Se necessário, substitua `Downloads/adguard_tv.apk` pelo seu caminho em que se encontra o arquivo baixado.
   - Aguarde uma mensagem no terminal indicando que a instalação do aplicativo foi bem-sucedida.
