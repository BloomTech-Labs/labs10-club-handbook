const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')
const db = require('../../config/dbConfig')

async function updateSubInfo(id) {
  stripe.subscriptions.retrieve(id, async function(err, subscription) {
    try {
      if (err) {
        console.log(err)
      } else {
        if (subscription.status === 'canceled') {
          await db('subscriptions')
            .where({ subscription: id })
            .delete()
        }
      }
    } catch (err) {
      console.log(err)
    }
  })
}

module.exports = {
  updateSubInfo,
}
