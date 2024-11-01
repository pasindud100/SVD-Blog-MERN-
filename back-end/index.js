const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://dilshanp5400:DbPasindu@cluster0.xbuulqh.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
