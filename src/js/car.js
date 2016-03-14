'use strict';
// code Olegnd

var pessengers = [];

var car        = {color:'white',dours:4,speed:0,defaultSpeed:60,
                  maxSpeed:100,seats:4,pessengers:pessengers,
				 put:undefined,land:undefined,drive:undefined};

if (pessengers.length === 0) {car.speed = 0}
 
car.put = function put() {if (pessengers.length < car.seats){
                    pessengers.push(true);
                 }
}

car.land = function land() {if (pessengers.length > 0) {
                    pessengers.shift();
                 }
} 

car.drive = function drive(newSpeed) {if (pessengers.length <= 0) {car.speed = 0}
									  else {
	                                  if (newSpeed <= car.maxSpeed)
                                          {car.speed = newSpeed;
                                          }
                                      else { car.speed = car.maxSpeed
                                           }
									  }
                                
} 
module.exports = car;

