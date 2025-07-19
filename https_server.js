const express = require("express");
const https = require("https");
const selfSignedCert = require("selfsigned");
const app = express();

const attributes = [{ name: "commonName", value: "localhost" }];
const ssl = selfSignedCert.generate(attributes, { days: 365 });

const PORT = 5000;

const server = https.createServer({
    key: ssl.private,
    cert: ssl.cert
}, app);

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Response sent from HTTPS Server!"
  });
});

server.listen(PORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${PORT}`);
});