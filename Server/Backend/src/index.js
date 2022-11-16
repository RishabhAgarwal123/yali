const express = require('express')
const cors = require('cors')
require('../src/db/mongoose')

const userRouter = require('../src/routers/users')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(userRouter)

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

