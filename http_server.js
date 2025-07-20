const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Response sent from HTTP Server!",
  });
});

app.post("/", (req, res) => {
  const { username } = req.body;
  res.status(200).json({
    status: true,
    message: `Hello, ${username}! Welcome to the HTTP Server!`,
  });
});

app.listen(PORT, () => {
  console.log(`HTTP Server is running on: http://localhost:${PORT}`);
});
