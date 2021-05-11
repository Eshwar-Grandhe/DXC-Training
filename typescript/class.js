var Human = /** @class */ (function () {
    function Human() {
        this.str = "pac";
        this.str2 = "man";
    }
    return Human;
}());
var normal_man = new Human();
console.log(normal_man.str);
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
