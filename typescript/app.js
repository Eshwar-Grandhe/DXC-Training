/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" /> 
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Triangle());
drawAllShapes(new Drawing.Circle());
// example for private instance
// class Human{
// str:string = "pac"
// private str2:string = "man"
//  } 
// var normal_man = new Human() 
// console.log(normal_man.str)
// console.log(normal_man.str2)
// example for instance of
// class Human{ } 
// var normal_man = new Human() 
// class Superman extends Human{
// }
// var super_man = new Superman()
// var isSuperHuman  = super_man instanceof Superman
// console.log(" Am I a superman: " + isSuperHuman);
// overriding example
// class PrinterClass { 
//     doPrint():void {
//        console.log("doPrint() from Parent called…") 
//     } 
//  } 
//  class StringPrinter extends PrinterClass { 
//     doPrint():void { 
//     //    super.doPrint() 
//        console.log("doPrint() is printing a string…")
//     } 
//  } 
//  var obj = new StringPrinter() 
//  obj.doPrint()
// class Car {​​​​​​​​ 
//     //field 
//         engine:string; 
//     //constructor 
//     constructor(engine:string) {​​​​​​​​ 
//     this.engine = engine 
//         }​​​​​​​​  
//     //function 
//         disp():void {​​​​​​​​ 
//            console.log("Engine is  :   "+this.engine) 
//         }​​​​​​​​ 
//      }​​​​​​​​
//     //create an object 
//     var obj = new Car("petrol")
//     //access the field 
//     console.log("Reading attribute value Engine as :  "+obj.engine)  
//     //access the function
//     obj.disp()
