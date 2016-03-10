'use strict';
// code Olegnd
var color         = 'color',
    dours         = 'dours',
    speed         = 'speed',
    defaultSpeed  = 'defaultSpeed',
    maxSpeed      = 'maxSpeed',
    seats         = 'seats',
    pessengers    = [];
var car = {color:'white',dours:4,speed:0,defaultSpeed:60,maxSpeed:100,
    seats:4,pessengers:0}

// quantityPessengers = 0;
if (car.pessengers === 0) {
        car.speed = 0;
     }
function put() {
    if (car.pessengers < car.seats){
        pessengers.push(true);
        car.pessengers = pessengers.length;
     }
}
function land(){
    if (car.pessengers > 0) {
        pessengers.shift();
        car.pessengers = pessengers.length;
     }
}
function drive(newSpeed) {
    if (newSpeed <= car.maxSpeed
        & car.pessengers > 0){
        car.speed = newSpeed;
     }
    else { if (car.pessengers > 0) {
              car.speed = car.maxSpeed
            }
     }
}
export {car,put,land,drive,color,
        dours,speed,defaultSpeed,maxSpeed,seats,pessengers};