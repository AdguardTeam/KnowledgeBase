---
title: Proteção contra malware e phishing
sidebar_position: 3
---

Ser vítima de phishing e malware continua sendo um problema comum. Para aumentar a segurança digital, incorporamos filtros especiais nos produtos AdGuard para te proteger contra sites maliciosos e de phishing. Até o momento, categorizamos mais de 15 milhões de sites e construímos um banco de dados de 1,5 milhão de sites conhecidos por phishing e malware. Usando esse banco de dados, o AdGuard verifica os sites que você visita para te proteger contra ameaças online.

:::note Importante

Nós não coletamos ou usamos qualquer informação sobre os sites que você visita.

:::

## Como o AdGuard verifica os sites?

Cada vez que você visita um site, seu cliente local troca informações com nosso servidor back-end na forma de hashes e prefixos de hash. Com base nessa troca, o cliente local determina se o site está ou não listado no banco de dados de sites potencialmente perigosos. Há uma diferença no escopo dessa verificação para aplicativos e extensões.

### Em aplicativos

O AdGuard oferece a melhor proteção possível, inspecionando as páginas e todos os objetos carregados nelas. O AdGuard verifica URLs e nomes de domínio usando prefixos hash, não URLs completos. Portanto, nossos servidores não retêm informações sobre os sites que você visita e suas informações pessoais ficam totalmente seguras. Nossos servidores respondem à consulta do aplicativo com uma lista de todos os endereços possíveis que correspondem ao prefixo hash. Quando uma ameaça potencial é detectada com base em correspondências de hash, o acesso a esse site é imediatamente bloqueado.

![Aviso do AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### Nas extensões do navegador {#extension}

Nossas extensões de navegador só podem verificar nomes de domínio, não URLs completos. Elas também não conseguem verificar subconsultas. Isso significa que, se houver elementos potencialmente maliciosos na página, eles serão carregados mesmo que a página em si seja de um domínio seguro. A extensão não oferece proteção contra eles. Também é importante observar que a verificação realizada é síncrona, ou seja, acontece ao mesmo tempo que a página é carregada, portanto é possível que malware também seja carregado.

## Configuração da proteção contra phishing e malware nos produtos AdGuard

- **Para Windows**: Ative o módulo *Segurança da navegação* no menu *Configurações*

    ![Segurança de navegação no Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Para Mac**: Ative o módulo *Segurança* em *Preferências*

    ![Segurança no Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Para Android**: Ative *Segurança da navegação* na aba *Proteção*

    ![Segurança de navegação no Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Para iOS**: Embora não haja um módulo separado, você pode acessar *Proteção do Safari* → *Filtros* → *Segurança* e ativar os filtros disponíveis. Além disso, ative *Proteção DNS* e selecione um dos servidores DNS do AdGuard

    ![Segurança no iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Para extensões de navegador**: Habilite *Proteção contra phishing e malware* na guia *Configurações*. Para proteção aprimorada, vá para *Filtros* → *Segurança* e ative os filtros

    ![Proteção de malware e phishing](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Para DNS privado do AdGuard:** Ative a proteção contra malware em *Configurações do servidor*, na seção *Segurança*

    ![Segurança em DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## O que bloqueamos

Mantemos dois filtros principais: um que protege contra phishing e sites fraudulentos que tentam roubar credenciais de usuários e outro que bloqueia o acesso a sites conhecidos por distribuir malware, o que pode levar à perda de dados, vazamento de informações ou danos ao seu dispositivo. Esses filtros também te protegem de sites com vários golpes e esquemas fraudulentos. Para obter informações mais detalhadas, consulte este [artigo da Wikipedia](https://pt.wikipedia.org/wiki/Phishing).

## Manutenção de nossos filtros

O AdGuard mantém um extenso banco de dados de sites de phishing e malware que é atualizado automaticamente e com regularidade à medida que novas ameaças são descobertas. Coletamos informações de diversas fontes confiáveis e de alta qualidade, tanto públicas quanto de outras empresas, e as agregamos em um banco de dados comum de sites perigosos.

Analisamos automaticamente reclamações sobre sites suspeitos e gastamos muito tempo mantendo o banco de dados atualizado, limpando falsos positivos e implementando mecanismos para evitá-los no futuro.

### Quer ajudar?

Toda ajuda é bem-vinda! Se você encontrar um site de phishing ou malware, denuncie-o via <support@adguard.com>.

### Resultados falso-positivos

Ocasionalmente, alguns sites não maliciosos são adicionados aos filtros do AdGuard. Fazemos o possível para reduzir a porcentagem de falsos positivos, mas eles ainda assim podem ocorrer. Se você encontrar esse comportamento do AdGuard, informe o falso positivo ao nosso suporte técnico via <support@adguard.com>.

## Se você suspeitar de um site

Se você suspeitar que um determinado site pode ser perigoso, verifique-o usando nossa [ferramenta de verificação de segurança](https://reports.adguard.com/welcome.html).

![Verificação de segurança](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
