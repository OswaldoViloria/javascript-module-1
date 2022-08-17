function ageMentors(age){
    const thisYear = 2022
    const totalAge = thisYear - age
    return totalAge
}
const mentor1 = "DANIEL";
const mentor2 = "IRINA";
const mentor3 = "MIMI";
const mentor4 = "ROB";
const mentor5 = "YOHANNES";

console.log(`HOLA ${mentor1} UN PLACER CONOCERTE`);
console.log(`HOLA ${mentor2} UN PLACER CONOCERTE`);
console.log(`HOLA ${mentor3} UN PLACER CONOCERTE`);
console.log(`HOLA ${mentor4} UN PLACER CONOCERTE`);
console.log(`HOLA ${mentor5} UN PLACER CONOCERTE`);
// Edad de los mentores 

console.log(`Daniel born in the year: ${ageMentors(25)}`);
console.log(`Irina born in the year: ${ageMentors(23)}`);
console.log(`Mimi born in the year: ${ageMentors(21)}`);
console.log(`Rob born in the year: ${ageMentors(28)}`);
console.log(`Yohannes born in the year: ${ageMentors(26)}`);
