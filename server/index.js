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
  const cypher = "MATCH (n:Group) RETURN n";

  session
    .run(cypher)
    .then((result) => {
      res.json(result.records);
    })
    .catch((err) => {
      res.send(err);
    });
});

//POST - create event
app.post("/api/event", (req, res) => {
  const cypher = `MATCH (a:User) WHERE ID(a) = ${
    req.body.createdBy
  } CREATE (n:Event { name: "${req.body.name}", image: "${
    req.body.image
  }", description: "${req.body.description}", location: "${
    req.body.location
  }" , date: datetime("${new Date().toJSON()}") , dateCreated: datetime("${new Date(
    req.body.date
  ).toJSON()}")}) -[r:CREATED_BY]-> (a) RETURN (n)`;

  session
    .run(cypher)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//DELETE - delete group
app.delete("/api/group/:id", (req, res) => {
  const cypher = `MATCH (n:Group) WHERE ID(n) = ${req.params.id} DETACH DELETE n`;

  session
    .run(cypher)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//PATCH - group edit
app.patch("/api/edit/group", (req, res) => {
  const cypher = `MATCH (n:Group) WHERE ID(n) = ${req.body.id} SET n.name = "${req.body.name}" RETURN n`;

  session
    .run(cypher)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
