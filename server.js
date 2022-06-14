const { request } = require("express")
const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get('/', (request, respond) => {
    console.log("Hello")
    respond.render("index")
})

app.listen(3000)