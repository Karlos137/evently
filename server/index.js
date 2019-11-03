const express = require("express");
const admin = require("firebase-admin");

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://evently-cfb26.firebaseio.com"
});
const db = admin.firestore();

//convert array of doc ids to doc refs
const toRefs = (arr, col) => {
  return arr.map(docId => {
    return db.doc(`${col}/${docId}`);
  });
};

//routes

//DELETE - delete event
app.delete("/api/event/:id", async (req, res) => {
  try {
    const activities = await db
      .collection("activities")
      .where("event.id", "==", req.params.id)
      .get();

    activities.forEach(activity => {
      db.collection("activities")
        .doc(activity.id)
        .delete();
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

//DELETE - delete group
app.delete("/api/group/:id", async (req, res) => {
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

//POST - create event
app.post("/api/event", async (req, res) => {
  try {
    const ref = await db.collection("events").add({
      name: req.body.name,
      location: req.body.location,
      date: new Date(req.body.date),
      dateCreated: new Date(),
      image: req.body.image,
      description: req.body.description,
      users: req.body.users,
      createdBy: req.body.createdBy
    });

    res.json(ref.id);
  } catch (error) {
    res.send(error);
  }
});

//GET - all events
app.get("/api/events", async (req, res) => {
  const snapshot = await db
    .collection("events")
    .orderBy("date", "desc")
    .get();
  const data = [];
  let counter = 0;

  snapshot.forEach(function(doc) {
    data.push(doc.data());
    data[counter].id = doc.id;
    counter += 1;
  });

  res.json(data);
});

//GET - upcoming events
app.get("/api/events/upcoming", async (req, res) => {
  try {
    const data = [];
    let counter = 0;
    const snapshot = await db
      .collection("events")
      .where("date", ">", new Date())
      .orderBy("date", "desc")
      .get();
    snapshot.forEach(doc => {
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
app.get("/api/events/past", async (req, res) => {
  try {
    const data = [];
    let counter = 0;
    const snapshot = await db
      .collection("events")
      .where("date", "<", new Date())
      .orderBy("date", "desc")
      .get();
    snapshot.forEach(doc => {
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
app.post("/api/events/created", async (req, res) => {
  let eventsCreated = [];
  let user = null;
  try {
    user = await db
      .collection("users")
      .doc(req.body.id)
      .get();

    eventsCreated = [...user.data().eventsCreated];

    refs = toRefs(eventsCreated, "events");

    const snapshot = await db.getAll(...refs);
    const data = [];
    let counter = 0;
    snapshot.forEach(doc => {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//POST - groups member
app.post("/api/groups/member", async (req, res) => {
  try {
    const snapshot = await db
      .collection("groups")
      .where("users", "array-contains", req.body.id)
      .get();

    const data = [];
    let counter = 0;

    snapshot.forEach(function(doc) {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//GET - all users
app.get("/api/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const data = [];

    let counter = 0;
    snapshot.forEach(function(doc) {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//GET - all activities
app.get("/api/activities", async (req, res) => {
  try {
    const snapshot = await db
      .collection("activities")
      .orderBy("date", "desc")
      .get();
    const data = [];

    let counter = 0;
    snapshot.forEach(function(doc) {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//POST - create activity
app.post("/api/activity", async (req, res) => {
  try {
    const ref = await db.collection("activities").add({
      date: new Date(),
      event: { name: req.body.eventName, id: req.body.eventId },
      text: req.body.text,
      user: req.body.user,
      type: req.body.type,
      for: req.body.for
    });

    res.json(ref);
  } catch (error) {
    res.send(error);
  }
});

//POST - all users by id
app.post("/api/users", async (req, res) => {
  try {
    refs = toRefs(req.body.users, "users");

    const snapshot = await db.getAll(...refs);
    const data = [];
    let counter = 0;
    snapshot.forEach(doc => {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//GET - all groups
app.get("/api/groups", async (req, res) => {
  try {
    const snapshot = await db.collection("groups").get();

    const data = [];

    let counter = 0;
    snapshot.forEach(function(doc) {
      data.push(doc.data());
      data[counter].id = doc.id;
      counter += 1;
    });

    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

//POST - create group
app.post("/api/group", async (req, res) => {
  try {
    const ref = await db.collection("groups").add({
      name: req.body.name,
      users: req.body.users,
      createdBy: req.body.createdBy
    });

    res.json(ref.id);
  } catch (error) {
    res.send(error);
  }
});

//GET - group by id
app.get("/api/group/:id", async (req, res) => {
  try {
    const doc = await db
      .collection("groups")
      .doc(req.params.id)
      .get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//PATCH - group edit
app.patch("/api/edit/group", async (req, res) => {
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

//PATCH - event edit
app.patch("/api/edit/event", async (req, res) => {
  try {
    const update = await db
      .collection("events")
      .doc(req.body.id)
      .update({
        name: req.body.name,
        location: req.body.location,
        date: new Date(req.body.date),
        description: req.body.description
      });
    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add group invitation
app.patch("/api/user/invite/group/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayUnion(req.body.group)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add created event
app.patch("/api/user/create/event/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsCreated: admin.firestore.FieldValue.arrayUnion(req.body.eventId)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - delete created event
app.patch("/api/user/create/event/remove", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsCreated: admin.firestore.FieldValue.arrayRemove(req.body.eventId)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - add event invitation
app.patch("/api/user/invite/event/add", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayUnion(req.body.event)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//GET - event by id
app.get("/api/event/:id", async (req, res) => {
  try {
    const doc = await db
      .collection("events")
      .doc(req.params.id)
      .get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//GET - user by id
app.get("/api/user/:id", async (req, res) => {
  try {
    const doc = await db
      .collection("users")
      .doc(req.params.id)
      .get();
    res.json(doc.data());
  } catch (error) {
    res.send(error);
  }
});

//POST - registration - create user
app.post("/api/registration", (req, res) => {
  db.collection("users")
    .doc(req.body.id)
    .set({
      name: req.body.name,
      email: req.body.email,
      eventsAttending: [],
      eventsCreated: [],
      eventsInvitations: [],
      groupsInviations: [],
      groups: []
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

//PATCH - accept group invitation
app.patch("/api/invitation/group/accept", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.group
        )
      });

    update = await db
      .collection("groups")
      .doc(req.body.group.id)
      .update({
        users: admin.firestore.FieldValue.arrayUnion(req.body.userId)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - accept event invitation
app.patch("/api/invitation/event/accept", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.event
        )
      });

    update = await db
      .collection("events")
      .doc(req.body.event.id)
      .update({
        users: admin.firestore.FieldValue.arrayUnion(req.body.userId)
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - decline group invitation
app.patch("/api/invitation/group/decline", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        groupsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.group
        )
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

//PATCH - decline event invitation
app.patch("/api/invitation/event/decline", async (req, res) => {
  try {
    const update = await db
      .collection("users")
      .doc(req.body.userId)
      .update({
        eventsInvitations: admin.firestore.FieldValue.arrayRemove(
          req.body.event
        )
      });

    res.json(update);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Listenning on port ${port}...`);
});
