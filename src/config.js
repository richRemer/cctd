import {createRequire} from "module";
import {readFileSync} from "fs";

const require = createRequire(import.meta.url);
const config = require("../config.json");

export const port = config.port || 443;
export const tls = config.tls || {};

if (tls.cert) tls.cert = readFileSync(tls.cert);
if (tls.key) tls.key = readFileSync(tls.key);
if (tls.pfx) tls.pfx = readFileSync(tls.pfx);

if (tls.ca instanceof Array) tls.ca = tls.ca.map(readFileSync);
else if (tls.ca) tls.ca = readFileSync(tls.ca);
