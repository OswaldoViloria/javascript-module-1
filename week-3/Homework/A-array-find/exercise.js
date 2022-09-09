/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = names.find(names => names.length > 7 && names.charAt(0) === "A");

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
