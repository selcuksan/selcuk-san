const request = require('request')

const weather_api = function(latitude, longitude, callback) {
    const url = " ";
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            return callback(err, undefined)
        } else {
            return callback(undefined, res.body)
        }
    })
}

module.exports = { weather_api: weather_api }