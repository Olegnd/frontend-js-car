!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.register("2", [], function($__export) {
  "use strict";
  var arrPessengers,
      car;
  function put() {
    if (arrPessengers.length >= car.seats) {} else {
      arrPessengers.push(true);
    }
  }
  function land() {
    if (arrPessengers.length > 0) {
      arrPessengers.shift();
    }
  }
  function drive(newSpeed) {
    if (newSpeed <= car.maxSpeed & arrPessengers.length > 0) {
      car.speed = newSpeed;
    } else {
      if (arrPessengers.length > 0) {
        car.speed = car.maxSpeed;
      }
    }
  }
  return {
    setters: [],
    execute: function() {
      arrPessengers = [];
      car = {
        color: 'white',
        dours: 4,
        speed: 0,
        defaultSpeed: 60,
        maxSpeed: 100,
        seats: 4,
        passengers: arrPessengers
      };
      if (arrPessengers.length === 0) {
        car.speed = 0;
      }
      $__export("car", car), $__export("put", put), $__export("land", land), $__export("drive", drive);
    }
  };
});

$__System.registerDynamic("1", ["2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var car = $__require('2');
  describe('Module "car"', function() {
    beforeEach(function() {
      spyOn(car, 'drive').and.callThrough();
      spyOn(car, 'put').and.callThrough();
      spyOn(car, 'land').and.callThrough();
    });
    describe('has a correct interface with a property', function() {
      it('"color" that is a String', function() {
        expect(car.color).toEqual(jasmine.any(String));
      });
      it('"dours" that is a Number', function() {
        expect(car.dours).toEqual(jasmine.any(Number));
      });
      it('"passengers" that is a String', function() {
        expect(car.passengers).toEqual(jasmine.any(Array));
      });
      it('"seats" that is a Number', function() {
        expect(car.seats).toEqual(jasmine.any(Number));
      });
      it('"maxSpeed" that is a Number', function() {
        expect(car.maxSpeed).toEqual(jasmine.any(Number));
      });
      it('"defaultSpeed" that is a Number', function() {
        expect(car.defaultSpeed).toEqual(jasmine.any(Number));
      });
      it('"speed" that is a Number', function() {
        expect(car.speed).toEqual(jasmine.any(Number));
      });
      it('"drive" that is a Function', function() {
        expect(car.drive).toEqual(jasmine.any(Function));
      });
      it('"put" that is a Function', function() {
        expect(car.put).toEqual(jasmine.any(Function));
      });
      it('"land" that is a Function', function() {
        expect(car.land).toEqual(jasmine.any(Function));
      });
    });
    describe('by default has a property', function() {
      it('"color" equal "white"', function() {
        expect(car.color).toEqual("white");
      });
      it('"dours" equal 4', function() {
        expect(car.dours).toEqual(4);
      });
      it('"passengers" that is empty', function() {
        expect(car.passengers).toEqual([]);
      });
      it('"seats" equal 4', function() {
        expect(car.seats).toEqual(4);
      });
      it('"maxSpeed" equal 100', function() {
        expect(car.maxSpeed).toEqual(100);
      });
      it('"defaultSpeed" equal 60', function() {
        expect(car.defaultSpeed).toEqual(60);
      });
      it('"speed" equal 0', function() {
        expect(car.speed).toEqual(0);
      });
    });
    describe('pessangers', function() {
      afterEach(function() {
        car.speed = 0;
        car.seats = 8;
        car.maxSpeed = 200;
        car.defaultSpeed = 150;
        car.passengers.length = 0;
      });
      it('can be put', function() {
        car.put();
        car.put();
        expect(car.passengers.length).toEqual(2);
      });
      it('can be landed', function() {
        car.put();
        car.land();
        expect(car.passengers.length).toEqual(0);
      });
      it('can\'t be put more than seats', function() {
        var times = car.seats * 2;
        while (times--) {
          car.put();
        }
        expect(car.passengers.length).toEqual(car.seats);
      });
    });
    describe('when drived', function() {
      afterEach(function() {
        car.speed = 0;
        car.seats = 8;
        car.maxSpeed = 200;
        car.defaultSpeed = 150;
        car.passengers.length = 0;
      });
      it('can\'t drive without a driver', function() {
        car.drive();
        expect(car.speed).toEqual(0);
      });
      it('can drive with a driver', function() {
        car.put();
        car.drive();
        expect(car.speed).toBeGreaterThan(0);
      });
      it('changes speed', function() {
        var speed = 85;
        car.put();
        car.drive(speed);
        expect(car.speed).toEqual(speed);
      });
      it('doesn\'t change speed without a driver', function() {
        var speed = 85;
        car.drive(speed);
        expect(car.speed).toEqual(0);
      });
      it('has a default speed', function() {
        car.put();
        car.drive();
        expect(car.speed).toEqual(car.defaultSpeed);
      });
      it('is limited to max speed', function() {
        var speed = car.maxSpeed + 85;
        car.put();
        car.drive(speed);
        expect(car.speed).toEqual(car.maxSpeed);
      });
    });
  });
  return module.exports;
});

})
(function(factory) {
  factory();
});