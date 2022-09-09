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