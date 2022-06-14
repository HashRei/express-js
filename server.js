const { request } = require("express")
const express = require("express")
const app = express()

app.get('/', (request, respond) => {
    console.log("Hello")
    respond.download('server.js')
})

app.listen(3000)