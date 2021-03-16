/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/
//Understand
  //function named avgVal
    //accepts an array (arr)
  //returns the AVERAGE of all values in the array
  //if the array is EMPTY return NULL

//Plan
  //for loop that runs while i < arr.length
    //sum += arr[i]
  //let avg = sum / arr.length
  //return avg

function avgVal(arr){
  let sum = 0;
  if(arr.length !== 0){
  arr.forEach(function(num){
    sum += num;
  });

  let avg = sum / arr.length;
  return avg;
}
return null;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
