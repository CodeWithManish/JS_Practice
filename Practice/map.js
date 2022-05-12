//Map(): create a new array from calling a function for every arrray element, calls a function once 
//for each Element

// let Arr = [11, 4, 9, 16]
// let b = Arr.map(test);
// console.log(b);
// function test(x){
//     return x*10;
// }

//----------------------

var Arr = [
    {fname : "Rahul", lname:"prasad"},
    {fname : "Nilesh", lname:"Kumar"}
];
var c= Arr.map(test);
console.log(c);
function test(x){
    return x.fname +" "+x.lname;

}