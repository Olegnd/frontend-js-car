'use strict';
//code Olegnd
import {car,put,land,drive,color,
        dours,speed,defaultSpeed,maxSpeed,seats,pessengers} from 'js/car.js';
var    quantityPut     =  0,
       quantityLand    =  0,
       speedometer     = [0,30,90,100,120],
       indexSpeedometr = 0;


console.log('car = {'+'color:'+car.color+',dours:'+car.dours+',speed:'+car.speed+
            ',defaultSpeed:'+car.defaultSpeed+',maxSpeed:'+car.maxSpeed+
            ',seats:'+car.seats+',pessengers:'+car.pessengers+'   !!! pessenger []}');           
console.log('typeof pessengers  ',pessengers);
console.log('__________________________________________________________________________________________');

// put pessenger
       console.log('pessengers  = ',pessengers,' quantityPut = ',quantityPut);
while (quantityPut < 6){
       put();
       quantityPut = quantityPut + 1;
       console.log('pessengers  = ',pessengers,' quantityPut = ',quantityPut);
       
}

// land pessenger
while (quantityLand < 5){
       land();
       quantityLand = quantityLand + 1;
       console.log('pessengers  = ',pessengers,' quantityLand = ',quantityLand);
}

// change speed
    put();
    quantityPut = quantityPut + 1;
    console.log('pessengers  = ',pessengers,' quantityPut = ',quantityPut);
while (indexSpeedometr < speedometer.length){
       drive(speedometer[indexSpeedometr]);
       console.log('speedometr = ',speedometer[indexSpeedometr]+' car.speed = '+car.speed);
       indexSpeedometr = indexSpeedometr + 1;
}
       land();
       quantityLand = quantityLand + 1;
       indexSpeedometr = indexSpeedometr - 1;
       drive(speedometer[indexSpeedometr]);
       console.log('pessengers  = ',pessengers,' quantityLand = ',quantityLand);
       console.log('speedometr = ',speedometer[indexSpeedometr]+' car.speed = '+car.speed);
console.log('__________________________________________________________________________________________');
console.log('quantityPut = '+quantityPut+' quantityLand = '+quantityLand+' declared by speed = '+speedometer[4]);
console.log('car after all changes',car);