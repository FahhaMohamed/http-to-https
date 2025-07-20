const express = require("express");
const https = require("https");
const selfSignedCert = require("selfsigned");
const app = express();

app.use(express.json());

const attributes = [{ name: "commonName", value: "localhost" }];
const ssl = selfSignedCert.generate(attributes, { days: 365 });

const PORT = 5566;

const server = https.createServer({
    key: ssl.private,
    cert: ssl.cert
}, app);

app.get("/", (req, res) => {
  res.send("Response sent from HTTPS Server!")
});

app.post("/", (req, res) => {
  const { username } = req.body;
  res.status(200).json({
    status: true,
    message: `Hello, ${username}! Welcome to the HTTPS Server!`,
  });
});

server.listen(PORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${PORT}`);
});