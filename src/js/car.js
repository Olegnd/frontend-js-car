'use strict';
// code Olegnd
var car = {color:'white',dours:4,speed:0,defaultSpeed:60,
           maxSpeed:100,seats:4};
car.pessengers = [];
car.put = function put() {if (this.pessengers.length < car.seats)
                             {this.pessengers.push(true)}
console.log('this.pessenger = ' + this.pessengers);}

car.land = function land() {if (this.pessengers.length > 0)
                               {this.pessengers.shift()}
console.log('this.pessenger = ' + this.pessengers);}

car.drive = function drive(newSpeed) {if (this.pessengers.length <= 0) {this.speed = 0}
						              else {if (newSpeed  <= this.maxSpeed)
								               {this.speed  = newSpeed}
                                            else {this.speed  = this.maxSpeed}}
console.log('this.speed = ' + this.speed);}
module.exports = car;



