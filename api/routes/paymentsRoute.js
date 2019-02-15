const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_QBcc8So0WjMMIznAloTV3kdv");


// STRIPE STATEMENT DESCRIPTOR
router.post("/billing", async (req, res) => {
    console.log("req.body", req.body);
    let token = req.body.stripeToken;
    try {
      let { status } = await stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "example charge",
        source: token
      });
      res.json({ status });
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });
  

  module.exports = router;