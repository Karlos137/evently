const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

const toRefs = (arr, col) => {
  return arr.map((docId) => {
    return db.doc(`${col}/${docId}`);
  });
};

//GET - user by id
router.get("/:id", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.id).get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add group invitation to user
router.patch("/invite/group/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayUnion(
          req.body.group
        ),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add created event to user
router.patch("/create/event/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsCreated: admin.firestore.FieldValue.arrayUnion(req.body.eventId),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - delete created event for user
router.patch("/create/event/remove", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsCreated: admin.firestore.FieldValue.arrayRemove(req.body.eventId),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add event invitation to user
router.patch("/invite/event/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayUnion(
          req.body.event
        ),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//POST - registration - create user
router.post("/api/user", (req, res) => {
  db.collection("users")
    .doc(req.body.id)
    .set({
      name: req.body.name,
      email: req.body.email,
      eventsAttending: [],
      eventsCreated: [],
      eventsInvitations: [],
      groupsInviations: [],
      groups: [],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
