'use strict';
// code Olegnd

var car = {
    color: 'white',
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],

    put: function () {
       if (this.passengers.length <= 0) {
           this.passengers.push(true); 
           this.speed = this.defaultSpeed;
       }
       else {
           if (this.passengers.length < this.seats) {
               this.passengers.push(true);
           }
       }
 },

    land: function () {
       if (this.passengers.length >= 2) {
           this.passengers.shift();
       }
       else {
           this.passengers.shift(); this.speed = 0;
       }
 },

    drive: function (newSpeed) {
       if (this.passengers.length === 0) {
           this.speed = 0;
       }
       else {
           if (newSpeed  <= this.maxSpeed) {
               this.speed  = newSpeed;
           }
           else {
               this.speed  = this.maxSpeed}
           }
           if (newSpeed === undefined && this.passengers.length ===0) {
               this.speed = 0;
           }
           else {
               if (newSpeed === undefined) {
                   this.speed = this.defaultSpeed;
           } 
       }
 }
}
module.exports = car;





