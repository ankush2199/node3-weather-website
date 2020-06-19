const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=0f16e441cfeaed94df5ac1d0294ef343&query=" + latitude + ',' + longitude + '&units=f';

    request({url, json:true}, (error, {body} ) => {
        if(error){
            callback('Unable to connect to the location services.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.' + ' The humidity is '+ body.current.humidity )
        }
    })
}

module.exports = forecast