require("dotenv").config();
const express = require("express");
const db = require("./database");

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());

app.listen(port, () => {
  console.log(`Listenning on port ${port}...`);
});

//routes

//GET - all groups
app.get("/api/groups", (req, res) => {
  const sql = "SELECT * from evently.groups";

  db.execute(sql)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      res.send(err);
    });
});

//GET - all events
app.get("/api/events", (req, res) => {
  const sql = "SELECT * FROM evently.events";

  db.execute(sql)
    .then((result) => {
      console.log(result[0]);
      res.json(result[0]);
    })
    .catch((err) => {
      res.send(err);
    });
});

//POST - create event
app.post("/api/event", (req, res) => {
  const sql = `INSERT INTO evently.events (\`name\`, \`image\`, \`description\`, \`location\`, \`date\`, \`date_created\`, \`created_by\`) VALUES ("${
    req.body.name
  }", "${req.body.image}", "${req.body.description}", "${
    req.body.location
  }", "${new Date().toJSON().slice(0, 19).replace("T", " ")}", "${new Date(
    req.body.date
  )
    .toJSON()
    .slice(0, 19)
    .replace("T", " ")}", "1")`;

  db.execute(sql)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//DELETE - delete group
app.delete("/api/group/:id", (req, res) => {
  const sql = `DELETE FROM evently.groups WHERE \`id\`="${req.params.id}"`;

  db.execute(sql)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//PATCH - group edit
app.patch("/api/edit/group", (req, res) => {
  const sql = `UPDATE evently.groups SET \`name\`="${req.body.name}" WHERE \`id\`="${req.body.id}"`;

  db.execute(sql)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
