'use strict';
// code Olegnd

var pessengers = [];
var car        = {color:'white',dours:4,speed:0,defaultSpeed:60,
                  maxSpeed:100,seats:4,pessengers:pessengers}

if (pessengers.length === 0) {car.speed = 0;
 }
function put() {if (pessengers.length < car.seats){
                    pessengers.push(true);
                 }
}
function land() {if (pessengers.length > 0) {
                    pessengers.shift();
                 }
}
function drive(newSpeed) {if (newSpeed <= car.maxSpeed
                              && pessengers.length > 0)
                           {car.speed = newSpeed;
                           }
                          else {if (pessengers.length > 0) {
                                 car.speed = car.maxSpeed
                               }
                                else {car.speed = 0}
                           }
}
module.exports = car;
//module.exports = put;
//module.exports = land;
//module.exports = drive;

