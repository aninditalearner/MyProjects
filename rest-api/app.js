const express = require("express");
const feedRoutes = require("./routes/feed.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);
//app.use(bodyParser.urlencoded());

const password = encodeURIComponent("Password@123");

mongoose
  .connect(
    `mongodb+srv://aninditawork44:${password}@cluster0.ysvc71f.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((e) => console.log(e));
app.listen(8080);
