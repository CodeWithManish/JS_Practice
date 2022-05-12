// console.log("Hello Manish");
// //console.clear()
// console.warn("This is the Warning!")
// //console.alert("This is the alert message!")
// console.error("Error mmessages!")

// variable

var a = 23;
var b = 22;
//console.log(a + b)

// Data type 
// Number

var num1 = 44;
var num2 = 12.5;

// String
var str1 = " This is Manish";
var str2 = 'This is the string';

// Object
var marks = {
    ravi: 34,
    shubham: 78,
    raju: 99.991
}

//console.log(marks);

// Boolean
var x = false;
var y = true;
// console.log(y, x);

//Undefined
var und = undefined;
var und;
//console.log(undefined);
//console.log(und);

//null
var value = null;
// console.log(value);

/*
At a veery high, there are two data types in javascript
1. Primitive data types: Undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and objects
*/

var arr = [1, 2, 3, 4, 5, 'rohan', 'manish']
// console.log(arr);
// console.log(arr[5]);


//Operators in javascript
//Arithmetic
var a1 = 100;
var b1 = 10;
// console.log("the value of a1+b1", a1+b1);
// console.log("the value of a1-b1", a1-b1);
// console.log("the value of a1*b1", a1*b1);
// console.log("the value of a1/b1", a1/b1);

//Assignment 
var c1 = b1;
c1 += 2; //c1 = c1+2;
c1 -= 2;
c1 *= 2;
c1 /= 2;
// console.log(c1);

//comparison

var m = 34;
var n = 22;
// console.log(m==n);
// console.log(m>=n);
// console.log(m<=n);
// console.log(m<n);
// console.log(m>n);

//Logical And operator

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or operator
/*console.log(true || false);
console.log(false || true);
console.log(false || false);*/

//Logical not operator
// console.log(!false);
// console.log(!true);

//Function: A JavaScript function is a block of code designed to perform a particular task.
//Dry = do not repeat yourself

// function avg(a, b){
//     c = (a+b)/2;
//     return c;
// }
// output1 = avg(4, 6);
// output2 = avg(14, 16);
// console.log(output1, output2);

//Conditional statement
// age = 25
//     if ( age > 18) {
//        console.log("Good day");
//     }

//if- else

// greeting = 25
// if (greeting < 18) {
//     console.log(greeting = "Good day");
//   } else {
//     console.log(greeting = "good eveing");;
//   }

// ladder if else
// time = 12
// if (time < 10) {
//   console.log(greeting = "Good morning");
//   } else if (time < 20) {
//     console.log(greeting = "Good day");
//   } else {
//     console.log(greeting = "Good evening");
//   }

//loop 

var ele = [1, 2, 3, 4, 5, 6, 7]
// console.log(ele)
// for(var i=0; i<ele.length; i++){
//     console.log(ele[i])
// }

/*ele.forEach(function(element)
{
console.log(element)
})*/

let j = 0;
// while(j<ele.length)
// {
//     console.log(ele[j])
//     j++;
// }

//do - while
// do{
//     console.log(ele[j])
//     j++;
// }while(j<ele.length);

// using break and continue 


 var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2){
//         // break;
//         continue;//position 2 skip
//     }
//         console.log(arr[i])
    
// }

// Array

let myArr = ["fan","chair","camera", 35, null, true]
//Array methods
// console.log(myArr.length);
 //myArr.pop();
// myArr.push("Manish")
//myArr.shift()

//  const newLen = myArr.unshift("Asshish")
//  console.log(newLen);
//  console.log(myArr);

//String Methods in Javascript

//let myString = "Hello everyone, how are you??";
// console.log(myString.length);
// console.log(myString.indexOf("are"));
// console.log(myString.lastIndexOf("you"));
// console.log(myString.slice(1, 7));

// d = myString.replace("Hello","Hi");
// console.log(d, myString);
// console.log(d);

const values =['m','n','o'];
const newValues = values.slice(1,2);
console.log(newValues);
