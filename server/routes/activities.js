const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//GET - all activities
router.get("", async (req, res) => {
  try {
    const snapshot = await db
      .collection("activities")
      .orderBy("date", "desc")
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
