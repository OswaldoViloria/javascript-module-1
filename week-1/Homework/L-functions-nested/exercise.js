const mentor1 = "Daniel"
const mentor2 = "Irina"
const mentor3 = "Mimi"
const mentor4 = "Rob"
const mentor5 = "Yohannes"
const saludoEnMayusculas = "hello my name is"

function nombresEnMayusculas(mentor) {
    return mentor.toUpperCase()
}
function greeting(a){
    return a.toUpperCase()
}
console.log(`${greeting(saludoEnMayusculas)} ${nombresEnMayusculas(mentor1)}`)
console.log(`${greeting(saludoEnMayusculas)} ${nombresEnMayusculas(mentor2)}`)
console.log(`${greeting(saludoEnMayusculas)} ${nombresEnMayusculas(mentor3)}`)
console.log(`${greeting(saludoEnMayusculas)} ${nombresEnMayusculas(mentor4)}`)
console.log(`${greeting(saludoEnMayusculas)} ${nombresEnMayusculas(mentor5)}`)
