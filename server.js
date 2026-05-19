const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

const app = express();

dns.setServers(["1.1.1.1"]);

// Middleware
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("PRODUCTS API");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

const PORT = process.env.PORT || 3000;

// Right now server is running on port 3000,
// but when hosting on a platform like Render, Heroku,
// it will use the random port provided by the hosting platform
// or default to 3000 if the PORT variable is not set (e.g. when running locally)

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});