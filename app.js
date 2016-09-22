'use strict';

var request = require('request');
var config = require('./config');
var device = require(`./lib/${config.deviceType}`);
var POST_API = `http://${config.server}:${config.port}/pm25/station/` +
               `${config.sensorId}/data?api_key=${config.apiKey}`;

device.on('data', function(data) {
  request.post(POST_API, {
    form: { pm1: data.pm1, pm2_5: data.pm2_5, pm10: data.pm10 }
  }, function(err, response, body) {
    !err ? console.log(body) : console.error(err);
  });
  console.log(`PM1.0: ${data.pm1}\nPM2.5: ${data.pm2_5}\nPM10: ${data.pm10}`);
});
