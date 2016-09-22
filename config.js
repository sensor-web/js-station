'use strict';

module.exports = {
  //server: 'api.sensorweb.io',
  server: 'localhost',
  port: 80,
  // Device Type: `arduino`, `linkit`, `usbttl`, and `simulator`.
  deviceType: 'usbttl',
  sensorId: 'Sy8a912X',
  apiKey: '9fb2e2537d2354d63bd9d18b4e132f7a9b3cc4386cd02ab87d67058fd4fea746',
  // The simulator options.
  simulator: {
    samplingRate: 5000,
    dataRange: {
      pm1: { min: 1, max: 10 },
      pm2_5: { min: 1, max: 10 },
      pm10: { min: 10, max: 20 }
    }
  }
};
