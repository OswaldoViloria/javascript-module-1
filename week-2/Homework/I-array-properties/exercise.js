/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(arr) {
  if (arr.length === 0) {
    return "true"
  } else {
    return "false"
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const numbers = [1, 2, 3];
const names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
