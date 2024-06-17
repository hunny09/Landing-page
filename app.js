"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("test function running fine hello");
    };
    return App;
}());
var a = new App();
a.test();
//Types:
//Implicit way 
var b = 10;
console.log(b);
//Explicit way
var x = "Hunny";
console.warn(x);
var n = 10.10;
console.log(n);
