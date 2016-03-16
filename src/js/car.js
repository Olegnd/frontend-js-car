'use strict';
// code Olegnd



var car = {color:'white',dours:4,speed:0,defaultSpeed:60,
           maxSpeed:100,seats:4,pessengers:undefined,
		   put:undefined,land:undefined,drive:undefined};

car.pessengers = [];
console.log('this car   ',this);
 
car.put   = function put()           {if   (car.pessengers.length < car.seats)
                                           {car.pessengers.push(true)}
console.log('this put   ',this);						        
									 }
car.land  = function land()          {if   (car.pessengers.length > 0)
                                           {car.pessengers.shift()}
console.log('this land  ',this);						             
									 }
car.drive = function drive(newSpeed) {if   (car.pessengers.length <= 0) {car.speed = 0}
									  else {if   (newSpeed  <= car.maxSpeed)
									             {car.speed  = newSpeed}
                                            else {car.speed  = car.maxSpeed}
										   }
console.log('this drive ',this);                                     
									 } 
module.exports = car;

