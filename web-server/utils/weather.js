const request = require('request')

const weather_api = function(latitude, longitude, callback) {
    // const url = "https://api.weatherstack.com/current?access_key=........&query=" + latitude + "," + longitude + "&units=m";
    const url = 'http://api.weatherstack.com/current?access_key=d769d873bba3609c98530c8c51487303&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            return callback(err, undefined)
        } else {
            return callback(undefined, res.body)
        }
    })
}

module.exports = { weather_api: weather_api }