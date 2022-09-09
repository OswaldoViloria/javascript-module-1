const namesStudentsFirts = [
  "Gabriel",
  "Natalia",
  "Graciela",
  "Linda",
  "Lina",
  "Laura",
  "Andrea",
  "Fernanda",
  "Luis",
  "Lixi",
  "Wiston",
  "Oswaldo",
  "Karelys",
];
const namesStudentsSecond = [
    "Alberto",
    "Jose",
    "Francisco",
    "Daniel",
    "Felipe",
    "Genesis"
]
const allStudents = namesStudentsFirts.concat(namesStudentsSecond)
console.log(allStudents.sort());

const name = (returnName, someoneStudent) => {
    if (someoneStudent.includes(returnName)) {
        return returnName + " is at the class with " + someoneStudent
    } else {
        return returnName + " is not at the class with "  + someoneStudent
    }
}
console.log(name("Rob ", allStudents));