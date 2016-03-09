'use strict';
var pessengers = [],
    newSpeedCar;
    
var car = {color:'white',dours:4,speed:0,defaultSpeed:60,maxSpeed:100,seats:4,
           passengers:(pessengers.length)};
console.log('car '+car);
    if (pessengers.length < 1 ) {car.speed = 0 & console.log('car empty')};
    if (pessengers.length <= car.seats) 
       {function put() {pessengers.push(true)}
     }
    else {console.log('car full')
     }
    if (pessengers.length > 1)          
       {function land(){pessengers = pessengers.shift}
     }
    newSpeedCar = car.defaultSpeed;
    if (newSpeedCar <= car.maxSpeed & pessengers.length > 1) 
       {function drive(newSpeed) {newSpeedCar = newSpeed}
        car.speed = newSpeedCar
     }
    else {car.speed = car.maxSpeed}


export {car,put,land,drive};