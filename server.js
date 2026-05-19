const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const path = require("path");

require("dotenv").config();

const app = express();

dns.setServers(["1.1.1.1"]);

// Middleware
app.use(express.json());

/* PUBLIC FOLDER */
app.use(express.static("public"));

/* ROUTES */
const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

/* HOME ROUTE */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* DATABASE CONNECTION */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

/* PORT */
  const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});



