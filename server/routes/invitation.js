const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//PATCH - accept group invitation
router.patch("/group/accept", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.group
        ),
      });

    update = await db
      .collection("groups")
      .doc(req.body.group.id)
      .update({
        users: admin.firestore.FieldValue.arrayUnion(req.body.userId),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - accept event invitation
router.patch("/event/accept", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.event
        ),
      });

    update = await db
      .collection("events")
      .doc(req.body.event.id)
      .update({
        users: admin.firestore.FieldValue.arrayUnion(req.body.userId),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - decline group invitation
router.patch("/group/decline", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.group
        ),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - decline event invitation
router.patch("/event/decline", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.event
        ),
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
