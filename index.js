const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
