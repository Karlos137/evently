const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//GET - all groups
router.get("", async (req, res) => {
  try {
    const snapshot = await db.collection("groups").get();

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

//POST - groups member
router.post("/member", async (req, res) => {
  try {
    const snapshot = await db
      .collection("groups")
      .where("users", "array-contains", req.body.id)
      .get();

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

module.exports = router;
