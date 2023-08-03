# How to Create Your Own DNS Stamp for Secure DNS

In this guide, you'll learn how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents the possibility of your queries being intercepted or manipulated by malicious actors.

## Introduction to DNS Stamps

DNS Stamps are short strings that include all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data. 

## Choosing the Protocol

Types of secure DNS include DNS-over-HTTPS (DoH), DNS-over-QUIC (DoQ), and DNS-over-TLS (DoT). You need to choose one of these protocols based on your preferences and usage conditions.

## Creating a DNS Stamp

1. Open the [DNSCrypt Stamp Generator](https://dnscrypt.info/stamps/).

2. Depending on the chosen protocol, select the corresponding protocol from the dropdown menu (DoH, DoT, or DoQ).

3. Fill in the necessary fields:
    - **Resolver address**: Enter the DNS server's IP address. If you are using the DoT or DoQ protocol, ensure you have also specified the corresponding port.
    - **Hashes of the server's certificate**: Insert the SHA256 hash of the server's certificate. If the DNS server you are using provides a ready-made Ed25519 public key, find and copy it. Otherwise, you can obtain it by following the instructions in the ["Obtaining the Certificate Hash"](###obtaining-the-certificate-hash) section.
    - **Host name**: Enter the DNS server's hostname. This field is used for server name verification in DoT and DoQ protocols.
    - For **DoH**:
      - **Path**: Enter the path for performing DoH requests. This is usually "/dns-query", but your provider may provide a different path.
    - For **DoT and DoQ**:
      - There are usually no specific fields for these protocols in this tool. Just make sure the port specified in the resolver address is the correct port.
    - In the "Properties" section, you can check the relevant properties if they are known and applicable to your DNS server.

4. Click the "Generate stamp" button. Your stamp will be displayed in the "Your stamp" field.

### Obtaining the Certificate Hash

To fill in the "Hashes of the server's certificate" field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256
```

**NOTE**: Keep in mind that the result of the hash calculation command can change over time as the server's certificate may be updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

## Using the DNS Stamp

You now have your own DNS stamp, which you can use to set up Secure DNS in your internet connection. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Example of Creating a DNS Stamp

Let's walk through an example of creating a stamp for AdGuard DNS using DoT:

1. Open the DNSCrypt stamp generator web page at https://dnscrypt.info/stamps/.

2. Select the "DNS-over-TLS (DoT)" protocol.

3. Fill in the following fields:

    - **Resolver address**: Enter the DNS server's IP address and port. In this case, it's `94.140.14.14:853`.
    
    - **Resolver name**: Enter the host name of the DNS server. In this case, it's `dns.adguard-dns.com`.
    
    - **Hashes**: 
    Execute the command 
    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256
    ```
    The result is `a54670fda8ed13bded0a9515f35d0a2bed937e100aa6282703cb3b87282055ec`
    Paste this SHA256 hash of the server's certificate into the field.

4. Leave the Properties section blank.

5. Click on the "Generate stamp" button. Your stamp will be displayed in the "Your stamp" field and is now ready to use.
