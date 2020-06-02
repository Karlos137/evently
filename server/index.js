const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

const event = require("./routes/event");
const group = require("./routes/group");
const events = require("./routes/events");
const groups = require("./routes/groups");
const activity = require("./routes/activity");
const activities = require("./routes/activities");
const user = require("./routes/user");
const users = require("./routes/users");
const invitation = require("./routes/invitation");

//middlewares
app.use(express.json());
app.use("/api/event", event);
app.use("/api/group", group);
app.use("/api/events", events);
app.use("/api/groups", groups);
app.use("/api/activity", activity);
app.use("/api/activities", activities);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/invitation", invitation);

app.listen(port, () => {
  console.log(`Listenning on port ${port}...`);
});
