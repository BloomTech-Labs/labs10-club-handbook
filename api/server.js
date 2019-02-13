const express = require("express");
const mwConfig = require("../config/mwConfig");
const server = express();
const usersRoute = require("./routes/usersRoute");

mwConfig(server);

server.get("/", (req, res) => {
  res.status(200).send("Sanity check passed");
});

server.use("/api/users", usersRoute);

module.exports = server;
