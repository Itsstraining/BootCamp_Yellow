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
  console.log("Database is connect.");
}

let quizdata = [];

init();

app.get("/", async (req, res) => {
  let { category, amount } = req.query;
  console.log(category);
  let data = [];
  await admin
    .firestore()
    .collection("quizs")
    .doc(category)
    .collection("quizs")
    .get()
    .then((dataRes) => {
      dataRes.forEach((element) => {
        data.push(element.data());
      });
    });
  if (amount != undefined) {
    let dataAmount = [];
    for (let i = 0; i < amount; i++) {
      dataAmount.push(data[Math.floor(Math.random() * 50)]);
    }
    data = dataAmount;
  }
  //console.log(data)
  res.send({ quiz: data });
});

// app.post('/', async (req, res) => {
//   try {
//     for (let i = 0; i < quizdata.length; i++) {
//       //console.log(quizdata[i].category)
//       await admin.firestore().collection('quizs').doc(quizdata[i].category).collection('quizs').doc().create(quizdata[i])

//     }
//     res.send("success")
//   } catch (error) {
//     console.log(error)
//   }

// })
app.post("/user", async (req, res) => {
  const { id } = req.query;
  try {
    let a = (await admin.firestore().collection("user").doc(id).get()).data();
    if (a == null) {
      let data = await admin
        .firestore()
        .collection("user")
        .doc(id)
        .set({ id: id });
      res.send(data.data());
    } else {
      res.send(`${id} has been created`);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/room", async (req, res) => {
  let { category, owner, numOfPlayers } = req.body;
  console.log(category);
  let data = {
    category: category,
    owner: owner,
    numOfPlayers: numOfPlayers,
    status: false,
  };
  try {
    await admin.firestore().collection("rooms").doc().set(data);
    res.send("new room created");
  } catch (error) {
    console.log(error);
  }
});

app.put("/room/join", async (req, res) => {
  try {
    let { id, uid } = req.body;
    let data = await admin.firestore().collection("rooms").doc(id).get();
    let temp = data.data();
    console.log(temp);
    temp.users.push(uid);
    await admin.firestore().collection("rooms").doc(id).update(temp);
    res.send(`${uid} has joined`);
  } catch (error) {
    console.log(error);
  }
});

app.put("/room/injoin", async (req, res) => {
  try {
    let { id, uid } = req.body;
    let data = await admin.firestore().collection("rooms").doc(id).get();
    let temp = data.data();
    console.log(temp);
    temp.users.splice(uid, 1);
    await admin.firestore().collection("rooms").doc(id).update(temp);
    res.send(`${uid} has leave the room`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/room/start", async (req, res) => {
  let { rid } = req.query;
  let data = (await admin.firestore().collection("room").doc(rid).get()).data();
  let quiz = (
    await admin.firestore().collection("quizs").doc(data.category).get()
  ).data();
  res.send(quiz);
});

module.exports = app;
