const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        image: req.body.image,
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        alien.name = req.body.name
        alien.tech = req.body.tech
        alien.image= req.body.image
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.deleteOne()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router