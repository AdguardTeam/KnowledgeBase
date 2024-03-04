---
title: Como instalar um certificado de proxy
sidebar_position: 2
---

Os aplicativos AdGuard para desktop (AdGuard para Windows e AdGuard para Mac) podem ser usados como proxy. Isso significa que você pode rotear o tráfego de outros dispositivos por meio do AdGuard (totalmente ou tráfego de aplicativos/navegadores específicos).

:::note

Esses dispositivos devem estar na mesma rede do PC ou Mac no qual o AdGuard está instalado.

:::

O tráfego HTTP será filtrado em qualquer caso, mas para que o AdGuard possa filtrar o tráfego HTTPS, você precisa instalar manualmente o certificado AdGuard no dispositivo conectado.

## Como baixar e instalar o certificado

Dependendo do sistema operacional do seu dispositivo (Windows/Mac/Android/iOS), siga uma destas instruções:

### Windows {#windows}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

2. Verifique se a proteção do AdGuard está ativada. Em seguida, marque a caixa **Use AdGuard como um proxy HTTP** na aba **Rede** de suas configurações.

3. No mesmo dispositivo com o AdGuard, siga este link usando qualquer navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clique no botão **Baixar**.

5. Transfira o arquivo baixado **cert.cer** para o dispositivo cujo tráfego você deseja rotear por meio do AdGuard.

6. Nesse dispositivo, pressione o botão **Win**, digite `Gerenciar certificados de computador` e pressione **Enter**.

7. Na página *Certificados - Computador Local*, encontrar a pasta *Autoridades de certificação root confiáveis* → *Certificados*.

8. Clique com o botão direito do mouse na pasta *Certificados* e clique em **Todas as tarefas** → **Importar**.

9. Na página *Assistente de importação de certificados*, clique em **Avançar**.

10. Clique em **Procurar** para importar o certificado.

11. Navegue até o arquivo de certificado **cert.cer**, selecione-o e clique em **Abrir**.

12. Clique em **Próximo**.

13. Selecione o botão **Colocar todos os certificados no seguinte repositório** caixa de seleção.

14. Certifique-se de que o campo *Repositório de Certificado* exiba *Autoridades confiáveis de certificação root* e clique em **Próximo**.

15. Clique em **Concluir**.

16. Pressione a tecla **Win** e abra **Configurações**.

17. Selecione **Rede & Internet** → **Proxy**.

18. Desativar *Detectar configurações automaticamente*.

19. Clique em **Configurar** na guia *Usar um servidor proxy*.

20. Ative esta opção. Para **Proxy IP address**, insira o endereço IP do seu computador desktop (etapa 1). Para **Port**, insira a porta escolhida nas configurações de rede do aplicativo AdGuard para desktop.

21. Clique em **Salvar**.

### Mac {#mac}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

2. Verifique se a proteção do AdGuard está ativada. Em seguida, vá para **Configurações** → **Rede** → **Proxy HTTP** e marque a caixa **Usar AdGuard como proxy HTTP**.

3. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clique no botão **Baixar**.

5. Transfira o arquivo baixado **cert.cer** para o dispositivo cujo tráfego você deseja rotear por meio do AdGuard.

6. Clique duas vezes no arquivo de certificado baixado.

7. Digite a senha de administrador e clique em **Modificar Keychain**.

8. Vá para **Spotlight** (o ícone de pesquisa no canto superior direito), digite "Keychain Access" e selecione **Acesso Keychain** nos resultados da pesquisa.

9. Em *Sistema*, destaque o certificado que adicionou.

10. Clique com o botão direito do mouse e escolha **Obter Informações** no menu de contexto.

11. Expanda *Confiança* para exibir as políticas de confiança para o certificado.

12. Em *Secure Sockets Layers (SSL)*, selecione **Confiar sempre**.

13. Abra **Preferências do sistema** → **Rede** e escolha a conexão ativa superior.

14. Clique em **Detalhes...** e navegue até a guia **Proxies**.

15. Marque duas caixas de seleção: *Web proxy (HTTP)* e *Secure web proxy (HTTPS)*. No campo **Servidor**, insira o endereço IP anotado do seu computador (etapa 1). No campo **Porta**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### Android {#android}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

2. Verifique se a proteção do AdGuard está ativada. Em seguida, marque a caixa **Use AdGuard como um proxy HTTP** na aba **Rede** de suas configurações.

3. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clique no botão **Baixar**.

5. Transfira o arquivo baixado **cert.cer** para o dispositivo cujo tráfego você deseja rotear por meio do AdGuard.

6. Localize e toque no certificado **cert.cer** baixado anteriormente para abrir o arquivo.

7. Em alguns telefones, pode ser solicitado que você insira a senha do dispositivo. Faça isso e pressione **OK**. O certificado agora está instalado.

8. Abra as configurações avançadas da rede Wi-Fi ativa.

9. Mude o tipo de Proxy **** para **Manual**. Para **Proxy hostname**, digite o endereço IP anotado do seu computador desktop (etapa 1). Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### iOS {#ios}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

2. Verifique se a proteção do AdGuard está ativada. Em seguida, marque a caixa **Use AdGuard como um proxy HTTP** na aba **Rede** de suas configurações.

3. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clique no botão **Baixar**.

5. Transfira o arquivo baixado **cert.cer** para o dispositivo cujo tráfego você deseja rotear por meio do AdGuard.

6. Abra **Definições** → **Segurança** → **Criptografia & Credenciais** → **Instalar um certificado**. Dispositivos Android não confiam em certificados por padrão, então haverá um aviso quando você escolher o **certificado CA**. Toque em **Instalar mesmo assim**.

7. Abra **Configurações** → **Perfil baixado** e toque em **Instalar** no canto superior direito. Digite sua senha e confirme a instalação. Toque em **Concluído**.

8. Vá para **Configurações** → **Geral** → **Sobre** → **Configurações do certificado de confiança**. Habilite a chave ao lado de *Adguard Personal CA*. O certificado agora está instalado.

9. Nesse dispositivo, abra as configurações avançadas da rede Wi-Fi ativa.

10. Mude o tipo de Proxy **** para **Manual**. Para **Proxy hostname**, digite o endereço IP anotado do seu computador (etapa 1). Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.
