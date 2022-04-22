const request = require('request');
const geocode_api = function(address, callback) {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1ljoiaWZzNSIsImEiOiJjbDFveGZ2cjlxNjV3M2tvMm2kaW45MjF3ln0.jakzckr8Zkj8Xdbo8yQ05w";
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            return callback(err, undefined)
        } else {
            return callback(undefined, res.body)
        }
    })
}

module.exports = { geocode_api: geocode_api }