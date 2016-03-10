'use strict';
import {car,put,land,drive,arrPessengers,color,
        dours,speed,defaultSpeed,maxSpeed,seats,pessengers} from 'js/car.js';
var    quantityPut  =  0,
       quantityLand =  0,
       speedIndex   = 90;
console.log('typeof color = '+typeof color+' ;typeof dours = '+typeof dours+
            ' ;typeof speed = '+typeof speed+' ;typeof defaultSpeed = '+typeof defaultSpeed+ 
            ' ;typeof maxSpeed = '+typeof maxSpeed+' ;typeof seats = '+typeof seats+
            ' ;typeof pessengers = '+typeof pessengers);
console.log('car default ',car);

// put pessenger
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);
put();
quantityPut = quantityPut + 1;
console.log('arrPessengers = ', arrPessengers);

// land pessenger
land();
quantityLand = quantityLand + 1;
console.log('arrPessengers = ', arrPessengers);
land();
quantityLand = quantityLand + 1;
console.log('arrPessengers = ', arrPessengers);
land();
quantityLand = quantityLand + 1;
console.log('arrPessengers = ', arrPessengers);
//land();
//quantityLand = quantityLand + 1;
//console.log('arrPessengers = ', arrPessengers);
/*
land();
quantityLand = quantityLand + 1;
land();
quantityLand = quantityLand + 1;
*/
// change speed
drive(speedIndex);

console.log('quantityPut = '+quantityPut+' quantityLand = '+quantityLand+' target speed = '+speedIndex);
console.log('car after ',car);