'use strict';
//code Olegnd 
// test put pessenger
function testPutPessengers(put){
var    quantityPut     =  0;
while (quantityPut < 2){
       put();
       quantityPut = quantityPut + 1;
      
console.log(' quantityPut = ',quantityPut);}

}


// test land pessenger
function testLandPessengers(land){
var     quantityLand = 0;       
while (quantityLand < 1){
       land();
       quantityLand = quantityLand + 1;
      
console.log('quantityLand = ',quantityLand);}
    
}

// test change speed
function testChangeSpeed(drive){
var speedometer     = [90],
    indexSpeedometr = 0;
while (indexSpeedometr < speedometer.length){
       drive(speedometer[indexSpeedometr]);
       console.log('speedometr = ',speedometer[indexSpeedometr]);
       indexSpeedometr = indexSpeedometr + 1;
      }
}

module.exports.testPutPessengers  = testPutPessengers;
module.exports.testLandPessengers = testLandPessengers;
module.exports.testChangeSpeed    = testChangeSpeed;
