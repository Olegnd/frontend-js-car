'use strict';
// code Olegnd

var car  = require('js/car.js');
var test = require('js/test_car.js');
//console.log(car.car);
//test.testPutPessengers(car.put);
//console.log(car.car);
//test.testLandPessengers(car.land);
//console.log(car.car);
car.put();
car.land();
test.testChangeSpeed(car.drive);
console.log(car.car);