const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./Routes/UserRoute");

require("dotenv").config();

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.use("/api/user", userRoutes);
