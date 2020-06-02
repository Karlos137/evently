const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//POST - create activity
router.post("", async (req, res) => {
  try {
    const ref = await db.collection("activities").add({
      date: new Date(),
      event: { name: req.body.eventName, id: req.body.eventId },
      text: req.body.text,
      user: req.body.user,
      type: req.body.type,
      for: req.body.for,
    });

    res.json(ref);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
