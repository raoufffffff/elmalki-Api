const moongose = require('mongoose')

const item = new moongose.Schema({
    name: String,
    price: Number,
    type: String,
    img: String,
    description: String,
    benefit: [],
    worning: String,
    size: String,
    veu: Number
})


const Item = moongose.model('item', item)

module.exports = Item