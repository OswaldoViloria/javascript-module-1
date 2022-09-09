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

birthYears.forEach((year) => {
    const age = allYear - year
    // const ages = allYear - birthYears 
    if (age >= 17) {
        return console.log(age + " You can drive");
    } else {
        return console.log(age + " You Can't drive yet");
    }
})
