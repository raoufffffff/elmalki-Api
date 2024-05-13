const moongose = require('mongoose')

const orderitem = new moongose.Schema({
    name: String,
    price: Number,
    description: String,
    orders: [],
})

const OrderItem = moongose.model('orderitem', orderitem)

module.exports = OrderItem