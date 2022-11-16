const express = require('express')
const User = require('../models/users')
const router = new express.Router()

router.get("/", () => console.log("users"))

// Create user
router.post("/users", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error)
    }
}) 

// Get users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch(error) {
        res.status(500).send()
    }
})

// Update users
router.patch("/users/:id", async (req, res) => {
    const _id = req.params.id
    const body = req.body

    try {
        const user = await User.findById(_id)
        await user.save()

        if (!user) return res.status(404).send()
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Search user
router.get("/users", async (req, res) => {

})

module.exports = router