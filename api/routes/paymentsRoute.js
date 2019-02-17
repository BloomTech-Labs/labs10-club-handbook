const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_QBcc8So0WjMMIznAloTV3kdv");

// STRIPE STATEMENT DESCRIPTOR
router.post('/billing', (req, res) => {
  let amount = 500;

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    }))
  .then(charge => res.send(charge))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});
  

  module.exports = router;