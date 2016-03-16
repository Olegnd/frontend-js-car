'use strict';
// code Olegnd

var car = {color:'white',dours:4,speed:0,defaultSpeed:60,
           maxSpeed:100,seats:4};
car.passengers = [];


car.put = function put() {if (this.passengers.length <= 0)
                             {this.passengers.push(true); 
                              this.speed = this.defaultSpeed}
                          else {if (this.passengers.length < this.seats) 
                                   {this.passengers.push(true)}
                                else{}
                               }
//console.log('this.pessenger = ' + this.passengers);
//console.log('this.speed = ' + this.speed);
//console.log('____________________________________________');
                         }



car.land = function land() {if (this.passengers.length >= 2)
                               {this.passengers.shift()}
                            else {this.passengers.shift(); car.speed = 0;}
                            
//console.log('this.pessenger = ' + this.passengers);
//console.log('this.speed = ' + this.speed);
//console.log('____________________________________________');
                           }

car.drive = function drive(newSpeed) 
                          {if (this.passengers.length === 0) {this.speed = 0}
                           else {if (newSpeed  <= this.maxSpeed)
                                    {this.speed  = newSpeed}
                                 else {this.speed  = this.maxSpeed}}
                           if (newSpeed === undefined && this.passengers.length ===0) 
                               {this.speed = 0}
                           else {if (newSpeed === undefined) {this.speed = this.defaultSpeed}
                                }
//console.log('newSpeed       = ' + newSpeed);
//console.log('this.pessenger = ' + this.passengers);
//console.log('this.speed     = ' + this.speed);
//console.log('____________________________________________');
                          }

module.exports = car;

//&& 



