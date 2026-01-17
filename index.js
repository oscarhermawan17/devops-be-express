const express = require("express");

const app = express();
const PORT = 3000;

// route sederhana
app.get("/", (req, res) => {
  res.send("Hello World from Express 🚀");
});

// server listen
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

