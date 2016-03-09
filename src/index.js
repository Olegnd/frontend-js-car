'use strict';

//var car,put,land;
import {car,put,land,drive} from 'js/car.js';

    quantityPut = 0,
    quantityLand = 0;
    
    put();
    quantityPut = quantityPut + 1;
    put();
    quantityPut = quantityPut + 1;
    land();
    quantityLand = quantityLand + 1;
    drive(90);
console.log('quantityPut = '+quantityPut+' quantityLand = '+quantityLand);
console.log('car in index '+car);