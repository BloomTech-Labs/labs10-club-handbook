const express = require("express");
const mwConfig = require("../config/mwConfig");
const server = express();
server.use(require("body-parser").text());
const stripe = require("stripe")("sk_test_QBcc8So0WjMMIznAloTV3kdv");
const usersRoute = require("./routes/usersRoute");
const clubsRoute = require("./routes/clubsRoute");

mwConfig(server);

server.get("/", (req, res) => {
  res.status(200).send("Sanity check passed");
});

server.use("/api/users", usersRoute);
server.use("/api/clubs", clubsRoute);

// STRIPE STATEMENT DESCRIPTOR
server.post("/billing", async (req, res) => {
  console.log(req.body);
  try {
    let { status } = await stripe.charges.create({
      amount: 1000,
      currency: "usd",
      description: "example charge",
      source: "tok_visa" //only visa cards
    });
    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = server;
