/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

*/
//Understand
  //function named longWords
    //accepts array (words)
  //return an NEW array containing only the words that are longer than 5 characters

//Plan
  //let final = [];
  //forEach loop
    //
    //if currentWord.length > 5{}
      //final.push(currentWord)

function longWords(words){

let final = words.filter(function(currentWord){
    return currentWord.length > 5;
  });
  return final;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
