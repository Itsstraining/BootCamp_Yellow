const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");
let db = "https://itss-demo-21s-default-rtdb.firebaseio.com";
function init() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://itss-demo-21s-default-rtdb.firebaseio.com",
  });

  app.use(bodyParser.json());
  app.use(cors());
  console.log("Database is connect.");
}

init();

app.get("/check", async (req, res) => {
  let temp =await admin.database().ref("room001").get()
  console.log(temp);
  res.send(temp)
});
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
app.get("/user", async (req, res) => {
  const { uid } = req.query;
  try {
    let a = await admin.firestore().collection("user").doc(uid).get();
    if (!a.exists) {
      res.send(`${id} has not exists`);
    } else {
      res.send(a.data());
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/user", async (req, res) => {
  const { id, displayName, email, photoURL } = req.body;
  console.log(id, displayName, email, photoURL);
  try {
    let a = await admin.firestore().collection("user").doc(id).get();
    if (!a.exists) {
      await admin.firestore().collection("user").doc(id).create({
        id: id,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      });
      res.send(`${id} has been created`);
    } else {
      res.send(`${id} has been exist`);
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/room", async (req, res) => {
  let { owner } = req.query;
  let room = await admin.firestore().collection("rooms").doc(owner).get();

  try {
    if (room.exists) {
      res.send(room.data());
      return;
    } else {
      res.send("error");
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/room", async (req, res) => {
  let { category, owner, quantity } = req.body;
  let room = await admin.firestore().collection("rooms").doc(owner).get();
  if (room.exists) {
    res.send("room is exists");
    return;
  }
  let data = {
    category: category,
    owner: owner,
    quantity: quantity,
    status: false,
  };
  try {
    await admin.firestore().collection("rooms").doc(owner).create(data);
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
