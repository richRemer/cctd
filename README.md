Simple daemon to test client TLS certificates.

Client Certificate Test Daemon
==============================

cctd Setup
----------
Create **config.json** file in project root.  Add appropriate settings to
configure TLS.

### Using PEM Cert/Key Pair
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
**config.json**
```json
{
  "tls": {
    "pfx": "/path/to/cert.pfx"
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
