const express = require('express')
const mainRouter = require('./mainRoutes')
const app = express()

app.use(mainRouter)
const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
