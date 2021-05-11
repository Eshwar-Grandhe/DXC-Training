// other example
// var names:string[] = new Array("Mary","Tom","Jack","Jill") 
// for(var i = 0;i<names.length;i++) { 
//    console.log(names[i]) 
// }
// array
// var alphas:string[]; 
// alphas = ["1","2","3","4"] 
// console.log(alphas[0]); 
// console.log(alphas[1]);
// Not a number NaN
// var month =0;
// if( month <=0 || month > 12)
// console.log(Number.NaN);
// else
// console.log("It's a month:"+month);
// some default values
// console.log("TypeScript Number Properties: "); 
// console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
// console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
// console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
// console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
// lambda function
// var foo = (x:number)=>10 + x 
// console.log(foo(100))
// another function example
// var foo = (x:number)=>{
//     x = 10 + x;
//     console.log(x)
// }
// foo(100)
// another example
// var f = (x)=>{
//     if(typeof x== "number")
//     console.log("It's is a number:"+x);
//     else if(typeof x== "string")
//     console.log("It's a string:"+x);
//     else
//     console.log("It's something else");
// }
// f(1);
// f(undefined);
// f("ABC");
// anynomous function with parameters
// var addReturn = function(a:number, b:number)
// {
//     return a+b;
// }
// console.log("ADDiton of two numbers:"+addReturn(1,2))
// anynomous function
// var HelloMsg = function()
// {
//     return "Hello World!";
// }
// console.log(HelloMsg())
// default functions kind of concept
// function calculate_discount(price:number,rate:number = 0.50) { 
//     var discount = price * rate; 
//     console.log("Discount Amount: ",discount); 
//  } 
//  calculate_discount(1000) 
//  calculate_discount(1000,0.30)
// adding numbers using variable number of arguments
// function add(...num:number[])
// {
//     var i =0;
//     var sum:number = 0;
//     for(i=0;i<num.length;i++)
//     sum+=num[i];
//     console.log("sum:"+sum);
// }
// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);
// function example
// function display(id:number, name:string, mail_id?:string)
// {
//     console.log("ID:",id);
//     console.log("Name:",name);
//     if( mail_id != undefined)
//     {
//         console.log("mail_id:"+mail_id);
//     }
// }
// display(101,"ABC");
// display(102,"XYZ","example@gmail.com");
// Example for while loop
// var i=0;
// while(i<=10)
// {
//     if(i%5==0)
//     {
//         console.log("We got a multiple of 5 \n coming out of the while loop");
//         break;
//     }
//     i++;
// }
// conditional operator
// var num:number = 1;
// console.log( (num >0) ? "positive" : "-ve") 
// type assertion similar to type casting
// var str = '1';
// var num = parseInt(str);
// var num1 = parseInt(str);
// console.log(num + num1);
// console.log(typeof (num));
// normal hello world 
// var message:string  = "Hello World!"
// var num1:number = 12
// var num2:number = 6
// var sum:number = num1 + num2
// var diff:number = num1 - num2
// console.log("sum is :"+sum);
// console.log("diff is :"+diff);
