const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let newDate = new Date()
const allYear = newDate.getFullYear()

function calculateAge(birthYears) {
    return allYear - birthYears
}

const ages = []

birthYears.forEach((birthYears) => {
    ages.push(calculateAge(birthYears))
})

console.log(ages)

// llamando funcion 
const drive = ages.filter(function(age){
    return age > 17
}) 
// function flecha
const drive2 = ages.filter((age) => {
    return age > 17 
}) 
// function ageMayora17(age){
//     return age > 17
// }
console.log("drive1",drive);
console.log("drive2",drive2);