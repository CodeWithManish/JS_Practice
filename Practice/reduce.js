//reduce(): The reduce() method executes a reducer function for array element, it's returns a single value

// const number = [1, -1, 2, 3];
// let sum = 0;
// for(let n of number)
// sum += n;
// console.log(sum);
// number.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue;
// }, 0);

// -------------------
// const number = [1, -1, 2, 3];
// const sum = number.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);

//----------------

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
