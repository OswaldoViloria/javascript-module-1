function currentYear(){
    const date = new Date()
    return date.getFullYear()
}

function ageMentors(age){
    const totalAge = currentYear() - age
    return totalAge
}

console.log(`Daniel born in the year: ${ageMentors(25)}`);
console.log(`Irina born in the year: ${ageMentors(23)}`);
console.log(`Mimi born in the year: ${ageMentors(21)}`);
console.log(`Rob born in the year: ${ageMentors(28)}`);
console.log(`Yohannes born in the year: ${ageMentors(26)}`);
