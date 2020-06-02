const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//convert array of doc ids to doc refs
const toRefs = (arr, col) => {
  return arr.map((docId) => {
    return db.doc(`${col}/${docId}`);
  });
};

//GET - all events
router.get("", async (req, res) => {
  const snapshot = await db.collection("events").orderBy("date", "desc").get();
  const data = [];
  let counter = 0;

  snapshot.forEach(function (doc) {
    data.push(doc.data());
    data[counter].id = doc.id;
    counter += 1;
  });

  res.json(data);
});

//GET - upcoming events
router.get("/upcoming", async (req, res) => {
  try {
    const data = [];
    let counter = 0;
    const snapshot = await db
      .collection("events")
      .where("date", ">", new Date())
      .orderBy("date", "desc")
      .get();
    snapshot.forEach((doc) => {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//GET - past events
router.get("/past", async (req, res) => {
  try {
    const data = [];
    let counter = 0;
    const snapshot = await db
      .collection("events")
      .where("date", "<", new Date())
      .orderBy("date", "desc")
      .get();
    snapshot.forEach((doc) => {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//POST - created events
router.post("/created", async (req, res) => {
  let eventsCreated = [];
  let user = null;
  try {
    user = await db.collection("users").doc(req.body.id).get();

    eventsCreated = [...user.data().eventsCreated];

    refs = toRefs(eventsCreated, "events");

    const snapshot = await db.getAll(...refs);
    const data = [];
    let counter = 0;
    snapshot.forEach((doc) => {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
