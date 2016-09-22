'use strict';

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var config = require('../config');
var simulator = new EventEmitter2();

if (!config.simulator) {
  config.simulator = {
    samplingRate: 5000,
    dataRange: {
      pm1: { min: 10, max: 20 },
      pm2_5: { min: 10, max: 20 },
      pm10: { min: 10, max: 20 }
    }
  };
}

var options = config.simulator;
setInterval(function() {
  simulator.emit('data', {
    pm1: getRandomInt(options.dataRange.pm1.min, options.dataRange.pm1.max),
    pm2_5: getRandomInt(options.dataRange.pm2_5.min, options.dataRange.pm2_5.max),
    pm10: getRandomInt(
      options.dataRange.pm10.min,
      options.dataRange.pm10.max
    )
  });
}, options.samplingRate);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = simulator;
