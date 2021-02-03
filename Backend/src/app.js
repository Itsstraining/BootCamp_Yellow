const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("../key.json");

function init() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://itss-demo-21s-default-rtdb.firebaseio.com",
  });

  app.use(bodyParser.json());
  app.use(cors());
  console.log('Database is connect.')
}

init();

app.get('/', async (req, res) => {
  let data = (await admin.firestore().doc('/quizs/science/quizs/C611syeilvVht9i67DAH').get()).data()
  console.log(data)
  res.send(data)
})


module.exports = app;
