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
        } else {
          let newInfo = {
            status: subscription.status,
            type: subscription.plan.nickname,
            plan: subscription.plan.id,
            product: subscription.plan.product,
          }

          await db('subscriptions')
            .where({ subscription: id })
            .update(newInfo)
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
