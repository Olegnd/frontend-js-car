'use strict';
// code Olegnd

var car = require('js/car.js');

var test = require('js/test_car.js');
test.testPutPessengers(car.put);
test.testLandPessengers(car.land);
test.testChangeSpeed(car.drive);
console.log(car);