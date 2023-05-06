Simple daemon to test client TLS certificates.

Client Certificate Test Daemon
==============================

cctd Setup
----------
Create **config.json** file in project root.  Add appropriate settings to
configure TLS.

### Using PEM Cert/Key Pair
Set the **tls.cert** and **tls.key** options to configure TLS for the server
using a PEM key/cert pair.

**config.json**
```json
{
  "tls": {
    "cert": "/path/to/cert.pem",
    "key": "/path/to/key.pem"
  }
}
```

### Using PKCS#12 (pfx) Cert
Set the **tls.pfx** option to configure TLS for the server using a PKCS#12
certificate.

**config.json**
```json
{
  "tls": {
    "pfx": "/path/to/cert.pfx"
  }
}
```

### Adding Trusted CA
Optionally set the **tls.ca** option to trust a certificate authority when
verifying client certificates.  This value can be an array of values to trust
multiple certificate authorities.

**config.json**
```json
{
  "tls": {
    "ca": "/path/to/CA.crt"
  }
}
```

User Agent Setup
----------------
In addition to configuring **cctd**, you will also need to configure your user
agent to send a client certificate.

### Chrome Setup
For Chrome, navigate to "Manage Certificates" in the Settings, under "Your
Certificates", and "Import" a client PKCS#12 certificate.

### curl Setup
For **curl**, pass the **--cert** and **--key** options to configure you client
PEM cert/key pair.
