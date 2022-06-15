const express = require("express")
const router = express.Router()

router.get('/', (request, respond) => {
    respond.send("User list")
})

router.get('/new', (request, respond) => {
    respond.send("User form")
})

module.exports = router