const experss = require('express')
const Item = require('../models/item')
const itemRoute = experss.Router()

itemRoute.get('/', async (req, res) => {
    try {
        const result = await Item.find()
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})


itemRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        let result = await Item.findById(id)
        console.log(result);
        if (!result.veu) {
            result.veu = 1
        } else {
            result.veu += 1
        }
        result = await Item.findByIdAndUpdate(id, result)
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

itemRoute.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        const result = await Item.findByIdAndDelete(id)
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

itemRoute.post('/', async (req, res) => {
    let body = req.body
    body.veu = 0
    console.log(body, req.body)
    try {
        const result = await Item.create(body)
        if (result) {
            res.status(200).send({ data: result, length: result.length })
            return
        }
        res.status(404).send({ error: error })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})


itemRoute.put('/:id', async (req, res) => {
    const data = req.body
    const { id } = req.params
    try {
        const result = await Item.findByIdAndUpdate(id, data)
        if (result) {
            res.status(200).send({ data: result, length: result.length })
            return
        }
        res.status(404).send({ error: error })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})


module.exports = itemRoute