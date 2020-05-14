const express = require('express')
const http = require('http')

const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express()


app.use(router)

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))