const { request } = require("express")
const express = require("express")
const app = express()

app.get('/', (request, respond) => {
    console.log("Hello")
    respond.status(500).send("There is an issue on our server")
})

app.listen(3000)