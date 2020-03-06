require("dotenv").config();
const express = require("express");
const db = require("./database");

const port = process.env.PORT || 5000;
const app = express();

//middleware

app.listen(port, () => {
  console.log(`Listenning on port ${port}...`);
});

//routes

//GET - all events
app.get("/api/events", (req, res) => {
  const sql = "SELECT * FROM events";
  db.execute(sql)
    .then(result => {
      console.log(result[0][0]);
      res.send("Test db");
    })
    .catch(err => {
      console.log(err);
    });
});
