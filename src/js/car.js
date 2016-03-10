'use strict';
// code Olegnd
var pessengers = [];
var car        = {color:'white',dours:4,speed:0,defaultSpeed:60,
                  maxSpeed:100,seats:4,pessengers:pessengers.length}
if (car.pessengers === 0) {car.speed = 0;
 }
function put() {if (car.pessengers < car.seats){
                    pessengers.push(true);
                    car.pessengers = pessengers.length;
                 }
}
function land() {if (car.pessengers > 0) {
                    pessengers.shift();
                    car.pessengers = pessengers.length;
                 }
}
function drive(newSpeed) {if (newSpeed <= car.maxSpeed
                              && car.pessengers > 0)
                           {car.speed = newSpeed;
                           }
                          else {if (car.pessengers > 0) {
                                 car.speed = car.maxSpeed
                               }
                                else {car.speed = 0}
                           }
}
export {car,put,land,drive,pessengers};