import https from "https";
import express from "express";
import * as config from "@welib/cctd/config";

const app = express();
const httpsOpts = {requestCert: true, rejectUnauthorized: false};
const server = https.createServer({...config.tls, ...httpsOpts}, app);

app.get("/", (req, res) => {
  res.send('<a href="/cert">Client Certificate</a>');
});

app.get("/cert", (req, res) => {
  const cert = req.connection.getPeerCertificate();

  if (req.client.authorized) {
    const {subject: {CN: subject}, issuer: {CN: issuer}} = cert;
    res.send(`identified as ${subject} issued by ${issuer}`);
  } else if (cert.subject) {
    res.sendStatus(403);
  } else {
    res.sendStatus(401);
  }
});

server.listen(config.port, function() {
  const {address, port} = this.address();
  const host = address.includes(":") ? `[${address}]` : address;
  console.info(`listening on ${host}:${port}`);
});
