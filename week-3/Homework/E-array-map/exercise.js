// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const multipleNumber = numbers.map( numbers => {
    return numbers * 100
})
console.log(multipleNumber);

const multipleNumber2 = numbers.map(function dobleNumber(number) {
    return number * 100 
})
console.log(multipleNumber2);

const multipleNumber3 = numbers.map(function (number) {
    return number * 100 
})
console.log(multipleNumber3);

const multipleNumber4 = numbers.map(number => number * 100)
console.log(multipleNumber4);