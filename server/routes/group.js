const express = require("express");
let router = express.Router();
const fb = require("../fb");
const db = fb.firestore();

//GET - group by id
router.get("/:id", async (req, res) => {
  try {
    const doc = await db.collection("groups").doc(req.params.id).get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//DELETE - delete group
router.delete("/:id", async (req, res) => {
  try {
    const deleteGroup = await db
      .collection("groups")
      .doc(req.params.id)
      .delete();

    res.json(deleteGroup);
  } catch (error) {
    res.send(error);
  }
});

//POST - create group
router.post("", async (req, res) => {
  try {
    const ref = await db.collection("groups").add({
      name: req.body.name,
      users: req.body.users,
      createdBy: req.body.createdBy,
    });

    res.json(ref.id);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - group edit
router.patch("", async (req, res) => {
  try {
    const update = await db
      .collection("groups")
      .doc(req.body.id)
      .update({ name: req.body.name });
    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
