require('dotenv').config()
const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const PORT = 3002;

// middleware
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const { REACT_APP_MONGODBPASSWORD, REACT_APP_MONGODBUSER } = process.env;

const uri = `mongodb+srv://${REACT_APP_MONGODBUSER}:${REACT_APP_MONGODBPASSWORD}@cluster0.rwkyp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

app.get("/", function (req, res) {
  MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tradefinder");
    dbo
      .collection("user")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
