const express = require('express')
const User = require('../models/users')
const router = new express.Router()

// Create user
router.post("/users", async (req, res) => {
    try {
        const users = User.find({})
        req.body.user.id = (await users).length + 1
        const user = new User(req.body.user)
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
    const id = req.params.id
    const body = req.body
    const updates = Object.keys(body)
    try {
        const user = await User.findOne({id: id})
        updates.forEach((update) => user[update] = body[update])
        await user.save()

        if (!user) return res.status(404).send()
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/users/sort", async (req, res) => {
    try {
        console.log("Hitted")
        const users = await User.find({})
        const sortedusers = users.sort((user1, user2) => user1.last_name > user2.last_name ? 1 : -1)
        console.log(sortedusers)
        res.send(sortedusers)
    } catch (e) {
        res.send(e)
    }
})

router.get("/users/sort/:value/:sortDir", async (req, res) => {
    const sortValue = req.params.value
    const direction = req.params.sortDir
    console.log(sortValue)
    let sorted = []
    try {
        const users = await User.find({})
        sorted = users.sort((user1, user2) => user1[sortValue] < user2[sortValue] ? direction === 'asc' ? 1 : -1 : direction === 'asc' ? -1 : 1)
        res.send(sorted)
    } catch (e) {
        res.send(e)
    }
})

// Search user
router.get("/users/:searchText", async (req, res) => {
    const searchValue = req.params.searchText
    try {
        const user = await User.findOne({
            $or: [
                { first_name: searchValue },
                { last_name: searchValue },
                { email: searchValue }
            ]
        })
        res.send(user)
    } catch (error) {
        res.send('No User Found')
    }
})

module.exports = router