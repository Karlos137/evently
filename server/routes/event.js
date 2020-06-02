const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//GET - event by id
router.get("/:id", async (req, res) => {
  try {
    const doc = await db.collection("events").doc(req.params.id).get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//DELETE - delete event
router.delete("/:id", async (req, res) => {
  try {
    const activities = await db
      .collection("activities")
      .where("event.id", "==", req.params.id)
      .get();

    activities.forEach((activity) => {
      db.collection("activities").doc(activity.id).delete();
    });

    const deleteEvent = await db
      .collection("events")
      .doc(req.params.id)
      .delete();

    res.json(deleteEvent);
  } catch (error) {
    res.send(error);
  }
});

//POST - create event
router.post("", async (req, res) => {
  try {
    const ref = await db.collection("events").add({
      name: req.body.name,
      location: req.body.location,
      date: new Date(req.body.date),
      dateCreated: new Date(),
      image: req.body.image,
      description: req.body.description,
      users: req.body.users,
      createdBy: req.body.createdBy,
    });

    res.json(ref.id);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - event edit
router.patch("", async (req, res) => {
  try {
    const update = await db
      .collection("events")
      .doc(req.body.id)
      .update({
        name: req.body.name,
        location: req.body.location,
        date: new Date(req.body.date),
        description: req.body.description,
      });
    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
