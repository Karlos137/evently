require("dotenv").config();
const express = require("express");
const neo4j = require("neo4j-driver");

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic(process.env.DATABASE_USER, process.env.DATABASE_PASSWORD)
);
const session = driver.session();

app.listen(port, () => {
  console.log(`Listenning on port ${port}...`);
});

//routes

//GET - all groups
app.get("/api/groups", (req, res) => {
  const cypher = "MATCH (n) RETURN n";

  session
    .run(cypher)
    .then((result) => {
      res.json(result.records);
    })
    .catch((err) => {
      res.send(err);
    });
});
