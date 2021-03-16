/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples:

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
*/

//Understand
  //function named tripler
    //accepts array (nums)
  //return a NEW array containing 3 times EVERY number of the original array

//Plan
  //let final = []
  //forEach loop - accepts num
    //let multipliedNum = num * 3;
    //final.push(multipledNum)
  //return final

function tripler(nums){
let final = [];
nums.forEach(function(num){
    let multipliedNum = num * 3;
    final.push(multipliedNum);
  });
  return final;
}
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = tripler;
} catch (e) {
  module.exports = null;
}
