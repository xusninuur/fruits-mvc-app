const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const path = require("path");

require("dotenv").config();

const app = express();

dns.setServers(["1.1.1.1"]);

// Middleware
app.use(express.json());

// Static files
app.use(express.static("public"));

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});