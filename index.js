const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.route");
const connectDB = require("./db/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.route");

dotenv.config();

const app = express();
PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json()); //parse json requests
app.use(cookieParser()); //parse cookies

// routes
app.use("/api/auth", authRoutes);
app.use("/api/", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port ", PORT);
});
