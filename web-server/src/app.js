const express = require('express');
const { geocode_api } = require('../utils/geocode');
const { weather_api } = require('../utils/weather');

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
app.get("/test_geocode/:city?", (req, res) => {
    geocode_api(req.params.city, (err, data) => {
        const longitude = data.features[0].center[0]
        const latitude = data.features[0].center[1]
        res.send({ longitude: longitude, latitude: latitude });
    })
})

app.get("/test_weather/:city?", (req, res) => {
    geocode_api(req.params.city, (err, data) => {
        const longitude = data.features[0].center[0]
        const latitude = data.features[0].center[1]
        weather_api(latitude, longitude, (err, data) => {
            weather = {
                sicaklik: data.current["temperature"],
                basinc: data.current["pressure"],
                nem: data.current["humidity"]
            }
            res.send(weather);
        })
    })
})


app.listen(port, () => {
    console.log("Server is running");
})