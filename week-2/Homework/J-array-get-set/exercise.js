/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  const lastIndex = arr.length -1; 
  return arr[lastIndex]// complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const numbers = [1, 2, 3];
const names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));
/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
