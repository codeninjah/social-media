const express = require('express')
const routes = require('./routes')

const logger = require('./middleware/logger')


const app = express()

app.use(logger)
app.use(express.json())


app.use('/api/user', routes.user);
app.use('/api/message', routes.message);


app.get('/', (req, res) => {
    console.log("Lyckat")
})

app.listen(8080, function() {
    console.log("Server is running...")
})