//Filter(): method create a new Array filled with elements that pass a test provided by function

// const values = ['a', 'b', 'c', 'd']
// const set = values.filter(function(item){
//     return item > 'b';
// })
// console.log(set); // c, d

//-------------------------

// const ages = [32, 33, 16, 40];

//document.getElementById("demo").innerHTML = ages.filter(checkAdult);

/*const set =ages.filter(function checkAdult(age) {
  return age >= 18;
})
console.log(set); */

//---------------------

let arr = [50, 12, 19, 20]

console.log(arr);

let b = arr.filter(checkNumber);
console.log(b);
function checkNumber(arrs){
  return arrs >= 18;
}