const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

const toRefs = (arr, col) => {
  return arr.map((docId) => {
    return db.doc(`${col}/${docId}`);
  });
};

//GET - all users
router.get("", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const data = [];

    let counter = 0;
    snapshot.forEach(function (doc) {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//POST - all users by id
router.post("", async (req, res) => {
  try {
    refs = toRefs(req.body.users, "users");

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
