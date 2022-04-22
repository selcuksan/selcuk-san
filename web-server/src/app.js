const express = require('express')

var app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("home page");
})

app.get("/test_text", (req, res) => {
    res.send("18360859049");
})


app.listen(port, () => {
    console.log("Server is running");
})