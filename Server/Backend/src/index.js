const express = require('express')
require('../src/db/mongoose')

const userRouter = require('../src/routers/users')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(() => console.log(`Server is running at ${PORT}`))

