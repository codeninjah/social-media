const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())

//Med följande 2 raderna funkar inte applikationen
app.use("/user", routes.user);
//app.use("/api/tasks", routes.message);

app.get('/', (req, res) => {
    console.log("Lyckat")
})

app.listen(8080, function() {
    console.log("Server is running...")
})