const request = require('request')

const weather_api = function(latitude, longitude, callback) {
    const url = 'http://api.weatherstack.com/current?access_key=a289ca5b0a741997fc3090e103df3e71&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            return callback(err, undefined)
        } else {

            return callback(undefined, res.body)
        }
    })
}

module.exports = { weather_api: weather_api }