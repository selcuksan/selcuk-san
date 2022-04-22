const express = require('express')

var app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.get("/test_text", (req, res) => {
    res.send("18360859049");
})

app.get("/test_html", (req, res) => {
    res.send("<h1>Selçuk Şan</h1>");
})

app.get("/test_json", (req, res) => {
    res.send({
        ogrenci_no: "18360859049",
        ad: "Selçuk",
        soyad: "Şan"

    });
})
app.get("/test_geocode", (req, res) => {
    res.send("test_geocode");
})
app.get("/test_weather", (req, res) => {
    res.send("test_geocode");
})


app.listen(port, () => {
    console.log("Server is running");
})