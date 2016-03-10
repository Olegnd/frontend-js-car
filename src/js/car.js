'use strict';
var arrPessengers = [];
var color        = 'color',
    dours        = 'dours',
    speed        = 'speed',
    defaultSpeed = 'defaultSpeed',
    maxSpeed     = 'maxSpeed',
    seats        = 'seats',
    pessengers   = 'pessengers';

var car = {color:'white',dours:4,speed:0,defaultSpeed:60,maxSpeed:100,seats:4,
           pessengers:arrPessengers.length};


if (arrPessengers.length === 0) {
        car.speed = 0;
     }
    
function put() {
    if (arrPessengers.length < car.seats){
        arrPessengers.push(true);
     }
}
function land(){
    if (arrPessengers.length > 0) {
        arrPessengers.shift();
     }
}
function drive(newSpeed) {
    if (newSpeed <= car.maxSpeed
        & arrPessengers.length > 0){
        car.speed = newSpeed
     }
    else { if (arrPessengers.length > 0) {
              car.speed = car.maxSpeed
            }
     }
}
export {car,put,land,drive,arrPessengers,color,
        dours,speed,defaultSpeed,maxSpeed,seats,pessengers};