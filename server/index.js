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

//GET - all events
app.get("/api/events", (req, res) => {
  const sql = "SELECT * FROM events";

  db.execute(sql)
    .then(result => {
      console.log(result[0]);
      res.json(result[0]);
    })
    .catch(err => {
      res.send(err);
    });
});

//POST - create event
app.post("/api/event", async (req, res) => {
  console.log(req.body);
  const sql = `INSERT INTO events (name, date, dateCreated, image, description, location) VALUES ("${req.body.name}", "2020-03-10", "2020-03-09", "${req.body.image}", "Blablab", "Testlocation")`;
  console.log(sql);
  db.execute(sql)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
});
