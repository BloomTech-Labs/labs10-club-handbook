const express = require("express");
const mwConfig = require("../config/mwConfig");
const server = express();
server.use(require("body-parser").text());
const usersRoute = require("./routes/usersRoute");
const clubsRoute = require("./routes/clubsRoute");
const paymentsRoute = require("./routes/paymentsRoute");

mwConfig(server);

server.get("/", (req, res) => {
  res.status(200).send("Sanity check passed");
});

server.use("/api/users", usersRoute);
server.use("/api/clubs", clubsRoute);
server.use("/api/payments", paymentsRoute );


module.exports = server;
